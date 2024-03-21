import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Accounts.css';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';
import apiList from '../../../../lib/apiList';



const ManageCardLimit = () => {

  const token = sessionStorage.getItem('loginToken');

  const [otpMethod, setOtpMethod] = useState('');

  const [errorMessage, setErrorMessage] = useState('');


  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);
  const [isChecked4, setChecked4] = useState(false);

  const [domesticLimit1, setDomesticLimit1] = useState(0);
  const [domesticLimit2, setDomesticLimit2] = useState(0);
  const [domesticLimit3, setDomesticLimit3] = useState(0);
  const [domesticLimit4, setDomesticLimit4] = useState(0);

  const [showDomestic, setShowDomestic] = useState(true);



  const [isChecked5, setChecked5] = useState(false);
  const [isChecked6, setChecked6] = useState(false);
  const [isChecked7, setChecked7] = useState(false);
  const [isChecked8, setChecked8] = useState(false);

  const [internationalLimit1, setInternationalLimit1] = useState(0);
  const [internationalLimit2, setInternationalLimit2] = useState(0);
  const [internationalLimit3, setInternationalLimit3] = useState(0);
  const [internationalLimit4, setInternationalLimit4] = useState(0);


  const [userDetails, setUserDetails] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState('');
  const [selectedDebitCard, setSelectedDebitCard] = useState('');
  const [lastFourDigits, setLastFourDigits] = useState('');
  const [userEmailId, setemail] = useState('');






  const handleRadioChange = (event) => {
    setShowDomestic(event.target.value === 'domestic');
  };


  const handleToggle1 = () => {
    setChecked1(!isChecked1);
  };

  const handleToggle2 = () => {
    setChecked2(!isChecked2);
  };

  const handleToggle3 = () => {
    setChecked3(!isChecked3);
  };

  const handleToggle4 = () => {
    setChecked4(!isChecked4);
  };


  const handleDomesticLimitChange1 = (event) => {
    setDomesticLimit1(parseInt(event.target.value));
  };

  const handleDomesticLimitChange2 = (event) => {
    setDomesticLimit2(parseInt(event.target.value));
  };

  const handleDomesticLimitChange3 = (event) => {
    setDomesticLimit3(parseInt(event.target.value));
  };

  const handleDomesticLimitChange4 = (event) => {
    setDomesticLimit4(parseInt(event.target.value));
  };



  const handleToggle5 = () => {
    setChecked5(!isChecked5);
  };

  const handleToggle6 = () => {
    setChecked6(!isChecked6);
  };

  const handleToggle7 = () => {
    setChecked7(!isChecked7);
  };

  const handleToggle8 = () => {
    setChecked8(!isChecked8);
  };


  const handleSubmit = async () => {
    try {
      if (otpMethod !== 'sms' && otpMethod !== 'email') {
        setErrorMessage('Please select SMS or email for OTP generation.');
        return;
      }

      const updatedDomesticLimits = {
        cashWithdrawalLimit: domesticLimit1,
        retailTransactionLimit: domesticLimit2,
        ecommerceTransactionLimit: domesticLimit3,
        contactlessPaymentLimit: domesticLimit4
      };

      const updatedInternationalLimits = {
        cashWithdrawalLimit: internationalLimit1,
        retailTransactionLimit: internationalLimit2,
        ecommerceTransactionLimit: internationalLimit3,
        contactlessPaymentLimit: internationalLimit4
      };

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      };

      await axios.put(apiList.updateDomesticLimits, { newDomesticLimits: updatedDomesticLimits }, config);
      await axios.put(apiList.updateInternationalLimits, { newInternationalLimits: updatedInternationalLimits }, config);

      await handleOtpGeneration();
    } catch (error) {
      console.error('Error updating limits:', error);
      alert('Failed to update limits. Please try again.');
    }
  };



  const fetchData = async () => {
    try {

      const requestOptions = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      };
      const response = await fetch(apiList.requestedUserDetailsByEmail, requestOptions);
      if (response.ok) {
        const data = await response.json();
        const userDetailsData = data.user;
        if (Array.isArray(userDetailsData)) {
          setUserDetails(userDetailsData);
          setSelectedAccount(userDetailsData[0].userAccountNumber);
          setLastFourDigits(data.user[0].mobilenumber);
          setemail(data.user[0].email);
        } else if (typeof userDetailsData === 'object') {
          setUserDetails([userDetailsData]);
          setSelectedAccount(userDetailsData.userAccountNumber);
          setLastFourDigits(data.user.mobilenumber);
          setemail(data.user.email);
        } else {
          console.error('Invalid user details format:', userDetailsData);
        }
      } else {
        console.error('Error fetching user details:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    handleSubmit();
  }, []);



  const formatDebitCardNumber = (cardNumber) => {

    const cardNumberString = String(cardNumber);


    const firstFourDigits = cardNumberString.substring(0, 4);
    const lastFourDigits = cardNumberString.substring(cardNumberString.length - 4);
    const maskedDigits = 'X'.repeat(cardNumberString.length - 8);

    return `${firstFourDigits}${maskedDigits}${lastFourDigits}`;
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
    setErrorMessage('');
  };


  const handleOtpGeneration = async () => {
    try {

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
        window.location.href = '/user/account/manage-card-otp';
      } else {
        alert('Failed to generate OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error generating OTP:', error);
      alert('An error occurred while generating OTP. Please check your mobile for the OTP.');
    }
  };

  return (

    <div>

      <div className='card_limit-details-container container-fluid' style={{ marginTop: '80px' }}>
        <div className='row'>
          <div className='col-3'>
            <BankaccountSidebar />
          </div>
          <div className='col-9'>
            <div className="container-fluid card_limit mt-2">
              <div className="d-flex">
                <h3 className='manage_card_heading'>Manage Card Limit</h3>
              </div>
              <div className="card mt-3">
                <h6 className="card_limit_heading p-3">Increase/Decrease Debit card Limit</h6>

                <div className="form_container p-3">

                  <div className="row">
                    <div className="col-sm-4">
                      <label for="text">Select the Account*</label>
                    </div>
                    <div className="col-sm-3">
                      <select
                        className="form_input"

                      >
                        {userDetails.map((account, index) => (
                          <option key={index} value={account.accountNumber}>
                            {account.accountNumber}
                            <p>-{account.firstname}{account.lastname}</p>
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col-sm-4">
                      <label for="text">Select the Debit Card*</label>
                    </div>
                    <div className="col-sm-3">
                      <select
                        className="form_input"
                        value={selectedDebitCard}
                        // disabled={!selectedAccount}
                        onChange={(event) => setSelectedDebitCard(event.target.value)}
                      >

                        {userDetails.length > 0 && (
                          <option value={formatDebitCardNumber(userDetails[0].userDebitCardDetails.userDebitCardNumber)}>
                            {formatDebitCardNumber(userDetails[0].userDebitCardDetails.userDebitCardNumber)}
                          </option>
                        )}

                      </select>

                    </div>
                  </div>

                  {/* radio-btn */}

                  <div className="row mt-4">
                    <div className="col-sm-4">

                      <input
                        type="radio"
                        id="domestic"
                        name="option"
                        value="domestic"
                        checked={showDomestic}
                        onChange={handleRadioChange}
                      />
                      <label for="domestic">Domestic Limits</label>
                    </div>
                    <div className="col-sm-4">

                      <input
                        type="radio"
                        id="international"
                        name="option"
                        value="international"
                        checked={!showDomestic}
                        onChange={handleRadioChange}
                      />
                      <label for="international" >International Limits</label>
                    </div>
                  </div>

                  {showDomestic ? (
                    /* Domestic container */

                    <div class="domestic container-fluid mt-5">
                      <div class="row">
                        <div class="col-sm-3">
                          <p>Domestic</p>
                        </div>
                        <div class="col-sm-5">
                          <div class="input_range">

                            <span class="zero">Min</span>
                            <span class="max_zero">Max</span>
                          </div>
                          <div>
                          </div>
                        </div>
                        <div class="col-sm-2">

                        </div>
                        <div class="col-sm-2">
                          <p>Enable/Disable</p>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-sm-3">
                          <p>Limit for cash withdrawal</p>
                        </div>
                        <div class="col-sm-5">
                          <div class="input_range">
                            <input
                              type="range"
                              min={0}
                              max={450000}
                              class="form-control-range"
                              onChange={handleDomesticLimitChange1}
                              value={domesticLimit1}
                              disabled={!isChecked1}
                            />
                            <span class="zero"><i class="fa-solid fa-indian-rupee-sign"></i><span>0</span></span>
                            <span class="max_zero"><i class="fa-solid fa-indian-rupee-sign"></i><span>450000</span></span>
                          </div>
                          <div>
                          </div>

                        </div>

                        <div class="col-sm-2">
                          <input type="text" className='form-control' value={domesticLimit1} />
                        </div>

                        <div class="col-sm-2">
                          <div className="toggle_container">
                            <input
                              type="checkbox"
                              className="toggle_input"
                              id="toggle1"
                              checked={isChecked1}
                              onChange={handleToggle1}
                            />
                            <label className="toggle_slider" htmlFor="toggle1"></label>
                          </div>
                        </div>
                      </div>

                      <div class="row mt-3">
                        <div class="col-sm-3">
                          <p>Limit for retail transactions</p>
                        </div>
                        <div class="col-sm-5">
                          <div class="input_range">
                            <input
                              type="range"
                              min={0}
                              max={750000}
                              class="form-control-range"
                              onChange={handleDomesticLimitChange2}
                              value={domesticLimit2}
                              disabled={!isChecked2}
                            />
                            <span class="zero"><i class="fa-solid fa-indian-rupee-sign"></i><span>0</span></span>
                            <span class="max_zero"><i class="fa-solid fa-indian-rupee-sign"></i><span>750000</span></span>
                          </div>
                          <div>
                          </div>

                        </div>
                        <div class="col-sm-2">
                          <input type="text" className='form-control' value={domesticLimit2} />
                        </div>
                        <div class="col-sm-2">
                          <div className="toggle_container">
                            <input
                              type="checkbox"
                              className="toggle_input"
                              id="toggle2"
                              checked={isChecked2}
                              onChange={handleToggle2}
                            />
                            <label className="toggle_slider" htmlFor="toggle2"></label>
                          </div>
                        </div>
                      </div>

                      <div class="row mt-3">
                        <div class="col-sm-3">
                          <p>Limit for E-commerce transactions</p>
                        </div>
                        <div class="col-sm-5">
                          <div class="input_range">
                            <input
                              type="range"
                              min={0}
                              max={750000}
                              class="form-control-range"
                              onChange={handleDomesticLimitChange3}
                              value={domesticLimit3}
                              disabled={!isChecked3}
                            />
                            <span class="zero"><i class="fa-solid fa-indian-rupee-sign"></i><span>0</span></span>
                            <span class="max_zero"><i class="fa-solid fa-indian-rupee-sign"></i><span>750000</span></span>
                          </div>
                          <div>
                          </div>

                        </div>
                        <div class="col-sm-2">
                          <input type="text" className='form-control' value={domesticLimit3} />
                        </div>
                        <div class="col-sm-2">
                          <div className="toggle_container">
                            <input
                              type="checkbox"
                              className="toggle_input"
                              id="toggle3"
                              checked={isChecked3}
                              onChange={handleToggle3}
                            />
                            <label className="toggle_slider" htmlFor="toggle3"></label>
                          </div>
                        </div>
                      </div>

                      <div class="row mt-2">
                        <div class="col-sm-3">
                          <p>Limit for ContactLess payments</p>
                        </div>
                        <div class="col-sm-5">
                          <div class="input_range">
                            <input
                              type="range"
                              min={0}
                              max={5000}
                              class="form-control-range"
                              onChange={handleDomesticLimitChange4}
                              value={domesticLimit4}
                              disabled={!isChecked4}
                            />
                            <span class="zero"><i class="fa-solid fa-indian-rupee-sign"></i><span>0</span></span>
                            <span class="max_zero"><i class="fa-solid fa-indian-rupee-sign"></i><span>5000</span></span>
                          </div>
                          <div>
                          </div>

                        </div>
                        <div class="col-sm-2">
                          <input type="text" className='form-control' value={domesticLimit4} />
                        </div>
                        <div class="col-sm-2">
                          <div className="toggle_container">
                            <input
                              type="checkbox"
                              className="toggle_input"
                              id="toggle4"
                              checked={isChecked4}
                              onChange={handleToggle4}
                            />
                            <label className="toggle_slider" htmlFor="toggle4"></label>
                          </div>
                        </div>
                      </div>

                    </div>

                  ) : (
                    /* International container */
                    <div class="domestic container-fluid mt-4">
                      <p style={{ color: '#ebca28' }}>Card is active for international transactions</p>
                      <div class="row">
                        <div class="col-sm-3">
                          <p>International</p>
                        </div>
                        <div class="col-sm-5">
                          <div class="input_range">

                            <span class="zero">Min</span>
                            <span class="max_zero">Max</span>
                          </div>
                          <div>
                          </div>
                        </div>
                        <div class="col-sm-2">

                        </div>
                        <div class="col-sm-2">
                          <p>Enable/Disable</p>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-sm-3">
                          <p>Limit for cash withdrawal</p>
                        </div>
                        <div class="col-sm-5">
                          <div class="input_range">
                            <input
                              type="range"
                              min={0}
                              max={450000}
                              class="form-control-range"
                              onChange={(event) => setInternationalLimit1(parseInt(event.target.value))}
                              value={internationalLimit1}
                              disabled={!isChecked5}
                            />
                            <span class="zero"><i class="fa-solid fa-indian-rupee-sign"></i><span>0</span></span>
                            <span class="max_zero"><i class="fa-solid fa-indian-rupee-sign"></i><span>450000</span></span>
                          </div>
                          <div>
                          </div>

                        </div>

                        <div class="col-sm-2">
                          <input type="text" className='form-control' value={internationalLimit1} />
                        </div>

                        <div class="col-sm-2">
                          <div className="toggle_container">
                            <input
                              type="checkbox"
                              className="toggle_input"
                              id="toggle5"
                              checked={isChecked5}
                              onChange={handleToggle5}

                            />
                            <label className="toggle_slider" htmlFor="toggle5"></label>
                          </div>
                        </div>
                      </div>

                      <div class="row mt-3">
                        <div class="col-sm-3">
                          <p>Limit for retail transactions</p>
                        </div>
                        <div class="col-sm-5">
                          <div class="input_range">
                            <input
                              type="range"
                              min={0}
                              max={450000}
                              class="form-control-range"
                              onChange={(event) => setInternationalLimit2(parseInt(event.target.value))}
                              value={internationalLimit2}
                              disabled={!isChecked6}
                            />
                            <span class="zero"><i class="fa-solid fa-indian-rupee-sign"></i><span>0</span></span>
                            <span class="max_zero"><i class="fa-solid fa-indian-rupee-sign"></i><span>450000</span></span>
                          </div>
                          <div>
                          </div>

                        </div>
                        <div class="col-sm-2">
                          <input type="text" className='form-control' value={internationalLimit2} />
                        </div>
                        <div class="col-sm-2">
                          <div className="toggle_container">
                            <input
                              type="checkbox"
                              className="toggle_input"
                              id="toggle6"
                              checked={isChecked6}
                              onChange={handleToggle6}
                            />
                            <label className="toggle_slider" htmlFor="toggle6"></label>
                          </div>
                        </div>
                      </div>

                      <div class="row mt-3">
                        <div class="col-sm-3">
                          <p>Limit for E-commerce transactions</p>
                        </div>
                        <div class="col-sm-5">
                          <div class="input_range">
                            <input
                              type="range"
                              min={0}
                              max={450000}
                              class="form-control-range"
                              onChange={(event) => setInternationalLimit3(parseInt(event.target.value))}
                              value={internationalLimit3}
                              disabled={!isChecked7}
                            />
                            <span class="zero"><i class="fa-solid fa-indian-rupee-sign"></i><span>0</span></span>
                            <span class="max_zero"><i class="fa-solid fa-indian-rupee-sign"></i><span>450000</span></span>
                          </div>
                          <div>
                          </div>

                        </div>
                        <div class="col-sm-2">
                          <input type="text" className='form-control' value={internationalLimit3} />
                        </div>
                        <div class="col-sm-2">
                          <div className="toggle_container">
                            <input
                              type="checkbox"
                              className="toggle_input"
                              id="toggle7"
                              checked={isChecked7}
                              onChange={handleToggle7}
                            />
                            <label className="toggle_slider" htmlFor="toggle7"></label>
                          </div>
                        </div>
                      </div>

                      <div class="row mt-2">
                        <div class="col-sm-3">
                          <p>Limit for ContactLess payments</p>
                        </div>
                        <div class="col-sm-5">
                          <div class="input_range">
                            <input
                              type="range"
                              min={0}
                              max={5000}
                              class="form-control-range"
                              onChange={(event) => setInternationalLimit4(parseInt(event.target.value))}
                              value={internationalLimit4}
                              disabled={!isChecked8}
                            />
                            <span class="zero"><i class="fa-solid fa-indian-rupee-sign"></i><span>0</span></span>
                            <span class="max_zero"><i class="fa-solid fa-indian-rupee-sign"></i><span>5000</span></span>
                          </div>
                          <div>
                          </div>

                        </div>
                        <div class="col-sm-2">
                          <input type="text" className='form-control' value={internationalLimit4} />
                        </div>
                        <div class="col-sm-2">
                          <div className="toggle_container">
                            <input
                              type="checkbox"
                              className="toggle_input"
                              id="toggle8"
                              checked={isChecked8}
                              onChange={handleToggle8}
                            />
                            <label className="toggle_slider" htmlFor="toggle8"></label>
                          </div>
                        </div>
                      </div>

                    </div>

                  )}

                  {/* mobilenumber */}
                  <div className="row mt-5">
                    <div className="col-sm-4">
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
                  {/* gmail */}
                  <div className="row mt-3">
                    <div className="col-sm-4">
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
                {/* mandatory */}
                <div className='mandatory_field'>
                  <p className="pl-3">*Mandatory Fields</p>
                </div>
                <hr />
                <div className="row pl-2 otp_container mb-3">
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
                    {errorMessage && <p className='text-danger'>{errorMessage}</p>}

                  </div>
                </div>
                <hr />
                <div className="d-flex mb-3 ml-3">

                  <Link to='/user/account/debit-atm-card'>
                    <button className='back_btn'>BACK</button>
                  </Link>
                  <button className='ml-3 submit_btn' onClick={handleSubmit}>
                    SUBMIT
                  </button>
                </div>
              </div>
              <div className='card_limit_notes mt-2'>
                <h6 className='ml-3'>Notes:</h6>
                <div>
                  <ol>
                    <li>For NRO account only Domestic limits can be changed.</li>
                    <li>Limit can be changed in multiple of Rs 5000/- only.</li>
                    <li>Deactivated limits for Domestic & International transactions will be set to Rs 1.</li>
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


export default ManageCardLimit;



