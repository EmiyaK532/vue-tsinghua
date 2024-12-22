<template>
  <TransitionGroup
    name="list"
    tag="div"
    class="news-list"
    :css="false"
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave">
    <div v-for="(item, index) in news" 
         :key="item.id"
         :data-index="index"
         class="news-item">
      <NewsCard v-bind="item" />
    </div>
  </TransitionGroup>
</template>

<script setup lang="ts">
import gsap from 'gsap'

const beforeEnter = (el: Element) => {
  gsap.set(el, {
    opacity: 0,
    transform: 'translateX(-20px)'
  })
}

const enter = (el: Element, done: () => void) => {
  const delay = (el as HTMLElement).dataset.index ? 
    Number(el.dataset.index) * 0.1 : 0
  
  gsap.to(el, {
    opacity: 1,
    transform: 'translateX(0)',
    delay,
    duration: 0.4,
    ease: 'power2.out',
    onComplete: done
  })
}

const leave = (el: Element, done: () => void) => {
  gsap.to(el, {
    opacity: 0,
    transform: 'translateX(20px)',
    duration: 0.3,
    ease: 'power2.in',
    onComplete: done
  })
}
</script> 