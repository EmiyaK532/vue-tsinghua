<script setup lang="ts">
import { ref } from 'vue'
import { ElCarousel, ElCarouselItem } from 'element-plus'

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
</script>

<template>
  <div class="news-carousel-container">
    <div class="news-carousel">
      <el-carousel 
        :interval="5000" 
        arrow="always"
        :autoplay="true"
        trigger="click"
        :initial-index="0"
        height="600px"
      >
        <el-carousel-item v-for="item in news" :key="item.id">
          <div class="carousel-content">
            <img :src="item.image" :alt="item.title">
            <div class="news-overlay">
              <h3>{{ item.title }}</h3>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<style scoped>
.news-carousel-container {
  width: 100%;
  position: relative;
  margin-top: -60px;
}

.news-carousel {
  width: 100%;
  overflow: hidden;
}

/* 轮播图容器样式 */
:deep(.el-carousel__container) {
  position: relative;
}

/* 轮播项样式 */
:deep(.el-carousel__item) {
  overflow: hidden;
  transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center center;
}

/* 当前显示的轮播项 */
:deep(.el-carousel__item.is-active) {
  z-index: 2;
  transform: scale(1) translateZ(0);
}

/* 即将显示的轮播项 */
:deep(.el-carousel__item.is-animating) {
  transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 隐藏的轮播项 */
:deep(.el-carousel__item:not(.is-active)) {
  transform: scale(1.4) translateZ(-100px);
  opacity: 0;
  pointer-events: none;
}

/* 箭头样式 */
:deep(.el-carousel__arrow) {
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  width: 44px;
  height: 44px;
  transition: all 0.3s ease;
}

:deep(.el-carousel__arrow:hover) {
  background-color: rgba(0, 0, 0, 0.5);
}

/* 指示器样式 */
:deep(.el-carousel__indicators) {
  bottom: 20px;
}

:deep(.el-carousel__indicator) {
  padding: 12px 4px;
}

:deep(.el-carousel__button) {
  width: 30px;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s;
}

:deep(.el-carousel__indicator.is-active .el-carousel__button) {
  background-color: #fff;
}

.carousel-content {
  position: relative;
  width: 100%;
  height: 100%;
  transform-origin: center center;
  perspective: 1000px;
}

.carousel-content img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center center;
  will-change: transform;
}

.news-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  padding: 30px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

/* 活动项的遮罩层动画 */
:deep(.el-carousel__item.is-active) .news-overlay {
  opacity: 1;
  transform: translateY(0);
}

.news-overlay h3 {
  color: white;
  margin: 0;
  font-size: 1.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .news-carousel-container {
    margin-top: -45px;
  }

  :deep(.el-carousel__container) {
    height: 500px !important;
  }

  .news-overlay {
    padding: 15px;
  }

  .news-overlay h3 {
    font-size: 1.2rem;
  }

  :deep(.el-carousel__arrow) {
    width: 36px;
    height: 36px;
  }

  :deep(.el-carousel__indicators) {
    bottom: 10px;
  }

  :deep(.el-carousel__button) {
    width: 20px;
  }
}
</style> 