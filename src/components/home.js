import React, { Component } from 'react';
import {Container, Row, Col, Jumbotron} from 'react-bootstrap';
import NavbarComponent from './nav';
import Broadside from './broadside';
import '../css/home.css';
import Main from './main';
export default class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      width: 0
    }
  }
  updateWidth(){
    
  }
  componentWillMount() {
    
  }
  componentDidMount() {
    console.log(this.refs.broadsideContainer.clientWidth, 'lalalla');
    // this.setState({
    //   width: this.refs.broadsideContainer.clientWidth
    // });
    // console.log(this.state.width, '--------------->');
  }
  componentWillUpdate(){
    // this.setState({
    //   width: this.refs.broadsideContainer.clientWidth
    // })
  }
  render() {
    return (
      <Jumbotron>
        <NavbarComponent/>
        <Container className="main-container" fluid={true}>
          <Row>
            <Col md={2} lg={2} sm={0} className='broadside-container' ref='broadsideContainer'><Broadside width1={this.state.width}/></Col>
            <Col md={8} lg={8} sm={12}><Main/></Col>
            <Col md={2} lg={2} sm={0}></Col> 
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}