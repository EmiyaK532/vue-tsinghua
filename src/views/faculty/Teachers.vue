<script setup lang="ts">
import { ref } from 'vue'
import PersonCard from '@/components/cards/PersonCard.vue'
import { useTeachers } from '@/composables/useTeachers'

const { teachers, loading, error } = useTeachers()
</script>

<template>
  <div class="teachers-container">
    <h1>在职教师</h1>
    <div v-if="loading" class="loading">加载中...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else class="teachers-grid">
      <PersonCard 
        v-for="teacher in teachers"
        :key="teacher.id"
        v-bind="teacher"
      />
    </div>
  </div>
</template>

<style scoped>
.teachers-container {
  padding: 2rem;
}

.teachers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.loading, .error {
  text-align: center;
  padding: 2rem;
  color: #666;
}

.error {
  color: #ff4d4f;
}
</style> 