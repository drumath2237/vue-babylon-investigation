<script setup lang="ts">
import BabylonScene from "./components/babylonScene.vue";
import Box from "./components/box";
</script>

<template>
  <BabylonScene :antialias="true">
    <Box :position="{ x: 0, y: 0.05, z: 0 }" :size="0.1"></Box>
  </BabylonScene>
</template>
