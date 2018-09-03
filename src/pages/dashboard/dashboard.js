import React from 'react'
import SideBar from 'components/sideBar/sidebar'
import HeaderDash from 'components/header/header'

import {connect} from 'dva'
import { Layout,Breadcrumb } from 'antd';
import styles from './dashboardS.less'


const {Content } = Layout;

const Dashboard = (props) => {

    return (
        <Layout className={styles.container}>
            <SideBar/>
            <Layout>
                <HeaderDash/>
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                <Breadcrumb style={{ margin: '10px 0' }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                        {props.children}
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default connect()(Dashboard);