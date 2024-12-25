<template>
  <div class="news-list">
    <div v-for="item in newsList" :key="item.id" class="news-item">
      <div class="news-content">
        <h3 class="news-title">{{ item.title }}</h3>
        <div class="news-meta">
          <span class="news-date">{{ item.date }}</span>
          <el-tag size="small" :type="getTagType(item.category)">{{ item.category }}</el-tag>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElTag } from 'element-plus'

const newsList = ref([
  {
    id: 1,
    title: '高端装备界面科学与技术全国重点实验室第三届年终学术报告会顺利举行',
    date: '2024.12.11',
    category: '学术活动'
  },
  {
    id: 2,
    title: '工业机器人时代 未来已来（宝藏科学课）',
    date: '2024.12.23',
    category: '科普教育'
  },
  {
    id: 3,
    title: '高端装备界面科学与技术全国重点实验室与中国航发沈阳发展战略合作',
    date: '2024.12.13',
    category: '合作交流'
  },
  {
    id: 4,
    title: '第三届高端装备界面科学与技术全国重点实验室年终学术报告会',
    date: '2024.12.03',
    category: '学术活动'
  }
])

const announcements = ref([
  {
    id: 1,
    title: '2024年度清华大学高端装备界面科学与技术全国重点实验室开放基金项目申报指南',
    date: '2024.06.12'
  },
  {
    id: 2,
    title: 'Detailed Rules for the "Wen Shizhu Maple Leaf Award - International Young Scholar"',
    date: '2024.04.08'
  },
  {
    id: 3,
    title: '2024年度"温诗铸枫叶奖 - 优秀青年学者奖"征集候选人公告',
    date: '2024.04.08'
  }
])
</script>

<style scoped>
.news-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  max-height: 300px;
  overflow-y: auto;
}

.news-item {
  padding: 1rem;
  border-bottom: 1px solid #eee;
  transition: all 0.3s;
  cursor: pointer;
}

.news-item:hover {
  background-color: #f5f7fa;
}

.news-title {
  margin: 0;
  font-size: 1rem;
  color: #333;
  line-height: 1.4;
  margin-bottom: 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.news-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.9rem;
}

.news-date {
  color: #909399;
}

.divider {
  width: 1px;
  background-color: #dcdfe6;
  margin: 0 1rem;
}

.latest-announcements {
  flex: 2;
  overflow-y: auto;
}

.section-title {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #1a6eb5;
}

.announcement-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.announcement-item {
  cursor: pointer;
}

.announcement-item:hover .announcement-title {
  color: #1a6eb5;
}

.announcement-date {
  font-size: 0.9rem;
  color: #909399;
  margin-bottom: 0.3rem;
  display: block;
}

.announcement-title {
  margin: 0;
  font-size: 0.95rem;
  color: #333;
  line-height: 1.4;
  transition: color 0.3s;
}

.news-grid::-webkit-scrollbar,
.latest-announcements::-webkit-scrollbar {
  width: 4px;
}

.news-grid::-webkit-scrollbar-thumb,
.latest-announcements::-webkit-scrollbar-thumb {
  background-color: #dcdfe6;
  border-radius: 2px;
}

.news-grid::-webkit-scrollbar-track,
.latest-announcements::-webkit-scrollbar-track {
  background-color: #f5f7fa;
}
</style>

<script lang="ts">
function getTagType(category: string) {
  const types: { [key: string]: string } = {
    '学术活动': 'primary',
    '科普教育': 'success',
    '合作交流': 'warning'
  }
  return types[category] || 'info'
}
</script> 