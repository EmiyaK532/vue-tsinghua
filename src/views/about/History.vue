<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <div class="history-container">
    <h1>历史沿革</h1>
    <div class="timeline">
      <div class="timeline-item" v-for="(item, index) in 5" :key="index">
        <div class="year">202{{ index }}</div>
        <div class="event">重要历史事件描述...</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.history-container {
  padding: 1rem;
}

.timeline {
  margin-top: 2rem;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 120px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #e0e0e0;
}

.timeline-item {
  display: flex;
  margin-bottom: 2rem;
  position: relative;
}

.year {
  width: 100px;
  font-weight: bold;
  color: #1a6eb5;
}

.event {
  flex: 1;
  margin-left: 3rem;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: 4px;
}
</style> 