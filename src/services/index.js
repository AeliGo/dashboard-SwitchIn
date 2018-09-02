import request from 'utils/request';
import qs from 'qs';


export async function query(url,param) {
  return request(`${url}?${qs.stringify(param)}`,{
    method:'GET'
  });
}
