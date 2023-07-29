import { InjectionKey, PropType, defineComponent, inject } from "vue";
import { EventSystem } from "../utils/eventSystem";
import { ArcRotateCamera, Vector3 } from "@babylonjs/core";
import { BabylonSceneInjectionKey } from "./babylonScene.vue";

export interface ArcRotateCameraInterface {
  onInit: EventSystem<ArcRotateCamera>;
}

const arcRoteateCameraInjectionKey: InjectionKey<ArcRotateCameraInterface> =
  Symbol("babyuew-arc-rotate-camera-injection-key");

export default defineComponent({
  name: "ArcRotateCamera",
  props: {
    name: {
      type: String,
      required: true,
    },
    alpha: {
      type: Number,
      required: true,
    },
    beta: {
      type: Number,
      required: true,
    },
    radius: {
      type: Number,
      required: true,
    },
    target: {
      type: Object as PropType<{ x: number; y: number; z: number }>,
      required: true,
    },
  },

  provide() {
    return {
      [arcRoteateCameraInjectionKey as symbol]: this,
    };
  },

  setup() {
    const onInit = new EventSystem<ArcRotateCamera>();

    return {
      onInit,
    };
  },

  mounted() {
    const babylonScene = inject(BabylonSceneInjectionKey);
    if (!babylonScene) {
      return;
    }

    console.log("Hellooo");

    babylonScene.onInit.addListener(({ detail }) => {
      const scene = detail.scene;
      const camera = new ArcRotateCamera(
        this.name,
        this.alpha,
        this.beta,
        this.radius,
        new Vector3(this.target.x, this.target.y, this.target.z),
        scene,
      );

      camera.attachControl();
      camera.minZ = 0.01;
      camera.wheelPrecision = 100 / this.radius;

      this.onInit.notify(camera);
    });
  },

  render() {
    return this.$slots.default ? this.$slots.default() : [];
  },
});
