import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import AppRouter from './AppRouter';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
// console.log(RouterClass);
// ReactDOM.render(<App/>, document.getElementById('root'));
// ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(
  <Router>
    <Route path="/" component={App}></Route>
  </Router>,
  document.getElementById('root')
);
serviceWorker.unregister();
