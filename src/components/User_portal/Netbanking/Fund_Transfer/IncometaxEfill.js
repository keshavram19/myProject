import React, {useState} from "react";
import './FundTransfer.css'

const IncomeTaxEfill = () => {
  const [accountNumber, setAccountNumber] = useState("Select account Number");

  const handleAccountNumber = (event) => {
    setAccountNumber(event.target.value);
  };

  return (
    <div className="incometax_container_fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="incometax_account">
            <h1>Income Tax e-Filling</h1>
            <div className="incometax_filling card">
              <h4 className="incometax_filling_heading4">e-Fille your Income Tax Return</h4>
              <div className="incometax_form_information">
                <div className="incometax_from_account  row">
                  <label className="col-sm-4 incometax_form_label">
                    Account Number:
                  </label>
                  <div className="incometax_information col-sm-6">
                    <select
                      className="incometax_information form-control"
                      value={accountNumber}
                      onChange={handleAccountNumber}
                    >
                      <option value="Select account Number" disabled="accountnumber">
                        Select account Number
                      </option>
                      <option value="RIB">RIB-21465792</option>
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
                      className="incometax_information form-control "
                      placeholder="Enter Pan Number"
                      value=""
                    />
                  </div>
                </div>
              </div>
              <div>
                <input
                  type="checkbox"
                  className="incometax_check_box m-2"
                  value="byclick"
                />
                By clicking Submit button, you agree to the{" "}
                <a href="#">Terms and Conditions.</a>
              </div>
            </div>
            <div className="incometax_button">
              <button type="button" class="btn btn_incometax_button">
                SUBMIT
              </button>
            </div>

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