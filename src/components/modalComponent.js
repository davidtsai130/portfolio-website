import React, { Component }  from 'react'
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router'
import { Modal } from 'react-bootstrap'
import OnClickOutside from 'react-onclickoutside';

const modalComponent = OnClickOutside(React.createClass({
  getInitialState: function() {
    return {isOpen: this.props.isOpen};
  },

    handleClickOutside: function(instance) {
      browserHistory.push('/portfolio')
    },

  render() {
    return (
        <Modal bsSize="lg" show={this.state.isOpen}>
          <Modal.Body>
            <p><Link to={this.props.returnTo}>X</Link></p>
            {this.props.children}
          </Modal.Body>
        </Modal>
    )
  }
})
)
export default modalComponent;
