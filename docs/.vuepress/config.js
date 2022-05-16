const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
  title: 'Yusheng Huang\'s page',
  //description: 'Just playing around',
  host: 'localhost',
  port: '8090',
  theme: defaultTheme({
    navbar: [
      // 控制元素何时被激活
      {
        text: '数据库课程',
        children: [
          {
            text: '笔记首页',
            link: '/CSclass-DB/',
            // 该元素将一直处于激活状态
            activeMatch: '/CSclass-DB/',
          },
          {
            text: '笔记',
            children: [
            {
                text: '第一课',
                link: '/CSclass-DB/哈工大DB-第1讲初步认识数据库11.html',
                // 该元素将一直处于激活状态
                activeMatch: '^(/CSclass-DB/哈工)',
            },
            {
                text: '第二课',
                link: '/CSclass-DB/哈工大DB-第1讲初步认识数据库.md',
                // 该元素将一直处于激活状态
                activeMatch: '^(/CSclass-DB/哈工)',
            },
            ],
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式
            activeMatch: '^(/CSclass-DB/哈工)',
          },
        ],
      },
    ],
  }),
  themeConfig: {
    displayAllHeaders: true, // 默认值：false
    logo: '../homepage_resource/homepage.png'
  },
}
