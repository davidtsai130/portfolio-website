import React, { Component } from 'react';
import ContactComponent from '../components/contactComponent'
import { Jumbotron } from 'react-bootstrap';

class ContactContainer extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
            <Jumbotron style={{backgroundColor : "white"}}>
              <ContactComponent />
            </Jumbotron>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactContainer
