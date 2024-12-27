<script setup lang="ts">
import { ref } from 'vue'

interface Equipment {
  id: number
  name: string
  model: string
  description: string
  features: string[]
  specifications: string[]
  image: string
  manufacturer: string
}

const equipments = ref<Equipment[]>([
  {
    id: 1,
    name: '瓦斯含量快速测定仪',
    model: 'WK-2D',
    description: '用于煤矿瓦斯含量的快速测定，具有测量精度高、操作简便等特点。',
    features: [
      '全自动测量流程',
      '高精度传感器',
      '数据实时显示',
      '自动数据存储'
    ],
    specifications: [
      '测量范围：0-20m³/t',
      '精度：±0.1m³/t',
      '响应时间：<30s'
    ],
    image: '/images/equipment/gas-detector.jpg',
    manufacturer: '煤科院安全装备分院'
  },
  // ... 更多设备
])
</script>

<template>
  <div class="equipment-container">
    <h2>仪器设备</h2>
    <div class="intro-section">
      <p>实验室配备了国内外先进的实验研究设备，主要包括煤矿瓦斯、水害、火灾、动力灾害等安全监测与防控设备，为科研工作提供了有力的硬件支持。</p>
    </div>

    <div class="equipment-grid">
      <div v-for="equipment in equipments" 
           :key="equipment.id" 
           class="equipment-card">
        <div class="equipment-image">
          <img :src="equipment.image" :alt="equipment.name">
        </div>
        <div class="equipment-content">
          <div class="equipment-header">
            <h3>{{ equipment.name }}</h3>
            <span class="model">{{ equipment.model }}</span>
          </div>
          <p class="description">{{ equipment.description }}</p>
          
          <div class="features">
            <h4>主要特点</h4>
            <ul>
              <li v-for="(feature, index) in equipment.features" 
                  :key="index">
                {{ feature }}
              </li>
            </ul>
          </div>

          <div class="specifications">
            <h4>技术参数</h4>
            <ul>
              <li v-for="(spec, index) in equipment.specifications" 
                  :key="index">
                {{ spec }}
              </li>
            </ul>
          </div>

          <div class="manufacturer">
            <span class="label">生产厂家：</span>
            {{ equipment.manufacturer }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.equipment-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: #2c3e50;
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

.intro-section {
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
}

.equipment-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.equipment-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.equipment-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.equipment-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.equipment-card:hover .equipment-image img {
  transform: scale(1.05);
}

.equipment-content {
  padding: 1.5rem;
}

.equipment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.equipment-header h3 {
  font-size: 1.3rem;
  margin: 0;
  color: #2c3e50;
}

.model {
  background: #f0f7ff;
  color: #1a6eb5;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.9rem;
}

.description {
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

h4 {
  font-size: 1.1rem;
  margin: 1rem 0 0.5rem;
  color: #2c3e50;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0 0 1rem;
}

li {
  position: relative;
  padding-left: 1.2rem;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #1a6eb5;
}

.manufacturer {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
}

.label {
  color: #666;
  margin-right: 0.5rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .equipment-container {
    padding: 1rem;
  }

  .equipment-grid {
    grid-template-columns: 1fr;
  }
}

/* 深色模式适配 */
@media (prefers-color-scheme: dark) {
  .equipment-container {
    color: #e0e0e0;
  }

  .equipment-card {
    background: #2d2d2d;
  }

  .equipment-header h3 {
    color: #e0e0e0;
  }

  .model {
    background: #1a1a1a;
    color: #3498db;
  }

  h4 {
    color: #e0e0e0;
  }

  .manufacturer {
    border-top-color: #3a3a3a;
  }

  .label {
    color: #888;
  }

  li::before {
    color: #3498db;
  }
}
</style> 