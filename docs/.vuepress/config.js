module.exports = {
    title: '乐享',
    description: '日常笔记积累',
    themeConfig:{
        nav: [
            { text: '教程', link: '/tutorial/main.md'},
            { text: '工具', link: '/tools/front.md' },
            {text: '人工智能', link: '/ai/main.md'},
            {text: 'leetcode', link: '/leetcode/main.md'},
            {text: '智能问答', link: '/qa/main.md'},
            {text: '论文笔记', link: '/paper/main.md'},
            {
                text: '前端',
                items: [
                    {
                        text: 'vue', link: ''
                    },
                    {
                        text: 'javascript', link: ''
                    },
                    {
                        text: 'typescript', link: ''
                    }
                ]
            }
        ]
    }
}