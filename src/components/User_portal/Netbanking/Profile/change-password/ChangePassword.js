import React, { useState } from "react";
import "./ChangePassword.css";
import apiList from "../../../../../lib/apiList";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import OverviewSidebar from "../../Sidebar/OverViewSidebar";
import 'react-toastify/dist/ReactToastify.css';
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa';

const ChangePassword = () => {
  const [form, setForm] = useState("login");
  const navigate = useNavigate(); // Initialize navigate hook
  const[bankCustomerID, setBankCustomerID] =  useState('');
  const [bankPassword, setBankPassword] = useState('');
  const [bankNewPassword, setBankNewPassword] = useState('');
  const [bankMailId, setBankMailId] = useState('');
  const [reEnteredPassword, setReEnteredPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleReEnterPassword = (event) => {
    setReEnteredPassword(event.target.value);
  };

  const handleCustomerID = (event) => {
    setBankCustomerID(event.target.value)
  };

  const handleBankPassword = (event) => {
    setBankPassword(event.target.value);
  };
const handleMailId = (event) => {
    setBankMailId(event.target.value)
  };
  const handleNewPassword = (event) => {
    setBankNewPassword(event.target.value)
  } 
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleBankLogin = async () => {

    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        customerID: bankCustomerID,
        password: bankPassword
      })
    };

    try {
      const response = await fetch(apiList.customerLogin, options);
      const data = await response.json();
      if (response.status === 200) {
        
        sessionStorage.setItem('loginToken', data.token);
        setForm("changepassword");
      } else {
       
        if (response.status === 401) {
         
          toast.error('Invalid Customer ID or Password! Please check your credentials and try again.', {
         
          });
        } else {
         
          console.error(`${data.message || 'An error occurred.'}`);
          toast.error('An error occurred. Please try again later.', {
           
          });
        }
      }
    } catch (error) {
     
      console.error('Error at Confirming CustomerID and Password', error);
      toast.error('An error occurred. Please check your network connection and try again.', {
      
      });
    }
  
    setBankCustomerID('')
    setBankPassword('')
  };
  

  const handleUpdatePassword = async () => {
  
    if (bankNewPassword !== reEnteredPassword) {
      toast.error('Passwords do not match! Please re-enter your new password.', {
        // Additional toast configuration if needed
      });
      return; // Stop further execution
    }

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

    if (response.ok) {
      // Password changed successfully
      toast.success('Password Changed Successfully!', {
        // Additional toast configuration if needed
      });
      // Reset form to login state
      setForm("login");
    } else {
      // Handle other response statuses (e.g., 400 Bad Request)
      if (data && data.message) {
        // Display error message from the server
        toast.error(data.message, {
          // Additional toast configuration if needed
        });
      } else {
        // If no specific error message from the server, display a generic error message
        toast.error('Failed to Update Password! Please try again later.', {
          // Additional toast configuration if needed
        });
      }
    }
  } catch (error) {
    // Handle network errors or other exceptions
    console.error('Error while updating password:', error);
    toast.error('Failed to Update Password! Please check your network connection and try again.', {
      // Additional toast configuration if needed
    });
  }
};

  return (
    <div>
      <section className="container-fluid" style={{ marginTop: "90px" }}>
        <div className="row">
          <div className="col-3">
            <OverviewSidebar />
          </div>
          {form === "login" && (
            <div className="col-9 change-password" >
              <div className="changePassword-profile">
                <h3 className="change_password_heading3">Edit Profile : Change Password</h3>
              </div>
              <div className="side-headings">
                <h4  className="change_password_heading4"> Please Confirm CustomerID And Password</h4>

                <p className="d-flex align-items-center">           
                  <div className="change_password_divs" style={{ fontSize: "16px" }}>CustomerID </div>
                  <input className="form-control change_password_input w-25"  onChange={handleCustomerID}
                value={bankCustomerID} type="text" ></input>
                </p>


                <p className="d-flex align-items-center">           

                  <div className="change_password_divs">Password </div>
                  <input className="form-control change_password_input w-25"onChange={handleBankPassword} type={showPassword ? "text" : "password"}  value={bankPassword}/>
                  <span
          className="toggle-password"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
        </span>
                </p>
           <button type="button" className='change_password_button' onClick={handleBankLogin}>Change Password</button>                   
               </div>           
            </div> 

          )}
          {form === "changepassword" && (
            <div className="col-9 change-password" >
              <div className="changePassword-profile">
                <h3 className="change_password_heading3">Edit Profile : Change Password</h3>
              </div>
              <div className="side-headings">
                <h4 className="change_password_heading4">Login Password</h4>

                <p className="d-flex align-items-center">           
                  <div className="change_password_divs" style={{ fontSize: "16px" }}>Email </div>
                  <input className="form-control change_password_input w-25" onChange={handleMailId} type="email"></input>
                </p>
                <p className="d-flex align-items-center">           

                  <div className="change_password_divs">New Password </div>
                  <input className="form-control change_password_input w-25" onChange={handleNewPassword} type="password"></input>
                  <span
          className="toggle-password"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
        </span>
                </p>
                <p className="d-flex align-items-center pb-4 m-0">
                  <div className="" style={{ fontSize: "16px" }}>Re-Enter New Password </div>
                  <input type="password"className="form-control change_password_input w-25"value={reEnteredPassword}  onChange={handleReEnterPassword}></input>
                  <span
          className="toggle-password"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
        </span>
                
                </p>
               
                <button className="change_password_button" type="button" onClick={handleUpdatePassword}>Update</button>
              </div>
              <div className="changepassword-instructions">
                <p>Please keep these in mind while changing your password</p>
                <ol>
                  <li>Password should be a mix of alphabets with a minimum of 1 upper case letter [A-Z], numerals and special characters ($#^@\&%_.~!*-) without any space in between.</li>
                  <li>The password length should be between 8 to 28 characters.</li>
                  <li>New password cannot be the same as any of the last four login passwords.</li>
                </ol>
              </div>
            </div>
          )}
        </div>
      </section>
      <ToastContainer
                position="top-center" // Set the position to top-center
                autoClose={3000} // Close the toast after 5 seconds
                hideProgressBar={false} // Show the progress bar
                newestOnTop={false} // Show newest toast on top
                closeOnClick // Close the toast when clicked
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                toastStyle={{ width: '400px' }}
                />
    </div>
  );
};

export default ChangePassword;
