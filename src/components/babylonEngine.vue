<script setup lang="ts">
import { onMounted, provide, ref, useSlots } from "vue";
import { Engine, Scene } from "@babylonjs/core";

const renderCanvas = ref<HTMLCanvasElement>();
provide("BabylonScene", 1);

const slots = useSlots();

(slots as any).default()[0].props = [0, 10, 0]

onMounted(() => {
  if (!renderCanvas.value) {
    console.log("no canvas");

    return;
  }

  const engine = new Engine(renderCanvas.value, true);
  const scene = new Scene(engine);


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
  <slot />
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
