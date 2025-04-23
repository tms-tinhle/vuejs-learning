<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import instanceAxios from '../utils/configAxios'
import { useRouter } from 'vue-router'

import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const props = defineProps<{
  student: Student;
 }>()
const emit = defineEmits<{
  (e: 'deleted'): void;
}>()
const router = useRouter()

const onHandleDelete = async () => {
  try {
    await instanceAxios.delete(`/students/${props.student.id}`)
    emit('deleted')
    toast.success('Xoá sinh viên thành công!', {
      position: 'top-right',
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
    });
  } catch (error) {
    console.error('Error deleting student:', error)
  } finally {
    console.log('Delete student done')
  }
}
</script>

<template>
  <div class="col-md-4 mb-3">
    <div class="card">
      <img v-if="student.image" :src="student.image" class="card-img-top img-thumbnail" alt="image" />
      <!-- <img   src="https://picsum.photos/id/239/200/200" class="card-img-top img-thumbnail" alt="image" /> -->
      <div class="card-body">
        <h5 class="card-title">{{ student.name }}</h5>
        <p class="card-text">
          Age: {{ student.age }} <br />
          Email: {{ student.email }}
        </p>
        <button class="btn btn-primary me-2" @click="router.push(`/students/${student.id}`)">Chi tiết</button>
        <button class="btn btn-warning me-2" @click="router.push(`/students/${student.id}/edit`)">Sửa</button>
        <button class="btn btn-danger" @click="onHandleDelete">Xoá</button>
      </div>
    </div>
  </div>
</template>
