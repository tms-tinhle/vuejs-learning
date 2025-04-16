<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import BaseInput from '@/components/atoms/BaseInput.vue'
import BaseTextarea from '@/components/atoms/BaseTextarea.vue'

const submitted = ref(false)

const form = reactive({
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  bio: '',
  acceptTerms: false,
  gender: '',
  country: '',
})

const formattedForm = computed(() => JSON.stringify(form, null, 2))

const submitForm = () => {
  submitted.value = true
  console.log('Form submitted:', form)
}
</script>

<template>
  <div class="register">
    <h1 class="register__title">Register Form</h1>
    <form @submit.prevent="submitForm" class="register__form">
      <BaseInput
        v-model="form.email"
        label="Email"
        type="email"
        name="email"
        id="email"
        required
        class="register__input"
      />
      <BaseInput
        v-model="form.password"
        label="Password"
        type="password"
        name="password"
        id="password"
        required
        class="register__input"
      />
      <BaseInput
        v-model="form.confirmPassword"
        label="Confirm Password"
        type="password"
        id="confirm-password"
        required
        class="register__input"
      />

      <BaseTextarea v-model="form.bio" label="Introduction" id="bio" class="register__textarea" />

      <div class="register__checkbox-group">
        <label class="register__checkbox-label">
          <input type="checkbox" v-model="form.acceptTerms" class="register__checkbox" />
          Accept Terms
        </label>
      </div>

      <div class="register__radio-group">
        <label for="gender" class="register__radio-label">Giới tính:</label>
        <div class="register__radio-options">
          <label class="register__radio-option">
            <input type="radio" value="Nam" v-model="form.gender" class="register__radio" /> Nam
          </label>
          <label class="register__radio-option">
            <input type="radio" value="Nữ" v-model="form.gender" class="register__radio" /> Nữ
          </label>
          <label class="register__radio-option">
            <input type="radio" value="Khác" v-model="form.gender" class="register__radio" /> Khác
          </label>
        </div>
      </div>

      <div class="register__select-group">
        <label for="country" class="register__select-label">Quốc gia:</label>
        <select id="country" v-model="form.country" class="register__select">
          <option disabled value="">Chọn quốc gia</option>
          <option>Việt Nam</option>
          <option>Mỹ</option>
          <option>Nhật Bản</option>
          <option>Pháp</option>
        </select>
      </div>

      <button type="submit" class="register__submit-btn">Register</button>
    </form>

    <h2 v-if="submitted" class="register__json-output-title">Data Json:</h2>
    <pre v-if="submitted" class="register__json-output">
      <code>{{ formattedForm }}</code>
    </pre>
  </div>
</template>

<style lang="scss">
@use '@/assets/styles/LoginView.scss';
</style>
