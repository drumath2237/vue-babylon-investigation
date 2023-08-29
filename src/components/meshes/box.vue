<script setup lang="ts">
import { watch } from "vue";
import { useMesh } from "../../composables/useMesh";
import { MeshBuilder } from "@babylonjs/core";
import { arr3ToVector3 } from "../../utils/dataConversion";

const props = defineProps<{
  name?: string;
  position?: [number, number, number];
  size: number;
}>();

const { onInit, getMesh } = useMesh(() => {
  const box = MeshBuilder.CreateBox(props.name ?? "box", { size: props.size });

  if (props.position) {
    box.position = arr3ToVector3(props.position);
  }

  return box;
});

watch(
  () => props.position,
  (position) => {
    if (!position) {
      return;
    }

    const mesh = getMesh();
    if (mesh) {
      mesh.position = arr3ToVector3(position);
    }
  },
  { deep: true },
);

defineExpose({ onInit });
</script>

<template>
  <slot></slot>
</template>
