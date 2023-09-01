<script setup lang="ts">
import { StandardMaterial } from "@babylonjs/core";
import { useMaterial } from "../../composables/useMaterial";
import { arr3ToColor3 } from "../../utils/dataConversion";

const props = defineProps<{
  name?: string;
  color?: [number, number, number];
}>();

const { onInit, material } = useMaterial(() => {
  const standardMaterial = new StandardMaterial(
    props.name ?? "standard material",
  );

  if (props.color) {
    standardMaterial.diffuseColor = arr3ToColor3(props.color);
  }

  return standardMaterial;
});

defineExpose({ onInit, material });
</script>

<template>
  <slot></slot>
</template>
