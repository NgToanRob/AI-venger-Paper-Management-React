import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import Chat from "./Chat";
import PdfViewer from "./PdfViewer";

const ChatPaper = () => {
    const headingStyle = {
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        fontSize: 50,
    };
    const EmojiStyle = {
        fontSize: "1em",
        margin: "0 0.2em",
    };
    return (
        <Container onScroll={false}>
            <Row>
                {/* Left Section - PDF Viewer */}
                <Col md={6}>
                    <PdfViewer />
                </Col>

                {/* Right Section - Chat Block */}
                <Col md={6}>
                    <div style={{ textAlign: "center" }}>
                        <h1 style={headingStyle}>
                            <span style={EmojiStyle}>🤖</span>
                            <span style={EmojiStyle}>💬</span> Chat Paper{" "}
                            <span style={EmojiStyle}>🤖</span>
                            <span style={EmojiStyle}>💬</span>
                        </h1>
                    </div>

                    <Chat />
                </Col>
            </Row>
        </Container>
    );
};

export default ChatPaper;
