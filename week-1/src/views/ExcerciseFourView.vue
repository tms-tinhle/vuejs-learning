<template>
  <div class="container">
    <div class="container__list">
      <ItemListComponent :items="numbers">
      <template v-slot="{ item }">
        <li>{{ item }}</li>
      </template>

    </ItemListComponent>
    </div>
    <div class="container__button">
      <button @click="sortAscending">Sắp xếp tăng dần</button>
      <button @click="reverse">Đảo ngược</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ItemListComponent from '../components/atoms/ItemListComponent.vue';

const numbers = ref([1, 2, 3, 4, 5]);

const sortAscending = () => {
  numbers.value.sort((a, b) => a - b);
};

const reverse = () => {
  numbers.value.reverse();
};

</script>

<style lang="scss" scoped>
  @use '../assets/styles/ExcerciseFour.scss';
</style>
