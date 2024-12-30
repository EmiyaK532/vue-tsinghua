<script setup lang="ts">
import { ref } from 'vue'

// 定义领导数据数组
const leaders = ref([
  {
    name: '蒂法',
    position: '教授',
    research: '人工智能',
    imageUrl: '/images/director.jpg' // 替换成实际的远程图片URL
  },
  // ... 其他领导数据
])

// 处理图片加载错误
const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.src = '/default-avatar.jpg' // 替换成你的默认图片路径
}
</script>

<template>
  <div class="leadership-container">
    <h1>现任领导</h1>
    <div class="leaders-grid">
      <div class="leader-card" v-for="(leader, index) in leaders" :key="index">
        <div class="photo">
          <img 
            :src="leader.imageUrl"
            @error="handleImageError"
            alt="领导照片"
          />
        </div>
        <div class="info">
          <h3>{{ leader.name }}</h3>
          <p>{{ leader.position }}</p>
          <p>{{ leader.research }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.leadership-container {
  padding: 1rem;
}

.leaders-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.leader-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.photo {
  height: 200px;
  background: #f5f5f5;
}

.info {
  padding: 1rem;
}

.info h3 {
  margin: 0;
  color: #333;
}

.info p {
  margin: 0.5rem 0;
  color: #666;
}

.photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style> 