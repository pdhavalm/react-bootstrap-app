import React from "react";
import { LinkContainer } from "react-router-bootstrap";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Header = () => (
  <Navbar bg="light" expand="lg">
    <LinkContainer to="/">
      <Navbar.Brand>Logo</Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <NavDropdown title="Skills" id="basic-nav-dropdown">
          <LinkContainer to="/technical-design">
            <NavDropdown.Item>Technical Design</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/3d-modeling">
            <NavDropdown.Item>3D Modeling</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/photography">
            <NavDropdown.Item>Photography</NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
        <LinkContainer to="/about">
          <Nav.Link>About</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/contact">
          <Nav.Link>Contact</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
