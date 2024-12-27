<script setup lang="ts">
import { ref } from 'vue'

const statistics = ref({
  internationalPartners: 15,
  domesticPartners: 28,
  conferences: 12,
  projects: 45
})
</script>

<template>
  <div class="overview-container">
    <section class="intro-section">
      <h2>交流概况</h2>
      <div class="intro-content">
        <p>实验室积极开展国内外学术交流与合作，与多个国家和地区的高校、科研机构建立了长期稳定的合作关系。通过举办国际学术会议、开展合作研究、人才交流等多种方式，促进学术交流与创新发展。</p>
        <p>近年来，实验室与"一带一路"沿线国家的多所高校和研究机构开展深入合作，在煤矿安全领域共同开展研究工作，取得了丰硕的合作成果。同时，与国内煤炭企业、科研院所保持密切合作，推动科研成果转化与应用。</p>
      </div>
    </section>

    <section class="stats-section">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-number">{{ statistics.internationalPartners }}</div>
          <div class="stat-label">国际合作伙伴</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">{{ statistics.domesticPartners }}</div>
          <div class="stat-label">国内合作单位</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">{{ statistics.conferences }}</div>
          <div class="stat-label">举办学术会议</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">{{ statistics.projects }}</div>
          <div class="stat-label">合作项目</div>
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
  margin-bottom: 1.5rem;
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
    grid-template-columns: repeat(2, 1fr);
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