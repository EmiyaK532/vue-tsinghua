<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import 'animate.css'

const { locale } = useI18n()
const currentLang = ref(locale.value)

const switchLanguage = () => {
  locale.value = locale.value === 'zh' ? 'en' : 'zh'
  currentLang.value = locale.value
}
</script>

<template>
  <header class="site-header">
    <div class="header-content">
      <!-- Logo区域 -->
      <div class="logo-area">
        <!-- <img src="../assets/logo/logo1.png" alt="实验室" /> -->
        <div class="title-wrapper">
          <h1 class="animate__animated animate__fadeIn">
            <span class="animate__animated animate__slideInLeft">中国矿业大学</span>
            <span class="animate__animated animate__slideInRight">全国重点实验室</span>
          </h1>
          <p class="subtitle animate__animated animate__fadeIn animate__delay-1s">
            NATIONAL KEY LABORATORY OF CHINA UNIVERSITY OF MINING AND TECHNOLOGY
          </p>
        </div>
      </div>

      <!-- 导航区域 -->
      <div class="nav-area">
        <nav class="main-nav">
          <ul>
            <li><a href="#">首页</a></li>
            <li><a href="#">实验室简介</a></li>
            <li><a href="#">科学研究</a></li>
            <li><a href="#">学术期刊</a></li>
            <li><a href="#">人才培养</a></li>
          </ul>
        </nav>

        <div class="lang-switch">
          <button @click="switchLanguage">
            {{ currentLang === 'zh' ? 'EN' : '中文' }}
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  /* 渐变背景：从左到右透明度逐渐增加 */
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.95) 15%,
    rgba(255, 255, 255, 0.98) 25%,
    rgba(255, 255, 255, 0.98) 100%
  );
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0;
  position: relative;
  /* 添加右侧圆角 */
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
}

.header-content {
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8rem;
  height: 100%;
  /* 确保内容区域也有圆角，防止内容溢出 */
  border-bottom-right-radius: 20px;
  overflow: hidden;
}

.logo-area {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  min-width: 300px;
  height: 60px;
}

.logo-area img {
  height: 100%;
  width: auto;
  object-fit: contain;
}

.nav-area {
  display: flex;
  align-items: center;
  gap: 3rem;
  justify-content: flex-end;
  flex: 1;
}

.main-nav {
  display: flex;
  align-items: center;
}

.main-nav ul {
  display: flex;
  gap: 3rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.main-nav a {
  color: #333;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem 0;
  position: relative;
  white-space: nowrap;
}

.main-nav a:hover {
  color: #1a6eb5;
}

.main-nav a:hover::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #1a6eb5;
}

.lang-switch button {
  padding: 0.4rem 1.2rem;
  border: 1px solid #1a6eb5;
  background: transparent;
  color: #1a6eb5;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  white-space: nowrap;
}

.lang-switch button:hover {
  background: #1a6eb5;
  color: white;
}

/* 响应式调整 */
@media (max-width: 1400px) {
  .header-content {
    gap: 6rem;
  }

  .main-nav ul {
    gap: 2.5rem;
  }
}

@media (max-width: 1200px) {
  .header-content {
    gap: 4rem;
  }

  .main-nav ul {
    gap: 2rem;
  }

  .logo-area {
    min-width: 250px;
  }
}

@media (max-width: 768px) {
  .site-header {
    height: auto;
    padding: 0.8rem 0;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.6) 0%,
      rgba(255, 255, 255, 0.98) 30%
    );
    /* 移动端可以适当减小圆角 */
    border-bottom-right-radius: 15px;
  }

  .header-content {
    padding: 0 1rem;
    flex-direction: column;
    gap: 1rem;
    border-bottom-right-radius: 15px;
  }

  .logo-area {
    height: 50px;
    min-width: 200px;
  }

  .nav-area {
    flex-direction: column;
    width: 100%;
    gap: 1rem;
  }

  .main-nav {
    width: 100%;
  }

  .main-nav ul {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .lang-switch {
    margin-top: 0.5rem;
  }

  .site-header::after {
    border-bottom-right-radius: 15px;
  }
}

/* 底部边框渐变效果，需要考虑圆角 */
.site-header::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.02) 0%,
    rgba(0, 0, 0, 0.05) 50%,
    rgba(0, 0, 0, 0.02) 100%
  );
  /* 保持与header相同的圆角 */
  border-bottom-right-radius: 20px;
}

.title-wrapper {
  margin-left: 1rem;
}

h1 {
  font-size: 1.5rem;
  color: #333;
  margin: 0;
  display: flex;
  gap: 0.5rem;
}

.subtitle {
  font-size: 0.8rem;
  color: #666;
  margin: 0.3rem 0 0 0;
  opacity: 0.8;
}

/* 确保动画元素初始状态不可见 */
.animate__slideInLeft {
  --animate-duration: 1s;
  animation-delay: 0.2s;
}

.animate__slideInRight {
  --animate-duration: 1s;
  animation-delay: 0.4s;
}

.animate__fadeIn {
  --animate-duration: 1.5s;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .title-wrapper h1 {
    font-size: 1.2rem;
    flex-direction: column;
    gap: 0.2rem;
  }

  .subtitle {
    font-size: 0.7rem;
  }
}
</style> 