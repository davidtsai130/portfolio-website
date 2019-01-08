import React, { Component } from 'react'
import Landing from '../components/Landing'

class LandingContainer extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="container container-margin">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <Landing />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingContainer
