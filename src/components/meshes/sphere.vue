<script setup lang="ts">
import { MeshBuilder } from "@babylonjs/core";
import { useMesh } from "../../composables/useMesh";
import { watch } from "vue";
import { arr3ToVector3 } from "../../utils/dataConversion";
import { BabyuewMeshComponent } from "../../data/injectionKeys";

const props = defineProps<{
  name?: string;
  diameter: number;
  position?: [number, number, number];
}>();

const { onInit, getMesh } = useMesh(() => {
  const sphere = MeshBuilder.CreateSphere(props.name ?? "sphere", {
    diameter: props.diameter,
  });

  const position = props.position;
  if (!position) {
    return sphere;
  }

  sphere.position = arr3ToVector3(position);
  return sphere;
});

watch(
  () => props.position,
  (position) => {
    if (!position) {
      return;
    }

    const sphere = getMesh();
    if (!sphere) {
      return;
    }
    sphere.position = arr3ToVector3(position);
  },
  {
    deep: true,
  },
);

defineExpose<BabyuewMeshComponent>({ onInit, getMesh });
</script>

<template>
  <slot></slot>
</template>
