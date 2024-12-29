<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { aboutApi } from '@/api'
import PageLayout from '@/components/layouts/PageLayout.vue'

const director = ref({
  name: 'HoWhite',
  title: '教授/博士生导师',
  photo: '/images/director.jpg',
  message: ''
})

// 添加检查图片URL是否有效的函数
//通过创建新的image对象来验证
const isImageUrlValid = (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}

const fetchDirectorMessage = async () => {
  try {
    const res = await aboutApi.getDirector()
    
    // 检查图片链接是否有效
    let photoUrl = '/images/director.jpg';
    if (res.data.pictures && res.data.pictures !== '图片链接') {
      const isValid = await isImageUrlValid(res.data.pictures);
      if (isValid) {
        photoUrl = res.data.pictures;
      }
    }

    director.value = {
      ...director.value,
      message: res.data.content,
      photo: photoUrl
    }
  } catch (error) {
    console.error('获取主任致词失败:', error)
    ElMessage.error('获取主任致词失败')
  }
}

onMounted(() => {
  fetchDirectorMessage()
})
</script>

<template>
  <PageLayout title="主任致词">
    <div class="director-content">
      <div class="director-info">
        <div class="photo-container">
          <img :src="director.photo" :alt="director.name" class="director-photo">
          <div class="info-text">
            <h3>{{ director.name }}</h3>
            <p>{{ director.title }}</p>
          </div>
        </div>
      </div>
      
      <div class="message-content">
        <div class="quote-marks">❝</div>
        <p v-for="(paragraph, index) in director.message.split('\n')"
           :key="index"
           class="message-paragraph">
          {{ paragraph.trim() }}
        </p>
        <div class="signature">
          <p>{{ director.name }}</p>
          <p>实验室主任</p>
          <p>{{ new Date().getFullYear() }}年{{ new Date().getMonth() + 1 }}月</p>
        </div>
      </div>
    </div>
  </PageLayout>
</template>

<style scoped>
.director-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  gap: 3rem;
}

.director-info {
  flex: 0 0 300px;
}

.photo-container {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.director-photo {
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
  border-radius: 4px;
}

.info-text {
  text-align: center;
  margin-top: 1rem;
}

.message-content {
  flex: 1;
  background: white;
  padding: 3rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  position: relative;
}

.quote-marks {
  font-size: 4rem;
  color: #1a6eb5;
  opacity: 0.2;
  position: absolute;
  top: 1rem;
  left: 1rem;
}

.message-paragraph {
  margin-bottom: 1.5rem;
  line-height: 1.8;
  color: #666;
  text-indent: 2em;
}

.signature {
  margin-top: 3rem;
  text-align: right;
  color: #333;
}

.signature p {
  margin: 0.3rem 0;
}
</style> 