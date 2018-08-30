import request from 'utils/request';
import {PAGE_SIZE} from 'constants'
export default {
  namespace: 'user',
  state:{
    list:[],
    total:null,
    page:null,
    loading:true
  },
  reducers: {
    // 'delete'(state, { payload: id }) {
    //   const list = state.list;
    //   return {list:list.filter(item => item.id !== id)} ;
    // },
    'save'(state,{payload:{data:{data:{list,total,pageSize}},page}}){
        return {...state,list,total,pageSize,page,loading:false}
    },
    'saveloadingtrue'(state){
      return {...state,loading:true}
    }
  },
  effects: {
    * query({ payload:page=1 },{call,put}){    //FETCH USER LIST WITH PAGESIZE AND TOTAL PAGES
      yield put({type:'saveloadingtrue'})
      const {data}=yield call(request,`/api/users?_page=${page}&_limit=${PAGE_SIZE}`,{method:'GET'});
      yield put({type:'save',payload:{data,page}});
    },
    * add({ payload:{ user } },{ call,put }){   //CREATE USER INFO
      const {data}=yield call(request,'/api/users',{ 
          body:JSON.stringify(user),
          method:'POST'
      });
      console.log(data)
      yield put({type:'reload'});
    },
    * patch({ payload:{ id,user } },{call,put}){  //UPDATE USER INFO
      const {data}=yield call(request,`/api/users?uid=${id}`,{
        body:JSON.stringify(user),
        method:'PATCH'
      });
      console.log(data)
      yield put({type:'reload'});
    },
    * remove({ payload:{id} },{call,put}){       //DELETE USER 
      const {data}=yield call(request,`/api/users?uid=${id}`,{
        method:'DELETE'
      });
      console.log(data)
      yield put({type:'reload'});
    },
    * reload(action,{put,select}){
      const page = yield select(state=>state.user.page);
      yield put({type:'query',payload:page})
    }
  },
  subscriptions:{
    setup({ dispatch,history }){
      console.log('running subscriptions ...');
      return history.listen(({ pathname,search })=>{ //
          console.log(`pathname: ${pathname}`);
          if(pathname==='/users'){
            dispatch({ type:'query'});
          }
      });
    }
  }
};


