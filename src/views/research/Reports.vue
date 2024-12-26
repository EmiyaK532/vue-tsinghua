<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <div class="reports">
    <h2>年度科研简报</h2>
    <div class="report-list">
      <!-- 年度科研简报PDF下载列表 -->
    </div>
  </div>
</template>

<style scoped>
.reports {
  padding: 1rem;
}

.report-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}
</style> 