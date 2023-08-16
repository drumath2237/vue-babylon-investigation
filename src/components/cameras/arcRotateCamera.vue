<script setup lang="ts">
import { PropType } from "vue";
import { BabyuewCameraComponent } from "../../data/injectionKeys";
import { useCamera } from "../../composables/useCamera";
import { ArcRotateCamera, Vector3 } from "@babylonjs/core";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  alpha: {
    type: Number,
    required: true,
  },
  beta: {
    type: Number,
    required: true,
  },
  radius: {
    type: Number,
    required: true,
  },
  target: {
    type: Object as PropType<{ x: number; y: number; z: number }>,
    required: true,
  },
});

const { camera, onInit } = useCamera(() => {
  const camera = new ArcRotateCamera(
    props.name,
    props.alpha,
    props.beta,
    props.radius,
    new Vector3(props.target.x, props.target.y, props.target.z),
  );
  camera.attachControl();
  camera.minZ = 0.01;
  camera.wheelPrecision = 100 / props.radius;

  return camera;
});

defineExpose<BabyuewCameraComponent>({ onInit, camera });
</script>

<template>
  <slot></slot>
</template>
