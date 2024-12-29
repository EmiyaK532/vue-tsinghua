<template>
  <div class="announcement-wrapper">
    <div class="announcement-list">
      <div v-for="item in announcements" :key="item.id" class="announcement-item">
        <span class="announcement-date">{{ item.time }}</span>
        <p class="announcement-title">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { noticeApi } from '@/api'
import type { NoticeItem } from '@/types/api'

const announcements = ref<NoticeItem[]>([])
const loading = ref(false)

const fetchAnnouncements = async () => {
  loading.value = true
  try {
    const res = await noticeApi.getLatelyNotice()
    announcements.value = res.data.data
  } catch (error) {
    console.error('获取通知列表出错:', error)
    ElMessage.error('获取通知列表出错')
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchAnnouncements()
})
</script>

<style scoped>
.announcement-wrapper {
  position: relative;
  padding-right: 4px;
  /* 设置固定高度，确保只显示三条数据 */
  height: 300px; /* 每条数据约60px，三条数据就是180px */
}

.announcement-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  overflow-y: auto;
  margin-right: -4px;
}

.announcement-item {
  cursor: pointer;
  padding: 0.5rem 0;
  /* 设置最小高度，确保每条数据的高度一致 */
  min-height: 48px;
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
.announcement-list::-webkit-scrollbar {
  width: 4px;
}

.announcement-list::-webkit-scrollbar-thumb {
  background-color: #dcdfe6;
  border-radius: 2px;
}

.announcement-list::-webkit-scrollbar-track {
  background-color: #f5f7fa;
}

/* 深色模式适配 */
@media (prefers-color-scheme: dark) {
  .announcement-title {
    color: #e0e0e0;
  }
}
</style> 