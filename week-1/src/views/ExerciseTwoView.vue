<template>
  <div class="container">
    <button class="container__button" @click="show = !show">
      {{ show ? 'Hiden' : 'Show' }} Clock
    </button>

    <Clock v-if="show" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Clock from '../components/ClockComponent.vue'

const show = ref(true)
</script>

<style scoped lang="scss">
  @use '../assets/styles/_exercise-one.scss'
</style>
