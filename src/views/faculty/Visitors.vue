<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { scholarApi } from '@/api'
import type { Scholar } from '@/types/api'
import PageLayout from '@/components/layouts/PageLayout.vue'

const scholars = ref<Scholar[]>([])
const loading = ref(false)
const error = ref('')

const fetchScholars = async () => {
  loading.value = true
  try {
    const res = await scholarApi.getScholars()
    scholars.value = res.data.data
  } catch (err) {
    console.error('获取访问学者列表失败:', err)
    error.value = '获取访问学者列表失败'
    ElMessage.error('获取访问学者列表失败')
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchScholars()
})
</script>

<template>
  <PageLayout title="访问学者">
    <div v-if="loading" class="loading">加载中...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else class="visitors-list">
      <div v-for="scholar in scholars" 
           :key="scholar.id"
           class="visitor-card">
        <div class="visitor-info">
          <h3>{{ scholar.name }}</h3>
          <p class="organization">{{ scholar.affiliation }}</p>
          <div class="meta-info">
            <span class="country">
              <el-icon><Location /></el-icon>
              {{ scholar.country }}
            </span>
            <span class="time">
              <el-icon><Calendar /></el-icon>
              {{ scholar.time }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </PageLayout>
</template>

<style scoped>
.visitors-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.visitor-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.visitor-card:hover {
  transform: translateY(-5px);
}

h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #2c3e50;
}

.organization {
  color: #1a6eb5;
  margin: 0.5rem 0;
  font-size: 0.95rem;
}

.meta-info {
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
  color: #666;
  font-size: 0.9rem;
}

.country, .time {
  display: flex;
  align-items: center;
  gap: 0.3rem;
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
  .visitor-card {
    background: #1a1a1a;
  }

  h3 {
    color: #e0e0e0;
  }

  .meta-info {
    color: #b8c2cc;
  }
}
</style> 