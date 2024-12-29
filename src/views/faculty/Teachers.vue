<script setup lang="ts">
import { ref } from 'vue'
import PersonCard from '@/components/cards/PersonCard.vue'
import { useTeachers } from '@/composables/useTeachers'

// 分别获取固定人员和流动人员
const { 
  teachers: permanentTeachers, 
  loading: permanentLoading, 
  error: permanentError 
} = useTeachers(1)

const { 
  teachers: temporaryTeachers, 
  loading: temporaryLoading, 
  error: temporaryError 
} = useTeachers(2)
</script>

<template>
  <div class="teachers-container">
    <!-- 固定人员部分 -->
    <section class="teacher-section">
      <h2>固定人员</h2>
      <div v-if="permanentLoading" class="loading">加载中...</div>
      <div v-else-if="permanentError" class="error">{{ permanentError }}</div>
      <div v-else class="teachers-grid">
        <PersonCard 
          v-for="teacher in permanentTeachers"
          :key="teacher.id"
          :name="teacher.name"
          :position="teacher.position"
          :title="teacher.title"
          :email="teacher.email"
          :phone="teacher.phone"
          :address="teacher.address"
          :photo="teacher.pictures"
        />
      </div>
    </section>

    <!-- 流动人员部分 -->
    <section class="teacher-section">
      <h2>流动人员</h2>
      <div v-if="temporaryLoading" class="loading">加载中...</div>
      <div v-else-if="temporaryError" class="error">{{ temporaryError }}</div>
      <div v-else class="teachers-grid">
        <PersonCard 
          v-for="teacher in temporaryTeachers"
          :key="teacher.id"
          :name="teacher.name"
          :position="teacher.position"
          :title="teacher.title"
          :email="teacher.email"
          :phone="teacher.phone"
          :address="teacher.address"
          :photo="teacher.pictures"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.teachers-container {
  padding: 2rem;
}

.teacher-section {
  margin-bottom: 4rem;
}

.teacher-section:last-child {
  margin-bottom: 0;
}

h2 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #1a6eb5;
}

.teachers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.loading, .error {
  text-align: center;
  padding: 2rem;
  color: #666;
}

.error {
  color: #ff4d4f;
}

/* 深色模式适配 */
@media (prefers-color-scheme: dark) {
  h2 {
    color: #e0e0e0;
    border-bottom-color: #3498db;
  }
}
</style> 