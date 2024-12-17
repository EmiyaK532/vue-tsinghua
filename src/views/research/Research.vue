<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <div class="research-container">
    <div class="sidebar">
      <router-link to="/research/directions" class="sidebar-link">研究方向</router-link>
      <router-link to="/research/achievements" class="sidebar-link">科研成果</router-link>
      <router-link to="/research/awards" class="sidebar-link">获奖情况</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.research-container {
  display: flex;
  min-height: calc(100vh - 60px);
  background: #f5f5f5;
}

.sidebar {
  width: 240px;
  background: white;
  padding: 2rem 0;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 60px;
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
  padding: 2rem;
  background: white;
  margin: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  min-height: calc(100vh - 80px);
}

@media (max-width: 768px) {
  .research-container {
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