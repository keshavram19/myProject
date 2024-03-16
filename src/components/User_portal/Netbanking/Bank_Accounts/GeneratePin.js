import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Accounts.css';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';
import apiList from '../../../../lib/apiList';


const GeneratePin = () => {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState([]);
    const [selectedAccount, setSelectedAccount] = useState('');
    const [selectedDebitCard, setSelectedDebitCard] = useState('');
    const [lastFourDigits, setLastFourDigits] = useState('');
    const [cvv, setCvv] = useState('');
    const [otpMethod, setOtpMethod] = useState('sms');
    const [formError, setFormError] = useState('');
    const token = sessionStorage.getItem('loginToken');


    useEffect(() => {

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
                    setUserDetails([data.user]);
                    setLastFourDigits([data.user.mobilenumber])
                } else {
                    console.error('Error fetching user details:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        fetchData();
    }, []);


    const handleAccountChange = (event) => {
        setSelectedAccount(event.target.value);
    };

    const handleCvvChange = (event) => {
        setFormError('');
        setCvv(event.target.value);
    };


    const formatDebitCardNumber = (cardNumber) => {

        const cardNumberString = String(cardNumber);
        const firstFourDigits = cardNumberString.substring(0, 4);
        const lastFourDigits = cardNumberString.substring(cardNumberString.length - 4);
        const maskedDigits = 'X'.repeat(cardNumberString.length - 8);

        return `${firstFourDigits}${maskedDigits}${lastFourDigits}`;
    };

    const handleOtpMethodChange = (event) => {
        setOtpMethod(event.target.value);
    };


    const handleOtpGeneration = async () => {
        try {
            if (!cvv || cvv.length !== 3) {
                setFormError('Please enter a valid CVV.');
                return;
            }

            if (Array.isArray(userDetails) && userDetails.length > 0) {
                const storedCVV = userDetails[0].userDebitCardDetails.userDebitCardcvv;
                if (cvv !== storedCVV.toString()) {
                    setFormError('Invalid CVV. Please enter the correct CVV.');
                    return;
                }

                const otpResponse = await axios.post(
                    `${apiList.createVerificationCode}`,
                    {
                      accountNumber: selectedAccount,
                      debitCardNumber: selectedDebitCard,
                      cvv: cvv,
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
                navigate('/user/account/generate-debit-card-pin-otp');
            } else {
                console.error('Invalid user details:', userDetails);
            }
        } catch (error) {
            console.error('Error generating OTP:', error);
        }
    };


    function maskEmail(email) {
        const parts = email.split('@');
        const maskedUsername = parts[0].slice(0, 3) + '*'.repeat(parts[0].length - 3);
        const maskedEmail = `${maskedUsername}@${parts[1]}`;
        return maskedEmail;
    }


    return (
        <div className='container-fluid' style={{ marginTop: "90px" }}>
            <div className='row'>

                <div className='col-3'>
                    <BankaccountSidebar />
                </div>
                <div className='col-9'>
                    <div className="container-fluid generate_pin mt-1">
                        <hr />
                        <div className="card mt-1">
                            <h5 className="header card_details_generate_pin_heading p-3">Generate Debit Card PIN</h5>
                            <div className="container-fluid p-2">
                                <div className="row card_details_generate_pin_select_tag">
                                    <div className="col-sm-6">
                                        <label for="ac_number">Select Account Number*</label>
                                    </div>
                                    <div className="col-sm-4 ">
                                        <select
                                            className="form-control"
                                            value={selectedAccount}
                                            onChange={handleAccountChange}
                                        >
                                            <option value="">Select Account Number</option>
                                            {userDetails.map((account, index) => (
                                                <option key={index} value={account.accountNumber}>
                                                    {account.accountNumber}
                                                </option>
                                            ))}
                                        </select>

                                    </div>
                                </div>
                                <div className="row card_details_generate_pin_select_tag mt-2">
                                    <div className="col-sm-6">
                                        <label for="card_number">Debit Card Number*</label>
                                    </div>
                                    <div className="col-sm-4">
                                        <select
                                            className="form-control"
                                            value={selectedDebitCard}
                                            disabled={!selectedAccount}
                                            onChange={(event) => setSelectedDebitCard(event.target.value)}
                                        >
                                            <option value="">Select</option>

                                            {userDetails.length > 0 && userDetails[0].userDebitCardDetails && (
                                                <option value={formatDebitCardNumber(userDetails[0].userDebitCardDetails.userDebitCardNumber)}>
                                                    {formatDebitCardNumber(userDetails[0].userDebitCardDetails.userDebitCardNumber)}
                                                </option>
                                            )}


                                        </select>

                                    </div>
                                </div>
                                <div className="row card_details_generate_pin_input_tag mt-2">
                                    <div className="col-sm-6">
                                        <label htmlFor='text'>CVV Number*</label>
                                    </div>
                                    <div className="col-sm-3">
                                        <input
                                            type='number'
                                            className='form-control'
                                            id='text'
                                            value={cvv}
                                            onChange={handleCvvChange}
                                        />
                                    </div>
                                </div>
                                <div className="row mt-2 card_details_generate_pin_input_tag">
                                    <div className="col-sm-6">
                                        <label for="text">Mobile Number*</label>
                                    </div>
                                    <div className="col-sm-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="text"
                                            value={`XXXXXX${String(lastFourDigits).slice(-4)}`}
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>
                            <p className="pl-2">*Mandatory Fields</p>
                            {formError && (
                                <div className="error-message" style={{ color: "red" }}>{formError}</div>
                            )}

                            <hr />
                            <div className="row pl-2">
                                <div className="col-sm-5">
                                    <h6 className="pl-2">How would you like to get OTP?</h6>
                                    <div className="pl-2 d-flex justify-content-between">
                                        <div className="genrate_pin_sms">
                                            <input
                                                type="radio"
                                                id="sms"
                                                name="options"
                                                value="sms"
                                                checked={otpMethod === 'sms'}
                                                onChange={handleOtpMethodChange}
                                            />
                                            <label htmlFor="sms" className="ml-2">
                                                SMS
                                            </label>
                                        </div>
                                        <div className="genrate_pin_Email">
                                            <input
                                                type="radio"
                                                id="email"
                                                name="options"
                                                value="email"
                                                checked={otpMethod === 'email'}
                                                onChange={handleOtpMethodChange}
                                            />
                                            <label for="email" className="ml-2">
                                                Email
                                            </label>
                                        </div>
                                        <div className="genrate_pin_Call">
                                            <input
                                                type="radio"
                                                id="call"
                                                name="options"
                                                value="call"
                                                checked={otpMethod === 'call'}
                                                onChange={handleOtpMethodChange}
                                            />
                                            <label for="call" className="ml-2">
                                                Call
                                            </label>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <p className='pl-2'>
                                {otpMethod === 'sms' || otpMethod === 'call'
                                    ? `OTP will be sent to registered mobile number XXXXXXX${String(lastFourDigits).slice(-4)}`
                                    : otpMethod === 'email'
                                        ? `OTP will be sent to registered email ${userDetails.length > 0 ? maskEmail(userDetails[0].email) : ''}`
                                        : ''}
                            </p>
                            <hr />
                            <div className="d-flex mb-3">
                                <button type="button" className="genrate_pin_buttons ml-3">
                                    BACK
                                </button>
                                <button type="button" className="genrate_pin_submits ml-5" onClick={handleOtpGeneration}>
                                    SUBMIT
                                </button>
                            </div>
                        </div>
                        <div className='card_details_generate_pin_notes'>
                            <h6>Notes:</h6>
                            <ol>
                                <li>Active debit Card is required to generate PIN online <Link to='/'>Click here</Link> to apply for Debit Card.</li>
                                <li>This facility is available for resident customer having an Indian mobile number registered in their savings bank account and NRI customer/ mandate holders having a registered email ID.</li>
                                <li>OTP will be sent to the registered mobile number/email ID.</li>
                                <li>Resident Savings Account holders can add/update mobile number by visiting the nearest ICICI Bank tiranch or ATM NRI customers can update their email ID by contacting our 24 hour Customer Care.</li>
                                <li>In case you have updated your mobile number/Email ID in the past 24 hours, you will not be able to generate ATM PIN online.</li>
                                <li>To place request for Debit Card Pili to be sent to your communication address, please call <a href="#">24 hr. Gustomer Care</a> or visit the branch.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

};

export default GeneratePin;