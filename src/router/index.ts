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
