import React, { useEffect, useState, useRef, createRef } from 'react';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';
import './Accounts.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import apiList from '../../../../lib/apiList';
import { usePDFData } from '../../../../PDFDataContext.js';
import { useNavigate } from 'react-router-dom';


const StatementByMail = () => {
    const [authDetails, setAuthDetails] = useState({
        email: ''
    });
    const navigate = useNavigate();
    const { pdfData } = usePDFData();
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    let token = sessionStorage.getItem('loginToken');
    const otpInputsRefs = useRef([]);

    useEffect(() => {
        getAuthenticatioDetails();
    }, []);

    const getAuthenticatioDetails = async () => {
        const options = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        };

        try {
            const response = await fetch(apiList.requestedUserDetailsByEmail, options);
            if (response.ok) {
                const data = await response.json();
                setAuthDetails(data.user);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        if (authDetails.email) {
            sendCodeToGmail();
        }
    }, [authDetails.email]);
    

    const sendCodeToGmail = async () => {
        if (!authDetails || !authDetails.email) {
            console.error('User email is not available');
            return;
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ email: authDetails.email }),
        };

        try {
            const response = await fetch(apiList.userAuthentication, options);
            
            const result = await response.json();
        } catch (error) {
            console.error('Error sending OTP:', error);
        }
    };

    const handleInputChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value !== '' && index < otpInputsRefs.current.length - 1) {
            otpInputsRefs.current[index + 1].focus();
        }
    };

    const handleBackspace = (index, e) => {
        if (e.keyCode === 8 && index > 0 && otp[index] === '') {
            otpInputsRefs.current[index - 1].focus();
        }
    };

    const handleResendOTP = async () => {
        try {
            await sendCodeToGmail();
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
        } catch (error) {
            console.error('Error resending OTP:', error);
        }
    };
    

    const verifyOTP = async () => {
        const otpString = otp.join('');
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ email: authDetails.email, gmailOTP: otpString })
        };
        try {
            const response = await fetch(apiList.userAuthVerify, options);
            if (response.status === 200) {
                const data = await response.json();
                toast.success('Successfully verified!', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored"
                });
                await sendPdfByEmail();
            } else {
                const data = await response.json();
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
        }
        setOtp(['', '', '', '', '', '']);
    };

    const verifyCode = () => {
        verifyOTP();
    };

    useEffect(() => {
        otpInputsRefs.current = Array(6).fill().map((_, i) => otpInputsRefs.current[i] || createRef());
    }, [otpInputsRefs]);

    const sendPdfByEmail = async () => {
        try {
            const url = `${apiList.sendPdfByEmail}`;
            const email = authDetails.email; 
            
        const decodedPdfData = atob(pdfData.split(',')[1]);
        
            const headers = {
                'Content-Type': 'application/json', 
            };
        
            const response = await axios.post(
                url,
                { email, pdfData: decodedPdfData },
                { headers } 
            );
        
            toast.success(response.data.message, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                onClose: () => {
                    navigate('/user/account/statement');
                }
            });
        } catch (error) {
            console.error('Error sending PDF by email:', error);
            toast.error('Error sending PDF by email', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
        }
    };
    
    
    
    


    return (
        <div>
            <div className='container-fluid' style={{ marginTop: "90px" }}>
                <div className='row'>
                    <div className='col-3'>
                        <BankaccountSidebar />
                    </div>
                    <div className='col-9'>
                        <div className='savings_acct_user_auth_container'>
                            <div className='savings_acct_user_auth_container_header'>Account Statement To Email:</div>
                            <div className='savings_acct_user_auth_details_container'>
                                <div className='d-flex justify-content-center'>
                                    {authDetails && (
                                        <div>
                                            <div className='otp_code_mobile'>Enter OTP Code sent to {authDetails.email}</div>
                                            <div>
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
                                            <div className='text-center d-flex'>
                                                <div>Don't receive OTP code?</div>
                                                <div className='resend_code_text ml-2' onClick={handleResendOTP}>Resend Code</div>
                                            </div>
                                            <ToastContainer />
                                            <div className='otp_verify_btn_container'>
                                                <button className='otp_verify_btn' type='button' onClick={verifyCode}>
                                                    Verify & Proceed
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className='savings_acct_user_auth_text1'>
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
        </div>
    )
};

export default StatementByMail;
