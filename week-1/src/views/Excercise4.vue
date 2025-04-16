<template>
  <div class="container">
    <div class="counter-app">
      <h1 class="counter-app__display">{{ counter }}</h1>

      <button class="counter-app__button counter-app__button--increment" @click="increment">
        Increase
      </button>

      <button class="counter-app__button counter-app__button--decrement" @click="decrement">
        Decrease
      </button>

      <input
        class="counter-app__input"
        v-model="inputValue"
        @keyup.enter="handleSubmit"
        placeholder="Enter value"
      />

      <p v-if="submitText" class="counter-app__input-text">Value: {{ submitText }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const counter = ref(0)
const inputValue = ref('')
const showText = ref(false)
const submitText = ref('')

console.log('Counter:', counter.value)
console.log('Input Value:', inputValue.value)
console.log('Show Text:', showText.value)
const increment = () => {
  counter.value++
}

const decrement = () => {
  if (counter.value > 0) {
    counter.value--
  }
}

const showInputValue = () => {
  showText.value = true
}

const handleSubmit = () => {
  submitText.value = inputValue.value
  inputValue.value = ''
}
</script>
<style lang="scss">
@use '@/assets/styles/Excercise4.scss';
</style>
