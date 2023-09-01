<script setup lang="ts">
import BabylonScene from "./components/babylonScene.vue";
import Box from "./components/meshes/box.vue";
import StandardMaterial from "./components/materials/standardMaterial.vue";
import ArcRotateCamera from "./components/cameras/arcRotateCamera.vue";
import Sphere from "./components/meshes/sphere.vue";
import DirectionalLight from "./components/lights/directionalLight.vue";
import { reactive } from "vue";

const target = reactive<[number, number, number]>([0, 0.05, 0]);

setTimeout(() => {
  target[0] = 0.1;
}, 1000);
</script>

<template>
  <BabylonScene :antialias="true">
    <ArcRotateCamera
      :name="'camera'"
      :alpha="Math.PI / 3"
      :beta="Math.PI / 3"
      :radius="0.5"
      :target="target"
    >
    </ArcRotateCamera>

    <DirectionalLight
      :name="'light'"
      :direction="[0.25, -1, -0.6]"
      :intensity="1.2"
    ></DirectionalLight>

    <Box :name="'my-box'" :position="[-0.1, 0.05, 0]" :size="0.1">
      <StandardMaterial :color="[0, 1, 1]"></StandardMaterial>
    </Box>

    <Sphere :name="'my-sphere'" :diameter="0.1" :position="[0, 0.05, 0]">
      <StandardMaterial :color="[1, 0, 1]"></StandardMaterial>
    </Sphere>
  </BabylonScene>
</template>
