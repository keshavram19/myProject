import React from "react";
import './ChangeUserId.css'
import OverviewSidebar from "../../Sidebar/OverViewSidebar";

const ChangeUserId = () => {
  return (
    <div>
      <section className="container-fluid" style={{marginTop:"90px"}}>
        <div className="row">
        <div className="col-3">
            <div className="">
             <OverviewSidebar />
            </div>
          </div>
          <div className="col-9 change-userid">
            <div className="changeuserid-profile">
              <p>Update userID </p>
            </div>
            <div className="side-headings1">
              <p className="heading">Update User ID</p>
              <p className="d-flex align-items-center">
                <div className="">User ID </div>
                <span>CPR7759222</span>
              </p>
              <p className="d-flex align-items-center">
                <div className="">New User ID*   </div>
                <input className="form-control w-25"></input>
              </p>
              <p className="d-flex align-items-center pb-4 m-0">
                <div className="">Confirm New User ID* </div>
                <input className="form-control w-25"></input>
              </p>

              <button>Update</button>
            </div>
            <div className="changeuserid-instructions">
              <p>Please keep these in mind while changing your userid</p>
              <ol>
                <li>
                This service allows a ONE-TIME change of your Internet Banking User ID.
                </li>
                <li>
                It is advisable to have an alphanumeric User ID to ensure security.
                </li>
                <li>
                First two characters of Internet Banking User ID should be alphabets.
                              </li>
                              <li>Please choose a User ID that you can remember easily.
                </li>
                <li>
                Please ensure that your User ID is not obvious to others. Avoid using your name/nickname etc. in your User ID
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChangeUserId;
