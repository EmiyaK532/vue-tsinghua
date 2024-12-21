<script setup lang="ts">
import { ref } from 'vue'
import PageLayout from '@/components/layouts/PageLayout.vue'

interface Visitor {
  id: number
  name: string
  englishName: string
  organization: string
  country: string
  period: string
  research: string
}

const visitors = ref<Visitor[]>([
  {
    id: 1,
    name: 'John Smith',
    englishName: 'John Smith',
    organization: 'MIT',
    country: '美国',
    period: '2023.09 - 2024.03',
    research: '智能采矿技术'
  },
  // ... 添加更多访问学者数据
])
</script>

<template>
  <PageLayout title="访问学者">
    <div class="visitors-list">
      <div v-for="visitor in visitors" 
           :key="visitor.id"
           class="visitor-card">
        <div class="visitor-info">
          <h3>{{ visitor.name }} ({{ visitor.englishName }})</h3>
          <p class="organization">{{ visitor.organization }}</p>
          <p class="country">{{ visitor.country }}</p>
          <p class="period">访问期间：{{ visitor.period }}</p>
          <p class="research">研究方向：{{ visitor.research }}</p>
        </div>
      </div>
    </div>
  </PageLayout>
</template>

<style scoped>
.visitors-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.visitor-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.organization {
  color: #1a6eb5;
  margin: 0.5rem 0;
}

.country, .period, .research {
  color: #666;
  margin: 0.3rem 0;
}
</style> 