

<template>
  <ul>
    <li v-for="item in items" :key="item || item.id">
      <slot :item>{{ item }}</slot>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>

<style lang="scss">
  @use '../../assets/styles/atoms/ItemListComponent.scss';
</style>
