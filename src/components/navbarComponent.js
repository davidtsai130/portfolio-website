import React, { Component } from 'react';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, NavItem } from 'react-bootstrap';

class NavBarComponent extends Component {
  render() {
    return (
    <div>
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'><img src={require('../../assets/img/dtlogo.png')} /></Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav className="navbar-right">
            <LinkContainer to="/portfolio">
              <NavItem>Portfolio</NavItem>
            </LinkContainer>
            <LinkContainer to="/about">
              <NavItem>About</NavItem>
            </LinkContainer>
            <LinkContainer to="/contact">
              <NavItem>Contact</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    )
  }
}

export default NavBarComponent
