import React from "react";
import { Link } from "react-router-dom";
import "./PersonalLoginPage.css";
import ReCAPTCHA from "react-google-recaptcha";
import logo from "../../../Images/Royal islamic.png";

const CorporateLoginPage = () => {
  const handleRecaptchaChange = (value) => {
    // Handle the reCAPTCHA value change
    console.log("ReCAPTCHA value:", value);
  };
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
                <Link to="/netbanking-personal-login">
                  Login Personal Banking
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row personal_login">
          <div className="col-md-5">
            <h2>One Account with many benefits</h2>

            <div className="row">
              <div className="col-md-2 text-center m-auto">
                <img
                  src="https://netbanking.paytmbank.com/assets/static/images/ic-zero-balance.svg"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-10 p-0">
                <h5>Zero - Balance</h5>
                <p>Business account. No average monthly balance charges</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 text-center m-auto">
                <img
                  src="https://netbanking.paytmbank.com/assets/static/images/ic-24x7.svg"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-10 p-0">
                <h5>24*7 Transactions</h5>
                <p>To all bank accounts, no restriction</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 text-center m-auto">
                <img
                  src="https://netbanking.paytmbank.com/assets/static/images/ic-bulk-transfer.svg"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-10 p-0">
                <h5>Easy Bulk Transfer and Access Management</h5>
                <p>Hassle-free Bulk Transfer with Robust Security</p>
              </div>
            </div>

            {/* <button>Know more</button>   */}
          </div>
          <div className="col-md-7">
            <h5>Login to Access Your Corporate Banking</h5>

            <input
              type="text"
              placeholder="Registred Mobile Number"
              className="form-control corporate_login_input"
            />

            <div className="mt-3">
              <ReCAPTCHA
                sitekey="6Ldbdg0TAAAAAI7KAf72Q6uagbWzWecTeBWmrCpJ" // Replace with your site key
                onChange={handleRecaptchaChange}
              />
            </div>

            <div className="row ml-0">
              <button>continue</button>
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
        </div>
      </div>
      <hr className="landing_body_banner_bottom"></hr>
    </div>
  );
};

export default CorporateLoginPage;
