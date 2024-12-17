<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <div class="achievements-container">
    <h1>科研成果</h1>
    <div class="achievements-tabs">
      <div class="tab-buttons">
        <button class="active">论文发表</button>
        <button>专利授权</button>
        <button>科研项目</button>
      </div>
      <div class="tab-content">
        <div class="achievement-list">
          <div class="achievement-item" v-for="(item, index) in 5" :key="index">
            <h3>成果标题</h3>
            <p>成果描述...</p>
            <div class="meta">
              <span>发表时间：2023</span>
              <span>作者：张三等</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.achievements-container {
  padding: 1rem;
}

.tab-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.tab-buttons button {
  padding: 0.5rem 2rem;
  border: none;
  background: #f5f5f5;
  border-radius: 4px;
  cursor: pointer;
}

.tab-buttons button.active {
  background: #1a6eb5;
  color: white;
}

.achievement-item {
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
}

.meta {
  margin-top: 1rem;
  color: #666;
  font-size: 0.9rem;
  display: flex;
  gap: 2rem;
}
</style> 