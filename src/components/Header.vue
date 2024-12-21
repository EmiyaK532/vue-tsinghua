<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import 'animate.css'

const { locale } = useI18n()
const currentLang = ref(locale.value)

// 添加延时处理
let hideTimeout: number | null = null

// 定义导航菜单结构
const navItems = [
  {
    title: '首页',
    path: '/',
  },
  {
    title: '实验室简介',
    path: '/about',
    children: [
      { title: '实验室概况', path: '/about/overview' },
      { title: '主任致词', path: '/about/director' },
      { title: '历史沿革', path: '/about/history' },
      { title: '研究方向', path: '/about/research' },
      { title: '现任领导', path: '/about/leadership' },
    ]
  },
  {
    title: '机构设置',
    path: '/organization',
    children: [
      { title: '咨询专家委员会', path: '/organization/experts' },
      { title: '学术委员会', path: '/organization/academic' },
      { title: '研究所', path: '/organization/institutes' },
    ]
  },
  {
    title: '师资队伍',
    path: '/faculty',
    children: [
      { title: '师资概况', path: '/faculty/overview' },
      { title: '在职教师', path: '/faculty/teachers' },
      { title: '教辅人员', path: '/faculty/staff' },
      { title: '访问学者', path: '/faculty/visitors' },
      { title: '退休人员', path: '/faculty/retired' },
    ]
  },
  // ... 继续添加其他导航项
]

// 当前激活的下拉菜单和位置
const activeDropdown = ref<{
  path: string;
  rect?: { top: number; left: number; width: number };
} | null>(null)

// 显示下拉菜单
const showDropdown = (path: string, event: MouseEvent) => {
  if (hideTimeout) {
    clearTimeout(hideTimeout)
    hideTimeout = null
  }
  const target = event.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  activeDropdown.value = {
    path,
    rect: {
      top: rect.bottom,
      left: rect.left,
      width: rect.width
    }
  }
}

// 隐藏下拉菜单
const hideDropdown = () => {
  hideTimeout = window.setTimeout(() => {
    activeDropdown.value = null
    hideTimeout = null
  }, 100)
}

// 取消隐藏
const cancelHide = () => {
  if (hideTimeout) {
    clearTimeout(hideTimeout)
    hideTimeout = null
  }
}
</script>

<template>
  <header class="site-header">
    <div class="header-content">
      <!-- Logo区域 -->
      <div class="logo-area">
        <!-- <img src="../assets/logo/logo1.png" alt="实验室" /> -->
        <div class="title-wrapper">
          <h1 class="animate__animated animate__fadeIn">
            <span class="animate__animated animate__slideInLeft">中国矿业大学</span>
            <span class="animate__animated animate__slideInRight">全国重点实验室</span>
          </h1>
          <p class="subtitle animate__animated animate__fadeIn animate__delay-1s">
            NATIONAL KEY LABORATORY OF CHINA UNIVERSITY OF MINING AND TECHNOLOGY
          </p>
        </div>
      </div>

      <!-- 导航区域 -->
      <div class="nav-area">
        <nav class="main-nav">
          <ul>
            <li v-for="item in navItems" 
                :key="item.path"
                class="nav-item"
                @mouseenter="(e) => item.children && showDropdown(item.path, e)"
                @mouseleave="hideDropdown">
              <RouterLink :to="item.path">
                {{ item.title }}
                <span v-if="item.children" class="arrow">▼</span>
              </RouterLink>
            </li>
          </ul>
        </nav>

        <div class="lang-switch">
          <button @click="switchLanguage">
            {{ currentLang === 'zh' ? 'EN' : '中文' }}
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- 使用 Teleport 将下拉菜单移到 body 层级 -->
  <Teleport to="body">
    <transition
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut">
      <div v-if="activeDropdown && activeDropdown.rect"
           class="global-dropdown"
           :style="{
             top: `${activeDropdown.rect.top}px`,
             left: `${activeDropdown.rect.left}px`,
             width: `${activeDropdown.rect.width}px`,
           }"
           @mouseenter="cancelHide"
           @mouseleave="hideDropdown">
        <div class="dropdown-content">
          <RouterLink v-for="child in navItems.find(i => i.path === activeDropdown.path)?.children"
                     :key="child.path"
                     :to="child.path"
                     class="dropdown-item">
            {{ child.title }}
          </RouterLink>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped>
.site-header {
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.95) 15%,
    rgba(255, 255, 255, 0.98) 25%,
    rgba(255, 255, 255, 0.98) 100%
  );
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0;
  position: fixed;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  z-index: 1000;
  width: 100%;
  left: 0;
  top: 0;
}

