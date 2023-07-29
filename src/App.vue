<script setup lang="ts">
import { Vector3 } from "@babylonjs/core";
import BabylonScene from "./components/babylonScene.vue";
import Box from "./components/box";
import StandardMaterial from "./components/standardMaterial";
import ArcRotateCamera from "./components/arcRotateCamera";
</script>

<template>
  <BabylonScene :antialias="true">
    <ArcRotateCamera
      :name="`camera`"
      :alpha="0"
      :beta="Math.PI / 2"
      :radius="1.5"
      :target="Vector3.Zero()"
    ></ArcRotateCamera>
    <Box :position="{ x: 0, y: 0.05, z: 0 }" :size="0.1">
      <StandardMaterial :color="{ r: 1, g: 0, b: 1 }"></StandardMaterial>
    </Box>
  </BabylonScene>
</template>
