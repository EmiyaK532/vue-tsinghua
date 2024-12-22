import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";
import NProgress from "nprogress";

// 创建 axios 实例
const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api", // API 的 base_url
  timeout: 15000, // 请求超时时间
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    NProgress.start();
    // 在这里可以添加token等认证信息
    // const token = localStorage.getItem('token')
    // if (token) {
    //   config.headers['Authorization'] = `Bearer ${token}`
    // }
    return config;
  },
  (error) => {
    NProgress.done();
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    NProgress.done();
    const res = response.data;
    // 这里可以根据后端的响应结构做相应的处理
    if (res.code !== 200) {
      // 处理错误情况
      return Promise.reject(new Error(res.message || "Error"));
    }
    return res;
  },
  (error) => {
    NProgress.done();
    // 处理网络错误等情况
    console.error("请求错误:", error);
    return Promise.reject(error);
  }
);

export default service;
