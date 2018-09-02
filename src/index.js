import './index.html';
import './index.css';
import dva from 'dva';
import productModel from './models/products'
import indexM from 'pages/login/loginM'
import dashboardM from 'pages/dashboard/dashboardM'
import sidebarM from 'components/sideBar/sidebarM'

// 1. Initialize
const app = dva();

// 2. Plugins
//app.use({});

// 3. Model
app.model(productModel);
app.model(indexM);
app.model(dashboardM);
app.model(sidebarM);

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
