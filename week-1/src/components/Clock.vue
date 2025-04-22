<template>
  <div>
    <h2>Bây giờ là: {{ currentTime }}</h2>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentTime = ref('')
let intervalId: number | null = null

function updateTime() {
  const now = new Date()
  currentTime.value = now.toLocaleTimeString()
}

onMounted(() => {
  updateTime()
  intervalId = setInterval(updateTime, 1000)
  console.log('Clock started')
})

onUnmounted(() => {
  if (intervalId !== null) {
    clearInterval(intervalId)
  }
  console.log('Clock stopped')
})
</script>
