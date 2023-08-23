import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
const NavbarComponent = () => {
    return (
        <Navbar expand="lg" bg="light">
            <Container>
                {/* Brand Image */}
                <Navbar.Brand href="/">
                    <img
                        src="https://res.cloudinary.com/dtlqt9ufv/image/upload/v1692718607/Screenshot_2023-08-22_at_22.36.28_rf2qii.png"
                        width="120"
                        height="30"
                        className="d-inline-block align-top"
                        alt="logo"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/team">Team</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                {/* Profile Section */}
                <Nav className="ml-auto">
                    <Nav.Link href="/profile">Profile</Nav.Link>
                    <Dropdown as={NavItem}>
                        <Dropdown.Toggle as={NavLink}>User</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/login">
                                Login & Register
                            </Dropdown.Item>

                            <Dropdown.Item href="/logout">Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
