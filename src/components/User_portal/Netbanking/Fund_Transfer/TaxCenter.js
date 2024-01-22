import React from "react";
import "./FundTransfer.css";

const TaxCenter = () => {
  return (
    <div className="tax_centerbank_page col-sm-12">
      {/* <div className='inwardbank-header'></div> */}

      <p className="ptax_for_tax text-left">Under tax center, View</p>
      <p className="tax_center_options_pfull">
        <p className="ptag_view_yag_center">
          a. View Tax Credit Statement - Form 26AS
          <p>
            b. TDS Certificate
            <p>c. Form 15G/H</p>
          </p>
        </p>
      </p>

      <div className="user_authenti_tax_header ">
        <h5 className="user_header_tax_color">User Authentication Details</h5>
        <hr className="Tax_hrline_box_shadow" />
        <div className="light_bg_color_tax">
          <p className="ptag_tax_center">
            Please Enter These Details to Authorize
          </p>
          <div className="pl-2">
            <p className="Tax_ptag_please_para">
              Please enter these details to authorize the transaction
            </p>
            <div className=" Tax_ptag_please_para">
              <label htmlFor="otp">One Time Password</label>
              <div className="otp_button_Tax_icon">
                <input
                  className="otp_Tax_div_label"
                  type="text"
                  id="otp"
                  name="otp"
                />
                <button className="but_Tax_on_icon_otp">
                  <i class="fa-solid fa-keyboard fa-xl"></i>{" "}
                </button>
              </div>
            </div>
            <p className="otp_tax_matters">
              OTP has been generated with a validity of 100 seconds and sent to
              your registered mobile number.
              <p className="otp_tax_matters">
                {" "}
                If there is a delay in receipt of OTP, you can send a request to
                receive it. SMS IBOTP to 5575700 or 9215676708. Request should
                be sent from the mobile number registered in our records.
                <p className="otp_tax_matters">
                  Please do not share OTP with anyone, even if the person claims
                  to be an Royal Islamic Bank official.For further details
                  Please
                  <span className="Tax_click_here_span"> click here </span>
                </p>
              </p>
            </p>
          </div>
          <hr />
          <button className="btn btn-primary Tax_center_but_app" type="button">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaxCenter;
