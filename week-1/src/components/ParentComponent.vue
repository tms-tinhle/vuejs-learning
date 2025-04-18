<!-- Parent.vue -->
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import ChildComponent from '../components/ChildComponent.vue';

const props = defineProps<{
  message: string;
}>();

const emit = defineEmits<{
  (e: 'sendMessage', message: string): void;
}>();

const onHandleChildMessage = (msg: string) => {
  emit('sendMessage', msg);
};
</script>

<template>
  <div class="parent">
    <h3>Parent</h3>
    <ChildComponent :message="props.message" @sendMessage="onHandleChildMessage" />
  </div>
</template>
