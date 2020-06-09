import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ListGroup, Col, Nav } from 'react-bootstrap';

export default class Broadside extends Component {
  constructor() {
    super();
    this.names = ['望星辰大海', '观天下纵横'];
    this.columns = ['first', 'second'];
  }
  numberList(names) {
    return (
      names.map(function(name){
        return <Nav.Item><Nav.Link eventKey={this.columns}>{name}</Nav.Link></Nav.Item>
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

{/* <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
              </Nav> */}