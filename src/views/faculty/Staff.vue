<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { staffApi } from '@/api'
import type { Assistant } from '@/types/api'

const assistants = ref<Assistant[]>([])
const loading = ref(false)
const error = ref('')

const fetchAssistants = async () => {
  loading.value = true
  try {
    const res = await staffApi.getAssistants()
    assistants.value = res.data.data
  } catch (err) {
    console.error('获取教辅人员列表失败:', err)
    error.value = '获取教辅人员列表失败'
    ElMessage.error('获取教辅人员列表失败')
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchAssistants()
})
</script>

<template>
  <div class="staff-container">
    <h2>教辅人员</h2>
    <div v-if="loading" class="loading">加载中...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else class="staff-grid">
      <div v-for="assistant in assistants" 
           :key="assistant.id" 
           class="staff-card">
        <div class="staff-header">
          <h3>{{ assistant.name }}</h3>
          <span class="position">{{ assistant.position }}</span>
        </div>
        <p class="work-description">{{ assistant.work }}</p>
        <a :href="assistant.address" 
           target="_blank" 
           class="staff-link">
          个人主页
          <el-icon><ArrowRight /></el-icon>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.staff-container {
  padding: 2rem;
}

h2 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #1a6eb5;
}

.staff-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.staff-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.staff-card:hover {
  transform: translateY(-5px);
}

.staff-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #2c3e50;
}

.position {
  color: #1a6eb5;
  font-size: 0.9rem;
}

.work-description {
  color: #666;
  line-height: 1.6;
  margin: 1rem 0;
}

.staff-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #1a6eb5;
  text-decoration: none;
  font-size: 0.9rem;
  margin-top: 1rem;
}

.staff-link:hover {
  text-decoration: underline;
}

.loading, .error {
  text-align: center;
  padding: 2rem;
  color: #666;
}

.error {
  color: #ff4d4f;
}

/* 深色模式适配 */
@media (prefers-color-scheme: dark) {
  .staff-card {
    background: #1a1a1a;
  }

  h2 {
    color: #e0e0e0;
    border-bottom-color: #3498db;
  }

  h3 {
    color: #e0e0e0;
  }

  .work-description {
    color: #b8c2cc;
  }
}
</style> 