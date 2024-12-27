<script setup lang="ts">
import { ref } from 'vue'

interface Student {
  name: string
  type: string
  supervisor: string
  enrollmentYear: string
}

const students = ref<Student[]>([
  {
    name: '张三',
    type: '博士研究生',
    supervisor: '李教授',
    enrollmentYear: '2023'
  },
  // ... 更多数据
])
</script>

<template>
  <div class="students-container">
    <h2>在读研究生</h2>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>学生姓名</th>
            <th>学生类别</th>
            <th>导师姓名</th>
            <th>入学年份</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in students" :key="student.name">
            <td>{{ student.name }}</td>
            <td>{{ student.type }}</td>
            <td>{{ student.supervisor }}</td>
            <td>{{ student.enrollmentYear }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.students-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: #2c3e50;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;
}

h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #1a6eb5, #3498db);
  border-radius: 2px;
}

.table-container {
  overflow-x: auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 0;
}

th, td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #eee;
}

th {
  background: #f8f9fa;
  font-weight: 600;
  color: #2c3e50;
}

tr:hover {
  background: #f8f9fa;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .students-container {
    padding: 1rem;
  }

  .table-container {
    margin: 0 -1rem;
    border-radius: 0;
  }

  th, td {
    padding: 0.8rem;
    font-size: 0.9rem;
  }
}

/* 深色模式适配 */
@media (prefers-color-scheme: dark) {
  .students-container {
    color: #e0e0e0;
  }

  .table-container {
    background: #2d2d2d;
  }

  th {
    background: #1a1a1a;
    color: #e0e0e0;
  }

  th, td {
    border-bottom-color: #3a3a3a;
  }

  tr:hover {
    background: #363636;
  }
}
</style> 