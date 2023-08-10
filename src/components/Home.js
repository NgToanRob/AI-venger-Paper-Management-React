import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import API_BASE_URL from '../apiConfig'; 
import './Home.css'; // Import your custom CSS for styling
import { Link } from 'react-router-dom';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestedInfo, setSuggestedInfo] = useState([]);
  const [recommendedPapers, setRecommendedPapers] = useState([]);
  // const [relatedKeywords, setRelatedKeywords] = useState([]); 

  const handleSearch = () => {
    // Make the API request using Fetch API
    fetch(`${API_BASE_URL}search/api/search/?query=${searchQuery}`)
      .then(response => response.json())
      .then(data => {
        // Update the suggestedInfo state with the search results
        setSuggestedInfo(data);
      })
      .catch(error => {
        console.error('Error fetching suggested information:', error);
      });
  };

  useEffect(() => {
    // Fetch recommended papers based on search history
    fetch(`${API_BASE_URL}/search/api/recommended/`)
      .then(response => response.json())
      .then(data => {
        setRecommendedPapers(data);
      })
      .catch(error => {
        console.error('Error fetching recommended papers:', error);
      });

    // fetch(`${API_BASE_URL}/search/api/history/`)
    //   .then(response => response.json())
    //   .then(data => {
    //     // Extract the related keywords from search history and set them in state
    //     const relatedKeywords = data.map(item => item.query);
    //     setRelatedKeywords(relatedKeywords);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching search history:', error);
    //   });

  }, []);

  return (
    <Container className="home-container">
    <h2 className="my-4">Paper Search Engine</h2>
    <Row>
      {/* Left Section - Search Engine */}
      <Col md={6}>
        <Form>
          <Form.Group controlId="formBasicSearch" className="d-flex align-items-center mb-3">
            <Form.Control
              type="text"
              placeholder="Enter your search query"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="ml-2">
              <Button variant="primary" onClick={handleSearch}>
                Search
              </Button>
            </div>
          </Form.Group>

        </Form>
        {/* Display search results in the left section */}
        <div className="search-results mt-2">
          {suggestedInfo.map((result, index) => (
            <div key={index} className="result-card">
              <Link to={`/chatpaper}`} className="plain-link">
                <h5>
                  {result.title
                    .split(" ")
                    .map((word, index) => (
                      <span
                        key={index}
                        className={word.toLowerCase() === searchQuery.toLowerCase() ? "highlight" : ""}
                      >
                        {word}{" "}
                      </span>
                    ))}
                </h5>
                <p>Authors: {result.authors}</p>
                <p>
                  {result.abstract
                    .split(" ")
                    .map((word, index) => (
                      <span
                        key={index}
                        className={word.toLowerCase() === searchQuery.toLowerCase() ? "highlight" : ""}
                      >
                        {word}{" "}
                      </span>
                    ))}
                </p>
                <p>URL: <a href={result.url} target="_blank" rel="noopener noreferrer">{result.url}</a></p>
                <p>Published Date: {result.published_date}</p>
              </Link>
            </div>
          ))}
        </div>
      </Col>

      {/* Right Section - Recommended Papers */}
      <Col md={6}>
        <div className="recommended-papers">
          <h4>Recommended Papers</h4>
          <ul>
            {recommendedPapers.map(paper => (
              <li key={paper.arxiv_id} className="recommended-paper">
                <p>{paper.title}</p>
                <p>{paper.authors}</p>
                <p><a href={paper.url} target="_blank" rel="noopener noreferrer">{paper.url}</a></p>
                <p>{paper.published_date}</p>
                <p>Related Keywords: {paper.related}</p>
              </li>
            ))}
          </ul>
        </div> 
      </Col>
    </Row>
  </Container>

  );
};

export default Home;
