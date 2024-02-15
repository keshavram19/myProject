import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Accounts.css';
import apiList from '../../../../lib/apiList';
import { MdOutlineMessage } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";



const OTPPage = () =>{
    const navigate = useNavigate();

    const [userDetails, setUserDetails] = useState([]);
    const [lastFourDigits, setLastFourDigits] = useState('');
    const [otp, setOtp] = useState('');
    const [validationError, setValidationError] = useState('');
    const [timer, setTimer] = useState(100);
    const [buttonsDisabled, setButtonsDisabled] = useState(true);
    const accountNumber = 1124563456;


    
    const fetchData = async () => {
        try {
            const response = await axios.get(`${apiList.customerAccountDetails}${accountNumber}`);
            const userDetailsData = response.data.details;

            if (Array.isArray(userDetailsData)) {
                setUserDetails(userDetailsData);
                setLastFourDigits(userDetailsData[0].userMobileNumber);
            } else if (typeof userDetailsData === 'object') {
                setUserDetails([userDetailsData]);
                setLastFourDigits(userDetailsData.userMobileNumber);
            } else {
                console.error('Invalid user details format:', userDetailsData);
            }

        } catch (error) {
            console.error('Error fetching user details:', error);
        }
        console.log('User Details:', userDetails);

    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleOtpChange = (event) => {
        console.log('OTP Changed:', event.target.value);
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
            await fetchData();

            if (Array.isArray(userDetails) && userDetails.length > 0) {
                const otpResponse = await axios.post(`${apiList.GenerateCardPin}`, {
                    accountNumber: userDetails[0].userAccountNumber,
                    debitCardNumber: formatDebitCardNumber(userDetails[0].userDebitCardDetails.userDebitCardNumber),
                    mobileNumber: lastFourDigits,
                    otpMethod: chosenMethod,
                });

                console.log(otpResponse.data);
                
                setTimer(100);
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
            await fetchData();
            const accountNumber = userDetails[0].userAccountNumber;
            console.log(accountNumber);
            const response = await axios.post(`${apiList.authenticateOTP}`, { accountNumber, otp });

            console.log(response.data);
            navigate("/user/account/generate-debit-card-pin");
        } catch (error) {
            console.error('Error validating OTP:', error);
            setValidationError('Invalid OTP. Please try again.');
        }
    };

    return(
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-12'>
                <p className="pl-2">Please enter these details to authorize the transaction</p>

<div className=" generate_debit_pin_para p-2">
    <label htmlFor="otp">One Time Password</label>
    <div className="generate_debit_pin_icon">
        <input
            className="generate_debit_pin_div_label"
            type="text"
            id="otp"
            name="otp"
            value={otp}
            onChange={handleOtpChange}
        />

        <button className="generate_debit_pin_icon_otp">
            <i class="fa-solid fa-keyboard fa-xl"></i>
        </button>
        <p className='ml-1'>OTP has been generated with validity of 100 seconds</p>
    </div>
    <p>Still didn't get OTP? Resend OTP in {formatTime(timer)} seconds</p>
</div>

<div className='row  p-2' >
    <div className='col-sm-6'>
        <div className=''>
            <button className='generate_debit_pin_button ml-2' onClick={() => handleOtpGeneration('sms')} disabled={buttonsDisabled}><MdOutlineMessage className='generate_debit_pin_button_logos' /> SMS</button>
            <button className='generate_debit_pin_button ml-2' onClick={() => handleOtpGeneration('email')} disabled={buttonsDisabled}><MdOutlineMail className='generate_debit_pin_button_logos'/> Email</button>
            <button className='generate_debit_pin_button ml-2' onClick={() => handleOtpGeneration('call')} disabled={buttonsDisabled}><IoCallOutline className='generate_debit_pin_button_logos' /> Call</button>

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
    <button type="button" className="genrate_pin_buttons ml-3">
        BACK
    </button>
    <button type="button" className="genrate_pin_submits ml-5" onClick={handleOtpValidation} >
        SUBMIT
    </button>
</div>
                </div>

            </div>
        </div>
    )
}

export default OTPPage;