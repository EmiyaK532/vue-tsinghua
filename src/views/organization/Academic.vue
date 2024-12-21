<script setup lang="ts">
import { ref } from 'vue'

interface AcademicMember {
  name: string
  title: string
  organization: string
  position: string
  photo?: string
}

const members = ref<AcademicMember[]>([
  {
    name: '李四',
    title: '教授',
    organization: '中国矿业大学',
    position: '主任委员'
  },
  // ... 添加更多委员数据
])
</script>

<template>
  <div class="academic-container">
    <h1>学术委员会</h1>
    <div class="members-grid">
      <div v-for="member in members" 
           :key="member.name" 
           class="member-card">
        <div class="photo">
          <img v-if="member.photo" :src="member.photo" :alt="member.name">
          <div v-else class="photo-placeholder"></div>
        </div>
        <div class="info">
          <h3>{{ member.name }}</h3>
          <p class="position">{{ member.position }}</p>
          <p>{{ member.title }}</p>
          <p>{{ member.organization }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.academic-container {
  padding: 2rem;
}

.members-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.member-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.member-card:hover {
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

.position {
  color: #1a6eb5;
  font-weight: bold;
  margin: 0.5rem 0;
}
</style> 