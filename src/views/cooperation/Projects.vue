<script setup lang="ts">
import { ref } from 'vue'

interface Project {
  id: number
  title: string
  type: string
  partners: string[]
  period: string
  status: '进行中' | '已完成'
  description: string
}

interface YearlyProjects {
  year: string
  projects: Project[]
}

const cooperationProjects = ref<YearlyProjects[]>([
  {
    year: '2024',
    projects: [
      {
        id: 1,
        title: '煤矿智能通风系统开发',
        type: '国际合作项目',
        partners: ['德国亚琛工业大学', '中国矿业大学'],
        period: '2024.01-2026.12',
        status: '进行中',
        description: '基于人工智能和物联网技术，开发新一代智能化矿井通风系统，实现通风系统的智能化调控和优化。'
      }
    ]
  },
  {
    year: '2023',
    projects: [
      {
        id: 2,
        title: '深部煤矿灾害防控技术研究',
        type: '企业合作项目',
        partners: ['中国神华能源股份有限公司', '中国矿业大学'],
        period: '2023.03-2025.03',
        status: '进行中',
        description: '针对深部煤矿开采面临的多灾种耦合灾害问题，开展综合防控技术研究。'
      }
    ]
  }
])
</script>

<template>
  <div class="projects-container">
    <h2>合作项目</h2>
    <div class="year-sections">
      <section v-for="yearData in cooperationProjects" 
               :key="yearData.year" 
               class="year-section">
        <h3>{{ yearData.year }}年</h3>
        <div class="projects-grid">
          <div v-for="project in yearData.projects" 
               :key="project.id" 
               class="project-card">
            <div class="project-header">
              <h4>{{ project.title }}</h4>
              <span :class="['status-tag', 
                           project.status === '进行中' ? 'ongoing' : 'completed']">
                {{ project.status }}
              </span>
            </div>
            <div class="project-content">
              <div class="project-info">
                <p>
                  <span class="label">项目类型：</span>
                  {{ project.type }}
                </p>
                <p>
                  <span class="label">执行期限：</span>
                  {{ project.period }}
                </p>
              </div>
              <p class="description">{{ project.description }}</p>
              <div class="partners">
                <span class="label">合作单位：</span>
                <div class="tags">
                  <span v-for="(partner, index) in project.partners" 
                        :key="index" 
                        class="tag">
                    {{ partner }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.projects-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: #2c3e50;
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

.year-section {
  margin-bottom: 3rem;
}

.year-section h3 {
  font-size: 1.5rem;
  color: #1a6eb5;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #eee;
}

.projects-grid {
  display: grid;
  gap: 2rem;
}

.project-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.project-header h4 {
  font-size: 1.2rem;
  color: #2c3e50;
  margin: 0;
}

.status-tag {
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.9rem;
}

.ongoing {
  background: #e1f5fe;
  color: #0288d1;
}

.completed {
  background: #e8f5e9;
  color: #388e3c;
}

.project-info {
  margin-bottom: 1rem;
}

.project-info p {
  margin-bottom: 0.5rem;
}

.description {
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #34495e;
}

.label {
  color: #666;
  margin-right: 0.5rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.tag {
  background: #f0f7ff;
  color: #1a6eb5;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.9rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .projects-container {
    padding: 1rem;
  }

  .project-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}

/* 深色模式适配 */
@media (prefers-color-scheme: dark) {
  .projects-container {
    color: #e0e0e0;
  }

  .project-card {
    background: #2d2d2d;
  }

  .project-header h4 {
    color: #e0e0e0;
  }

  .description {
    color: #b8c2cc;
  }

  .label {
    color: #888;
  }

  .tag {
    background: #1a1a1a;
    color: #3498db;
  }

  .ongoing {
    background: #1a2a3a;
    color: #4fc3f7;
  }

  .completed {
    background: #1a2e1a;
    color: #81c784;
  }

  .year-section h3 {
    border-bottom-color: #3a3a3a;
  }
}
</style> 