import React from 'react'
import {Button,Input,Select} from 'antd'
import styles from './styles.less'

const {Search} = Input
const {Option} = Select


const SearchFormTop = (props) => {
    // const {searchForm,}=usersM
    //用来update SearchForm
    const {
        updateFormState, 
        dataSource, 
        clearFormState, 
        searchComfirm, 
        createUser,
        deleteComfirm
    } = props;

    return (
        <div className={styles.wrapper}>
            <span>
            <Search
            value={dataSource.name}
            placeholder="search name"
            style={{ width: 200 }}
            onChange={(e)=>updateFormState({name:e.target.value})}
            /></span>
            <span>
            <Select 
            placeholder='plz choose gender'
            value={dataSource.gender}
            defaultValue="male" 
            style={{ width: 200 }} 
            onChange={(value)=>updateFormState({gender:value})}>
                <Option key="1" value="male">Male</Option>
                <Option key="0" value="female">Female</Option>
            </Select></span>
            <span><Button onClick={searchComfirm} type="primary">Search</Button></span>
            <span><Button onClick={clearFormState}>Clear</Button></span>
            <span style={{float:'right'}}><Button onClick={deleteComfirm} type="primary">Delete</Button></span>
            <span style={{float:'right'}}><Button onClick={createUser} type="primary">Create User</Button></span>
        </div>
    )
}

export default SearchFormTop