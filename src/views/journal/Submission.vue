<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <div class="submission">
    <h2>征稿启事</h2>
    <div class="content">
      <section class="submission-section">
        <h3>投稿要求</h3>
        <!-- 投稿要求内容 -->
      </section>

      <section class="submission-section">
        <h3>投稿方式</h3>
        <p>请通过以下链接进行在线投稿：</p>
        <a href="#" target="_blank" class="submit-button">在线投稿系统</a>
      </section>

      <section class="submission-section">
        <h3>论文模板下载</h3>
        <div class="template-downloads">
          <a href="#" class="download-link">Word模板下载</a>
          <a href="#" class="download-link">LaTeX模板下载</a>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.submission {
  padding: 1rem;
}

.submission-section {
  margin-bottom: 2rem;
}

.submission-section h3 {
  color: #1a6eb5;
  margin-bottom: 1rem;
}

.submit-button {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: #1a6eb5;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  margin-top: 1rem;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background: #155a94;
}

.template-downloads {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.download-link {
  color: #1a6eb5;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid #1a6eb5;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.download-link:hover {
  background: #1a6eb5;
  color: white;
}
</style> 