<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <div class="awards-container">
    <h1>获奖情况</h1>
    <div class="awards-grid">
      <div class="award-card" v-for="(award, index) in 6" :key="index">
        <div class="award-icon">🏆</div>
        <div class="award-info">
          <h3>奖项名称</h3>
          <p>获奖时间：2023年</p>
          <p>获奖人员：张三等</p>
          <p>颁发单位：某某单位</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.awards-container {
  padding: 1rem;
}

.awards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.award-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.award-icon {
  font-size: 2rem;
}

.award-info h3 {
  margin: 0 0 1rem 0;
  color: #1a6eb5;
}

.award-info p {
  margin: 0.5rem 0;
  color: #666;
}
</style> 