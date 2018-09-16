import React from 'react'
import ReactEcharts  from 'echarts-for-react'

export default class SalesCalendar extends React.Component{


     getVirtulData = (year)=> {
        year = year || '2017';
        const date = Date.parse(year + '-01-01');
        const end = Date.parse((+year + 1) + '-01-01');
        const dayTime = 3600 * 24 * 1000;
        let data = [];
        
        for (var time = date; time < end; time += dayTime) {
            const timeDate=new Date(time);
            data.push([
                `${timeDate.getFullYear()}-${timeDate.getMonth()+1}-${timeDate.getDate()}`,
                Math.floor(Math.random() * 10000)
            ]);
        }
        return data;
    }
    

      render(){

        const option = {
            tooltip: {
                position: 'top'
            },
            visualMap: {
                min: 0,
                max: 10000,
                calculable: true,
                orient: 'horizontal',
                left: 'center',
                top: 'top'
            },
            calendar: [
            {
                top: 'middle',
                right:'5px',
                width:'91%',
                height:'180px',
                range: ['2017-01-01', '2017-06-30'],
                cellSize: ['auto', 20],
                backgroundColor:'#ffa',
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#000',
                        width: 3,
                        type: 'solid'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#323c48',
                        borderWidth: 1,
                        borderColor: '#111',
                    }
                }
            }],
            series: [{
                type: 'scatter',
                coordinateSystem: 'calendar',
                data: this.getVirtulData(2017),
                symbolSize: function (val) {
                    return val[1] / 500;
                },
                itemStyle: {
                    normal: {
                        color: '#ddb926',
                    }    
                },
                zlevel: 1
            }]
        };
        return (
          <div>
                <ReactEcharts
                    option={option}
                />
          </div>
      )
    }
}

