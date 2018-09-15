import React from 'react'
import styles from './styles.less'
import {Tabs,Table,Tag} from 'antd'

const {TabPane}=Tabs

const ProjectStatus = (props) =>{ //project状态确认模块

    const {dataSource}=props;
 

    const columns = [{
    title: 'avatar',
    dataIndex: 'avatar',
    width: 48,
    render:(text,record)=><span style={{display:'inline-block'}}><img alt="avatar" width={48} src={record.avatar} style={{borderRadius:"50%"}} /></span>
    }, {
    title: 'content',
    dataIndex: 'content',
    render:(text,record)=>(<div className={styles.contentWrap}>
        <h5 className={styles.name}>{record.title}</h5>
        <p className={styles.content}>{record.paragraph}</p>
        <div className={styles.dateWrap}>
            <Tag color={record.status.color}>{record.status.state}</Tag>
            <span className={styles.date}>{record.date}</span>  
        </div>
    </div>)
    }];


    return(
        <Tabs type="card"  tabBarStyle={{height:'54px',margin:'0px'}}>
            <TabPane tab="Project Completed" key="1">
                {
                    dataSource.length === 2? <Table pagination={false}  showHeader={false} rowKey={(record, key) => key} dataSource={dataSource[0].pjtCompleted} columns={columns}></Table>:null
                }
            </TabPane>
            <TabPane tab="Project On Plan" key="2">
                {
                    dataSource.length === 2? <Table pagination={false}  showHeader={false} rowKey={(record, key) => key} dataSource={dataSource[1].pjtOnPlan} columns={columns}></Table>:null
                }
            </TabPane>
        </Tabs>  
    )

}

export default ProjectStatus