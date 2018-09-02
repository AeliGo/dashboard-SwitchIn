import { routerRedux } from 'dva/router'
import request from 'utils/request';
import { message, notification } from 'antd';

export default {
    namespace: 'loginM',

    state: {
        loading:false,
    },

    effects: {
        * login ({payload,}, { put, call, select }) {
            yield put({type:'updateState',payload:{loading:true}})
            const data = yield call(request,`/api/login?uname=${payload.username}&upwd=${payload.password}`,{method:'GET'});
            yield put({type:'updateState',payload:{loading:false}})

            if( data && data.data.code===0){
                yield put(routerRedux.push('/dashboard'))
                yield put({type:'updateState',payload:{loginFail:false}})
            }else{              
                message.error(data.data.msg);
            }
        },
    },
    reducers: {
        'updateState'(state,action){
            return {...state,...action.payload}
        },
    }
}
