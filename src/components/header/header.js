import React from 'react'
import { connect } from 'dva';
import { Layout, Menu, Icon, Badge } from 'antd';
import styles from './headerS.less'
const { Header} = Layout;
const SubMenu=Menu.SubMenu

const HeaderDash =(props)=>{

    const { dispatch,SideBarM,dashboardM,onExitFull,onFull }= props;
    const { collapsed,openKeys,recordKeys } = SideBarM;
    const { fullScreen } = dashboardM;
    function toggleCollapsed(){
        collapsed? dispatch({type:'SideBarM/updateState',payload:{ collapsed: !collapsed, openKeys:recordKeys, recordKeys: [] }})
                 : dispatch({type:'SideBarM/updateState',payload:{ collapsed: !collapsed, recordKeys:openKeys, openKeys: [] }});
    }

    return (
        <Header className={styles.header} style={{background: '#fff',padding: 0}}>
            <Icon
            className={styles.trigger}
            type={collapsed? 'menu-unfold' : 'menu-fold'}
            onClick={toggleCollapsed}
            />
            <Icon
            className={styles.trigger}
            type={fullScreen? 'shrink' : 'arrows-alt'}
            onClick={!fullScreen?()=>onFull(document.documentElement):onExitFull}
            />
            <Menu mode="horizontal" style={{float:'right'}} >
                <Menu.Item key="mail" className={styles.button}>
                    <Badge count={15}>
                        <Icon type="mail" />
                    </Badge>
                </Menu.Item>
                <SubMenu className={styles.button} title={<span><Icon type="user" /><span>Admin</span></span>}>
                    <Menu.Item key="logout" style={{height:'30px',lineHeight:'30px'}}>
                    Sign out
                    </Menu.Item>
                </SubMenu>
            </Menu>                       
        </Header>
    )
}

export default connect(({SideBarM,dashboardM})=>({SideBarM,dashboardM}))(HeaderDash)