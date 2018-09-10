
export default {
    namespace: 'dashboardM',

    state: {
        entryLoading:true
    },

    effects: {
       
    },
    reducers: {
        'updateState'(state,action){
            return {...state,...action.payload}
        },
    },
    subscriptions:{
        setup({ dispatch,history }){
          return history.listen(({ pathname,search })=>{ //
            if(/^\/dashboard/.test(pathname)){
                setTimeout(()=>{
                    dispatch({
                        type:'updateState',payload:{
                            entryLoading:false
                        }
                    });
                },1000)
            }
          });
        }
    }

}