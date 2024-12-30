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
  // 移除默认的 Content-Type header，让 axios 根据请求类型自动设置
  // headers: {
  //   "Content-Type": "application/json;charset=utf-8",
  // },
});

// 请求拦截器
service.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    NProgress.start();
    // 如果启用了 mock，添加随机延迟
    if (import.meta.env.VITE_USE_MOCK === "true") {
      await new Promise((resolve) => setTimeout(resolve, Math.random() * 1000));
    }
    // 如果是下载请求，不设置 Content-Type
    if (config.responseType === "blob") {
      delete config.headers["Content-Type"];
    } else {
      // 其他请求使用默认的 json 格式
      config.headers["Content-Type"] = "application/json;charset=utf-8";
    }
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
    // 如果是下载文件，直接返回response
    if (response.config.responseType === "blob") {
      return response;
    }
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
    // 如果是下载文件时出错，尝试解析错误信息
    if (error.response?.config?.responseType === "blob") {
      return new Promise((_, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          try {
            const errorDetail = JSON.parse(reader.result as string);
            reject(new Error(errorDetail.error || "Download failed"));
          } catch {
            reject(new Error("Download failed"));
          }
        };
        reader.onerror = () => reject(new Error("Download failed"));
        reader.readAsText(error.response.data);
      });
    }
    return Promise.reject(error);
  }
);

export default service;
