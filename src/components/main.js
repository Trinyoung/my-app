import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MyEditor from './editor';
import ForEditor from './for_editor';

export default class Main extends Component {
  constructor() {
    super();
    this.names = ['望星辰大海', '观天下纵横'];
    this.state = {
      value: ''
    };
  }
  handleChange() {
    this.setState({
      
    });
  }
  render() {
    const { value } = this.state;
    return (
      <Container className='body-container'>
        <MyEditor/>
        <ForEditor/>
      </Container>
    )
  }
}