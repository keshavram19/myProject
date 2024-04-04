import React, { useState, useEffect } from "react";
import apiList from '../../../../../lib/apiList';
import OverviewSidebar from '../../Sidebar/OverViewSidebar'

const ChangeEmail = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [newEmail, setNewEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpPopup, setShowOtpPopup] = useState(false);

  useEffect(() => {
    const fetchuserDetails = async () => {
      try {
        const token = sessionStorage.getItem("loginToken");
        const requestOptions = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Fixed this line
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
      } else {
        console.error("Error updating email:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating email:", error);
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
        setShowOtpPopup(false);
        alert("Email address updated successfully");
      } else {
        const data = await response.json();
        alert(data.error);
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  return (
    <div>
      <section className="container-fluid" style={{ marginTop: "90px" }}>
        <div className="row">
          <div className="col-3">
            <div className="">
              <OverviewSidebar />
            </div>
          </div>
          <div className="col-9 change-email">
          <div className="changePassword-profile">
              <p>Update Email id</p>
            </div>

            <div className="side-headings">
              <p className="heading">Request for email updation</p>
              <p className="d-flex align-items-center pb-4 m-0">
                <div className="">Select Account </div>
                {userDetails && userDetails.user && (
                  <input className="form-control w-25" value={userDetails.user.accountNumber} />
                )}
              </p>
              <p className="d-flex align-items-center">
                <div className="">Existing email </div>
                {userDetails && userDetails.user && (
                  <input className="form-control w-25" value={userDetails.user.email} />
                )}
              </p>

              <p className="d-flex align-items-center pb-4 m-0">
                <div className="">New Email </div>
                <input className="form-control w-25" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
              </p>

              <button className='changeemail_butn' onClick={handleChangeEmail}>Update</button>
            </div>
            <div className="changeemail-instructions">
              <p>Post updation of email ID you will start getting monthly email statements for your updated email ID</p>
            </div>
            {showOtpPopup && (
        <div className="otp-popup">
          <div className="otp-popup-content">
            <span className="close" onClick={() => setShowOtpPopup(false)}>&times;</span>
            <h4>Enter OTP</h4>
            <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
           
            {/* <button onClick={handleVerifyOTP}>Verify OTP</button> */}
            <button className='changeemail_butn' onClick={handleVerifyOTP}>Verif OTP</button>
           
          </div>
        </div>
      )}
          </div>
        </div>
      </section>

      {/* OTP Popup */}
      {/* {showOtpPopup && (
        <div className="otp-popup">
          <div className="otp-popup-content">
            <span className="close" onClick={() => setShowOtpPopup(false)}>&times;</span>
            <h2>Enter OTP</h2>
            <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
            <button onClick={handleVerifyOTP}>Verify OTP</button>
          </div>
        </div>
      )} */}
    </div>
  )
}

export default ChangeEmail;