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
  Report,
  NewsListResponse,
  NoticeListResponse,
  LatelyNoticeResponse,
  TeacherListResponse,
  AssistantListResponse,
  ScholarListResponse,
  RetireeListResponse,
} from "@/types/api";

// 新闻相关接口
export const newsApi = {
  // 获取新闻列表
  getNewsList: (params: { pageNum: number; pageSize: number }) =>
    request<NewsListResponse>({
      url: "/home/news",
      method: "get",
      params,
    }),

  // 获取新闻详情
  getNewsDetail: (id: number) => request.get<ApiResponse<News>>(`/news/${id}`),

  // 获取轮播图新闻
  getCarouselNews: () => request.get<ApiResponse<News[]>>("/news/carousel"),
};

// 教师相关接口
export const teacherApi = {
  // 获取教师列表
  getTeacherList: (type: number) =>
    request<TeacherListResponse>({
      url: `/staff/getTeachers/${type}`,
      method: "get",
    }),
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
  getDirector: () =>
    request({
      url: "/about/1",
      method: "get",
    }),

  // 获取历史沿革
  getHistory: () => request.get<ApiResponse<HistoryEvent[]>>("/about/history"),

  // 获取现任领导
  getLeadership: () => request.get<ApiResponse<Leader[]>>("/about/leadership"),
};

// 报告相关接口
export const reportApi = {
  // 获取报告列表
  getReportList: () => request.get<ApiResponse<Report[]>>("reports"),

  // 下载报告
  downloadReport: (id: string) =>
    request.get(`reports/download/${id}`, {
      responseType: "blob",
      validateStatus: (status) => {
        return status >= 200 && status < 300;
      },
    }),
};

// 通知公告相关接口
export const noticeApi = {
  // 获取通知公告列表
  getNoticeList: (params: { pageNum: number; pageSize: number }) =>
    request<NoticeListResponse>({
      url: "/home/notice",
      method: "get",
      params,
    }),

  // 获取最新通知
  getLatelyNotice: () =>
    request<LatelyNoticeResponse>({
      url: "/home/latelyNotice",
      method: "get",
    }),
};

// 教辅人员相关接口
export const staffApi = {
  // 获取教辅人员列表
  getAssistants: () =>
    request<AssistantListResponse>({
      url: "/staff/getAssistants",
      method: "get",
    }),
};

// 访问学者相关接口
export const scholarApi = {
  // 获取访问学者列表
  getScholars: () =>
    request<ScholarListResponse>({
      url: "/staff/getScholar",
      method: "get",
    }),
};

// 退休人员相关接口
export const retireeApi = {
  // 获取退休人员列表
  getRetirees: () =>
    request<RetireeListResponse>({
      url: "/staff/getRetiree",
      method: "get",
    }),
};
