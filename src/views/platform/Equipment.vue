<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <div class="equipment">
    <h2>仪器设备</h2>
    <div class="description">
      <!-- 仪器设备文字介绍 -->
    </div>
    <div class="equipment-gallery">
      <!-- 仪器设备图片展示 -->
    </div>
  </div>
</template>

<style scoped>
.equipment {
  padding: 1rem;
}

.description {
  line-height: 1.6;
  margin-bottom: 2rem;
}

.equipment-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}
</style> 