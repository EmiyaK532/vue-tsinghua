<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <div class="reservation">
    <h2>开放预约</h2>
    <div class="description">
      <!-- 预约系统说明 -->
    </div>
    <div class="reservation-link">
      <a href="#" target="_blank" class="button">进入预约系统</a>
    </div>
  </div>
</template>

<style scoped>
.reservation {
  padding: 1rem;
}

.description {
  line-height: 1.6;
  margin-bottom: 2rem;
}

.reservation-link {
  text-align: center;
  margin-top: 2rem;
}

.button {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #1a6eb5;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #155a94;
}
</style> 