<script setup lang="ts">
import BabylonScene from "./components/babylonScene.vue";
import Box from "./components/box";
import StandardMaterial from "./components/standardMaterial";
</script>

<template>
  <BabylonScene :antialias="true">
    <Box :position="{ x: 0, y: 0.05, z: 0 }" :size="0.1">
      <StandardMaterial :color="{ r: 1, g: 0, b: 1 }"></StandardMaterial>
    </Box>
  </BabylonScene>
</template>
