import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PersonalLoginPage.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import ReCAPTCHA from "react-google-recaptcha";
import logo from "../../../Images/Royal islamic.png";
import logIn from "../../../Images/login_img.png";
const PersonalLoginPage = () => {
  const handleRecaptchaChange = (value) => {
    // Handle the reCAPTCHA value change
    console.log("ReCAPTCHA value:", value);
  };

  const [form, setForm] = useState("login");

  return (
    <div>
      <div className="container-fluid login_nav">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={logo} style={{ width: "100px" }} />
            </div>
            <div className="col-6 text-right m-auto">
              <p className="mb-0">
                <Link to="/netbanking-corporate-login">
                  Login Corporate Banking
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row personal_login">
          <div className="col-md-5 p-0">
            {/* <h2>One Account with many benefits</h2>

            <div className="row">
              <div className="col-md-2 text-center m-auto">
                <img
                  src="https://webapp.paytmbank.com/assets/static/images/24x7.svg"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-10 p-0">
                <h5>24 * 7 Transactions</h5>
                <p>To all bank accounts, no restriction</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 text-center m-auto">
                <img
                  src="https://webapp.paytmbank.com/assets/static/images/Bank.svg"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-10 p-0">
                <h5>Secure Banking</h5>
                <p>Banking with peace of mind</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 text-center m-auto">
                <img
                  src="https://webapp.paytmbank.com/assets/static/images/debitcard.svg"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-10 p-0">
                <h5>Personalized Debit card</h5>
                <p>For all your POS & Online spends</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 text-center m-auto">
                <img
                  src="https://webapp.paytmbank.com/assets/static/images/fixeddeposit.svg"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-10 p-0">
                <h5>Super Liquid Fixed Deposit</h5>
                <p>No withdrawal penalties, instant remittances & payments</p>
              </div>
            </div>
            <button>Know more</button> */}
            <img src={logIn} className="img-fluid" />
          </div>

          {form === "login" && (
            <div className="col-md-7">
              <h5>Login to Access Your Personal Banking</h5>
              {/* <p className="personal_dont_password">
                <Link
                  to="#"
                  onClick={() => setForm("createuser")}
                  style={{ color: "#f18121" }}
                >
                  Don't have a username? Create Now
                </Link>
              </p> */}
              <input
                type="text"
                placeholder="Enter Bank Username"
                className="form-control"
              />
              <input
                type="Password"
                placeholder="Enter Bank Password"
                className="form-control"
              />

              <div className="mt-3">
                <ReCAPTCHA
                  sitekey="6Ldbdg0TAAAAAI7KAf72Q6uagbWzWecTeBWmrCpJ" // Replace with your site key
                  onChange={handleRecaptchaChange}
                />
              </div>

              <div className="row">
                <div className="col-md-4">
                  <button>Sign In Securly</button>
                </div>
                <div className="col-md-4 m-auto text-right">
                  <Link
                    to="#"
                    onClick={() => setForm("forgotusername")}
                    style={{ color: "#f18121" }}
                  >
                    Forgot Username
                  </Link>
                </div>
                <div className="col-md-4  m-auto">
                  <Link
                    to="#"
                    onClick={() => setForm("forgotpassword")}
                    style={{ color: "#f18121" }}
                  >
                    Forgot Password
                  </Link>
                </div>
              </div>
              <div className="row mt-5 personal_login_pp">
                <p>
                  {" "}
                  By signing in, you agree to our{" "}
                  <Link to="#">privacy policy</Link> and{" "}
                  <Link to="#">terms of use.</Link>
                  <span>Need Help?</span>
                </p>
              </div>
            </div>
          )}

          {/* {form === "createuser" && (
            <div className="col-md-7">
              <h5>
                <FaArrowLeftLong
                  onClick={() => setForm("login")}
                  style={{ paddingRight: "5px", cursor: "pointer" }}
                />
                Activate Your Personal Banking
              </h5>

              <input
                type="text"
                placeholder="Registred Mobile Number"
                className="form-control"
              />

              <div className="mt-3">
                <ReCAPTCHA
                  sitekey="6Ldbdg0TAAAAAI7KAf72Q6uagbWzWecTeBWmrCpJ" // Replace with your site key
                  onChange={handleRecaptchaChange}
                />
              </div>

              <div className="row ml-0">
                <button>Continue</button>
              </div>
            </div>
          )} */}

          {form === "forgotusername" && (
            <div className="col-md-7">
              <h5>
                <FaArrowLeftLong
                  onClick={() => setForm("login")}
                  style={{ paddingRight: "5px", cursor: "pointer" }}
                />
                Forgot Username?
              </h5>

              <input
                type="text"
                placeholder="Registred Mobile Number"
                className="form-control"
              />

              <div className="mt-3">
                <ReCAPTCHA
                  sitekey="6Ldbdg0TAAAAAI7KAf72Q6uagbWzWecTeBWmrCpJ" // Replace with your site key
                  onChange={handleRecaptchaChange}
                />
              </div>

              <div className="row ml-0">
                <button>Continue</button>
              </div>
            </div>
          )}

          {form === "forgotpassword" && (
            <div className="col-md-7">
              <h5>
                <FaArrowLeftLong
                  onClick={() => setForm("login")}
                  style={{ paddingRight: "5px", cursor: "pointer" }}
                />
                Forgot Password?
              </h5>

              <input
                type="text"
                placeholder="Registred Mobile Number"
                className="form-control"
              />

              <div className="mt-3">
                <ReCAPTCHA
                  sitekey="6Ldbdg0TAAAAAI7KAf72Q6uagbWzWecTeBWmrCpJ" // Replace with your site key
                  onChange={handleRecaptchaChange}
                />
              </div>

              <div className="row ml-0">
                <button>Continue</button>
              </div>
            </div>
          )}
        </div>
      </div>
      <hr className="landing_body_banner_bottom"></hr>
    </div>
  );
};

export default PersonalLoginPage;
