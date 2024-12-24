import { MockMethod } from "vite-plugin-mock";

export default [
  // 实验室概况
  {
    url: "/api/about/overview",
    method: "get",
    response: () => ({
      code: 200,
      message: "success",
      data: {
        introduction: `煤矿灾害防控实验室成立于1998年，是国家重点实验室。实验室立足煤矿安全生产重大需求，
                      开展煤矿灾害防控基础理论与关键技术研究，为保障煤矿安全高效开采提供科技支撑。`,
        research: [
          {
            title: "煤矿瓦斯灾害防控",
            description: "研究煤层瓦斯赋存规律与瓦斯突出机理...",
          },
          {
            title: "矿井通风安全",
            description: "研究矿井通风网络优化与通风系统智能调控...",
          },
          {
            title: "粉尘防治",
            description: "研究粉尘产生机理与抑尘新技术...",
          },
          {
            title: "水害防治",
            description: "研究矿井水害形成机理与防治技术...",
          },
          {
            title: "地压与顶板控制",
            description: "研究深部开采地压显现规律与顶板控制技术...",
          },
        ],
        achievements: [
          {
            title: "科研成果",
            items: [
              "获得国家科技进步奖5项",
              "发表高水平论文1200余篇",
              "授权发明专利300余项",
              "制定国家标准15项",
            ],
          },
          {
            title: "人才培养",
            items: [
              "培养博士研究生200余名",
              "培养硕士研究生500余名",
              "培养本科生1000余名",
            ],
          },
        ],
        facilities: [
          {
            name: "瓦斯灾害实验室",
            equipment: ["瓦斯解吸仪", "瓦斯突出模拟系统"],
          },
          {
            name: "通风安全实验室",
            equipment: ["通风网络模拟系统", "粉尘浓度检测仪"],
          },
        ],
      },
    }),
  },

  // 主任致词
  {
    url: "/api/about/director",
    method: "get",
    response: () => ({
      code: 200,
      message: "success",
      data: {
        name: "张三",
        title: "教授/博士生导师",
        photo: "/images/director.jpg",
        message: `尊敬的来访者：

        欢迎访问煤矿灾害防控实验室！本实验室作为国家重点实验室，始终秉持"科技创新、服务安全"的理念，
        致力于煤矿安全生产重大科技问题的研究。

        在过去的二十多年里，实验室汇聚了一批优秀的科研人才，建立了完善的科研平台，在煤矿灾害防控领域
        取得了一系列具有国际影响力的研究成果。

        展望未来，我们将继续深化产学研合作，加强国际学术交流，为煤矿安全生产科技进步做出更大贡献！

        实验室主任
        张三
        2024年3月`,
      },
    }),
  },

  // 历史沿革
  {
    url: "/api/about/history",
    method: "get",
    response: () => ({
      code: 200,
      message: "success",
      data: [
        {
          year: 1998,
          events: ["实验室正式成立", "获批首批国家重点实验室"],
        },
        {
          year: 2003,
          events: ["完成第一次重大实验室升级改造", "获得首项国家科技进步奖"],
        },
        {
          year: 2008,
          events: ["实验室十周年庆典", "建成煤矿安全虚拟仿真中心"],
        },
        {
          year: 2013,
          events: ["通过国家重点实验室评估", "获批国家创新研究群体项目"],
        },
        {
          year: 2018,
          events: ["实验室二十周年庆典", "完成新一轮实验室升级改造"],
        },
        {
          year: 2023,
          events: ["获批国家重点研发计划项目群", "建成智能化实验平台"],
        },
      ],
    }),
  },

  // 现任领导
  {
    url: "/api/about/leadership",
    method: "get",
    response: () => ({
      code: 200,
      message: "success",
      data: [
        {
          id: 1,
          name: "张三",
          title: "实验室主任",
          position: "教授/博士生导师",
          photo: "/images/leaders/zhang.jpg",
          research: ["煤矿瓦斯灾害防控", "矿井安全智能监测"],
          contact: "zhang@cumt.edu.cn",
        },
        {
          id: 2,
          name: "李四",
          title: "常务副主任",
          position: "教授/博士生导师",
          photo: "/images/leaders/li.jpg",
          research: ["矿井通风安全", "粉尘防治技术"],
          contact: "li@cumt.edu.cn",
        },
        {
          id: 3,
          name: "王五",
          title: "副主任",
          position: "教授/博士生导师",
          photo: "/images/leaders/wang.jpg",
          research: ["地压与顶板控制", "深部开采力学"],
          contact: "wang@cumt.edu.cn",
        },
      ],
    }),
  },
] as MockMethod[];
