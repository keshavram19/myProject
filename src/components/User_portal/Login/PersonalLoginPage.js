import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PersonalLoginPage.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import apiList from "../../../lib/apiList";
import logo from "../../../Images/RIB White logo (1).png";
import No_Waiting_Img from "../../../Images/No_Waiting_Img.png";


const PersonalLoginPage = () => {
  const handleRecaptchaChange = (value) => {
    // Handle the reCAPTCHA value change
    console.log("ReCAPTCHA value:", value);
  };

  const [form, setForm] = useState("login");

  let navigate = useNavigate();
  const [bankUserName, setBankUserName] = useState('');
  const [bankPassword, setBankPassword] = useState('');
  const [bankMailId, setBankMailId] = useState('');
  const [bankOtp, setBankOtp] = useState('');
  const [bankNewPassword, setBankNewPassword] = useState('');

  const handleUserName = (event) => {
    setBankUserName(event.target.value)
  };
  const handleBankPassword = (event) => {
    setBankPassword(event.target.value)
  };
  const handleMailId = (event) => {
    setBankMailId(event.target.value)
  };
  const handleMailOTP = (event) => {
    setBankOtp(event.target.value)
  };
  const handleNewPassword = (event) => {
    setBankNewPassword(event.target.value)
  }


  const handleBankLogin = async () => {

    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: bankUserName,
        password: bankPassword
      })
    };

    try {
      const response = await fetch(apiList.customerLogin, options);
      const data = await response.json();
      if (response.status === 200) {

        toast.success('Login Successful!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
        });

        sessionStorage.setItem('loginToken', data.token);
        const expirationTime = new Date().getTime() + 5 * 60 * 1000;
        sessionStorage.setItem('expireTime', expirationTime);
        setTimeout(() => {
          navigate('/user/account');
        }, 1500);
      } else {
        toast.error(`${data.message || 'An error occurred.'}`, { 
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
        });
      }
    } catch (error) {
      console.error('Error at Personal Banking Login:', error);
      toast.error('An unexpected error occurred.', { 
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      });
    }
    setBankUserName('')
    setBankPassword('')
  };

  const handleSendingOTP = async () => {

    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: bankMailId })
    };

    try {
      const response = await fetch(apiList.customerForgotPasswordOtp, options);
      const data = await response.json();
      if (response.ok === true) {
        toast.success('OTP Sent Successfully!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored"
        });
        setTimeout(() => {
          setForm('verifyingOTP');
        }, 1500);
      }
      else {
        toast.error('Failed to send OTP!', {
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
      console.error('Error Sending OTP:', error);
      toast.error('Failed to send OTP!', {
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

  const handleVerifyOTP = async () => {

    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: bankMailId,
        gmailOTP: bankOtp
      })
    };

    try {
      const response = await fetch(apiList.customerPasswordOtpVerify, options);
      const data = await response.json();
      if (response.ok === true) {
        toast.success('Valid OTP!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored"
        });
        setTimeout(() => {
          setForm("changePassword");
        }, 1500);
      }
      else {
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
    } catch (error) {
      console.error('Error Verifying OTP at Forgot Password:', error);
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
  };

  const handleUpdatePassword = async () => {

    const options = {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: bankMailId,
        newPassword: bankNewPassword
      })
    };

    try {
      const response = await fetch(apiList.customerLoginPasswordUpdate, options);
      const data = await response.json();
      if (response.ok === true) {
        toast.success('Password Changed Successfully!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored"
        });
        setTimeout(() => {
          setForm("login")
        }, 1500);
      }
      else {
        toast.error('Failed to Update Password!', {
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

    } catch (error) {
      console.error('Error at Updating Password:', error);
      toast.error('Failed to Update Password!', {
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
      <div className="container-fluid login_nav">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={logo} alt="logo" style={{ width: "170px" }} />
            </div>
            <div className="col-6 text-right m-auto">
              <p className="mb-0">
                <Link to="/admin/login" style={{ color: '#2fb68e'}}>
                  Login as Admin
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row personal_login">
          <div className="col-md-5 p-0">
            {/* <h2>One Account with many benefits</h2>

            <div className="row">
              <div className="col-md-2 text-center m-auto">
                <img
                  src="https://webapp.paytmbank.com/assets/static/images/24x7.svg"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-10 p-0">
                <h5>24 * 7 Transactions</h5>
                <p>To all bank accounts, no restriction</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 text-center m-auto">
                <img
                  src="https://webapp.paytmbank.com/assets/static/images/Bank.svg"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-10 p-0">
                <h5>Secure Banking</h5>
                <p>Banking with peace of mind</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 text-center m-auto">
                <img
                  src="https://webapp.paytmbank.com/assets/static/images/debitcard.svg"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-10 p-0">
                <h5>Personalized Debit card</h5>
                <p>For all your POS & Online spends</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 text-center m-auto">
                <img
                  src="https://webapp.paytmbank.com/assets/static/images/fixeddeposit.svg"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-10 p-0">
                <h5>Super Liquid Fixed Deposit</h5>
                <p>No withdrawal penalties, instant remittances & payments</p>
              </div>
            </div>
            <button>Know more</button> */}
            <img src={No_Waiting_Img} alt="no waiting logo" className="img-fluid" style={{ width: '100%', height: '85vh'}}/>
          </div>

          {form === "login" && (
            <div className="col-md-7">
              <h5>Login to Access Your Personal Banking</h5>
              {/* <p className="personal_dont_password">
                <Link
                  to="#"
                  onClick={() => setForm("createuser")}
                  style={{ color: "#f18121" }}
                >
                  Don't have a username? Create Now
                </Link>
              </p> */}
              <input
                type="text"
                placeholder="Enter Bank Username"
                className="form-control"
                onChange={handleUserName}
                value={bankUserName}
                style={{fontSize: '14px'}}
              />
              <input
                type="Password"
                placeholder="Enter Bank Password"
                className="form-control"
                onChange={handleBankPassword}
                value={bankPassword}
                style={{fontSize: '14px'}}
              />

              <div className="mt-3">
                <ReCAPTCHA
                  sitekey="6Ldbdg0TAAAAAI7KAf72Q6uagbWzWecTeBWmrCpJ" // Replace with your site key
                  onChange={handleRecaptchaChange}
                />
              </div>

              <div className="row">
                <div className="col-md-4">
                  <ToastContainer />
                  <button type="button" onClick={handleBankLogin}>Sign In Securly</button>
                </div>
                <div className="col-md-4 m-auto text-right">
                  <Link
                    to="#"
                    onClick={() => setForm("forgotusername")}
                    style={{ color: "#2fb68e" }}
                  >
                    Forgot Username
                  </Link>
                </div>
                <div className="col-md-4  m-auto">
                  <Link
                    to="#"
                    onClick={() => setForm("forgotpassword")}
                    style={{ color: "#2fb68e" }}
                  >
                    Forgot Password
                  </Link>
                </div>
              </div>
              <div className="row mt-5 personal_login_pp">
                <p>
                  {" "}
                  By signing in, you agree to our{" "}
                  <Link to="#">privacy policy</Link> and{" "}
                  <Link to="#">terms of use.</Link>
                  <span>Need Help?</span>
                </p>
              </div>
            </div>
          )}

          {/* {form === "createuser" && (
            <div className="col-md-7">
              <h5>
                <FaArrowLeftLong
                  onClick={() => setForm("login")}
                  style={{ paddingRight: "5px", cursor: "pointer" }}
                />
                Activate Your Personal Banking
              </h5>

              <input
                type="text"
                placeholder="Registred Mobile Number"
                className="form-control"
              />

              <div className="mt-3">
                <ReCAPTCHA
                  sitekey="6Ldbdg0TAAAAAI7KAf72Q6uagbWzWecTeBWmrCpJ" // Replace with your site key
                  onChange={handleRecaptchaChange}
                />
              </div>

              <div className="row ml-0">
                <button>Continue</button>
              </div>
            </div>
          )} */}

          {form === "forgotusername" && (
            <div className="col-md-7">
              <h5>
                <FaArrowLeftLong
                  onClick={() => setForm("login")}
                  style={{ paddingRight: "5px", cursor: "pointer" }}
                />
                Forgot Username?
              </h5>

              <input
                type="text"
                placeholder="Registred Mobile Number"
                className="form-control"
              />

              <div className="mt-3">
                <ReCAPTCHA
                  sitekey="6Ldbdg0TAAAAAI7KAf72Q6uagbWzWecTeBWmrCpJ" // Replace with your site key
                  onChange={handleRecaptchaChange}
                />
              </div>

              <div className="row ml-0">
              <ToastContainer />
                <button type="button" onClick={handleSendingOTP}>Continue</button>
              </div>
            </div>
          )}

        {form === "verifyingOTP" && (
            <div className="col-md-7">
              <h5>
                <FaArrowLeftLong
                  onClick={() => setForm("forgotpassword")}
                  style={{ paddingRight: "5px", cursor: "pointer" }}
                />
                Verify OTP?
              </h5>

              <input
                type="text"
                placeholder="Enter OTP"
                className="form-control"
                onChange={handleMailOTP}

              />

              <div className="row ml-0">
                <ToastContainer />
                <button type="button" onClick={handleVerifyOTP}>Verify OTP</button>
              </div>

            </div>
          )}



          {form === "forgotpassword" && (
            <div className="col-md-7">
              <h5>
                <FaArrowLeftLong
                  onClick={() => setForm("login")}
                  style={{ paddingRight: "5px", cursor: "pointer" }}
                />
                Forgot Password?
              </h5>

              <input
                type="email"
                placeholder="Enter Registered Email"
                className="form-control"
                onChange={handleMailId}

              />

              <div className="mt-3">
                <ReCAPTCHA
                  sitekey="6Ldbdg0TAAAAAI7KAf72Q6uagbWzWecTeBWmrCpJ" // Replace with your site key
                  onChange={handleRecaptchaChange}
                />
              </div>

              <div className="row ml-0">
                <ToastContainer />
                <button type="button" onClick={handleSendingOTP}>Generate OTP</button>
              </div>

            </div>
          )}

          {form === "verifyingOTP" && (
            <div className="col-md-7">
              <h5>
                <FaArrowLeftLong
                  onClick={() => setForm("forgotpassword")}
                  style={{ paddingRight: "5px", cursor: "pointer" }}
                />
                Verify OTP?
              </h5>

              <input
                type="text"
                placeholder="Enter OTP"
                className="form-control"
                onChange={handleMailOTP}

              />

              <div className="row ml-0">
                <ToastContainer />
                <button type="button" onClick={handleVerifyOTP}>Verify OTP</button>
              </div>

            </div>
          )}

          {form === 'changePassword' && (
            <div className="col-md-7">
              <h5>
                <FaArrowLeftLong
                  style={{ paddingRight: "5px", cursor: "pointer" }}
                />
                Change Password?
              </h5>

              <input
                type="password"
                placeholder="Enter New Password"
                className="form-control"
                onChange={handleNewPassword}
              />

              <div className="row ml-0">
                <ToastContainer />
                <button type="button" onClick={handleUpdatePassword}>Change Password</button>
              </div>

            </div>
          )}

        </div>
      </div>
      <hr className="landing_body_banner_bottom"></hr>
    </div>
  );
};

export default PersonalLoginPage;



