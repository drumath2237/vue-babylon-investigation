<script setup lang="ts">
import { onMounted, provide, ref } from "vue";
import { useBabyuewScene } from "../composables/useBabyuewScene";
import { Engine, Scene } from "@babylonjs/core";
import { EventSystem } from "../utils/eventSystem";
import { BabyuewSceneComponent, babyuewSceneInjectionKey } from "../data/injectionKeys";

const props = defineProps<{
  antialias: boolean;
}>();

const renderCanvas = ref<HTMLCanvasElement>();
let scene: Scene | null = null;
const getScene = () => scene;
const onInit = new EventSystem<Scene>();

provide(babyuewSceneInjectionKey, { getScene, onInit });

defineExpose<BabyuewSceneComponent>({
  getScene,
  onInit,
});

onMounted(() => {
  if (!renderCanvas.value) {
    return;
  }

  const engine = new Engine(renderCanvas.value, props.antialias);
  scene = new Scene(engine);

  engine.runRenderLoop(() => {
    scene?.render();
  });

  window.addEventListener("resize", () => {
    engine.resize();
  });

  const { initScene } = useBabyuewScene();

  initScene(scene);
  onInit.notify(scene);
});
</script>

<template>
  <canvas id="renderCanvas" ref="renderCanvas"></canvas>
  <slot></slot>
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
