import React, { Component } from 'react';
import { Row, Col, Nav, Tab } from 'react-bootstrap';
import NavbarComponent from './nav';
import Broadside from './broadside';
import '../css/home.css';
import Main from './main';
export default class Home extends Component {
  render() {
    return (
      <div className='all-container'>
        <NavbarComponent />
        <Tab.Container id="left-tabs" defaultActiveKey="first">
          <Row className='left-tabs'>
            <Col sm={3}>
              <Broadside/>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Main/>
                {/* <Tab.Pane eventKey="first">
                  大蛇兜发送到发斯蒂芬
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  00000阿斯顿发送到发送到发
                </Tab.Pane> */}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}