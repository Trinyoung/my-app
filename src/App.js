import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import Layout from './components/layout';
// import AppRouter from './AppRouter';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <AppRouter/> */}
          <Route path='/index' component={Home}/>
          <Route path='/layout' component={Layout}/>
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Route path='/login' component={Login}/>
            <Route exact path='/register/' component={Register}/>
            
          </header> */}
        </div>
      </Router>
    );
  }
}

export default App;
