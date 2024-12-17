<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <div class="leadership-container">
    <h1>现任领导</h1>
    <div class="leaders-grid">
      <div class="leader-card" v-for="(leader, index) in 6" :key="index">
        <div class="photo"></div>
        <div class="info">
          <h3>领导姓名</h3>
          <p>职位</p>
          <p>研究方向</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.leadership-container {
  padding: 1rem;
}

.leaders-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.leader-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.photo {
  height: 200px;
  background: #f5f5f5;
}

.info {
  padding: 1rem;
}

.info h3 {
  margin: 0;
  color: #333;
}

.info p {
  margin: 0.5rem 0;
  color: #666;
}
</style> 