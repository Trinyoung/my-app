import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

export default class Broadside extends Component {
  constructor() {
    super();
    this.names = ['望星辰大海', '观天下纵横'];
    this.columns = ['first', 'second'];
  }
  numberList(names) {
    const columns = this.columns;
    return (
      names.map(function(name, index){
        return <Nav.Item key={index}><Nav.Link eventKey={columns}>{name}</Nav.Link></Nav.Item>
      })
    );
  }
  render() {
    return (
      <Nav variant='pills' className='flex-column'> 
        {this.numberList(this.names)}
      </Nav>
    )
  }
}