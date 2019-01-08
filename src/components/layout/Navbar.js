import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse
} from 'mdbreact'

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
      <Navbar dark expand="md">
        <NavbarBrand>
          <Link to="/">
            <img src={require('../../assets/img/dtlogo.png')} alt="" />
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleCollapse} />
        <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <NavbarNav right>
            <NavItem>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact">Contact</NavLink>
            </NavItem>
          </NavbarNav>
        </Collapse>
      </Navbar>
    )
  }
}

export default Navbar1
