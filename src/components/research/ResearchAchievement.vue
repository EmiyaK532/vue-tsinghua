<script setup lang="ts">
interface Props {
  type: 'paper' | 'patent' | 'project'
  title: string
  authors: string[]
  year: number
  journal?: string
  patentNo?: string
  fundingSource?: string
  abstract?: string
}

defineProps<Props>()
</script>

<template>
  <div class="achievement-card">
    <div class="achievement-type">{{ type === 'paper' ? '论文' : type === 'patent' ? '专利' : '项目' }}</div>
    <h3 class="achievement-title">{{ title }}</h3>
    <p class="achievement-authors">{{ authors.join(', ') }}</p>
    <p v-if="journal" class="achievement-journal">{{ journal }}</p>
    <p v-if="patentNo" class="achievement-patent-no">专利号：{{ patentNo }}</p>
    <p v-if="fundingSource" class="achievement-funding">资助来源：{{ fundingSource }}</p>
    <p v-if="abstract" class="achievement-abstract">{{ abstract }}</p>
    <div class="achievement-year">{{ year }}</div>
  </div>
</template>

<style scoped>
.achievement-card {
  position: relative;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}

.achievement-type {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.3rem 0.8rem;
  background: #1a6eb5;
  color: white;
  border-radius: 4px;
  font-size: 0.9rem;
}

.achievement-title {
  color: #333;
  margin-bottom: 1rem;
  padding-right: 100px;
}

.achievement-authors {
  color: #666;
  margin-bottom: 0.5rem;
}

.achievement-journal,
.achievement-patent-no,
.achievement-funding {
  color: #666;
  font-style: italic;
  margin-bottom: 0.5rem;
}

.achievement-abstract {
  color: #666;
  margin-top: 1rem;
  line-height: 1.6;
}

.achievement-year {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  color: #999;
}
</style> 