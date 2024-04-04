import React, { useEffect, useState } from 'react';
import { Form, Button, Tab, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PaymentSidebar from '../Sidebar/PaymentsAndTransferSidebar';
import Axios from 'axios';
import './FundTransfer.css';
import apiList from '../../../../lib/apiList';
import { IoCaretDownCircleOutline } from "react-icons/io5";


const BillRechargeFastag = ({ onPayNowClick }) => {

  const [activeTab, setActiveTab] = useState("purchase");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  const [rechargeSuccess, setRechargeSuccess] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showFields, setShowFields] = useState(false);
  const [rechargeType, setRechargeType] = useState('');
  const [loading, setLoading] = useState(false);
  const [purchaseOrderHeading, setPurchaseOrderHeading] = useState('');
  const [purchaseOrderNo, setPurchaseOrderNo] = useState('');
  const [purchaseOrderDate, setPurchaseOrderDate] = useState('');
  const [purchaseIssuesDate, setPurchaseIssuesDate] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const [customerAccountDetails, setCustomerAccountDetails] = useState({
    accountNumber: ''
  });
  const [operatorType, setOperatorType] = useState('');
  const [customerMobileNumber, setCustomerMobileNumber] = useState('');
  const [rechargePlanAmount, setRechargePlanAmount] = useState('');
  const [transactionAccount, setTransactionAccount] = useState('')


  const handlePurchaseSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        vehicleRegNum: e.target.elements.vehicleRegNum.value,
        vehicleMake: e.target.elements.vehicleMake.value,
        vehicleModel: e.target.elements.vehicleModel.value,
        customerName: e.target.elements.customerName.value,
        mobileNumber: e.target.elements.mobileNumber.value,
        emailId: e.target.elements.emailId.value,
        address: e.target.elements.address.value,
        pincode: e.target.elements.pincode.value,
        city: e.target.elements.city.value,
        state: e.target.elements.state.value,
        purchaseOrderHeading,
        purchaseOrderNo,
        purchaseOrderDate,
        purchaseIssuesDate,
      };

      setLoading(true);
      setPurchaseSuccess(true);
      setShowSuccessAlert(true);
      setAlertMessage('Purchase Successful!');
      await Axios.post('http://localhost:4444/api/purchase', formData);
    } catch (error) {

    }

  };
  const handleRechargeTypeChange = () => {
    const selectedRechargeType = document.getElementById('rechargeType').value;
    setRechargeType(selectedRechargeType);
    setShowFields(selectedRechargeType !== '');
  };
  const handleRechargeSubmit = async (e) => {
    e.preventDefault();

    try {

      const rechargeType = e.target.elements.rechargeType.value;


      const formData = {
        rechargeType,
        rechargeType: e.target.elements.rechargeType.value,
        vehicleRegistrationNumber: e.target.elements.vehicleRegistrationNumber.value,
        rechargeAmount: e.target.elements.rechargeAmount.value,
        debitAccount: e.target.elements.debitAccount.value,
      };

      setLoading(true);
      setRechargeSuccess(true);
      setShowSuccessAlert(true);
      setAlertMessage('Recharge Successful!');
      setAlertMessage('Mobile Recharge Successful!');
      await Axios.post('http://localhost:4444/api/fastagRecharge', formData);
    } catch (error) {
      console.error('API Error:', error);

      if (error.response && error.response.status === 400 && error.response.data.error === 'DuplicateData') {
        setErrorMessage('Error: Duplicate data. Please check your input.');
      } else {
        setErrorMessage('Error during form submission');
      }
    }
  };
  const closeSuccessAlert = () => {
    setShowSuccessAlert(false);
    setPurchaseSuccess(false);
    setRechargeSuccess(false);
    setAlertMessage('');
    setErrorMessage('');
  };
  const handleProceedClick = () => {
    if (purchaseSuccess || rechargeSuccess) {
      setShowSuccessAlert(true);
      setAlertMessage('Proceed Successful!');
    } else {
      setShowSuccessAlert(true);
      setAlertMessage('No action performed yet.');
    }
  };

  let token = sessionStorage.getItem('loginToken');

  const handleOperatorType = (event) => {
    setOperatorType(event.target.value);
  };
  const handleMobileNumber = (event) => {
    setCustomerMobileNumber(event.target.value);
  };
  const handleRechargeAmount = (event) => {
    setRechargePlanAmount(event.target.value);
  };
  const handleAccountNumber = (event) => {
    setTransactionAccount(event.target.value);
  };


  useEffect(() => {
    fetchCustomerDetails();
  });
  const fetchCustomerDetails = async () => {
    const options = {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    };

    try {
      const response = await fetch(apiList.customerDetails, options);
      if (response.ok) {
        const data = await response.json();
        setCustomerAccountDetails(data.user);
      }
    }
    catch (error) {
      console.log(error.message);
    }
  };

  return (

    <div className="container-fluid" style={{ marginTop: "90px", overflowY: "hidden" }}>
      <div className='row'>

        <div className='col-3'>
          <PaymentSidebar />
        </div>

        {/* <div className='col-9'>

          <div className='row'>

            <div className='col-md-6'>
              <button onClick={() => setActiveTab("purchase")} style={{ backgroundColor: '#2fb68e', color: 'white', padding: '15px', width: '105%', borderRadius: '5px', cursor: 'pointer' }}>
                Purchase
              </button>
            </div>

            <div className='col-md-6'>
              <button onClick={() => setActiveTab("recharge")} style={{ backgroundColor: '#2fb68e', color: 'white', padding: '15px', width: '100%', borderRadius: '5px', cursor: 'pointer' }}>
                Recharge
              </button>
            </div>
          </div>

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
                      <Col sm={4}>
                        <Form.Group>
                          <label htmlFor="customerName" className="col-form-label">
                            Customer Name
                          </label>
                          <input type="text" className="form-control" id="customerName" placeholder="Enter customer name" required />
                        </Form.Group>
                      </Col>
                      <Col sm={4}>
                        <Form.Group>
                          <label htmlFor="mobileNumber" className="col-form-label">
                            Mobile Number
                          </label>
                          <input type="text" className="form-control" id="mobileNumber" placeholder="Enter mobile number" required />
                        </Form.Group>
                      </Col>
                      <Col sm={4}>
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
                        <h6 className="text-black mt-3">Purchase Order Information</h6>

                      </Col>
                      <Col sm={6}>
                        <Form.Group>
                          <label htmlFor="purchaseOrderDate" className="col-form-label">
                            Purchase Order Date
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="purchaseOrderDate"
                            value={purchaseOrderDate}
                            onChange={(e) => setPurchaseOrderDate(e.target.value)}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group>
                          <label htmlFor="purchaseIssuesDate" className="col-form-label">
                            Purchase Issues Date
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="purchaseIssuesDate"
                            value={purchaseIssuesDate}
                            onChange={(e) => setPurchaseIssuesDate(e.target.value)}
                            required
                          />
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
                          style={{ marginTop: '10px', marginBottom: '10px', fontSize: '20px', overflowY: 'hidden', color: 'black', backgroundColor: '#EBCA28' }}
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


            {activeTab === "recharge" && (
              <div className="card-body">
                <Form onSubmit={handleRechargeSubmit}>

                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column md={6}>
                      Recharge Type
                    </Form.Label>
                    <Col md={6}>
                      <Form.Control style={{ outline: 'none' }} as="select" id="rechargeType" onChange={handleRechargeTypeChange} required>
                        <option value="">Select Recharge Type</option>
                        <option value="vehicle">Vehicle Recharge</option>
                        <option value="wallet">CUG Wallet Recharge</option>
                      </Form.Control>
                    </Col>
                  </Form.Group>

                  {(document.getElementById('rechargeType') && document.getElementById('rechargeType').value === 'vehicle') && (
                    <>
                      <Form.Group as={Row} className="mb-3">
                        <Col md={6}>
                          <Form.Label>
                            Vehicle Registration Number
                          </Form.Label>
                          <Form.Control type="text" id="vehicleRegistrationNumber" placeholder="Enter vehicle registration number" required />
                        </Col>
                        <Col md={6}>
                          <Form.Label>
                            Recharge Amount
                          </Form.Label>
                          <Form.Control type="number" min="1000" max="10000" id="rechargeAmount" required />
                          (min: 1000)                           (max: 10000)
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} className="mb-3">
                        <Col md={6}>
                          <Form.Label>
                            Debit Account
                          </Form.Label>
                          <Form.Control type="text" id="debitAccount" placeholder="Enter debit account" required />
                        </Col>
                      </Form.Group>
                    </>
                  )}

                  {(document.getElementById('rechargeType') && document.getElementById('rechargeType').value === 'wallet') && (
                    <>
                      <Form.Group as={Row} className="mb-3">
                        <Col md={6}>
                          <Form.Label>
                            CUG Wallet Id
                          </Form.Label>
                          <Form.Control type="text" id="vehicleRegistrationNumber" placeholder="Enter vehicle registration number" required />
                        </Col>
                        <Col md={6}>
                          <Form.Label>
                            Recharge Amount
                          </Form.Label>
                          <Form.Control type="number" min="1000" max="10000" id="rechargeAmount" required /> (min: 1000)                   (max: 10000)
                        </Col>
                      </Form.Group>


                      <Form.Group as={Row} className="mb-3">
                        <Col md={6}>
                          <Form.Label>
                            Debit Account
                          </Form.Label>
                          <Form.Control type="text" id="debitAccount" placeholder="Enter debit account" required />
                        </Col>
                      </Form.Group>
                    </>
                  )}


                  <Form.Group as={Row}>
                    <Col md={{ span: 6, offset: 6 }}>
                      <Button
                        style={{ overflow: 'hidden', overflowY: 'hidden', color: '#2FB68E', backgroundColor: '#EBCA28' }}
                        type="submit" variant="primary" className="btn-block mt-3">
                        Pay Now
                      </Button>
                    </Col>
                  </Form.Group>
                </Form>
              </div>
            )}

            {showSuccessAlert && (
              <div className={`alert ${purchaseSuccess || rechargeSuccess ? 'alert-success' : 'alert-danger'} mt-3`} role="alert">
                {alertMessage}
                <button type="button" className="close" onClick={closeSuccessAlert}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            )}
          
          </div>

        </div> */}

        <div className='col-9'>

          <Tab.Container defaultActiveKey='#link1'>
            <Row>
              <Col lg={12}>
                <ListGroup horizontal className='mb-5'>
                  <ListGroupItem action href='#link1'>Mobile Recharge</ListGroupItem>
                  <ListGroupItem action href='#link2'>Electricity</ListGroupItem>
                  <ListGroupItem action href='#link3'>DTH</ListGroupItem>
                  <ListGroupItem action href='#link4'>Gas</ListGroupItem>
                </ListGroup>
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <Tab.Content>

                  <Tab.Pane eventKey='#link1'>
                    <div className='d-flex align-items-center'>
                      <div className='recharge_opertor_type'>Operator Type: </div>
                      <div className='d-flex align-items-center'>
                        <select className='form-control  operator_selection' onChange={handleOperatorType}>
                          <option hidden>Select your  operator</option>
                          <option value='Airtel'>Airtel</option>
                          <option value='BSNL'>BSNL</option>
                          <option value='Jio'>Jio</option>
                          <option value='MTNL'>MTNL</option>
                          <option value='Vi'>Vi</option>
                        </select>
                        <IoCaretDownCircleOutline className='operator_type_selection_icon' />
                      </div>
                    </div>

                    <div className='d-flex align-items-center my-4'>
                      <div className='recharge_opertor_type'>Mobile Number: </div>
                      <div>
                        <input placeholder='Enter Mobile Number' className='mobile_number_input' onChange={handleMobileNumber}>

                        </input>
                      </div>
                    </div>

                    <div className='d-flex align-items-center'>
                      <div className='recharge_opertor_type'>Circle</div>
                      <div className='d-flex align-items-center'>
                        <select className='form-control operator_selection'>
                          <option hidden>Select your Circle</option>
                          <option>Andhra Pradesh</option>
                          <option>Karnataka</option>
                          <option>Kerala</option>
                          <option>Tamil Nadu</option>
                          <option>Telangana</option>
                        </select>
                        <IoCaretDownCircleOutline className='operator_type_selection_icon' />
                      </div>
                    </div>

                    <div className='d-flex align-items-center my-4'>
                      <div className='recharge_opertor_type'>Amount: </div>
                      <div>
                        <input className='mobile_number_input' placeholder='Enter Amount' onChange={handleRechargeAmount}>

                        </input>
                      </div>
                      <div className='ml-5'>
                        <button className='view_plans_btn'>View Plans</button>
                      </div>
                    </div>

                    <div className='d-flex align-items-center'>
                      <div className='recharge_opertor_type'>Transaction A/C: </div>
                      <div className='d-flex align-items-center'>
                        <select className='form-control operator_selection' onChange={handleAccountNumber}>
                          <option hidden>Select Transaction Account</option>
                          <option>{customerAccountDetails.accountNumber}</option>
                        </select>
                        <IoCaretDownCircleOutline className='operator_type_selection_icon' />
                      </div>
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey='#link2'>Electricity</Tab.Pane>

                  <Tab.Pane eventKey='#link3'>DTH</Tab.Pane>

                  <Tab.Pane eventKey='#link4'>GAS</Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>

        </div>

      </div>
    </div>
  );
}

export default BillRechargeFastag;