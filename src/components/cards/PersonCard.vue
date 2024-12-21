<script setup lang="ts">
interface Props {
  name: string
  title: string
  photo?: string
  organization?: string
  email?: string
  research?: string[]
}

defineProps<Props>()
</script>

<template>
  <div class="person-card">
    <div class="photo">
      <img v-if="photo" :src="photo" :alt="name">
      <div v-else class="photo-placeholder"></div>
    </div>
    <div class="info">
      <h3>{{ name }}</h3>
      <p class="title">{{ title }}</p>
      <p v-if="organization">{{ organization }}</p>
      <p v-if="email" class="email">{{ email }}</p>
      <div v-if="research?.length" class="research">
        <h4>研究方向：</h4>
        <ul>
          <li v-for="area in research" :key="area">{{ area }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.person-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.person-card:hover {
  transform: translateY(-5px);
}

.photo, .photo-placeholder {
  height: 200px;
  background: #f5f5f5;
  overflow: hidden;
}

.photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info {
  padding: 1.5rem;
}

.title {
  color: #1a6eb5;
  font-weight: bold;
  margin: 0.5rem 0;
}

.email {
  color: #666;
  font-size: 0.9rem;
}

.research {
  margin-top: 1rem;
}

.research h4 {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.research ul {
  list-style: none;
  padding-left: 0;
}

.research li {
  font-size: 0.9rem;
  color: #666;
  margin: 0.2rem 0;
}
</style> 