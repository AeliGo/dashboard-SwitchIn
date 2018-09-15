import React from 'react'
import {connect} from 'dva'
import styles from './styles.less'
import { Row, Col,Card,Skeleton,Table,Tabs } from 'antd'
import NumberCard from './components/numberCard/numberCard'
import ChartSaleSummary from './components/chartSaleSummary/chartSaleSummary'


const TabPane = Tabs.TabPane;

const Analysis= ({dispatch,analysisM,dashboardM})=>{
    console.log(analysisM)


    const { numbers }=analysisM

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
                {/* <Card  title="Projects" 
                bodyStyle={{
                    width: '100%',
                    padding: '10px',
                    height: '400px'
                }}>
                    <Skeleton active loading={dashboardM.entryLoading} paragraph={{rows:11}}>
                        1
                    </Skeleton>
                </Card> */}
                <Tabs type="card" className={styles.tabs} tabBarStyle={{height:'54px',margin:'0px'}}>
                    <TabPane tab="Project Completed" key="1">
                        <p>Content of Tab Pane 1</p>
                        <p>Content of Tab Pane 1</p>
                        <p>Content of Tab Pane 1</p>
                    </TabPane>
                    <TabPane tab="Plans" key="2">
                        <p>Content of Tab Pane 2</p>
                        <p>Content of Tab Pane 2</p>
                        <p>Content of Tab Pane 2</p>
                    </TabPane>
                </Tabs>
            </Col>

        </Row>
    </div>
    )
}

export default connect(({analysisM,dashboardM})=>({analysisM,dashboardM}))(Analysis)