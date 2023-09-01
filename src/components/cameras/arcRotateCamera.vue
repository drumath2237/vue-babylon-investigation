<script setup lang="ts">
import { BabyuewCameraComponent } from "../../data/injectionKeys";
import { useCamera } from "../../composables/useCamera";
import { ArcRotateCamera } from "@babylonjs/core";
import { arr3ToVector3 } from "../../utils/dataConversion";

const props = defineProps<{
  name?: string;
  alpha: number;
  beta: number;
  radius: number;
  target: [number, number, number];
}>();

const { getCamera, onInit } = useCamera(() => {
  const camera = new ArcRotateCamera(
    props.name ?? "arc rotated caera",
    props.alpha,
    props.beta,
    props.radius,
    arr3ToVector3(props.target),
  );
  camera.attachControl();
  camera.minZ = 0.01;
  camera.wheelPrecision = 100 / props.radius;

  return camera;
});

defineExpose<BabyuewCameraComponent>({ onInit, getCamera });
</script>

<template>
  <slot></slot>
</template>
