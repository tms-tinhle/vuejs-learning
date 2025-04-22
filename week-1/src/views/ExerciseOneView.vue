<template>
  <div class="container">
    <button class="container__button" @click="show = !show">
      {{ show ? 'Hiden' : 'Show' }} LifecycleDemo
    </button>

    <LifecycleDemo v-if="show" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LifecycleDemo from '../components/LifecycleDemoComponent.vue'

const show = ref(true)
</script>


<style lang="scss" scoped>
  @use '../assets/styles/_exercise-one.scss'
</style>
