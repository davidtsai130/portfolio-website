import React, { Component } from 'react';
import { Image } from 'react-bootstrap'

class FlatironGoComponent extends Component {
  render() {
    return(
      <div>
        <Image className="portfolio_item" src={require('../../../../assets/img/portfolio/flatiron-go/image1.png')} onMouseOver={this.props.handleMouseOver} onMouseOut={this.props.handleMouseOut}/>
      </div>
    )
  }
}

export default FlatironGoComponent
