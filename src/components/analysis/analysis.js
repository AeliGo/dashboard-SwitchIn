import React from 'react'
import {connect} from 'dva'
import styles from './styles.less'
import { Row, Col,Card,Skeleton } from 'antd'
import NumberCard from './components/numberCard/numberCard'
import ChartSaleSummary from './components/chartSaleSummary/chartSaleSummary'
import SalesCalendar from './components/salesCalendar/salesCalendar'
import ProjectStatus from './components/projectStatus/projectStatus'
import PercentageBar from './components/percentageBar/percentageBar'


const Analysis= ({dispatch,analysisM,dashboardM})=>{
    const { numbers ,projectsData,salesSummary,salesCalendar,percentageBarData}=analysisM
    const numberCards = numbers.map((item,key)=>{
        return (<Col lg={6} md={12} key={key}><NumberCard  datas={item}/></Col>)
    })

    const percentageBarProps={ 
        columns : [{
            title: 'Name',
            dataIndex: 'name',
            render:(text,record)=>(<div>
                    <span className={styles.colorBlock} style={{backgroundColor:record.color}}></span>
                    <span>{record.name}</span>
                </div>)
        }, {
            title: 'Total',
            dataIndex: 'total'
        },{
            title:'Proportion',
            dataIndex:'proportion'
        }],
        dataSource: percentageBarData
    }
    return (
    <div className={styles.wrapper}>
        <Row gutter={24} style={{marginTop:'10px'}}>
            {numberCards}
            <Col lg={14} md={24} >
                <Card title="Sale Calendar" 
                bordered={false} 
                bodyStyle={{
                    width: '100%',
                    padding: '10px 15px',
                    marginBottom:'24px',
                    height: '300px',
                }}>
                    {
                        salesCalendar.data&&<SalesCalendar data={salesCalendar.data}/>
                    }
                </Card>
            </Col>
            <Col lg={10} md={24}>
                <PercentageBar {...percentageBarProps}/>
            </Col>
            <Col lg={16} md={24}>
                <Card title="Sale Summary" 
                bordered={false} 
                bodyStyle={{
                    width: '100%',
                    padding: '10px',
                    height: '400px',
                    marginBottom:'24px'
                }}>
                <Skeleton active loading={dashboardM.entryLoading} paragraph={{rows:11}}>
                    <ChartSaleSummary data={salesSummary} />
                </Skeleton>
                </Card>
            </Col>
            <Col lg={8} md={24}>
                <ProjectStatus dataSource={projectsData}/>
            </Col>
        </Row>
    </div>
    )
}

export default connect(({analysisM,dashboardM})=>({analysisM,dashboardM}))(Analysis)