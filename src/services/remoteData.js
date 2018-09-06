import request from 'utils/request';
import qs from 'qs';

let jsonHeaders = new Headers();
jsonHeaders.append("Content-Type","application/json");

//获取列表
export async function getUsersListTableData(param) {
  return request(`/api/users/getTableData?${qs.stringify(param)}`,{
    method:'GET'
  });
}

// 更新
export async function editUsersListData(param) {
  return request('/api/users/edit', {
      method: 'post',
      body: `${JSON.stringify(param)}`,
      headers: jsonHeaders,
  })
}

// 添加
export async function savaUserListData(param) {
  return request('/api/users/save', {
      method: 'post',
      body: `${JSON.stringify(param)}`,
      headers: jsonHeaders,
  })
}

// 删除
export async function deleteUserListData(param) {
  return request('/api/users/delete', {
      method: 'post',
      body: `${JSON.stringify(param)}`,
      headers: jsonHeaders,
  })
}
