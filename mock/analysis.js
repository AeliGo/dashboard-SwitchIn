const Mock = require('mockjs');

let getVirtulData = ()=> {
    let nowTime = new Date().getTime();//获取系统当前时间戳
    const dayTime = 3600 * 24 * 1000;
    let endTime= nowTime-dayTime*182; //half year
    let data = [];
    let count =1,startAndEnd=[];
    for (var time = endTime; time < nowTime; time += dayTime) {
        const timeDate=new Date(time);
        if(count===1||count===182){
            startAndEnd.push(`${timeDate.getFullYear()}-${timeDate.getMonth()+1}-${timeDate.getDate()}`)
        }
        count++;
        data.push([
            `${timeDate.getFullYear()}-${timeDate.getMonth()+1}-${timeDate.getDate()}`,
            Math.floor(Math.random() * 10000)
        ]);
    }
    return {data,startAndEnd};
}


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
    ],
    salesCalendar:{
        data:getVirtulData()
    },
    percentageBarData:[
        {
            key: '1',
            name: 'Category-1',
            total: 30,
            proportion:'15%',
            color:'#0099ff'
        }, {
            key: '2',
            name: 'Category-2',
            total: 42,
            proportion:'21%',
            color:'#27BA75'
        }, {
            key: '3',
            name: 'Category-3',
            total: 10,
            proportion:'5%',
            color:'#FFB300'
        }, {
            key: '4',
            name: 'Category-4',
            total: 96,
            proportion:'49%',
            color:'#21B8EC'
        }, {
            key: '5',
            name: 'Category-5',
            total: 20,
            proportion:'10%',
            color:'#F56753'
        }
    ]
});

module.exports={
    [`GET /api/analysis/getData`](req,res){
        res.status(200).json(analysisData)
    }
}