<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <div class="research-container">
    <div class="sidebar">
      <router-link to="/research/overview" class="sidebar-link">科研概况</router-link>
      <router-link to="/research/achievements" class="sidebar-link">研究成果</router-link>
      <router-link to="/research/fund" class="sidebar-link">开放基金</router-link>
      <router-link to="/research/projects" class="sidebar-link">自主研究课题</router-link>
      <router-link to="/research/reports" class="sidebar-link">年度科研简报</router-link>
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
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
}

.sidebar {
  width: 200px;
  background: white;
  padding: 2.3rem 0;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 40px;
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