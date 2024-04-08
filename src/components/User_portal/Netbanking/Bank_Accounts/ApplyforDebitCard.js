import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Accounts.css';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';
import apiList from '../../../../lib/apiList';
import { Link } from 'react-router-dom';

const ApplyDebiCard = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState('');
  const [lastFourDigits, setLastFourDigits] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [srn, setSrn] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = sessionStorage.getItem('loginToken');
      const requestOptions = {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      };
      const response = await fetch(apiList.requestedUserDetailsByEmail, requestOptions);
      if (response.ok) {
        const data = await response.json();
        setUserDetails(data.user);
        setLastFourDigits(data.user.mobilenumber);
        setEmail(data.user.email);
      } else {
        console.error('Error fetching user details:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const handleAccountChange = (event) => {
    setSelectedAccount(event.target.value);
  };

  const maskEmail = (email) => {
    const atIndex = email.indexOf('@');
    const domainIndex = email.indexOf('.com');
    const visibleUsername = email.substring(0, 2);
    const maskedPart = email.substring(2, atIndex).replace(/./g, 'X');
    const visibleDomain = email.substring(atIndex - 2, domainIndex + 4);
    return `${visibleUsername}${maskedPart}${visibleDomain}`;
  };

  const applyDebitCard = async () => {
    try {
      const token = sessionStorage.getItem('loginToken');
      const response = await axios.post(
        apiList.applyDebitCard,
        {},
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      setSrn(response.data.srn);
    } catch (error) {
      setError('Error applying for debit card. Please try again later.');
      console.error('Error applying for debit card:', error);
    }
  };

  return (
    <div>
      <div className='pancard_container container-fluid' style={{ marginTop: "90px" }}>
        <div className='row'>
          <div className='col-3'>
            <BankaccountSidebar />
          </div>
          <div className='col-9'>
            <div className="container-fluid pancard my-2">
              <div className="card mt-2">
                <h5 className="pancard_heading p-3">Debit Card Application</h5>
                <div className="container-fluid pancard_details p-3">
                  <div className="row">
                    <div className="col-sm-6">
                      <label htmlFor="text">Customer ID</label>
                    </div>
                    <div className="col-sm-3">
                      <input type="text" className="form_input" value={`${userDetails.customerID}`} readOnly />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-6">
                      <label htmlFor="text">Account Number*</label>
                    </div>
                    <div className="col-sm-3">
                      <select
                        className="form_input"
                        value={selectedAccount}
                        onChange={handleAccountChange}
                      >
                        {userDetails && (
                          <option value={userDetails.accountNumber}>
                            {userDetails.accountNumber}
                          </option>
                        )}
                      </select>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-6">
                      <label htmlFor="text">Applicants Name*</label>
                    </div>
                    <div className="col-sm-3">
                      <input type="text" className="form_input" value={`${userDetails.firstname} ${userDetails.lastname}`} readOnly />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-6">
                      <label htmlFor="text">PAN Number*</label>
                    </div>
                    <div className="col-sm-3">
                      <input type="text" className="form_input" value={userDetails.pannumber} readOnly />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-6">
                      <label htmlFor="text">Mobile Number*</label>
                    </div>
                    <div className="col-sm-3">
                      <input
                        type="text"
                        className="form_input"
                        value={`XXXXXX${String(lastFourDigits).slice(-4)}`}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-6">
                      <label htmlFor="text">E-mail Id*</label>
                    </div>
                    <div className="col-sm-3">
                      <input
                        type="text"
                        className="form_input"
                        value={maskEmail(email)}
                        readOnly
                      />
                    </div>
                  </div>
                  <hr />
                  <h5 className='text-success'>ADDRESS</h5>
                  {userDetails.currentAddress && (
                    <>
                      <div className="row mt-3">
                        <div className="col-sm-6">
                          <label htmlFor="text">Flat No/Land mark</label>
                        </div>
                        <div className="col-sm-3">
                          <input type="text" className="form_input" value={`${userDetails.currentAddress.flatnumber}, ${userDetails.currentAddress.landmark}`} readOnly />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-sm-6">
                          <label htmlFor="text">Building name</label>
                        </div>
                        <div className="col-sm-3">
                          <input type="text" className="form_input" value={`${userDetails.currentAddress.buildingname}`} readOnly />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-sm-6">
                          <label htmlFor="text">City/State</label>
                        </div>
                        <div className="col-sm-3">
                          <input type="text" className="form_input" value={`${userDetails.currentAddress.city}, ${userDetails.currentAddress.state}, ${userDetails.currentAddress.country}`} readOnly />
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <hr />
                <div className="d-flex mb-3 ml-3">
                  <Link to='/user/account/debit-atm-card'>
                    <button className='back_Btn'>BACK</button>
                  </Link>
                  <button className='ml-3 submit_Btn' onClick={applyDebitCard}>APPLY</button>
                </div>
                {srn && <p className="text-success">SRN: {srn}</p>}
                {error && <p className="text-danger">{error}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyDebiCard;




