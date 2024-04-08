import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Creditcard.css';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';
import apiList from '../../../../lib/apiList';


const GenerateCreditCardPin = () => {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState([]);
    const [selectedAccount, setSelectedAccount] = useState('');
    const [selectedCreditCard, setSelectedCreditCard] = useState('');
    const [lastFourDigits, setLastFourDigits] = useState('');
    const [cvv, setCvv] = useState('');
    const [otpMethod, setOtpMethod] = useState('sms');
    const [formError, setFormError] = useState('');

    const token = sessionStorage.getItem('loginToken');



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
                } else if (typeof userDetailsData === 'object') {
                    setUserDetails([userDetailsData]);
                    setSelectedAccount(userDetailsData.userAccountNumber);
                    setLastFourDigits(data.user.mobilenumber);
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



    const handleCvvChange = (event) => {
        setFormError('');
        setCvv(event.target.value);
    };


    const formatCreditCardNumber = (cardNumber) => {

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

            await fetchData();

            if (Array.isArray(userDetails) && userDetails.length > 0) {
                const storedCVV = userDetails[0].userCreditCardDetails[0].userCreditCardcvv;
                if (cvv !== storedCVV.toString()) {
                    setFormError('Invalid CVV. Please enter the correct CVV.');
                    return;
                }

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

                    window.location.href = '/user/account/generate-credit-card-pin-otp';
                } else {
                    alert('Failed to generate OTP. Please try again.');
                }
            }
        } catch (error) {
            console.error('Error generating OTP:', error);
            alert('An error occurred while generating OTP. Please check your mobile for the OTP.');
        }
    };

    function maskEmail(email) {
        const parts = email.split('@');
        const maskedUsername = parts[0].slice(0, 3) + '*'.repeat(parts[0].length - 3);
        const maskedEmail = `${maskedUsername}@${parts[1]}`;
        return maskedEmail;
    }



    return (
        <div className='container-fluid generate_credit_pin' style={{ marginTop: "90px" }}>
            <div className='row'>

                <div className='col-3'>
                    <BankaccountSidebar />
                </div>
                <div className='col-9'>
                    <div className="container-fluid generate_credit_pin mt-1">
                        <div className="card mt-1">
                            <h5 className="header generate_credit_pin_heading  p-3">Generate Credit Card PIN</h5>
                            <div className="container-fluid p-2">
                                <div className="row generate_credit_pin_details">
                                </div>
                                <div className="row card_details_generate_pin_input_tag mt-2">
                                    <div className="col-sm-6">
                                        <label for="card_number" className='ml-2'>Credit Card Number*</label>
                                    </div>
                                    <div className="col-sm-4">
                                        <select
                                            className="credit_card_input"
                                            value={selectedCreditCard}
                                            onChange={(event) => setSelectedCreditCard(event.target.value)}
                                        >
                                            {userDetails.length > 0 && (
                                                <option value={formatCreditCardNumber(userDetails[0].userCreditCardDetails[0].creditCardNumber)}>
                                                    {formatCreditCardNumber(userDetails[0].userCreditCardDetails[0].creditCardNumber)}
                                                </option>
                                            )}

                                        </select>

                                    </div>
                                </div>
                                <div className="row card_details_generate_pin_input_tag mt-2">
                                    <div className="col-sm-6">
                                        <label htmlFor='text' className='ml-2'>CVV Number*</label>
                                    </div>
                                    <div className="col-sm-3">
                                        <input
                                            type='number'
                                            className='credit_card_input'
                                            id='text'
                                            value={cvv}
                                            onChange={handleCvvChange}
                                        />
                                    </div>
                                </div>
                                <div className="row mt-2 card_details_generate_pin_input_tag">
                                    <div className="col-sm-6">
                                        <label for="text" className='ml-2'>Mobile Number*</label>
                                    </div>
                                    <div className="col-sm-3">
                                        <input
                                            type="text"
                                            className="credit_card_input"
                                            id="text"
                                            value={`XXXXXX${String(lastFourDigits).slice(-4)}`}
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>
                            <p className="pl-2 card_details_generate_pin_input_tag ml-2">*Mandatory Fields</p>
                            {formError && (
                                <div className="error-message ml-3" style={{ color: "red" }}>{formError}</div>
                            )}

                            <hr />
                            <div className="row pl-2 otp_container">
                                <div className="col-sm-5 ">
                                    <h6 className="pl-2">How would you like to get OTP?</h6>
                                    <div className="pl-2 d-flex mt-3">
                                        <div className="pr-3">
                                            <input
                                                type="radio"
                                                className='generate_pin_input'
                                                id="sms"
                                                name="options"
                                                value="sms"
                                                checked={otpMethod === 'sms'}
                                                onChange={handleOtpMethodChange}
                                            />
                                            <label htmlFor="sms">
                                                SMS
                                            </label>
                                        </div>
                                        <div className="pr-3">
                                            <input
                                                type="radio"
                                                className='generate_pin_input'
                                                id="email"
                                                name="options"
                                                value="email"
                                                checked={otpMethod === 'email'}
                                                onChange={handleOtpMethodChange}
                                            />
                                            <label for="email">
                                                Email
                                            </label>
                                        </div>
                                        <div className="pr-3">
                                            <input
                                                type="radio"
                                                className='generate_pin_input'
                                                id="call"
                                                name="options"
                                                value="call"
                                                checked={otpMethod === 'call'}
                                                onChange={handleOtpMethodChange}
                                            />
                                            <label for="call" >
                                                Call
                                            </label>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <p className='pl-3 mt-2'>
                                {otpMethod === 'sms' || otpMethod === 'call'
                                    ? `OTP will be sent to registered mobile number XXXXXXX${String(lastFourDigits).slice(-4)}`
                                    : otpMethod === 'email'
                                        ? `OTP will be sent to registered email ${userDetails.length > 0 ? maskEmail(userDetails[0].email) : ''}`
                                        : ''}
                            </p>
                            <hr />
                            <div className="d-flex mb-3">

                                <button type="button" className="submit_Btn ml-3" onClick={handleOtpGeneration}>
                                    SUBMIT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

};

export default GenerateCreditCardPin;