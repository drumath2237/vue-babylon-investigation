<script setup lang="ts">
import { MeshBuilder, Vector3 } from "@babylonjs/core";
import { useMesh } from "../../composables/useMesh";
import { PropType } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: false,
    default: "sphere",
  },
  diameter: {
    type: Number,
    required: true,
    default: 1,
  },
  position: {
    type: Object as PropType<{ x: number; y: number; z: number }>,
    required: false,
  },
});

const { onInit } = useMesh(() => {
  const sphere = MeshBuilder.CreateSphere(props.name, {
    diameter: props.diameter,
  });

  const position = props.position;
  if (!position) {
    return sphere;
  }

  const { x, y, z } = position;
  sphere.position = new Vector3(x, y, z);

  return sphere;
});

defineExpose({
  onInit,
});
</script>

<template>
  <slot></slot>
</template>
