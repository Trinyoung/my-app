import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

export default class Broadside extends Component {
  constructor (){
    super();
    this.names = ['望星辰大海', '观天下纵横']
  }
  numberList(names){
    return (
      names.map(function(name){
        return <ListGroup.Item as="div"  className="numberList-item">{name}</ListGroup.Item>
      })
    );
  }
  render() {
    return (
      <ListGroup className= "broadside-container">
        {/* <ListGroup as="div"> */}
          {this.numberList(this.names)}
        {/* </ListGroup> */}
      </ListGroup>
    )
  }
}