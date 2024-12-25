<script setup lang="ts">
import { ref } from 'vue'
import { ElCarousel, ElCarouselItem } from 'element-plus'
import news1 from '@/assets/images/news/news1.jpg'
import news2 from '@/assets/images/news/news2.jpg'
import news3 from '@/assets/images/news/news3.jpg'
import news4 from '@/assets/images/news/news4.jpg'

// 示例数据，实际应从API获取
const news = ref([
  {
    id: 1,
    title: '高端装备界面科学与技术全国重点实验室第三届年终学术报告会顺利举行',
    image: news1,
    date: '2024.12.11'
  },
  {
    id: 2,
    title: '工业机器人时代 未来已来（宝藏科学课）',
    image: news2,
    date: '2024.12.23'
  },
  {
    id: 3,
    title: '高端装备界面科学与技术全国重点实验室与中国航发沈阳发展战略合作',
    image: news3,
    date: '2024.12.13'
  },
  {
    id: 4,
    title: '第三届高端装备界面科学与技术全国重点实验室年终学术报告会',
    image: news4,
    date: '2024.12.03'
  }
])
</script>

<template>
  <div class="news-slider">
    <el-carousel :interval="4000" height="300px">
      <el-carousel-item v-for="item in news" :key="item.id">
        <div class="news-slide">
          <img :src="item.image" :alt="item.title">
          <div class="news-info">
            <span class="date">{{ item.date }}</span>
            <h3 class="title">{{ item.title }}</h3>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
.news-slider {
  width: 100%;
  height: 300px;
}

.news-slide {
  position: relative;
  width: 100%;
  height: 100%;
}

.news-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.news-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: white;
}

.date {
  font-size: 0.9rem;
  opacity: 0.8;
}

.title {
  margin: 0.5rem 0 0;
  font-size: 1.2rem;
  line-height: 1.4;
}

:deep(.el-carousel__indicators) {
  transform: translateY(-20px);
}

:deep(.el-carousel__button) {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.7);
}
</style> 