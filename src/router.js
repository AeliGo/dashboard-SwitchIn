import React from 'react';
import { Router, Route} from 'dva/router';
import IndexPage from 'routes/IndexPage';
import Users from 'components/users/users';
import Dashboard from 'pages/dashboard/dashboard'
import Analysis from 'components/analysis/analysis'

import Login from 'pages/login/login'

export default function({ history }) {
  return (
    <Router history={history}>
      <Route path="/"  exact component={Login} /> 
      <Route component={Dashboard}>
        <Route path="/dashboard" component={Analysis} />
        <Route path="/dashboard/users" component={Users} />
      </Route>
    </Router>
  );
};
