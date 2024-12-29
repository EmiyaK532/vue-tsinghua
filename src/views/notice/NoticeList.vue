<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { noticeApi } from '@/api'
import type { NoticeItem } from '@/types/api'

const noticeList = ref<NoticeItem[]>([])
const total = ref(0)
const currentPage = ref(1)
//设置一页展示多少条数据
const pageSize = ref(3)
const loading = ref(false)

const fetchNotices = async (page: number) => {
  loading.value = true
  try {
    const res = await noticeApi.getNoticeList({
      pageNum: page,
      pageSize: pageSize.value
    })
    noticeList.value = res.data.list
    total.value = res.data.total
  } catch (error) {
    console.error('获取通知列表出错:', error)
    ElMessage.error('获取通知列表出错')
  } finally {
    loading.value = false
  }
}

const handlePageChange = (page: number) => {
  currentPage.value = page
  fetchNotices(page)
}

onMounted(() => {
  fetchNotices(1)
})
</script>

<template>
  <div class="notice-list-container">
    <h2>通知公告</h2>
    
    <el-card v-loading="loading">
      <div class="notice-items">
        <div v-for="notice in noticeList" 
             :key="notice.id" 
             class="notice-item">
          <div class="notice-image" v-if="notice.pictures">
            <img :src="notice.pictures" :alt="notice.title">
          </div>
          <div class="notice-content">
            <div class="notice-header">
              <h3 class="notice-title">{{ notice.title }}</h3>
              <span class="notice-files" v-if="notice.files">
                <el-icon><Document /></el-icon>
                附件({{ notice.files }})
              </span>
            </div>
            <p class="notice-description">{{ notice.content }}</p>
            <div class="notice-footer">
              <span class="notice-time">{{ notice.time }}</span>
              <span class="notice-views">
                <el-icon><View /></el-icon>
                {{ notice.views }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="pagination">
        <el-pagination
          v-model:current-page="currentPage"
          :page-size="pageSize"
          :total="total"
          layout="prev, pager, next"
          @current-change="handlePageChange"
          background
        />
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.notice-list-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  position: relative;
  padding-bottom: 0.5rem;
}

h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #1a6eb5, #3498db);
  border-radius: 2px;
}

.notice-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.notice-item {
  display: flex;
  gap: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
}

.notice-image {
  flex-shrink: 0;
  width: 200px;
  height: 150px;
  overflow: hidden;
  border-radius: 8px;
}

.notice-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.notice-item:hover .notice-image img {
  transform: scale(1.05);
}

.notice-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.notice-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.notice-title {
  margin: 0;
  font-size: 1.2rem;
  color: #2c3e50;
  flex: 1;
  padding-right: 1rem;
}

.notice-files {
  color: #409EFF;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  cursor: pointer;
}

.notice-description {
  color: #666;
  line-height: 1.6;
  margin: 0;
  flex: 1;
}

.notice-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  color: #909399;
  font-size: 0.9rem;
}

.notice-views {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.pagination {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .notice-list-container {
    padding: 1rem;
  }

  .notice-item {
    flex-direction: column;
  }

  .notice-image {
    width: 100%;
    height: 200px;
  }

  .notice-header {
    flex-direction: column;
    gap: 0.5rem;
  }
}

/* 深色模式适配 */
@media (prefers-color-scheme: dark) {
  .notice-title {
    color: #e0e0e0;
  }

  .notice-description {
    color: #b8c2cc;
  }

  .notice-item {
    border-bottom-color: #3a3a3a;
  }
}
</style> 