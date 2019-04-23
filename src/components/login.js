import React, { Component } from 'react';
import '../css/login.css';
import {Form, Button} from 'react-bootstrap'
// import 
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      // <div className="login-container">
        <Form className="loginForm">
          <table>
            <tbody>
              <tr>
                <th  colSpan="2"  className="loginHead"><span>LOGIN</span></th>
              </tr>
              <tr>
                <td><Form.Label className="labeltitle">Account</Form.Label></td>
                <td><Form.Control type="email" placeholder="Enter account" /></td>
              </tr>
              <tr>
                <td><Form.Label className="labeltitle">Password</Form.Label></td>
                <td><Form.Control type="password" placeholder="Password" /></td>
              </tr>
              <tr>
                <td colSpan="2"><Form.Check type="checkbox" label="rememer password" /></td>
              </tr>
              <tr>
                <td className="formBottom" colSpan="2">
                  <Button variant="primary" type="submit" className="button-left">Login</Button>
                  <Button variant="primary" type="submit" className="button-right">Register</Button>
                </td>
              </tr>
            </tbody>
            
          </table>  
      </Form>
      // </div>
    );
  }
}