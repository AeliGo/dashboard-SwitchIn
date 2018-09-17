import React from 'react'
import ReactEcharts  from 'echarts-for-react'

export default class SalesCalendar extends React.Component{

      render(){

        const option = {
            title: {
                text: 'Daily Sales In Last 6 Months(USD)',
                left: 'center',
                textStyle: {
                    color: 'rgba(0, 0, 0, 0.6)'
                }
            },
            tooltip : {
                trigger: 'item'
            },
            legend: {
                top: '30',
                left: '10',
                data:['Daily Sales', 'Top 10 Sales'],
                textStyle: {
                    color: 'rgba(0, 0, 0, 0.8)'
                }
            },
            calendar: [{
                top: 80,
                left: 'center',
                cellSize: ['auto', 25],
                range: this.props.data.startAndEnd,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(0, 0, 0, 0.6)',
                        width: 2,
                        type: 'solid'
                    }
                },
                yearLabel: {
                    formatter: '{start} 1',
                    textStyle: {
                        color: '#000'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#fff',
                        borderWidth: 1,
                        borderColor: 'rgba(0, 0, 0, 0.3)'
                    }
                }
            }],
            series : [
                {
                    name: 'Daily Sales',
                    type: 'scatter',
                    coordinateSystem: 'calendar',
                    data: this.props.data.data,
                    symbolSize: function (val) {
                        return val[1] / 450;
                    },
                    itemStyle: {
                        normal: {
                            color: '#21b8ec'
                        }
                    }
                },
                {
                    name: 'Top 10 Sales',
                    type: 'effectScatter',
                    coordinateSystem: 'calendar',
                    data: this.props.data.data.sort(function (a, b) {
                        return b[1] - a[1];
                    }).slice(0, 10),
                    symbolSize: function (val) {
                        return val[1] / 500;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    itemStyle: {
                        normal: {
                            color: '#00bfff',
                        }
                    },
                    zlevel: 1
                }
            ]
            };
        return (
          <div>
                {
                    this.props.data&&<ReactEcharts
                        option={option}
                    />
                }
          </div>
      )
    }
}

