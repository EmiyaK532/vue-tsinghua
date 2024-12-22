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
