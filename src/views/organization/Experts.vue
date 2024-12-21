<script setup lang="ts">
import { ref } from 'vue'

interface Expert {
  name: string
  title: string
  organization: string
  honors: string[]
}

const experts = ref<Expert[]>([
  {
    name: '张三',
    title: '教授',
    organization: '中国矿业大学',
    honors: ['院士', '长江学者']
  },
  // ... 添加更多专家数据
])
</script>

<template>
  <div class="experts-container">
    <h1>咨询专家委员会</h1>
    <div class="experts-grid">
      <div v-for="expert in experts" 
           :key="expert.name" 
           class="expert-card">
        <h3>{{ expert.name }}</h3>
        <p>{{ expert.title }}</p>
        <p>{{ expert.organization }}</p>
        <div class="honors">
          <span v-for="honor in expert.honors" 
                :key="honor" 
                class="honor-tag">
            {{ honor }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.experts-container {
  padding: 2rem;
}

.experts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.expert-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.honors {
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.honor-tag {
  background: #1a6eb5;
  color: white;
  padding: 0.2rem 0.8rem;
  border-radius: 4px;
  font-size: 0.9rem;
}
</style> 