<template>
  <div class="wrapper">
    <div class="container">
      <input type="text" v-model="message" />
      <div>Length of input: {{ charCount }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
const message = ref('');
const charCount = computed(() => {
  return message.value.length;
})
</script>

<style lang="scss" scoped>
  @use '../assets/styles/exercise-two-view.scss'
</style>

