<script setup lang="ts">
import { onMounted, provide, ref } from "vue";
import { Engine, Scene } from "@babylonjs/core";

import Box from "./box.vue"

const renderCanvas = ref<HTMLCanvasElement>();

onMounted(() => {
  if (!renderCanvas.value) {
    return;
  }

  const engine = new Engine(renderCanvas.value, true);
  const scene = new Scene(engine);

  provide("BabylonScene", scene);

  scene.createDefaultCameraOrLight(true, true, true);
  scene.createDefaultEnvironment();

  engine.runRenderLoop(() => {
    scene.render();
  });

  window.addEventListener("resize", () => {
    engine.resize();
  });
});
</script>

<template>
  <canvas id="renderCanvas" ref="renderCanvas"></canvas>
  <Box />
</template>

<style scoped lang="scss">
#renderCanvas {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  border: none !important;
  outline: none !important;
  display: block;
}
</style>
