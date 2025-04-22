<template>
  <div class="wrapper">
    <div class="todo">
    <h2>Todo List</h2>
    <div class="todo__group">
      <input v-model="newTodo" placeholder="Enter task..."/>
      <button @click="onHandleAdd">Add</button>
    </div>
    <ul class="todo__list">
      <li v-for="todo in todoStore.todos" :key="todo.id" class="todo__item">
        {{ todo.text }}
        <button @click="todoStore.onRemoveTask(todo.id)">Remove</button>
      </li>
    </ul>
  </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTaskStore } from '../stores/task'

const todoStore = useTaskStore()
const newTodo = ref<string>('')

const onHandleAdd = () => {
  if (newTodo.value.trim())
    todoStore.onAddTask(newTodo.value)
    newTodo.value = ''
}
</script>

<style lang="scss" scoped>
  @use '../assets/styles/_exercise-one.scss'
</style>
