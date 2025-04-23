<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
import { NavItems } from '@/constant/navItemsConstant';

</script>

<template>
  <header class="py-4 bg-dark shadow position-sticky top-0">
    <div class="wrapper container d-flex justify-content-between align-items-center">
      <div class="wrapper__logo d-flex align-items-center gap-2">
        <img src="/logo.png" alt="Logo" />
        <h1 class="ms-2 mb-0 text-light">E&M</h1>
      </div>
        <nav>
        <RouterLink
          v-for="item in NavItems"
          :key="item.path"
          :to="item.path"
          :class="['text-decoration-none py-2 px-3 rounded text-light fw-medium',
                  route.path === item.path ? 'bg-primary fw-bold' : '']"
        >
          {{ item.label }}
        </RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style lang="scss" scoped>
@use '../src/assets/_app.scss';
</style>
