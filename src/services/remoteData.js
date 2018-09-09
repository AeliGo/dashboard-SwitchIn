import request from '../utils/request';
import qs from 'qs';

let jsonHeaders = new Headers();
jsonHeaders.append("Content-Type","application/json");


/*******************************************dashboard/users 页面 Start*********************************************************/
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
/*******************************************dashboard/users 页面 End*********************************************************/
/*******************************************dashboard/analysis 页面 Start*********************************************************/
//获取列表
export async function getAnalysisDataList(param) {
  return request(`/api/analysis/getData?${qs.stringify(param)}`,{
    method:'GET'
  });
}

/*******************************************dashboard/analysis 页面 End*********************************************************/
