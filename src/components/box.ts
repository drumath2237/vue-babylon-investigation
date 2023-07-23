import { InjectionKey, PropType, defineComponent, inject } from "vue";
import { BabylonSceneInjectionKey } from "./babylonScene.vue";
import { Mesh, MeshBuilder, Vector3 } from "@babylonjs/core";
import { EventSystem } from "../utils/eventSystem";

interface IVector3 {
  x: number;
  y: number;
  z: number;
}

export interface BoxInterface {
  onInit: EventSystem<Mesh>;
}

export const BoxInjectionKey: InjectionKey<BoxInterface> =
  Symbol("box-injection-key");

export default defineComponent({
  name: "Box",
  props: {
    position: {
      type: Object as PropType<IVector3>,
      default: () => ({ x: 0, y: 0, z: 0 }),
    },
    size: Number,
  },

  provide() {
    return {
      [BoxInjectionKey as symbol]: this,
    };
  },

  setup() {
    const onInit = new EventSystem<Mesh>();

    return {
      onInit,
    };
  },

  mounted() {
    const babylonScene = inject(BabylonSceneInjectionKey);
    if (!babylonScene) {
      return;
    }

    babylonScene.onInit.addListener(() => {
      const box = MeshBuilder.CreateBox(
        "box",
        { size: this.$props.size },
        babylonScene.scene,
      );

      box.position = new Vector3(
        this.$props.position.x,
        this.$props.position.y,
        this.$props.position.z,
      );

      this.onInit.notify(box);
    });
  },

  render() {
    return this.$slots.default ? this.$slots.default() : [];
  },
});
