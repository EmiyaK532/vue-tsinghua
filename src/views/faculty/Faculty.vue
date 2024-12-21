<script setup lang="ts">
import { ref } from 'vue'
import FacultySidebar from '@/components/sidebars/FacultySidebar.vue'
</script>

<template>
  <div class="faculty-container">
    <FacultySidebar />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.faculty-container {
  display: flex;
  min-height: calc(100vh - 60px);
  background: #f5f5f5;
}

.content {
  flex: 1;
  padding: 2rem;
  background: white;
  margin: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  min-height: calc(100vh - 80px);
}
</style> 