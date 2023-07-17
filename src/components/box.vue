<script setup lang="ts">
import { inject, onMounted, ref } from "vue";
import { useBox } from "../composables/useBox";
import { Scene, Vector3 } from "@babylonjs/core";


const pos = defineProps({
  position: [Number, Number, Number]
});

const scene = inject("BabylonScene") as Scene;

onMounted(async () => {

  if (!pos) {
    return;
  }

  await new Promise(resolve => {
    setTimeout(resolve, 3000)
  })


  console.log(scene);

  useBox(ref(new Vector3()), scene);
});
</script>

<template></template>
