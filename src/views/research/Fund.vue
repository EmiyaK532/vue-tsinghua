<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <div class="fund">
    <h2>开放基金</h2>
    <div class="description">
      <!-- 开放基金介绍 -->
    </div>
    <div class="attachments">
      <h3>相关文件</h3>
      <div class="file-list">
        <a href="#" class="file-item">申请书模板</a>
        <a href="#" class="file-item">结题报告模板</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fund {
  padding: 1rem;
}

.description {
  margin-bottom: 2rem;
  line-height: 1.6;
}

.file-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.file-item {
  color: #1a6eb5;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.file-item:hover {
  text-decoration: underline;
}
</style> 