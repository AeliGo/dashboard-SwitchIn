import React from 'react'
import {connect} from 'dva'
import styles from './styles.less'
import { Row, Col } from 'antd'
import NumberCard from './components/numberCard/numberCard'

const Analysis= ({dispatch,analysisM})=>{
    console.log(analysisM)

    const { numbers }=analysisM

    const numberCards = numbers.map((item,key)=>{
        return (<Col lg={6} md={12} key={key}><NumberCard  datas={item}/></Col>)
    })

    return (
    <div className={styles.wrapper}>
        <Row gutter={24}>
            {numberCards}
        </Row>
    </div>
    )
}

export default connect(({analysisM})=>({analysisM}))(Analysis)