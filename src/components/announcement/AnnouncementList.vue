<template>
  <div class="announcement-list">
    <div v-for="item in announcements" :key="item.id" class="announcement-item">
      <span class="announcement-date">{{ item.date }}</span>
      <p class="announcement-title">{{ item.title }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const announcements = ref([
  {
    id: 1,
    title: '2024年度清华大学高端装备界面科学与技术全国重点实验室开放基金项目申报指南',
    date: '2024.06.12'
  },
  {
    id: 2,
    title: 'Detailed Rules for the "Wen Shizhu Maple Leaf Award - International Young Scholar"',
    date: '2024.04.08'
  },
  {
    id: 3,
    title: '2024年度"温诗铸枫叶奖 - 优秀青年学者奖"征集候选人公告',
    date: '2024.04.08'
  }
])
</script>

<style scoped>
.announcement-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 600px;
  overflow-y: auto;
}

.announcement-item {
  cursor: pointer;
  padding: 0.5rem 0;
}

.announcement-item:hover .announcement-title {
  color: #1a6eb5;
}

.announcement-date {
  font-size: 0.9rem;
  color: #909399;
  margin-bottom: 0.3rem;
  display: block;
}

.announcement-title {
  margin: 0;
  font-size: 0.95rem;
  color: #333;
  line-height: 1.4;
  transition: color 0.3s;
}

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-thumb {
  background-color: #dcdfe6;
  border-radius: 2px;
}

::-webkit-scrollbar-track {
  background-color: #f5f7fa;
}
</style> 