import React, { Component } from 'react';
// import {Form, Button, Navbar, Nav, NavDropdown, FormControl} from 'react-bootstrap';
import NavbarComponent from './nav';
export default class Home extends Component {
  render() {
    return (
      <div className="nav-container">
        <NavbarComponent/>
      </div> 
    );
  }
}