import React from 'react'
import classNames from 'classnames'
import styles from './styles.less'

const EntryLoader = (props) => {
    const {entryLoading}=props;

    return (<div className={classNames(styles.fullscreen, {
            [styles.hidden]: !entryLoading,
        })}>
            <div className={styles.warpper}>
            <div className={styles.inner}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
            </div>
                <div className={styles.text} >LOADING</div>
            </div>
        </div>)
}

export default EntryLoader