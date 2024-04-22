import React, { useEffect, useState, useRef, createRef } from 'react';
import { Link, useNavigate,useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import './FundTransfer.css';
import 'react-toastify/dist/ReactToastify.css';
import { MdOutlineMessage } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import apiList from '../../../../lib/apiList';
import PaymentSidebar from '../Sidebar/PaymentsAndTransferSidebar';



const OTPPage = () =>{
    const location = useLocation();
    const navigate = useNavigate();
    const formData = location ? location.state : null;
    const [userDetails, setUserDetails] = useState([]);
    const [lastFourDigits, setLastFourDigits] = useState('');
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    let token = sessionStorage.getItem('loginToken');
    const otpInputsRefs = useRef([]);
    const [validationError, setValidationError] = useState('');
    const [timer, setTimer] = useState(100);
    const [buttonsDisabled, setButtonsDisabled] = useState(true);

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

                    setUserDetails(data.user);
                } else {
                    console.error('Error fetching user details:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        fetchData();
    }, []);




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

    const handleOtpGeneration = async () => {
        try {
            const otpResponse = await axios.post(
                `${apiList.createVerificationCode}`,
                {
                    accountNumber: userDetails.accountNumber,
                    otpMethod: "sms",
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
        } catch (error) {
            console.error('Error generating OTP:', error);
        }
    };

 

    const handleInputChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value !== '' && index < otpInputsRefs.current.length - 1) {
            otpInputsRefs.current[index + 1].focus();
        }
        setValidationError('');
    };

    const handleBackspace = (index, e) => {
        if (e.keyCode === 8 && index > 0 && otp[index] === '') {
            otpInputsRefs.current[index - 1].focus();
        }
    };

    const handleResendOTP = async () => {
        try {
            await handleOtpGeneration();
            toast.success('Verification Code Sent Successfully', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
            setValidationError('');
        } catch (error) {
            console.error('Error resending OTP:', error);
        }
    };
    

    const verifyOTP = async () => {
        try {
        const otpString = otp.join('');
            const response = await axios.post(`${apiList.authenticateOTP}`, { otp:otpString },
            {
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
            });
       
            
            if (response.status === 200) {
                
                const res = await fetch(`${apiList.quickFundTransfer}`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                if(res.status === 200){
                    toast.success('amount transfered succesfully', {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored"
                    });
                    navigate("/user/fundtransfer/quickfundtransfer");
                }     
            } else {
                toast.error('Invalid OTP!', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored"
                });
            }
        } catch (error) {
            console.log('Error Verifying OTP:', error);
            setValidationError('Invalid OTP. Please try again.');
        }
        setOtp(['', '', '', '', '', '']);
    };

    const verifyCode = () => {
        verifyOTP();
    };

    useEffect(() => {
        otpInputsRefs.current = Array(6).fill().map((_, i) => otpInputsRefs.current[i] || createRef());
    }, [otpInputsRefs]);


    return(
        <div className='container-fluid' style={{ marginTop: "90px" }}>
            <div className='row'>
            <div className='col-3'>
                    <PaymentSidebar/>
                </div>
                <div className='col-9'>
                        <div className='savings_acct_user_auth_container'>
                            <div className='savings_acct_user_auth_container_header'>Quick Fund Transfer</div>
                            <div className='savings_acct_user_auth_details_container'>
                                <div className='d-flex justify-content-center'>
                                    {userDetails && (
                                        <div>
                                            <div className='otp_code_mobile'>Enter OTP Code sent to {userDetails.mobilenumber}</div>
                                            <div className='otp_code_input_boxes'>
                                                {Array.from({ length: 6 }, (_, index) => (
                                                    <input
                                                        key={index}
                                                        ref={el => otpInputsRefs.current[index] = el}
                                                        className={`otp_code_box otp_code_box${index + 1}`}
                                                        type='text'
                                                        maxLength={1}
                                                        value={otp[index]}
                                                        onKeyDown={(e) => handleBackspace(index, e)}
                                                        onChange={(e) => handleInputChange(index, e.target.value)}
                                                    />
                                                ))}
                                            </div>
                                            <div className='text-center d-flex otp_code_resend'>
                                                <div>Don't receive OTP code?</div>
                                                <div className='resend_code_text ml-2' onClick={handleResendOTP}>Resend Code</div>
                                            </div>
                                            <ToastContainer />
                                            <div className='otp_verify_btn_container mt-2'>
                                                <button className='otp_verify_btn' type='button' onClick={verifyCode}>
                                                    Verify & Proceed
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {validationError && <div style={{ color: 'red' }}>{validationError}</div>}
                                <div className='savings_acct_user_auth_text1 mt-2'>
                                    <div>
                                        The OTP code has a validity of 60 seconds and is sent to your registered email address.
                                    </div>
                                    <div className='my-2'>
                                        If you experience a delay in receiving the OTP, you can request it via SMS by sending IBOTP to
                                        either 5676766 or 92156766 from your registered mobile number.
                                    </div>
                                    <div>
                                        It's crucial not to share the OTP with anyone, even if they claim to be a Roayl Islamic bank official.
                                        For additional information, <a href='#'>click here</a>.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
        </div>
    )
}

export default OTPPage;