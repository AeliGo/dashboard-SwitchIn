import React from 'react'
import SideBar from '../../components/sideBar/sidebar'
import HeaderDash from '../../components/header/header'
import { Switch, Route,Redirect } from 'dva/router'
import { Layout,Breadcrumb } from 'antd';
import styles from './dashboardS.less'
import Analysis from '../../components/analysis/analysis'
import Users from '../../components/users/users';


const {Content } = Layout;

const Dashboard = (props) => {

    return (
        <Layout className={styles.container}>
            <SideBar/>
            <Layout>
                <HeaderDash/>
                <Breadcrumb style={{ margin: '10px' }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                </Breadcrumb>
                <Content className={styles.content}>
                    <div style={{ background: '#fff'}}>
                <Switch>  
                    <Route path="/dashboard/analysis" component={ Analysis } />
                    <Route path="/dashboard/users" component={Users} />
                    <Redirect to='/'/> 
                </Switch>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default Dashboard;