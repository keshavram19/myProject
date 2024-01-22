import './Accounts.css';

const StatementByMail = ()=> {
    return(
        <div className='container-fluid'>
            <div className='savings_acct_user_auth_heading'>User Authentication Details:</div>
            <div className='savings_acct_user_auth_container'>
                <div className='savings_acct_user_auth_container_header'>Please Enter OTP To Authorize</div>
                <div className='savings_acct_user_auth_details_container'>
                    <div className='d-flex justify-content-center'>
                        <div>
                            <div className='otp_verifi_text'>OTP Verification</div>
                            <div className='otp_code_mobile'>Enter OTP Code sent to +91 9876XXXX00</div>
                            <div>
                                <input className='otp_code_box1' type='text' pattern='[0-9]{1}' minLength={1} maxLength={1}></input>
                                <input className='otp_code_box2' maxLength={1}></input>
                                <input className='otp_code_box3' maxLength={1}></input>
                                <input className='otp_code_box4' maxLength={1}></input>
                                <input className='otp_code_box5' maxLength={1}></input>
                                <input className='otp_code_box6' maxLength={1}></input>
                            </div>
                            <div className='text-center'>
                                <div>Don't receive OTP code?</div>
                                <div className='resend_code_text'>Resend Code</div>
                            </div>
                            <div className='otp_verify_btn_container'>
                                <button className='otp_verify_btn'>Verify & Proceed</button>
                            </div>
                        </div>
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
    )
};
export default StatementByMail;