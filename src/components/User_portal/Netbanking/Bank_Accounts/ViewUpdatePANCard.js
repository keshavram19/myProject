import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import './Accounts.css';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';
import apiList from '../../../../lib/apiList';

const UpdatePancard = () => {
  const [otpMethod, setOtpMethod] = useState('');
  const [userDetails, setUserDetails] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState('');
  const [lastFourDigits, setLastFourDigits] = useState('');
  const [email, setEmail] = useState('');

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
        if (Array.isArray(data.user)) {
          setUserDetails(data.user[0]);
          setLastFourDigits(data.user[0].mobilenumber);
          setEmail(data.user[0].email);
        } else if (typeof data.user === 'object') {
          setUserDetails(data.user);
          setLastFourDigits(data.user.mobilenumber);
          setEmail(data.user.email);
        } else {
          console.error('Invalid user details format:', data.user);
        }
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


  const handleOtpMethodChange = (event) => {
    setOtpMethod(event.target.value);
  };

  const handleOtpGeneration = async () => {
    try {
      const token = sessionStorage.getItem('loginToken');
      const otpResponse = await axios.post(
        `${apiList.createVerificationCode}`,
        {
          accountNumber: selectedAccount,
          mobileNumber: lastFourDigits,
          otpMethod: otpMethod,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log(otpResponse.data);

      const { message } = otpResponse.data;

      if (message === 'OTP sent successfully') {
        toast.success('Your OTP has been successfully generated!', {
          onClose: () => window.location.href = '/user/account/update-pancard-otp'
        });
      } else {
        toast.error('Failed to generate OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error generating OTP:', error);
      toast.error('An error occurred while generating OTP. Please check your mobile for the OTP.');
    }
  };


  return (
    <div>
      <div className='pancard_container container-fluid' style={{ marginTop: "90px" }}>
        <div className='row'>
          <ToastContainer position="top-center" autoClose={5000} closeOnClick={true} />
          <div className='col-3'>
            <BankaccountSidebar />
          </div>
          <div className='col-9'>
            <div className="container-fluid pancard my-2">
              <div className="d-flex">
                <h4 className='update_pancard_heading'>View or Update PAN Card</h4>
              </div>
              <div className="card mt-2">
                <h6 className="pancard_heading p-3">View/Update PAN Card</h6>
                <div className="container-fluid pancard_details p-3">
                  <div className="row">
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
                            <p>-{userDetails.firstname}{userDetails.lastname}</p>
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
                </div>
                <div className='mandatory_field'>
                  <p className="pl-3">*Mandatory Fields</p>
                  <p className="pl-3">By clicking "Submit", you are agreeing to all the terms indicated below</p>
                </div>
                <hr />
                <div className="row pl-2 otp_container mb-1">
                  <div className="col-sm-6">
                    <h6 className="my-2 p-2">How would you like to get OTP?</h6>
                    <div className="d-flex pl-2">
                      <div className="pr-3">
                        <input className='view_update_pan_input' type="radio" id="sms" name="options" value="sms"
                          checked={otpMethod === 'sms'}
                          onChange={handleOtpMethodChange} /><label htmlFor="sms" >SMS</label>
                      </div>
                      <div className="pr-3">
                        <input className='view_update_pan_input' type="radio" name="options" id="email"
                          value="email"
                          checked={otpMethod === 'email'}
                          onChange={handleOtpMethodChange} /><label htmlFor="email" >Email</label>
                      </div>
                      <div>
                        <input className='view_update_pan_input' type="radio" id="call"
                          name="options"
                          value="call"
                          checked={otpMethod === 'call'}
                          onChange={handleOtpMethodChange} /><label htmlFor="call">Call</label>
                      </div>
                    </div>
                    <div className='pl-2 mt-2'>
                      <i className='otp_container'>
                        {otpMethod === 'sms' && (
                          <p>OTP will be sent to registered mobile number XXXXXX{String(lastFourDigits).slice(-4)}</p>
                        )}
                        {otpMethod === 'email' && (
                          <p>OTP will be sent to your email {maskEmail(email)}</p>
                        )}
                        {otpMethod === 'call' && (
                          <p>You will receive a call for OTP</p>
                        )}
                      </i>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="d-flex mb-3 ml-3">
                  <button className='back_Btn'>BACK</button>
                  <button className='ml-3 submit_Btn' onClick={handleOtpGeneration}>SUBMIT</button>
                </div>
              </div>
              <div className='pancard_notes'>
                <h6 className='ml-3'>Notes:</h6>
                <div>
                  <ol>
                    <li>The PAN number should be a valid PAN and should be in 541 format i.e 5 Alphabets, 4 Numeric and 1 Alphabet</li>
                    <li>The request will be validated with NSDL site and processed in 1 working day.</li>
                    <li>The name and DOB on the PAN card should match the bank records or the request will get rejected. PAN number updation will not be processed for minor accounts.</li>
                    <li>To remove an existing PAN and update a new one, you will need to visit the branch with acknowledgement copy of the letter given to IT authorities for surrender of the old PAN and carry your new PAN card for verification. 5. If you have provided your mobile number or e-mail ID, we will inform you about the closure of your request by SMS or e-mail respectively. Providing the mobile number or e-mail ID here will not result in an update of your mobile number or e-mail ID as recorded with us.</li>
                    <li> If you have provided your mobile number or e-mail ID, we will inform you about the closure of your request by SMS or e-mail respectively. Providing the mobile number or e-mail ID here will not result in an update of your mobile number or e-mail ID as recorded with us.</li>
                    <li>ROYAL ISLAMIC Bank does not take any responsibility, and will also not be liable, for your claims, if the details provided by you are incorrect/incomplete.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePancard;
