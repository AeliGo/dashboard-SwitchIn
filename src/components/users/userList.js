import React from 'react';
import { connect } from 'dva';
import { Table, Popconfirm, Button, Pagination,Icon} from 'antd';
import {PAGE_SIZE} from 'constants'
import UserModel from 'components/userModel/userModel'


const UserList = ({ dispatch,list:dataSource,total,page,loading}) => {
  function handleDelete(id) {
    dispatch({
      type: 'user/remove',
      payload: id,
    });
  }
  function handleAdd(user){
    dispatch({
      type:'user/add',
      payload:{user}
    });
  }
  function handleEdit(id,user){
    dispatch({
      type:'user/patch',
      payload:{ id, user }
    })
  }

  function pageChangeHandler(page){
    dispatch({
      type:'user/query',
      payload:page
    })
  }

  const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
  title: 'Name',
  dataIndex: 'name',
  }, 
  {
    title:'Age',
    dataIndex:'age'
  },
  {
    title:'Gender',
    dataIndex:'gender'
  },
  {
    title:'Email',
    dataIndex:'email'
  },
  {
    title: 'Actions',
    render: (text, record) => {
      return (
        <div>
          <UserModel record={record} ok={(user) => handleEdit(record.id,user)} title="Edit Info">
            <Button>Edit<Icon type="edit"/></Button> 
          </UserModel>
          <Popconfirm title="Confirm to delete?" onConfirm={() => handleDelete(record.id)}>
            <Button>Delete<Icon type="delete"/></Button>
          </Popconfirm>
        </div>
      );
    },
  }];

  return (
    <div className="container">
        <div className="addWrapper">
          <UserModel record={{}} ok = {handleAdd} title="Create User">
            <Button type="primary" style={{margin:'10px 0 20px 0'}}>Create User<Icon type="user-add"/></Button> 
          </UserModel>
        </div>
      <Table
        dataSource={dataSource}
        columns={columns}
        rowKey={record=>record.id}
        loading={loading}
        pagination={false}
      />
      <Pagination
        className="ant-table-pagination" //to float right pagination
        style={{marginTop:'10px'}}
        current={page}
        total={total}
        pageSize={PAGE_SIZE}
        onChange={pageChangeHandler}
        hideOnSinglePage={true}
        />
    </div>
  );
};


//把store中的state拉到本地待用
function mapStateToProps(state){
  const {list,total,page,loading} =state.user;
  return {
    list,
    total,
    page,
    loading
  }
}

export default connect(mapStateToProps)(UserList);