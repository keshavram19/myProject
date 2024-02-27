import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './Customerservice.css'
import apiList from '../../../../lib/apiList';
import Footer from "./Customerservicefooter";

const CustomerserviceTaxCentre = () => {
  const navigate = useNavigate();
      
  const accountNumber = 1124563456;
  // const [otpMethod, setotpMethod] = useState("");

 
  
  
  const handleOtpGeneration = async () => {
    try {
      const otpResponse = await axios.post(`${apiList.createVerificationCode}`, {
        accountNumber: accountNumber,
        otpMethod: "sms",
      });
     

      console.log('OTP Response:', otpResponse.data);
      navigate('/user/customerservice/form16aotppage');
      
    } catch (error) {
      console.error('Error generating OTP:', error);
      
    }
  };
  


  return (
    <div className="TaxCenter_Container container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="TaxCentre_firsttext">
          <h2 className="TaxCanter_heading_h2">Tax Cantre</h2>
          <h4 className="TaxCanter_heading_h4">View Tax/Account Statement</h4>
          </div>
          <div class="row TaxCentre_Cardgap">
            <div class="col-sm-6">
              <div class="card TaxCenter_Card_inform">
                <div class="TaxCenter_Cardsetting">
                  <h5>View Tax Credit Statement - Form 26AS</h5>
                  <p >View your Form 26 AS statement.</p>
                  <div class="TaxCentre_space_btnknow">
                  <Link to="/user/fundtransfer/tax-center" class="btn  TaxCentre_buttonOverflow">
                  VIEW
                  </Link>
                  <Link to="/" className="TaxCentre_more_Links">Know More</Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="card TaxCenter_Card_inform2">
                <div class="TaxCenter_Cardsetting">
                  <h5 class="">FORM 16A</h5>
                  <p class="">View / Download your Form 16A.</p>
                  <div class="TaxCentre_space_btnknow">
                  <button onClick={handleOtpGeneration} class="btn  TaxCentre_buttonOverflow"
                  >
                 {/* <Link>VIEW</Link>  */}
                 VIEW
                  </button>
                  <Link to="/form16a" className="TaxCentre_more_Links">Know More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row TaxCentre_Cardgap">
            <div class="col-sm-6">
              <div class="card TaxCenter_Card_inform">
                <div class="TaxCenter_Cardsetting">
                  <h5 class="">e Tax Challans</h5>
                  <p class="">View / Download your Challans for Direct/Indirect tax payments.</p>
                  <div class="TaxCentre_space_btnknow">
                  <Link to="/user/fundtransfer/tax-payment" class="btn  TaxCentre_buttonOverflow">
                    VIEW
                  </Link>
                  <Link to="/" className="TaxCentre_more_Links">Know More</Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="card TaxCenter_Card_inform2">
                <div class="TaxCenter_Cardsetting">
                  <h5 class="">Form 15G/H</h5>
                  <p class="">View / Download your Form 15G/H.</p>
                  <div class="TaxCentre_space_btnknow ">
                  <Link to="/user/fundtransfer/tax-center" class="btn  TaxCentre_buttonOverflow">
                    UPDATE
                  </Link>
                  <Link to="/" className="TaxCentre_more_Links2">Know More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row TaxCentre_Cardgap">
            <div class="col-sm-6">
              <div class="card TaxCenter_Card_inform">
                <div class="TaxCenter_Cardsetting">
                  <h5 class="">e-Statements</h5>
                  <p class="">Download your account statements for Bank Accounts/Credit Card/ Demat.</p>
                  <Link to="/user/account/e-statement" class="btn TaxCentre_buttonOverflow">
                  DOWNLOAD
                  </Link>
                  
                </div>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="card TaxCenter_Card_inform2">
                <div class="TaxCenter_Cardsetting">
                  <h5 class="">Interest & TDS Certificate</h5>
                  <p class="">Download your Interest & TDS Certificate</p>
                  <div class="TaxCentre_space_btnknow ">
                  <Link to="/user/fundtransfer/interest-certificate" class="btn  TaxCentre_buttonOverflow">
                    DOWNLOAD
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="TaxCentre_Cardgap">
      <h4 className="TaxCentre_PayTaxgap">Pay Tax</h4>
      <div class="row">
        <div class="col-sm-6">
          <div class="card TaxCenter_Card_inform">
            <div class="TaxCenter_Cardsetting">
              <h5 class="">Direct Tax</h5>
              <p class="">Tax deducted at source[TDS], Tax Collected at source[TDS], Income Tax etc.</p>
              <Link to="/user/fundtransfer/tax-payment" class="btn  TaxCentre_buttonOverflow">
              PAY NOW
              </Link>
              <Link to="/" className="TaxCentre_paynow_Links">Know More</Link>
            </div>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="card TaxCenter_Card_inform2">
            <div class="TaxCenter_Cardsetting">
              <h5 class="">Indirect Tax</h5>
              <p class="">Excise Duty, Service Tax</p>
              <div class="TaxCentre_space_btnknow">
              <Link to="/user/fundtransfer/disclaimer" class="btn  TaxCentre_buttonOverflow">
                PAY NOW
              </Link>
              <Link to="/" className="TaxCentre_paynow_Links">Know More</Link>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default CustomerserviceTaxCentre;








