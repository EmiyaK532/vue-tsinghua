<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <div class="international">
    <h2>留学生</h2>
    <table class="students-table">
      <thead>
        <tr>
          <th>姓名</th>
          <th>英文姓名</th>
          <th>学生类别</th>
          <th>导师姓名</th>
          <th>国家</th>
        </tr>
      </thead>
      <tbody>
        <!-- 留学生数据 -->
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.international {
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