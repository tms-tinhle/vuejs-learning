<script setup>
  import { reactive } from 'vue';
  import { ref } from 'vue';
  import { computed } from 'vue';

  const formattedForm = computed(() => {
    return JSON.stringify(form, null, 2); // indent = 2 spaces
  });

  const submitted = ref(false);
  const form = reactive({
    email: '',
    user: '',
    password: '',
    confirmPassword: '',
    name: '',
    bio: '',
    acceptTerms: false,
    gender: '',
    country: '',
  })

  function alernt() {
    alert('Form đã gửi!')
  }

  function submitForm() {
  submitted.value = true
  alernt()
  console.log('Form submitted:', form)
}
</script>
<template>
  <div class="register">

    <h1 class="register-header">Register Form</h1>

    <form @submit.prevent="submitForm">

      <div class="register-form">
        <label class="register-form__lable" for="email">Email</label>
        <input v-model="form.email" class="register-form__input" type="email" id="email" name="email" required />
      </div>

      <div class="register-form">
        <label class="register-form__lable" for="password">Password</label>
        <input v-model="form.user" class="register-form__input" type="password" id="password" name="password" required />
      </div>

      <div class ="register-form">
        <label class="register-form__lable" for="confirm-password">Confirm Password</label>
        <input v-model="form.confirmPassword" class="register-form__input" type="password" id="confirm-password" name="confirm-password" required />
      </div>

      <div class="register-form">
        <label class="register-form__lable" for="bio">Introduction</label>
        <textarea class="register-form__input" id="bio" v-model="form.bio" ></textarea>
      </div>

      <div>
        <label>
          <input type="checkbox" v-model="form.acceptTerms" />
          Accept Terms
        </label>
      </div>

      <div>
        <label class="register-form__lable">Giới tính:</label>
        <label><input type="radio" value="Nam" v-model="form.gender" /> Nam</label>
        <label><input type="radio" value="Nữ" v-model="form.gender" /> Nữ</label>
        <label><input type="radio" value="Khác" v-model="form.gender" /> Khác</label>
      </div>

      <div>
        <label class="register-form__lable" for="country">Quốc gia:</label>
        <select class="register-form__input" id="country" v-model="form.country">
          <option disabled value="">Chọn quốc gia</option>
          <option>Việt Nam</option>
          <option>Mỹ</option>
          <option>Nhật Bản</option>
          <option>Pháp</option>
        </select>
      </div>


      <button class="register-form__button" type="submit">Register</button>
    </form>
    <h2 v-if="submitted">Data Json:</h2>
    <pre class="json-output" v-if="submitted">
      {{form}}
    </pre>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/LoginView.scss";
</style>
