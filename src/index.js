import './index.css';
import dva from 'dva';

// 1. Initialize
const app = dva();

// 2. Plugins
//app.use({});


// 3. Model
app.model(require('./pages/login/loginM').default);
app.model(require('./pages/dashboard/dashboardM').default);
app.model(require('./components/sideBar/sidebarM').default);
app.model(require('./components/users/usersM').default);
app.model(require('./components/analysis/analysisM').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');