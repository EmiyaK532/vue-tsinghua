import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/organization",
      name: "Organization",
      component: () => import("../views/organization/Organization.vue"),
      redirect: "/organization/experts",
      children: [
        {
          path: "experts",
          name: "Experts",
          component: () => import("../views/organization/Experts.vue"),
        },
        {
          path: "academic",
          name: "Academic",
          component: () => import("../views/organization/Academic.vue"),
        },
        {
          path: "institutes",
          name: "Institutes",
          component: () => import("../views/organization/Institutes.vue"),
        },
      ],
    },
    {
      path: "/faculty",
      name: "Faculty",
      component: () => import("../views/faculty/Faculty.vue"),
      redirect: "/faculty/overview",
      children: [
        {
          path: "overview",
          name: "FacultyOverview",
          component: () => import("../views/faculty/Overview.vue"),
        },
        {
          path: "teachers",
          name: "Teachers",
          component: () => import("../views/faculty/Teachers.vue"),
        },
        {
          path: "staff",
          name: "Staff",
          component: () => import("../views/faculty/Staff.vue"),
        },
        {
          path: "visitors",
          name: "Visitors",
          component: () => import("../views/faculty/Visitors.vue"),
        },
        {
          path: "retired",
          name: "Retired",
          component: () => import("../views/faculty/Retired.vue"),
        },
      ],
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../views/about/About.vue"),
      redirect: "/about/overview",
      children: [
        {
          path: "overview",
          name: "Overview",
          component: () => import("../views/about/Overview.vue"),
        },
        {
          path: "director",
          name: "Director",
          component: () => import("../views/about/Director.vue"),
        },
        {
          path: "history",
          name: "History",
          component: () => import("../views/about/History.vue"),
        },
        {
          path: "research",
          name: "AboutResearch",
          component: () => import("../views/about/Research.vue"),
        },
        {
          path: "leadership",
          name: "Leadership",
          component: () => import("../views/about/Leadership.vue"),
        },
      ],
    },
    // ... 继续添加其他路由
  ],
});

// 添加导航守卫进行调试
router.beforeEach((to, from, next) => {
  NProgress.start();
  console.log("Navigating to:", to.path);
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
