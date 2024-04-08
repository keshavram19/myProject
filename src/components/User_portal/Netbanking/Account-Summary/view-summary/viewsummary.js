import React, { useState, useEffect } from "react";
import "./viewsummary.css";
import creditcardimg from "../../../../../Images/credit_card.svg";
import OverviewSidebar from "../../Sidebar/OverViewSidebar";
import axios from "axios";
import apiList from "../../../../../lib/apiList";
import FixedDeposit from "../../Bank_Accounts/FixedDeposit";
import LoanAccounts from "../../Loans/Loanaccounts";
import CreditCard from "../../CreditCards/CreditCard";
import Estatement from "../../Bank_Accounts/EStatement";
import Accounts from "../../Bank_Accounts/Accounts";

const Viewsummary = () => {
  const [userDetails, setUserDetails] = useState({
    accountNumber: "",
    bankBranch: "",
    ifscCode: "",
  });

  const [selectedOption, setSelectedOption] = useState(""); // Default state is empty
  const [showOutput, setShowOutput] = useState(false);


  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = sessionStorage.getItem("loginToken");
        const response = await axios.get(apiList.requestedUserDetailsByEmail, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserDetails(response.data.user);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchUserDetails();
  }, []);

  useEffect(() => {
    // Set default value to 'Bank Account' on initial render
    if (!selectedOption) {
      setSelectedOption("Bank Account");
    }
    setShowOutput(selectedOption === selectedOption);
  }, [selectedOption]);

  // Function to handle option change
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div className="" style={{ marginTop: "90px" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-3 ">
              <OverviewSidebar />
            </div>
            <div className="col-9">
              <section className="container-fluid ">
                <div className="">
                  <div className="">
                    <div className="viewSummary_acct_sum">
                      <h1 className="viewSummary_acct_sum_heading_htager">View Account Summary</h1>
                      <p className="view_summary_acct_sum_paratager">
                        Access my{" "}
                        <select
                          className="selectSummaryCategory"
                          value={selectedOption}
                          onChange={(e) => handleOptionChange(e.target.value)}
                        >
                          <option value="Bank Account">Bank Account</option>
                          <option value="Deposit Account">
                            Deposit Account
                          </option>

                          <option value="Loan Account">Loan Account</option>
                          <option value="Credit Card">Credit Card</option>
                          <option value="E-Statement">E-Statement</option>
                          <option value="Account Summary">
                            Account Summary
                          </option>
                        </select>
                      </p>
                    </div>
                    {showOutput && selectedOption === "Bank Account" && (
                      <div>
                     <div
                      style={{ height: "1px", border: "1px solid #cdcdcd" }}
                    ></div>
                    <div className="viewSummary_total_acct_sum_view">
                      <p className="Acct_sum_view_sum_totalby">Total By Branch</p>
                    </div>
                    {/* <div className="container-fluid">
                      <div className="row">
                        <div className="col-6 viewSummary_totalAssets">
                          <p className="">Total Assets</p>
                        </div>
                        <div className="col-6 viewSummary_totalLiabilities">
                          <p className="">Total Liabilities</p>
                        </div>
                        <div className="col-6 viewSummary_totalAssets_value">
                          <p className="">INR 0.00</p>
                        </div>
                        <div className="col-6 viewSummary_totalLiabilities_value">
                          <p className="">INR 46,372.00</p>
                        </div>
                      </div>
                    </div> */}
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-4 viewSummary_Acct_sum_totalAssets">
                          <p className="viewSummary_Acct_sum_totalAssets_paratager">Account Number</p>
 
                        </div>
                        <div className="col-4 viewSummary_Acct_sum_totalAssets">
                          <p className="viewSummary_Acct_sum_totalAssets_paratager">Branch Address</p>

                        </div>
                        <div className="col-4 Acct_sum_view_Summary_totalLiabilities">
                          <p className="Acct_sum_view_Summary_totalParatag">IFSC Code</p>
 
                        </div>
                        <div className="col-4 Acct_sum_view_Summary_total_Assets_value">
                          {/* <p className="">38799XXXX43</p> */}
                          <p className="Acct_sum_view_Summary_total_Assets_value_pgratager">{userDetails.accountNumber}</p> {/* Display account number */}


                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-4 viewSummary_totalAssets">
                              <p className="">Account Number</p>
                            </div>
                            <div className="col-4 viewSummary_totalAssets">
                              <p className="">Branch Address</p>
                            </div>
                            <div className="col-4 viewSummary_totalLiabilities">
                              <p className="">IFSC Code</p>
                            </div>
                            <div className="col-4 viewSummary_totalAssets_value">
                              <p className="">{userDetails.accountNumber}</p>
                            </div>
                            <div className="col-4 viewSummary_totalLiabilities_value">
                              <p className="">{userDetails.bankBranch}</p>
                            </div>
                            <div className="col-4 viewSummary_totalLiabilities_value">
                              <p className="">{userDetails.ifscCode}</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-4 Acct_sumY_view_Summary_total_Liabilities_value">
                          {/* <p className="">Poranki, Vijayawada</p> */}
                          <p className="Acct_sumY_view_Summary_total_Liabili_ptgergr">{userDetails.bankBranch}</p> {/* Display bank branch */}

                        </div>
                        <div className="col-4 Acct_sumY_view_Summary_total_Liabilities_value">
                          {/* <p className="">SBIN0011101</p> */}
                          <p className="Acct_sumY_view_Summary_total_Liabili_ptgergr">{userDetails.ifscCode}</p> {/* Display IFSC code */}

                        </div>
                      </div>
                    </div>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-2 viewSummary_Acct_sum_totalAssets">
                          <p className="viewSummary_Acct_sum_totalAssets_paratager">All Bank Accounts</p>
                        </div>
                        <div className="col-2 viewSummary_Acct_sum_totalAssets">
                          <p className="viewSummary_Acct_sum_totalAssets_paratager">All Deposit Accounts</p>
                        </div>
                        <div className="col-2 viewSummary_Acct_sum_totalAssets">
                          <p className="viewSummary_Acct_sum_totalAssets_paratager">All Demat Accounts</p>
                        </div>
                        <div className="col-3 viewSummary_Acct_sum_totalAssets">
                          <p className="viewSummary_Acct_sum_totalAssets_paratager">All Loan Accounts</p>
                        </div>

                        <div className="col-3 Acct_sum_view_Summary_totalLiabilities">
                          <p className="Acct_sum_view_Summary_totalParatag">All Credit card accounts</p>
                        </div>

                        <div className="col-2 Acct_sum_view_Summary_total_Assets_value">
                          <p className="Acct_sum_view_Summary_total_Assets_value_pgratager">0.00</p>
                        </div>
                        <div className="col-2 Acct_sum_view_Summary_total_Assets_value">
                          <p className="Acct_sum_view_Summary_total_Assets_value_pgratager">NA</p>
                        </div>
                        <div className="col-2 Acct_sum_view_Summary_total_Assets_value">
                          <p className="Acct_sum_view_Summary_total_Assets_value_pgratager">0.00</p>
                        </div>
                        <div className="col-3 Acct_sumY_view_Summary_total_Liabilities_value">
                          <p className="Acct_sumY_view_Summary_total_Liabili_ptgergr">0.00</p>
                        </div> 
                         <div className="col-3 Acct_sumY_view_Summary_total_Liabilities_value">
                          <p className="Acct_sumY_view_Summary_total_Liabili_ptgergr">46,522.39</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="view_Summary_offers_section"
                      style={{
                        boxShadow: "0px 2px 5px rgb(113 113 113 / 39%);",
                      }}
                    >
                       <div className="offers_heading">
                        <p>Offers for you</p>
                      </div>
                      <div className="offer_cards container-fluid">
                        <div className="row">
                          <div className="col-3">
                            <div className="offer_cards">
                              <div className="offers_top">
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <img
                                    src={creditcardimg}
                                    alt="creditcard"
                                  ></img>
                                  <h6>Credit Card</h6>
                                </div>
                                <div>
                                  <p>
                                    Avail upto 100% On Road Funding with Pre
                                    approved Offer of Rs 2,50,000
                                  </p>
                                </div>
                                <div>
                                  <p>
                                    Know More{" "}
                                    <i class="ri-arrow-right-s-line"></i>{" "}
                                  </p>
                                </div>
                              </div>
                              <div className="offers_bottom">
                                <span> UPGRADE NOW</span>
                              </div>

                            </div>
                            <div className="col-2 viewSummary_totalAssets_value">
                              <p className="">NA</p>
                            </div>
                            <div className="col-2 viewSummary_totalAssets_value">
                              <p className="">0.00</p>
                            </div>
                            <div className="col-3 viewSummary_totalLiabilities_value">
                              <p className="">0.00</p>
                            </div>
                            <div className="col-3 viewSummary_totalLiabilities_value">
                              <p className="">46,522.39</p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="viewSummary offers_section"
                          style={{
                            boxShadow: "0px 2px 5px rgb(113 113 113 / 39%);",
                          }}
                        >
                          <div className="offers_heading">
                            <p>Offers for you</p>
                          </div>
                          <div className="offer_cards container-fluid">
                            <div className="row">
                              <div className="col-3">
                                <div className="offer_cards">
                                  <div className="offers_top">
                                    <div
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                      }}
                                    >
                                      <img
                                        src={creditcardimg}
                                        alt="creditcard"
                                      ></img>
                                      <h6>Credit Card</h6>
                                    </div>
                                    <div>
                                      <p>
                                        Avail upto 100% On Road Funding with Pre
                                        approved Offer of Rs 2,50,000
                                      </p>
                                    </div>
                                    <div>
                                      <p>
                                        Know More{" "}
                                        <i class="ri-arrow-right-s-line"></i>{" "}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="offers_bottom">
                                    <span> UPGRADE NOW</span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                <div className="offer_cards">
                                  <div className="offers_top">
                                    <div
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                      }}
                                    >
                                      <img
                                        src={creditcardimg}
                                        alt="creditcard"
                                      ></img>
                                      <h6>Credit Card</h6>
                                    </div>
                                    <div>
                                      <p>
                                        Avail upto 100% On Road Funding with Pre
                                        approved Offer of Rs 2,50,000
                                      </p>
                                    </div>
                                    <div>
                                      <p>
                                        Know More{" "}
                                        <i class="ri-arrow-right-s-line"></i>{" "}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="offers_bottom">
                                    <span> UPGRADE NOW</span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                <div className="offer_cards">
                                  <div className="offers_top">
                                    <div
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                      }}
                                    >
                                      <img
                                        src={creditcardimg}
                                        alt="creditcard"
                                      ></img>
                                      <h6>Credit Card</h6>
                                    </div>
                                    <div>
                                      <p>
                                        Avail upto 100% On Road Funding with Pre
                                        approved Offer of Rs 2,50,000
                                      </p>
                                    </div>
                                    <div>
                                      <p>
                                        Know More{" "}
                                        <i class="ri-arrow-right-s-line"></i>{" "}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="offers_bottom">
                                    <span> UPGRADE NOW</span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                <div className="offer_cards">
                                  <div className="offers_top">
                                    <div
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                      }}
                                    >
                                      <img
                                        src={creditcardimg}
                                        alt="creditcard"
                                      ></img>
                                      <h6>Credit Card</h6>
                                    </div>
                                    <div>
                                      <p>
                                        Avail upto 100% On Road Funding with Pre
                                        approved Offer of Rs 2,50,000
                                      </p>
                                    </div>
                                    <div>
                                      <p>
                                        Know More{" "}
                                        <i class="ri-arrow-right-s-line"></i>{" "}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="offers_bottom">
                                    <span> UPGRADE NOW</span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                <div className="offer_cards">
                                  <div className="offers_top">
                                    <div
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                      }}
                                    >
                                      <img
                                        src={creditcardimg}
                                        alt="creditcard"
                                      ></img>
                                      <h6>Credit Card</h6>
                                    </div>
                                    <div>
                                      <p>
                                        Avail upto 100% On Road Funding with Pre
                                        approved Offer of Rs 2,50,000
                                      </p>
                                    </div>
                                    <div>
                                      <p>
                                        Know More{" "}
                                        <i class="ri-arrow-right-s-line"></i>{" "}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="offers_bottom">
                                    <span> UPGRADE NOW</span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                <div className="offer_cards">
                                  <div className="offers_top">
                                    <div
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                      }}
                                    >
                                      <img
                                        src={creditcardimg}
                                        alt="creditcard"
                                      ></img>
                                      <h6>Credit Card</h6>
                                    </div>
                                    <div>
                                      <p>
                                        Avail upto 100% On Road Funding with Pre
                                        approved Offer of Rs 2,50,000
                                      </p>
                                    </div>
                                    <div>
                                      <p>
                                        Know More{" "}
                                        <i class="ri-arrow-right-s-line"></i>{" "}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="offers_bottom">
                                    <span> UPGRADE NOW</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="" style={{ fontSize: "11px" }}>
                          <p className="mb-0 mt-4" style={{ fontSize: "13px" }}>
                            Notes :
                          </p>
                          <span>
                            IFSC Code and Branch address is displayed only for
                            savings account.
                          </span>
                          <p>
                            In case of branch transfer,changes in IFSC code and
                            Branch address will reflect post 1 day of branch
                            transfe
                          </p>
                        </div>
                      </div>
                    )}

{showOutput && selectedOption === "Deposit Account" && (
  <div>
    <FixedDeposit withinViewSummaryPage={true} />
  </div>
)}


{showOutput && selectedOption === "Loan Account" && (
  <div>
    <LoanAccounts withinViewSummaryPage={true} />
  </div>
)}

{showOutput && selectedOption === "Credit Card" && (
  <div>
    <CreditCard withinViewSummaryPage={true} />
  </div>
)}

{showOutput && selectedOption === "E-Statement" && (
  <div>
    <Estatement withinViewSummaryPage={true} />
  </div>
)}             

{showOutput && selectedOption === "Account Summary" && (
  <div>
    <Accounts withinViewSummaryPage={true} />
  </div>
)}



                   

                    
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Viewsummary;
                       
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
