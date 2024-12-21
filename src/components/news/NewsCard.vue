<script setup lang="ts">
interface Props {
  title: string
  date: string
  summary: string
  link: string
  image?: string
}

defineProps<Props>()
</script>

<template>
  <div class="news-card">
    <div v-if="image" class="news-image">
      <img :src="image" :alt="title">
    </div>
    <div class="news-content">
      <h3 class="news-title">
        <router-link :to="link">{{ title }}</router-link>
      </h3>
      <p class="news-summary">{{ summary }}</p>
      <div class="news-meta">
        <span class="news-date">{{ date }}</span>
        <router-link :to="link" class="read-more">阅读更多</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.news-card {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.news-card:hover {
  transform: translateY(-5px);
}

.news-image {
  flex: 0 0 200px;
  height: 150px;
  overflow: hidden;
  border-radius: 4px;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.news-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.news-title a {
  color: #333;
  text-decoration: none;
  transition: color 0.3s;
}

.news-title a:hover {
  color: #1a6eb5;
}

.news-summary {
  color: #666;
  margin: 1rem 0;
  line-height: 1.6;
}

.news-meta {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.news-date {
  color: #999;
  font-size: 0.9rem;
}

.read-more {
  color: #1a6eb5;
  text-decoration: none;
  font-size: 0.9rem;
}
</style> 