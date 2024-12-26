<script setup lang="ts">
import { ref } from 'vue'

const papers = ref([
  {
    title: '论文标题1',
    authors: '作者1, 作者2, 作者3',
    journal: 'FRICTION',
    year: '2024',
    volume: '12',
    issue: '1',
    pages: '1-10'
  }
  // ... 更多论文
])
</script>

<template>
  <div class="papers">
    <h2>论文发表</h2>
    <div class="papers-list">
      <div v-for="paper in papers" 
           :key="paper.title" 
           class="paper-card">
        <h3>{{ paper.title }}</h3>
        <p class="authors">{{ paper.authors }}</p>
        <p class="citation">
          {{ paper.journal }}, {{ paper.year }}, 
          {{ paper.volume }}({{ paper.issue }}): {{ paper.pages }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.papers {
  padding: 1rem;
}

.papers-list {
  margin-top: 1.5rem;
}

.paper-card {
  background: #f8f8f8;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.paper-card h3 {
  color: #1a6eb5;
  margin-bottom: 0.5rem;
}

.authors {
  color: #666;
  margin-bottom: 0.5rem;
}

.citation {
  color: #333;
  font-style: italic;
}
</style> 