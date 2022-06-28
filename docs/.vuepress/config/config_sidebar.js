// the config of sidebar
const fs = require('node:fs');
const path = require('node:path')
module.exports = {
    '/CSclass/CSclass_DB/': 
    [
        {
            text: '数据库课程笔记',
            collapsible: true,
            sidebarDepth: 1,
            //children: ['/CSclass/CSclass_DB/README.md', '/CSclass/CSclass_DB/哈工大DB-第1讲初步认识数据库.md'],
            children: fs
            .readdirSync(path.resolve(__dirname, '../.././CSclass/CSclass_DB/'))
            .filter(f => f != 'pic') //此处是看API，返回的是一个string数组，因此我们可以用filter方法过滤掉不想要的文件夹
            .map(f => '/CSclass/CSclass_DB/' + f) // 此处读取文件的代码是启发于https://github.com/vuepress/vuepress-next/issues/883
        },
    ],
    '/Algorithm/': 
    [
        {
            text: '算法学习笔记',
            collapsible: true,
            sidebarDepth: 1,
            children: ['/Algorithm/README.md', '/Algorithm/动态规划.md'],
        },
    ],
    '/AI/': 
    [
        {
            text: 'AI基础',
            collapsible: true,
            sidebarDepth: 1,
            //children: ['/CSclass/CSclass_DB/README.md', '/CSclass/CSclass_DB/哈工大DB-第1讲初步认识数据库.md'],
            children: fs
            .readdirSync(path.resolve(__dirname, '../.././AI/基础/'))
            .filter(f => f != 'pic' && f.search(".pdf")==-1) //此处是看API，返回的是一个string数组，因此我们可以用filter方法过滤掉不想要的文件夹
            .map(f => '/AI/基础/' + f) // 此处读取文件的代码是启发于https://github.com/vuepress/vuepress-next/issues/883
        },
    ],
    '/Programming/python/': 
    [
        {
            text: 'python',
            collapsible: true,
            sidebarDepth: 1,
            //children: ['/CSclass/CSclass_DB/README.md', '/CSclass/CSclass_DB/哈工大DB-第1讲初步认识数据库.md'],
            children: fs
            .readdirSync(path.resolve(__dirname, '../.././Programming/python/'))
            .filter(f => f != 'pic') //此处是看API，返回的是一个string数组，因此我们可以用filter方法过滤掉不想要的文件夹
            .map(f => '/Programming/python/' + f) // 此处读取文件的代码是启发于https://github.com/vuepress/vuepress-next/issues/883
        },
    ],
}

