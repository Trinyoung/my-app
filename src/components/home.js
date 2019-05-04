import React, { Component } from 'react';
// import {Form, Button, Navbar, Nav, NavDropdown, FormControl} from 'react-bootstrap';
import NavbarComponent from './nav';
import Broadside from './broadside';
import '../css/home.css';
export default class Home extends Component {
  render() {
    return (
      <div>
        <NavbarComponent/>
        <Broadside />
      </div>
    );
  }
}