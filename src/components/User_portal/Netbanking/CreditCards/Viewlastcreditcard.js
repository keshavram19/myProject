import React, { useState } from "react";
import './Creditcard.css'

const Viewlastcredit = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const options = ["Option 1", "Option 2", "Option 3"];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  const [isOpen1, setIsOpen1] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState("");
  const options1 = ["Option 4", "Option 5", "Option 6"];

  const handleOptionClick1 = (option) => {
    setSelectedOption1(option);
    setIsOpen1(false);
  };
  return (
    <div>
      <div className="container-fluid pt-5" style={{marginTop:'60px' , backgroundColor:'#f8f9fa'}}>
        <div className="row">
          <h3 className="viewcredit_heading p-3">
            Last Credit Received
          </h3>
        </div>
        <div className="row mt-5" style={{ marginLeft: "7px" }}>
          <p className="viewcredit_para col-xl-2 col-3 mt-2">I want to see my</p>
          <div className="viewcredit_dropdown col-xl-6 col-9">
            <input
              placeholder="Bank Account"
              className="mx-5 w-75 p-2 viewcredit_input"
              onClick={() => setIsOpen(!isOpen)}
              value={selectedOption}
              readOnly
            />
            <span
              className="ciewcredit-icondropdown"
              onClick={() => setIsOpen(!isOpen)}
            >
              &#9660;
            </span>
            {isOpen && (
              <div className="viewcredit_dropdown_content">
                {options.map((option) => (
                  <div key={option} onClick={() => handleOptionClick(option)}>
                    {option}
                  </div>
                ))}
              </div>
            )}
            <button className="viewcredit_btn">Go</button>
          </div>
          
        </div>
        <hr style={{ borderBottom: "1px solid black" }}></hr>
        <div className="row mt-3" style={{ marginLeft: "7px" }}>
          <p className="viewcredit_para col-xl-3 col-3 mt-2">
            My Credit Card Details for
          </p>
          <div className="viewcredit_dropdown col-xl-6 col-9">
            <input
              placeholder=""
              className="mx-5 w-75 p-2 viewcredit_input"
              onClick={() => setIsOpen1(!isOpen1)}
              value={selectedOption1}
              readOnly
            />
            <span
              className="ciewcredit-icondropdown"
              onClick={() => setIsOpen1(!isOpen1)}
            >
              &#9660;
            </span>
            {isOpen1 && (
              <div className="viewcredit_dropdown_content">
                {options1.map((option) => (
                  <div key={option} onClick={() => handleOptionClick1(option)}>
                    {option}
                  </div>
                ))}
              </div>
            )}
            <button className="viewcredit_btn">Go</button>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-xl-12">
            <div className="card viewcredit_card2">
              <h3 className="card viewcredit_card1">
                Last credit Received Details
              </h3>
              <div className="row">
                <div className="col-xl-2 col-2 mx-3">
                  <p>Last Credit Received on</p>
                  <p>Last Credit Amount(INR)</p>
                  <p>Payment Due Date</p>
                  <p>Next Statement Date</p>
                </div>

                <div className="card viewcredit_card3 col-xl-2 col-2"></div>
              </div>
              <hr></hr>
              <button className="col-xl-1 col-md-1 mx-3 mb-4 viewcredit_btn1">
                Back
              </button>
            </div>
          </div>
        </div>
        <div className="col-xl-12 viewcredit_pdf mt-3 mb-5">
          <div className="row justify-content-end">
          <div className="col-xl-12 d-flex flex-row justify-content-end">
            <p className="viewcredit_para mt-2">Download Details As:</p>
            <input
              placeholder="pdf file"
              className="mx-2 w-25 viewcredit_input"
              type="text"
            />
            <div class="viewcredit_dropdown-symbol">&#9660;</div>
            <button className="viewcredit_btn">Go</button>
          </div>
          </div>
        </div>
        


      </div>
    </div>
  );
};

export default Viewlastcredit;
