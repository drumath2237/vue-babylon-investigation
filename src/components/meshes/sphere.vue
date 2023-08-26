<script setup lang="ts">
import { MeshBuilder } from "@babylonjs/core";
import { useMesh } from "../../composables/useMesh";
import { PropType, watch } from "vue";
import { xyzToVector3 } from "../../utils/dataConversion";

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
  position: Object as PropType<{ x: number; y: number; z: number }>,
});

const { onInit, getMesh } = useMesh(() => {
  const sphere = MeshBuilder.CreateSphere(props.name, {
    diameter: props.diameter,
  });

  const position = props.position;
  if (!position) {
    return sphere;
  }

  sphere.position = xyzToVector3(position);
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
    sphere.position = xyzToVector3(position);
  },
  {
    deep: true,
  },
);

defineExpose({ onInit, getMesh });
</script>

<template>
  <slot></slot>
</template>
