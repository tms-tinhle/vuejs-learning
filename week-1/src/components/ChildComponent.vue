<!-- Child.vue -->
<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps<{
  message: string;
}>();

const emit = defineEmits<{
  (e: 'sendMessage', newMessage: string): void;
}>();

const message = props.message;
const newMsg = ref('');

const onHandleSend = () => {
  emit('sendMessage', newMsg.value);
  newMsg.value = '';
};
</script>

<template>
  <div class="child">
    <p>Message from Grandparent: <strong>{{ message }}</strong></p>
    <input v-model="newMsg" placeholder="Type new message" />
    <button @click="onHandleSend">Send</button>
  </div>
</template>
