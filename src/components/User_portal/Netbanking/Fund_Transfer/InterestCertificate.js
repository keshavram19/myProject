import React, {useState} from "react";
import './FundTransfer.css'
import PaymentSidebar from "../Sidebar/PaymentsAndTransferSidebar";



const InterestCertificate = () => {
  const [accountNumber, setAccountNumber] = useState("Select account Number");
  const [interestPeriod, setInterestPeriod] = useState("Select FY");
  const [startDate, setStartDate] = useState(" ");
  const [endDate, setEndDate] = useState(" ");


  const handleAccountNumber = (event) => {
    setAccountNumber(event.target.value);
  };
  
  const handleInterstPeriod = (event) => {
    setInterestPeriod(event.target.value);
  };

  const handleStartDate = (event) => {
    setStartDate(event.target.value);
  };
  
  const handleEndDate = (event) => {
    setEndDate(event.target.value);
  };

  return (
    <div className="interest_container_fluid container-fluid" style={{marginTop:"90px"}}>
      <div class="row">
        <div className="col-3">
          <PaymentSidebar/>
          </div>
        <div class=" col-9">
          <div className="interest_head">
            <h1>Download Interest & TDS Certificate</h1>
          </div>
          <div className="interest_certificate_baground card">
            <div className="interest_certificate_heading5">
              <h4>Interest & TDS Certificate</h4>
            </div>
            <div className="interest_all_forms">
            <div className="interest_from_account  row">
              <label className="col-sm-3 interest_form_label">
                Account Number:
              </label>
              <div className="col-sm-6">
                <div className="interest_account_select">
                  <select
                    typeof="number"
                    id="number"
                    className="inerest_selection_form form-control"
                    value={accountNumber}
                    onChange={handleAccountNumber}
                     
                  >
                    <option value="Select account Number" disabled>
                      Select account Number
                    </option>
                    <option value="RIB">RIB-21465792</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="interest_form_label_radio row">
              <label class="interest_form_radio_label col-sm-3"> 
              <input  
                type="radio"
                  id="interestPeriod"
                  name="interestOption"
                  checked={interestPeriod === "InterestPeriod"}
              onChange={() => setInterestPeriod("InterestPeriod")}
                 /> 
                 {" "}Interest Period
                </label>
              <div className=" col-sm-6">
                <select
                  typeof="number"
                  id="number"
                  className="inerest_selection_form form-control"
                  value={interestPeriod}
                  onChange={handleInterstPeriod}
                 
                >
                  <option value="Select FY" disabled>
                    Select FY
                  </option>
                  <option value="FY">FY 2015-2016</option>
                </select>
              </div>
            </div>
            <div className="interest_form_label_radio_period row">
              <label class="interest_form_radio_label col-sm-3">
               <input  type="radio"
                id="interestPeriodDate"
                name="interestOption"
                value="interestPeriodDate"
                /> Interest Period Date
              </label>
              <div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ marginRight: "10px" }}>
                    <label  className="m-2">from</label>
                    <input
                      type="date"
                      className="interest_period"
                      id="date"
                      placeholder="dd-mm-yyyy"
                      value={startDate}
                      onChange={handleStartDate}
                    />
                  </div>
                  <div>
                    <label className="m-2">to</label>
                    <input
                      type="date"
                      className="interest_period"
                      id="id"
                      placeholder="dd-mm-yyyy"
                      value={endDate}
                      onChange={handleEndDate}
                    />
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="interet_buuton">
              <button type="button" class="btn btn_interest_button">
                Download OAD PDF
              </button>
            </div>
          </div>

          <div className="inerest_heading6">
            <h6>Notes:</h6>
          </div>
          <p>
            1. Interest Certificates are available online from April 2015
            onwards.
          </p>
          <p>
            2. The information displayed in the Interest Statement is for all
            accounts linked under the selected Customer ID.
          </p>
          <p>
            3. The TDS amount is displayed only for NRO Accounts. For details on
            tax deducted, please visit Payments & Transfer - Tax Centre - TDS
            Certificate.
          </p>
          <p>
            4. In case you wish to generate an interest certificate for a
            Financial year e. April 1 to March 31, please use the 'Interest
            Period" option.
          </p>
          <p>
            5. In case you wish to generate an interest certificate for a
            Calendar year i e, from January 1 to December 31, please use the
            'Interest Period Date' option.
          </p>
          <p>6. All details are available as on previous business day only.</p>
          <p>
            7. To access your Interest Certificate in PDF your computer must
            have Adobe Reader. If you do not have Adode Reader on your computer
            please <a href="#">Click here</a>
          </p>
          <p>8. For any clarification, please visit the nearest branch.</p>
        </div>
      </div>
    </div>
  );
};

export default InterestCertificate;