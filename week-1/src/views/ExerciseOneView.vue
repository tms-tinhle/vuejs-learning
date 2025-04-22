<template>
  <div class="container">
    <BaseCardComponent>
      <h1>Exercise One</h1>
      <p>This is content in BaseCard</p>
    </BaseCardComponent>
  </div>
</template>

<script setup lang="ts">
import BaseCardComponent from '@/components/BaseCardComponent.vue';

</script>

<style lang="scss" scoped>
  @use '../assets/styles/_exercise-one.scss'
</style>
