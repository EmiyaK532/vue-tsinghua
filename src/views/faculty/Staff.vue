<script setup lang="ts">
import { ref } from 'vue'
import PageLayout from '@/components/layouts/PageLayout.vue'
import PersonCard from '@/components/cards/PersonCard.vue'

const staffMembers = ref([
  {
    id: 1,
    name: '张工',
    title: '高级实验师',
    email: 'zhang@cumt.edu.cn',
    research: ['实验室管理', '设备维护']
  },
  // ... 添加更多教辅人员数据
])
</script>

<template>
  <PageLayout title="教辅人员">
    <div class="staff-grid">
      <PersonCard 
        v-for="staff in staffMembers"
        :key="staff.id"
        v-bind="staff"
      />
    </div>
  </PageLayout>
</template>

<style scoped>
.staff-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}
</style> 