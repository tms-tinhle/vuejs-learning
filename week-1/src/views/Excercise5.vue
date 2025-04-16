#Thay đổi màu chữ bằng class binding
<template>
  <div class="container">
    <p :class="{'text-red': isRed}">Xin chao Vue 3!</p>
    <button @click="toggleColor">Click here!</button>
  </div>
  <div class="container">
    <div :style="bgColor" class="container__square"></div>
    <input @click="updateBgColor" type="color">
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const isRed = ref(true)
const toggleColor = () => {
  isRed.value = !isRed.value
}
const bgColor = ref({
  backgroundColor: ''
})

const updateBgColor = (event: Event) => {
  const target = event.target as HTMLInputElement
  bgColor.value.backgroundColor = target.value
}
</script>

<style lang="scss">
@use "@/assets/styles/Exercise5.scss";
</style>
