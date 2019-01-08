// import React from 'react'
// import { Modal } from 'react-bootstrap'
// import OnClickOutside from 'react-onclickoutside'
// import createReactClass from 'create-react-class'

// const modalComponent = OnClickOutside(
//   React.createReactClass({
//     getInitialState: function() {
//       return { isOpen: this.props.isOpen }
//     },

//     handleClickOutside: function(instance) {
//       /* CHROME */
//       if (!!window.chrome) {
//         if (
//           instance.path[1].className !== 'carousel slide' &&
//           instance.path[3].className !== 'modal-content' &&
//           instance.path[5].className !== 'modal-content' &&
//           instance.path[6].className !== 'modal-content'
//         ) {
//         }
//       } else if (typeof InstallTrigger !== 'undefined') {
//         /* FIREFOX */
//         if (
//           instance.target.className === 'close' ||
//           instance.target.className === 'modal-lg modal-dialog' ||
//           instance.target.className === 'fade in modal'
//         ) {
//         }
//       }
//     },

//     render() {
//       return (
//         <Modal bsSize="lg" show={this.state.isOpen}>
//           {this.props.children}
//         </Modal>
//       )
//     }
//   })
// )
// export default modalComponent
