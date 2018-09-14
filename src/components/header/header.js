import React from 'react'
import { connect } from 'dva';
import { Layout, Menu, Icon, Badge } from 'antd';
import styles from './headerS.less'
const { Header} = Layout;
const SubMenu=Menu.SubMenu

class HeaderDash extends React.Component{

    toggleCollapsed=()=>{
        const {collapsed,openKeys,recordKeys} = this.props.SideBarM;
        const dispatch=this.props.dispatch
        collapsed? dispatch({type:'SideBarM/updateState',payload:{ collapsed: !collapsed, openKeys:recordKeys, recordKeys: [] }})
                 : dispatch({type:'SideBarM/updateState',payload:{ collapsed: !collapsed, recordKeys:openKeys, openKeys: [] }});
    }
    
    render(){
        const {collapsed} = this.props.SideBarM;

        return (
            <Header className={styles.header} style={{background: '#fff',padding: 0}}>
                <Icon
                className={styles.trigger}
                type={collapsed? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggleCollapsed}
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
}

const mapStateToProps=(SideBarM)=>{
    return SideBarM
}

const mapDispatchToProps=(dispatch)=>{
    return {dispatch}
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderDash)