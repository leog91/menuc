import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

const gitHubRepoName = 'menuccc';

const domain = 'http://leog91.github.io';

const store = createStore(reducer);


ReactDOM.render(
    <Provider store={store} >
        <App />
    </ Provider>,
    document.getElementById('root'));
registerServiceWorker();
