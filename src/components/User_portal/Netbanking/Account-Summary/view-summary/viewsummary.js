import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import "./viewsummary.css";
import creditcardimg from "../../../../../Images/credit_card.svg";
import OverviewSidebar from '../../Sidebar/OverViewSidebar'
import axios from "axios"; // Import axios for making HTTP requests
import apiList from '../../../../../lib/apiList';

const Viewsummary = () => {
 
  const [userDetails, setUserDetails] = useState({
    accountNumber: "",
    bankBranch: "",
    ifscCode: ""
  });

  const [selectedOption, setSelectedOption] = useState(""); // State to track selected option
  const [showOutput, setShowOutput] = useState(false); // State to control displaying output


  const handleGoButtonClick = () => {
    // const selectedOption = document.querySelector('.selectSummaryCategory').value;
    if (!selectedOption) {
      alert("Please select an option");
      return;
    }
    
     
      // case 'Bank Account':
      //   // Navigate to /user/account
      //   window.location.href = "http://localhost:3000/user/accountsummary/viewsummary";
      //   break;
      switch (selectedOption) {

      case 'Deposit Account':
        // Navigate to /user/account/fixed-deposits
        window.location.href = "http://localhost:3000/user/account/fixed-deposits";
        break;
      case 'Loan Account':
        // Navigate to /user/loanaccounts
        window.location.href = "http://localhost:3000/user/loanaccounts";
        break;
      case 'Credit Card':
        // Navigate to /user/credit-cards
        window.location.href = "http://localhost:3000/user/credit-cards";
        break;
      case 'E-Statement':
        // Navigate to /user/account/e-statement
        window.location.href = "http://localhost:3000/user/account/e-statement";
        break;
      case 'Account Summary':
        // Navigate to /user/account
        window.location.href = "http://localhost:3000/user/account";
        break;
      default:
        break;
    }
  };

 


 
  useEffect(() => {
    // Fetch user details from backend when the component mounts
    const fetchUserDetails = async () => {
      try {
        const token = sessionStorage.getItem('loginToken'); // Get the token from sessionStorage
        const response = await axios.get(apiList.requestedUserDetailsByEmail, {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request headers
          },
        });
        setUserDetails(response.data.user); // Assuming the response contains user details inside a 'user' object
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
  
    fetchUserDetails();
  }, []); // Empty dependency array ensures useEffect runs only once when the component mounts
    
  // useEffect(() => {
  //   setShowOutput(selectedOption !== "");
  // }, [selectedOption]);
  useEffect(() => {
    setShowOutput(selectedOption !== "" && selectedOption === "Bank Account");
  }, [selectedOption]);

  return (
    <>
      <div className="" style={{marginTop:"90px"}}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-3 ">
            <OverviewSidebar />
      
            </div>
            <div className="col-9">
              <section className="container-fluid ">
                <div className="">
                  <div className="">
                    <div className="viewSummary">
                      <h1>View Account Summary</h1>
                      <p>
                        <label className="view_summary_label col-sm-4">Access my account summary:</label>
                        
                        <select
                         className="selectSummaryCategory col-sm-4"
                          // onChange={(e) => handleSearch(e.target.value)}
                          onChange={(e) => setSelectedOption(e.target.value)}
                          value={selectedOption}
                       
                         >
                          <option className="" hidden>
                           select 
                          </option>
                          <option className="">Bank Account</option>
                          <option className="">Deposit Account</option>
                          <option className="">Loan Account</option>
                          <option className="">Credit Card</option>
                          <option className="">E-Statement</option>
                          <option className="">Account Summary</option>
                        </select>{" "}
                        
                     {/* <button className="goButton">GO</button> */}
                     <button className="goButton" onClick={handleGoButtonClick}>GO</button>

                      </p>
                    </div>
                    {/* {showOutput && ( */}
                    {showOutput && selectedOption === 'Bank Account' && (

                      <div>
                     <div
                      style={{ height: "1px", border: "1px solid #cdcdcd" }}
                    ></div>
                    <div className="viewSummary_total">
                      <p>Total By Branch</p>
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
                          {/* <p className="">38799XXXX43</p> */}
                          <p className="">{userDetails.accountNumber}</p> {/* Display account number */}

                        </div>
                        <div className="col-4 viewSummary_totalLiabilities_value">
                          {/* <p className="">Poranki, Vijayawada</p> */}
                          <p className="">{userDetails.bankBranch}</p> {/* Display bank branch */}

                        </div>
                        <div className="col-4 viewSummary_totalLiabilities_value">
                          {/* <p className="">SBIN0011101</p> */}
                          <p className="">{userDetails.ifscCode}</p> {/* Display IFSC code */}

                        </div>
                      </div>
                    </div>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-2 viewSummary_totalAssets">
                          <p className="">All Bank Accounts</p>
                        </div>
                        <div className="col-2 viewSummary_totalAssets">
                          <p className="">All Deposit Accounts</p>
                        </div>
                        <div className="col-2 viewSummary_totalAssets">
                          <p className="">All Demat Accounts</p>
                        </div>
                        <div className="col-3 viewSummary_totalAssets">
                          <p className="">All Loan Accounts</p>
                        </div>

                        <div className="col-3 viewSummary_totalLiabilities">
                          <p className="">All Credit card accounts</p>
                        </div>

                        <div className="col-2 viewSummary_totalAssets_value">
                          <p className="">0.00</p>
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
                        Branch address will reflect post 1 day of branch transfe
                      </p>
                    </div>
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
