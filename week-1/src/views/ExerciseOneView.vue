<template>
  <div class="container">
    <div class="container__name">
      Fullname: {{ fullName }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { computed } from 'vue';
const firstName = ref('Le');
const lastName = ref('Van Trung Tinh');

const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`;
})
</script>

<style lang="scss" scoped>
  @use '../assets/styles/exercise-one-view.scss'
</style>
