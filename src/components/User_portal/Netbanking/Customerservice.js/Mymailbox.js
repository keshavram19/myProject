import React, { useState } from 'react';
import { Container, Row, Col, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./Customerservice.css";
const MyMailBox = () => {
  
  const [selectedMailbox, setSelectedMailbox] = useState('Inbox');

  const handleMailboxSelect = (mailbox) => {
    setSelectedMailbox(mailbox);
  };

  return (
    <Container fluid >
      <div style={{marginTop:"90px"}}> 
      <h3 style={{ textAlign:"center", color:"#2fb68e" }}> My Mailbox </h3>
      <Row>
        <Col md={12} style={{marginTop:"20px",  display: 'flex', justifyContent: 'flex-start', marginBottom: '20px', alignItems: 'center', textAlign:"center" }}>
          <div style={{ textAlign: 'center', marginLeft:"35%", }}>
            <h5>User Name</h5>
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
          <div style={{ textAlign: 'left',  outline:"none", boxShadow:"none", margin: '20px 0', padding: '20px', border: '1px solid #ddd', backgroundColor: 'white' }}>
           <div style={{marginLeft:"43%"}}>
            <h4 style={{color:"#2fb68e"}}>Service Requests</h4>
            <ul>
              <li>E-Locker</li>
              <li>Trash Center</li>
              <li>MyMailbox</li>
            </ul>
            </div>
            <DropdownButton className="mymailbox_seleect_box" title="Select Mailbox" variant="outline-warning" style={{ marginTop: '20px', outline:"none", boxShadow:"none", textAlign:"center"}}>
              <Dropdown.Item onClick={() => handleMailboxSelect('Inbox')}>Inbox</Dropdown.Item>
              <Dropdown.Item onClick={() => handleMailboxSelect('SentMails')}>Sent Mails</Dropdown.Item>
              <Dropdown.Item onClick={() => handleMailboxSelect('BroadcastMessages')}>Broadcast Messages</Dropdown.Item>
              <Dropdown.Item onClick={() => handleMailboxSelect('Trash')}>Trash</Dropdown.Item>
            </DropdownButton>
    </div>

        </Col>
        <Col md={12}>
          <h2 style={{outline:"none", boxShadow:"none", }}>{selectedMailbox}</h2>
          {selectedMailbox === 'Inbox' && (
            <div>
              <h4 style={{ marginBottom: '20px', backgroundColor:'bisque',textAlign: 'center', padding:"10px", color:"#2fb68e" }}>View Inbox</h4>
              <div style={{ textAlign: 'center' }}>
                <p style={{ color: 'red' }}>&times; No mails found for Inbox</p>
              </div>
            </div>
          )}
          {selectedMailbox === 'SentMails' && (
            <div>
              <h4 style={{ marginBottom: '20px',backgroundColor:'bisque', textAlign: 'center', padding:"10px", color:"#2fb68e" }}>View Sent Mails</h4>
              <p style={{ textAlign: 'center', color: 'red' }}>&times; No mails found for Sent Mails</p>
              <p style={{ textAlign: 'center' }}>Note: 1 mail exchange with Royal Islamic Bank</p>
            </div>
          )}
          {selectedMailbox === 'BroadcastMessages' && (
            <div>
              <h4 style={{ backgroundColor:'bisque', marginBottom: '20px', textAlign: 'center', padding:"10px", color:"#2fb68e" }}>View Broadcast Messages</h4>
              <p style={{ textAlign: 'center', color: 'red' }}>&times; No messages found for Broadcast Messages</p>
              <div style={{ marginTop: '15px', textAlign: 'right', marginBottom:"20px" }}>
                
                <input type="text" placeholder="Search..." style={{ marginRight: '20px', boxShadow:"none", padding:"5px" }} />
                <Button style={{background:"#2fb68e", color:"white", outline:"none", boxShadow:"none",}}>Search</Button>
              </div>
            </div>
          )}
          {selectedMailbox === 'Trash' && (
            <div>
              <h4 style={{ marginBottom: '20px',backgroundColor:'bisque', textAlign: 'center', padding:"10px", color:"#2fb68e" }}>View Trash</h4>
              <p style={{ marginRight: '60px', textAlign: 'center', color: 'red' }}>&times; No mails found for Trash</p>
            </div>
          )}
        </Col>

      </Row>
      </div>
    </Container>
  );
};

export default MyMailBox;