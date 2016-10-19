import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap'

class SellifyCarousel extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={require('../../../../assets/img/portfolio/sellify/image1.png')}/>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={require('../../../../assets/img/portfolio/sellify/image2.png')}/>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={require('../../../../assets/img/portfolio/sellify/image3.png')}/>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={require('../../../../assets/img/portfolio/sellify/image4.png')}/>
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default SellifyCarousel
