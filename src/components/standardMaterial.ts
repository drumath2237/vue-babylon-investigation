import { Color3, StandardMaterial } from "@babylonjs/core";
import { PropType, defineComponent, InjectionKey, inject } from "vue";
import { BoxInjectionKey } from "./box";

export interface StandardMaterialInterface {}

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

  setup(props) {
    const injectedBox = inject(BoxInjectionKey);

    if (!injectedBox) {
      return;
    }

    // eslint-disable-next-line vue/no-setup-props-destructure

    injectedBox.onInit.addListener(({ detail }) => {
      const material = new StandardMaterial("standard material");
      material.diffuseColor = new Color3(
        props.color.r,
        props.color.g,
        props.color.b,
      );

      detail.material = material;
    });
  },

  render() {
    return this.$slots.define ? this.$slots.define() : [];
  },
});
