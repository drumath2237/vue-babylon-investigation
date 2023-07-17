<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Engine, MeshBuilder, Scene, Vector3 } from "@babylonjs/core";

const renderCanvas = ref<HTMLCanvasElement>();

onMounted(() => {
  if (!renderCanvas.value) {
    return;
  }

  const engine = new Engine(renderCanvas.value, true);
  const scene = new Scene(engine);

  scene.createDefaultCameraOrLight(true, true, true);
  scene.createDefaultEnvironment();

  const box = MeshBuilder.CreateBox("box", { size: 0.1 });
  box.position = new Vector3(0, 0.05, 0);

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
