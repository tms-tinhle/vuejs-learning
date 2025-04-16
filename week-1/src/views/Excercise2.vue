<script setup lang="ts">
import { ref } from 'vue'

const htmlContent = ref('<h1>Hello World</h1><p>This is a paragraph.</p>')
const plainText = ref('Hello World\nThis is a paragraph.')
</script>

<template>
  <div class="html-text-demo">
    <h2>Demo v-html & v-text</h2>

    <div v-html="htmlContent" class="html-content"></div>

    <div v-text="plainText" class="text-content"></div>
  </div>
</template>
