<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <div class="students">
    <h2>在读研究生</h2>
    <table class="students-table">
      <thead>
        <tr>
          <th>学生姓名</th>
          <th>学生类别</th>
          <th>导师姓名</th>
          <th>入学年份</th>
        </tr>
      </thead>
      <tbody>
        <!-- 在读研究生数据 -->
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.students {
  padding: 1rem;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

th, td {
  border: 1px solid #ddd;
  padding: 0.8rem;
  text-align: left;
}

th {
  background-color: #f5f5f5;
}

tr:nth-child(even) {
  background-color: #fafafa;
}
</style> 