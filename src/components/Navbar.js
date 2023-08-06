import React from 'react';
import { Navbar, Container, Nav, Image} from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* Brand Image */}
        <Navbar.Brand href="/">
          <img
            src="https://cinnamon.is/en/wp-content/uploads/sites/2/2020/04/CinnamonAI_1280x670.jpg" 
            alt="Brand Logo"
            height="60"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Profile Section */}
        <Nav className="ml-auto">
          <Nav.Link href="/profile">Profile</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
