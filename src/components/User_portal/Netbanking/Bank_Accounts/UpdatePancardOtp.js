import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Accounts.css';
import apiList from '../../../../lib/apiList';
import { MdOutlineMessage } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';



const UpdatePancardOtpPage = () => {

    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState([]);
    const [lastFourDigits, setLastFourDigits] = useState('');
    const [otp, setOtp] = useState('');
    const [validationError, setValidationError] = useState('');
    const [timer, setTimer] = useState(60);
    const [buttonsDisabled, setButtonsDisabled] = useState(true);
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

    const handleOtpChange = (event) => {
        setOtp(event.target.value);
        setValidationError('');
    };


    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer > 0) {
                    return prevTimer - 1;
                } else {
                    setButtonsDisabled(false);
                    return 0;
                }
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);


    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };


    const formatDebitCardNumber = (cardNumber) => {

        const cardNumberString = String(cardNumber);
        const firstFourDigits = cardNumberString.substring(0, 4);
        const lastFourDigits = cardNumberString.substring(cardNumberString.length - 4);
        const maskedDigits = 'X'.repeat(cardNumberString.length - 8);

        return `${firstFourDigits}${maskedDigits}${lastFourDigits}`;
    };


    const handleOtpGeneration = async (chosenMethod) => {
        try {
            if (Array.isArray(userDetails) && userDetails.length > 0) {
                const otpResponse = await axios.post(
                    `${apiList.createVerificationCode}`,
                    {
                        accountNumber: userDetails[0].accountNumber,
                        debitCardNumber: formatDebitCardNumber(userDetails[0].userDebitCardDetails.userDebitCardNumber),
                        mobileNumber: lastFourDigits,
                        otpMethod: chosenMethod
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json',
                        },
                    }
                );
                console.log(otpResponse.data);
                setTimer(60);
                setButtonsDisabled(true);
                setOtp('');
            } else {
                console.error('Invalid user details:', userDetails);
            }
        } catch (error) {
            console.error('Error generating OTP:', error);
        }
    };

    const handleOtpValidation = async () => {
        try {
            const AccountNumber = userDetails[0].accountNumber;
            const response = await axios.post(`${apiList.authenticateOTP}`, { AccountNumber, otp },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
            console.log(response.data);
            alert('Success! Your PAN card has been successfully updated');
            navigate("/user/account/view-update-pancard");
        } catch (error) {
            console.error('Error validating OTP:', error);
            setValidationError('Invalid OTP. Please try again.');
        }
    };

    return (
        <div className='container-fluid manage_card_otp' style={{ marginTop: '80px' }}>
            <div className='row'>

                <div className='col-sm-3'>
                    <BankaccountSidebar />
                </div>
                <div className='col-sm-9 card'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='manage_card_otp_para p-2'>
                                <label htmlFor='otp' style={{ color: 'green' }}>One Time Password</label>
                                <div className='manage_card_otp_icon'>
                                    <input
                                        className='manage_card_otp_div_label'
                                        type='text'
                                        id='otp'
                                        name='otp'
                                        value={otp}
                                        onChange={handleOtpChange}
                                    />

                                    <button className='manage_card_otp_icon_otp'>
                                        <i className='fa-solid fa-keyboard fa-xl'></i>
                                    </button>
                                    <p className='ml-1'>OTP has been generated with validity of 100 seconds</p>
                                </div>
                                <p>Still didn't get OTP? Resend OTP in {formatTime(timer)} seconds</p>
                            </div>

                            <div className='row p-2'>
                                <div className='col-sm-6'>
                                    <div className=''>
                                        <button
                                            className='manage_card_otp_btn'
                                            onClick={() => handleOtpGeneration('sms')}
                                            disabled={buttonsDisabled}
                                        >
                                            <MdOutlineMessage className='manage_card_otp_btn_logos' /> SMS
                                        </button>
                                        <button
                                            className='manage_card_otp_btn ml-2'
                                            onClick={() => handleOtpGeneration('email')}
                                            disabled={buttonsDisabled}
                                        >
                                            <MdOutlineMail className='manage_card_otp_btn_logos' /> Email
                                        </button>
                                        <button
                                            className='manage_card_otp_btn ml-2'
                                            onClick={() => handleOtpGeneration('call')}
                                            disabled={buttonsDisabled}
                                        >
                                            <IoCallOutline className='manage_card_otp_btn_logos' /> Call
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-1 p-2 text'>
                                <p>
                                    If there is a delay in receipt of OTP, you can send a request to receive it. SMS IBOTP to 5676766 or
                                    9215676766. Request should be sent from the mobile number registered in our records.
                                </p>
                            </div>
                            <div className='p-2'>
                                <p style={{ fontSize: '14px' }}>
                                    Please do not share OTP with anyone, even if the person claims to be an ROYAL ISLAMIC Bank official. For further
                                    details please <Link to='/some-link'>click here.</Link>
                                </p>
                            </div>

                            {validationError && <div style={{ color: 'red' }}>{validationError}</div>}

                            <div className='d-flex mt-1 mb-4'>

                                <Link to='/user/account/view-update-pancard'>
                                    <button type="button" className="manage_card_otp_back_buttons ml-2">BACK</button>
                                </Link>
                                <button type='button' className='manage_card_otp_submits ml-3' onClick={handleOtpValidation}>
                                    SUBMIT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default UpdatePancardOtpPage;




