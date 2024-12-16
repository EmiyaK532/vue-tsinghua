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
    image: news1,  // 使用导入的图片
    link: "#"
  },
  {
    id: 2,
    title: "2024年度学术委员会会议顺利召开",
    image: news2,  // 使用导入的图片
    link: "#"
  },
  {
    id: 3,
    title: "实验室获得国家自然科学基金重大项目支持",
    image: news3,  // 使用导入的图片
    link: "#"
  }
])
</script>

<template>
  <div class="news-carousel-container">
    <div class="news-carousel">
      <el-carousel :interval="4000" height="500px">
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
  background: #fff;
}

.news-carousel {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;
}

.carousel-content {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-content img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.news-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  padding: 30px;
}

.news-overlay h3 {
  color: white;
  margin: 0;
  font-size: 1.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .news-carousel {
    padding: 0;
  }

  .el-carousel {
    height: 300px !important;
  }

  .news-overlay {
    padding: 15px;
  }

  .news-overlay h3 {
    font-size: 1.2rem;
  }
}

/* 大屏幕优化 */
@media (min-width: 1920px) {
  .news-carousel {
    max-width: 1600px;
  }
}
</style> 