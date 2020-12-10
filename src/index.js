import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import { createBrowserHistory as createHistory } from 'history'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const history: History = createHistory()
ReactDOM.render(
    <Router history={history} >
      <App />
    </Router>, document.getElementById('root')
);
reportWebVitals();
