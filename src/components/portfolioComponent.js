import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router'

class PortfolioComponent extends Component {
  render() {
    return (
      <div>
        <h1> portfolio </h1>
        <Grid id="portfolio_list">
          <Row>
        {/* Flatiron-Go */}
            <Col xs={12} sm={6} md={6} lg={6} className="pitem">
              <div className="hovereffect">
                <Image className="portfolio_item" src={require('../../assets/img/portfolio/flatiron-go/image1.png')} />
                <div className="overlay">
                    <h2>Flatiron Go</h2>

                    <Link to={{
                    pathname: `portfolio/flatiron-go`,
                    state: { modal: true, returnTo: this.props.location.pathname }
                    }}
                    className="btn btn-md btn-primary">Images</Link>
                    
          				<p>
          					<a href="https://github.com/gracejuster/flatiron-go" target="_blank">Github Repository </a>
          				</p>
                </div>
              </div>
            </Col>

        {/* MapMyRepo */}
            <Col xs={12} sm={6} md={6} lg={6} className="pitem">
              <div className="hovereffect">
                <Image className="portfolio_item" src={require('../../assets/img/portfolio/mapmyrepo/image1.png')} />
                <div className="overlay">
                    <h2>Map My Repo</h2>

                    <Link to={{
                    pathname: `portfolio/mapmyrepo`,
                    state: { modal: true, returnTo: this.props.location.pathname }
                    }}
                    className="btn btn-md btn-primary">Images</Link>

                  <p>
                    <a href="https://github.com/greatermeans/mapmyrepo" target="_blank">Github Repository </a>
                  </p>
                </div>
              </div>
            </Col>

        {/* Sellify */}
            <Col xs={12} sm={6} md={6} lg={6} className="pitem">
              <div className="hovereffect">
                <Image className="portfolio_item" src={require('../../assets/img/portfolio/sellify/image1.png')} />
                <div className="overlay">
                    <h2>Sellify</h2>

                    <Link to={{
                    pathname: `portfolio/sellify`,
                    state: { modal: true, returnTo: this.props.location.pathname }
                    }}
                    className="btn btn-md btn-primary">Images</Link>

                  <p>
                    <a href="https://github.com/greatermeans/sellify" target="_blank">Github Repository </a>
                  </p>
                </div>
              </div>
            </Col>

          </Row>
        </Grid>
      </div>
    )
  }
}

export default PortfolioComponent
