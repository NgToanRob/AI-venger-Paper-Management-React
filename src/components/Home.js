import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import API_BASE_URL from "../apiConfig";
import "./Home.css"; // Import your custom CSS for styling
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [recommendedPapers, setRecommendedPapers] = useState([]);
    const history = useHistory();
    const handleChat = (id) => {
        history.push(`/chatpaper/${id}`);
        window.location.reload();
    };

    const handleSearch = async () => {
        try {
            const response = await fetch(
                `${API_BASE_URL}home/api/search/?query=${searchQuery}`,
                {
                    credentials: "include", // Send cookies with the request
                }
            );

            if (response.ok) {
                const responseData = await response.json();
                setSearchResults(responseData); // Update the searchResults state with the received data
            } else {
                console.error(
                    "Error fetching suggested information:",
                    response.statusText
                );
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(
                    `${API_BASE_URL}home/api/recommended/`,
                    {
                        method: "GET", // This is a GET request
                        credentials: "include", // Include cookies in the request
                    }
                );

                if (response.ok) {
                    const data = await response.json();
                    setRecommendedPapers(data);
                } else {
                    console.error(
                        "Error fetching recommended papers:",
                        response.statusText
                    );
                }
            } catch (error) {
                console.error("An error occurred:", error);
            }
        })(); // Immediately invoke the async function
    }, []);

    return (
        <Container className="home-container">
            <h2 className="my-4">Paper Search Engine</h2>
            <Row>
                {/* Left Section - Search Engine */}
                <Col md={6}>
                    <Form>
                        <Form.Group
                            controlId="formBasicSearch"
                            className="d-flex align-items-center mb-3"
                        >
                            <Form.Control
                                type="text"
                                placeholder="Enter your search query"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <div className="ml-2">
                                <Button
                                    variant="primary"
                                    onClick={handleSearch}
                                >
                                    Search
                                </Button>
                            </div>
                        </Form.Group>
                    </Form>
                    {/* Display search results in the left section */}
                    <div className="search-results mt-2">
                        {searchResults.map((result, index) => (
                            <div key={index} className="result-card">
                                <Link to={`/chatpaper}`} className="plain-link">
                                    <h5>
                                        {result.title
                                            .split(" ")
                                            .map((word, index) => (
                                                <span
                                                    key={index}
                                                    className={
                                                        word.toLowerCase() ===
                                                        searchQuery.toLowerCase()
                                                            ? "highlight"
                                                            : ""
                                                    }
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
                                                    className={
                                                        word.toLowerCase() ===
                                                        searchQuery.toLowerCase()
                                                            ? "highlight"
                                                            : ""
                                                    }
                                                >
                                                    {word}{" "}
                                                </span>
                                            ))}
                                    </p>

                                    <p>
                                        URL:{" "}
                                        <a
                                            href={result.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {result.url}
                                        </a>
                                    </p>
                                    <p>
                                        Published Date: {result.published_date}
                                    </p>
                                    <Button
                                        onClick={() =>
                                            handleChat(
                                                `${result.url.split("pdf/")[1]}`
                                            )
                                        }
                                    >
                                        Chat paper
                                    </Button>
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
                            {recommendedPapers.map((paper) => (
                                <li
                                    key={paper.arxiv_id}
                                    className="recommended-paper"
                                >
                                    <p>{paper.title}</p>
                                    <p>{paper.authors}</p>
                                    <p>
                                        <a
                                            href={paper.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {paper.url}
                                        </a>
                                    </p>
                                    <p>{paper.published_date}</p>
                                    <p>Related Keywords: {paper.related}</p>
                                    <Button
                                        onClick={() =>
                                            handleChat(
                                                `${paper.url.split("pdf/")[1]}`
                                            )
                                        }
                                    >
                                        Chat paper
                                    </Button>
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
