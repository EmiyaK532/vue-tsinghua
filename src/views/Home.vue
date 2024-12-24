<script setup lang="ts">
// import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import NewsCarousel from '@/components/NewsCarousel.vue'
import NewsList from '@/components/NewsList.vue'
import Sidebar from '@/components/Sidebar.vue'

const { t } = useI18n()
</script>

<template>
  <div class="home-container">
    <div class="carousel-section no-gap">
      <NewsCarousel />
    </div>
    
    <div class="content-section">
      <div class="content-wrapper">
        <div class="content-grid">
          <!-- 新闻动态 -->
          <section class="news-section">
            <h2>{{ t('news.title') }}</h2>
            <NewsList />
          </section>

          <!-- 通知公告 -->
          <section class="announcement-section">
            <h2>{{ t('announcements.title') }}</h2>
            <div class="announcement-list">
              <!-- 公告列表将在组件中实现 -->
            </div>
          </section>

          <!-- 研究亮点 -->
          <section class="highlights-section">
            <h2>{{ t('research.highlights') }}</h2>
            <div class="highlights-list">
              <!-- 研究亮点列表将在组件中实现 -->
            </div>
          </section>
        </div>
      </div>
      <Sidebar />
    </div>
  </div>
</template>

<style scoped>
.home-container {
  width: 100%;
}

.carousel-section.no-gap {
  margin-top: -60px; /* 抵消header的高度 */
  width: 100%;
}

/* 确保轮播图容器宽度100% */
.carousel-section.no-gap :deep(.el-carousel),
.carousel-section.no-gap :deep(.el-carousel__container) {
  width: 100%;
}

.content-section {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
}

.content-wrapper {
  flex: 1;
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

section {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #1a6eb5;
}
</style> 