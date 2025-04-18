<template>
    <div class="container">
      <HelloUserComponent :name="name" />
    </div>
</template>

<script setup lang="ts">
  import HelloUserComponent from '../components/HelloUserComponent.vue';
  import { ref } from 'vue';

  const name = ref('Le Van Trung Tinh');
</script>

<style lang="scss" scoped>
  @use '../assets/styles/exercise-one.scss'
</style>
