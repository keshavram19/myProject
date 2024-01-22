// src/App.js
import React, { useState } from "react";

import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap-utilities.min.css";
import { Link } from "react-router-dom";
import './LandingPage.css'

const data = [
  {
    question: "Do you offer support if I need help?",
    answer:
      "Yes! High-quality customer support is extremely important for a quality product, that’s why we do our best to resolve any issues you may encounter.",
  },
  {
    question: "What does premium support include?",
    answer:
      "We value our clients and you can always feel free to contact us for:Installing and adjusting\n bug fixing and troubleshooting",
  },
  {
    question:
      "What should I do if I need help with installation and adjusting?",
    answer:
      "We are ready to help with this! You can always contact us at apps@elfsight.com and we will help you to set up and change the settings of the app on your website the way you need.",
  },
];

const LandingPage = () => {
  const [selected, setSelected] = useState(0);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <>
      <nav>
        <div className="wrapper">
          <div className="logo">
            <a href="#">Logo</a>
          </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links m-auto">
            <label htmlFor="close-btn" className="btn close-btn">
              <i class="fa-solid fa-bars"></i>
            </label>
            <li>
              <a href="#" className="desktop-item">
                Personal Banking
              </a>
              {/* <input type="checkbox" id="showMega" />
                <label htmlFor="showMega" className="mobile-item">
                  Personal Banking
                </label> */}
              <div className="mega-box">
                <div className="content">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="row " style={{ lineHeight: "normal" }}>
                          <div className="col-md-3 text-center">
                            <img
                              src="https://www.paytmbank.com/images/saving-account-icn.svg"
                              className="img-fluid d-block"
                              alt="Savings Bank Icon"
                            />
                          </div>
                          <div className="col-md-9 p-0">
                            <h5 className="mb-0">Savings Bank</h5>
                            <p>Experience the new way of savings the money</p>
                          </div>
                        </div>
                        <div className="row " style={{ lineHeight: "normal" }}>
                          <div className="col-md-3 text-center">
                            <img
                              src="https://www.paytmbank.com/images/saving-account-icn.svg"
                              className="img-fluid d-block"
                              alt="Savings Bank Icon"
                            />
                          </div>
                          <div className="col-md-9 p-0">
                            <h5 className="mb-0">Savings Bank</h5>
                            <p>Experience the new way of savings the money</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row " style={{ lineHeight: "normal" }}>
                          <div className="col-md-3 text-center">
                            <img
                              src="https://www.paytmbank.com/images/saving-account-icn.svg"
                              className="img-fluid d-block"
                              alt="Savings Bank Icon"
                            />
                          </div>
                          <div className="col-md-9 p-0">
                            <h5 className="mb-0">Savings Bank</h5>
                            <p>Experience the new way of savings the money</p>
                          </div>
                        </div>
                        <div className="row " style={{ lineHeight: "normal" }}>
                          <div className="col-md-3 text-center">
                            <img
                              src="https://www.paytmbank.com/images/saving-account-icn.svg"
                              className="img-fluid d-block"
                              alt="Savings Bank Icon"
                            />
                          </div>
                          <div className="col-md-9 p-0">
                            <h5 className="mb-0">Savings Bank</h5>
                            <p>Experience the new way of savings the money</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row " style={{ lineHeight: "normal" }}>
                          <div className="col-md-3 text-center">
                            <img
                              src="https://www.paytmbank.com/images/saving-account-icn.svg"
                              className="img-fluid d-block"
                              alt="Savings Bank Icon"
                            />
                          </div>
                          <div className="col-md-9 p-0">
                            <h5 className="mb-0">Savings Bank</h5>
                            <p>Experience the new way of savings the money</p>
                          </div>
                        </div>
                        <div className="row " style={{ lineHeight: "normal" }}>
                          <div className="col-md-3 text-center">
                            <img
                              src="https://www.paytmbank.com/images/saving-account-icn.svg"
                              className="img-fluid d-block"
                              alt="Savings Bank Icon"
                            />
                          </div>
                          <div className="col-md-9 p-0">
                            <h5 className="mb-0">Savings Bank</h5>
                            <p>Experience the new way of savings the money</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <a href="#" className="desktop-item">
                Business Banking
              </a>
              {/* <input type="checkbox" id="showMega" />
                <label htmlFor="showMega" className="mobile-item">
                  Personal Banking
                </label> */}
              <div className="mega-box">
                <div className="content">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="row " style={{ lineHeight: "normal" }}>
                          <div className="col-md-3 text-center">
                            <img
                              src="https://www.paytmbank.com/images/saving-account-icn.svg"
                              className="img-fluid d-block"
                              alt="Savings Bank Icon"
                            />
                          </div>
                          <div className="col-md-9 p-0">
                            <h5 className="mb-0">Savings Bank</h5>
                            <p>Experience the new way of savings the money</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row " style={{ lineHeight: "normal" }}>
                          <div className="col-md-3 text-center">
                            <img
                              src="https://www.paytmbank.com/images/saving-account-icn.svg"
                              className="img-fluid d-block"
                              alt="Savings Bank Icon"
                            />
                          </div>
                          <div className="col-md-9 p-0">
                            <h5 className="mb-0">Savings Bank</h5>
                            <p>Experience the new way of savings the money</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row " style={{ lineHeight: "normal" }}>
                          <div className="col-md-3 text-center">
                            <img
                              src="https://www.paytmbank.com/images/saving-account-icn.svg"
                              className="img-fluid d-block"
                              alt="Savings Bank Icon"
                            />
                          </div>
                          <div className="col-md-9 p-0">
                            <h5 className="mb-0">Savings Bank</h5>
                            <p>Experience the new way of savings the money</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <a href="#" className="desktop-item">
                Company
              </a>
              {/* <input type="checkbox" id="showDrop" />
                <label htmlFor="showDrop" className="mobile-item">
                  Dropdown Menu
                </label> */}
              <ul className="drop-menu">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Board of directors</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#" className="desktop-item">
                Support
              </a>
              {/* <input type="checkbox" id="showDrop" />
                <label htmlFor="showDrop" className="mobile-item">
                  Dropdown Menu
                </label> */}
              <ul className="drop-menu">
                <li>
                  <a href="#">Rates & Charges</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </li>

            <li className="" style={{ listStyleType: "none" }}>
              <Link to="/personal-login" style={{ color: "#00baf2" }}>
                {" "}
                Login
              </Link>
            </li>
          </ul>

          <label htmlFor="menu-btn" className="btn menu-btn">
            <i className="fas fa-bars"></i>
          </label>
        </div>
      </nav>

      <div className="landing_body_banner">
        <div style={{ display: "inline" }}>
          <h1>
            <span style={{ backgroundColor: "#fff" }}>No fear.</span>
          </h1>
          <h1>
            <span style={{ backgroundColor: "#fff" }}>No greed.</span>
          </h1>
          <h1>
            <span style={{ backgroundColor: "#fff" }}>No entitlement.</span>
          </h1>
          <h1 className="landing_body_banner_head">
            India’s most sincere bank is here!
          </h1>
        </div>
      </div>

      <hr className="landing_body_banner_bottom"></hr>

      <div className="text-center landing_sec2_img">
        <img
          src="https://www.paytmbank.com/images/homepage-mobile-img.svg"
          className="img-fluid"
        />
      </div>

      <div className="container">
        <div className="text-center  landing_img_content">
          <h4>Join the Revolution.</h4>
          <h5>Start your Digital Savings Account today!</h5>
          <p>
            Paytm Payments Bank offers a Savings Account with no account opening
            charges or minimum balance requirements. Keep upto Rs. 2 lac of
            deposits and enjoy benefits like:
          </p>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row landing_list1">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-2 text-center m-auto">
                <img src="https://www.paytmbank.com/images/icons/ic-nofees.png" />
              </div>
              <div className="col-md-10 ">
                <h5>No account fees and charges</h5>
                <p>
                  Enjoy the convenience of banking on your phone and no charges
                  for online transactions
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 text-center m-auto">
                <img src="https://www.paytmbank.com/images/icons/ic-nofees.png" />
              </div>
              <div className="col-md-10">
                <h5>No account fees and charges</h5>
                <p>
                  Enjoy the convenience of banking on your phone and no charges
                  for online transactions
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 text-center m-auto">
                <img src="https://www.paytmbank.com/images/icons/ic-nofees.png" />
              </div>
              <div className="col-md-10">
                <h5>No account fees and charges</h5>
                <p>
                  Enjoy the convenience of banking on your phone and no charges
                  for online transactions
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-2 text-center m-auto">
                <img src="https://www.paytmbank.com/images/icons/ic-nofees.png" />
              </div>
              <div className="col-md-10">
                <h5>No account fees and charges</h5>
                <p>
                  Enjoy the convenience of banking on your phone and no charges
                  for online transactions
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 text-center m-auto">
                <img src="https://www.paytmbank.com/images/icons/ic-nofees.png" />
              </div>
              <div className="col-md-10">
                <h5>No account fees and charges</h5>
                <p>
                  Enjoy the convenience of banking on your phone and no charges
                  for online transactions
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 text-center m-auto">
                <img src="https://www.paytmbank.com/images/icons/ic-nofees.png" />
              </div>
              <div className="col-md-10">
                <h5>No account fees and charges</h5>
                <p>
                  Enjoy the convenience of banking on your phone and no charges
                  for online transactions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="landing_account_open_page">
        <div className="container">
          <h1>Open your Paytm Payments Bank account today!</h1>
          <p>
            <span>Click Here</span>
          </p>
        </div>
      </div>

      <div className="container">
        <div className="text-center  landing_img_content">
          <h4>Say hello to your</h4>
          <h5>Paytm Payments Bank Debit & ATM Card</h5>
          <p>
            Every Paytm Payments Bank account holder will be issued a free
            Digital Debit Card at the time of account opening. Account holders
            can request for a physical Debit Card through the Paytm Payments
            Bank section of their Paytm App
          </p>
        </div>
      </div>

      <div className="container landing_list1 landing_list2">
        <div className="row">
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-2 text-center m-auto">
                <img src="https://www.paytmbank.com/images/icons/ic-nofees.png" />
              </div>
              <div className="col-md-10 ">
                <h5>No account fees and charges</h5>
                <p>
                  Enjoy the convenience of banking on your phone and no charges
                  for online transactions
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 text-center m-auto">
                <img src="https://www.paytmbank.com/images/icons/ic-nofees.png" />
              </div>
              <div className="col-md-10 ">
                <h5>No account fees and charges</h5>
                <p>
                  Enjoy the convenience of banking on your phone and no charges
                  for online transactions
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src="https://www.paytmbank.com/images/ic_ppb_vdc.png"
              className="img-fluid"
            />
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-2 text-center m-auto">
                <img src="https://www.paytmbank.com/images/icons/ic-nofees.png" />
              </div>
              <div className="col-md-10 ">
                <h5>No account fees and charges</h5>
                <p>
                  Enjoy the convenience of banking on your phone and no charges
                  for online transactions
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 text-center m-auto">
                <img src="https://www.paytmbank.com/images/icons/ic-nofees.png" />
              </div>
              <div className="col-md-10 ">
                <h5>No account fees and charges</h5>
                <p>
                  Enjoy the convenience of banking on your phone and no charges
                  for online transactions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <h4>All your questions answered</h4>
      </div>

      <div className="container">
        <div className="landing_page_accordian">
          <div className="accordion">
            {data.map((item, index) => (
              <div className="landing_item">
                <div className="landing_title" onClick={() => toggle(index)}>
                  <h2>{item.question}</h2>
                  <span>{selected === index ? "-" : "+"}</span>
                </div>
                <div
                  className={
                    selected === index
                      ? "landing_content landing_show "
                      : "landing_content"
                  }
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container text-center">
        <h6>
          Have more questions?<Link to="#">Read FAQs</Link>{" "}
        </h6>
      </div>

      <div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div>
                  <h5>Products</h5>
                  <p>Savings Bank Account</p>
                  <p>Business Account</p>
                  <p>Debit & ATM Card</p>
                  <p>Paytm Payments Bank Wallet</p>
                  <p>Payments</p>
                  <p>Food Wallet</p>
                  <p>NACH/Recurring</p>
                  <p>Fastag</p>
                  <p>Fixed Deposit</p>
                  <p>Basic Savings Bank Deposit Account (BSBD)</p>
                  <p>AePS</p>
                </div>
                <div>
                  <h5>Corporate Address</h5>
                  <p>V.J. Business Towers, Sector 125, Noida, Uttar Pradesh</p>
                  <p>201303</p>
                  <h6>Debit & ATM Card</h6>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <h5>Company</h5>
                  <p>About Us</p>
                  <p>FAQs</p>
                  <p>Blogs</p>
                  <p>Report a Fraud</p>
                  <p>Contact Us</p>
                  <p>Active KYC Points</p>
                  <p>Register as a KYC Point</p>
                  <p>Terminated KYC Points</p>
                  <p>Careers</p>
                </div>
                <div>
                  <h5>Information</h5>
                  <p>Terms & Conditions</p>
                  <p>Disclaimers</p>
                  <p>Privacy Policy</p>
                  <p>Important Notices</p>
                  <p>Regulatory Disclosure</p>
                  <p>Safety & Security</p>
                  <p>DICGC Insurance Cover</p>
                  <p>RBI kehta hai</p>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <h5>Form Center</h5>
                  <p>Deceased Depositors Claim Form</p>
                  <p>Customer Grievance Advice Form</p>
                  <p>ATM cum Debit Card Dispute Form</p>
                  <p>Unclaimed Deposit Claim Form</p>
                </div>
                <div>
                  <h5>Policies</h5>
                  <p>Citizen charter</p>
                  <p>Comprehensive Deposit Policy</p>
                  <p>Customer Compensation Policy</p>
                  <p>Customer Grievance Redressal Policy</p>
                  <p>Charter of Customer Rights</p>
                  <p>Whistle Blower Policy</p>
                  <p>Code of Commitment</p>
                  <p>Aadhaar Data Privacy Policy</p>
                  <p>Doorstep Banking Policy</p>
                  <p>Fraud Prevention</p>
                  <p>Policy on Appointment of Statutory</p>
                  <p>Auditor</p>
                  <p>RBI's Integrated Ombudsman Scheme</p>
                  <p>Salient Features - RBI - IOS, 2021</p>
                  <p>Contact details of PNO</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container text-center mt-5">
            <Link to="#">CSR</Link>
          </div>
          <div>
            <img
              src="https://www.paytmbank.com/_next/static/media/footer-illustration-v2.70f33a8b.png"
              className="img-fluid"
            />
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
