import request from "@/utils/request";
import type {
  ApiResponse,
  PageResponse,
  News,
  Teacher,
  Research,
  LabOverview,
  Director,
  HistoryEvent,
  Leader,
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

// 实验室简介相关接口
export const aboutApi = {
  // 获取实验室概况
  getOverview: () => request.get<ApiResponse<LabOverview>>("/about/overview"),

  // 获取主任致词
  getDirector: () => request.get<ApiResponse<Director>>("/about/director"),

  // 获取历史沿革
  getHistory: () => request.get<ApiResponse<HistoryEvent[]>>("/about/history"),

  // 获取现任领导
  getLeadership: () => request.get<ApiResponse<Leader[]>>("/about/leadership"),
};
