<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <div class="introduction">
    <h2>FRICTION简介</h2>
    <div class="content">
      <div class="journal-info">
        <img src="https://via.placeholder.com/200x300" alt="FRICTION期刊封面" class="journal-cover">
        <div class="info-text">
          <!-- 期刊简介内容 -->
          <p>FRICTION是由中国科学院主管、清华大学主办的英文学术期刊...</p>
          <p>影响因子：X.XXX (2023)</p>
          <p>出版周期：双月刊</p>
          <p>ISSN: XXXX-XXXX</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.introduction {
  padding: 1rem;
}

.journal-info {
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
}

.journal-cover {
  width: 200px;
  height: auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.info-text {
  flex: 1;
  line-height: 1.6;
}

.info-text p {
  margin-bottom: 1rem;
}
</style> 