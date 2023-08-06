import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestedInfo, setSuggestedInfo] = useState('');

  const handleSearch = () => {
    // Implement search logic here based on the searchQuery
    // For this example, we'll just set some dummy suggested information.
    const dummySuggestedInfo = `Suggested information for: ${searchQuery}`;
    setSuggestedInfo(dummySuggestedInfo);
  };

  return (
    <Container>
      <h2 className="my-4">Home</h2>
      <Row>
        {/* Left Section - Search Engine */}
        <Col md={6}>
          <Form>
            <Form.Group controlId="formBasicSearch">
              <Form.Control
                type="text"
                placeholder="Enter your search query"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleSearch}>
              Search
            </Button>
          </Form>
        </Col>

        {/* Right Section - Suggested Information */}
        <Col md={6}>
          <div className="suggested-info">
            <h4>Suggested Information</h4>
            <p>{suggestedInfo}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
