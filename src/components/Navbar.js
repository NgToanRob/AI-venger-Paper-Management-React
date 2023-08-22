// NavigationBar.js

import React, { useState, useEffect } from 'react'; 
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { isAuthenticated } from './auth'; // Import the isAuthenticated function
import API_BASE_URL from '../apiConfig';
import { useHistory } from 'react-router-dom';

const NavbarComponent = () => {
  // const userIsAuthenticated = isAuthenticated();
  const [userIsAuthenticated, setUserIsAuthenticated] = useState(false);
  const history = useHistory();
  useEffect(() => {
    const checkAuthentication = async () => {
      const authenticated = await isAuthenticated();
      setUserIsAuthenticated(authenticated);
    };

    checkAuthentication();
  }, []);
  console.log(userIsAuthenticated)
  const handleLogout = async () => {
    
    try {
      const response = await fetch(`${API_BASE_URL}auth/logout/`, {
        method: 'POST',
        credentials: 'include', // Send cookies with the request
      });

      if (response.ok) {
        history.push('/login')
        window.location.reload(); // Refresh the page to update the UI
      
      } else {
        console.error('Error logging out:', response.statusText);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }; 

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* Brand Image */}
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://cinnamon.is/en/wp-content/uploads/sites/2/2020/04/CinnamonAI_1280x670.jpg" 
            alt="Brand Logo"
            height="60"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Display the Home link only if the user is authenticated */}
            {userIsAuthenticated && (
              <Nav.Link as={Link} to="/">Home</Nav.Link>
            )}
            {/* Display the Link to ChatPaper only if the user is authenticated */}
            {userIsAuthenticated && (
              <Nav.Link as={Link} to="/chatpaper">ChatPaper</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>

        {/* Profile Section */}
        <Nav className="ml-auto">
          {/* Display the Link to Profile and Logout if the user is authenticated */}
          {userIsAuthenticated ? (
            <>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </>
          ) : (
            // Display the Link to Login if the user is not authenticated
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
