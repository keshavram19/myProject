import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const ELocker = () => {
  const [agree, setAgree] = useState(false);

  const handleAgreeChange = () => {
    setAgree(!agree);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  const styles = {
    container: {
      textAlign: 'center',
      marginTop: '20px',
    },
    box: {
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
    },
    heading: {
      color: '#007bff',
      background: 'beige',
    },
    formGroup: {
      textAlign: 'left',
      overflowWrap: 'break-word',
    },
    form: {
      marginLeft: '0', 
      marginRight: 'auto',
      margin: 'auto',
      maxWidth: '600px',
      textAlign: 'left',
    },
    submitButton: {
      marginTop: '10px',
      borderRadius: '15px',
      marginLeft: '0',
    },
  };

  return (
    <Container style={styles.container}>
      <div style={styles.box}>
        <Row>
          <Col md={12}>
            <h2 style={styles.heading}>
              Store your important documents electronically with Royal Islamic e-Locker
            </h2>
            <p>
              With Royal Islamic e-Locker service, you can store your documents in one central secured location and access them with just a few clicks
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} style={styles.formGroup}>
            <h5>• Secure and Accessible</h5>
            <p>Documents are stored in a secure manner and accessible only to the customer via a secured login.</p>

            <h5>• Anywhere, Anytime Access</h5>
            <p>Documents accessible through Royal Islamic Bank Internet Banking or Royal Islamic Direct account login anywhere, anytime!</p>
          </Col>
          <Col md={12} style={styles.formGroup}>
            <h5>• Safety and Longevity</h5>
            <p>Documents stored online safely, facilitating future retrieval in an easy manner and longevity.</p>

            <h5>• No Charges for Storage</h5>
            <p>This facility is free of charge for all Royal Islamic Bank Customers.</p>
          </Col>
        </Row>
        <Form onSubmit={handleSubmit} style={styles.form}>
          <Form.Group controlId="formAgree" style={styles.formGroup}>
            <Form.Check
              type="checkbox"
              label="I have read, understood and agree to be bound by the terms and conditions."
              checked={agree}
              onChange={handleAgreeChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" style={styles.submitButton}>
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default ELocker;