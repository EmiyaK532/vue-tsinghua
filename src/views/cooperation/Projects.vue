<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <div class="projects">
    <h2>合作项目</h2>
    <div class="year-sections">
      <!-- 按年度展示合作项目 -->
      <div class="year-section">
        <h3>2024年</h3>
        <div class="content">
          <!-- 2024年合作项目内容 -->
        </div>
      </div>
      <!-- 其他年份 -->
    </div>
  </div>
</template>

<style scoped>
.projects {
  padding: 1rem;
}

.year-section {
  margin-bottom: 2rem;
}

.year-section h3 {
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #1a6eb5;
}

.content {
  line-height: 1.6;
}
</style> 