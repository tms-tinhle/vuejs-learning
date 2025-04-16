<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()

const navItems = [
  { path: '/login', label: 'Bai 1: Login' },
  { path: '/bai2', label: 'Bai 2: v-html, v-text' },
  { path: '/bai3', label: 'Bai 3: v-bind' },
  { path: '/bai4', label: 'bai 4: v-on' },
]
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          :class="{ active: route.path === item.path }"
        >
          {{ item.label }}
        </RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style>
header {
  background-color: #5d89b5; /* Nền màu tối */
  padding: 20px 0; /* Padding cho header */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Đổ bóng nhẹ cho header */
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto; /* Căn giữa wrapper */
}

nav {
  display: flex;
  gap: 20px; /* Khoảng cách giữa các link */
}

nav a {
  color: #ecf0f1; /* Màu chữ sáng */
  text-decoration: none; /* Loại bỏ underline */
  font-size: 1.2rem;
  font-weight: 500;
  padding: 10px 15px;
  border-radius: 5px; /* Bo góc các liên kết */
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

nav a:hover {
  background-color: #3498db; /* Màu nền khi hover */
  color: white; /* Màu chữ khi hover */
}

nav a.active {
  background-color: #2980b9; /* Màu nền cho link đang active */
  color: white;
}
</style>
