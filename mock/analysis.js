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
});

module.exports={
    [`GET /api/analysis/getData`](req,res){
        res.status(200).json(analysisData)
    }
}