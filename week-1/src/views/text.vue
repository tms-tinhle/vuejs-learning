<template>
  <div class="container">
    <h1>Form Đăng Ký</h1>

    <form @submit.prevent="submitForm">
      <!-- Text input -->
      <div>
        <label for="name">Tên:</label>
        <input type="text" id="name" v-model="form.name" />
      </div>

      <!-- Textarea -->
      <div>
        <label for="bio">Giới thiệu:</label>
        <textarea id="bio" v-model="form.bio"></textarea>
      </div>

      <!-- Checkbox -->
      <div>
        <label>
          <input type="checkbox" v-model="form.acceptTerms" />
          Đồng ý điều khoản
        </label>
      </div>

      <!-- Radio buttons -->
      <div>
        <label>Giới tính:</label>
        <label><input type="radio" value="Nam" v-model="form.gender" /> Nam</label>
        <label><input type="radio" value="Nữ" v-model="form.gender" /> Nữ</label>
        <label><input type="radio" value="Khác" v-model="form.gender" /> Khác</label>
      </div>

      <!-- Select -->
      <div>
        <label for="country">Quốc gia:</label>
        <select id="country" v-model="form.country">
          <option disabled value="">Chọn quốc gia</option>
          <option>Việt Nam</option>
          <option>Mỹ</option>
          <option>Nhật Bản</option>
          <option>Pháp</option>
        </select>
      </div>

      <!-- Submit -->
      <button type="submit">Gửi</button>
    </form>

    <!-- Hiển thị dữ liệu -->
    <h2>Dữ liệu:</h2>
    <pre>{{ form }}</pre>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  bio: '',
  acceptTerms: false,
  gender: '',
  country: '',
})

const submitForm = () => {
  alert('Form đã gửi!')
}
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: auto;
  padding: 1rem;
  font-family: sans-serif;
}
form > div {
  margin-bottom: 1rem;
}
pre {
  background: #f0f0f0;
  padding: 1rem;
}
</style>
