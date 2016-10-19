import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap'

class FlatironGoCarousel extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={require('../../../../assets/img/portfolio/flatiron-go/image1.png')}/>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={require('../../../../assets/img/portfolio/flatiron-go/image2.png')}/>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={require('../../../../assets/img/portfolio/flatiron-go/image3.png')}/>
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default FlatironGoCarousel
