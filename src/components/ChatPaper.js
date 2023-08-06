import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import PdfViewer from './PdfViewer';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

const ChatPaper = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    // Implement the logic to send the chat message to the backend or a state management system.
    // For this example, we'll just update the local state.
    if (message.trim() !== '') {
      setChatMessages([...chatMessages, message]);
      setMessage('');
    }
  };

  return (
    <Container>
      <Row>
        {/* Left Section - PDF Viewer */}
        <Col md={6}>
          <PdfViewer />
        </Col>

        {/* Right Section - Chat Block */}
        <Col md={6}>
          <div className="chat-block">
            <div className="chat-messages">
              {chatMessages.map((msg, index) => (
                <div key={index} className="chat-message">
                  {msg}
                </div>
              ))}
            </div>
            <div className="chat-input">
              <input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button variant="primary" onClick={handleSendMessage}>
                Send
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ChatPaper;
