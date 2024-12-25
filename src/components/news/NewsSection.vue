<script setup lang="ts">
import { ref } from 'vue'
import NewsSlider from './NewsSlider.vue'
import NewsList from './NewsList.vue'

// 这里可以添加获取新闻数据的逻辑
</script>

<template>
  <div class="news-section-container">
    <div class="news-slider">
      <NewsSlider />
    </div>
    <div class="news-list">
      <NewsList />
    </div>
  </div>
</template>

<style scoped>
.news-section-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.news-slider {
  width: 100%;
  height: 300px;
}

.news-list {
  width: 100%;
}
</style> 