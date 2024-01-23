import React from "react";
import "./viewsummary.css";
import creditcardimg from "../../../../../Images/credit_card.svg";
import OverviewSidebar from '../../Sidebar/OverViewSidebar'

const Viewsummary = () => {
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
                        Access my{" "}
                        <select className="selectSummaryCategory">
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
                        <button className="goButton">GO</button>
                      </p>
                    </div>
                    <div
                      style={{ height: "1px", border: "1px solid #cdcdcd" }}
                    ></div>
                    <div className="viewSummary_total">
                      <p>Total By Branch</p>
                    </div>
                    <div className="container-fluid">
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
                    </div>
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
                          <p className="">38799XXXX43</p>
                        </div>
                        <div className="col-4 viewSummary_totalLiabilities_value">
                          <p className="">Poranki, Vijayawada</p>
                        </div>
                        <div className="col-4 viewSummary_totalLiabilities_value">
                          <p className="">SBIN0011101</p>
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
