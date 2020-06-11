import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

export default class Broadside extends Component {
  constructor(props) {
    super(props);
    this.names = ['望星辰大海', '观天下纵横'];
    console.log(this.props.width1, '-子元素宽度---');
  }

  numberList(names) {
    return (
      names.map(function (name, index) {
        return <ListGroup.Item as="div" key={index}>{name}</ListGroup.Item>
      })
    );
  }
  componentDidMount() {
    console.log(this.refs.list.clientWidth, '子元素的宽度');
  }
  render() {
    return (
      <ListGroup className='broadSide' ref='list'>
        {this.numberList(this.names)}
      </ListGroup>
    )
  }
}