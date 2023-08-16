<script setup lang="ts">
import { Color3, StandardMaterial } from "@babylonjs/core";
import { useMaterial } from "../../composables/useMaterial";
import { PropType } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: false,
    default: () => "standard material",
  },
  color: {
    type: Object as PropType<{ r: number; g: number; b: number }>,
    required: true,
  },
});

const { onInit, material } = useMaterial(() => {
  const standardMaterial = new StandardMaterial(props.name);
  standardMaterial.diffuseColor = new Color3(
    props.color.r,
    props.color.g,
    props.color.b,
  );
  return standardMaterial;
});

defineExpose({ onInit, material });
</script>

<template>
  <slot></slot>
</template>
