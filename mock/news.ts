import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/api/news",
    method: "get",
    response: ({ query }) => {
      const { page = 1, pageSize = 10 } = query;
      const list = Array(pageSize)
        .fill(0)
        .map((_, index) => ({
          id: (page - 1) * pageSize + index + 1,
          title: `新闻标题 ${(page - 1) * pageSize + index + 1}`,
          content: "这是新闻内容...",
          date: new Date(Date.now() - index * 86400000)
            .toISOString()
            .split("T")[0],
          image: `https://picsum.photos/800/400?random=${index}`,
          author: "管理员",
          category: ["通知公告", "学术动态", "科研进展"][index % 3],
        }));

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
  {
    url: "/api/news/carousel",
    method: "get",
    response: () => ({
      code: 200,
      message: "success",
      data: Array(5)
        .fill(0)
        .map((_, index) => ({
          id: index + 1,
          title: `轮播新闻 ${index + 1}`,
          content: "这是轮播新闻内容...",
          date: new Date().toISOString().split("T")[0],
          image: `https://picsum.photos/1920/600?random=${index}`,
          author: "管理员",
          category: "头条新闻",
        })),
    }),
  },
] as MockMethod[];
