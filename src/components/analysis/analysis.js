import React from 'react'
import {connect} from 'dva'
import styles from './styles.less'
import { Row, Col,Card,Skeleton,Table } from 'antd'
import NumberCard from './components/numberCard/numberCard'
import ChartSaleSummary from './components/chartSaleSummary/chartSaleSummary'
import SalesCalendar from './components/salesCalendar/salesCalendar'
import ProjectStatus from './components/projectStatus/projectStatus'


const Analysis= ({dispatch,analysisM,dashboardM})=>{
    console.log(analysisM)
 

    const { numbers ,projectsData,salesSummary,salesCalendar}=analysisM
    const numberCards = numbers.map((item,key)=>{
        return (<Col lg={6} md={12} key={key}><NumberCard  datas={item}/></Col>)
    })

    const columns = [{
            title: 'Name',
            dataIndex: 'name',
            render:(text,record)=><div><span className={styles.colorBlock}></span><span>{record.name}</span></div>
        }, {
            title: 'Total',
            dataIndex: 'total'
        },{
            title:'Proportion',
            dataIndex:'proportion'
        }];

    const dataSource = [
        {
            key: '1',
            name: 'Category-1',
            total: 32,
            proportion:'20%'
        }, {
            key: '2',
            name: 'Category-2',
            total: 42,
            proportion:'30%'
        },{
            key: '3',
            name: 'Category-3',
            total: 32,
            proportion:'20%'
        }, {
            key: '4',
            name: 'Category-4',
            total: 42,
            proportion:'30%'
        }, {
            key: '5',
            name: 'Category-5',
            total: 42,
            proportion:'30%'
        }
    ];

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
                <div className={styles.waveWrapper} style={{height:'354px'}}>
                <Table 
                    pagination={false}  
                    columns={columns}
                    dataSource={dataSource}  />
                <div className={styles.barWrapper}>
                    <span style={{background:'#faa'}}/>
                    <span style={{background:'blue'}}/>
                    <span style={{background:'lightgreen'}}/>
                    <span style={{background:'gray'}}/>
                </div>
                </div>
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
                    <ChartSaleSummary data={salesSummary}/>
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