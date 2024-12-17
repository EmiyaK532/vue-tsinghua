<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <div class="director-container">
    <h1>主任致词</h1>
    <div class="content">
      <div class="director-photo">
        <!-- 主任照片 -->
      </div>
      <div class="director-message">
        <p>尊敬的来访者：</p>
        <p>欢迎访问中国矿业大学全国重点实验室...</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.director-container {
  padding: 1rem;
}

.content {
  margin-top: 2rem;
  display: flex;
  gap: 2rem;
}

.director-photo {
  flex: 0 0 300px;
  height: 400px;
  background: #f5f5f5;
  border-radius: 8px;
}

.director-message {
  flex: 1;
  line-height: 1.8;
}
</style> 