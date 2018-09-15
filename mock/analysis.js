const Mock = require('mockjs');

const analysisData = Mock.mock({
    numbers:[
        {
            icon:'pay-circle-o',
            color:'#fff',
            title:'Daily Income',
            number:5895,
            bgcolor:'#B0E2FF'
        },
        {
            icon:'global',
            color:'#fff',
            title:'Daily Visits',
            number:2995,
            bgcolor:'#EED2EE'
        },
        {
            icon:'customer-service',
            color:'#fff',
            title:'Issues Processed',
            number:795,
            bgcolor:'#FFEBAD'
        },
        {
            icon:'book',
            color:'#fff',
            title:'Reserved Booking',
            number:1889,
            bgcolor:'#FFC2AD'
        },
    ],
    'sales|8': [
        {
          'name|+1': 2008,
          'Clothes|200-500': 1,
          'Food|180-400': 1,
          'Electronics|300-550': 1,
        },
    ],
    // 'projectsData|5-8':[{
    //     'key|+1':1,
    //     title: '@title(3, 5)',
    //     status: {
    //         state:'COMPLETED',
    //         color:'lightgreen'
    //     },
    //     paragraph: '@sentence(10,18)',
    //     date:'@datetime',
    //     avatar () {
    //         return Mock.Random.image('48x48', Mock.Random.color(), '#757575', 'png', this.title.substr(0, 1))
    //     },
    //   }],
      projectsData:[
          {
            'pjtCompleted|5-8':[{
                'key|+1':1,
                title: '@title(3, 5)',
                status: {
                    state:'COMPLETED',
                    color:'lightgreen'
                },
                paragraph: '@sentence(10,18)',
                date:'@datetime',
                avatar () {
                    return Mock.Random.image('48x48', Mock.Random.color(), '#757575', 'png', this.title.substr(0, 1))
                },
              }]
          },{
            'pjtOnPlan|4-7':[{
                'key|+1':1,
                title: '@title(3, 5)',
                status: {
                    state:'PENDING',
                    color:'lightpink'
                },
                paragraph: '@sentence(10,18)',
                date:'@datetime',
                avatar () {
                    return Mock.Random.image('48x48', Mock.Random.color(), '#757575', 'png', this.title.substr(0, 1))
                },
              }],
          }
      ]
});

module.exports={
    [`GET /api/analysis/getData`](req,res){
        res.status(200).json(analysisData)
    }
}