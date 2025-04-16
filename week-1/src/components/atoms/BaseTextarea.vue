<script setup lang="ts">
defineProps<{
  label: string
  modelValue: string
  id?: string
}>()

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="base-textarea">
    <label :for="id">{{ label }}</label>
    <textarea
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    ></textarea>
  </div>
</template>

<style scoped>
.base-textarea {
  margin-bottom: 1rem;
}
textarea {
  border-radius: 8px;
  padding: 0.5rem;
  min-height: 80px;
}
</style>
