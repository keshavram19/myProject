import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AdminLogin.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate,Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import apiList from "../../../../lib/apiList";
import Admin_Login_Page_img  from "../../../../Images/Admin_Login_Page_img.png" ; 
import banklogo from "../../../../Images/banklogo.png";
import { isAuthenticated } from "../../../ProtectedRoute/authUtils";  


const AdminLogin = () => {
 

  const handleRecaptchaChange = (value) => {
    console.log("ReCAPTCHA value:", value);
  };

  const [form, setForm] = useState("login");

  let navigate = useNavigate();
  const [bankUserName, setBankUserName] = useState('');
  const [bankPassword, setBankPassword] = useState('');
  const [bankMailId, setBankMailId] = useState('');
  const [bankOtp, setBankOtp] = useState('');
  const [bankNewPassword, setBankNewPassword] = useState('')

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


  if (isAuthenticated()) {
    return <Navigate to="/admin/all-data" />;
  }
  
  const handleBankLogin = async () => {

    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: bankUserName,
        password: bankPassword
      })
    };

    try {
      const response = await fetch(apiList.adminLogin, options);
      console.log('Response:', response);
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
          theme: "colored"
        });

        sessionStorage.setItem('adminloginToken', data.token);
        const expirationTime = new Date().getTime() + 7 * 60 * 1000; 
        sessionStorage.setItem('adminexpireTime', expirationTime);
        setTimeout(() => {
          navigate('/admin/all-data');
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
          theme: "colored"
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
        theme: "colored"
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
              <img  className="admin_images" src={banklogo} alt="logo" style={{ width: "170px" }} />
            </div>
            <div className="col-6 text-right m-auto">
              <p className="mb-0">
                <Link to="/netbanking-personal-login" style={{ color: '#2fb68e'}}>
                  Login to personal banking
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row admin_login">
          

          {form === "login" && (
            <div className="col-md-6 admin_login_col admin_login_coloumn_div">
              <h5 className="admin_login_heading">Login to Access Your Admin Portal</h5>
             
              <input
                type="text"
                placeholder="Enter Bank Username"
                className="form-control admin_opening_control"
                onChange={handleUserName}
                value={bankUserName}
              />
              <input
                type="Password"
                placeholder="Enter Bank Password"
                className="form-control admin_opening_control"
                onChange={handleBankPassword}
                value={bankPassword}
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
                  <button className="admin_login_button" type="button" onClick={handleBankLogin}>Sign In Securly</button>
                </div>
                <div className="col-md-4 mt-4 text-right">
                  <Link
                    to="#"
                    onClick={() => setForm("forgotusername")}
                    style={{ color: "#2fb68e" }}
                  >
                    Forgot Username
                  </Link>
                </div>
                <div className="col-md-4  mt-4">
                  <Link
                    to="#"
                    onClick={() => setForm("forgotpassword")}
                    style={{ color: "#2fb68e" }}
                  >
                    Forgot Password
                  </Link>
                </div>
              </div>
              <div className="row mt-5 admin_login_pp admin_login_coloumn_div">
                <p className="admin_login_pera">
                  {" "}
                  By signing in, you agree to our{" "}
                  <Link to="#">privacy policy</Link> and{" "}
                  <Link to="#">terms of use.</Link>
                  <span>Need Help?</span>
                </p>
              </div>
            </div>
          )}


          {form === "forgotusername" && (
            <div className="col-md-6  admin_login_col admin_login_coloumn_div">
              <h5 className="admin_login_heading">
                <FaArrowLeftLong
                  onClick={() => setForm("login")}
                  style={{ paddingRight: "5px", cursor: "pointer" }}
                />
                Forgot Username?
              </h5>

              <input
                type="text"
                placeholder="Registred Mobile Number"
                className="form-control admin_opening_control"
              />

              <div className="mt-3">
                <ReCAPTCHA
                  sitekey="6Ldbdg0TAAAAAI7KAf72Q6uagbWzWecTeBWmrCpJ" // Replace with your site key
                  onChange={handleRecaptchaChange}
                />
              </div>

              <div className="row ml-0">
                <button className="admin_login_button">Continue</button>
              </div>
            </div>
          )}

          {form === "forgotpassword" && (
            <div className="col-md-6  admin_login_col admin_login_coloumn_div">
              <h5 className="admin_login_heading">
                <FaArrowLeftLong
                  onClick={() => setForm("login")}
                  style={{ paddingRight: "5px", cursor: "pointer" }}
                />
                Forgot Password?
              </h5>

              <input
                type="email"
                placeholder="Enter Registered Email"
                className="form-control admin_opening_control"
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
                <button className="admin_login_button" type="button" onClick={handleSendingOTP}>Generate OTP</button>
              </div>

            </div>
          )}

          {form === "verifyingOTP" && (
            <div className="col-md-6  admin_login_col admin_login_coloumn_div">
              <h5 className="admin_login_heading">
                <FaArrowLeftLong
                  onClick={() => setForm("forgotpassword")}
                  style={{ paddingRight: "5px", cursor: "pointer" }}
                />
                Verify OTP?
              </h5>

              <input
                type="text"
                placeholder="Enter OTP"
                className="form-control admin_opening_control"
                onChange={handleMailOTP}

              />

              <div className="row ml-0">
                <ToastContainer />
                <button className="admin_login_button" type="button" onClick={handleVerifyOTP}>Verify OTP</button>
              </div>

            </div>
          )}

          {form === 'changePassword' && (
            <div className="col-md-6 admin_login_col admin_login_coloumn_div">
              <h5 className="admin_login_heading">
                <FaArrowLeftLong
                  style={{ paddingRight: "5px", cursor: "pointer" }}
                />
                Change Password?
              </h5>

              <input
                type="password"
                placeholder="Enter New Password"
                className="form-control admin_opening_control"
                onChange={handleNewPassword}
              />

              <div className="row ml-0 admin_login_coloumn_div ">
                <ToastContainer />
                <button className="admin_login_button" type="button" onClick={handleUpdatePassword}>Change Password</button>
              </div>

            </div>
          )}

          <div className="col-md-6  admin_login_coloumn p-0">
            <img src={Admin_Login_Page_img} alt="no waiting logo" className="img-fluid"/>
          </div>

        </div>
      </div>
      <hr className="landing_body_banner_bottom"></hr>
    </div>
  );
};

export default AdminLogin;