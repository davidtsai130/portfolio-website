import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap'

class MapMyRepoCarousel extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={require('../../../../assets/img/portfolio/mapmyrepo/image1.png')}/>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={require('../../../../assets/img/portfolio/mapmyrepo/image2.png')}/>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={require('../../../../assets/img/portfolio/mapmyrepo/image3.png')}/>
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default MapMyRepoCarousel
