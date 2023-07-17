<script setup lang="ts">
import BabylonEngine from "./components/babylonEngine.vue";
import Box from "./components/box.vue";
</script>

<template>
  <BabylonEngine>
    <Box :x="0" :y="0" :z="0"></Box>
  </BabylonEngine>
</template>

<style scoped lang="scss"></style>
