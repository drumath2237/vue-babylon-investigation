import { Color3, StandardMaterial } from "@babylonjs/core";
import { PropType, defineComponent, InjectionKey } from "vue";

export interface StandardMaterialInterface {
  material: StandardMaterial;
}

export const StandardMaterialInjectionKey: InjectionKey<StandardMaterialInterface> =
  Symbol("babyuew-standard-material-injection-key");

export default defineComponent({
  name: "StandardMaterial",

  props: {
    diffuseColor: {
      type: Object as PropType<Color3>,
      required: true,
    },
  },

  setup(props) {
    const material = new StandardMaterial("standard material");

    // eslint-disable-next-line vue/no-setup-props-destructure
    material.diffuseColor = props.diffuseColor;

    return {
      material,
    };
  },

  render() {
    return this.$slots.define ? this.$slots.define() : [];
  },
});
