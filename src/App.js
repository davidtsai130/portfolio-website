import React, { Component } from 'react';
import '../assets/css/style.css'
import '../assets/font-awesome-4.6.3/css/font-awesome.min.css'
import NavBarContainer from './containers/navbarContainer'
import FooterContainer from './containers/footerContainer'

class App extends Component {

  render() {
    return (
      <div>
      <NavBarContainer />
      {this.props.children}
      <FooterContainer />
      </div>
    );
  }
}

export default App;
