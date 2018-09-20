import React from 'react';
import styles from './styles.less';
import { Table,Tooltip  } from 'antd';

const PercentageBar = (props)=>{
    return (<div className={styles.waveWrapper} style={{height:'354px'}}>
            <Table 
                pagination={false}  
                columns={props.columns}
                dataSource={props.dataSource}  />
            <div className={styles.barWrapper}>
            {
                props.dataSource.map((item)=>{
                    return <Tooltip title={`${item.name}  ,  ${item.proportion}`} key={item.key}>
                        <span style={{background:item.color,width:item.proportion}}/>
                    </Tooltip>
                })
            }
                
            </div>
        </div>
    )
}

export default PercentageBar