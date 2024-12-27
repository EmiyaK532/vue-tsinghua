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
  title: string;
  email: string;
  photo?: string;
  research: string[];
  publications?: string[];
  honors?: string[];
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
  id: number
  title: string
  fileName: string
  fileUrl: string
  uploadTime: string
  fileSize: number
}

// 报告列表响应类型
export interface ReportListResponse {
  list: Report[]
  total: number
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
