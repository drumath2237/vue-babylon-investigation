<script setup lang="ts">
import { PropType } from "vue";
import { useMesh } from "../composables/useMesh";
import { MeshBuilder, Vector3 } from "@babylonjs/core";

const props = defineProps({
  name: {
    type: String,
    required: false,
    default: () => "box",
  },
  position: {
    type: Object as PropType<{ x: number; y: number; z: number }>,
    default: () => ({ x: 0, y: 0, z: 0 }),
  },
  size: Number,
});

const { onInit } = useMesh(() => {
  const box = MeshBuilder.CreateBox(props.name, { size: props.size });

  const position = props.position;
  if (position) {
    box.position = new Vector3(position.x, position.y, position.z);
  }

  return box;
});

defineExpose({ onInit });
</script>

<template>
  <slot></slot>
</template>
