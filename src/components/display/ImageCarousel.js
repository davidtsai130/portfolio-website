import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import { PROJECTS } from '../../constants/projects'

class ImageCarousel extends Component {
  get renderImages() {
    const project = PROJECTS.filter(
      project => project.pathName === this.props.pathName
    )
    return project[0].images.map((image, i) => (
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src={image} />
      </Carousel.Item>
    ))
  }

  render() {
    return (
      <div className="carousel">
        <Carousel>{this.renderImages}</Carousel>
      </div>
    )
  }
}
export default ImageCarousel
