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
      redirect: "/about/director",
      children: [
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
    {
      path: "/research",
      name: "Research",
      component: () => import("../views/research/Research.vue"),
      redirect: "/research/overview",
      children: [
        {
          path: "overview",
          name: "ResearchOverview",
          component: () => import("../views/research/Overview.vue"),
        },
        {
          path: "achievements",
          name: "Achievements",
          component: () => import("../views/research/Achievements.vue"),
        },
        {
          path: "fund",
          name: "OpenFund",
          component: () => import("../views/research/Fund.vue"),
        },
        {
          path: "projects",
          name: "Projects",
          component: () => import("../views/research/Projects.vue"),
        },
        {
          path: "reports",
          name: "Reports",
          component: () => import("../views/research/Reports.vue"),
        }
      ]
    },
    {
      path: "/journal",
      name: "Journal",
      component: () => import("../views/journal/Journal.vue"),
    },
    {
      path: "/education",
      name: "Education",
      component: () => import("../views/education/Education.vue"),
      redirect: "/education/overview",
      children: [
        {
          path: "overview",
          name: "EduOverview",
          component: () => import("../views/education/Overview.vue"),
        },
        {
          path: "students",
          name: "Students",
          component: () => import("../views/education/Students.vue"),
        },
        {
          path: "international",
          name: "International",
          component: () => import("../views/education/International.vue"),
        },
        {
          path: "graduates",
          name: "Graduates",
          component: () => import("../views/education/Graduates.vue"),
        }
      ]
    },
    {
      path: "/cooperation",
      name: "Cooperation",
      component: () => import("../views/cooperation/Cooperation.vue"),
      redirect: "/cooperation/overview",
      children: [
        {
          path: "overview",
          name: "CoopOverview",
          component: () => import("../views/cooperation/Overview.vue"),
        },
        {
          path: "academic",
          name: "Academic",
          component: () => import("../views/cooperation/Academic.vue"),
        },
        {
          path: "projects",
          name: "CoopProjects",
          component: () => import("../views/cooperation/Projects.vue"),
        },
        {
          path: "conferences",
          name: "Conferences",
          component: () => import("../views/cooperation/Conferences.vue"),
        }
      ]
    },
    {
      path: "/platform",
      name: "Platform",
      component: () => import("../views/platform/Platform.vue"),
      redirect: "/platform/equipment",
      children: [
        {
          path: "equipment",
          name: "Equipment",
          component: () => import("../views/platform/Equipment.vue"),
        },
        {
          path: "reservation",
          name: "Reservation",
          component: () => import("../views/platform/Reservation.vue"),
        }
      ]
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("../views/contact/Contact.vue"),
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return {
        ...savedPosition,
        behavior: "smooth",
      };
    }
    return {
      top: 0,
      behavior: "smooth",
    };
  },
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
