import React, { useState } from 'react';
import { Form, Button, Row, Col,  } from 'react-bootstrap';
import PaymentSidebar from '../Sidebar/PaymentsAndTransferSidebar';

const BillRechargeFastag = ({ onPayNowClick }) => {
    const [activeTab, setActiveTab] = useState("purchase");
    const [showSuccessAlert, setShowSuccessAlert] = useState(false); 
    const [errorMessage, setErrorMessage] = useState('');
    const [purchaseSuccess, setPurchaseSuccess] = useState(false);
    const [rechargeSuccess, setRechargeSuccess] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const handlePurchaseSubmit = async (e) => {
      e.preventDefault();
  
      try {
        // Your existing purchase submission logic
  
        // Assuming success, set purchaseSuccess to true
        setPurchaseSuccess(true);
        setRechargeSuccess(false);
        setShowSuccessAlert(true);
        setAlertMessage('Successfully stored!');
      } catch (error) {
        console.error('API Error:', error);
        setErrorMessage('Error during form submission');
        setPurchaseSuccess(false);
        setRechargeSuccess(false);
        setShowSuccessAlert(false);
        setAlertMessage('Error during form submission');
      }
    };
  
    const handleRechargeSubmit = async (e) => {
      e.preventDefault();
  
      try {
        // Your existing recharge submission logic
  
        // Assuming success, set rechargeSuccess to true
        setRechargeSuccess(true);
        setPurchaseSuccess(false);
        setShowSuccessAlert(true);
        setAlertMessage('Successfully stored!');
      } catch (error) {
        console.error('API Error:', error);

        if (error.response && error.response.status === 400 && error.response.data.error === 'DuplicateData') {
          setErrorMessage('Error: Duplicate data. Please check your input.');
        } else {
          setErrorMessage('Error during form submission');
        }
        setErrorMessage('Error during form submission');
        setPurchaseSuccess(false);
        setRechargeSuccess(false);
        setShowSuccessAlert(false);
        setAlertMessage('Error during form submission');
      }
    };
  
    const closeSuccessAlert = () => {
      setShowSuccessAlert(false);
      setPurchaseSuccess(false);
      setRechargeSuccess(false);
      setAlertMessage('Error during form submission');
    };
  
    


  
  return (
    <div className="container-fluid" style={{ marginTop: "90px" }}>
      


      <div className='row'>
        <div className='col-3'>
        <PaymentSidebar />
        </div>
        <div className='col-9'>
        <div className='row'>
        <div className='col-md-6'><button onClick={(()=>setActiveTab("purchase"))}>Purchase</button></div>
        <div className='col-md-6'><button onClick={(()=>setActiveTab("recharge"))}>Recharge</button></div>
        <div className="card">
        
        {activeTab === "purchase" &&
        <div className="card-body">
         
        <Form onSubmit={handlePurchaseSubmit}>
          
          <Row>
            <Col sm={12}>
              <h6 className="text-black mt-3">Vehicle Details</h6>
            </Col>

            <Col sm={4}>
              <Form.Group>
                <label style={{ color: 'black' }} htmlFor="vehicleRegNum" className="col-form-label">
                  Vehicle Regist Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="vehicleRegNum"
                  placeholder="Enter vehicle registration number"
                  required
                />
              </Form.Group>
            </Col>
            <Col sm={4}>
              <Form.Group>
                <label htmlFor="vehicleMake" className="col-form-label">
                  Vehicle Make
                </label>
                <select className="form-control" id="vehicleMake" required>
                  <option value="toyota">Toyota</option>
                  <option value="hyundai">Hyundai</option>
                  <option value="shevti-disaria">Shevti Disaria</option>
                </select>
              </Form.Group>
            </Col>
            <Col sm={4}>
              <Form.Group>
                <label htmlFor="vehicleModel" className="col-form-label">
                  Vehicle Model
                </label>
                <select className="form-control" id="vehicleModel" required>
                  <option value="bs4">BS4</option>
                  <option value="bs6">BS6</option>
                </select>
              </Form.Group>
            </Col>
          </Row>

         
          <Row>
            <Col sm={12}>
              <h6 className="text-black mt-3">Customer Details</h6>
            </Col>
            <Col sm={12}>
              <Form.Group>
                <label htmlFor="customerName" className="col-form-label">
                  Customer Name
                </label>
                <input type="text" className="form-control" id="customerName" placeholder="Enter customer name" required />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group>
                <label htmlFor="mobileNumber" className="col-form-label">
                  Mobile Number
                </label>
                <input type="text" className="form-control" id="mobileNumber" placeholder="Enter mobile number" required />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group>
                <label htmlFor="emailId" className="col-form-label">
                  Email ID
                </label>
                <input type="text" className="form-control" id="emailId" placeholder="Enter email ID" required />
              </Form.Group>
            </Col>
          </Row>

          
          <Row>
            <Col sm={12}>
              <h6 className="text-black mt-3">Dispatch Address</h6>
            </Col>
            <Col sm={3}>
              <Form.Group>
                <label htmlFor="address" className="col-form-label">
                  Address
                </label>
                <input type="text" className="form-control" id="address" placeholder="Enter address" required />
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group>
                <label htmlFor="pincode" className="col-form-label">
                  Pincode
                </label>
                <input type="text" className="form-control" id="pincode" placeholder="Enter pincode" required />
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group>
                <label htmlFor="city" className="col-form-label">
                  City
                </label>
                <input type="text" className="form-control" id="city" placeholder="Enter city" required />
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group>
                <label htmlFor="state" className="col-form-label">
                  State
                </label>
                <input type="text" className="form-control" id="state" placeholder="Enter state" required />
              </Form.Group>
            </Col>
          </Row>

          
          <Row>
            <Col sm={12}>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="agreeTerms" required />
                <label
                  style={{ marginTop: '10px', marginBottom: '10px', overflowY: 'hidden', color: 'black', fontSize: '14px' }}
                  className="form-check-label"
                  htmlFor="agreeTerms"
                >
                  I have read, understand, and agree to be bound by the terms & conditions
                </label>
              </div>
            </Col>
          </Row>

          <Row>
            <Col sm={12}>
              <Button
                style={{ marginTop: '10px', marginBottom: '10px', fontSize: '20px', overflowY: 'hidden' }}
                type="submit"
                className="btn btn-primary btn-block mt-3"
              >
                PayNow
              </Button>
            </Col>
          </Row>
        </Form>
        </div>
        }
        {activeTab === "recharge" && 
        <div className="card-body">
        <Form onSubmit={handleRechargeSubmit}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md={6}>
              Recharge Type
            </Form.Label>
            <Col md={6}>
              <Form.Control style={{ outline: 'none' }} as="select" required>
                <option value="">Select Recharge Type</option>
                <option value="vehicle">Vehicle Recharge</option>
                <option value="wallet">CUG Wallet Recharge</option>
              </Form.Control>
            </Col>
          </Form.Group>

         
            <>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column md={6}>
                  Vehicle Registration Number
                </Form.Label>
                <Col md={6}>
                  <Form.Control type="text" placeholder="Enter vehicle registration number" required />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column md={6}>
                  Recharge Amount (min: 1000, max: 10000)
                </Form.Label>
                <Col md={6}>
                  <Form.Control
                    type="number"
                    min="1000"
                    max="10000"
                    
                    
                    required
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column md={6}>
                  Debit Account
                </Form.Label>
                <Col md={6}>
                  <Form.Control type="text" placeholder="Enter debit account" required />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                  <Col md={{ span: 6, offset: 6 }}>
                    <Button type="submit" variant="primary" className="btn-block mt-3">
                      Pay Now
                    </Button>
                  </Col>
                </Form.Group>
            </>
        
        </Form>
      </div>}

      </div>
      </div>
      {showSuccessAlert && (
      <div className="alert alert-success mt-3" role="alert">
        Successfully stored! 
       <button type="button" className="close" onClick={closeSuccessAlert}>
        <span aria-hidden="true">&times;</span>
       </button>
       
      </div>
      )}
       </div>
      
      </div>
      
       
      </div>
    );
}

export default BillRechargeFastag;