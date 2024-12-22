<script setup lang="ts">
import PageLayout from '@/components/layouts/PageLayout.vue'

const labInfo = {
  introduction: `煤矿灾害防控实验室成立于XXXX年，是国家重点实验室。实验室立足煤矿安全生产重大需求，
                开展煤矿灾害防控基础理论与关键技术研究，为保障煤矿安全高效开采提供科技支撑。`,
  research: [
    '煤矿瓦斯灾害防控',
    '矿井通风安全',
    '粉尘防治',
    '水害防治',
    '地压与顶板控制'
  ],
  achievements: [
    '获得国家科技进步奖XX项',
    '发表高水平论文XXX篇',
    '授权发明专利XXX项',
    '制定国家标准XX项'
  ]
}
</script>

<template>
  <PageLayout title="实验室概况">
    <div class="overview-content">
      <section class="intro-section">
        <h2>实验室简介</h2>
        <p>{{ labInfo.introduction }}</p>
      </section>

      <section class="research-section">
        <h2>主要研究方向</h2>
        <ul>
          <li v-for="item in labInfo.research" :key="item">{{ item }}</li>
        </ul>
      </section>

      <section class="achievements-section">
        <h2>主要成果</h2>
        <ul>
          <li v-for="item in labInfo.achievements" :key="item">{{ item }}</li>
        </ul>
      </section>
    </div>
  </PageLayout>
</template>

<style scoped>
.overview-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

section {
  margin-bottom: 3rem;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #333;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #1a6eb5;
}

p {
  line-height: 1.8;
  color: #666;
}

ul {
  list-style: none;
  padding-left: 0;
}

li {
  padding: 0.8rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: #666;
}

li::before {
  content: '•';
  color: #1a6eb5;
  position: absolute;
  left: 0;
  font-weight: bold;
}
</style> 