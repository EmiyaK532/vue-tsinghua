<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <div class="directions-container">
    <h1>研究方向</h1>
    <div class="directions-list">
      <div class="direction-item" v-for="(direction, index) in 4" :key="index">
        <h2>研究方向 {{ index + 1 }}</h2>
        <p class="description">研究方向详细描述...</p>
        <div class="projects">
          <h3>相关项目</h3>
          <ul>
            <li v-for="(project, pIndex) in 3" :key="pIndex">
              项目 {{ pIndex + 1 }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.directions-container {
  padding: 1rem;
}

.direction-item {
  margin-bottom: 3rem;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.description {
  margin: 1rem 0;
  line-height: 1.6;
}

.projects {
  margin-top: 1.5rem;
}

.projects ul {
  list-style: none;
  padding-left: 1rem;
}

.projects li {
  margin: 0.5rem 0;
  color: #666;
}
</style> 