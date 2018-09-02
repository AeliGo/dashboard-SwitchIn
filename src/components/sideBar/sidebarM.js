import { routerRedux } from 'dva/router'
import request from 'utils/request';
import {RecursiveTree,getParentId} from 'utils/funtool'

export default {
    namespace: 'SideBarM',

    state: {
        collapsed:false,
        sidebarTree:[],
        openKeys: [],
        recordKeys:[], //用于记录collapse之前的key值
        rootSubmenuKeys:[],
    },

    effects: {
        * getTreeData ({payload,}, { put, call, select }) {
            const data = yield call(request,`/api/sidebarData`,{method:'GET'}); //fetch data
            if( data && data.data.code===0){
                let dataArr=data.data.data;
                //Recurse data structure
                dataArr=RecursiveTree({data:dataArr});
                yield put({type:'updateState',payload:{
                    sidebarTree:dataArr,
                    rootSubmenuKeys:getParentId(dataArr)
                }});
            }
        },
    },
    reducers: {
        'updateState'(state,action){
            return {...state,...action.payload}
        },
    },
    subscriptions:{
        setup({ dispatch,history }){
          return history.listen(({ pathname,search })=>{ //
              
          });
        }
    }

}