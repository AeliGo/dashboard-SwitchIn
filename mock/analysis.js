const Mock = require('mockjs');

const analysisData = Mock.mock({
    numbers:[{
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
    }],
    salesSummary: {
        legendList:['Electronics', 'Foods','Makeups','Sports','Fashion'],
        xAxis:{
            name:'USD'
        },
        yAxis:{
            name:'WEEKDAYS',
            data:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
        },
        dataList:[{
                name:'Electronics',
                data:[399, 520, 301, 334, 390, 485, 658],
                color:'#0099ff'
            },
            {
                name:'Foods',
                data:[120, 132, 196, 134, 290, 335, 452],
                color:'#27BA75'
            },
            {
                name:'Makeups',
                data:[220, 182, 191, 234, 290, 330, 310],
                color:'#FFB300'
            },
            {
                name:'Sports',
                data:[150, 212, 201, 154, 190, 300, 410],
                color:'#21B8EC'
            },
            {
                name:'Fashion',
                data:[820, 832, 901, 934, 1290, 1330, 1320],
                color:'#F56753'
            }]
    },
    projectsData:[{
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
        }]}, {
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
        }]}
    ]
});

module.exports={
    [`GET /api/analysis/getData`](req,res){
        res.status(200).json(analysisData)
    }
}