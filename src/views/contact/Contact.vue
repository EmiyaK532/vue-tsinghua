<script setup lang="ts">
import { ref, onMounted } from 'vue'

// 使用高德地图 API
declare global {
  interface Window {
    AMap: any;
  }
}

const map = ref<any>(null)

onMounted(() => {
  // 动态加载高德地图脚本
  const script = document.createElement('script')
  script.src = `https://webapi.amap.com/maps?v=2.0&key=0de2210febf4786765723dffabc6d1d5`  // 需要替换为您的高德地图 API key
  script.async = true
  script.onload = initMap
  document.head.appendChild(script)
})

const initMap = () => {
  map.value = new window.AMap.Map('map-container', {
    zoom: 15,
    center: [117.145667, 34.218558]  // 中国矿业大学安全与工程学院的经纬度
  })
  
  // 添加标记
  const marker = new window.AMap.Marker({
    position: [117.152834, 34.216697],
    title: '中国矿业大学安全与工程学院'
  })
  map.value.add(marker)
}
</script>

<template>
  <div class="contact-container">
    <div class="content">
      <h2>联系我们</h2>
      
      <div class="contact-info">
        <div class="info-section">
          <h3>联系方式</h3>
          <p><strong>电话：</strong> 0516-83885606</p>
          <p><strong>传真：</strong> 0516-83885606</p>
          <p><strong>邮箱：</strong> example@cumt.edu.cn</p>
        </div>

        <div class="info-section">
          <h3>通讯地址</h3>
          <p>江苏省徐州市中国矿业大学南湖校区安全与工程学院</p>
          <p><strong>邮政编码：</strong> 221116</p>
        </div>

        <div class="info-section">
          <h3>来访路线</h3>
          <div id="map-container" class="map"></div>
          <div class="directions">
            <h4>交通指南：</h4>
            <p>1. 从徐州站乘坐51路公交车至矿大南湖东门站下车</p>
            <p>2. 从徐州东站可乘坐1号线抵达彭城广场，然后乘坐63或47路公交车至矿大南湖东门站下车</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-container {
  padding: 2rem;
  background: #fff;
  min-height: calc(100vh - 60px);
  margin-top: 60px;
}

.content {
  max-width: 1200px;
  margin: 0 auto;
}

.contact-info {
  display: grid;
  gap: 2rem;
  margin-top: 2rem;
}

.info-section {
  background: #f8f8f8;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.info-section h3 {
  color: #1a6eb5;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #1a6eb5;
}

.info-section p {
  margin: 0.5rem 0;
  line-height: 1.6;
}

.map {
  width: 100%;
  height: 400px;
  margin: 1rem 0;
  border-radius: 8px;
  overflow: hidden;
}

.directions {
  margin-top: 1rem;
}

.directions h4 {
  margin-bottom: 0.5rem;
  color: #333;
}

@media (max-width: 768px) {
  .contact-container {
    padding: 1rem;
  }
  
  .map {
    height: 300px;
  }
}
</style> 