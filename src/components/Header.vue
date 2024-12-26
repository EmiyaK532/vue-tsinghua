<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import 'animate.css'

const { locale } = useI18n()
const currentLang = ref(locale.value)
const isMobileMenuOpen = ref(false)
const isSmallScreen = ref(false)

// 检测屏幕宽度
const checkScreenSize = () => {
  // 根据实际导航项计算所需最小宽度
  const minWidth = 1400  // 根据实际导航项数量和宽度调整这个值
  isSmallScreen.value = window.innerWidth < minWidth
}

// 监听窗口大小变化
onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize)
})

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
      { title: '主任致词', path: '/about/director' },
      { title: '历史沿革', path: '/about/history' },
      { title: '科研任务', path: '/about/research' },
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
  {
    title: '科学研究',
    path: '/research',
    children: [
      { title: '科研概况', path: '/research/overview' },
      { title: '研究成果', path: '/research/achievements' },
      { title: '开放基金', path: '/research/fund' },
      { title: '自主研究课题', path: '/research/projects' },
      { title: '年度科研简报', path: '/research/reports' },
    ]
  },
  {
    title: '学术期刊',
    path: '/journal',
  },
  {
    title: '人才培养',
    path: '/education',
    children: [
      { title: '概况', path: '/education/overview' },
      { title: '在读研究生', path: '/education/students' },
      { title: '留学生', path: '/education/international' },
      { title: '毕业研究生', path: '/education/graduates' },
    ]
  },
  {
    title: '合作交流',
    path: '/cooperation',
    children: [
      { title: '交流概况', path: '/cooperation/overview' },
      { title: '学术交流', path: '/cooperation/academic' },
      { title: '合作项目', path: '/cooperation/projects' },
      { title: '学术会议', path: '/cooperation/conferences' },
    ]
  },
  {
    title: '开放平台',
    path: '/platform',
    children: [
      { title: '仪器设备', path: '/platform/equipment' },
      { title: '开放预约', path: '/platform/reservation' },
    ]
  },
  {
    title: '联系我们',
    path: '/contact',
  }
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
      left: rect.left + (rect.width / 2),
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

const switchLanguage = () => {
  locale.value = locale.value === 'zh' ? 'en' : 'zh'
  currentLang.value = locale.value
}

// 添加移动端展开菜单的状态管理
const expandedMenus = ref<string[]>([])

// 切换子菜单的展开状态
const toggleSubmenu = (path: string) => {
  const index = expandedMenus.value.indexOf(path)
  if (index === -1) {
    expandedMenus.value.push(path)
  } else {
    expandedMenus.value.splice(index, 1)
  }
}
</script>

<template>
  <header class="site-header">
    <div class="header-content">
      <!-- Logo区域 -->
      <div class="logo-area">
        <div class="logo-container">
          <img 
            src="/images/logo1.png" 
            alt="实验室Logo" 
            class="logo animate__animated animate__fadeIn"
          />
        </div>
      </div>

      <!-- 导航区域 -->
      <div class="nav-area">
        <nav class="main-nav" v-if="!isSmallScreen">
          <ul>
            <li v-for="item in navItems" 
                :key="item.path"
                class="nav-item"
                @mouseenter="(e) => item.children && showDropdown(item.path, e)"
                @mouseleave="hideDropdown">
              <RouterLink :to="item.path">
                {{ item.title }}
                <!-- 标记向下箭头 -->
                <span v-if="item.children" class="arrow"></span>
              </RouterLink>
            </li>
          </ul>
        </nav>

        <!-- 移动端菜单按钮 -->
        <div v-else class="mobile-menu">
          <button class="menu-toggle" @click="isMobileMenuOpen = !isMobileMenuOpen">
            <span class="menu-icon"></span>
          </button>
        </div>

        <!-- <div class="lang-switch">
          <button @click="switchLanguage">
            {{ currentLang === 'zh' ? 'EN' : '中文' }}
          </button>
        </div> -->
      </div>
    </div>
  </header>

  <!-- 移动端下拉菜单 -->
  <Teleport to="body">
    <transition
      enter-active-class="animate__animated animate__fadeInDown"
      leave-active-class="animate__animated animate__fadeOutUp">
      <div v-if="isSmallScreen && isMobileMenuOpen" class="mobile-dropdown">
        <nav class="mobile-nav">
          <div v-for="item in navItems" 
               :key="item.path"
               class="mobile-nav-item">
            <div class="mobile-nav-header">
              <RouterLink :to="item.path" 
                        class="mobile-nav-link"
                        @click="isMobileMenuOpen = false">
                {{ item.title }}
              </RouterLink>
              <button v-if="item.children" 
                      class="expand-button"
                      @click="toggleSubmenu(item.path)">
                {{ expandedMenus.includes(item.path) ? '−' : '+' }}
              </button>
            </div>
            <transition
              enter-active-class="animate__animated animate__fadeInDown"
              leave-active-class="animate__animated animate__fadeOutUp">
              <div v-if="item.children && expandedMenus.includes(item.path)" 
                   class="mobile-submenu">
                <RouterLink v-for="child in item.children"
                          :key="child.path"
                          :to="child.path"
                          class="mobile-submenu-item"
                          active-class="mobile-submenu-item-active"
                          @click="isMobileMenuOpen = false">
                  {{ child.title }}
                </RouterLink>
              </div>
            </transition>
          </div>
        </nav>
      </div>
    </transition>
  </Teleport>

  <!-- 桌面端下拉菜单 -->
  <Teleport to="body">
    <transition
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut">
      <div v-if="!isSmallScreen && activeDropdown && activeDropdown.rect"
           class="global-dropdown"
           :style="{
             top: `${activeDropdown.rect.top}px`,
             left: `${activeDropdown.rect.left}px`,
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
  overflow: hidden; /* 防止内容溢出 */
}

