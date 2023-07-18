<script setup lang="ts">
import BabylonEngine from "./components/babylonEngine.vue";
import Box from "./components/box.vue";
</script>

<template>
  <BabylonEngine>
    <Box :position="[0, 0, 0]">
      aaa
    </Box>
  </BabylonEngine>
</template>

<style scoped lang="scss"></style>
