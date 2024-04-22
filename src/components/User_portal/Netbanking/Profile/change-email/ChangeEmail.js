import React, { useState, useEffect } from "react";
import apiList from '../../../../../lib/apiList';
import OverviewSidebar from '../../Sidebar/OverViewSidebar'
import "./ChangeEmail.css";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ChangeEmail = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [newEmail, setNewEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [resendButton, setResendButton] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [handlemodal, setModal] = useState(false);
  const [handleDisplayContent, setDisplayContent] = useState(false);
  const [resendOTP, setResendOTP] = useState(false);
  const[sentOtp, setSentOtp] = useState("");
  useEffect(() => {
    const fetchuserDetails = async () => {
      try {
        const token = sessionStorage.getItem("loginToken");
        const requestOptions = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, 
            "Content-Type": "application/json",
          },
        };
        const response = await fetch(
          apiList.requestedUserDetailsByEmail,
          requestOptions
        );
        if (response.ok) {
          const data = await response.json();
          setUserDetails(data);
        } else {
          console.error("Error fetching user data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchuserDetails();
  }, []);


  const handleChangeEmail = async () => {
    try {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(newEmail)) {
        toast.error("Invalid email. Please enter a valid email.");
        setErrorMessage(true); 
        return;
      }
      
      setErrorMessage(false);
  
      const token = sessionStorage.getItem("loginToken");
      const requestOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userDetails.user._id, 
          newEmail: newEmail,
        }),
      };
      const response = await fetch(apiList.changeEmail, requestOptions);
      if (response.ok) {
        setShowOtpPopup(true);
        
        setSeconds(60); 
      } else {
        console.error("Error updating email:", response.statusText);
        const data = await response.json();
        if (response.status === 409) {
          // Email already registered
          toast.error("Email already registered. Please enter a different email.");
        } else {
          toast.error(data.error || "Failed to update email");
        }
      }
    } catch (error) {
      console.error("Error updating email:", error);
      toast.error("Invalid email. Please enter a valid email");
    }
  };

  const handleResendOTP = async () => {
    try {
        const token = sessionStorage.getItem("loginToken");
        const requestOptions = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: userDetails.user._id,
                newEmail: newEmail, // Pass newEmail here
            }),
        };
        const response = await fetch(apiList.resendOTP, requestOptions);
        if (response.ok) {
            // Handle success response
            setResendOTP(true);
            setSeconds(60); // Reset the timer to 60 seconds
            toast.success("OTP resent successfully");
        } else {
            // Handle error response
            console.error("Error resending OTP:", response.statusText);
            const data = await response.json();
            toast.error(data.error || "Failed to resend OTP");
        }
    } catch (error) {
        // Handle error
        console.error("Error resending OTP:", error);
        toast.error("Failed to resend OTP");
    }
};

  

