<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <div class="graduates">
    <h2>毕业研究生</h2>
    <table class="graduates-table">
      <thead>
        <tr>
          <th>学生姓名</th>
          <th>学生类别</th>
          <th>导师姓名</th>
          <th>毕业年份</th>
          <th>入职单位</th>
        </tr>
      </thead>
      <tbody>
        <!-- 毕业生数据 -->
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.graduates {
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