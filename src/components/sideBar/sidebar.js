import React from 'react'
import {Link} from 'dva/router'
import {connect} from 'dva'
import {Menu, Icon, Layout} from 'antd'
import { config } from '../../constants'
import styles from './sidebarS.less'


const SubMenu=Menu.SubMenu;
const { Sider} = Layout;

const SideBar = ({dispatch,SideBarM}) => {
    console.log(SideBarM)

    const {collapsed, sidebarTree, openKeys, rootSubmenuKeys, defaultKey}=SideBarM;

    function onOpenChange(Keys){
        const latestOpenKey = Keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            dispatch({ type:'SideBarM/updateState',payload:{openKeys:Keys} });
        } else {
            dispatch({ type:'SideBarM/updateState',payload:{openKeys: latestOpenKey ? [latestOpenKey] : [],}})
        }
    }

    function generateMenu({treeData}){
        return treeData.map((item)=>{
            let {id, name, icon, url, children}=item;
            let title=name;
            if(icon){
                title = <span><Icon type={icon}/><span>{title}</span></span>;
            }
            if(children && children.length>0){
                return (
                    <SubMenu title={title} key={`sub${id}`}>
                        {generateMenu({treeData:children})}
                    </SubMenu>
                )
            }else{
                return (
                    <Menu.Item key={id}>
                        <Link to={url}>{title}</Link>
                    </Menu.Item>
                )
            }
        });
    }

    const menuProps={
        theme:"dark" ,
        mode:"inline" ,
        inlineCollapsed:collapsed,
        defaultSelectedKeys:[`${defaultKey}`],
        openKeys:openKeys,
        onOpenChange:onOpenChange
    }

    return (
    
    <Sider
    trigger={null}
    collapsible
    collapsed={collapsed}>
        <div className={styles.logo}>
            <img alt="logo" src={require('../../assets/logo.svg')} />
            {collapsed?'':<span>{config.name}</span>}
        </div>
        {
            [`${defaultKey}`][0].length>0   ? <Menu {...menuProps}>{ generateMenu({ treeData:sidebarTree }) }</Menu>
                                            : null
        }
    </Sider>
  )
}

export default connect(({SideBarM})=>({SideBarM}))(SideBar);