import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import './Loans.css'
import { Link } from "react-router-dom";

function Loanservices() {
  return (
    <>
      <Container>
        <Row>
          <Col lg="12">
            <div className="renew_hero_container">
              <div className="loan_container_fluid">
                <h3>Service Request</h3>
             
              <div className="loan_service_container">
                <div className="row">
                  <div className="col-md-5">
                    <label htmlFor="loanAccount" className="form-inline pt-4">
                      <span className="col-md-5">Loan Account  :</span>
                      <select
                      
                        id="loanAccount"
                        name="cardNumber"
                        className="custom-select custom-select-sm col-md-5"
                      >
                        <option value="option1">select Loan account number</option>
                        <option value="option2">select phone number</option>
                        <option value="option3">selectAdher number</option>
                       
                      </select>
                    </label>
                  </div>
                  <div className="col-md-5">
                    <label
                      htmlFor="serviceRequest"
                      className="form-inline pt-4"
                    >
                      <span className="col-md-5">Service Request   :</span>
                      <select
                        id="serviceRequest"
                        name="cardNumber"
                        className="custom-select custom-select-sm col-md-5"
                      >
                        <option value="option1">How can we help you</option>
                        <option value="option2">Account Overdues</option>
                        <option value="option3">mobile number</option>
                        {/* Add other options as needed */}
                      </select>
                    </label>
                  </div>
                </div>
              </div>
            </div> </div>

            <div className="loan_submit_container">
                <Link to={"/user/loanservices1"}> <button type="submit">Submit</button></Link>
            
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Loanservices;
