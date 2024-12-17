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
  },
  {
    id: 4,
    title: "实验室项目取得新进展",
    date: "2024-03-07",
    category: "科研进展"
  }
])
</script>

<template>
  <div class="news-list-container">
    <div class="news-list-wrapper">
      <div v-for="news in newsList" :key="news.id" class="news-item">
        <span class="news-category">{{ news.category }}</span>
        <h4 class="news-title">{{ news.title }}</h4>
        <span class="news-date">{{ news.date }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.news-list-container {
  position: relative;
  height: 300px;
  overflow: hidden;
  background: #fff;
}

.news-list-wrapper {
  position: relative;
  height: 100%;
  overflow-y: auto;
  padding-right: 10px;
}

.news-list-wrapper::-webkit-scrollbar {
  width: 4px;
}

.news-list-wrapper::-webkit-scrollbar-track {
  background: #f5f5f5;
  border-radius: 2px;
}

.news-list-wrapper::-webkit-scrollbar-thumb {
  background: #ddd;
  border-radius: 2px;
}

.news-list-wrapper::-webkit-scrollbar-thumb:hover {
  background: #bbb;
}

.news-item {
  padding: 0.8rem 1rem;
  border-bottom: 1px solid #eee;
  transition: all 0.3s ease;
  background: #fff;
}

.news-item:last-child {
  border-bottom: none;
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
  cursor: pointer;
  transition: color 0.3s;
}

.news-title:hover {
  color: #1a6eb5;
}

.news-date {
  color: #888;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .news-list-container {
    height: 280px;
  }

  .news-item {
    padding: 0.8rem;
  }

  .news-title {
    font-size: 0.95rem;
  }
}
</style> 