<script setup lang="ts">
import { ref } from 'vue'

interface Institute {
  name: string
  description: string
  research_areas: string[]
  director: string
  contact: string
}

const institutes = ref<Institute[]>([
  {
    name: '煤矿灾害防控研究所',
    description: '主要从事煤矿安全生产理论与技术研究...',
    research_areas: [
      '煤矿瓦斯灾害防控',
      '矿井通风安全',
      '粉尘防治'
    ],
    director: '王五',
    contact: 'institute1@cumt.edu.cn'
  },
  // ... 添加更多研究所数据
])
</script>

<template>
  <div class="institutes-container">
    <h1>研究所</h1>
    <div class="institutes-list">
      <div v-for="institute in institutes" 
           :key="institute.name" 
           class="institute-card">
        <h2>{{ institute.name }}</h2>
        <p class="description">{{ institute.description }}</p>
        <div class="research-areas">
          <h3>研究方向：</h3>
          <ul>
            <li v-for="area in institute.research_areas" 
                :key="area">
              {{ area }}
            </li>
          </ul>
        </div>
        <div class="contact-info">
          <p><strong>所长：</strong>{{ institute.director }}</p>
          <p><strong>联系方式：</strong>{{ institute.contact }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.institutes-container {
  padding: 2rem;
}

.institutes-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
}

.institute-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.description {
  color: #666;
  margin: 1rem 0;
  line-height: 1.6;
}

.research-areas {
  margin: 1.5rem 0;
}

.research-areas ul {
  list-style: none;
  padding-left: 1rem;
  margin-top: 0.5rem;
}

.research-areas li {
  position: relative;
  padding-left: 1.5rem;
  margin: 0.5rem 0;
}

.research-areas li::before {
  content: '•';
  color: #1a6eb5;
  position: absolute;
  left: 0;
  font-size: 1.2em;
}

.contact-info {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
}

.contact-info p {
  margin: 0.5rem 0;
}
</style> 