<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { reportApi } from '@/api'
import type { Report } from '@/types/api'
import { ElMessage } from 'element-plus'
import { useMotion } from '@vueuse/motion'

const reports = ref<Report[]>([])
const loading = ref(false)
const searchQuery = ref('')

// 使用计算属性过滤报告
const filteredReports = computed(() => {
  return reports.value.filter(report => 
    report.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

// 获取报告列表
const fetchReports = async () => {
  loading.value = true
  try {
    const { data } = await reportApi.getReportList()
    reports.value = data.map((report: Report) => ({
      ...report,
      uploadTime: new Date(report.uploadTime).toLocaleDateString('zh-CN'),
      fileSize: formatFileSize(report.fileSize)
    }))
  } catch (error) {
    ElMessage.error('获取报告列表失败')
    console.error('Error fetching reports:', error)
  } finally {
    loading.value = false
  }
}

// 格式化文件大小
const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

// 下载报告
const downloadReport = async (report: Report) => {
  try {
    const id = report.id
    const response = await reportApi.downloadReport(id.toString())
    
    // 检查响应类型
    const contentType = response.headers['content-type']
    if (contentType && contentType.includes('application/json')) {
      // 如果返回的是 JSON，说明可能是错误信息
      const reader = new FileReader()
      const result = await new Promise((resolve, reject) => {
        reader.onload = () => resolve(reader.result)
        reader.onerror = reject
        reader.readAsText(response.data)
      })
      const error = JSON.parse(result as string)
      throw new Error(error.message || '下载失败')
    }
    
    // 创建下载链接
    const url = window.URL.createObjectURL(new Blob([response.data]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', report.fileName)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
    
    ElMessage.success('下载成功')
  } catch (error) {
    ElMessage.error('下载失败')
    console.error('Error downloading report:', error)
  }
}

// 动画引用
const listRef = ref(null)
const { isSupported } = useMotion(listRef, {
  initial: { opacity: 0, y: 100 },
  enter: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 800,
      delay: 200
    }
  }
})

onMounted(() => {
  fetchReports()
})
</script>

<template>
  <div class="reports-container">
    <header class="reports-header">
      <h2>年度科研简报</h2>
      <div class="search-box">
        <input 
          type="text"
          v-model="searchQuery"
          placeholder="搜索简报..."
          class="search-input"
        >
        <span class="search-icon">🔍</span>
      </div>
    </header>
    
    <div class="reports-content" :class="{ 'is-loading': loading }" ref="listRef">
      <div v-if="loading" class="loading-spinner">
        <div class="spinner"></div>
        <span>加载中...</span>
      </div>
      
      <template v-else-if="filteredReports.length">
        <div v-for="(report, index) in filteredReports" 
             :key="report.id" 
             class="report-card"
             :style="{ '--delay': `${index * 100}ms` }">
          <div class="report-icon">
            <svg viewBox="0 0 24 24" class="pdf-icon">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
            </svg>
          </div>
          
          <div class="report-content">
            <h3 class="report-title">{{ report.title }}</h3>
            <div class="report-meta">
              <span class="meta-item">
                <svg viewBox="0 0 24 24" class="meta-icon">
                  <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"/>
                </svg>
                {{ report.uploadTime }}
              </span>
              <span class="meta-item">
                <svg viewBox="0 0 24 24" class="meta-icon">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                </svg>
                {{ report.fileSize }}
              </span>
            </div>
            
            <button 
              class="download-button"
              @click="downloadReport(report)"
            >
              <span class="button-content">
                <svg viewBox="0 0 24 24" class="download-icon">
                  <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"/>
                </svg>
                下载报告
              </span>
            </button>
          </div>
        </div>
      </template>
      
      <div v-else class="empty-state">
        <svg viewBox="0 0 24 24" class="empty-icon">
          <path d="M20,6H12L10,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8A2,2 0 0,0 20,6M20,18H4V6H9.17L11.17,8H20V18Z"/>
        </svg>
        <p>{{ searchQuery ? '未找到匹配的简报' : '暂无科研简报' }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.reports-container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: system-ui, -apple-system, sans-serif;
}

.reports-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  overflow: hidden;
  padding: 0 0.5rem;
}

.reports-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #2c3e50, #3498db);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
}

.search-box {
  position: relative;
  width: 300px;
  max-width: 100%;
  margin-right: 1rem;
}

.search-input {
  width: 100%;
  padding: 1rem 1.5rem;
  padding-right: 3.5rem;
  border: 2px solid #eee;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #f8f9fa;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.search-input:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 0 0 4px rgba(52, 152, 219, 0.1);
}

.search-icon {
  position: absolute;
  right: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  color: #666;
  user-select: none;
  z-index: 1;
  transition: color 0.3s ease;
}

.search-input:focus + .search-icon {
  color: #3498db;
}

.reports-content {
  position: relative;
  min-height: 200px;
}

.report-card {
  display: flex;
  align-items: stretch;
  background: white;
  border-radius: 16px;
  margin-bottom: 1.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  animation: slideIn 0.5s ease both;
  animation-delay: var(--delay);
}

.report-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.report-icon {
  width: 80px;
  background: linear-gradient(135deg, #3498db, #2980b9);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.pdf-icon {
  width: 40px;
  height: 40px;
  fill: white;
}

.report-content {
  flex: 1;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
}

.report-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 1rem;
}

.report-meta {
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  font-size: 0.9rem;
}

.meta-icon {
  width: 18px;
  height: 18px;
  fill: #666;
}

.download-button {
  align-self: flex-start;
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.download-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
}

.download-icon {
  width: 20px;
  height: 20px;
  fill: currentColor;
}

.loading-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.empty-state {
  text-align: center;
  padding: 3rem;
  color: #666;
}

.empty-icon {
  width: 64px;
  height: 64px;
  fill: #ccc;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .reports-container {
    padding: 1rem;
  }

  .reports-header {
    flex-direction: column;
    gap: 1.5rem;
    padding: 0 1rem;
  }

  .search-box {
    width: 100%;
    margin-right: 0;
  }

  .report-card {
    flex-direction: column;
  }

  .report-icon {
    width: auto;
    height: 60px;
    padding: 1rem;
  }

  .report-meta {
    flex-direction: column;
    gap: 0.5rem;
  }

  .download-button {
    width: 100%;
    justify-content: center;
  }

  .search-input {
    padding: 0.8rem 1.2rem;
    padding-right: 3rem;
    font-size: 0.95rem;
  }

  .search-icon {
    right: 1rem;
    font-size: 1.1rem;
  }
}

/* 深色模式适配 */
@media (prefers-color-scheme: dark) {
  .reports-container {
    background: #1a1a1a;
  }

  .search-input {
    background: #2d2d2d;
    border-color: #333;
    color: #fff;
  }

  .report-card {
    background: #2d2d2d;
  }

  .report-title {
    color: #fff;
  }

  .meta-item {
    color: #999;
  }

  .meta-icon {
    fill: #999;
  }

  .empty-state {
    color: #999;
  }

  .empty-icon {
    fill: #666;
  }

  .search-icon {
    color: #888;
  }

  .search-input:focus {
    border-color: #3498db;
    box-shadow: 0 0 0 4px rgba(52, 152, 219, 0.15);
  }

  .search-input:focus + .search-icon {
    color: #3498db;
  }
}
</style> 