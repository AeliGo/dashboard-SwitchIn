import React from 'react'
import ReactEcharts  from 'echarts-for-react'

export default class ChartSaleSummary extends React.Component{
    
      render(){
        const {dataList,xAxis,yAxis,legendList} = this.props.data

        let colorList= [], color= [];
        legendList.forEach((item)=>{
            color = dataList.filter((obj)=>(
                    obj.name===item
            ));
            colorList.push(color[0].color);
        })
        
        const option={
            color: colorList,
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data:legendList
            },
            xAxis : [
                {
                    type : 'value',
                    name:xAxis.name,
                    nameTextStyle:{
                        color:'#000',
                    }
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    data : yAxis.data,
                    name : yAxis.name,
                    nameTextStyle:{
                        color:'#000',
                    }
                }
            ],
            series : dataList.map((item)=>{
                return {
                    name:item.name,
                    type:'bar',
                    stack: '总量',
                    itemStyle :{ 
                        normal: {
                            label : {show: true, position: 'insideRight'},
                            barBorderRadius: 5
                        }
                    },
                    data:item.data
                }
            })
        }
        return (
          <div>
              <ReactEcharts
                  option={option}
                  lazyUpdate={true}
                  style={{height: '400px', width: '100%'}}
                  className='react_for_echarts'
                  />
          </div>
      )
    }
}

