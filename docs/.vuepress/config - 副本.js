const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
  title: 'Yusheng Huang\'s page',
  //description: 'Just playing around',
  host: 'localhost',
  port: '8090',
  base:'/online_notes/',
  theme: defaultTheme({
    navbar: [
      // 控制元素何时被激活
      {
        text: '基础课程笔记',
        link: '/CSclass/README.md',
        children: [
          {
            text: '数据库',
            link: '/CSclass/CSclass_DB/',
            // 该元素将一直处于激活状态
            activeMatch: '^/CSclass/CSclass_DB/',
          },
        ],
      },
      {
        text: '算法',
        link: '/Algorithm/README.md',
        children: [
          {
            text: '动态规划',
            link: '/Algorithm/',
            // 该元素将一直处于激活状态
            activeMatch: '^/Algorithm/',
          },
        ],
      },
    ],
    sidebar: {
      '/CSclass/CSclass_DB/': [
        {
          text: '数据库课程笔记',
          collapsible: true,
          sidebarDepth: 1,
          children: ['/CSclass/CSclass_DB/README.md', '/CSclass/CSclass_DB/哈工大DB-第1讲初步认识数据库.md'],
        },
      ],
      '/Algorithm/': [
        {
          text: '算法学习笔记',
          collapsible: true,
          sidebarDepth: 1,
          children: ['/Algorithm/README.md', '/Algorithm/动态规划.md'],
        },
      ],
    },
  }),
  themeConfig: {
    displayAllHeaders: false, // 默认值：false
    logo: '../homepage_resource/homepage.png'
  },
}
