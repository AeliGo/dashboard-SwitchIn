import {getAnalysisDataList} from '../../services/remoteData'

export default {
    namespace: 'analysisM',

    state: {
        loading:false,
        numbers:[],
        salesSummary:{},
        projectsData:[]
    },

    effects: {
       * getAnalysisData({payload},{select,put,call}){
            yield put({type:'updateState',payload:{loading:true}})
            const {data} = yield call(getAnalysisDataList)
            yield put({type:'updateState',payload:data})
            yield put({type:'updateState',payload:{loading:false}})
        }
    },
    reducers: {
        'updateState'(state,action){
            return {...state,...action.payload}
        },
    },
    subscriptions:{
        setup({ dispatch,history }){
          return history.listen(({ pathname,search })=>{ //
            if(pathname==='/dashboard/analysis'){
                dispatch({type:'getAnalysisData'})
            }
          });
        }
    }

}