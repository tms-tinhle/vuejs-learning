<!-- src/components/BaseDialog.vue -->
<template>
  <div class="wrapper">
    <div class="container">
      <header class="container__header">
        <slot name="header" />
      </header>

      <main class="container__body">
        <slot />
      </main>

      <footer class="container__footer">
        <slot name="footer" />
      </footer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/base-dialog';
</style>
