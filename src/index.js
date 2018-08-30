import './index.html';
import './index.css';
import dva from 'dva';
import productModel from './models/products'
import indexM from 'pages/login/model'

// 1. Initialize
const app = dva();

// 2. Plugins
//app.use({});

// 3. Model
app.model(productModel);
app.model(indexM);

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
