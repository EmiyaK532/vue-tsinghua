<script setup lang="ts">
import { ref } from 'vue'

const quickLinks = ref([
  { title: '实验室介绍', link: '#' },
  { title: '研究方向', link: '#' },
  { title: '学术论文', link: '#' },
  { title: '人才招聘', link: '#' },
  { title: '联系我们', link: '#' }
])

const latestPublications = ref([
  {
    title: '高性能水润滑轴承关键技术研究',
    authors: '张三, 李四, 王五',
    journal: 'Tribology International',
    year: '2024'
  },
  {
    title: '纳米尺度下摩擦学机理研究新进展',
    authors: '李四, 王五',
    journal: 'Wear',
    year: '2024'
  }
])
</script>

<template>
  <aside class="sidebar">
    <div class="quick-links">
      <h3>快速链接</h3>
      <ul>
        <li v-for="link in quickLinks" :key="link.title">
          <a :href="link.link">{{ link.title }}</a>
        </li>
      </ul>
    </div>

    <div class="latest-publications">
      <h3>最新发表</h3>
      <div v-for="pub in latestPublications" :key="pub.title" class="publication-item">
        <h4>{{ pub.title }}</h4>
        <p class="authors">{{ pub.authors }}</p>
        <p class="journal">{{ pub.journal }}, {{ pub.year }}</p>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 300px;
  flex-shrink: 0;
}

.quick-links, .latest-publications {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

h3 {
  color: #1a6eb5;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #eee;
}

.quick-links ul {
  list-style: none;
  padding: 0;
}

.quick-links a {
  display: block;
  padding: 8px 0;
  color: #333;
  text-decoration: none;
  transition: color 0.3s;
}

.quick-links a:hover {
  color: #1a6eb5;
}

.publication-item {
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
}

.publication-item:last-child {
  border-bottom: none;
}

.publication-item h4 {
  font-size: 1rem;
  margin: 0 0 0.5rem 0;
  color: #333;
}

.authors {
  color: #666;
  font-size: 0.9rem;
  margin: 0.3rem 0;
}

.journal {
  color: #888;
  font-size: 0.9rem;
  font-style: italic;
  margin: 0;
}
</style> 