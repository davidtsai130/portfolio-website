import React, { Component } from 'react';
import ContactComponent from '../components/contactComponent'
import { Jumbotron } from 'react-bootstrap';

class ContactContainer extends Component {
  render() {
    return (
      <div>
        <div className="container container-margin">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <ContactComponent />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactContainer
