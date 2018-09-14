import React from 'react'
import styles from './styles.less'
import ReactEcharts  from 'echarts-for-react'

export default class ChartSaleSummary extends React.Component{

     getOption=()=> {
        return {
          color: ['#5591E9', '#27BA75', '#FFB300', '#21B8EC', '#F56753'],
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
              data:['Electronics', 'Foods','Makeups','Sports','Fashion']
          },
          xAxis : [
              {
                  type : 'value',
                  name:'USD',
                  nameTextStyle:{
                    color:'#000',
                  }
              }
          ],
          yAxis : [
              {
                  type : 'category',
                  data : ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
                  name:'WEEKDAYS',
                  nameTextStyle:{
                    color:'#000',
                  }
              }
          ],
          series : [
              {
                  name:'Electronics',
                  type:'bar',
                  stack: '总量',
                  itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                  data:[399, 520, 301, 334, 390, 485, 658]
              },
              {
                  name:'Foods',
                  type:'bar',
                  stack: '总量',
                  itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                  data:[120, 132, 101, 134, 90, 335, 452]
              },
              {
                  name:'Makeups',
                  type:'bar',
                  stack: '总量',
                  itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                  data:[220, 182, 191, 234, 290, 330, 310]
              },
              {
                  name:'Sports',
                  type:'bar',
                  stack: '总量',
                  itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                  data:[150, 212, 201, 154, 190, 300, 410]
              },
              {
                  name:'Fashion',
                  type:'bar',
                  stack: '总量',
                  itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                  data:[820, 832, 901, 934, 1290, 1330, 1320]
              }
          ]
        };
      };

      render(){
        return (
          <div>
              <ReactEcharts
                  option={this.getOption()}
                  lazyUpdate={true}
                  style={{height: '400px', width: '100%'}}
                  className='react_for_echarts'
                  />
          </div>
      )
    }
}

