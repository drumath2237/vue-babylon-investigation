<script setup lang="ts">
import BabylonScene from "./components/babylonScene.vue";
import Box from "./components/box.vue";
</script>

<template>
  <BabylonScene :antialias="false">
    <Box :position="[0, 0.05, 0]" :size="0.1"></Box>
  </BabylonScene>
</template>