<script setup lang="ts">
const menuItems = [
  { title: '师资概况', path: '/faculty/overview' },
  { title: '在职教师', path: '/faculty/teachers' },
  { title: '教辅人员', path: '/faculty/staff' },
  { title: '访问学者', path: '/faculty/visitors' },
  { title: '退休人员', path: '/faculty/retired' },
]
</script>

<template>
  <div class="sidebar">
    <router-link 
      v-for="item in menuItems"
      :key="item.path"
      :to="item.path"
      class="sidebar-link">
      {{ item.title }}
    </router-link>
  </div>
</template>

<style scoped>
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
</style> 