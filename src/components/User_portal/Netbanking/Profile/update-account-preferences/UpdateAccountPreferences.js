import React from "react";
import OverviewSidebar from "../../Sidebar/OverViewSidebar";
import "./UpdateAccountPreferences.css";
import { Link } from "react-router-dom";

const UpdateAccountPreferences = () => {
  return (
    <>
      <section>
        <div className="container-fluid" style={{ marginTop: "90px" }}>
          <div className="row">
            <div className="col-3">
              <OverviewSidebar />
            </div>
            <div className="col-9 accounts_preferences">
              <div className="viewSummary">
                <h1>Update Account Preferences</h1>
              </div>
              {/* <div style={{ height: "1px", border: "1px solid #cdcdcd" }}></div> */}

              <div className="services">
                <p className=" account_preferences_heading">Your Accounts</p>
                <div>
                  <table
                    className="account_preferences_table_head
                "
                  >
                    <tbody>
                      <tr className="account_preferences_table_headings">
                        <th>Select</th>
                        <th>Account Holder Name</th>
                        <th>Account No.</th>
                        <th>Account Type</th>
                        {/* <th>Nick Name</th> */}
                      </tr>
                      <tr className="account_preferences_table_content">
                        <td>
                          <input type="radio"></input>
                        </td>
                        <td>Kavati Deepak Kumar</td>
                        <td>38799293143</td>
                        <td>Savings</td>
                        {/* <td>Deepak</td> */}
                      </tr>
                      <tr className="account_preferences_table_content">
                        <td>
                          <input type="radio"></input>
                        </td>
                        <td>Kavati Deepak Kumar</td>
                        <td>38799293143</td>
                        <td>Current </td>
                        {/* <td className="w-100 d-flex">Deepak</td> */}
                      </tr>
                    </tbody>
                  </table>
                  <div>
                    <button className="account_preferences_button">
                      Set as primary
                    </button>
                    {/* <button className="account_preferences_button ml-2">
                      <Link to="/user/profile/changenickname">
                        {" "}
                        Update account nick name
                      </Link>
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpdateAccountPreferences;
