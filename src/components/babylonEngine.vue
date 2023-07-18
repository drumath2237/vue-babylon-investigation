<script setup lang="ts">
import { onMounted, provide, ref } from "vue";
import { Engine, Scene } from "@babylonjs/core";

const renderCanvas = ref<HTMLCanvasElement>();
provide("BabylonScene", 1);


const childRef = ref();

onMounted(() => {
  if (!renderCanvas.value) {
    console.log("no canvas");

    return;
  }

  console.log(childRef)

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
  <slot ref="childRef" />
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
