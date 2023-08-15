import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import Chat from "./Chat";
import PdfViewer from "./PdfViewer";

const ChatPaper = () => {
    return (
        <Container onScroll={false}>
            <Row>
                {/* Left Section - PDF Viewer */}
                <Col md={6}>
                    <h1>Name of the PDF</h1>
                    <PdfViewer />
                </Col>

                {/* Right Section - Chat Block */}
                <Col md={6}>
                    <h1>Chat Paper</h1>
                    <Chat />
                </Col>
            </Row>
        </Container>
    );
};

export default ChatPaper;
