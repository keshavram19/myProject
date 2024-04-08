import React, { useState, useRef } from "react";
import "./Overview.css";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import { MdCurrencyRupee } from "react-icons/md";
import { MdOutlineManageHistory } from "react-icons/md";
import { TbRecharging } from "react-icons/tb";
import { CgOpenCollective } from "react-icons/cg";
import { CiCreditCard1 } from "react-icons/ci";
import { MdElectricBolt } from "react-icons/md";
import { RiFundsFill } from "react-icons/ri";
import { TbDeviceMobileShare } from "react-icons/tb";
import Fasttagicon from "../../../../Images/fasttag_icon.png";
import { FaAngleRight } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";

const Overview = () => {
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const [password1, setPassword1] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible1(!passwordVisible1);
  };

  const [passwordVisible2, setPasswordVisible2] = useState(false);
  const [password2, setPassword2] = useState("");

  const togglePasswordVisibility2 = () => {
    setPasswordVisible2(!passwordVisible2);
  };

  const [passwordVisible3, setPasswordVisible3] = useState(false);
  const [password3, setPassword3] = useState("");

  const togglePasswordVisibility3 = () => {
    setPasswordVisible3(!passwordVisible3);
  };

  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);

  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };

  return (
    <div style={{ backgroundColor: "#f8f8f8", marginTop:"60px" }} className="overview">
        <Navbar />
      <div className="container-fluid pt-5 pb-5">
        <div className="row">
          <div className="col-3">
            <div className="card p-2">
              <div className="card overview_col_3_card1">
                <h6>iFinance</h6>
                <p>Effectively analyse all Bank(s) Account at one place</p>
                <span>
                  <Link to="">
                    Click here <FaChevronRight />
                  </Link>
                </span>
              </div>

              <div className="card overview_col_3_card2">
                <h6>Your Financial Journey</h6>
                <p>
                  Here are your next steps avail benefits up to 20 and more here
                </p>
                <span>
                  <Link to="">
                    Explore now <FaChevronRight />
                  </Link>
                </span>
              </div>
              <div className="card overview_col_3_card3">
                <h6>Services</h6>
                <span>
                  <Link to="">Change Address</Link>
                </span>
                <span>
                  <Link to="">Generate Card PIN</Link>
                </span>
                <span>
                  <Link to="">Manage Debit Card limit</Link>
                </span>
                <span>
                  <Link to="">Upgrade your Account</Link>
                </span>
                <span>
                  <Link to="">View/Update Nominee</Link>
                </span>
                <span>
                  <Link to="">Upgrade your Debit card</Link>
                </span>
                <span>
                  <Link to="">Link your Loan account</Link>
                </span>
                <span>
                  <Link to="">Positive Pay</Link>
                </span>
              </div>
              <div className="card overview_col_3_card4">
                <h6>What's New ?</h6>
                <span>
                  <Link to="">
                    Travel Card <FaChevronRight />
                  </Link>
                </span>
                <p>
                  Buy Forex Online to get free doorstep delivery. Now Reload
                  instance ...
                </p>

                <span>
                  <Link to="">
                    iWish-Flexible RD
                    <FaChevronRight />
                  </Link>
                </span>
                <p>
                  Deposit any amount any time. Open iWish a/c & get Rs.200 Big
                  ...
                </p>
              </div>
            </div>
          </div>
          <div className="col-6">
          <h6> Accounts</h6>
            <div className="">
              <div className="overview_col_6_row1">
                <div className="d-flex">
                  <button
                    onClick={() => {
                      handleHorizantalScroll(elementRef.current, 25, 100, -10);
                    }}
                    disabled={arrowDisable}
                    className="overview_arrow_button"
                  >
                    <FaChevronLeft />
                  </button>
                  <div class="overview_col_6_row01" ref={elementRef}>
                    <div class="">
                      <div class="overview_col_6_row1_grid_item">
                        <div className="card overview_col_6_row1_card_2">
                          <div className="text-right">
                            <button
                              onClick={togglePasswordVisibility3}
                              className="overview_eye_icon"
                            >
                              <FontAwesomeIcon
                                icon={passwordVisible2 ? faEye : faEyeSlash}
                              />
                            </button>
                          </div>
                          <h6>Total Amount : </h6>
                          <em>{passwordVisible3 ? "1234" : "*****"}</em>
                          <h6>Savings Account</h6>
                          <em>{passwordVisible3 ? "1234" : "*****"}</em>
                          <h6>Current Account</h6>
                          <em>{passwordVisible3 ? "1234" : "*****"}</em>
                        </div>

                        <div className="card overview_col_6_row1_card_3">
                          <h6>Deposits</h6>
                          <p>
                            Choose Certainty during uncertain times! Invest in
                            an FD, now
                          </p>
                          <Link to="">
                            Safeguard your hard earned money with FD
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      handleHorizantalScroll(elementRef.current, 25, 200, 10);
                    }}
                    className="overview_arrow_button"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>

              <div className="overview_col_6_next_row1">
                <div class="overview_col_6_next_row1_grid_container">
                  <div class="overview_col_6_next_row1grid_item">
                    <MdOutlineManageHistory />
                    <p>Manage Limits</p>
                  </div>
                  <div class="overview_col_6_next_row1grid_item">
                    <TbRecharging />
                    <p>Recharge now</p>
                  </div>
                  <div class="overview_col_6_next_row1grid_item">
                    <MdCurrencyRupee />
                    <p>Send money</p>
                  </div>
                  <div class="overview_col_6_next_row1grid_item">
                    <CgOpenCollective />
                    <p>open iWish</p>
                  </div>
                  <div class="overview_col_6_next_row1grid_item">
                    <CiCreditCard1 />
                    <p>Debit/ATM card</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h6 className="mt-4">Bill Payments</h6>
              <div className="overview_col_6_row2">
                <div class="overview_col_6_row2_grid_container">
                  <div class="overview_col_6_row2grid_item">
                    <MdElectricBolt />
                    <p>Electricity</p>
                  </div>
                  <div class="overview_col_6_row2grid_item">
                    <RiFundsFill />
                    <p>Mutual Funds</p>
                  </div>
                  <div class="overview_col_6_row2grid_item">
                    <TbDeviceMobileShare />
                    <p>Postpaid</p>
                  </div>
                  <div class="overview_col_6_row2grid_item">
                    <img src={Fasttagicon} style={{ width: "25px" }} />
                    <p>Fasttag</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overview_col_6_row3">
           <h6 className="mt-4"> credit cards</h6>
              <div className="d-flex">
                <button
                  onClick={() => {
                    handleHorizantalScroll(elementRef.current, 25, 100, -10);
                  }}
                  disabled={arrowDisable}
                  className="overview_arrow_button"
                >
                  <FaChevronLeft />
                </button>

                <div class="overview_col_6_row01" ref={elementRef}>
                 
                  <div class="">
                    <div class="overview_col_6_row3_grid_item">
                      <div className="card overview_col_6_row3_card_2">
                        <div className="text-right">
                          <button
                            onClick={togglePasswordVisibility2}
                            className="overview_eye_icon"
                          >
                            <FontAwesomeIcon
                              icon={passwordVisible2 ? faEye : faEyeSlash}
                            />
                          </button>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <img
                              src="https://www.transparentpng.com/thumb/atm-card/r05cSo-picture-credit-card-your-bank-atm-card-dowland.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-md-8">
                            <h6>Amazon Pay ICICI card</h6>
                            <p>1234 3456 5678 7890</p>
                            <Link to="">
                              <span>
                                Modify limit <FaAngleRight />
                              </span>
                            </Link>{" "}
                            <br />
                            <Link to="">
                              <span>How credit card limit works?</span>
                            </Link>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-md-4">
                            <p>Available limit</p>
                            <em>{passwordVisible2 ? "1234" : "*****"}</em>
                          </div>
                          <div className="col-md-4">
                            <p>Outstanding</p>
                            <em>{passwordVisible2 ? "1234" : "*****"}</em>
                          </div>
                          <div className="col-md-4">
                            <p>Previous bal</p>
                            <em>{passwordVisible2 ? "1234" : "*****"}</em>
                          </div>
                        </div>
                      </div>

                      <div className="card overview_col_6_row3_card_2">
                        <div className="text-right">
                          <button
                            onClick={togglePasswordVisibility}
                            className="overview_eye_icon"
                          >
                            <FontAwesomeIcon
                              icon={passwordVisible1 ? faEye : faEyeSlash}
                            />
                          </button>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <img
                              src="https://www.transparentpng.com/thumb/atm-card/r05cSo-picture-credit-card-your-bank-atm-card-dowland.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-md-8">
                            <h6>Amazon Pay ICICI card</h6>
                            <p>1234 3456 5678 7890</p>
                            <Link to="">
                              <span>
                                Modify limit <FaAngleRight />
                              </span>
                            </Link>{" "}
                            <br />
                            <Link to="">
                              <span>How credit card limit works?</span>
                            </Link>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-md-4">
                            <p>Available limit</p>
                            <em>{passwordVisible1 ? "1234" : "*****"}</em>
                          </div>
                          <div className="col-md-4">
                            <p>Outstanding</p>
                            <em>{passwordVisible1 ? "1234" : "*****"}</em>
                          </div>
                          <div className="col-md-4">
                            <p>Previous bal</p>
                            <em>{passwordVisible1 ? "1234" : "*****"}</em>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    handleHorizantalScroll(elementRef.current, 25, 200, 10);
                  }}
                  className="overview_arrow_button"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card p-2">
              <div className="card overview_rcol_3_card1_button">
                <h6>Check your CIBIL score</h6>
                <button>Get Report</button>
              </div>

              <div className="card overview_rcol_3_card2">
                <h6>My Loans</h6>
                <span>
                  <Link to="">
                    Personal Loan
                    <FaChevronRight />
                  </Link>
                </span>
                <p>Starting @11.25% p.a</p>

                <span>
                  <Link to="">
                    Buy your Dream Home
                    <FaChevronRight />
                  </Link>
                </span>
                <p>Higher Eligibility and lower EMI</p>
              </div>

              <div className="card overview_rcol_3_card3">
                <h6>My Investments</h6>
                <span>
                  <Link to="">
                    Mutual Funds
                    <FaChevronRight />
                  </Link>
                </span>
                <p>Investment in Mutual FUnd is simple and hassle free .</p>

                <span>
                  <Link to="">
                    PPF
                    <FaChevronRight />
                  </Link>
                </span>
                <p>Opening a PPF account is simple and hassle-free</p>
              </div>

              <div className="card overview_rcol_3_card4">
                <h6>My Insurances</h6>
                <span>
                  <Link to="">
                    Term Life Insurance
                    <FaChevronRight />
                  </Link>
                </span>
                <p>Rs 1 crore cover in 3 minutes, *T&C Apply</p>

                <span>
                  <Link to="">
                    Health Insurance
                    <FaChevronRight />
                  </Link>
                </span>
                <p>Family cover up to Rs 25 lakhs, *T&C Apply</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
