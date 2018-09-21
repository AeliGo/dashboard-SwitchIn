import request from '../../utils/request';
import {RecursiveTree,getParentId} from '../../utils/funtool'

export default {
    namespace: 'SideBarM',

    state: {
        collapsed:document.body.clientWidth<1280,
        sidebarTree:[],
        openKeys: [],
        recordKeys:[], //用于记录collapse之前的key值
        rootSubmenuKeys:[],
        defaultKey:'',
        
    },

    effects: {
        * getTreeData ({ payload }, { put, call, select }) {
            const {sidebarTree}=yield select(({SideBarM})=>SideBarM)
            if(sidebarTree.length>0){
                return 
            }else{
                const data = yield call(request,`/api/sidebarData`,{method:'GET'}); //fetch data     
                if( data && data.data.result===0){
                    let dataArr=data.data.data;
                    const key=dataArr.filter((item)=>{ //获取route的pathname对应的sidebar数据的id值作为defaultSelectedKeys
                        return item.url===payload.pathname
                    });
                    //Recurse data structure
                    dataArr=RecursiveTree({data:dataArr});
                    yield put({type:'updateState',payload:{
                        defaultKey:key[0].id,
                        sidebarTree:dataArr,
                        rootSubmenuKeys:getParentId(dataArr)
                    }});
                }
            }
        },
        * collapseSiderOrNot({payload},{put,select}){
            const data =yield (select(({dashboardM})=>dashboardM));
            const collapsed =document.body.clientWidth<1280;
            if(collapsed!==data.collapsed){
                yield put({type:'updateState',payload:{collapsed}})
            }
        }
    },
    reducers: {
        'updateState'(state,action){
            return {...state,...action.payload}
        },
    },
    subscriptions:{
        setupHistory ({ dispatch,history }){
          return history.listen(({ pathname,search })=>{ //
            if( /^(\/dashboard)/.test(pathname)){
                dispatch({type:'getTreeData',payload:{pathname}});
            }
          });
        },
        setup ({dispatch}){
            let timer;
            window.onresize=()=>{
                clearTimeout(timer);
                timer=setTimeout(()=>{
                    dispatch({type:'collapseSiderOrNot'})
                },300) //节流
            }
        }
    }

}