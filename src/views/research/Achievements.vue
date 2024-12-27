<script setup lang="ts">
import { ref } from 'vue'

interface Award {
  category: string
  level: string
  name: string
  winners: string
  year: string
}

interface Book {
  id: number
  type: string
  name: string
  authors: string
  publisher: string
  year: string
}

// 模拟数据
const awards = ref<Award[]>([
  {
    category: '国家级奖励',
    level: '国家科技进步二等奖',
    name: '煤矿突水致灾机理与防控关键技术',
    winners: '张三、李四、王五等',
    year: '2023'
  },
  {
    category: '省部级奖励',
    level: '教育部科技进步一等奖',
    name: '煤矿瓦斯灾害防控技术创新与应用',
    winners: '李四、王五、赵六等',
    year: '2022'
  }
])

const books = ref<Book[]>([
  {
    id: 1,
    type: '专著',
    name: '煤矿安全科学与工程',
    authors: '张三、李四',
    publisher: '煤炭工业出版社',
    year: '2023'
  }
])
</script>

<template>
  <div class="achievements-container">
    <!-- 成果概况 -->
    <section class="section">
      <h2>成果概况</h2>
      <div class="overview-content">
        <p>实验室围绕煤矿重大灾害防控理论与关键技术，在瓦斯灾害防控、水害防治、火灾防治和动力灾害防控等方面取得了一系列重要成果。近五年来，实验室共承担国家级科研项目100余项，获得国家级科技奖励10项，省部级科技奖励30余项；发表SCI/EI收录论文500余篇；授权发明专利200余项；出版专著20余部。</p>
      </div>
    </section>

    <!-- 获奖情况 -->
    <section class="section">
      <h2>获奖情况</h2>
      <div class="table-container">
        <table>
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
            <tr v-for="award in awards" :key="award.name">
              <td>{{ award.category }}</td>
              <td>{{ award.level }}</td>
              <td>{{ award.name }}</td>
              <td>{{ award.winners }}</td>
              <td>{{ award.year }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- 编著、译著 -->
    <section class="section">
      <h2>编著、译著</h2>
      <div class="table-container">
        <table>
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
            <tr v-for="book in books" :key="book.id">
              <td>{{ book.id }}</td>
              <td>{{ book.type }}</td>
              <td>{{ book.name }}</td>
              <td>{{ book.authors }}</td>
              <td>{{ book.publisher }}</td>
              <td>{{ book.year }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<style scoped>
.achievements-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: #2c3e50;
}

.section {
  margin-bottom: 3rem;
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

.overview-content {
  line-height: 1.8;
  font-size: 1.1rem;
  color: #34495e;
  margin-bottom: 2rem;
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
  .achievements-container {
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
  .achievements-container {
    color: #e0e0e0;
  }

  .overview-content {
    color: #b8c2cc;
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