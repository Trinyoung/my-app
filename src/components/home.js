import React, { Component } from 'react';
import {Container,Row, Col} from 'react-bootstrap';
import NavbarComponent from './nav';
import Broadside from './broadside';
import '../css/home.css';
export default class Home extends Component {
  render() {
    return (
      <div>
        <NavbarComponent/>
        <div className="head-container"></div>
        <Container fluid = {true}>
          <Container fluid = {true} >
            <Row>
              <Col md={2} className="left-side">
                <Broadside/>
              </Col>
              <Col md={7} className="main-body">
                  this is main
              </Col>
              <Col md={3} className="right-side">
                  this is right
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    );
  }
}