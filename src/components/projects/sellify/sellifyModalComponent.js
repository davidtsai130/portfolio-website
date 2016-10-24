import React, { Component } from 'react';
import { Modal } from 'react-bootstrap'
import SellifyCarousel from './sellifyCarouselComponent'


class SellifyComponent extends Component {

  render() {
    return (
      <div>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Sellify</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SellifyCarousel />
        </Modal.Body>
      </div>
    )
  }
}

export default SellifyComponent
