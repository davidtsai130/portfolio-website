import React, { Component } from 'react';
import { Modal } from 'react-bootstrap'
import MapMyRepoCarousel from './mapMyRepoCarouselComponent'

class MapMyRepoComponent extends Component {

  render() {
    return (
      <div>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Map My Repo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MapMyRepoCarousel />
        </Modal.Body>
      </div>
    )
  }
}

export default MapMyRepoComponent
