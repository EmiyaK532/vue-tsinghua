<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <div class="research-tasks">
    <h1>科研任务</h1>
    <div class="tasks-grid">
      <div class="task-card" v-for="(task, index) in 6" :key="index">
        <h3>研究方向 {{ index + 1 }}</h3>
        <p>研究任务描述...</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.research-tasks {
  padding: 1rem;
}

.tasks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.task-card {
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.task-card:hover {
  transform: translateY(-5px);
}
</style> 