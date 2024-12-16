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
      <div class="logo-area">
        <img src="../assets/logo.png" alt="清华大学摩擦学国家重点实验室" />
        <!-- <h1>清华大学摩擦学国家重点实验室</h1> -->
      </div>
      
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
  </header>
</template>

<style scoped>
.site-header {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-area {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo-area img {
  height: 50px;
}

.main-nav ul {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.main-nav a {
  color: #333;
  text-decoration: none;
  font-size: 1.1rem;
}

.main-nav a:hover {
  color: #1a6eb5;
}

.lang-switch button {
  padding: 0.5rem 1rem;
  border: 1px solid #1a6eb5;
  background: transparent;
  color: #1a6eb5;
  border-radius: 4px;
  cursor: pointer;
}
</style> 