<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

interface FundFile {
  id: number
  name: string
  description: string
  fileUrl: string
  fileSize: string
  updateTime: string
}

const fundFiles = ref<FundFile[]>([
  {
    id: 1,
    name: '开放基金项目申请书',
    description: '用于申请开放基金项目的标准模板',
    fileUrl: '/files/申请书.docx',
    fileSize: '258KB',
    updateTime: '2024-01-15'
  },
  {
    id: 2,
    name: '开放基金项目结题报告',
    description: '项目结题时需要提交的报告模板',
    fileUrl: '/files/结题报告.docx',
    fileSize: '286KB',
    updateTime: '2024-01-15'
  }
])

const handleDownload = (e: Event) => {
  e.preventDefault()
  ElMessage.info('该功能将在后端服务接入后启用')
}
</script>

<template>
  <div class="fund-container">
    <!-- 开放基金介绍 -->
    <section class="section">
      <h2>开放基金简介</h2>
      <div class="intro-content">
        <p>煤炭灾害防控全国重点实验室开放基金旨在促进煤矿安全领域的学术交流与科技创新，支持高等院校、科研院所的优秀科研人员开展基础研究和应用基础研究。重点支持以下研究方向：</p>
        <ul>
          <li>煤矿瓦斯灾害防控理论与技术</li>
          <li>矿井水害防治理论与方法</li>
          <li>煤矿火灾防治关键技术</li>
          <li>矿山动力灾害防控技术</li>
        </ul>
        <p>每年定期发布项目申请指南，欢迎相关领域的科研人员积极申请。</p>
      </div>
    </section>

    <!-- 相关文件 -->
    <section class="section">
      <h2>相关文件</h2>
      <div class="files-grid">
        <div v-for="file in fundFiles" 
             :key="file.id" 
             class="file-card">
          <div class="file-icon">
            <svg viewBox="0 0 24 24" class="icon">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
            </svg>
          </div>
          <div class="file-info">
            <h3>{{ file.name }}</h3>
            <p class="description">{{ file.description }}</p>
            <div class="file-meta">
              <span>{{ file.fileSize }}</span>
              <span>更新时间：{{ file.updateTime }}</span>
            </div>
          </div>
          <a :href="file.fileUrl" 
             class="download-btn" 
             @click="handleDownload">
            下载
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.fund-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: #2c3e50;
}

.section {
  margin-bottom: 3rem;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
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

.intro-content {
  line-height: 1.8;
  font-size: 1.1rem;
  color: #34495e;
}

.intro-content p {
  margin-bottom: 1.5rem;
}

.intro-content ul {
  margin: 1rem 0 1.5rem 2rem;
}

.intro-content li {
  margin-bottom: 0.5rem;
}

.files-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.file-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.file-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.file-icon {
  width: 40px;
  height: 40px;
  color: #1a6eb5;
  flex-shrink: 0;
}

.file-info {
  flex: 1;
}

.file-info h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.description {
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 0.8rem;
}

.file-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.85rem;
  color: #888;
}

.download-btn {
  background: #1a6eb5;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
}

.download-btn:hover {
  background: #1557a0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .fund-container {
    padding: 1rem;
  }

  .files-grid {
    grid-template-columns: 1fr;
  }
}

/* 深色模式适配 */
@media (prefers-color-scheme: dark) {
  .fund-container {
    color: #e0e0e0;
  }

  .intro-content {
    color: #b8c2cc;
  }

  .file-card {
    background: #2d2d2d;
  }

  .file-info h3 {
    color: #e0e0e0;
  }

  .description {
    color: #b8c2cc;
  }

  .file-meta {
    color: #888;
  }

  .download-btn {
    background: #2980b9;
  }

  .download-btn:hover {
    background: #2471a3;
  }
}
</style> 