import { Color3, Material, StandardMaterial } from "@babylonjs/core";
import { PropType, defineComponent, InjectionKey, inject } from "vue";
import { BoxInjectionKey } from "./box";
import { EventSystem } from "../utils/eventSystem";

export interface StandardMaterialInterface {
  onInit: EventSystem<Material>;
}

export const StandardMaterialInjectionKey: InjectionKey<StandardMaterialInterface> =
  Symbol("babyuew-standard-material-injection-key");

interface IColor {
  r: number;
  g: number;
  b: number;
}

export default defineComponent({
  name: "StandardMaterial",

  props: {
    color: {
      type: Object as PropType<IColor>,
      required: true,
    },
  },

  setup() {
    const onInit = new EventSystem<Material>();

    return {
      onInit,
    };
  },

  mounted() {
    const injectedBox = inject(BoxInjectionKey);
    if (!injectedBox) {
      return;
    }

    injectedBox.onInit.addListener(({ detail }) => {
      const material = new StandardMaterial("standard material");
      material.diffuseColor = new Color3(
        this.$props.color.r,
        this.$props.color.g,
        this.$props.color.b,
      );

      detail.material = material;

      this.onInit.notify(material);
    });
  },

  render() {
    return this.$slots.define ? this.$slots.define() : [];
  },
});
