import React from "react";
import "./GeneratePin.css";
import OverviewSidebar from "../../Sidebar/OverViewSidebar";
import { Link } from "react-router-dom";

const GenerateDebitOrCreditPin = () => {
  return (
    <div>
      <section className="container-fluid" style={{marginTop:"90px"}}>
        <div className="row">
        <div className="col-3">
            <div className="">
             <OverviewSidebar />
            </div>
          </div>
          <div className="col-9 generate-pin">
            <div className="generate-pin-heading">
              <p>Generate Debit/Credit Card PIN </p>
            </div>
            <div className="generate-pin-text">
              <span>
                Now you can instantly generate your Debit / Credit Card PIN
                online. Please choose from the card options given below to
                generate your PIN now.
              </span>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="debit-card-content">
                  <h6>Debit Card PIN</h6>
                  <div className="debit-card-inner-content m-0 p-0">
                  <p style={{fontSize:"13px",color:"#9e9a93"}}>
                      Generate your ATM / Debit Card PIN online.
                    </p>
                    
                  <Link to='/user/account/generate-debitcard-pin'style={{textDecoration:"none"}} > <button>GENERATE</button></Link>
                    {/* <p className="ml-5">
                      Generate your ATM / Debit Card PIN online.
                    </p> */}
                    
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="debit-card-content">
                  <h6>Credit Card PIN</h6>
                  <div className=" debit-card-inner-content m-0 p-0">
                      <p style={{fontSize:"13px",color:"#9e9a93"}}>
                      Generate your ATM / Debit Card PIN online.
                    </p>
                   
                  <Link to='/user/generate-credit-card-pin' style={{textDecoration:"none"}} > <button>GENERATE</button></Link>
                    {/* <p className="ml-5">
                      Generate your ATM / Debit Card PIN online.
                    </p> */}
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
    </div>
  );
};

export default GenerateDebitOrCreditPin;
