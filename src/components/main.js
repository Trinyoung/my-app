import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MyEditor from './editor';

export default class Main extends Component {
  constructor (){
    super();
    this.names = ['望星辰大海', '观天下纵横']
  }
  
  render() {
    return (
      <Container className='body-container'>
        <MyEditor/>
      </Container>
    )
  }
}