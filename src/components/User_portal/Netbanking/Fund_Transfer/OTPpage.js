import React, { useState, useEffect } from 'react';
import { Link, useNavigate,useLocation } from 'react-router-dom';
import axios from 'axios';
import './FundTransfer.css';

import { MdOutlineMessage } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';
import apiList from '../../../../lib/apiList';



const OTPPage = () =>{
    const location = useLocation();
    const navigate = useNavigate();
    const formData = location ? location.state : null;
    const [userDetails, setUserDetails] = useState([]);
    const [lastFourDigits, setLastFourDigits] = useState('');
    const [otp, setOtp] = useState('');
    const [validationError, setValidationError] = useState('');
    const [timer, setTimer] = useState(100);
    const [buttonsDisabled, setButtonsDisabled] = useState(true);
    const token = sessionStorage.getItem('loginToken');


    console.log(formData);

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

        return ` ${firstFourDigits}${maskedDigits}${lastFourDigits}`;
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

            if(response.status===200){
                const response = await fetch(`${apiList.quickFundTransfer}`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                alert("amount transfered succesfully");
                navigate("/user/fundtransfer/quickfundtransfer");
            }
            console.log(response.data);
         
        } catch (error) {
            console.error('Error validating OTP:', error);
            setValidationError('Invalid OTP. Please try again.');
        }
    };

    return(
        <div className='container-fluid' style={{ marginTop: "90px" }}>
            <div className='row'>
            <div className='col-3'>
                    <BankaccountSidebar/>
                </div>
                <div className='col-sm-9'>
                <p className="pl-2">Please enter these details to authorize the transaction</p>

<div className=" quick_fund_transfer_para p-2">
    <label htmlFor="otp">One Time Password</label>
    <div className="quick_fund_transfer_icon">
        <input
            className="quick_fund_transfer_div_label"
            type="text"
            id="otp"
            name="otp"
            value={otp}
            onChange={handleOtpChange}
        />

        <button className="quick_fund_transfer_icon_otp">
            <i class="fa-solid fa-keyboard fa-xl"></i>
        </button>
        <p className='ml-1'>OTP has been generated with validity of 100 seconds</p>
    </div>
    <p>Still didn't get OTP? Resend OTP in {formatTime(timer)} seconds</p>
</div>

<div className='row  p-2' >
    <div className='col-sm-6'>
        <div className=''>
            <button className='quick_fund_transfer_button ml-2' onClick={() => handleOtpGeneration('sms')} disabled={buttonsDisabled}><MdOutlineMessage className='generate_debit_pin_button_logos' /> SMS</button>
            <button className='quick_fund_transfer_button ml-2' onClick={() => handleOtpGeneration('email')} disabled={buttonsDisabled}><MdOutlineMail className='generate_debit_pin_button_logos'/> Email</button>
            <button className='quick_fund_transfer_button ml-2' onClick={() => handleOtpGeneration('call')} disabled={buttonsDisabled}><IoCallOutline className='generate_debit_pin_button_logos' /> Call</button>

        </div>
    </div>
</div>

<div className='mt-1 p-2'>
    <p>If there is a delay in receipt of OTP, you can send a request to receive it. SMS IBOTP to 5676766 or 9215676766. Request should be sent from the mobile number registered in our records.</p>
    </div>
    <div className='p-2'>
        <p>Please do not share OTP with anyone, even if the person claims to be an ICICI Bank official. For further details please <Link>click here.</Link></p>
    </div>

{validationError && <div style={{ color: 'red' }}>{validationError}</div>}

<div className="d-flex mt-3 mb-3">
    <button type="button" className="quick_fund_buttons ml-3">
        BACK
    </button>
    <button type="button" className="quick_fund_submits ml-5" onClick={handleOtpValidation} >
        SUBMIT
    </button>
</div>
                </div>

            </div>
        </div>
    )
}

export default OTPPage;