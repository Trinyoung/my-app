import React, { Component } from 'react';
import '../css/login.css';
import { Form, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.Login = this.Login.bind(this);
    // this.valueChange = this.valueChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  async Login() {
    console.log('登录操作开始');
    console.log(this.state.username, this.state.password);
    const body = Object.assign({}, this.state);
    // console.log
    axios.post('http://localhost:3000/login',body);
  }
  valueChange(field, event) {
    const options = {};
    options[field] = event.target.value;
    this.setState(options)
  }
  render() {
    return (
      <Form className="loginForm">
        <Table className='loginTable'>
          <tbody>
            <tr>
              <th colSpan="2" className="loginHead"><span>LOGIN</span></th>
            </tr>
            <tr>
              <td><Form.Label className="labeltitle">Account</Form.Label></td>
              <td><Form.Control type="email" placeholder="Enter account" value={this.state.username} onChange={this.valueChange.bind(this, 'username')}/></td>
            </tr>
            <tr>
              <td><Form.Label className="labeltitle">Password</Form.Label></td>
              <td><Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.valueChange.bind(this, 'password')}/></td>
            </tr>
            <tr>
              <td colSpan="2"><Form.Check type="checkbox" label="rememer password" /></td>
            </tr>
            <tr>
              <td className="formBottom" colSpan="2">
                <Button variant='primary' type='submit' className='button-left' onClick={this.Login}>Login</Button>
                <Link to="/register/"><Button variant="primary" type="submit" className="button-right">Register</Button></Link>
              </td>
            </tr>
          </tbody>
        </Table>
      </Form>
    );
  }
}