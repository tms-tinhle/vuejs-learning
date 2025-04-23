<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

defineProps<{ isEdit?: boolean }>()

const router = useRouter()
const route = useRoute()

const student = ref({
  name: '',
  age: '',
  email: '',
  image: ''
})

const fetchStudent = async () => {
  const { data } = await axios.get(`http://localhost:3000/students/${route.params.id}`)
  student.value = data
}

onMounted(() => {
  if (route.params.id) fetchStudent()
})

const handleSubmit = async () => {
  if (route.params.id) {
    await axios.put(`http://localhost:3000/students/${route.params.id}`, student.value)
  } else {
    await axios.post(`http://localhost:3000/students`, student.value)
  }
  router.push('/')
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="row g-3">
    <div class="col-12">
      <label class="form-label">Tên</label>
      <input v-model="student.name" type="text" class="form-control" required />
    </div>
    <div class="col-12">
      <label class="form-label">Tuổi</label>
      <input v-model="student.age" type="number" class="form-control" required />
    </div>
    <div class="col-12">
      <label class="form-label">Email</label>
      <input v-model="student.email" type="email" class="form-control" required />
    </div>
    <div class="col-12">
      <label class="form-label">Ảnh (link)</label>
      <input v-model="student.image" type="url" class="form-control" required />
    </div>
    <div class="col-12">
      <button class="btn btn-success" type="submit">
        {{ route.params.id ? 'Cập nhật' : 'Thêm mới' }}
      </button>
    </div>
  </form>
</template>
