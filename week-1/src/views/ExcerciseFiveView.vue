<template>
  <div class="container">
    <div class="container__list">
      <ItemListComponent :items="tasks">
      <template v-slot="{item}">
        {{ item }}
      </template>
    </ItemListComponent>
    </div>
    <input type="text" placeholder="Enter a task" />
    <div class="container__button">
      <button @click="onAddTask">Add</button>
      <button @click="onDeleteTask">Delete</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import ItemListComponent from '../components/atoms/ItemListComponent.vue';
  const tasks = ref(['Nodejs', 'Reactjs', 'Vuejs', 'Angular']);
  const onAddTask = () => {
    const input = document.querySelector('input') as HTMLInputElement;
    if (input.value) {
      tasks.value.push(input.value);
      input.value = '';
    }
  };
  const onDeleteTask = () => {
    tasks.value.pop();
  };
</script>

<style lang="scss" scoped>
  @use '../assets/styles/excercise-five.scss';
</style>

