import React from "react";
import { useState } from "react";
import "./changenickname.css";
import OverviewSidebar from "../../Sidebar/OverViewSidebar";

const ChangeNickName = () => {
  const [savingsNickName, setSavingsNickName] = useState("Deepak");
  const [currentNickName, setCurrentNickName] = useState("Deepak Kumar");

  return (
    <div>
      <section className="container-fluid" style={{marginTop:"90px"}}>
        <div className="row">

        <div className="col-3">
            <div className="">
             <OverviewSidebar />
            </div>
          </div>
                  <div className="col-9 accounts_nick_name">
                  <div className="viewSummary">
              <h1>Update Account Nick Names</h1>
              
                      </div>
                      {/* <div style={{ height: "1px", border: "1px solid #cdcdcd" }}></div> */}

            <div className="services">
              <p className=" nicknames_heading">Your Accounts</p>
              <div>
                <table className="nicknames_table_head
                ">
                  <tbody>
                    <tr className="nicknames_table_headings">
                      <th>SR No.</th>
                      <th>Account No.</th>
                      <th>Account Type</th>
                      <th>Nick Name</th>
                    </tr>
                    <tr className="nicknames_table_content">
                      <td>01</td>
                      <td>38799293143</td>
                      <td>Savings</td>
                      <td className="w-100 d-flex">
                        <input
                          value={savingsNickName}
                          onChange={(e) => setSavingsNickName(e.target.value)}
                          className="form-control nick_name_input mr-5"
                        ></input>{" "}
                        <button className="mr-2 nicknames_icon_button">
                          {" "}
                          <i
                            class="ri-edit-box-fill"
                            style={{ fontSize: "25px" }}
                          ></i>{" "}
                        </button>
                        <button className="nicknames_submit_button">
                          Submit{" "}
                        </button>
                      </td>
                    </tr>
                    <tr className="nicknames_table_content">
                      <td>02</td>
                      <td>387555255512</td>
                      <td>Current </td>
                      <td className="w-100 d-flex">
                        <input
                          value={currentNickName}
                          onChange={(e) => setCurrentNickName(e.target.value)}
                          className="form-control nick_name_input mr-5"
                        ></input>{" "}
                        <button className="mr-2 nicknames_icon_button">
                          {" "}
                          <i
                            class="ri-edit-box-fill"
                            style={{ fontSize: "25px" }}
                          ></i>{" "}
                        </button>
                        <button className="nicknames_submit_button">
                          Submit{" "}
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChangeNickName;
