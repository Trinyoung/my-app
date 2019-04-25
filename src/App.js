import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import AppRouter from './AppRouter';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <AppRouter/> */}
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Route path='/login' component={Login}/>
            <Route exact path='/register/' component={Register}/>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
