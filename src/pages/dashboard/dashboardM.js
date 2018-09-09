
export default {
    namespace: 'dashboardM',

    state: {

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
       
          });
        }
    }

}