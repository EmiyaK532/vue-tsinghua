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
  <div class="app-wrapper">
    <div class="app-container">
      <Header class="floating-header" />
      
      <!-- 轮播图区域 -->
      <div class="carousel-section">
        <NewsCarousel />
      </div>
      
      <!-- 主要内容区域 -->
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
  </div>
</template>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  background: #2d94d0; /* 紫色背景 */
  padding: 0 60px 60px 60px; /* 左右下方留白 */
}

.app-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
}

.floating-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
}

.carousel-section {
  position: relative;
  width: 100%;
  margin-bottom: 2rem;
}

.main-content {
  position: relative;
  z-index: 1;
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
@media (max-width: 1400px) {
  .app-wrapper {
    padding: 0 40px 40px 40px;
  }
}

@media (max-width: 1200px) {
  .app-wrapper {
    padding: 0 30px 30px 30px;
  }
}

@media (max-width: 768px) {
  .app-wrapper {
    padding: 0 15px 15px 15px;
  }

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