.header-content {
  max-width: 1800px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  flex-wrap: nowrap; /* 防止导航项换行 */
}

.logo-area {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-shrink: 0;
  min-width: auto;
}

.nav-area {
  display: flex;
  align-items: center;
  gap: 3rem;
  justify-content: flex-end;
  flex: 1;
}

.main-nav ul {
  display: flex;
  gap: 3rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  position: relative;
  padding: 20px 0;
}

/* 移动端菜单按钮样式 */
.menu-toggle {
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.menu-icon {
  display: block;
  width: 24px;
  height: 2px;
  background: #333;
  position: relative;
}

.menu-icon::before,
.menu-icon::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background: #333;
  left: 0;
}

.menu-icon::before {
  top: -6px;
}

.menu-icon::after {
  bottom: -6px;
}

/* 移动端下拉菜单样式 */
.mobile-dropdown {
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 999;
  max-height: calc(100vh - 60px);
  overflow-y: auto;
}

.mobile-nav {
  padding: 1rem;
  max-width: 100%;
}

.mobile-nav-item {
  margin-bottom: 0.5rem;
  width: 100%;
}

.mobile-nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
}

.mobile-nav-link {
  flex: 1;
  display: block;
  padding: 15px 20px;
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease;
}

.expand-button {
  width: 48px;
  height: 48px;
  border: none;
  background: none;
  color: #666;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.expand-button:hover {
  background: #f5f5f5;
  color: #1a6eb5;
}

.mobile-submenu {
  background: #f8f8f8;
  overflow: hidden;
}

.mobile-submenu-item {
  display: block;
  padding: 12px 20px 12px 40px;
  color: #666;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
}

.mobile-submenu-item:hover,
.mobile-submenu-item-active {
  background: #f0f0f0;
  color: #1a6eb5;
}

/* 添加hover效果 */
.mobile-submenu-item:hover::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: #1a6eb5;
}

/* 添加动画 */
.mobile-submenu {
  animation-duration: 0.3s !important;
}

/* 桌面端下拉菜单样式 */
.global-dropdown {
  position: fixed;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 1000;
  width: 180px;
  transform: translateX(-50%);
  overflow: hidden;
}

.dropdown-content {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
}

.dropdown-item {
  padding: 12px 20px;
  color: #333;
  text-decoration: none;
  border-bottom: 1px solid #eee;
  text-align: center;
  white-space: nowrap;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.3s ease;
}

.dropdown-item:last-child {
  border-bottom: none;
}

.dropdown-item:hover {
  background: #1a6eb5;
  color: white;
  width: 100%;
}

/* 当下拉菜单项文字过长时的处理 */
.dropdown-item {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 导航项样式 */
.nav-item > a {
  color: #333;
  text-decoration: none;
  font-size: 16px;
  padding: 8px 15px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-item > a:hover,
.nav-item > a.router-link-active {
  color: #1a6eb5;
}

/* 下拉箭头 */
/* .arrow {
  display: inline-block;
  font-size: 12px;
  margin-left: 4px;
  transition: transform 0.3s ease;
}

.nav-item:hover .arrow {
  transform: rotate(180deg);
} */

/* 响应式样式 */
@media (max-width: 1024px) {
  .header-content {
    padding: 0 1rem;
  }

  .logo-area {
    min-width: auto;
  }

  .title-wrapper h1 {
    font-size: 1.2rem;
  }

  .subtitle {
    font-size: 0.8rem;
  }
}

/* Logo容器样式 */
.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 350px;
  overflow: hidden;
  border-radius: 8px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  flex-shrink: 0;
}

/* Logo图片样式 */
.logo {
  height: 38px;
  width: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
}

/* Logo容器悬停效果 */
.logo-container:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Logo容器悬停时的图片效果 */
.logo-container:hover .logo {
  transform: scale(1.05);
}

/* 响应式调整 */
@media (max-width: 1200px) {
  .logo-container {
    height: 35px;
    width: 300px;
  }

  .logo {
    height: 32px;
  }
}

@media (max-width: 768px) {
  .logo-container {
    height: 30px;
    width: 260px;
  }

  .logo {
    height: 28px;
  }
}

/* 添加媒体查询 */
@media (max-width: 1400px) { /* 根据实际导航项调整断点 */
  .desktop-nav {
    display: none;
  }
  
  .mobile-menu-button {
    display: block;
  }
}

@media (min-width: 1401px) {
  .mobile-menu-button {
    display: none;
  }
  
  .desktop-nav {
    display: flex;
  }
}
</style> 