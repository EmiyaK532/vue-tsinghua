import { MockMethod } from "vite-plugin-mock";

const titles = ["教授/博士生导师", "副教授/硕士生导师", "讲师"];
const researchAreas = [
  "煤矿瓦斯灾害防控",
  "矿井通风安全",
  "粉尘防治",
  "水害防治",
  "地压与顶板控制",
];

export default [
  {
    url: "/api/teachers",
    method: "get",
    response: ({ query }) => {
      const { page = 1, pageSize = 10 } = query;
      const list = Array(pageSize)
        .fill(0)
        .map((_, index) => ({
          id: (page - 1) * pageSize + index + 1,
          name: `教师${(page - 1) * pageSize + index + 1}`,
          title: titles[index % titles.length],
          email: `teacher${(page - 1) * pageSize + index + 1}@cumt.edu.cn`,
          photo: `https://picsum.photos/400/500?random=${index}`,
          research: [
            researchAreas[index % researchAreas.length],
            researchAreas[(index + 1) % researchAreas.length],
          ],
          publications: ["发表SCI论文xxx篇", "出版专著xxx部"],
          honors: ["国家科技进步奖", "教育部科技进步奖"],
        }));

      return {
        code: 200,
        message: "success",
        data: {
          list,
          total: 50,
          current: Number(page),
          pageSize: Number(pageSize),
        },
      };
    },
  },
] as MockMethod[];
