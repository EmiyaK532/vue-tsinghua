import { createI18n } from "vue-i18n";

const messages = {
  zh: {
    news: {
      title: "新闻动态",
    },
    announcements: {
      title: "通知公告",
    },
    research: {
      highlights: "研究亮点",
    },
  },
  en: {
    news: {
      title: "News",
    },
    announcements: {
      title: "Announcements",
    },
    research: {
      highlights: "Research Highlights",
    },
  },
};

export const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式
  locale: "zh", // 设置默认语言
  fallbackLocale: "en", // 设置回退语言
  messages,
});
