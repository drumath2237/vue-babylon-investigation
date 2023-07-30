<script setup lang="ts">
import BabylonScene from "./components/babylonScene.vue";
import Box from "./components/box";
import StandardMaterial from "./components/standardMaterial";
import ArcRotateCamera from "./components/arcRotateCamera";
import { reactive } from "vue";
import Sphere from "./components/sphere.vue";

const position = reactive({
  x: 0,
  y: 0.05,
  z: 0,
});
</script>

<template>
  <BabylonScene :antialias="true">
    <ArcRotateCamera
      :name="'camera'"
      :alpha="Math.PI / 3"
      :beta="Math.PI / 3"
      :radius="0.5"
      :target="position"
    ></ArcRotateCamera>
    <Box :position="position" :size="0.1">
      <StandardMaterial :color="{ r: 0, g: 1, b: 1 }"></StandardMaterial>
    </Box>
    <Sphere
      :name="'my-sphere'"
      :diameter="0.1"
      :position="{ x: 0.1, y: 0.05, z: 0 }"
    ></Sphere>
  </BabylonScene>
</template>
