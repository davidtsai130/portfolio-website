import React, { Component } from 'react';
import AboutComponent from '../components/aboutComponent'
import { Jumbotron } from 'react-bootstrap';

class AboutContainer extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
            <Jumbotron style={{backgroundColor : "white"}}>
              <AboutComponent />
            </Jumbotron>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutContainer
