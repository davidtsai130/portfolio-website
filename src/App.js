import React, { Component } from 'react';
import '../assets/css/style.css'
import NavBarContainer from './containers/navbarContainer'
import FooterContainer from './containers/footerContainer'
import LandingContainer from './containers/landingContainer'

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
