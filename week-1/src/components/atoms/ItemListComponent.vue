
<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      <slot :item>{{ a }}</slot>

    </li>
  </ul>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  items: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="scss">
  @use '../../assets/styles/atoms/item-list-component.scss';
</style>
