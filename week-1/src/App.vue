<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
import { NavItems } from '@/constant/navItemsConstant';

</script>

<template>
  <div class="container">
    <div class="container">
      <header class="header">
        <div class="header__wrapper">
          <nav class="header__nav">
            <RouterLink v-for="item in NavItems" :key="item.path" :to="item.path"
              :class="['header__link', { 'header__link--active': route.path === item.path }]">
              {{ item.label }}
            </RouterLink>
          </nav>
        </div>
      </header>
      <RouterView />
    </div>

    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
@use '../src/assets/_app.scss';
</style>
