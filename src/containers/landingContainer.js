import React, { Component } from 'react';
import LandingComponent from '../components/landingComponent'
import { Jumbotron } from 'react-bootstrap';

class LandingContainer extends Component {
  render() {
    return (
    <div>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <LandingComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default LandingContainer
