<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

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
        <img src="../assets/logo/logo1.png" alt="实验室" />
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
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 0.8rem 0;
}

.header-content {
  max-width: 1800px; /* 增加最大宽度 */
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8rem; /* 增加logo和导航之间的间距 */
}

.logo-area {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  min-width: 300px; /* 增加logo区域的最小宽度 */
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
  gap: 3rem; /* 增加导航项之间的间距 */
  justify-content: flex-end;
  flex: 1;
}

.main-nav {
  display: flex;
  align-items: center;
}

.main-nav ul {
  display: flex;
  gap: 3rem; /* 增加导航项之间的间距 */
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
    padding: 0.6rem 0;
  }

  .header-content {
    padding: 0 1rem;
    flex-direction: column;
    gap: 1rem;
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
}
</style> 