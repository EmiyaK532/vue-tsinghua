<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <div class="organization-container">
    <div class="sidebar">
      <router-link to="/organization/experts" class="sidebar-link">咨询专家委员会</router-link>
      <router-link to="/organization/academic" class="sidebar-link">学术委员会</router-link>
      <router-link to="/organization/institutes" class="sidebar-link">研究所</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.organization-container {
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
</style> 