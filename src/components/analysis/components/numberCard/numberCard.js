import React from 'react';
import styles from './styles.less'
import {Icon,Card} from 'antd'
import CountUp from 'react-countup';

const NumberCard=(props)=>{
    const { datas } = props;
    const { color, icon, title, number, bgcolor }=datas;
    return (
        <Card className={styles.numberCard} style={{'backgroundColor': bgcolor}} bordered={true} bodyStyle={{ padding: 0,}}>
            <Icon className={styles.iconWarp} style={{'color':color}} type={icon} />
            <div className={styles.content}>
                <p className={styles.title}>{title || 'No Title'}</p>
                <p className={styles.number}>
                {
                    <CountUp 
                    start={0} 
                    end={number}
                    duration={2.75}
                    useEasing
                    useGrouping
                    separator=","
                    />
                }
                </p>
            </div>
        </Card>
    )
}

export default NumberCard