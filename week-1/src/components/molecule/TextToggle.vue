<template>
  <div class="text-toggle">
    <BaseCheckbox v-model="showText">
      Hiển thị đoạn văn bản
    </BaseCheckbox>

    <p v-show="showText" class="text-toggle__content">
      Đây là một đoạn văn bản được điều khiển bằng checkbox!
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseCheckbox from '@/components/atoms/BaseCheckbox.vue'

const showText = ref(false)
</script>

<style scoped lang="scss">
.text-toggle {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__content {
    padding: 1rem;
    background-color: #f5f5f5;
    border-left: 4px solid #007bff;
    color: #333;
  }
}
</style>