const handleVerifyOTP = async () => {
  try {
      const token = sessionStorage.getItem("loginToken");
      const requestOptions = {
          method: "POST",
          headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              userId: userDetails.user._id,
              otp: otp,
              newEmail: newEmail,
          }),
      };
      const response = await fetch(apiList.UpdateEmailverifyOTP, requestOptions);
      if (response.ok) {
          // OTP verification successful
          setShowOtpPopup(false);
          toast.success("Email address updated successfully");
      } else {
          // OTP verification failed
          const data = await response.json();
          if (response.status === 400 && data.error === "Invalid or expired OTP") {
            toast.error("Invalid or expired OTP");
          } else {
            toast.error(data.error || "Failed to verify OTP");
          }
          // Reset OTP input field
          setOtp("");
      }
  } catch (error) {
      console.error("Error verifying OTP:", error);
  }
};




  useEffect(() => {
    if (resendOTP) {
      
      setResendOTP(false); 
    }
  }, [resendOTP]);


  useEffect(() => {
    let interval;
    if (showOtpPopup && seconds > 0) {
        interval = setInterval(() => {
            setSeconds((prevSeconds) => {
                if (prevSeconds > 0) {
                    return prevSeconds - 1;
                } else {
                    clearInterval(interval);
                    return 0;
                }
            });
        }, 1000);
    } else if (resendOTP) {
        setSeconds(60); 
        setResendOTP(false); 
    }
    return () => clearInterval(interval);
}, [showOtpPopup, seconds, resendOTP]);


  

 

  return (
    <div>
      <section className="container-fluid" style={{ marginTop: "90px" }}>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="row">
          <div className="col-3">
            <div className="">
              <OverviewSidebar />
            </div>
          </div>
          <div className="col-9 change-email">
            <div className="changePassword-profile">
              <h3 className="change_update_heading3" style={{ fontSize: "px" }}>
                Update Email id
              </h3>
            </div>

            <div className="side-headings">
              <h4
                className="change_update_heading4"
                style={{ fontSize: "18px" }}
              >
                Request for email updation
              </h4>
              <p className="d-flex align-items-center pb-4 m-0">
                <div className="" style={{ fontSize: "16px" }}>
                  Select Account{" "}
                </div>
                {userDetails && userDetails.user && (
                  <input
                    className="form-control w-25"
                    style={{ fontSize: "16px" }}
                    value={userDetails.user.accountNumber}
                  />
                )}
              </p>
              <p className="d-flex align-items-center">
                <div className="" style={{ fontSize: "16px" }}>
                  Existing email{" "}
                </div>
                {userDetails && userDetails.user && (
                  <input
                    className="form-control w-25"
                    style={{ fontSize: "16px" }}
                    value={userDetails.user.email}
                  />
                )}
              </p>

              <p className="d-flex align-items-center pb-4 m-0">
                <div className="" style={{ fontSize: "16px" }}>
                  New Email{" "}
                </div>
                <input
                  className="form-control w-25"
                  style={{ fontSize: "16px" }}
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                />
              </p>

              <button className="changeemail_butn" onClick={handleChangeEmail}>
                Update
              </button>
            </div>
            <div className="changeemail-instructions">
              <p>
                Post updation of email ID you will start getting monthly email
                statements for your updated email ID
              </p>
            </div>
            <div
              className="modal"
              id="myModal"
              style={{
                display: showOtpPopup && !errorMessage ? "block" : "none",
              }}
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">Enter OTP</h4>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      onClick={() => setShowOtpPopup(false)}
                    >
                      &times;
                    </button>
                  </div>
                  <div className="modal-body text-center">
                    {errorMessage ? (
                      <div>
                        <p className="my-3 " style={{ fontSize: "20px" }}>
                          Invalid Email ID
                        </p>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-danger"
                            data-dismiss="modal"
                            style={{
                              fontSize: "12px",
                              padding: "3px 10px",
                            }}
                            onClick={() => {
                              setShowOtpPopup(false);
                              setErrorMessage("");
                            }}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <input
                          type="text"
                          placeholder="Enter OTP"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          className="account_opening_email_otp_modal account_opening_control"
                        />
                        {/* {seconds > 0 ? (
                          <p>OTP will expire in: {seconds} seconds</p>
                        ) : (
                          <p>
                            OTP has expired{" "}
                            <button
                              onClick={handleResendOTP}
                              className="account_opening_email_otp_resend_btn"
                            >
                              Resend
                            </button>
                          </p>
                        )} */}

                        <button
                          variant="primary"
                          className="account_opening_email_otp_verify_btn m-3 pt-5"
                          onClick={handleVerifyOTP}
                          disabled={isVerified || otp.trim() === ""}
                        >
                          {isVerified ? "Verified" : "Verify"}
                        </button>
                      </>
                    )}
                  </div>

                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-dismiss="modal"
                      style={{
                        fontSize: "12px",
                        padding: "3px 10px",
                      }}
                      onClick={() => setShowOtpPopup(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ChangeEmail;