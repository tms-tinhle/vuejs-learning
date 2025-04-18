<script setup lang="ts">

const props = defineProps({
  name: {
    type: String,
  }
});

</script>

<template>
  <h1>Xin chào, {{ props.name }}</h1>
</template>

<style lang="scss">
  @use '../assets/styles/components/hello-user.scss';
</style>
