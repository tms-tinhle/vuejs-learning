<template>
  <label class="base-checkbox">
    <input
    type="checkbox"
    v-model="modelValue"
    class="base-checkbox__input"
    />
    <span class="base-checkbox__label"></span>
  </label>
</template>
<script setup lang="ts">
const modelValue = defineModel<boolean>()
</script>

<style scoped lang="scss">
.base-checkbox {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  &__input {
    width: 18px;
    height: 18px;
  }

  &__label {
    font-weight: 500;
    color: #333;
  }
}
</style>
