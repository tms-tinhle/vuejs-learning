<script setup lang="ts">
import { ref } from 'vue'
import ChildCounter from '../components/ChildCounterComponent.vue'

const count = ref(100)

const handleUpdateCount = (newValue: number) => {
  count.value = newValue
}
</script>

<template>
  <div class="container">
    <h2>Parent Component</h2>
    <p>Current count from child: {{ count }}</p>

    <ChildCounter :start="count" @updateCount="handleUpdateCount" />
  </div>
</template>

<style lang="scss" scoped>
  @use '../assets/styles/exercise-two.scss';
</style>


