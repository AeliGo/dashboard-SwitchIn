import './index.html';
import './index.css';
import dva from 'dva';
import loginM from 'pages/login/loginM'
import dashboardM from 'pages/dashboard/dashboardM'
import sidebarM from 'components/sideBar/sidebarM'
import usersM from 'components/users/usersM';

// 1. Initialize
const app = dva();

// 2. Plugins
//app.use({});

// 3. Model
app.model(usersM);
app.model(loginM);
app.model(dashboardM);
app.model(sidebarM);

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
