import React, { Component } from 'react';
import AboutComponent from '../components/aboutComponent'
import { Jumbotron } from 'react-bootstrap';

class AboutContainer extends Component {
  render() {
    return (
      <div>
        <div className="container container-margin">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <AboutComponent />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutContainer
