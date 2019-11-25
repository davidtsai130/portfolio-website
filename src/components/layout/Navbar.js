import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Navbar as BootstrapNavbar, Nav, NavItem } from 'react-bootstrap'

const Navbar = () => (
  <BootstrapNavbar className="container" collapseOnSelect>
    <BootstrapNavbar.Header>
      <BootstrapNavbar.Brand>
        <Link to="/">
          <img src={require('../../assets/img/dtlogo.png')} alt="" />
        </Link>
      </BootstrapNavbar.Brand>
    </BootstrapNavbar.Header>
    <BootstrapNavbar.Toggle className="top-right" />
    <BootstrapNavbar.Collapse>
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
    </BootstrapNavbar.Collapse>
  </BootstrapNavbar>
)

export default Navbar
