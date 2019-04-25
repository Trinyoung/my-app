import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

export default class Broadside extends Component {
  render() {
    return (
      <div className="broadside">
        <ListGroup as="ul">
          <ListGroup.Item as="li" active>
            Cras justo odio
          </ListGroup.Item>
          <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item as="li" disabled>
            Morbi leo risus
          </ListGroup.Item>
          <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>

          <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
        </ListGroup>;
      </div>
    )
  }
}