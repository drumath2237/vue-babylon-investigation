<script setup lang="ts">
import BabylonScene from "./components/babylonScene.vue";
import Box from "./components/meshes/box.vue";
import StandardMaterial from "./components/materials/standardMaterial.vue";
import ArcRotateCamera from "./components/cameras/arcRotateCamera.vue";
import Sphere from "./components/meshes/sphere.vue";
import DirectionalLight from "./components/lights/directionalLight.vue";
import { Vector3 } from "@babylonjs/core";
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
      :direction="new Vector3(0.25, -1, -0.6)"
      :intensity="1.2"
    ></DirectionalLight>

    <Box :name="'my-box'" :position="{ x: 0, y: 0.05, z: 0 }" :size="0.1">
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
