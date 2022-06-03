module.exports = [
    {
        text: '基础课程笔记',
        link: '/CSclass/README.md',
        children: 
        [
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
}]
