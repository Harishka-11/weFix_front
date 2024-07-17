import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png';



const AppHeader = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <img src={logo} width="50" height="50" className="logo"  alt="Your Logo"  />
        <Navbar.Brand href="#home">WeFix</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"> Home  </Nav.Link>
            <Nav.Link href="#about"> About  </Nav.Link>
            <Nav.Link href="#services">Services </Nav.Link>
            <Nav.Link href="#contact"> Contact  </Nav.Link>
            </Nav>
            


         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppHeader