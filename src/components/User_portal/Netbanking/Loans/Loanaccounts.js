
import React from "react";
import "./Loans.css";

const LoanAccounts = () => {
  return (
    <div className="container" style={{marginTop:"90px"}}>
      <h3 className="text-center mb-5 loans-main-heading">Overview of Your Loan Accounts</h3>
      <div className="row justify-content-center">
        <div className="col-md-3 mb-4">
          <div className="card loans_card1 text-center">
            <i className="fas fa-hand-holding-dollar loan-icon"></i>
            <p className="loan-card-para">Total Sanctioned Amount<br /><span className="amount">&#8377; 3,00,000</span></p>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card  loans_card2 text-center">
            <i className="fas fa-circle loan-icon"></i>
            <p className="loan-card-para">Total Principal Outstanding<br /><span className="amount">&#8377; 2,83,000</span></p>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card loans_card3 text-center">
            <i className="fas fa-wallet loan-icon"></i>
            <p className="loan-card-para">Total Current Overdues<br /><span className="amount">&#8377; 9,451</span></p>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card  loans_card4 text-center">
            <i className="fas fa-bell loan-icon"></i>
            <p className="loan-card-para">Amount Available for Disbursement<br /><span className="amount">&#8377; 0</span></p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-2 text-center mb-3">
          <div className="card loan-card action-card">
            <i className="fas fa-magnifying-glass action-icon"></i>
          </div>
          <p className="action-label">View Account Summary</p>
        </div>
        <div className="col-md-2 text-center mb-3">
          <div className="card loan-card action-card">
            <i className="fas fa-pencil action-icon"></i>
          </div>
          <p className="action-label">Request a Service</p>
        </div>
        <div className="col-md-2 text-center mb-3">
          <div className="card loan-card action-card">
            <i className="fas fa-download action-icon"></i>
          </div>
          <p className="action-label">View Report</p>
        </div>
      </div>
      <div className="text-center">
        <p className="help-text">How can we help you? <i className="fas fa-user"></i></p>
      </div>
    </div>
  );
};

export default LoanAccounts;
