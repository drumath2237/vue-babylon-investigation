<script setup lang="ts">
import { DirectionalLight, Vector3 } from "@babylonjs/core";
import { PropType } from "vue";
import { useLight } from "../../composables/useLight";

const props = defineProps({
  name: String,
  direction: {
    type: Object as PropType<Vector3>,
    default: Vector3.Zero(),
    required: true,
  },
  intensity: {
    type: Number,
    default: 1,
    required: false,
  },
});

const { light, onInit } = useLight((scene) => {
  const light = new DirectionalLight(
    props.name ?? "light",
    props.direction,
    scene,
  );
  light.intensity = props.intensity;

  return light;
});

defineExpose({ light, onInit });
</script>

<template>
  <slot></slot>
</template>
