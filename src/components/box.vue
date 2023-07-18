<script setup lang="ts">
import { ref } from "vue";
import { useBox } from "../composables/useBox";
import { Scene, Vector3 } from "@babylonjs/core";

type Prop = { position: [number, number, number] };

const props = defineProps<Prop>();

const onSceneInit = (scene: Scene) => {
  useBox(ref(new Vector3(props.position[0], props.position[1], props.position[2])), scene);
}

defineExpose({
  onSceneInit
});
</script>

<template>
  <slot />
</template>
