<script lang="ts" setup>
import { inject } from 'vue';

const count = inject('count');
</script>

<template>
  <div class="container">
    <h1>PCount Component</h1>
    <p>Current Count: {{ count }}</p>
  </div>
</template>
