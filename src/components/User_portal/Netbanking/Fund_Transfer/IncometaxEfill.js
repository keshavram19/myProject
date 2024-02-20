import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FundTransfer.css";
import PaymentSidebar from "../Sidebar/PaymentsAndTransferSidebar";
import apiList from "../../../../lib/apiList";

const IncomeTaxEfill = () => {
  const accountNumber = 1124563456;
  const [userDetails, setUserDetails] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState("");
  const [accountHolderPAN, setAccountHolderPAN] = useState("");
  const [panInput, setPanInput] = useState("");
  const [formError, setFormError] = useState("");

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${apiList.customerAccountDetails}${accountNumber}`
      );
      const userDetailsData = response.data.details;

      if (Array.isArray(userDetailsData)) {
        setUserDetails(userDetailsData);
      } else if (typeof userDetailsData === "object") {
        setUserDetails([userDetailsData]);
      } else {
        console.error("Invalid user details format:", userDetailsData);
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    if (selectedAccount === "") {
      fetchData();
    }
  }, [selectedAccount]);

  const handleAccountChange = (event) => {
    const selectedAccountValue = event.target.value;
    setSelectedAccount(selectedAccountValue);
  };



  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  const handleSubmit = async () => {
    try {
      await fetchData();
  
      if (userDetails.length === 0) {
        console.error("User details not available yet");
        return;
      }
  
      if (!isCheckboxChecked) {
        setFormError("Please agree to the Terms and Conditions.");
        alert("Please agree to the Terms and Conditions.");
        return;
      }
  
      const selectedUser = userDetails.find((user) => {
        return user.userAccountNumber == selectedAccount;
      });
  
      if (
        selectedUser &&
        selectedUser.accountHolderPAN.toUpperCase() === panInput.toUpperCase()
      ) {
        window.open(
          "https://incometaxindia.gov.in/Pages/tax-services/file-income-tax-return.aspx",
          "_blank" 
        );
        window.location.reload(); 
      } else {
        setFormError("Invalid PAN number. Please check box  and try again.");
      }
    } catch (error) {
      console.error("Error in handleSubmit:", error);
    }
  };
  
  

  return (
    <div
      className="incometax_container_fluid container-fluid"
      style={{ marginTop: "90px" }}
    >
      <div className="row">
        <div className="col-3">
          <PaymentSidebar />
        </div>
        <div className="col-9">
          <div className="">
            <h3 style={{ color: "#ebca28" }}>Income Tax e-Filling</h3>
            <div className="incometax_filling card">
              <h5 className="incometax_filling_heading4">
                e-Fille your Income Tax Return
              </h5>
              <div className="incometax_form_information">
                <div className="incometax_from_account  row">
                  <label className="col-sm-4 incometax_form_label">
                    Account Number:
                  </label>
                  <div className="incometax_information col-sm-6">
                    <select
                      className="incometax_information form-control"
                      value={selectedAccount}
                      onChange={handleAccountChange}
                    >
                      <option value="">Select Account Number</option>
                      {userDetails.map((account, index) => (
                        <option
                          key={index}
                          value={account.userAccountNumber}
                          defaultChecked
                        >
                          {account.userAccountNumber}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="incometax_panNumber row">
                  <label className="col-sm-4 incometax_form_label">
                    PAN Number
                  </label>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className="incometax_information form-control"
                      placeholder="Enter Pan Number"
                      value={panInput}
                      onChange={(e) => setPanInput(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div>
                <input
                  type="checkbox"
                  className="incometax_check_box m-2"
                  value="byclick"
                  checked={isCheckboxChecked}
                  onChange={handleCheckboxChange}
                />
                By clicking Submit button, you agree to the{" "}
                <a href="#">Terms and Conditions.</a>
              </div>
            </div>
            
              <button
                type="button"
                className="Incometax_submits" 
                onClick={handleSubmit}
              >
                SUBMIT
              </button>
            
            {formError && <p style={{ color: "red" }}>{formError}</p>}

            <p>
              <strong>Notes:</strong>
            </p>
            <p>
              1. Customers who have not submitted their PAN need to contact
              their nearest branch and provide a copy of the PAN card. They
              should take along the original PAN card for venification.
            </p>
            <p>
              2. As per new section 206AA of the Income Tax Act, 1956 effective
              from April 1, 2010 resident, whose tax is required to be deducted,
              need to submit their valid PAN else tax will be deducted at the
              prevailing rate or 20%, whichever is higher.
            </p>
            <p>
              3. in the absence of a valid PAN of a non-resident customer,
              benefits of DTAA for lower deduction of tax will not be granted
              and tax would be deducted under section 195 at higher of a) the
              rate specified in the relevant provisions of this Act or b) rate
              in force or c) the rate of 20%.
            </p>
            <p>
              4. When the PAN given is invalid, it shall be deemed that the PAN
              has not been given and tax shall be deducted at the prevailing
              rate or 20% whichever is higher.
            </p>
            <p>
              5. Form 15G/H shall not be treated as valid unless a valid PAN is
              mentioned and the benefit of exemption from TOS will be granted in
              the absence of a valid PAN.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeTaxEfill;
