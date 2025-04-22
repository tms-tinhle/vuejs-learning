<template>
  <div class="container">
    <h1 class="container__h1">Grandparent Component: </h1>
    <ParentComponent />
  </div>
</template>

<script lang="ts" setup>
import { provide } from 'vue';
import ParentComponent from './ParentComponent.vue';

const message = 'Hello from Grandparent!'

provide('message', message);
</script>

<style lang="scss" scoped>
  @use '../assets/styles/_exercise-one.scss';
</style>
