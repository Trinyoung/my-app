import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

export default class Broadside extends Component {
  constructor() {
    super();
    this.names = ['望星辰大海', '观天下纵横']
  }
  numberList(names) {
    return (
      names.map(function (name, index) {
        return <ListGroup.Item as="div" key={index}>{name}</ListGroup.Item>
      })
    );
  }
  render() {
    return (
      <ListGroup>
        {this.numberList(this.names)}
      </ListGroup>
    )
  }
}