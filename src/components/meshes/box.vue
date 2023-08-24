<script setup lang="ts">
import { PropType, watch } from "vue";
import { useMesh } from "../../composables/useMesh";
import { MeshBuilder, Vector3 } from "@babylonjs/core";
import { xyzToVector3 } from "../../utils/dataConversion";

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

const { onInit, getMesh } = useMesh(() => {
  const box = MeshBuilder.CreateBox(props.name, { size: props.size });

  const position = props.position;
  if (position) {
    box.position = new Vector3(position.x, position.y, position.z);
  }

  return box;
});

watch(props.position, (position) => {
  const mesh = getMesh();
  console.log(mesh);
  if (mesh) {
    mesh.position = xyzToVector3(position);
  }
});

defineExpose({ onInit });
</script>

<template>
  <slot></slot>
</template>
