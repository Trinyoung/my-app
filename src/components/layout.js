import React, { Component } from 'react';
import { Container, Row, Col, } from 'react-bootstrap';

import '../css/layout.css';
export default class Layout extends Component {
  render() {
    return (
      <Container className="fixed-top">
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    );
  }
}