import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ListGroup, Col } from 'react-bootstrap';

export default class Broadside extends Component {
  constructor() {
    super();
    this.names = ['望星辰大海', '观天下纵横']
  }
  numberList(names) {
    return (
      names.map(function (name) {
        return <ListGroup.Item as="li" active>{name}</ListGroup.Item>
      })
    );
  }
  render() {
    return (
      <ListGroup as="ul">
        {this.numberList(this.names)}
      </ListGroup>
    )
  }
}