module.exports = {
    title: 'Shipber',
    description: 'Just playing around',

            themeConfig: {
                nav: [
                  { text: 'Docs', link: '/sidebar/API/' },
                ],
                sidebar: {
                    '/sidebar/API/' : [
                        {
                          title: 'START HERE',
                          children: ['Overview']
                        },
                        {
                          title: 'API',
                          children: ['Myself',' Address','Label']
                        },
                    ],
                }

              }
        
  }