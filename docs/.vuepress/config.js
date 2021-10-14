module.exports = {
    head:[
        [
            'link',
            {rel:'icon',href:'/images/logo.png'}
        ]
    ],
    title: 'Shipber API',
    description: ' ',
    themeConfig: {
        logo: '/images/logo.png',
        nav: [
            {text: 'Documents', link: '/sidebar/API/'},
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
        'vuepress-plugin-element-tabs',
        'one-click-copy'
    ]
}
