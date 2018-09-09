import React from 'react';
import { connect } from 'dva';
import { Table, Popconfirm, Button, Pagination, Icon, message, Modal} from 'antd';
import UserModel from '../userModel/userModel';
import SearchFormTop from '../searchFormTop/searchFormTop'


const UserList = ({ dispatch,usersM}) => {
console.log(usersM)


const columns = [{
    title: 'Avatar',
    dataIndex: 'avatar',
    key: 'avatar',
    width: 80,
    render: text => <img alt="avatar" width={24} src={text} style={{borderRadius:"50%"}} />,
},{
    title: 'Name',
    dataIndex: 'name',
},{
    title:'Age',
    dataIndex:'age',
    sorter: (a, b) => a.age - b.age,
},{
    title:'Gender',
    dataIndex:'gender',
},{
    title:'Phone',
    dataIndex:'phone'
},{
    title:'Email',
    dataIndex:'email'
},{
    title:'CreateTime',
    dataIndex:'createTime'
},{
    title: 'Actions',
    render: (text, record) => {
        return (
        <div>
            <Button
            style={{marginRight:'4px'}}
            onClick={()=>{
                dispatch({
                    type:'usersM/updateStateNewItem',payload: {
                        ...record,
                        visible: true,
                    }
                })
            }}>Edit<Icon type="edit"/></Button> 
            <Popconfirm 
            title="Confirm to delete?" 
            onConfirm={() => {
                dispatch({
                    type:'usersM/deleteData',payload: {
                        id: record.id,
                    }
                })
            }}>
                <Button>Delete<Icon type="delete"/></Button>
            </Popconfirm>
        </div>
        );
    },
}];

const NewItemProps={
    newItem: usersM.newItem,
    updateItem(obj) { //输入或选择时update state/newItem
        dispatch({
            type: 'usersM/updateStateNewItem', payload: {
                ...obj
            }
        })
    },
    submitData() {
        dispatch({ type: "usersM/saveData" });
    },
    hideWindow() {
        dispatch({ type: "usersM/updateStateNewItem", payload: { visible: false } });
    },
}

const {tableData,selectedRowKeys,currentPage,pageSize,totalItems,loading} = usersM
const rowSelectionProps = {
    selectedRowKeys,
    onChange: (selectedRowKeys) => {
        dispatch({ type: "usersM/updateState", payload: { selectedRowKeys } });
    }
};
const paginationProps={
    showSizeChanger:true,
    pageSizeOptions:['10', '20', '30', '40', '50'],
    showQuickJumper: true,
    className:"ant-table-pagination", //to float right pagination
    current:currentPage,
    total:totalItems,
    pageSize:pageSize,
    onChange(page, pageSize){
        dispatch({
            type: 'usersM/getTableData', payload: {
                currentPage: page,
                pageSize
            }
        })
    },
    // pageSize 变化的回调
    onShowSizeChange(current, size) {
        dispatch({
            type: 'usersM/getTableData', payload: {
                currentPage: 1,
                pageSize: size
            }
        })
    },
    showTotal: total => `Total ${usersM.totalItems} Results`
}
const tableProps={
    dataSource:tableData,
    rowSelection:rowSelectionProps,
    columns:columns,
    bordered:true,
    loading:loading,
    pagination:false
}

const searchFormProps={
    dataSource:usersM.searchForm,
    updateFormState:(obj)=>{
        dispatch({type:'usersM/updateStateSearchForm',payload:obj})
    },
    clearFormState:()=>{
        if(Object.keys(usersM.searchForm).length === 0){
            return false
        }
        dispatch({type:'usersM/clearSearchForm'});
        dispatch({type:'usersM/getTableData'});
    },
    searchComfirm:()=>{
        if(Object.keys(usersM.searchForm).length === 0){
            return false
        }
        dispatch({type:'usersM/getTableData'});
    },
    createUser:()=>{
        dispatch({type:'usersM/updateStateNewItem',payload:{visible:true}})
    },
    deleteComfirm:()=>{
        if(usersM.selectedRowKeys.length===0){
            message.warning('You have not selected any data',2)
        }else{
            Modal.confirm({
                content:`Are you sure to delete ${usersM.selectedRowKeys.length} data?`,
                okText:'Sure',
                cancelText:'Cancel',
                onOk(){
                    dispatch({
                        type:'usersM/deleteData',payload:{
                            ids:usersM.selectedRowKeys
                        }
                    })
                }
            })
        }
    }
}

return (
    <div className="container">
        <div style={{minWidth:'1280px'}}>
            <SearchFormTop {...searchFormProps}/>
        </div>
        <div style={{minWidth:'1280px'}}>
            <Table {...tableProps} />
            <Pagination {...paginationProps}/>
        </div>
        {
            usersM.newItem.visible ? <UserModel  {...NewItemProps} /> : null
        }
    </div>
)};

export default connect(({usersM})=>({usersM}))(UserList);