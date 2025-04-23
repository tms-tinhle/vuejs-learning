<script setup lang="ts">
import { ref, onMounted } from 'vue'
import instanceAxios from '../utils/configAxios'
import StudentItem from './StudentItemComponent.vue'

const students = ref([])

const getStudents = async () => {

  try {
    const { data } = await instanceAxios.get('/students')
    students.value = data
    console.log(students.value)
  } catch (error) {
    console.error('Error get students:', error)
  } finally {
    console.log('fetch students done')
  }
}

onMounted(getStudents)
</script>

<template>
  <div class="row">
    <StudentItem v-for="student in students"
    :key="student.id"
    :student="student"
    @deleted="getStudents" />
  </div>
</template>
