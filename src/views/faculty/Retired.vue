<script setup lang="ts">
import { ref } from 'vue'
import PageLayout from '@/components/layouts/PageLayout.vue'
import PersonCard from '@/components/cards/PersonCard.vue'

interface RetiredStaff {
  id: number
  name: string
  title: string
  retireYear: number
  formerPosition: string
  achievements: string[]
  photo?: string
}

const retiredStaff = ref<RetiredStaff[]>([
  {
    id: 1,
    name: '李教授',
    title: '教授（退休）',
    retireYear: 2020,
    formerPosition: '实验室主任',
    achievements: [
      '国家科技进步二等奖',
      '长江学者特聘教授',
      '国家杰出青年科学基金获得者'
    ]
  },
  // ... 添加更多退休人员数据
])
</script>

<template>
  <PageLayout title="退休人员">
    <div class="retired-grid">
      <div v-for="staff in retiredStaff" 
           :key="staff.id"
           class="retired-card">
        <div class="photo">
          <img v-if="staff.photo" :src="staff.photo" :alt="staff.name">
          <div v-else class="photo-placeholder"></div>
        </div>
        <div class="info">
          <h3>{{ staff.name }}</h3>
          <p class="title">{{ staff.title }}</p>
          <p class="position">原任职：{{ staff.formerPosition }}</p>
          <p class="retire-year">退休年份：{{ staff.retireYear }}</p>
          <div class="achievements">
            <h4>主要成就：</h4>
            <ul>
              <li v-for="achievement in staff.achievements" 
                  :key="achievement">
                {{ achievement }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </PageLayout>
</template>

<style scoped>
.retired-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.retired-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.retired-card:hover {
  transform: translateY(-5px);
}

.photo, .photo-placeholder {
  height: 200px;
  background: #f5f5f5;
  overflow: hidden;
}

.photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info {
  padding: 1.5rem;
}

.title {
  color: #1a6eb5;
  font-weight: bold;
  margin: 0.5rem 0;
}

.position, .retire-year {
  color: #666;
  margin: 0.3rem 0;
}

.achievements {
  margin-top: 1rem;
}

.achievements h4 {
  color: #333;
  margin-bottom: 0.5rem;
}

.achievements ul {
  list-style: none;
  padding-left: 0;
}

.achievements li {
  color: #666;
  margin: 0.3rem 0;
  padding-left: 1rem;
  position: relative;
}

.achievements li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #1a6eb5;
}
</style> 