<script setup lang="ts">
import { inject, watch } from "vue";
import { BabylonSceneInjectionKey } from "./babylonScene.vue";
import { MeshBuilder, Vector3 } from "@babylonjs/core";

const props = defineProps({
  position: Array<number>,
  size: Number,
});

const main = () => {
  const babylonScene = inject(BabylonSceneInjectionKey);
  if (!babylonScene) {
    return;
  }

  watch(
    () => babylonScene.isInit,
    (isInit) => {
      if (!isInit) {
        return;
      }

      const box = MeshBuilder.CreateBox(
        "box",
        { size: props.size },
        babylonScene.scene,
      );
      const position = props.position;

      if (position) {
        box.position = new Vector3(position[0], position[1], position[2]);
      }
    },
  );
};

main();
</script>

<template>
  <slot />
</template>
