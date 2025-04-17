<template>
  <div class="container">
    <h1>Danh sách sản phẩm</h1>
    <ItemListComponent :items="products">
      <template v-slot="{item}">
        {{ item?.name }}
      </template>
    </ItemListComponent>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import ItemListComponent from '../components/atoms/ItemListComponent.vue';
  const products = ref([
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Điện thoại' },
    { id: 3, name: 'Máy tính bảng' }
  ]);
</script>

<style lang="scss">
</style>
