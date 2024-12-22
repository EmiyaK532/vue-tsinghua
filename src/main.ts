import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { i18n } from "./i18n";
import App from "./App.vue";
import "animate.css";
// import "./style.css";
import router from "./router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// 配置 NProgress
NProgress.configure({
  showSpinner: false,
  easing: "ease",
  speed: 500,
});

const app = createApp(App);

app.use(ElementPlus);
app.use(i18n);
app.use(router);

app.mount("#app");
