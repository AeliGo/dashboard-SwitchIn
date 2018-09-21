import React from 'react'
import {connect} from 'dva'
import SideBar from '../../components/sideBar/sidebar'
import HeaderDash from '../../components/header/header'
import { Switch, Route,Redirect } from 'dva/router'
import { Layout,Breadcrumb } from 'antd';
import styles from './dashboardS.less'
import EntryLoader from '../../components/entryLoader/entryLoader'
import Analysis from '../../components/analysis/analysis'
import Users from '../../components/users/users';

const {Content } = Layout;

const Dashboard = ({dispatch,dashboardM}) => {
    const {entryLoading} = dashboardM;
    console.log('dashboardM',dashboardM)

    const headerProps={
        onFull(element){
            if(element.requestFullscreen){
                element.requestFullscreen();
            }else if(element.mozRequestFullscreen){
                element.mozRequestFullscreen();
            }else if(element.webkitRequestFullscreen){
                element.webkitRequestFullscreen();
            }else if(element.msRequestFullscreen){
                element.msRequestFullscreen();
            }
            dispatch({type:'dashboardM/switchFullScreen',payload:{fullScreen:true}});
        },
        onExitFull(){
            if(document.exitFullscreen){
                document.exitFullscreen();
            }else if(document.mozCancelFullscreen){
                document.mozCancelFullscreen();
            }else if(document.webkitExitFullscreen){
                document.webkitExitFullscreen();
            }
            dispatch({type:'dashboardM/switchFullScreen',payload:{fullScreen:false}});
        }
    }


    return (
        <Layout className={styles.container}>
            <SideBar/>
            <Layout>
                <HeaderDash {...headerProps}/>
                <Breadcrumb style={{ margin: '10px 20px' }}>
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
            <EntryLoader entryLoading={entryLoading}/>
        </Layout>
    )
}

export default connect(({dashboardM})=>({dashboardM}))(Dashboard);