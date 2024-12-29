<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { retireeApi } from '@/api'
import type { Retiree } from '@/types/api'
import PageLayout from '@/components/layouts/PageLayout.vue'

const retirees = ref<Retiree[]>([])
const loading = ref(false)
const error = ref('')

const fetchRetirees = async () => {
  loading.value = true
  try {
    const res = await retireeApi.getRetirees()
    retirees.value = res.data.data
  } catch (err) {
    console.error('获取退休人员列表失败:', err)
    error.value = '获取退休人员列表失败'
    ElMessage.error('获取退休人员列表失败')
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchRetirees()
})
</script>

<template>
  <PageLayout title="退休人员">
    <div v-if="loading" class="loading">加载中...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else class="retired-grid">
      <div v-for="retiree in retirees" 
           :key="retiree.id"
           class="retired-card">
        <div class="info">
          <div class="header">
            <h3>{{ retiree.name }}</h3>
            <span class="position">{{ retiree.position }}</span>
          </div>
          <div class="meta">
            <span class="time">
              <el-icon><Timer /></el-icon>
              退休时间：{{ retiree.time }}
            </span>
          </div>
          <div class="achievement">
            <h4>主要成就</h4>
            <p>{{ retiree.achievement }}</p>
          </div>
        </div>
      </div>
    </div>
  </PageLayout>
</template>

<style scoped>
.retired-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.retired-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.retired-card:hover {
  transform: translateY(-5px);
}

.info {
  padding: 1.5rem;
}

.header {
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

.meta {
  margin: 1rem 0;
}

.time {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: #666;
  font-size: 0.9rem;
}

.achievement {
  margin-top: 1.5rem;
}

.achievement h4 {
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.achievement p {
  color: #666;
  line-height: 1.6;
  margin: 0;
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
  .retired-card {
    background: #1a1a1a;
  }

  h3 {
    color: #e0e0e0;
  }

  .achievement h4 {
    color: #e0e0e0;
  }

  .achievement p,
  .time {
    color: #b8c2cc;
  }
}
</style> 