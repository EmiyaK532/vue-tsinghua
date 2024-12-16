<script setup lang="ts">
import { ref } from 'vue'

interface News {
  id: number
  title: string
  date: string
  category: string
}

const newsList = ref<News[]>([
  {
    id: 1,
    title: "实验室成功举办2024年度学术研讨会",
    date: "2024-03-15",
    category: "学术活动"
  },
  {
    id: 2,
    title: "我院研究生在国际摩擦学大会上获得最佳论文奖",
    date: "2024-03-10",
    category: "获奖信息"
  },
  {
    id: 3,
    title: "实验室与德国柏林工业大学签署合作协议",
    date: "2024-03-05",
    category: "合作交流"
  }
])
</script>

<template>
  <div class="news-list-container">
    <div v-for="news in newsList" :key="news.id" class="news-item">
      <span class="news-category">{{ news.category }}</span>
      <h4 class="news-title">{{ news.title }}</h4>
      <span class="news-date">{{ news.date }}</span>
    </div>
  </div>
</template>

<style scoped>
.news-list-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.news-item {
  padding: 1rem;
  border-bottom: 1px solid #eee;
  transition: background-color 0.3s;
}

.news-item:hover {
  background-color: #f9f9f9;
}

.news-category {
  display: inline-block;
  padding: 2px 8px;
  background-color: #1a6eb5;
  color: white;
  border-radius: 4px;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
}

.news-title {
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #333;
}

.news-date {
  color: #888;
  font-size: 0.9rem;
}
</style> 