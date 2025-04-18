<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();

const navItems = [
  { path: '/bai4.1', label: 'Bài 1:' },
  { path: '/bai4.2', label: 'Bài 2:' },
  { path: '/bai4.3', label: 'Bài 3:' },
];
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

<style lang="scss" scoped>
$primary-color: #3498db;
$secondary-color: #2c3e50;
$text-light: #ecf0f1;
$text-dark: #333;
$box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
$border-radius: 8px;
$transition-duration: 0.3s;

header {
  background-color: $secondary-color;
  padding: 1.5rem 0;
  box-shadow: $box-shadow;
  position: sticky; // Giữ header cố định trên đầu trang khi cuộn (tùy chọn)
  top: 0; // Kết hợp với position: sticky
  z-index: 10; // Đảm bảo header không bị nội dung khác che phủ
}

.wrapper {
  display: flex;
  justify-content: space-between; // Căn các phần tử bên trong wrapper ra hai đầu (nếu cần thêm logo, v.v.)
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem; // Thêm padding ngang cho wrapper
}

nav {
  display: flex;
  gap: 1.2rem;
}

nav a {
  color: $text-light;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.7rem 1.2rem;
  border-radius: $border-radius;
  transition: background-color $transition-duration ease, color $transition-duration ease;

  &:hover {
    background-color: darken($primary-color, 10%);
    color: $text-light;
  }

  &.active {
    background-color: $primary-color;
    color: $text-light;
    font-weight: bold;
  }
}

// Thêm một số hiệu ứng tinh tế khác (tùy chọn)
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

header {
  animation: fadeIn $transition-duration ease-out;
}
</style>
