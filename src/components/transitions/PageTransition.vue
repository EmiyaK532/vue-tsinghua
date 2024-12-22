<script setup lang="ts">
import { useMotion } from '@vueuse/motion'
import { ref } from 'vue'

const pageRef = ref(null)
const { isAnimating } = useMotion(pageRef, {
  initial: {
    opacity: 0,
    y: 50,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 500,
      ease: 'easeOut',
    },
  },
  leave: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 300,
      ease: 'easeIn',
    },
  },
})
</script>

<template>
  <div ref="pageRef" class="page-transition">
    <slot></slot>
  </div>
</template>

<style scoped>
.page-transition {
  width: 100%;
  height: 100%;
}
</style> 