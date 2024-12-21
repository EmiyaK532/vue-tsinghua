<script setup lang="ts">
import { ref } from 'vue'
import PageLayout from '@/components/layouts/PageLayout.vue'
import ResearchAchievement from '@/components/research/ResearchAchievement.vue'
import { useAchievements } from '@/composables/useAchievements'

const activeTab = ref('papers')
const { achievements, loading, error } = useAchievements()

const tabs = [
  { key: 'papers', label: '论文发表' },
  { key: 'patents', label: '专利授权' },
  { key: 'projects', label: '科研项目' }
]
</script>

<template>
  <PageLayout title="科研成果" :loading="loading" :error="error">
    <div class="achievements-tabs">
      <div class="tab-buttons">
        <button 
          v-for="tab in tabs" 
          :key="tab.key"
          :class="{ active: activeTab === tab.key }"
          @click="activeTab = tab.key">
          {{ tab.label }}
        </button>
      </div>
      
      <div class="achievements-list">
        <ResearchAchievement
          v-for="achievement in achievements[activeTab]"
          :key="achievement.id"
          v-bind="achievement"
        />
      </div>
    </div>
  </PageLayout>
</template>

<style scoped>
.achievements-tabs {
  margin-top: 2rem;
}

.tab-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.tab-buttons button {
  padding: 0.8rem 2rem;
  border: none;
  background: #f5f5f5;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-buttons button.active {
  background: #1a6eb5;
  color: white;
}

.achievements-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style> 