import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Accounts.css';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';
import apiList from '../../../../lib/apiList';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ApplyDebiCard = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState('');
  const [selectedCard, setSelectedCard] = useState('');
  const [lastFourDigits, setLastFourDigits] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [srn, setSrn] = useState('');
  const token = sessionStorage.getItem('loginToken');
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      
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

  const handlecardChange =(e) =>{
    setSelectedCard(e.target.value);
  }

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
      if (!selectedAccount || selectedAccount === 'account' || !selectedCard || selectedCard === 'card') {
        toast.error("Please select an account number and card type", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored"
        });
        return;
      }
  
      if (userDetails.userDebitCardDetails && userDetails.userDebitCardDetails.userDebitCardStatus === 'active') {
        toast.error("You have an active debit card", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored"
        });
        return;
      } else {
        sendCodeToGmail();
      }
    } catch (error) {
      toast.error(error.response.data.error, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
      });
      console.error('Error applying for debit card:', error);
    }
  };
  
  const sendCodeToGmail = async () => {
    if (!userDetails || !userDetails.email) {
        console.error('User email is not available');
        return;
    }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ email: userDetails.email }),
    };

    try {
        const response = await fetch(apiList.userAuthentication, options);
        if(response.status === 200){
          toast.success('Otp Generated Successfully!', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored"
        });
          navigate(`/user/account/debit-card-apply/otp?account=${selectedAccount}&card=${selectedCard}`);
        }

    } catch (error) {
        console.error('Error sending OTP:', error);
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
                  <ToastContainer />
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
                          <option value='account'>Select Account</option>
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
                  <div className="row mt-3">
                    <div className="col-sm-6">
                      <label htmlFor="text">Select Card Type*</label>
                    </div>
                    <div className="col-sm-3">
                      <select
                        className="form_input"
                        value={selectedCard}
                        onChange={handlecardChange}
                      >
                          <option value='card'>Select Card Type</option>
                          <option value='visa'>Visa</option>
                          <option value='master'>Master</option>
                          <option value='rupay'>Rupay</option>
                      </select>
                    </div>
                  </div>
                  <hr />
                  <h5 className='text-secondary'>ADDRESS</h5>
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
                {error && (
                  <p className="text-danger">
                    {error.response ? "something went wrong" : error}
                  </p>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyDebiCard;




