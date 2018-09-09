
import Dashboard from './pages/dashboard/dashboard';
import Login from './pages/login/login';
import React from 'react';
import {  Route, Switch, HashRouter } from 'dva/router';

const RouterConfig = () =>{
  return (
    <HashRouter>
        <Switch>
          <Route path="/"  exact component={Login} /> 
          <Route path='/dashboard' component={Dashboard}/>
        </Switch>
    </HashRouter>
  );
}

export default RouterConfig;