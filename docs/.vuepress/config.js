module.exports = {
    title: 'Shipber',
    description: ' ',

            themeConfig: {
                nav: [
                  { text: 'Docs', link: '/sidebar/API/' },
                ],
                sidebar: {
                    '/sidebar/API/' : [
                        {
                          title: 'START HERE',
                          children: ['Overview'],
                        },
                        {
                          title: 'API',
                          children: ['Myself']
                        },
                        {
                          title: '板块3',
                          children: ['4']
                        }
                    ],
                }

              }
        
  }