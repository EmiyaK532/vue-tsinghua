<script setup lang="ts">
interface Props {
  title: string
  loading?: boolean
  error?: string | null
}

defineProps<Props>()
</script>

<template>
  <div class="page-container">
    <h1 class="page-title">{{ title }}</h1>
    <div v-if="loading" class="loading-state">
      <div class="loading-spinner"></div>
      <p>加载中...</p>
    </div>
    <div v-else-if="error" class="error-state">
      <i class="error-icon">!</i>
      <p>{{ error }}</p>
    </div>
    <div v-else class="page-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding: 2rem;
}

.page-title {
  margin-bottom: 2rem;
  color: #333;
  border-bottom: 2px solid #1a6eb5;
  padding-bottom: 0.5rem;
}

.loading-state, .error-state {
  text-align: center;
  padding: 3rem;
  color: #666;
}

.loading-spinner {
  /* 添加loading动画样式 */
}

.error-icon {
  color: #ff4d4f;
  font-size: 24px;
}
</style> 