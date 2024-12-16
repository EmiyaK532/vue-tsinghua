<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

// 导入图片
import news1 from '@/assets/images/news/news1.jpg'
import news2 from '@/assets/images/news/news2.jpg'
import news3 from '@/assets/images/news/news3.jpg'

interface NewsItem {
  id: number
  title: string
  image: string
  link: string
}

const news = ref<NewsItem[]>([
  {
    id: 1,
    title: "实验室在纳米摩擦研究领域取得重要进展",
    image: news1,
    link: "#"
  },
  {
    id: 2,
    title: "2024年度学术委员会会议顺利召开",
    image: news2,
    link: "#"
  },
  {
    id: 3,
    title: "实验室获得国家自然科学基金重大项目支持",
    image: news3,
    link: "#"
  }
])

const currentIndex = ref(0)
const isAnimating = ref(false)
let autoplayTimer: number | null = null

const next = () => {
  if (isAnimating.value) return
  isAnimating.value = true
  currentIndex.value = (currentIndex.value + 1) % news.value.length
  setTimeout(() => {
    isAnimating.value = false
  }, 1200)
}

const prev = () => {
  if (isAnimating.value) return
  isAnimating.value = true
  currentIndex.value = currentIndex.value === 0 ? news.value.length - 1 : currentIndex.value - 1
  setTimeout(() => {
    isAnimating.value = false
  }, 1200)
}

const startAutoplay = () => {
  autoplayTimer = window.setInterval(next, 5000)
}

const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

onMounted(() => {
  startAutoplay()
})

onBeforeUnmount(() => {
  stopAutoplay()
})
</script>

<template>
  <div class="carousel-container" 
       @mouseenter="stopAutoplay" 
       @mouseleave="startAutoplay">
    <div class="carousel-wrapper">
      <div class="carousel-slides" 
           :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(item, index) in news" 
             :key="item.id" 
             class="carousel-slide"
             :class="{
               'is-active': index === currentIndex,
               'is-prev': (index === currentIndex - 1) || (currentIndex === 0 && index === news.length - 1),
               'is-next': (index === currentIndex + 1) || (currentIndex === news.length - 1 && index === 0)
             }">
          <div class="slide-content">
            <img :src="item.image" :alt="item.title">
            <div class="slide-overlay">
              <h3>{{ item.title }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button class="carousel-arrow prev" @click="prev">
      <i class="arrow-icon">←</i>
    </button>
    <button class="carousel-arrow next" @click="next">
      <i class="arrow-icon">→</i>
    </button>

    <div class="carousel-indicators">
      <button v-for="(_, index) in news" 
              :key="index"
              class="indicator"
              :class="{ active: index === currentIndex }"
              @click="currentIndex = index">
      </button>
    </div>
  </div>
</template>

<style scoped>
.carousel-container {
  width: 100%;
  height: 600px;
  position: relative;
  margin-top: -60px;
  perspective: 2000px;
  overflow: hidden;
}

.carousel-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
}

.carousel-slides {
  width: 100%;
  height: 100%;
  display: flex;
  transition: transform 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-slide {
  min-width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-content {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-slide.is-active {
  z-index: 2;
  transform: translateZ(0) scale(1);
}

.carousel-slide.is-prev,
.carousel-slide.is-next {
  transform: translateZ(400px) scale(1.4);
  opacity: 0;
}

.slide-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  padding: 30px;
  color: white;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.carousel-slide.is-active .slide-overlay {
  opacity: 1;
  transform: translateY(0);
}

.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  background: rgba(0, 0, 0, 0.3);
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
  z-index: 10;
}

.carousel-arrow:hover {
  background: rgba(0, 0, 0, 0.5);
}

.carousel-arrow.prev {
  left: 20px;
}

.carousel-arrow.next {
  right: 20px;
}

.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
}

.indicator {
  width: 30px;
  height: 2px;
  background: rgba(255, 255, 255, 0.7);
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}

.indicator.active {
  background: white;
}

@media (max-width: 768px) {
  .carousel-container {
    height: 500px;
    margin-top: -45px;
  }

  .carousel-arrow {
    width: 36px;
    height: 36px;
  }

  .slide-overlay {
    padding: 15px;
  }

  .slide-overlay h3 {
    font-size: 1.2rem;
  }
}
</style> 