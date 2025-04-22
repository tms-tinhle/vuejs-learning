<script setup lang="ts">
import { inject } from 'vue';

const message = inject('message');
</script>

<template>
  <div>
    <h1>child Component</h1>
    <p>Inject message in child: {{ message }}</p>
  </div>
</template>
