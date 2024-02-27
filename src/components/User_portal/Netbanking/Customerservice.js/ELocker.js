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
      marginTop: '15px',

    },
    box: {
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
     
    },
    heading: {
      color: 'black',
      marginTop: '9px',
      
      color:"#2fb68e"
    },
    formGroup: {
      textAlign: 'left',
      overflowWrap: 'break-word',
    },
    form: {
      margin: 'auto',
      // maxWidth: '650px',
      textAlign: 'left',
      marginLeft: 'revert',
      boxShadow:"none",
      outline:"none"
    },
    submitButton: {
      marginTop: '10px',
      borderRadius: '15px',
      textAlign: 'left',
      backgroundColor: '#2fb68e',
      outline: 'none',
      

    },
    checkbox: {
      outline: 'none', 
      marginbottom: '20px',
      boxShadow:"none"
      
      
    },
  };

  return (
    
    <Container style={styles.container}>
      <div className='' style={{ marginTop: "90px" }}>
      <div className='elock_start' style={styles.box}>
        <Row>
          <Col md={12}>
            <h3 style={styles.heading}>
              Store your important documents electronically with Royal Islamic e-Locker
            </h3>
            <p>
              With Royal Islamic e-Locker service, you can store your documents in one central secured location and access them with just a few clicks
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} style={styles.formGroup}>
            <h5 className='e-locker_subheading'>• Secure and Accessible</h5>
            <p className='e-locker_pera'>Documents are stored in a secure manner and accessible only to the customer via a secured login.</p>

            <h5 className='e-locker_subheading'>• Anywhere, Anytime Access</h5>
            <p className='e-locker_pera'>Documents accessible through Royal Islamic Bank Internet Banking or Royal Islamic Direct account login anywhere, anytime!</p>
          </Col>
          <Col md={12} style={styles.formGroup}>
            <h5 className='e-locker_subheading'>• Safety and Longevity</h5>
            <p className='e-locker_pera'>Documents stored online safely, facilitating future retrieval in an easy manner and longevity.</p>

            <h5 className='e-locker_subheading'>• No Charges for Storage</h5>
            <p className='e-locker_pera'>This facility is free of charge for all Royal Islamic Bank Customers.</p>
          </Col>
        </Row>
        <Form onSubmit={handleSubmit} >
          <Form.Group  style={styles.formGroup}>
            <Form.Check
            style={{boxShadow:"none"}}
            className='e-locker_pera'
              type="checkbox"
              label="I have read,understood and agree to be bound by the terms and conditions."
              checked={agree}
              onChange={handleAgreeChange}
            />
          </Form.Group>
        <div className='m-3'>
          <Button  type="submit" className='elocker_button e-locker_pera'  style={{outline:"none", background:"#2fb68e", boxShadow:"none"}}>
            Submit
          </Button>
          </div>
        </Form>
      </div>
      </div>
    </Container>
  );
};

export default ELocker;
