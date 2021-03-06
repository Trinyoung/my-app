import React, { Component } from 'react';
import {Form, Button, Navbar, Nav, NavDropdown, FormControl} from 'react-bootstrap';

export default class NavbarComponent extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg" className="fixed-top">
          <Navbar.Brand href="#home">Trinyoung</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/layout">Layout</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
              <NavDropdown title="Login" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">UserInfo</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Setting</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Sign out</NavDropdown.Item>
              </NavDropdown>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}