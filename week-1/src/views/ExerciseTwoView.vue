<script setup lang="ts">
import TextBlock from '../components/TextBlockComponent.vue'
import ImageBlock from '../components//ImageBlockComponent.vue'
import VideoBlock from '../components//VideoBlockComponent.vue'

const componentsMap = {
  TextBlock,
  ImageBlock,
  VideoBlock,
} as const

type BlockType = keyof typeof componentsMap

const blocks: { type: BlockType; id: number }[] = [
  { type: 'TextBlock', id: 1 },
  { type: 'ImageBlock', id: 2 },
  { type: 'VideoBlock', id: 3 },
]
</script>

<template>
  <div class="container">
    <h1>Bài 2: Dynamic Component Blocks</h1>
    <div v-for="block in blocks" :key="block.id">
      <component :is="componentsMap[block.type]" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '../assets//styles/exercise-two'
</style>
