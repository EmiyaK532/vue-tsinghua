// 通用响应类型
export interface ApiResponse<T = any> {
  code: number;
  message: string;
  data: T;
}

// 分页响应类型
export interface PageResponse<T> {
  total: number;
  current: number;
  pageSize: number;
  list: T[];
}

// 新闻类型
export interface News {
  id: number;
  title: string;
  content: string;
  date: string;
  image?: string;
  author: string;
  category: string;
}

// 教师类型
export interface Teacher {
  id: number;
  name: string;
  position: string;
  title: string;
  phone: string;
  email: string;
  address: string;
  pictures: string;
  type: number;
}

// 研究成果类型
export interface Research {
  id: number;
  title: string;
  authors: string[];
  type: "paper" | "patent" | "project";
  year: number;
  journal?: string;
  patentNo?: string;
  fundingSource?: string;
  abstract?: string;
}

// 实验室概况类型
export interface LabOverview {
  introduction: string;
  research: ResearchDirection[];
  achievements: Achievement[];
  facilities: Facility[];
}

export interface ResearchDirection {
  title: string;
  description: string;
}

export interface Achievement {
  title: string;
  items: string[];
}

export interface Facility {
  name: string;
  equipment: string[];
}

// 主任类型
export interface Director {
  name: string;
  title: string;
  photo: string;
  message: string;
}

// 历史事件类型
export interface HistoryEvent {
  year: number;
  events: string[];
}

// 领导类型
export interface Leader {
  id: number;
  name: string;
  title: string;
  position: string;
  photo: string;
  research: string[];
  contact: string;
}

// 年度科研简报类型
export interface Report {
  id: number;
  title: string;
  fileName: string;
  fileUrl: string;
  uploadTime: string;
  fileSize: number;
}

// 报告列表响应类型
export interface ReportListResponse {
  list: Report[];
  total: number;
}

// 学术委员会成员类型
export interface AcademicMember {
  id: number;
  name: string;
  title: string;
  position: string;
  organization: string;
  degree?: string;
}

// 学术委员会数据结构
export interface AcademicCommittee {
  chairman: AcademicMember;
  viceChairmen: AcademicMember[];
  members: AcademicMember[];
  secretary: AcademicMember;
}

// 新闻列表项类型
export interface NewsItem {
  id: number;
  title: string;
  content: string;
  type: string;
  time: string;
  images: string;
  views: number;
  top: boolean;
}

// 新闻列表响应类型
export interface NewsListResponse {
  total: number;
  list: NewsItem[];
  pageNum: number;
  pageSize: number;
  pages: number;
}

// 通知公告项类型
export interface NoticeItem {
  id: number;
  title: string;
  content: string;
  time: string;
  views: number;
  pictures: string;
  files: number;
}

// 通知公告列表响应类型
export interface NoticeListResponse {
  total: number;
  list: NoticeItem[];
  pageNum: number;
  pageSize: number;
  pages: number;
}

// 最新通知响应类型
export interface LatelyNoticeResponse {
  data: NoticeItem[];
}

// 教师列表响应类型
export interface TeacherListResponse {
  data: Teacher[];
}

// 教辅人员类型
export interface Assistant {
  id: number;
  name: string;
  position: string;
  work: string;
  address: string;
}

// 教辅人员列表响应类型
export interface AssistantListResponse {
  data: Assistant[];
}

// 访问学者类型
export interface Scholar {
  id: number;
  name: string;
  affiliation: string;
  country: string;
  time: string;
}

// 访问学者列表响应类型
export interface ScholarListResponse {
  data: Scholar[];
}

// 退休人员类型
export interface Retiree {
  id: number;
  name: string;
  position: string;
  achievement: string;
  time: string;
}

// 退休人员列表响应类型
export interface RetireeListResponse {
  data: Retiree[];
}
