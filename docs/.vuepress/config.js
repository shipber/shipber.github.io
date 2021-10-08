module.exports = {
    title: 'Shipber API',
    description: ' ',
    themeConfig: {
        logo: '/images/logo.png',
        nav: [
            {text: 'Docs', link: '/sidebar/API/'},
        ],
        sidebar: {
            '/sidebar/API/': [
                '/sidebar/API/',
                {
                    title: 'API',
                    children: ['Information', 'Address', 'Rate','Label'],
                    collapsable: false
                },
            ],
        }
    },
    plugins: [
        'vuepress-plugin-element-tabs'
    ]
}
