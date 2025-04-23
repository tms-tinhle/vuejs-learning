<template>
  <div class="container py-4">
    <h2>User list</h2>
    <StudentListComponent/>
  </div>
</template>

<script setup lang="ts">
import StudentListComponent from '@/components/StudentListComponent.vue'
</script>

<style lang="scss" scoped>
  @use '../assets/styles/exercise-one.scss'
</style>
