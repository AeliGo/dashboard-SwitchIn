import React from 'react'
import {connect} from 'dva'
import styles from './styles.less'
import { Row, Col,Card,Skeleton } from 'antd'
import NumberCard from './components/numberCard/numberCard'
import ChartSaleSummary from './components/chartSaleSummary/chartSaleSummary'
import ProjectStatus from './components/projectStatus/projectStatus'


const Analysis= ({dispatch,analysisM,dashboardM})=>{
    console.log(analysisM)
 

    const { numbers ,projectsData}=analysisM
    const numberCards = numbers.map((item,key)=>{
        return (<Col lg={6} md={12} key={key}><NumberCard  datas={item}/></Col>)
    })

    return (
    <div className={styles.wrapper}>
        <Row gutter={24} style={{marginTop:'10px'}}>
            {numberCards}
            <Col lg={18} md={24}>
                <Card title="Sale Summary" 
                bordered={false} 
                bodyStyle={{
                    width: '100%',
                    padding: '10px',
                    height: '400px'
                }}>
                <Skeleton active loading={dashboardM.entryLoading} paragraph={{rows:11}}>
                    <ChartSaleSummary/>
                </Skeleton>
                </Card>
            </Col>
            <Col lg={6} md={24}>
                <ProjectStatus dataSource={projectsData}/>
            </Col>

        </Row>
    </div>
    )
}

export default connect(({analysisM,dashboardM})=>({analysisM,dashboardM}))(Analysis)