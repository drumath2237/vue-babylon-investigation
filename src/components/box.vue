<script setup lang="ts">
import { onMounted, ref, useSlots } from "vue";
import { useBox } from "../composables/useBox";
import { Vector3 } from "@babylonjs/core";

type Prop = { position: [number, number, number] };

const pos = defineProps<Prop>();

onMounted(async () => {

  if (!pos) {
    return;
  }


  await new Promise(resolve => {
    setTimeout(resolve, 500)
  })

  useBox(ref(new Vector3(pos.position[0], pos.position[1], pos.position[2])));
});
</script>

<template>
  <slot />
  {{ useSlots }}
</template>
