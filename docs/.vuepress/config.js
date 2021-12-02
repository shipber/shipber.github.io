module.exports = {
    head:[
        [
            'link',
            {rel:'icon',href:'/images/logo.svg'}
        ]
    ],
    title: 'Shipber Open API Docs',
    description: 'The API is a great way to get data directly to and from Shipber, like creating shipments, updating products, and querying order, shipment and customer data.',
    themeConfig: {
        logo: '/images/logo.svg',
        nav: [
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
