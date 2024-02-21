import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';
import './Accounts.css';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';
import apiList from '../../../../lib/apiList';



const UpdatePancard = () => {


  const accountNumber = 1124563456;

  const [otpMethod, setOtpMethod] = useState('');
  const [userDetails, setUserDetails] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState('');
  const [lastFourDigits, setLastFourDigits] = useState('');
  const [userEmailId, setUserEmailId] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiList.customerAccountDetails}${accountNumber}`);
      const userDetailsData = response.data.details;

      if (Array.isArray(userDetailsData)) {
        setUserDetails(userDetailsData);
        setLastFourDigits(userDetailsData[0].userMobileNumber);
        setUserEmailId(userDetailsData[0].userEmailId);
      } else if (typeof userDetailsData === 'object') {
        setUserDetails([userDetailsData]);
        setLastFourDigits(userDetailsData.userMobileNumber);
        setUserEmailId(userDetailsData.userEmailId)
      } else {
        console.error('Invalid user details format:', userDetailsData);
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  useEffect(() => {
  
    if (selectedAccount === '') {
      fetchData();
    }
  }, [selectedAccount]);

  const handleAccountChange = (event) => {
    setSelectedAccount(event.target.value);
  };

  const maskEmail = (email) => {
    const atIndex = email.indexOf('@');
    const maskedPart = email.substring(0, atIndex).replace(/./g, 'X');
    const visiblePart = email.substring(atIndex);
    return `${maskedPart}${visiblePart}`;
  };

  const handleOtpMethodChange = (event) => {
    setOtpMethod(event.target.value);
  };

  const handleOtpGeneration = async () => {
    try {
      await fetchData();

      if (Array.isArray(userDetails) && userDetails.length > 0) {
        const otpResponse = await axios.post(`${apiList.createVerificationCode}`, {
          accountNumber: userDetails[0].userAccountNumber,
          mobileNumber: lastFourDigits,
          otpMethod: otpMethod,
        });

        console.log(otpResponse.data);

        const { message } = otpResponse.data;

        if (message === 'OTP sent successfully') {
          toast.success('Your OTP has been successfully generated!', {
            onClose: () => window.location.href = '/user/account/update-pancard-otp'
          });
        } else {
          toast.error('Failed to generate OTP. Please try again.');
        }
      } else {
        console.error('Invalid user details:', userDetails);
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
        <ToastContainer position="top-center" autoClose={5000} closeOnClick={true}/>
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
                      <label for="text">Account Number*</label>
                    </div>
                    <div className="col-sm-3">
                      <select
                        className="form_input"
                        value={selectedAccount}
                        onChange={handleAccountChange}
                      >
                        {userDetails.map((account, index) => (
                          <option key={index} value={account.userAccountNumber}>
                            {account.userAccountNumber}
                            <p>-{account.accountHolderName}</p>
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-6">
                      <label for="text">Applicants Name*</label>
                    </div>
                    <div className="col-sm-3">

                      {userDetails.map((account, index) => (
                        <input type="text" className="form_input" id="text" value={account.accountHolderName} />
                      ))}
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-6">
                      <label for="text">PAN Number*</label>
                    </div>
                    <div className="col-sm-3">
                      {userDetails.map((account, index) => {
                        const panNumber = account.accountHolderPAN;
                        const maskedPart = 'X'.repeat(panNumber.length - 4);
                        const formattedPAN = `${panNumber.substring(0, 2)}${maskedPart}${panNumber.substring(panNumber.length - 2)}`;

                        return (
                          <input type="text" className="form_input" id="text" value={formattedPAN} key={index} />
                        );
                      })}
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-6">
                      <label for="text">Mobile Number*</label>
                    </div>
                    <div className="col-sm-3">
                      <input
                        type="text"
                        className="form_input"
                        id="text"
                        value={`XXXXXX${String(lastFourDigits).slice(-4)}`}
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-6">
                      <label for="text">E-mail Id*</label>
                    </div>
                    <div className="col-sm-3">
                      <input
                        type="text"

                        className="form_input"
                        id="text"
                        value={maskEmail(userEmailId)}
                      />
                    </div>
                  </div>
                </div>
                <div className='mandatory_field'>
                  <p className="pl-3">*Mandatory Fields</p>
                  <p className="pl-3">By clicking "Submit",you are agreeing to all the terms indicated below</p>
                </div>
                <hr />
                <div className="row pl-2 otp_container mb-1">
                  <div className="col-sm-6">
                    <h6 className="my-2 p-2">How would you like to get OTP?</h6>
                    <div className="d-flex pl-2">
                      <div className="pr-3">
                        <input type="radio" id="sms" name="options" value="sms"
                          checked={otpMethod === 'sms'}
                          onChange={handleOtpMethodChange} /><label htmlFor="sms" >SMS</label>
                      </div>
                      <div className="pr-3">
                        <input type="radio" name="options" id="email"
                          value="email"
                          checked={otpMethod === 'email'}
                          onChange={handleOtpMethodChange} /><label htmlFor="email" >Email</label>
                      </div>
                      <div>
                        <input type="radio" id="call"
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
                          <p>OTP will be sent to your email {maskEmail(userEmailId)}</p>
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

                  <button className='back_Btn'>
                    BACK
                  </button>
                  <button className='ml-3 submit_Btn' onClick={handleOtpGeneration}>
                    SUBMIT
                  </button>
                </div>
              </div>
              <div className='pancard_notes'>
                <h6 className='ml-3'>Notes:</h6>
                <div>
                  <ol>
                    <li>The PAN number should be a valid PAN and should be in 541 format i.e 5 Alphabets, 4 Numeric and 1 Alphabet</li>
                    <li>The request will be validated with NSDL site and processed in 1 working day.</li>
                    <li>The name and DOB on the PAN card should match the bank records or the request will get rejected.
                      PAN number updation will not be processed for minor accounts.</li>
                    <li>To remove an existing PAN and update a new one, you will need to visit the branch with acknowledgement copy of the letter given to IT authorities for surrender of the old PAN and carry your new PAN card for verification. 5. If you have provided your mobile number or e-mail ID, we will inform you about the closure of your request by SMS or e-mail respectively.
                      Providing the mobile number or e-mail ID here will not result in an update of your mobile number or e-mail ID as recorded with us.</li>
                    <li> If you have provided your mobile number or e-mail ID, we will inform you about the closure of your request by SMS or e-mail respectively. Providing the mobile number or e-mail ID here will not result in an update of your mobile number or e-mail ID as recorded with us.</li>
                    <li>ROYAL ISLAMIC Bank doesnot take any resposibilty, and will also not be liable, for your claims, if the details provided by you are incorrect/incomplete.</li>
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