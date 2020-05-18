import React, { Component } from 'react';
import {Container, Row, Col, Jumbotron} from 'react-bootstrap';
import NavbarComponent from './nav';
import Broadside from './broadside';
import '../css/home.css';
import Main from './main';
export default class Home extends Component {
  render() {
    return (
      <Jumbotron>
        <NavbarComponent/>
        <Container className="main-container" fluid={true}>
          <Row>
            <Col md={2} lg={2} sm={0} className='broadSide'><Broadside/></Col>
            <Col md={8} lg={8} sm={12}><Main/></Col>
            <Col md={2} lg={2} sm={0}></Col> 
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}