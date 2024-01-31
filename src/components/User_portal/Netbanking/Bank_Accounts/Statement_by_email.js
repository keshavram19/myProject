import { useEffect, useState } from 'react';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';
import './Accounts.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StatementByMail = () => {

    useEffect(()=> {
        getAuthenticatioDetails()
    },[])
    const [authDetails, setAuthDetails] = useState()
    let accountNumber = 123456789;
    const getAuthenticatioDetails = async ()=> {
        const url = `http://localhost:4444/api/userDetails/${accountNumber}`;
        const options = {
            method: 'GET'
        };
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            setAuthDetails(data.details);
        } 
        catch (error) {
            console.error('Error Fetching Authentication Details:', error);
        }
    };
    //console.log(authDetails);


    useEffect(()=> {
        sendCodeToGmail()
    },[authDetails])
    const sendCodeToGmail = async () => {

        if (!authDetails || !authDetails.userEmailId) {
            console.error('User email is not available');
            return;
        }

        const url = `http://localhost:4444/api/otp-send`;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: authDetails.userEmailId }),
        };
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            //console.log(result);
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
    // console.log(otp);


    const verifyOTP = async ()=> {
        const url = `http://localhost:4444/api/verify-otp`;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: authDetails.userEmailId, gmailOTP: otp})
        };
        try{
            const response = await fetch(url, options);
            if(response.status === 200){
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
                //console.log(data);
            }
            else{
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
                //console.log(data);
            }   
        }
        catch(error){
            console.log('Error Verifying OTP:', error);
        }
    };
    const verifyCode = ()=> {
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
                        <div className='savings_acct_user_auth_heading'>User Authentication Details:</div>
                        <div className='savings_acct_user_auth_container'>
                            <div className='savings_acct_user_auth_container_header'>Please Enter OTP To Authorize</div>
                            <div className='savings_acct_user_auth_details_container'>
                                <div className='d-flex justify-content-center'>
                                    {
                                        authDetails &&
                                        (<div>
                                            <div className='otp_verifi_text'>OTP Verification</div>
                                            <div className='otp_code_mobile'>Enter OTP Code sent to {authDetails.userEmailId}</div>
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
                                                <input className='otp_code_box5' maxLength={1}  value={otp[4]}
                                                    onChange={(e) => handleInputChange(4, e.target.value)}>
                                                     
                                                </input>
                                                <input className='otp_code_box6' maxLength={1} value={otp[5]}
                                                    onChange={(e) => handleInputChange(5, e.target.value)}>

                                                </input>
                                            </div>
                                            <div className='text-center'>
                                                <div>Don't receive OTP code?</div>
                                                <div className='resend_code_text'>Resend Code</div>
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
                                    OTP has been generated with validity of 100 seconds and sent to your registered mobile number
                                </div>
                                <div className='savings_acct_user_auth_text2'>
                                    If there is a delay in receiving of OTP, you can send a request to receive it. SMS IBOTP to 5676766 or
                                    92156766. Request should be sent from the registered mobile number.
                                </div>
                                <div className='savings_acct_user_auth_text3'>
                                    Please don't share OTP to anyone, even if person claims to be an ICICI bank official. For further details
                                    please <a className='savings_acct_user_auth_text3_atag'>click here</a>.
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