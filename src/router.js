import React from 'react';
import { Router, Route} from 'dva/router';
import IndexPage from './routes/IndexPage';
import Users from './routes/Users';
import Dashboard from 'pages/dashboard/dashboard'

import Login from 'pages/login/login'

export default function({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Login} />
      <Route path="/login"  exact component={Login} />
      <Route path="/users"  exact component={Users} />
      <Route path="/dashboard" component={Dashboard} />
    </Router>
  );
};
