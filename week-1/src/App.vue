<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
import { NavItems } from '@/constant/navItemsConstant';

</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink
          v-for="item in NavItems"
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
@use '../src/assets/_app.scss';
</style>
