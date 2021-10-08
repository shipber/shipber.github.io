module.exports = {
    title: 'Shipber',
    description: 'Just playing around',

            themeConfig: {
                nav: [
                  { text: 'Shipber', link: '/sidebar/API/' },
                ],
                sidebar: {
                    '/sidebar/API/' : [
                        {
                          title: '板块1',
                          children: ['1','2','']
                        },
                        {
                          title: '板块2',
                          children: ['3']
                        },
                        {
                          title: '板块3',
                          children: ['4']
                        }
                    ],
                }

              }
        
  }