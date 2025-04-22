<script setup lang="ts">
import { inject } from 'vue';
import ChildComponent from './ChildComponent.vue';

const message = inject('message');
</script>

<template>
  <div>
    <h1>parent Component</h1>
    <p>Inject message in parent: {{ message }}</p>
    <ChildComponent />
  </div>
</template>
