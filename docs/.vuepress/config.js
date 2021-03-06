module.exports = {
    title: 'lei\'s home',
    description: '日常笔记积累',
    themeConfig:{
        nav: [
            { text: '教程', link: '/tutorial/main.md'},
            { text: '工具', link: '/tools/front.md' },
            {text: '人工智能', link: '/ai/main.md'},
            {text: 'leetcode', link: '/leetcode/main.md'}
        ],
        sidebar: [
            '/',
            '/tutorial/main.md',
            '/ai/main.md',
        ]
    }
}