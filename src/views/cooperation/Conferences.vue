<script setup lang="ts">
import { ref } from 'vue'

interface Conference {
  id: number
  title: string
  type: '国际会议' | '国内会议'
  date: string
  location: string
  organizers: string[]
  participants: string
  description: string
  highlights?: string[]
}

const conferences = ref<Conference[]>([
  {
    id: 1,
    title: '第三届国际矿山安全技术研讨会',
    type: '国际会议',
    date: '2024-05-15',
    location: '中国·徐州',
    organizers: ['中国矿业大学', '煤炭灾害防控重点实验室', '德国亚琛工业大学'],
    participants: '来自15个国家的200余名专家学者',
    description: '围绕矿山安全智能化监测、灾害预警与防控等主题展开深入研讨，促进国际学术交流与合作。',
    highlights: [
      '智能化矿山安全监测技术',
      '深部开采灾害防控',
      '矿山应急救援技术创新'
    ]
  },
  {
    id: 2,
    title: '2023年煤矿安全科技创新论坛',
    type: '国内会议',
    date: '2023-10-20',
    location: '中国·北京',
    organizers: ['煤炭灾害防控重点实验室', '中国煤炭学会'],
    participants: '国内煤炭行业专家、学者300余人',
    description: '交流煤矿安全领域最新研究成果，探讨行业发展趋势与技术创新方向。'
  }
])
</script>

<template>
  <div class="conferences-container">
    <h2>主（承）办学术会议</h2>
    <div class="conferences-grid">
      <div v-for="conference in conferences" 
           :key="conference.id" 
           class="conference-card">
        <div class="conference-header">
          <h3>{{ conference.title }}</h3>
          <span :class="['type-tag', 
                        conference.type === '国际会议' ? 'international' : 'domestic']">
            {{ conference.type }}
          </span>
        </div>
        
        <div class="conference-info">
          <div class="info-item">
            <span class="label">时间：</span>
            {{ conference.date }}
          </div>
          <div class="info-item">
            <span class="label">地点：</span>
            {{ conference.location }}
          </div>
          <div class="info-item">
            <span class="label">主办单位：</span>
            <div class="tags">
              <span v-for="(organizer, index) in conference.organizers" 
                    :key="index" 
                    class="tag">
                {{ organizer }}
              </span>
            </div>
          </div>
          <div class="info-item">
            <span class="label">参会人员：</span>
            {{ conference.participants }}
          </div>
        </div>

        <div class="conference-content">
          <p class="description">{{ conference.description }}</p>
          <div v-if="conference.highlights" class="highlights">
            <h4>会议重点：</h4>
            <ul>
              <li v-for="(highlight, index) in conference.highlights" 
                  :key="index">
                {{ highlight }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.conferences-container {
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

.conferences-grid {
  display: grid;
  gap: 2rem;
}

.conference-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.conference-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.conference-header h3 {
  font-size: 1.3rem;
  color: #2c3e50;
  margin: 0;
  flex: 1;
  padding-right: 1rem;
}

.type-tag {
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.9rem;
  white-space: nowrap;
}

.international {
  background: #e3f2fd;
  color: #1565c0;
}

.domestic {
  background: #f3e5f5;
  color: #7b1fa2;
}

.conference-info {
  margin-bottom: 1.5rem;
}

.info-item {
  margin-bottom: 0.8rem;
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

.description {
  line-height: 1.6;
  color: #34495e;
  margin-bottom: 1.5rem;
}

.highlights h4 {
  color: #2c3e50;
  margin-bottom: 0.8rem;
}

.highlights ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.highlights li {
  position: relative;
  padding-left: 1.2rem;
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.highlights li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #1a6eb5;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .conferences-container {
    padding: 1rem;
  }

  .conference-header {
    flex-direction: column;
    gap: 0.8rem;
  }

  .type-tag {
    align-self: flex-start;
  }
}

/* 深色模式适配 */
@media (prefers-color-scheme: dark) {
  .conferences-container {
    color: #e0e0e0;
  }

  .conference-card {
    background: #2d2d2d;
  }

  .conference-header h3 {
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

  .international {
    background: #1a2f4d;
    color: #64b5f6;
  }

  .domestic {
    background: #2a1a2a;
    color: #ce93d8;
  }

  .highlights h4 {
    color: #e0e0e0;
  }

  .highlights li::before {
    color: #3498db;
  }
}
</style> 