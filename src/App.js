import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login';
// import {Router, Route, Link} from 'react-router-dom'
// import {react-router} from 'react-router';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Login/>
         
          {/*<p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
      </div>
    );
  }
}

export default App;
