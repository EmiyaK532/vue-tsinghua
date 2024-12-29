<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { newsApi } from '@/api'
import type { NewsItem } from '@/types/api'

const newsList = ref<NewsItem[]>([])
const total = ref(0)
const currentPage = ref(1)
//设置一页展示多少条数据
const pageSize = ref(3)
const loading = ref(false)

const fetchNews = async (page: number) => {
  loading.value = true
  try {
    const res = await newsApi.getNewsList({
      pageNum: page,
      pageSize: pageSize.value
    })
    newsList.value = res.data.list
    total.value = res.data.total
  } catch (error) {
    console.error('获取新闻列表出错:', error)
    ElMessage.error('获取新闻列表出错')
  } finally {
    loading.value = false
  }
}

const handlePageChange = (page: number) => {
  currentPage.value = page
  fetchNews(page)
}

const getTagType = (type: string) => {
  const types: { [key: string]: string } = {
    '科研成果': 'success',
    '学术活动': 'primary',
    '项目动态': 'warning'
  }
  return types[type] || 'info'
}

onMounted(() => {
  fetchNews(1)
})
</script>

<template>
  <div class="news-list-container">
    <h2>新闻动态</h2>
    
    <el-card v-loading="loading">
      <div class="news-items">
        <div v-for="news in newsList" 
             :key="news.id" 
             class="news-item">
          <div class="news-image" v-if="news.images">
            <img :src="news.images" :alt="news.title">
          </div>
          <div class="news-content">
            <div class="news-header">
              <h3 class="news-title">{{ news.title }}</h3>
              <el-tag :type="getTagType(news.type)" 
                     size="small" 
                     effect="light">
                {{ news.type }}
              </el-tag>
            </div>
            <p class="news-description">{{ news.content }}</p>
            <div class="news-footer">
              <span class="news-time">{{ news.time }}</span>
              <span class="news-views">
                <el-icon><View /></el-icon>
                {{ news.views }}
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
.news-list-container {
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

.news-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.news-item {
  display: flex;
  gap: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
}

.news-image {
  flex-shrink: 0;
  width: 200px;
  height: 150px;
  overflow: hidden;
  border-radius: 8px;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.news-item:hover .news-image img {
  transform: scale(1.05);
}

.news-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.news-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.news-title {
  margin: 0;
  font-size: 1.2rem;
  color: #2c3e50;
  flex: 1;
  padding-right: 1rem;
}

.news-description {
  color: #666;
  line-height: 1.6;
  margin: 0;
  flex: 1;
}

.news-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  color: #909399;
  font-size: 0.9rem;
}

.news-views {
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
  .news-list-container {
    padding: 1rem;
  }

  .news-item {
    flex-direction: column;
  }

  .news-image {
    width: 100%;
    height: 200px;
  }

  .news-header {
    flex-direction: column;
    gap: 0.5rem;
  }
}

/* 深色模式适配 */
@media (prefers-color-scheme: dark) {
  .news-title {
    color: #e0e0e0;
  }

  .news-description {
    color: #b8c2cc;
  }

  .news-item {
    border-bottom-color: #3a3a3a;
  }
}
</style> 