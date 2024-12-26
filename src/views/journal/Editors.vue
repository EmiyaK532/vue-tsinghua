<script setup lang="ts">
import { ref } from 'vue'

const editors = ref([
  {
    role: '主编',
    members: [
      { name: '张三', affiliation: 'XX大学' }
    ]
  },
  {
    role: '副主编',
    members: [
      { name: '李四', affiliation: 'YY研究所' },
      { name: '王五', affiliation: 'ZZ大学' }
    ]
  }
])
</script>

<template>
  <div class="editors">
    <h2>FRICTION编委会</h2>
    <div class="editors-list">
      <div v-for="group in editors" :key="group.role" class="editor-group">
        <h3>{{ group.role }}</h3>
        <div class="members">
          <div v-for="member in group.members" 
               :key="member.name" 
               class="member-card">
            <h4>{{ member.name }}</h4>
            <p>{{ member.affiliation }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.editors {
  padding: 1rem;
}

.editor-group {
  margin-bottom: 2rem;
}

.editor-group h3 {
  color: #1a6eb5;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #1a6eb5;
}

.members {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.member-card {
  background: #f8f8f8;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.member-card h4 {
  margin-bottom: 0.5rem;
  color: #333;
}

.member-card p {
  color: #666;
  font-size: 0.9rem;
}
</style> 