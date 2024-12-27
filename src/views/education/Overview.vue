<script setup lang="ts">
import { ref } from 'vue'

const statistics = ref({
  currentStudents: 86,
  internationalStudents: 12,
  graduates: 235
})
</script>

<template>
  <div class="overview-container">
    <section class="intro-section">
      <h2>人才培养概况</h2>
      <div class="intro-content">
        <p>实验室重视人才培养工作，构建了完善的研究生培养体系。依托中国矿业大学安全工程学科，培养安全工程、采矿工程等相关专业的硕士研究生和博士研究生。同时，实验室积极开展国际交流与合作，招收培养来自"一带一路"沿线国家的留学生。</p>
        <p>实验室为研究生提供先进的科研平台和良好的学术环境，通过产学研结合的方式，培养具有扎实理论基础和创新能力的高层次人才。毕业生主要在高校、科研院所、大型能源企业等单位就业。</p>
      </div>
    </section>

    <section class="stats-section">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-number">{{ statistics.currentStudents }}</div>
          <div class="stat-label">在读研究生</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">{{ statistics.internationalStudents }}</div>
          <div class="stat-label">留学生</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">{{ statistics.graduates }}</div>
          <div class="stat-label">累计毕业生</div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.overview-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: #2c3e50;
}

section {
  margin-bottom: 3rem;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
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

.intro-content {
  line-height: 1.8;
  font-size: 1.1rem;
}

.intro-content p {
  margin-bottom: 1rem;
  color: #34495e;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.stat-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a6eb5;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #666;
  font-size: 1.1rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .overview-container {
    padding: 1rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }
}

/* 深色模式适配 */
@media (prefers-color-scheme: dark) {
  .overview-container {
    color: #e0e0e0;
  }

  .intro-content p {
    color: #b8c2cc;
  }

  .stat-card {
    background: #2d2d2d;
  }

  .stat-label {
    color: #b8c2cc;
  }
}
</style> 