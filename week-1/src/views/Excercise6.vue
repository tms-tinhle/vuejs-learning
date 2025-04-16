<template>
  <!-- ex1 -->
  <div class="ex">
    <div class="ex__one">
      <input class="input" type="text" placeholder="Enter your status:" @keyup="handleEnter" />
      <div>
        <p v-if="status == 'loading'">Data loading...</p>
        <p v-else-if="status == 'success'">Data ready!</p>
        <p v-else>Error</p>
      </div>
    </div>
  </div>
  <hr>
  <!-- ex2 -->
  <div class="ex">
    <div class="ex__two">
      <BaseInput label="Enter your age:" id="age" type="number" v-model="age" placeholder="Enter your age" />
      <p v-if="ageNum < 18">Bạn là người chưa đủ tuổi.</p>
      <p v-else-if="ageNum >= 18 && ageNum <= 60">Bạn là người trưởng thành.</p>
      <p v-else-if="ageNum > 60">Bạn là người cao tuổi.</p>
      <p v-else>Vui lòng nhập tuổi hợp lệ.</p>
    </div>
  </div>
  <hr>
  <!-- ex3 -->
  <div class="ex">
    <div class="ex__three">
      <h1>EX 3: Show / Hidden Text</h1>
      <TextToggle />
    </div>
  </div>

</template>

<script setup lang="ts">
import BaseInput from '@/components/atoms/BaseInput.vue'
import TextToggle from '@/components/molecule/TextToggle.vue'
import { ref, computed } from 'vue'
const status = ref('loading')

const changeStatus = (newStatus: string) => {
  status.value = newStatus
}

const handleEnter = (event: KeyboardEvent) => {
  const value = (event.target as HTMLInputElement).value.trim().toLowerCase()

  if (value === 'loading' || value === 'success') {
    changeStatus(value)
  } else {
    changeStatus('error')
  }
}

const age = ref("")
const ageNum = computed(() => parseInt(age.value))

</script>

<style lang="scss">
@use "@/assets/styles/Exercise6.scss";
</style>
