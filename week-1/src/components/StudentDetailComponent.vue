<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import instanceAxios from '../utils/configAxios'

const route = useRoute()
const router = useRouter()
const student = ref<Student>()
const error = ref<string | null>(null)
const loading = ref(true)

onMounted(async () => {
  try {
    const id = route.params.id
    const response = await instanceAxios.get(`/students/${id}`)
    setTimeout(() => {
      student.value = response.data
      loading.value = false
    }, 1000)
  } catch (err) {
    error.value = 'Không tìm thấy sinh viên.'
    console.error(err)
    loading.value = false
  } finally {
    console.log('onMouted done')
  }
})

const goBack = () => {
  router.go(-1)
}
</script>

<template>
  <div class="container py-5">
    <div class="mb-4">
      <button class="btn btn-outline-primary" @click="goBack">
        <i class="bi bi-arrow-left me-2"></i>Quay lại
      </button>
    </div>

    <div v-if="error" class="alert alert-danger shadow-sm">
      <i class="bi bi-exclamation-triangle me-2"></i>{{ error }}
    </div>

    <div v-else-if="loading" class="text-center py-5">
      <div class="d-flex justify-content-center align-items-center">
        <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-primary ms-2" style="width: 3rem; height: 3rem;" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <p class="mt-3 text-secondary">Đang tải thông tin sinh viên...</p>
    </div>

    <div v-else-if="student" class="mx-auto" style="max-width: 900px;">
      <div class="card shadow border-0">
        <div class="row g-0">
          <div class="col-md-4">
            <div class="h-100">
              <img :src="student.image"
                   class="w-100 h-100 object-fit-cover"
                   alt="Student Image" />
            </div>
          </div>
          <div class="col-md-8">
            <div class="card-body p-4">
              <h3 class="card-title fw-bold mb-4">{{ student.name }}</h3>
              <div class="d-flex flex-column gap-3">
                <div class="pb-3 border-bottom">
                  <div class="text-secondary small mb-1">
                    <i class="bi bi-calendar me-2"></i>Tuổi
                  </div>
                  <div class="fw-medium fs-5">{{ student.age }}</div>
                </div>

                <div class="pb-3 border-bottom">
                  <div class="text-secondary small mb-1">
                    <i class="bi bi-envelope me-2"></i>Email
                  </div>
                  <div class="fw-medium fs-5">{{ student.email }}</div>
                </div>
              </div>

              <div class="mt-4 d-flex gap-2">
                <button class="btn btn-primary"
                        @click="router.push(`/students/${student.id}/edit`)">
                  <i class="bi bi-pencil me-1"></i> Chỉnh sửa
                </button>
                <button class="btn btn-outline-danger">
                  <i class="bi bi-trash me-1"></i> Xóa
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
