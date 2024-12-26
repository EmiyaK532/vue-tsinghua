<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <div class="achievements">
    <h2>研究成果</h2>
    <div class="section">
      <h3>成果概况</h3>
      <!-- 成果概况内容 -->
    </div>
    
    <div class="section">
      <h3>获奖情况</h3>
      <table class="awards-table">
        <thead>
          <tr>
            <th>类别</th>
            <th>等级</th>
            <th>成果名称</th>
            <th>获奖人员</th>
            <th>年度</th>
          </tr>
        </thead>
        <tbody>
          <!-- 奖项数据 -->
        </tbody>
      </table>
    </div>

    <div class="section">
      <h3>编著、译著</h3>
      <table class="books-table">
        <thead>
          <tr>
            <th>序号</th>
            <th>类型</th>
            <th>名称</th>
            <th>作者</th>
            <th>出版社名称</th>
            <th>年份</th>
          </tr>
        </thead>
        <tbody>
          <!-- 著作数据 -->
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.achievements {
  padding: 1rem;
}

.section {
  margin-bottom: 2rem;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
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