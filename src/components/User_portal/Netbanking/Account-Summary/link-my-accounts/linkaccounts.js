/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./linkaccounts.css";
import OverviewSidebar from "../../Sidebar/OverViewSidebar";
import { Link } from "react-router-dom";

const Linkaccounts = () => {
  return (
    <div>
      <section className="container-fluid linkAccounts" style={{marginTop:"90px"}}>
        <div className="row">
          <div className="col-3">
            <div className="">
             <OverviewSidebar />
            </div>
          </div>
          <div className="col-9 link-accounts">
            <div className="">
              <input
                type="search"
                className="mt-1 form-control link_account_input w-75"
                placeholder="search for service request"
              ></input>
            </div>
            <div className="services">
              <p className=" services-heading">Service Requests</p>
              <div>
                <table className="table-head">
                  <tbody>
                    <tr className="table-headings">
                      <th>SR No.</th>
                      <th>Account No.</th>
                      <th>Request</th>
                      <th>Status</th>
                    </tr>
                    <tr className="table-content">
                      <td>01</td>
                      <td>38799293143</td>
                      <td>Request</td>
                      <td>Status</td>
                    </tr>
                    <tr className="table-content">
                      <td>01</td>
                      <td>38799293143</td>
                      <td>Request Request </td>
                      <td>Status</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="services">
              <p className=" services-heading">Deliverables</p>
              <div>
                <table className="table-head">
                  <tbody>
                    <tr className="deliverables-headings">
                      <th>Shipment</th>
                      <th>Dispatch Date</th>
                      <th>AWB No</th>
                      <th>Status</th>
                    </tr>
                    <tr className="deliverables-content">
                      <td>01</td>
                      <td>38799293143</td>
                      <td>Request</td>
                      <td>Status</td>
                    </tr>
                    <tr className="deliverables-content">
                      <td>01</td>
                      <td>38799293143</td>
                      <td>Request Request </td>
                      <td>Status</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <div
                  className="nav flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className="nav-link active"
                    id="v-pills-Bank-Accounts-tab"
                    data-toggle="pill"
                    data-target="#v-pills-Bank-Accounts"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-Bank-Accounts"
                    aria-selected="true"
                  >
                    Bank Accounts
                  </button>
                  <button
                    className="nav-link"
                    id="v-pills-Credit-Cards-tab"
                    data-toggle="pill"
                    data-target="#v-pills-Credit-Cards"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-Credit-Cards"
                    aria-selected="false"
                  >
                    Credit Cards
                  </button>
                  <button
                    className="nav-link"
                    id="v-pills-Deposits-tab"
                    data-toggle="pill"
                    data-target="#v-pills-Deposits"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-Deposits"
                    aria-selected="false"
                  >
                    Deposits
                  </button>
                  <button
                    className="nav-link"
                    id="v-pills-Loan-tab"
                    data-toggle="pill"
                    data-target="#v-pills-Loan"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-Loan"
                    aria-selected="false"
                  >
                    Loan
                  </button>
                  <button
                    className="nav-link"
                    id="v-pills-Demat-tab"
                    data-toggle="pill"
                    data-target="#v-pills-Demat"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-Demat"
                    aria-selected="false"
                  >
                    Demat
                  </button>

                  <button
                    className="nav-link"
                    id="v-pills-Link-Accounts-Policies-tab"
                    data-toggle="pill"
                    data-target="#v-pills-Link-Accounts-Policies"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-Link-Accounts-Policies"
                    aria-selected="false"
                  >
                    Link Accounts / Policies
                  </button>
                </div>
              </div>
              <div className="col-9">
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show active "
                    id="v-pills-Bank-Accounts"
                    role="tabpanel"
                    aria-labelledby="v-pills-Bank-Accounts-tab"
                  >
                    <div className="d-flex flex-column">
                      <Link href="#" className="mt-2">
                        Update Profile
                      </Link>
                      <Link href="#" className="mt-2">
                        Transfer Your account to nearest branch
                      </Link>
                      <Link href="#" className="mt-2">
                        PAN updation
                      </Link>
                      <Link href="#" className="mt-2">
                        Account Statement
                      </Link>
                      <Link href="#" className="mt-2">
                        Block or Unblock ATM/Debit card
                      </Link>
                      <Link href="#" className="mt-2">
                        Reissue of Lost ATM/Debit Card
                      </Link>
                      <Link href="#" className="mt-2">
                        Cheque Book Request
                      </Link>
                      {/* <Link href="#" className="mt-2">
                        Reissue of Lost ATM/Debit Card
                      </Link> */}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-Credit-Cards"
                    role="tabpanel"
                    aria-labelledby="v-pills-Credit-Cards-tab"
                  >
                    <div className="d-flex flex-column">
                      <Link href="#" className="mt-2">
                        Generate Credit Card PIN
                      </Link>
                      <Link href="#" className="mt-2">
                        Block Credit Card
                      </Link>
                      <Link href="#" className="mt-2">
                        Upgrade your credit card
                      </Link>
                      <Link href="#" className="mt-2">
                        Merchant EMI Related
                      </Link>
                      <Link href="#" className="mt-2">
                        Request Statement
                      </Link>
                      {/* <Link href="#" className="mt-2">
                        Reissue of Lost ATM/Debit Card
                      </Link>
                      <Link href="#" className="mt-2">
                        Cheque Book Request
                      </Link> */}
                      {/* <Link href="#" className="mt-2">
                        Reissue of Lost ATM/Debit Card
                      </Link> */}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-Deposits"
                    role="tabpanel"
                    aria-labelledby="v-pills-Deposits-tab"
                  >
                    <div className="d-flex flex-column">
                      <Link href="#" className="mt-2">
                        Standard Fixed Deposit
                      </Link>
                      <Link href="#" className="mt-2">
                        Tax Saver Fixed Deposit : Lock-in Period of 5 years
                      </Link>

                      <Link href="#" className="mt-2">
                        Closure/Renewal of Fixed Deposit
                      </Link>
                      <Link href="#" className="mt-2">
                        Recurring Deposit
                      </Link>
                      <Link href="#" className="mt-2">
                        Closure/Renewal of Recurring Deposit
                      </Link>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-Loan"
                    role="tabpanel"
                    aria-labelledby="v-pills-Loan-tab"
                  >
                    <div className="d-flex flex-column">
                      <Link href="#" className="mt-2">
                        Link my loan accounts
                      </Link>
                      <Link href="#" className="mt-2">
                        Request for Re dispatch of Home Loan Document
                      </Link>

                      <Link href="#" className="mt-2">
                        Request of NOC for Vehicle Loans
                      </Link>

                      <Link href="#" className="mt-2">
                        Request for IT Certificate for Closed Home Loan
                      </Link>
                    </div>{" "}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-Demat"
                    role="tabpanel"
                    aria-labelledby="v-pills-Demat-tab"
                  >
                    <div className="d-flex flex-column">
                      <Link href="#" className="mt-2">
                        Open Demat Account
                      </Link>
                      <Link href="#" className="mt-2">
                        Link Demat User ID to existing User ID
                      </Link>
                    </div>{" "}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-Link-Accounts-Policies"
                    role="tabpanel"
                    aria-labelledby="v-pills-Link-Accounts-Policies-tab"
                  >
                    <div className="d-flex flex-column">
                      <Link href="#" className="mt-2">
                        Link my loan accounts
                      </Link>
                      <Link href="#" className="mt-2">
                        Link my Credit card
                      </Link>
                      <Link href="#" className="mt-2">
                        Link Demat Account
                      </Link>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Linkaccounts;
