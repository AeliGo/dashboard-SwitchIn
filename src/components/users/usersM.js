import {message} from 'antd'
import {
    getUsersListTableData, editUsersListData, savaUserListData, deleteUserListData
} from 'services/remoteData'


export default {
    namespace: 'usersM',
    state:{
        loading: false,

        tableData: [],
        currentPage: 1,
        pageSize: 10,
        totalItems: 0,
        selectedRowKeys: [],
        searchForm: {}, 
        //新增，修改 字段
        newItem: {
        visible: false,
        loading: false,
    },
  },
  subscriptions:{
    setup({ dispatch,history }){
        return history.listen(({ pathname,search })=>{ //
            if(pathname==='/dashboard/users'){
                dispatch({ type:'getTableData'});
            }
        });
    }
  },
  
  effects: {
    * getTableData({ payload},{call, put, select}){    //FETCH USER LIST WITH PAGESIZE AND TOTAL PAGES
        yield put({type:'updateState', payload:{ loading:true } });
        const state = yield select(({usersM})=>usersM);
        const { searchForm } = state
        const {
            currentPage = state.currentPage,
            pageSize = state.pageSize
        } = payload || {};
        let _form = {...searchForm}
        const {data}= yield call(getUsersListTableData, {
            ..._form,
            currentPage,
            pageSize
        });
        if(data && data.result==0){
            yield put({
                type: 'updateState', payload: {
                    currentPage,
                    pageSize,
                    totalItems: data.totalItems,
                    selectedRowKeys: [],
                    tableData: data.data.map((item) => {
                        return {
                            ...item,
                            key: item.id,
                        }
                    }),
                }
            });
        }
        yield put({
            type: 'updateState', payload: {
                loading: false
            }
		});
    },
    //新增，修改调用接口
	*saveData({ payload }, { call, put, select }) {
        const state = yield select(({ usersM }) => usersM);
        yield put({
            type: 'updateState', payload: {
                loading: true
            }
        });
        let _newItem = { ...state.newItem };
        // 清除多余属性 
        delete _newItem.visible;
        delete _newItem.loading;
        const {data} = yield call(_newItem.id ? editUsersListData : savaUserListData, {
            ..._newItem,
        });
        if (data && data.result == 0) {
            yield put({ type: 'getTableData' });
            message.success(_newItem.id ? (data.msg || '修改成功') : (data.msg || '新增成功'), 2);
            yield put({
                type: 'updateStateNewItem', payload: {
                    visible: false,
                }
            });
            yield put({
                type: 'clearNewItem',
            });
        }
        yield put({
            type: 'updateState', payload: {
                loading: false,
            }
        });
    },

    *deleteData({ payload }, { call, put, select }) {
        const { id = null, ids = [] } = payload;
        const {data} = yield call(deleteUserListData, {
            ids: id || ids.join(','),
        });
        if (data && data.result == 0) {
            yield put({ type: 'getTableData' });
            message.success(data.msg || '删除成功', 2);
        }
	},
},

  reducers: {
    updateState(state, action){
      return {...state,...action.payload}
    },
    updateStateSearchForm(state, action){
      return {
        ...state,
        searchForm:{
          ...state.searchForm,
          ...action.payload
        }
      }
    },
    clearSearchForm(state, action){
      return {
        ...state,
        searchForm:{}
      }
    },
    updateStateNewItem(state, action){
      return {
        ...state,
        newItem:{
          ...state.newItem,
          ...action.payload
        }
      }
    },
    clearNewItem(state, action){
      return {
        ...state,
        newItem:{
          visible: state.newItem.visible,
          loading: false
        }
      }
    }
  }
};


