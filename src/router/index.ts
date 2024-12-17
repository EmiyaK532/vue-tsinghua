import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../views/about/About.vue"),
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
          name: "Research",
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
      children: [
        {
          path: "directions",
          name: "Directions",
          component: () => import("../views/research/Directions.vue"),
        },
        {
          path: "achievements",
          name: "Achievements",
          component: () => import("../views/research/Achievements.vue"),
        },
        {
          path: "awards",
          name: "Awards",
          component: () => import("../views/research/Awards.vue"),
        },
      ],
    },
  ],
});

export default router;
