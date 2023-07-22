<script lang="ts">
import { InjectionKey, ref, defineComponent, Ref } from "vue";
import { Engine, Scene } from "@babylonjs/core";

export interface IBabylonScene {
  engine: Engine,
  scene: Scene,
  isInit: Ref<boolean>
}

export const BabylonSceneInjectionKey: InjectionKey<IBabylonScene> = Symbol("key-babylon-scene");

export default defineComponent({
  name: "BabylonScene",
  props: {
    antialias: Boolean
  },

  setup() {
    const isInit = ref(false);
    let scene: Scene | undefined;
    let engine: Engine | undefined;
    const renderCanvas = ref<HTMLCanvasElement>();

    return {
      engine,
      scene,
      isInit,
      renderCanvas
    }
  },

  mounted() {

    if (!this.renderCanvas) {
      return;
    }

    const engine = new Engine(this.renderCanvas, this.$props.antialias);
    const scene = new Scene(engine);

    scene.createDefaultCameraOrLight(true, true, true);
    scene.createDefaultEnvironment();

    engine.runRenderLoop(() => {
      scene.render();
    });

    window.addEventListener("resize", () => {
      engine.resize();
    });

    this.isInit = true;
    this.engine = engine;
    this.scene = scene;
  },

  provide() {
    return {
      [BabylonSceneInjectionKey as symbol]: this
    }
  }
})
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
