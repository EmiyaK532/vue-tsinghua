import request from "@/utils/request";
import type {
  ApiResponse,
  PageResponse,
  News,
  Teacher,
  Research,
} from "@/types/api";

// 新闻相关接口
export const newsApi = {
  // 获取新闻列表
  getNewsList: (params: { page: number; pageSize: number }) =>
    request.get<ApiResponse<PageResponse<News>>>("/news", { params }),

  // 获取新闻详情
  getNewsDetail: (id: number) => request.get<ApiResponse<News>>(`/news/${id}`),

  // 获取轮播图新闻
  getCarouselNews: () => request.get<ApiResponse<News[]>>("/news/carousel"),
};

// 教师相关接口
export const teacherApi = {
  // 获取教师列表
  getTeacherList: (params: { page: number; pageSize: number }) =>
    request.get<ApiResponse<PageResponse<Teacher>>>("/teachers", { params }),

  // 获取教师详情
  getTeacherDetail: (id: number) =>
    request.get<ApiResponse<Teacher>>(`/teachers/${id}`),
};

// 研究成果相关接口
export const researchApi = {
  // 获取研究成果列表
  getResearchList: (params: {
    page: number;
    pageSize: number;
    type?: "paper" | "patent" | "project";
  }) =>
    request.get<ApiResponse<PageResponse<Research>>>("/research", { params }),

  // 获取研究成果详情
  getResearchDetail: (id: number) =>
    request.get<ApiResponse<Research>>(`/research/${id}`),
};
