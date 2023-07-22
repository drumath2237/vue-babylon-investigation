import { PropType, defineComponent, inject, watch } from "vue";
import { BabylonSceneInjectionKey } from "./babylonScene.vue";
import { MeshBuilder, Vector3 } from "@babylonjs/core";

interface IVector3 {
  x: number;
  y: number;
  z: number;
}

export default defineComponent({
  name: "Box",
  props: {
    position: {
      type: Object as PropType<IVector3>,
      default: () => ({ x: 0, y: 0, z: 0 }),
    },
    size: Number,
  },

  setup(props) {
    const babylonScene = inject(BabylonSceneInjectionKey);
    if (!babylonScene) {
      return;
    }

    watch(
      () => babylonScene.isInit,
      (isInit) => {
        if (!isInit) {
          return;
        }

        const box = MeshBuilder.CreateBox(
          "box",
          { size: props.size },
          babylonScene.scene,
        );

        box.position = new Vector3(
          props.position.x,
          props.position.y,
          props.position.z,
        );
      },
    );
  },

  render() {
    return this.$slots.default ? this.$slots.default() : [];
  },
});
