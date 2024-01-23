import React from "react";
import "./ChangePassword.css";
import OverviewSidebar from "../../Sidebar/OverViewSidebar";

const ChangePassword = () => {
    
  return (
    <div>
      <section className="container-fluid" style={{marginTop:"90px"}}>
        <div className="row">
        <div className="col-3">
            <div className="">
             <OverviewSidebar />
            </div>
          </div>
          <div className="col-9 change-password">
            <div className="changePassword-profile">
              <p>Edit Profile : Change Password</p>
            </div>
            <div className="side-headings">
              <p className="heading">Login Password</p>
              <p className="d-flex align-items-center">
                <div className="">Old Password </div>
                <input className="form-control w-25"></input>
              </p>
              <p className="d-flex align-items-center">
                <div className="">New Password </div>
                <input className="form-control w-25"></input>
              </p>
              <p className="d-flex align-items-center pb-4 m-0">
                <div className="">Re-Enter New Password </div>
                <input className="form-control w-25"></input>
              </p>

              <button>Update</button>
            </div>
            <div className="changepassword-instructions">
              <p>Please keep these in mind while changing your password</p>
              <ol>
                <li>
                  Password should be a mix of alphabets with a minimum of 1
                  upper case letter [A-Z], numerals and special characters (
                  $#^@\&%_.~!*-) without any space in between.
                              </li>
                              <li>The password length should be between 8 to 28 characters.</li>
                              <li>New password cannot be the same as any of the last four login password.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChangePassword;
