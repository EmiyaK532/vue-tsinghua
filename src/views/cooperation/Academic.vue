<script setup lang="ts">
import { ref } from 'vue'

interface AcademicActivity {
  id: number
  title: string
  date: string
  location: string
  description: string
  participants: string[]
}

interface YearlyActivities {
  year: string
  activities: AcademicActivity[]
}

const academicExchanges = ref<YearlyActivities[]>([
  {
    year: '2024',
    activities: [
      {
        id: 1,
        title: '煤矿智能开采技术研讨会',
        date: '2024-03-15',
        location: '中国矿业大学',
        description: '围绕煤矿智能开采技术发展现状与趋势开展深入研讨，邀请国内外专家学者参与交流。',
        participants: ['清华大学', '中国矿业大学', '德国亚琛工业大学']
      }
    ]
  },
  {
    year: '2023',
    activities: [
      {
        id: 2,
        title: '国际矿山安全学术研讨会',
        date: '2023-09-20',
        location: '澳大利亚悉尼',
        description: '与澳大利亚新南威尔士大学联合举办的国际学术研讨会，探讨矿山安全技术发展。',
        participants: ['新南威尔士大学', '中国矿业大学', '北京科技大学']
      }
    ]
  }
])
</script>

<template>
  <div class="academic-container">
    <h2>学术交流</h2>
    <div class="year-sections">
      <section v-for="yearData in academicExchanges" 
               :key="yearData.year" 
               class="year-section">
        <h3>{{ yearData.year }}年</h3>
        <div class="activities-grid">
          <div v-for="activity in yearData.activities" 
               :key="activity.id" 
               class="activity-card">
            <div class="activity-header">
              <h4>{{ activity.title }}</h4>
              <span class="date">{{ activity.date }}</span>
            </div>
            <div class="activity-content">
              <p class="location">
                <span class="label">地点：</span>
                {{ activity.location }}
              </p>
              <p class="description">{{ activity.description }}</p>
              <div class="participants">
                <span class="label">参与单位：</span>
                <div class="tags">
                  <span v-for="(participant, index) in activity.participants" 
                        :key="index" 
                        class="tag">
                    {{ participant }}
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
.academic-container {
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

.activities-grid {
  display: grid;
  gap: 2rem;
}

.activity-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.activity-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.activity-header h4 {
  font-size: 1.2rem;
  color: #2c3e50;
  margin: 0;
}

.date {
  color: #666;
  font-size: 0.9rem;
}

.activity-content {
  color: #34495e;
}

.location {
  margin-bottom: 1rem;
}

.description {
  line-height: 1.6;
  margin-bottom: 1rem;
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
  .academic-container {
    padding: 1rem;
  }

  .activity-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}

/* 深色模式适配 */
@media (prefers-color-scheme: dark) {
  .academic-container {
    color: #e0e0e0;
  }

  .activity-card {
    background: #2d2d2d;
  }

  .activity-header h4 {
    color: #e0e0e0;
  }

  .date {
    color: #b8c2cc;
  }

  .activity-content {
    color: #b8c2cc;
  }

  .label {
    color: #888;
  }

  .tag {
    background: #1a1a1a;
    color: #3498db;
  }

  .year-section h3 {
    border-bottom-color: #3a3a3a;
  }
}
</style> 