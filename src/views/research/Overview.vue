<script setup lang="ts">
import { ref } from 'vue'

const researchAreas = ref([
  {
    title: '煤矿瓦斯灾害防控',
    content: '开展煤矿瓦斯赋存规律、瓦斯突出机理及防治技术研究，建立瓦斯灾害预警和防控体系。'
  },
  {
    title: '矿井火灾防治',
    content: '研究煤层自燃机理、火灾蔓延规律，开发智能监测预警和防治新技术。'
  },
  {
    title: '水害防治',
    content: '研究矿井水害形成机制，开发水害精准探测和治理技术，建立矿区水资源保护与利用体系。'
  },
  {
    title: '动力灾害防控',
    content: '研究冲击地压发生机理，开发智能监测预警技术，形成多灾种耦合防控技术体系。'
  }
])
</script>

<template>
  <div class="overview-container">
    <section class="intro-section">
      <h2>实验室简介</h2>
      <div class="intro-content">
        <p>煤炭灾害防控全国重点实验室成立于2008年，是我国煤矿安全领域唯一的全国重点实验室。实验室立足煤炭行业重大安全需求，围绕煤矿重大灾害防控理论与关键技术开展创新研究。</p>
        <p>经过多年发展，实验室已形成了以瓦斯灾害防控、水害防治、火灾防治和动力灾害防控为特色的研究方向，在煤矿安全科技创新、人才培养和国际交流等方面发挥着重要作用。</p>
      </div>
    </section>

    <section class="research-areas">
      <h2>研究方向</h2>
      <div class="areas-grid">
        <div v-for="area in researchAreas" 
             :key="area.title" 
             class="area-card">
          <h3>{{ area.title }}</h3>
          <p>{{ area.content }}</p>
        </div>
      </div>
    </section>

    <!-- <section class="achievements">
      <h2>科研成果</h2>
      <div class="achievement-stats">
        <div class="stat-item">
          <span class="number">200+</span>
          <span class="label">国家级项目</span>
        </div>
        <div class="stat-item">
          <span class="number">1000+</span>
          <span class="label">发表论文</span>
        </div>
        <div class="stat-item">
          <span class="number">300+</span>
          <span class="label">授权专利</span>
        </div>
      </div>
    </section> -->
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

.areas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.area-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.area-card:hover {
  transform: translateY(-5px);
}

.area-card h3 {
  color: #1a6eb5;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.area-card p {
  color: #576574;
  line-height: 1.6;
}

.achievement-stats {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
}

.stat-item {
  text-align: center;
  padding: 1.5rem;
  min-width: 200px;
}

.stat-item .number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a6eb5;
  margin-bottom: 0.5rem;
}

.stat-item .label {
  color: #576574;
  font-size: 1.1rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .overview-container {
    padding: 1rem;
  }

  .areas-grid {
    grid-template-columns: 1fr;
  }

  .achievement-stats {
    flex-direction: column;
    align-items: center;
  }

  .stat-item {
    width: 100%;
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

  .area-card {
    background: #2d2d2d;
  }

  .area-card p {
    color: #b8c2cc;
  }

  .stat-item .label {
    color: #b8c2cc;
  }
}
</style> 