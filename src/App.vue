<script setup lang="ts">
import BabylonScene from "./components/babylonScene.vue";
import Box from "./components/meshes/box.vue";
import StandardMaterial from "./components/materials/standardMaterial.vue";
import ArcRotateCamera from "./components/cameras/arcRotateCamera.vue";
import Sphere from "./components/meshes/sphere.vue";
import DirectionalLight from "./components/lights/directionalLight.vue";
import { reactive, ref } from "vue";

const boxPos = reactive<{ x: number; y: number; z: number }>({
  x: 0,
  y: 0.05,
  z: 0,
});

const boxSize = ref(0.1);

setTimeout(() => {
  boxPos.x = -0.1;
}, 2000);

setTimeout(() => {
  boxSize.value = 0.2;
}, 3000);
</script>

<template>
  <BabylonScene :antialias="true">
    <ArcRotateCamera
      :name="'camera'"
      :alpha="Math.PI / 3"
      :beta="Math.PI / 3"
      :radius="0.5"
      :target="{ x: 0, y: 0.05, z: 0 }"
    >
    </ArcRotateCamera>

    <DirectionalLight
      :name="'light'"
      :direction="[0.25, -1, -0.6]"
      :intensity="1.2"
    ></DirectionalLight>

    <Box :name="'my-box'" :position="boxPos" :size="boxSize">
      <StandardMaterial :color="{ r: 0, g: 1, b: 1 }"></StandardMaterial>
    </Box>

    <Sphere
      :name="'my-sphere'"
      :diameter="0.1"
      :position="{ x: 0.1, y: 0.05, z: 0 }"
    >
      <StandardMaterial :color="{ r: 1, g: 0, b: 1 }"></StandardMaterial>
    </Sphere>
  </BabylonScene>
</template>
