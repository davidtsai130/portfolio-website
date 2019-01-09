import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Navbar, Nav, NavItem } from 'react-bootstrap'

class Navbar1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  toggleCollapse = () => this.setState({ isOpen: !this.state.isOpen })

  render() {
    return (
      <Navbar className="container" collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <img src={require('../../assets/img/dtlogo.png')} alt="" />
            </Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Toggle className="top-right" />
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem>
              <Link to="/portfolio">Portfolio</Link>
            </NavItem>
            <NavItem>
              <Link to="/about">About</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact">Contact</Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navbar1
