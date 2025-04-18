<script setup lang="ts">
  import { ref } from 'vue';
  import Parent from './ParentComponent.vue';

  const message = ref('From Grandparent')
  const latestMessage = ref('');

  const onHandleChildMessage = (message: string) => {
    latestMessage.value = message;
  }
</script>

<template>
  <div class="container">
    <h2>Grandparent</h2>
    <Parent :message="message" @sendMessage="onHandleChildMessage" />
    <p>Message received from child: <strong>{{ latestMessage }}</strong></p>
  </div>
</template>

