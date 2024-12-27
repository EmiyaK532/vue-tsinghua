<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <div class="cooperation-container">
    <div class="sidebar">
      <router-link to="/cooperation/overview" class="sidebar-link">交流概况</router-link>
      <router-link :to="{ name: 'CooperationAcademic' }" class="sidebar-link">学术交流</router-link>
      <router-link to="/cooperation/projects" class="sidebar-link">合作项目</router-link>
      <router-link to="/cooperation/conferences" class="sidebar-link">学术会议</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.cooperation-container {
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
  top: auto;
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
</style> 