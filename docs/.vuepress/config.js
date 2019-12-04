module.exports = {
    title: 'F2E',
    description: 'Not just playing around',
    base: '/ability-to-improve/',
    markdown: {
        lineNumbers: true,
        toc: {
            includeLevel: [1, 2]
        },
    },
    themeConfig: {
        nav: [
            {text: 'blog', link: 'https://lijiahao8898.github.io/'},
            {
                text: 'github',
                // 这里是下拉列表展现形式。
                items: [
                    {text: 'lijiahao8898', link: 'https://github.com/lijiahao8898'},
                ]
            }
        ],
        sidebar: ['/', {
            title: 'Javascript',
            children: [
                '/javascript/',
                '/javascript/highQuestion.md',
                '/javascript/question.md'
            ]
        }, '/html/', {
            title: 'css层叠样式表',
            children: [
                '/style/',
                '/style/SASS.md',
                '/style/LESS.md'
            ]
        }, {
            title: 'React',
            children: [
                '/react/',
                '/react/router.md',
                '/react/redux.md',
                '/react/dva.md'
            ]
        }, '/vue/', {
            title: '游览器宿主',
            children: [
                '/http/',
                '/http/BOM.md'
            ]
        }, '/blog/', '/tool/'],
        sidebarDepth: 1,
    }
}
