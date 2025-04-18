<script lang="ts" setup>
  import {ref, watch} from 'vue';
  import { defineEmits, defineProps } from 'vue';

  const props = defineProps<{
    start: number
  }>();

  const emit = defineEmits<{
    (e: 'update', newValue: number): void
  }>();

  const count = ref(props.start);

  watch(() => props.start, (newValue) => {
    count.value = newValue;
  });

  const onIncrease = () => {
    count.value++;
    emit('update', count.value);
  };
  const onDecrease = () => {
    count.value--;
    emit('update', count.value);
  };

</script>

<template>
  <div class="container">
    <button @click="onIncrease">Increase</button>
    <button @click="onDecrease">Decrease</button>
    <span>{{ count }}</span>
  </div>
</template>

<style lang="scss" scoped>
  @use '../assets/styles/components/ChildCounterComponent.scss';
</style>


