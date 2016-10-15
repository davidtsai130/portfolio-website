import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

class PortfolioComponent extends Component {
  render() {
    return (
      <div>
        <h1> portfolio </h1>
        <Grid id="portfolio_list">
          <Row>
            <Col xs={12} sm={6} md={4} className="pitem">
              <Image className="portfolio_item" src={require('../../assets/img/portfolio/flatiron-go/image1.png')} />
            </Col>
            <Col xs={12} sm={6} md={4} className="pitem">
              <Image className="portfolio_item" src={require('../../assets/img/portfolio/mapmyrepo/image1.png')} />
            </Col>
            <Col xs={12} sm={6} md={4} className="pitem">
              <Image className="portfolio_item" src={require('../../assets/img/portfolio/sellify/image1.png')} />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default PortfolioComponent
