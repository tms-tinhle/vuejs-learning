<script lang="ts" setup>
import { provide, ref } from 'vue';

import PCountComponent from '../components/PCountComponent.vue';
import CCountComponent from '../components/CCountComponent.vue';

const count = ref<number>(0);

const onIncrement = () => {
  count.value++;
};
const onDecrement = () => {
  count.value--;
};

provide('count', count);
provide('onIncrement', onIncrement);
provide('onDecrement', onDecrement);
</script>

<template>
  <div class="count">
    <h1>GCount Component</h1>
    <p>Current Count: {{ count }}</p>
    <PCountComponent />
    <CCountComponent />
  </div>
</template>
