<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const handleReservation = () => {
  ElMessage.info('预约系统正在建设中，敬请期待')
}

const reservationInfo = ref({
  description: `实验室面向校内外科研人员开放使用，提供专业的实验设备和技术支持。为确保实验设备的高效利用，请通过预约系统提前安排实验时间。`,
  rules: [
    '预约时间：请至少提前3个工作日预约',
    '使用时长：单次预约最长不超过5个工作日',
    '取消预约：如需取消，请提前24小时操作',
    '安全要求：使用前必须完成安全培训',
    '费用说明：校内用户仅收取材料费，校外用户另收取设备使用费'
  ],
  contact: {
    manager: '张工',
    phone: '025-12345678',
    email: 'equipment@cumt.edu.cn'
  }
})
</script>

<template>
  <div class="reservation-container">
    <h2>开放预约</h2>
    
    <div class="content-section">
      <div class="info-card">
        <h3>预约说明</h3>
        <p class="description">{{ reservationInfo.description }}</p>
        
        <div class="rules">
          <h4>预约规则</h4>
          <ul>
            <li v-for="(rule, index) in reservationInfo.rules" 
                :key="index">
              {{ rule }}
            </li>
          </ul>
        </div>

        <div class="contact">
          <h4>联系方式</h4>
          <p>
            <span class="label">管理员：</span>
            {{ reservationInfo.contact.manager }}
          </p>
          <p>
            <span class="label">电话：</span>
            {{ reservationInfo.contact.phone }}
          </p>
          <p>
            <span class="label">邮箱：</span>
            {{ reservationInfo.contact.email }}
          </p>
        </div>
      </div>

      <div class="action-card">
        <div class="action-content">
          <div class="action-inner">
            <div class="slogan">欢迎使用实验室设备预约系统</div>
            <h3>设备预约</h3>
            <p>请点击下方按钮进入预约系统</p>
            <button class="reservation-btn" 
                    @click="handleReservation">
              进入预约系统
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.reservation-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: #2c3e50;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 0;
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

.content-section {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  min-height: 500px;
}

.info-card, .action-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  height: 100%;
}

h3 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

h4 {
  font-size: 1.1rem;
  margin: 1.5rem 0 1rem;
  color: #2c3e50;
}

.description {
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  position: relative;
  padding-left: 1.2rem;
  margin-bottom: 0.8rem;
  line-height: 1.4;
}

li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #1a6eb5;
}

.contact p {
  margin-bottom: 0.5rem;
}

.label {
  color: #666;
  margin-right: 0.5rem;
}

.action-card {
  display: flex;
  align-items: center;
}

.action-content {
  width: 100%;
  text-align: center;
}

.action-inner {
  max-width: 300px;
  margin: 0 auto;
}

.action-content p {
  margin-bottom: 2rem;
  color: #666;
}

.reservation-btn {
  background: #1a6eb5;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 6px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.reservation-btn:hover {
  background: #155a94;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .reservation-container {
    padding: 1rem;
  }

  .content-section {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .action-card {
    min-height: 300px;
  }
}

/* 深色模式适配 */
@media (prefers-color-scheme: dark) {
  .reservation-container {
    color: #e0e0e0;
  }

  .info-card, .action-card {
    background: #2d2d2d;
  }

  h3, h4 {
    color: #e0e0e0;
  }

  .label {
    color: #888;
  }

  .action-content p {
    color: #b8c2cc;
  }

  li::before {
    color: #3498db;
  }

  .reservation-btn {
    background: #2980b9;
  }

  .reservation-btn:hover {
    background: #2471a3;
  }
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.reservation-address {
  padding: 0.5rem 1rem;
  background: #f8f9fa;
  border-radius: 4px;
  color: #666;
  font-size: 0.95rem;
}

/* 深色模式适配 */
@media (prefers-color-scheme: dark) {
  .reservation-address {
    background: #2d2d2d;
    color: #b8c2cc;
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .reservation-address {
    width: 100%;
  }
}

.slogan {
  font-size: 1.1rem;
  color: #1a6eb5;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #eee;
}

/* 深色模式适配 */
@media (prefers-color-scheme: dark) {
  .slogan {
    color: #3498db;
    border-bottom-color: #3a3a3a;
  }
}
</style> 