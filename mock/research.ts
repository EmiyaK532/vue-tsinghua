import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/api/research",
    method: "get",
    response: ({ query }) => {
      const { page = 1, pageSize = 10, type } = query;
      const list = Array(pageSize)
        .fill(0)
        .map((_, index) => {
          const baseData = {
            id: (page - 1) * pageSize + index + 1,
            title: `研究成果 ${(page - 1) * pageSize + index + 1}`,
            authors: ["张三", "李四", "王五"],
            year: 2024 - (index % 5),
            abstract: "这是研究成果的摘要内容...",
          };

          if (type === "paper" || !type) {
            return {
              ...baseData,
              type: "paper",
              journal: "煤炭学报",
              impactFactor: 3.5,
            };
          } else if (type === "patent") {
            return {
              ...baseData,
              type: "patent",
              patentNo: `ZL2024${index.toString().padStart(6, "0")}.X`,
            };
          } else {
            return {
              ...baseData,
              type: "project",
              fundingSource: "国家自然科学基金",
            };
          }
        });

      return {
        code: 200,
        message: "success",
        data: {
          list,
          total: 100,
          current: Number(page),
          pageSize: Number(pageSize),
        },
      };
    },
  },
] as MockMethod[];
