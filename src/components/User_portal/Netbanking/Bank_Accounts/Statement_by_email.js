import { useEffect, useState } from 'react';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';
import './Accounts.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import apiList from '../../../../lib/apiList';

const StatementByMail = () => {

    const [authDetails, setAuthDetails] = useState({
        email: ''
    });

    let token = sessionStorage.getItem('loginToken');

    useEffect(() => {
        getAuthenticatioDetails()
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
           const response = await fetch(apiList.customerDetails, options);
           if(response.ok){
                const data = await response.json();
                setAuthDetails(data.user)
           }
        } 
        catch (error) {
            console.log(error.message);
        }
    };


    useEffect(() => {
        sendCodeToGmail()
    }, [authDetails])
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

    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const handleInputChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp.join(''));
    };

    const handleResendOTP = () => {
        sendCodeToGmail()
    };


    const verifyOTP = async () => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ email: authDetails.email, gmailOTP: otp })
        };
        try {
            const response = await fetch(apiList.userAuthVerify, options);
            if (response.status === 200) {
                const data = await response.json();
                toast.success('Successfully verified!', {
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
            else {
                const data = await response.json();
                toast.error('Invalid OTP!', {
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
        }
        catch (error) {
            console.log('Error Verifying OTP:', error);
        }
        setOtp(['','','','','',''])
    };
    const verifyCode = () => {
        verifyOTP()
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
                                    {
                                        authDetails &&
                                        (<div>
                                            <div className='otp_code_mobile'>Enter OTP Code sent to {authDetails.email}</div>
                                            <div>
                                                <input className='otp_code_box1' type='text' maxLength={1}
                                                    value={otp[0]} onChange={(e) => handleInputChange(0, e.target.value)}>

                                                </input>
                                                <input className='otp_code_box2' maxLength={1}
                                                    value={otp[1]} onChange={(e) => handleInputChange(1, e.target.value)}>

                                                </input>
                                                <input className='otp_code_box3' maxLength={1} value={otp[2]}
                                                    onChange={(e) => handleInputChange(2, e.target.value)}>

                                                </input>
                                                <input className='otp_code_box4' maxLength={1} value={otp[3]}
                                                    onChange={(e) => handleInputChange(3, e.target.value)}>

                                                </input>
                                                <input className='otp_code_box5' maxLength={1} value={otp[4]}
                                                    onChange={(e) => handleInputChange(4, e.target.value)}>

                                                </input>
                                                <input className='otp_code_box6' maxLength={1} value={otp[5]}
                                                    onChange={(e) => handleInputChange(5, e.target.value)}>

                                                </input>
                                            </div>
                                            <div className='text-center'>
                                                <div>Don't receive OTP code?</div>
                                                <div className='resend_code_text' onClick={handleResendOTP}>Resend Code</div>
                                            </div>
                                            <ToastContainer />
                                            <div className='otp_verify_btn_container'>
                                                <button className='otp_verify_btn' type='button' onClick={verifyCode}>
                                                    Verify & Proceed
                                                </button>
                                            </div>
                                        </div>)
                                    }

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
                                <div className='d-flex justify-content-center'>
                                    <button type='button' className='savings_acct_user_auth_submit_btn'>
                                        Submit
                                    </button>
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