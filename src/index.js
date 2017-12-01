import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const gitHubRepoName = 'menuccc';

const domain = 'http://leog91.github.io';



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
