<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import NewsCarousel from '@/components/NewsCarousel.vue'
import AnnouncementList from '@/components/announcement/AnnouncementList.vue'
import news1 from '@/assets/images/news/news1.jpg'

const { t } = useI18n()

const latestNews = ref({
  id: 1,
  title: '第三届高端装备界面科学与技术全国重点实验室年终学术报告会',
  image: news1,
  date: '2024.12.03'
})

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

function getTagType(category: string) {
  const types: { [key: string]: string } = {
    '学术活动': 'primary',
    '科普教育': 'success',
    '合作交流': 'warning'
  }
  return types[category] || 'info'
}
</script>

<template>
  <div class="home-container">
    <div class="carousel-section no-gap">
      <NewsCarousel />
    </div>
    
    <div class="content-section">
      <div class="content-wrapper">
        <!-- 左侧新闻动态 -->
        <section class="news-section">
          <div class="section-header">
            <h2>新闻动态</h2>
            <a class="more-link" href="/news">
              更多 <i class="el-icon-arrow-right"></i>
            </a>
          </div>
          <div class="news-content">
            <!-- 左侧大图新闻 -->
            <div class="news-item main-news">
              <img :src="latestNews.image" :alt="latestNews.title">
              <div class="news-info">
                <span class="date">{{ latestNews.date }}</span>
                <h3 class="title">{{ latestNews.title }}</h3>
              </div>
            </div>
            <!-- 右侧新闻列表 -->
            <div class="news-list">
              <div v-for="(item, index) in newsList.slice(0, 8)" :key="item.id" class="news-item">
                <span class="date">{{ item.date }}</span>
                <div class="title">{{ item.title }}</div>
                <el-tag size="small" class="category-tag" :type="getTagType(item.category)">
                  {{ item.category }}
                </el-tag>
              </div>
            </div>
          </div>
        </section>

        <!-- 右侧通知公告 -->
        <section class="announcement-section">
          <div class="section-header">
            <h2>通知公告</h2>
            <a class="more-link" href="/announcements">
              更多 <i class="el-icon-arrow-right"></i>
            </a>
          </div>
          <div class="announcement-list">
            <AnnouncementList />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-section {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #1a6eb5;
}

.news-section,
.announcement-section {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.news-content {
  display: grid;
  grid-template-columns: 45% 55%;
  gap: 2rem;
  height: 300px;
}

.main-news {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
}

.main-news img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main-news .news-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem 1rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8) 60%);
  color: white;
}

.main-news .date {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.main-news .title {
  color: #fff;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.5;
  margin: 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.news-list {
  height: 100%;
  overflow-y: auto;
  padding-right: 1rem;
}

.news-list .news-item {
  padding: 0.8rem 0;
  border-bottom: 1px solid #eee;
  cursor: pointer;
}

.news-list .news-item:last-child {
  border-bottom: none;
}

.date {
  color: #666;
  font-size: 0.9rem;
  display: block;
  margin-bottom: 0.3rem;
}

.title {
  font-size: 1rem;
  color: #333;
  line-height: 1.4;
  margin: 0.3rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.news-list .news-item:hover .title {
  color: #1a6eb5;
}

.category-tag {
  font-size: 0.8rem;
}

.news-list::-webkit-scrollbar {
  width: 4px;
}

.news-list::-webkit-scrollbar-thumb {
  background-color: #dcdfe6;
  border-radius: 2px;
}

.news-list::-webkit-scrollbar-track {
  background-color: #f5f7fa;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 2px solid #1a6eb5;
  padding-bottom: 0.5rem;
}

.section-header h2 {
  font-size: 1.2rem;
  margin: 0;
  color: #333;
}

.news-content {
  display: grid;
  grid-template-columns: 45% 55%;
  gap: 2rem;
}

.main-news {
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
}

.main-news img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main-news .news-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem 1rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8) 60%);
  color: white;
}

.news-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.news-list .news-item {
  padding: 0.5rem 0;
  cursor: pointer;
}

.news-meta {
  margin-bottom: 0.5rem;
}

.date {
  color: #666;
  font-size: 0.9rem;
}

.title {
  margin: 0.5rem 0;
  font-size: 1rem;
  line-height: 1.4;
  color: #333;
}

.news-list .news-item:hover .title {
  color: #1a6eb5;
}

.category-tag {
  font-size: 0.8rem;
  padding: 0 0.5rem;
}

.more-link {
  color: #666;
  text-decoration: none;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.more-link:hover {
  color: #1a6eb5;
}
</style> 