.header-content {
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8rem;
  height: 100%;
  /* 确保内容区域也有圆角，防止内容溢出 */
  border-bottom-right-radius: 20px;
  overflow: hidden;
}

.logo-area {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  min-width: 300px;
  height: 60px;
}

.logo-area img {
  height: 100%;
  width: auto;
  object-fit: contain;
}

.nav-area {
  display: flex;
  align-items: center;
  gap: 3rem;
  justify-content: flex-end;
  flex: 1;
  position: relative;
  z-index: 2;
}

.main-nav {
  display: flex;
  align-items: center;
  position: relative;
}

.main-nav ul {
  display: flex;
  gap: 3rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.main-nav a {
  color: #333;
  text-decoration: none;
  font-size: 16px;
  padding: 8px 15px;
  transition: all 0.3s ease;
  position: relative;
}

.main-nav a:hover,
.main-nav a.router-link-active {
  color: #1a6eb5;
}

.lang-switch button {
  padding: 0.4rem 1.2rem;
  border: 1px solid #1a6eb5;
  background: transparent;
  color: #1a6eb5;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  white-space: nowrap;
}

.lang-switch button:hover {
  background: #1a6eb5;
  color: white;
}

/* 响应式调整 */
@media (max-width: 1400px) {
  .header-content {
    gap: 6rem;
  }

  .main-nav ul {
    gap: 2.5rem;
  }
}

@media (max-width: 1200px) {
  .header-content {
    gap: 4rem;
  }

  .main-nav ul {
    gap: 2rem;
  }

  .logo-area {
    min-width: 250px;
  }
}

@media (max-width: 768px) {
  .site-header {
    height: auto;
    padding: 0.8rem 0;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.6) 0%,
      rgba(255, 255, 255, 0.98) 30%
    );
    /* 移动端可以适当减小圆角 */
    border-bottom-right-radius: 15px;
  }

  .header-content {
    padding: 0 1rem;
    flex-direction: column;
    gap: 1rem;
    border-bottom-right-radius: 15px;
  }

  .logo-area {
    height: 50px;
    min-width: 200px;
  }

  .nav-area {
    flex-direction: column;
    width: 100%;
    gap: 1rem;
  }

  .main-nav {
    width: 100%;
  }

  .main-nav ul {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .lang-switch {
    margin-top: 0.5rem;
  }

  .site-header::after {
    border-bottom-right-radius: 15px;
  }
}

/* 底部边框渐变效果，需要考虑圆角 */
.site-header::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.02) 0%,
    rgba(0, 0, 0, 0.05) 50%,
    rgba(0, 0, 0, 0.02) 100%
  );
  /* 保持与header相同的圆角 */
  border-bottom-right-radius: 20px;
}

.title-wrapper {
  margin-left: 1rem;
}

h1 {
  font-size: 1.5rem;
  color: #333;
  margin: 0;
  display: flex;
  gap: 0.5rem;
}

.subtitle {
  font-size: 0.8rem;
  color: #666;
  margin: 0.3rem 0 0 0;
  opacity: 0.8;
}

/* 确保动画元素初始状态不可见 */
.animate__slideInLeft {
  --animate-duration: 1s;
  animation-delay: 0.2s;
}

.animate__slideInRight {
  --animate-duration: 1s;
  animation-delay: 0.4s;
}

.animate__fadeIn {
  --animate-duration: 0.2s;
}

.animate__fadeOut {
  --animate-duration: 0.15s;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .title-wrapper h1 {
    font-size: 1.2rem;
    flex-direction: column;
    gap: 0.2rem;
  }

  .subtitle {
    font-size: 0.7rem;
  }
}

.nav-item {
  position: relative;
  padding: 20px 0;
}

.arrow {
  display: inline-block;
  font-size: 12px;
  margin-left: 4px;
  transition: transform 0.3s ease;
}

.nav-item:hover .arrow {
  transform: rotate(180deg);
}

/* 全局下拉菜单样式 */
.global-dropdown {
  position: fixed;
  z-index: 99999;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  overflow: hidden;
  pointer-events: auto;  /* 确保可以接收鼠标事件 */
}

.dropdown-content {
  display: flex;
  flex-direction: column;
  background: white;
}

.dropdown-item {
  display: block;
  padding: 12px 20px;
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease;
  white-space: nowrap;
  font-size: 14px;
  border-bottom: 1px solid #f0f0f0;
  text-align: center;
}

.dropdown-item:last-child {
  border-bottom: none;
}

.dropdown-item:hover {
  background: #1a6eb5;
  color: white;
}

/* 动画时间调整 */
.animate__fadeIn {
  --animate-duration: 0.2s;
}

.animate__fadeOut {
  --animate-duration: 0.15s;
}
</style> 