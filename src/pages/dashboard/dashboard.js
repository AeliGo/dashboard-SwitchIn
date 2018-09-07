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
                <Content className={styles.content}>
                <Breadcrumb style={{ margin: '10px' }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                </Breadcrumb>
                    <div style={{ background: '#fff' }}>
                        {props.children}
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default connect()(Dashboard);