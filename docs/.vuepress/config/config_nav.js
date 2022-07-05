module.exports = [
    {
        text: '基础课程笔记',
        link: '/CSclass/README.md',
        children: 
        [
            {
                text: '数据库',
                link: '/CSclass/CSclass_DB/README.md',
                // 该元素将一直处于激活状态
                activeMatch: '^/CSclass/CSclass_DB/',
            },
        ],
    },
    {
        text: '算法',
        link: '/Algorithm/README.md',
        activeMatch: '^/Algorithm/',
    },
    {
        text: 'AI',
        link: '/AI/README.md',
        children: 
        [
            {
                text: '基础',
                link: '/AI/基础/README.md',
                // 该元素将一直处于激活状态
                activeMatch: '^/AI/基础/',
            },
            {
                text: 'NLP',
                link: '/AI/NLP/README.md',
                // 该元素将一直处于激活状态
                activeMatch: '^/AI/NLP/',
            },
        ],
    },
    {
        text: '编程',
        link: '/Programming/README.md',
        children: 
        [
            {
                text: '基础',
                link: '/Programming/python/README.md',
                // 该元素将一直处于激活状态
                activeMatch: '^/Programming/python/',
            },
        ],
    },
]
