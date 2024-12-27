<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { AcademicCommittee, AcademicMember } from '@/types/api'

onMounted(() => {
  console.log('Academic component mounted')
})

// 模拟数据
const academicData = ref<AcademicCommittee>({
  chairman: {
    id: 1,
    name: '葛世荣',
    title: '教授',
    position: '主任',
    organization: '中国矿业大学（北京）',
    degree: '中国工程院院士'
  },
  viceChairmen: [
    {
      id: 2,
      name: '丁汉',
      title: '教授',
      position: '副主任',
      organization: '华中科技大学',
      degree: '中国科学院院士'
    },
    {
      id: 3,
      name: '杨华勇',
      title: '教授',
      position: '副主任',
      organization: '浙江大学',
      degree: '中国工程院院士'
    },
    // ... 其他副主任
  ],
  members: [
    {
      id: 6,
      name: '郝燕平',
      title: '研究员',
      position: '委员',
      organization: '中国航发沈阳发动机研究所'
    },
    // ... 其他委员
  ],
  secretary: {
    id: 20,
    name: '柴智敏',
    title: '副理教授',
    position: '秘书',
    organization: '清华大学'
  }
})
</script>

<template>
  <div class="academic-container">
    <header class="page-header">
      <h2>学术委员会</h2>
    </header>

    <div class="committee-section">
      <!-- 主任 -->
      <section class="member-group chairman">
        <h3 class="group-title">主任</h3>
        <div class="member-card chairman-card">
          <div class="member-info">
            <h4>{{ academicData.chairman.name }}</h4>
            <p class="title">{{ academicData.chairman.title }}</p>
            <p class="org">{{ academicData.chairman.organization }}</p>
            <p class="degree" v-if="academicData.chairman.degree">
              {{ academicData.chairman.degree }}
            </p>
          </div>
        </div>
      </section>

      <!-- 副主任 -->
      <section class="member-group vice-chairman">
        <h3 class="group-title">副主任</h3>
        <div class="members-grid">
          <div v-for="member in academicData.viceChairmen" 
               :key="member.id"
               class="member-card">
            <div class="member-info">
              <h4>{{ member.name }}</h4>
              <p class="title">{{ member.title }}</p>
              <p class="org">{{ member.organization }}</p>
              <p class="degree" v-if="member.degree">
                {{ member.degree }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 委员 -->
      <section class="member-group members">
        <h3 class="group-title">委员</h3>
        <div class="members-grid">
          <div v-for="member in academicData.members" 
               :key="member.id"
               class="member-card">
            <div class="member-info">
              <h4>{{ member.name }}</h4>
              <p class="title">{{ member.title }}</p>
              <p class="org">{{ member.organization }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 秘书 -->
      <section class="member-group secretary">
        <h3 class="group-title">秘书</h3>
        <div class="member-card secretary-card">
          <div class="member-info">
            <h4>{{ academicData.secretary.name }}</h4>
            <p class="title">{{ academicData.secretary.title }}</p>
            <p class="org">{{ academicData.secretary.organization }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.academic-container {
  height: 100%;
  width: 100%;
}

.page-header {
  margin-bottom: 2rem;
}

.page-header h2 {
  font-size: 2rem;
  color: #2c3e50;
  position: relative;
  padding-bottom: 0.5rem;
}

.page-header h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 4px;
  background: linear-gradient(135deg, #3498db, #2980b9);
  border-radius: 2px;
}

.committee-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.member-group {
  width: 100%;
}

.group-title {
  font-size: 1.5rem;
  color: #34495e;
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  border-left: 4px solid #3498db;
}

.members-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.member-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.member-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.chairman-card {
  max-width: 400px;
  background: linear-gradient(135deg, #f5f7fa, #e5e9f2);
  border: 2px solid #3498db;
}

.secretary-card {
  max-width: 400px;
  background: linear-gradient(135deg, #f5f7fa, #e5e9f2);
}

.member-info h4 {
  font-size: 1.25rem;
  color: #2c3e50;
  margin: 0 0 0.5rem;
}

.member-info p {
  margin: 0.25rem 0;
  color: #666;
}

.title {
  font-weight: 500;
  color: #3498db !important;
}

.org {
  font-size: 0.9rem;
}

.degree {
  font-size: 0.9rem;
  color: #e67e22 !important;
  margin-top: 0.5rem !important;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .members-grid {
    grid-template-columns: 1fr;
  }

  .member-card {
    margin: 0 auto;
    max-width: 100%;
  }
}

/* 深色模式适配 */
@media (prefers-color-scheme: dark) {
  .page-header h2 {
    color: #fff;
  }

  .group-title {
    color: #fff;
  }

  .member-card {
    background: #2d2d2d;
  }

  .chairman-card,
  .secretary-card {
    background: linear-gradient(135deg, #2d2d2d, #1a1a1a);
    border-color: #3498db;
  }

  .member-info h4 {
    color: #fff;
  }

  .member-info p {
    color: #999;
  }

  .title {
    color: #5dade2 !important;
  }

  .degree {
    color: #f39c12 !important;
  }
}
</style> 