import React, { Component } from 'react';
import PortfolioComponent from '../components/portfolioComponent'
import { Jumbotron } from 'react-bootstrap';

class PortfolioContainer extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
            <Jumbotron style={{backgroundColor : "white"}}>
              <PortfolioComponent />
            </Jumbotron>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PortfolioContainer
