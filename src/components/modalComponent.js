import React from 'react'
import { browserHistory } from 'react-router'
import { Modal } from 'react-bootstrap'
import OnClickOutside from 'react-onclickoutside';

const modalComponent = OnClickOutside(React.createClass({
  getInitialState: function() {
    return {isOpen: this.props.isOpen};
  },

    handleClickOutside: function(instance) {
      if (instance.path[1].className !== 'carousel slide' && instance.path[3].className !== 'modal-content' && instance.path[5].className !== 'modal-content' && instance.path[6].className !== 'modal-content') {
        browserHistory.push('/portfolio')
      }
    },

  render() {
    return (
        <Modal bsSize="lg" show={this.state.isOpen}>
          {this.props.children}
        </Modal>
    )
  }
})
)
export default modalComponent;
