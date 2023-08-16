<script setup lang="ts">
import { DirectionalLight } from "@babylonjs/core";
import { PropType } from "vue";
import { useLight } from "../../composables/useLight";
import { arr3ToVector3 } from "../../utils/dataConversion";

const props = defineProps({
  name: String,
  direction: {
    type: Object as PropType<[number, number, number]>,
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
    arr3ToVector3(props.direction),
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
