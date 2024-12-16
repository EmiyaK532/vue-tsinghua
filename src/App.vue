<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import NewsCarousel from './components/NewsCarousel.vue'
import NewsList from './components/NewsList.vue'

const { t } = useI18n()
</script>

<template>
  <div class="app-container">
    <Header />
    
    <!-- 新闻轮播区域 - 全宽度显示 -->
    <div class="carousel-wrapper">
      <NewsCarousel />
    </div>
    
    <!-- 主要内容区域 - 带边距 -->
    <div class="main-content">
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
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
}

.carousel-wrapper {
  width: 100%;
  background-color: #fff;
  margin-bottom: 2rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.main-content {
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 20px;
  gap: 20px;
  width: 100%;
  box-sizing: border-box;
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

/* 响应式布局 */
@media (max-width: 768px) {
  .main-content {
    flex-direction: column;
    padding: 0 10px;
  }

  .content-grid {
    grid-template-columns: 1fr;
  }

  section {
    margin-bottom: 1rem;
  }
}
</style>
