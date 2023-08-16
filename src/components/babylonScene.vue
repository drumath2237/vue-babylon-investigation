<script lang="ts">
import { ref, defineComponent } from "vue";
import { Engine, Scene } from "@babylonjs/core";
import { EventSystem } from "../utils/eventSystem";
import { babyuewSceneInjectionKey } from "../data/injectionKeys";

export default defineComponent({
  name: "BabylonScene",
  props: {
    antialias: {
      type: Boolean,
      default: false,
    },
  },

  setup() {
    let scene: Scene | undefined;
    let engine: Engine | undefined;
    const renderCanvas = ref<HTMLCanvasElement>();
    const onInit = new EventSystem<{
      scene?: Scene;
      engine?: Engine;
    }>();
    return {
      engine,
      scene,
      renderCanvas,
      onInit,
    };
  },

  mounted() {
    if (!this.renderCanvas) {
      return;
    }

    const engine = new Engine(this.renderCanvas, this.$props.antialias);
    const scene = new Scene(engine);

    scene.createDefaultEnvironment();

    engine.runRenderLoop(() => {
      scene.render();
    });

    window.addEventListener("resize", () => {
      engine.resize();
    });

    this.engine = engine;
    this.scene = scene;
    this.onInit.notify({ scene, engine });
  },

  provide() {
    return {
      [babyuewSceneInjectionKey as symbol]: this,
    };
  },
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
