import React, { Component } from 'react';
import { Modal } from 'react-bootstrap'
import FlatironGoCarousel from './flatironGoCarouselComponent'

class FlatironGoComponent extends Component {

  render() {
    return (
      <div>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-lg">Flatiron Go</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FlatironGoCarousel />
      </Modal.Body>
      </div>
    )
  }
}

export default FlatironGoComponent
