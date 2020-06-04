import React, { Component } from 'react';
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
          <Route path='/home' component={Home}/>
          <Route path='/layout' component={Layout}/>
          <header className="App-header">
            <Route path='/login' component={Login}/>
            <Route exact path='/register/' component={Register}/>
            
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
