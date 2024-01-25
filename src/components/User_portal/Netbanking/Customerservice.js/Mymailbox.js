import React, { useState } from 'react';
import { Container, Row, Col, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const MyMailBox = () => {
  
  const [selectedMailbox, setSelectedMailbox] = useState('Inbox');

  const handleMailboxSelect = (mailbox) => {
    setSelectedMailbox(mailbox);
  };

  return (
    <Container fluid style={{  height: '100vh', padding: 0 }}>
      <div style={{ fontSize: '24px' }}> MyMailbox </div>
      <Row>
        <Col md={12} style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '20px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <h4>User Name</h4>
            <p> personal pic</p>
            <div style={{ border: '1px solid #ddd', padding: '10px', width: '70%', margin: '0 auto' }}>
              <img src="https://via.placeholder.com/50" alt="Profile Pic" style={{ width: '70%', borderRadius: '25%' }} />
            </div>
            
            <div style={{ marginTop: '10px' }}>John Doe</div>
          </div>
          <div style={{ marginLeft: '20px' }}>
            <p>Personal Details</p>
            <p>Date of Birth: January 1, 1990</p>
            <p>Email: john.doe@example.com</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div style={{ textAlign: 'left', margin: '20px 0', padding: '20px', border: '1px solid #ddd', backgroundColor: 'white' }}>
            <h4>Service Requests</h4>
            <ul>
              <li>E-Locker</li>
              <li>Trash Center</li>
              <li>MyMailbox</li>
            </ul>
            <DropdownButton title="Select Mailbox" variant="outline-warning" style={{ marginTop: '20px' }}>
              <Dropdown.Item onClick={() => handleMailboxSelect('Inbox')}>Inbox</Dropdown.Item>
              <Dropdown.Item onClick={() => handleMailboxSelect('SentMails')}>Sent Mails</Dropdown.Item>
              <Dropdown.Item onClick={() => handleMailboxSelect('BroadcastMessages')}>Broadcast Messages</Dropdown.Item>
              <Dropdown.Item onClick={() => handleMailboxSelect('Trash')}>Trash</Dropdown.Item>
            </DropdownButton>
    </div>

        </Col>
        <Col md={12}>
          <h2>{selectedMailbox}</h2>
          {selectedMailbox === 'Inbox' && (
            <div>
              <h4 style={{ marginBottom: '20px', backgroundColor:'bisque',textAlign: 'center' }}>View Inbox</h4>
              <div style={{ textAlign: 'center' }}>
                <p style={{ color: 'red' }}>&times; No mails found for Inbox</p>
              </div>
            </div>
          )}
          {selectedMailbox === 'SentMails' && (
            <div>
              <h4 style={{ marginBottom: '20px',backgroundColor:'bisque', textAlign: 'center' }}>View Sent Mails</h4>
              <p style={{ textAlign: 'center', color: 'red' }}>&times; No mails found for Sent Mails</p>
              <p style={{ textAlign: 'center' }}>Note: 1 mail exchange with ICICI Bank</p>
            </div>
          )}
          {selectedMailbox === 'BroadcastMessages' && (
            <div>
              <h4 style={{ backgroundColor:'bisque', marginBottom: '20px', textAlign: 'center' }}>View Broadcast Messages</h4>
              <p style={{ textAlign: 'center', color: 'red' }}>&times; No messages found for Broadcast Messages</p>
              <div style={{ marginTop: '10px', textAlign: 'right' }}>
                
                <input type="text" placeholder="Search..." style={{ marginRight: '20px' }} />
                <Button variant="primary">Search</Button>
              </div>
            </div>
          )}
          {selectedMailbox === 'Trash' && (
            <div>
              <h4 style={{ marginBottom: '20px',backgroundColor:'bisque', textAlign: 'center', marginRight: '30px' }}>View Trash</h4>
              <p style={{ marginRight: '60px', textAlign: 'center', color: 'red' }}>&times; No mails found for Trash</p>
            </div>
          )}
        </Col>

      </Row>
    </Container>
  );
};

export default MyMailBox;