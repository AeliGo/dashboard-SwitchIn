import React from 'react';
import {connect} from 'dva'
import {Breadcrumb,Icon} from 'antd'


const TopBreadcrumb =(props)=>{

    const {breadcrumbPath}=props.dashboardM;
    let breadArr=(breadcrumbPath?breadcrumbPath.split('/'):[]).splice(1);
    
    function uppercase(item){//user
        return item.substring(0,1).toUpperCase() + item.substring(1);
    }
 
    return (
        <Breadcrumb>
            {
                breadArr.map((item,index)=>{
                    return  <Breadcrumb.Item key={index}>
                                {
                                    item==='dashboard'?<Icon type="home" />:uppercase(item)
                                }
                            </Breadcrumb.Item>
                })
            }
        </Breadcrumb>
    )
}

export default connect(({dashboardM})=>({dashboardM}))(TopBreadcrumb)