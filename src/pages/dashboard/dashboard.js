import React from 'react'
import SideBar from 'components/sideBar/sidebar'
import {connect} from 'dva'
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import styles from './dashboardS.less'
import { config } from 'constants'

const SubMenu=Menu.SubMenu
const { Header, Sider, Content } = Layout;

const Dashboard = ({dispatch, SideBarM}) => {
    console.log('sidebarM',SideBarM)
    const {collapsed,openKeys,recordKeys} = SideBarM;

    function toggleCollapsed(){
        collapsed? dispatch({type:'SideBarM/updateState',payload:{ collapsed: !collapsed, openKeys:recordKeys, recordKeys: [] }})
                 : dispatch({type:'SideBarM/updateState',payload:{ collapsed: !collapsed, recordKeys:openKeys, openKeys: [] }});
    }
    
    return (
        <Layout className={styles.container}>
            <SideBar/>
            <Layout>
                <Header className={styles.header} style={{background: '#fff',padding: 0}}>
                    <Icon
                    className={styles.trigger}
                    type={collapsed? 'menu-unfold' : 'menu-fold'}
                    onClick={toggleCollapsed}
                    />
                    <Menu mode="horizontal" style={{float:'right'}} >
                        <Menu.Item key="mail" className={styles.button}>
                            <Icon type="mail" />Mail
                        </Menu.Item>
                        <SubMenu className={styles.button} title={<span><Icon type="user" /><span>Admin</span></span>}>
                            <Menu.Item key="logout">
                            Sign out
                            </Menu.Item>
                        </SubMenu>
                    </Menu>                       
                </Header>
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                <Breadcrumb style={{ margin: '10px 0' }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                        ...
                        <br />
                        Really
                        <br />...<br />...<br />...<br />
                        long
                        <br />...<br />...<br />...<br />...<br />...<br />...
                        <br />...<br />...<br />...<br />...<br />...<br />...
                        <br />...<br />...<br />...<br />...<br />...<br />...
                        <br />...<br />...<br />...<br />...<br />...<br />...
                        <br />...<br />...<br />...<br />...<br />...<br />...
                        <br />...<br />...<br />...<br />...<br />...<br />...
                        <br />...<br />...<br />...<br />...<br />...<br />
                        <br />...<br />...<br />...<br />...<br />...<br />...
                        <br />...<br />...<br />...<br />...<br />...<br />...
                        <br />...<br />...<br />...<br />...<br />...<br />...
                        <br />...<br />...<br />...<br />...<br />...<br />
                        content
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default connect(({SideBarM})=>({SideBarM}))(Dashboard);