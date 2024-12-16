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
      <el-carousel :interval="4000" height="600px">
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

@media (max-width: 1400px) {
  .side-space {
    width: 6vw;
  }
}

@media (max-width: 1200px) {
  .side-space {
    width: 4vw;
  }
}

@media (max-width: 768px) {
  .news-carousel-container {
    margin-top: -45px;
  }

  .side-space {
    width: 3vw;
    min-width: 30px;
  }

  :deep(.el-carousel__container) {
    height: 400px !important;
  }

  .side-space {
    height: 400px;
  }

  .news-overlay {
    padding: 15px;
  }

  .news-overlay h3 {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .side-space {
    width: 2vw;
    min-width: 15px;
  }
}
</style> 