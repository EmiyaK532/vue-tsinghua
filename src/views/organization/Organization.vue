<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <div class="organization-container">
    <div class="sidebar">
      <router-link to="/organization/experts" class="sidebar-link">咨询专家委员会</router-link>
      <router-link :to="{ name: 'OrganizationAcademic' }" class="sidebar-link">学术委员会</router-link>
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
  margin-top: 60px;
  background: #f5f5f5;
  width: 100%;
  max-width: 100%;
  margin: 60px 0 0 0;
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
  top: 100px;
  height: calc(100vh - 60px);
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

.sidebar-link {
  display: block;
  padding: 1rem 2rem;
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
}

.sidebar-link:hover,
.sidebar-link.router-link-active {
  color: #1a6eb5;
  background: #f0f7ff;
  border-left-color: #1a6eb5;
}

@media (max-width: 768px) {
  .organization-container {
    flex-direction: column;
    margin-top: 50px;
  }

  .sidebar {
    width: 100%;
    position: static;
    height: auto;
    padding: 1rem 0;
  }

  .content {
    margin: 1rem;
  }

  .sidebar-link {
    padding: 0.8rem 1.5rem;
  }
}

@media (prefers-color-scheme: dark) {
  .organization-container {
    background: #1a1a1a;
  }

  .sidebar {
    background: #2d2d2d;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  }

  .content {
    background: #2d2d2d;
  }

  .sidebar-link {
    color: #e0e0e0;
  }

  .sidebar-link:hover,
  .sidebar-link.router-link-active {
    color: #3498db;
    background: #1a1a1a;
    border-left-color: #3498db;
  }
}
</style> 