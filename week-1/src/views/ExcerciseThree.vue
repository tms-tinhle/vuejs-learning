<template>
  <div class="container">
    <h1>Danh sách sản phẩm</h1>
    <ItemListComponent :items="products">
      <template v-slot="{ item }">
        <strong>{{ item.name }}</strong> -
        Giá: {{ formatCurrency(item.price) }} x
        Số lượng: {{ item.quantity }} =
        <span class="total">{{ formatCurrency(item.price * item.quantity) }}</span>
      </template>
    </ItemListComponent>
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import ItemListComponent from '../components/atoms/ItemListComponent.vue';
const products = ref([
  { id: 1, name: 'Laptop', price: 15000000, quantity: 2 },
  { id: 2, name: 'Điện thoại', price: 7000000, quantity: 3 },
  { id: 3, name: 'Tai nghe', price: 150000, quantity: 5 },
])

function formatCurrency(value: number): string {
  return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
}
</script>

<style>
</style>
