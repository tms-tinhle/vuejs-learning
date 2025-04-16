<template>
  <div class="base-input">
    <label :for="id">{{ label }}</label>
    <input :id="id" v-bind="$attrs" v-model="modelValue" class="base-input__control" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  id: string
}>()
const modelValue = defineModel<string>()
</script>

<style scoped lang="scss">
.base-input {
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.4rem;
    font-weight: 600;
    color: #444;
  }

  &__control {
    padding: 0.6rem 1rem;
    border: 1px solid #ccc;
    border-radius: 8px; 
    font-size: 1rem;
    transition: border-color 0.2s;

    &:focus {
      border-color: #007bff;
      outline: none;
    }
  }
}
</style>
