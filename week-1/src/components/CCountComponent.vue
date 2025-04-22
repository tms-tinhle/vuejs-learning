<script lang="ts" setup>
import { inject } from 'vue';

const count = inject('count')

const onIncrement = inject<() => void>('onIncrement')
const onDecrement = inject<() => void>('onDecrement')

if (!count || !onIncrement || !onDecrement) {
  throw new Error('CCount: inject thất bại - thiếu count, increment hoặc decrement')
}
</script>

<template>
  <div class="container">
    <h1 class="container__h1">CCount Component</h1>
    <p>Current Count: {{ count }}</p>
    <button @click="onIncrement">Increment</button>
    <button @click="onDecrement">Decrement</button>
  </div>
</template>
