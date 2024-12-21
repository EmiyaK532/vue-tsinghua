<script setup lang="ts">
import { ref } from 'vue'
import PageLayout from '@/components/layouts/PageLayout.vue'

const statistics = ref({
  professors: 25,
  associateProfessors: 35,
  lecturers: 20,
  postdocs: 15,
  phds: 80,
  masters: 150
})
</script>

<template>
  <PageLayout title="师资概况">
    <div class="overview-content">
      <div class="statistics-grid">
        <div class="stat-card">
          <h3>教授</h3>
          <div class="number">{{ statistics.professors }}</div>
        </div>
        <div class="stat-card">
          <h3>副教授</h3>
          <div class="number">{{ statistics.associateProfessors }}</div>
        </div>
        <div class="stat-card">
          <h3>讲师</h3>
          <div class="number">{{ statistics.lecturers }}</div>
        </div>
        <div class="stat-card">
          <h3>博士后</h3>
          <div class="number">{{ statistics.postdocs }}</div>
        </div>
        <div class="stat-card">
          <h3>博士生</h3>
          <div class="number">{{ statistics.phds }}</div>
        </div>
        <div class="stat-card">
          <h3>硕士生</h3>
          <div class="number">{{ statistics.masters }}</div>
        </div>
      </div>

      <div class="description">
        <h2>师资力量</h2>
        <p>实验室拥有一支高水平的研究团队，包括长江学者、国家杰出青年科学基金获得者等高层次人才。
           团队成员在各自领域具有深厚的研究基础和丰富的实践经验。</p>
      </div>
    </div>
  </PageLayout>
</template>

<style scoped>
.overview-content {
  padding: 1rem;
}

.statistics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.stat-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-card h3 {
  color: #666;
  margin-bottom: 1rem;
}

.number {
  font-size: 2.5rem;
  color: #1a6eb5;
  font-weight: bold;
}

.description {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.description h2 {
  color: #333;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #1a6eb5;
}

.description p {
  color: #666;
  line-height: 1.8;
}
</style> 