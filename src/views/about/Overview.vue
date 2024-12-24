<script setup lang="ts">
import { ref, onMounted } from 'vue'
import PageLayout from '@/components/layouts/PageLayout.vue'
import { aboutApi } from '@/api'
import type { LabOverview } from '@/types/api'

const loading = ref(true)
const error = ref<string | null>(null)
const labInfo = ref<LabOverview | null>(null)

const fetchOverview = async () => {
  try {
    loading.value = true
    const res = await aboutApi.getOverview()
    labInfo.value = res.data
  } catch (e) {
    error.value = '获取实验室概况失败'
    console.error(e)
  } finally {
    loading.value = false
  }
}

onMounted(fetchOverview)
</script>

<template>
  <PageLayout title="实验室概况" :loading="loading" :error="error">
    <div v-if="labInfo" class="overview-content">
      <section class="intro-section">
        <h2>实验室简介</h2>
        <p>{{ labInfo.introduction }}</p>
      </section>

      <section class="research-section">
        <h2>主要研究方向</h2>
        <div class="research-grid">
          <div v-for="item in labInfo.research" 
               :key="item.title"
               class="research-item">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </section>

      <section v-for="achievement in labInfo.achievements"
               :key="achievement.title"
               class="achievements-section">
        <h2>{{ achievement.title }}</h2>
        <ul>
          <li v-for="item in achievement.items" 
              :key="item">
            {{ item }}
          </li>
        </ul>
      </section>

      <section class="facilities-section">
        <h2>实验设施</h2>
        <div class="facilities-grid">
          <div v-for="facility in labInfo.facilities"
               :key="facility.name"
               class="facility-item">
            <h3>{{ facility.name }}</h3>
            <ul>
              <li v-for="equipment in facility.equipment"
                  :key="equipment">
                {{ equipment }}
              </li>
            </ul>
          </div>
        </div>
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

.research-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 1rem;
}

.research-item {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.research-item:hover {
  transform: translateY(-5px);
}

.facilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 1rem;
}

.facility-item {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
}

.facility-item ul {
  margin-top: 0.5rem;
}
</style> 