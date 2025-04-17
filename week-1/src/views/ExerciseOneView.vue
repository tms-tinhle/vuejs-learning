<script setup lang="ts">
  import { ref } from 'vue';
  import ItemListComponent from '../components/atoms/ItemListComponent.vue';

  const fruits = ref(['tang', 'chuoi', 'dua', 'xoai']);
</script>

<template class="wrapper">
  <div class="container">
    <h2>List fruits</h2>
    <ItemListComponent :items="fruits">
      <template v-slot="{ item }">
        {{ item }}
      </template>
    </ItemListComponent>
  </div>
</template>

<style lang="scss">
  @use '../assets/styles/excercise-one.scss'
</style>
