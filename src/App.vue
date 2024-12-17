<script setup lang="ts">
// import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import NewsCarousel from './components/NewsCarousel.vue'
import NewsList from './components/NewsList.vue'
import 'animate.css'
// import "./style.css"

const { t } = useI18n()
</script>

<template>
  <div class="app-wrapper">
    <div class="animated-bg left"></div>
    <div class="animated-bg right"></div>
    
    <div class="app-container">
      <Header class="floating-header" />
      
      <div class="main-wrapper">
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
  </div>
</template>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  background: #2d94d0;
  padding: 0 60px 60px 60px;
  position: relative;
  overflow: hidden;
  z-index: 0;
}

.app-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  overflow: visible;
}

.main-wrapper {
  padding-top: 60px;
  position: relative;
}

.floating-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.carousel-section {
  position: relative;
  width: 100%;
  margin-bottom: 2rem;
}

.main-content {
  position: relative;
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

/* 左侧动态背景 */
.animated-bg.left {
  position: absolute;
  left: 0;
  top: 0;
  width: 60px;
  height: 100%;
  background: linear-gradient(
    45deg,
    rgba(45, 148, 208, 0.8) 0%,
    rgba(45, 148, 208, 0.9) 50%,
    rgba(45, 148, 208, 0.8) 100%
  );
  backdrop-filter: blur(10px);
  animation: gradientBG 8s ease infinite;
}

/* 右侧动态背景 */
.animated-bg.right {
  position: absolute;
  right: 0;
  top: 0;
  width: 60px;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(45, 148, 208, 0.8) 0%,
    rgba(45, 148, 208, 0.9) 50%,
    rgba(45, 148, 208, 0.8) 100%
  );
  backdrop-filter: blur(10px);
  animation: gradientBG 8s ease infinite reverse;
}

/* 毛玻璃效果 */
.animated-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(20px);
  animation: blurPulse 4s ease-in-out infinite;
}

/* 动态渐变动画 */
@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* 毛玻璃效果动画 */
@keyframes blurPulse {
  0% {
    backdrop-filter: blur(10px);
  }
  50% {
    backdrop-filter: blur(20px);
  }
  100% {
    backdrop-filter: blur(10px);
  }
}

/* 添加浮动粒子效果 */
.animated-bg::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0.2) 0%,
    transparent 60%
  );
  background-size: 15px 15px;
  animation: particleFloat 20s linear infinite;
}

@keyframes particleFloat {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}

/* 响应式调整 */
@media (max-width: 1400px) {
  .app-wrapper {
    padding: 0 40px 40px 40px;
  }
  .animated-bg {
    width: 40px;
  }
}

@media (max-width: 1200px) {
  .app-wrapper {
    padding: 0 30px 30px 30px;
  }
  .animated-bg {
    width: 30px;
  }
}

@media (max-width: 768px) {
  .app-wrapper {
    padding: 0 15px 15px 15px;
  }
  .animated-bg {
    width: 15px;
  }
}

/* 其他现有样式保持不变... */

/* 添加全局层级控制 */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.main-content {
  margin-top: 60px; /* header的高度 */
  position: relative;
}

/* 轮播图层级控制 */
.carousel-container {
  position: relative;
  z-index: 1;
}
</style>
