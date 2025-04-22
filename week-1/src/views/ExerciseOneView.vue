<template>
  <div class="user-info">
    <h2>User Info</h2>
    <p><strong>Name:</strong> {{ userStore.name }}</p>
    <p><strong>Age:</strong> {{ userStore.age }}</p>
    <p><strong>Is Adult:</strong> {{ userStore.isAdult ? 'Yes' : 'No' }}</p>

    <input v-model="newName" placeholder="Enter new name"/>
    <button @click="userStore.onUpdateName(newName)">Update Name</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '../stores/user'

const userStore = useUserStore()
const newName = ref<string>('')
</script>

<style lang="scss" scoped>
  @use '../assets/styles/exercise-one.scss'
</style>
