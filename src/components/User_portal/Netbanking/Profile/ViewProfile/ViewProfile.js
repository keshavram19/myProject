import React, { useState, useEffect } from "react";
import './viewprofile.css'
import OverviewSidebar from "../../Sidebar/OverViewSidebar";
import apiList from "../../../../../lib/apiList";

const ViewProfile = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = sessionStorage.getItem('loginToken');
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

    fetchUserDetails();
  }, []);

  return (
    <div>
      <section className="container-fluid" style={{marginTop:'90px'}}>
        <div className="row">
          <div className="col-3">
            <div className="">
              <OverviewSidebar />
            </div>
          </div>
          <div className="col-9">
            <div className="user-details-card">
              <h2 className="user-details-title">{userDetails ? `${userDetails.firstname} ${userDetails.lastname}` : 'Loading...'}</h2>
              {userDetails && (
                <>
                  <div className="detail-item">
                    <span className="detail-label">First Name</span>
                    <span className="detail-value">: {userDetails.firstname}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Last Name</span>
                    <span className="detail-value">: {userDetails.lastname}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Address</span>
                    <span className="detail-value">: {userDetails.currentAddress.flatnumber}, {userDetails.currentAddress.buildingname}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">State</span>
                    <span className="detail-value">: {userDetails.currentAddress.state}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">ZIP</span>
                    <span className="detail-value">: {userDetails.currentAddress.pincode}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Country</span>
                    <span className="detail-value">: {userDetails.currentAddress.country}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Phone</span>
                    <span className="detail-value">: {userDetails.mobilenumber}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">E-Mail</span>
                    <span className="detail-value">: {userDetails.email}</span>
                  </div>
                  {/* <div className="detail-item">
                    <span className="detail-label">Nominee</span>
                    <span className="detail-value">: {userDetails.nominee}</span>
                  </div> */}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewProfile;
