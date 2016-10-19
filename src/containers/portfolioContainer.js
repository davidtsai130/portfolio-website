import React, { Component } from 'react';
import Modal from '../components/modalComponent'
import { browserHistory } from 'react-router'

class PortfolioContainer extends Component {

  componentWillReceiveProps(nextProps) {
    // if we changed routes...
    if ((
      nextProps.location.key !== this.props.location.key &&
      nextProps.location.state &&
      nextProps.location.state.modal
    )) {
      // save the old children (just like animation)
      this.previousChildren = this.props.children
    }
  }

  render() {
    let { location } = this.props

    let isModal = (
      location.state &&
      location.state.modal &&
      this.previousChildren
    )
    return (
      <div className="container container-margin">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">

              {isModal ?
                this.previousChildren :
                this.props.children
              }

              {isModal && (
                <Modal isOpen={true} returnTo={location.state.returnTo}>
                  {this.props.children}
                </Modal>
              )}

          </div>
        </div>
      </div>
    )
  }
}

export default PortfolioContainer
