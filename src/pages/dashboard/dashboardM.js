
export default {
    namespace: 'dashboardM',

    state: {
        entryLoading: true,
        collapseSiderFlag:document.body.clientWidth < 1000,
        fullScreen: localStorage.getItem('fullScreen') === 'true',
        breadcrumbPath:null
    },

    effects: {
       
    },
    reducers: {
        'updateState'(state,action){
            return {...state,...action.payload}
        },
        'switchFullScreen'(state,action){
            localStorage.setItem('fullScreen',action.payload.fullScreen);
            return {...state,...action.payload}
        },
    },
    subscriptions:{
        setupHistory ({ dispatch,history }){
            return history.listen(({ pathname,search })=>{ //

                if(/^\/dashboard/.test(pathname)){
                    setTimeout(()=>{
                        dispatch({
                            type:'updateState',
                            payload:{
                                entryLoading:false,
                                breadcrumbPath:pathname
                            }
                        });
                    },1000);
                }
            });
        },
        
    }

}