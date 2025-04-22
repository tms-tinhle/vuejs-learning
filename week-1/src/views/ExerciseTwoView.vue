<template>
  <BaseDialogComponent>
    <template #header>
      <h3>Thông báo</h3>
    </template>

    Đây là nội dung chính của dialog.

    <template #footer>
      <button @click="onClose">Đóng</button>
    </template>
  </BaseDialogComponent>
</template>

<script setup lang="ts">
import BaseDialogComponent from '../components/BaseDialogComponent.vue'

const onClose = () => {
  alert('Dialog sẽ đóng lại')
}

</script>
