<template>
  <div class="wrapper">
    <div class="container">
      <h2>Exercise 3:</h2>
      <p>Count value: {{ count }}</p>
      <button @click="increaseCount">increaseCount</button>
      <button @click="decreaseCount">decreaseCount</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
const count = ref(0);
watch(count, (oldCount, newCount) => {
  console.log(`Count changed from ${oldCount} to ${newCount}`);

})

const increaseCount = () => {
  count.value++;
}

const decreaseCount = () => {
  count.value--;
}

</script>

<style lang="scss" scoped>
  @use '../assets/styles/exercise-three-view.scss'
</style>

