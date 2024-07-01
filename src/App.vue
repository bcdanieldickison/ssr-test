<script setup lang="ts">
import Color from './Color'
const C = Color
</script>

<template>
  <h1>Hello</h1>
</template>

<style scoped>
h1 {
  /* this fails: */
  color: v-bind("Color.red");
  
  /* this works: */
  /* color: v-bind("C.red"); */
}
</style>
