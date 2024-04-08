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
              <p className="change_user_id_heading_pera">Update User ID</p>
              <p className="d-flex align-items-center">
                <div className="change_user_id">User ID </div>
                <span className="change_user_id_cpr">CPR7759222</span>
              </p>
              <p className="d-flex align-items-center">
                <div className="change_user_id">New User ID*   </div>
                <input className="form-control change_user_id_cpr2 w-25"></input>
              </p>
              <p className="d-flex align-items-center">
                <div className="change_user_id">Confirm New User ID*</div>
                <input className="form-control change_user_id_cpr3 w-25"></input>
              </p>
              

              <button className="change_update_button">Update</button>
            </div>
            <div className="changeuserid-instructions">
              <p>Please keep these in mind while changing your user id</p>
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
