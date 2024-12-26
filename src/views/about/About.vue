<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <div class="about-container">
    <div class="sidebar">
      <router-link to="/about/director" class="sidebar-link">主任致词</router-link>
      <router-link to="/about/history" class="sidebar-link">历史沿革</router-link>
      <router-link to="/about/research" class="sidebar-link">科研任务</router-link>
      <router-link to="/about/leadership" class="sidebar-link">现任领导</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  display: flex;
  min-height: calc(100vh - 60px);
  background: #f5f5f5;
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
}

.sidebar {
  width: 200px;
  background: white;
  padding: 2rem 0;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 20px;
  height: calc(100vh - 60px);
}

.sidebar-link {
  padding: 1rem 2rem;
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
}

.sidebar-link:hover,
.sidebar-link.router-link-active {
  color: #1a6eb5;
  background: #f0f7ff;
  border-left-color: #1a6eb5;
}

.content {
  flex: 1;
  padding: 1.5rem;
  background: white;
  margin: 0;
  border-radius: 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  min-height: calc(100vh - 80px);
}

@media (max-width: 768px) {
  .about-container {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    height: auto;
    position: static;
    padding: 1rem 0;
  }

  .content {
    margin: 0;
    border-radius: 0;
  }
}
</style> 