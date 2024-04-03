import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FundTransfer.css";
import PaymentSidebar from "../Sidebar/PaymentsAndTransferSidebar";
import apiList from "../../../../lib/apiList";

const IncomeTaxEfill = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [LastVisited, setLastVisited] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState("");
  const [accountHolderPAN, setAccountHolderPAN] = useState("");
  const [panInput, setPanInput] = useState("");
  const [formError, setFormError] = useState("");
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const fetchUserDetails = async () => {
    try {
      const token = sessionStorage.getItem("loginToken");
      const requestOptions = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(
        apiList.requestedUserDetailsByEmail,
        requestOptions
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Fetched user details:", data);
        setUserDetails([data.user]);
        setLastVisited(new Date());
      } else {
        console.error("Error fetching user details:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const handleAccountChange = (event) => {
    const selectedAccountValue = event.target.value;
    setSelectedAccount(selectedAccountValue);
  };

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  const handleSubmit = async () => {
    try {
      await fetchUserDetails();

      if (!userDetails || userDetails.length === 0) {
        console.error("User details not available yet");
        return;
      }

      if (!selectedAccount) {
        setFormError("Please select an account number.");
        return;
      }

      const selectedUser = userDetails.find(
        (user) => user.accountNumber === selectedAccount
      );
      console.log("Selected user:", selectedUser);

      if (!selectedUser) {
        setFormError("User details not found for the selected account.");
        return;
      }

      console.log("Entered PAN:", panInput);
      console.log("User PAN:", selectedUser.accountHolderPAN);
      console.log("Selected user:", selectedUser);
      if (
        selectedUser &&
        selectedUser.pannumber &&
        selectedUser.pannumber.toUpperCase() === panInput.toUpperCase()
      ) {
        window.open(
          "https://incometaxindia.gov.in/Pages/tax-services/file-income-tax-return.aspx",
          "_blank"
        );
        window.location.reload();
      } else {
        setFormError("Invalid PAN number. Please check and try again.");
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
            <h3 style={{ color: "#2fb68e" }}>Income Tax e-Filling</h3>
            <div className="incometax_filling card">
              <h5 className="incometax_filling_heading4">
                e-Fill your Income Tax Return
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
                      {userDetails &&
                        userDetails.map((account, index) => (
                          <option key={index} value={account.accountNumber}>
                            {account.accountNumber}
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
                By clicking the Submit button, you agree to the{" "}
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
              should take along the original PAN card for verification.
            </p>
            <p>
              2. As per new section 206AA of the Income Tax Act, 1956 effective
              from April 1, 2010, resident, whose tax is required to be
              deducted, need to submit their valid PAN else tax will be deducted
              at the prevailing rate or 20%, whichever is higher.
            </p>
            <p>
              3. In the absence of a valid PAN of a non-resident customer,
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
              mentioned and the benefit of exemption from TDS will be granted in
              the absence of a valid PAN.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeTaxEfill;

