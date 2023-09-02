<script setup lang="ts">
import { DirectionalLight } from "@babylonjs/core";
import { useLight } from "../../composables/useLight";
import { arr3ToVector3 } from "../../utils/dataConversion";
import { BabyuewLightComponent } from "../../data/injectionKeys";

const props = defineProps<{
  name?: string;
  direction: [number, number, number];
  intensity?: number;
}>();

const { getLight, onInit } = useLight((scene) => {
  const light = new DirectionalLight(
    props.name ?? "light",
    arr3ToVector3(props.direction),
    scene,
  );

  if (props.intensity) {
    light.intensity = props.intensity;
  }

  return light;
});

defineExpose<BabyuewLightComponent>({ getLight, onInit });
</script>

<template>
  <slot></slot>
</template>
