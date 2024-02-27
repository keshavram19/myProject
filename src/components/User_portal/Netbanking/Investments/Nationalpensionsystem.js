import React, { useState } from "react";
import "./investments.css";

const NationalpensionServiceRequestsPage = () => {
  const [savingsAccountNumber, setSavingsAccountNumber] = useState("");
  const [subscriptionType, setSubscriptionType] = useState("");
  const [fathersName, setFathersName] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [cityOfBirth, setCityOfBirth] = useState("");
  const [countryOfBirth, setCountryOfBirth] = useState("");
  const [mothersName, setMothersName] = useState("");
  const [residentialStatus, setResidentialStatus] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [spousesFirstName, setSpousesFirstName] = useState("");
  const [occupationDetails, setOccupationDetails] = useState("");
  const [nomineeName, setNomineeName] = useState("");
  const [nomineeDateOfBirth, setNomineeDateOfBirth] = useState("");
  const [relationshipWithNominee, setRelationshipWithNominee] = useState("");
  const [investmentOption, setInvestmentOption] = useState("");
  const [assetAllocation, setAssetAllocation] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [photo, setPhoto] = React.useState(null);
  const [signature, setSignature] = React.useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [equityAllocation, setEquityAllocation] = useState(50);
  const [corporateBondsAllocation, setCorporateBondsAllocation] = useState(30);
  const [governmentBondsAllocation, setGovernmentBondsAllocation] =
    useState(20);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handlePhotoUpload = () => {
    console.log("Uploading photo:", photo);
  };

  const handleSignatureUpload = () => {
    console.log("Uploading signature:", signature);
  };
  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <div className="service-requests-page col-12" style={{ marginTop: "60px" }}>
      <div className="service-requests-page-header" style={{ marginTop: "20px" }}>
        <h3>Enrol for National Pension System Form</h3>
      </div>
      <form onSubmit={handleSubmit} className="row">
        <div className="col-sm-6">
          <div className="service-requests-form-group">
            <label htmlFor="savingsAccountNumber" className="m-3">Savings Account Number</label>
            <select
              id="savingsAccountNumber"
              className="form-control"
              value={savingsAccountNumber}
              onChange={(e) => setSavingsAccountNumber(e.target.value)}
            >
              <option value="">Please select</option>
            </select>
          </div>

          <div className="service-requests">
            <p className="m-3">Subscription type</p>
            <div>
              <input
                type="radio"
                id="option1"
                name="options"
                value="Option 1"
                checked={selectedOption === "Option 1"}
                onChange={() => handleOptionChange("Option 1")}
              />
              <label htmlFor="option1" className="m-3">
                Individual
              </label>
              <input
                type="radio"
                id="option2"
                name="options"
                value="Option 2"
                checked={selectedOption === "Option 2"}
                onChange={() => handleOptionChange("Option 2")}
              />
              <label htmlFor="option2" className="m-3">
                Corporate
              </label>
            </div>
          </div>

          <div className="service-requests-form-group">
            <label htmlFor="fathersName" className="m-3">Father’s Name</label>
            <input
              type="text"
              id="fathersName"
              className="form-control"
              value={fathersName}
              onChange={(e) => setFathersName(e.target.value)}
            />
          </div>

          <div className="service-requests-form-group">
            <label htmlFor="panNumber" className="m-3">PAN No</label>
            <input
              type="text"
              id="panNumber"
              className="form-control"
              value={panNumber}
              onChange={(e) => setPanNumber(e.target.value)}
            />
          </div>

          <div className="service-requests-form-group">
            <label htmlFor="cityOfBirth" className="m-3">City Of Birth</label>
            <input
              type="text"
              id="cityOfBirth"
              className="form-control"
              value={cityOfBirth}
              onChange={(e) => setCityOfBirth(e.target.value)}
            />
          </div>
          <div className="service-requests-form-group">
            <label htmlFor="countryOfBirth" className="m-3"> Country Of Birth</label>
            <select
              id="countryOfBirth"
              className="form-control"
              value={countryOfBirth}
              onChange={(e) => setCountryOfBirth(e.target.value)}
            >
              <option value="">Please select</option>
            </select>
          </div>

          <div className="service-requests-form-group">
            <label htmlFor="mothersName" className="m-3">Mother’s Name</label>
            <input
              type="text"
              id="mothersName"
              className="form-control"
              value={mothersName}
              onChange={(e) => setMothersName(e.target.value)}
            />
          </div>

          <div className="service-requests-form-group">
            <label htmlFor="residentialStatus" className="m-3">Residential Status</label>
            <select
              id="residentialStatus"
              className="form-control"
              value={residentialStatus}
              onChange={(e) => setResidentialStatus(e.target.value)}
            >
              <option value="">Please select</option>
            </select>
          </div>

          <div className="service-requests-form-group">
            <label htmlFor="maritalStatus" className="m-3">Marital Status</label>
            <select
              id="maritalStatus"
              className="form-control"
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
            >
              <option value="">Please select</option>
            </select>
          </div>

          <div className="service-requests-form-group">
            <label htmlFor="spousesFirstName" className="m-3">Spouse’s First Name</label>
            <input
              type="text"
              id="spousesFirstName"
              className="form-control"
              value={spousesFirstName}
              onChange={(e) => setSpousesFirstName(e.target.value)}
            />
          </div>

          <div className="service-requests-form-group">
            <label htmlFor="occupationDetails" className="m-3">Occupation Details</label>
            <select
              id="occupationDetails"
              className="form-control"
              value={occupationDetails}
              onChange={(e) => setOccupationDetails(e.target.value)}
            >
              <option value="">Please select</option>
            </select>
          </div>

          <div className="service-requests-form-group">
            <label htmlFor="nomineeName" className="m-3">Nominee Name</label>
            <input
              type="text"
              id="nomineeName"
              className="form-control"
              value={nomineeName}
              onChange={(e) => setNomineeName(e.target.value)}
            />
          </div>

          <div className="service-requests-form-group">
            <label htmlFor="nomineeDateOfBirth" className="m-3">Date Of Birth Of Nominee</label>
            <input
              type="date"
              id="nomineeDateOfBirth"
              className="form-control"
              value={nomineeDateOfBirth}
              onChange={(e) => setNomineeDateOfBirth(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="service-requests-form-group">
            <label htmlFor="relationshipWithNominee" className="m-3">
              Relationship With Nominee
            </label>
            <select
              id="relationshipWithNominee"
              className="form-control"
              value={relationshipWithNominee}
              onChange={(e) => setRelationshipWithNominee(e.target.value)}
            >
              <option value="">Please select</option>
            </select>
          </div>

          <div className="service-requests-form-group">
            <label htmlFor="pensionFundManager" className="m-3">
              Select Pension Fund Manager
            </label>
            <select id="pensionFundManager" className="form-control">
              <option>RIB Prudential Pension Fund</option>
            </select>
          </div>

          <div className="service-requests">
          
              <p className="m-3">Investment Option</p>
              <div><br/>
                <input
                  type="radio"
                  id="option1"
                  name="investmentOption"
                  value="active choice"
                  checked={investmentOption === "active choice"}
                  onChange={() => setInvestmentOption("active choice")}
                />
                <label htmlFor="option1">Active Choice</label>

                <input
                  type="radio"
                  id="option2"
                  name="investmentOption"
                  value="auto choice"
                  checked={investmentOption === "auto choice"}
                  onChange={() => setInvestmentOption("auto choice")}
                />
                <label htmlFor="option2">Auto Choice</label>

                <input
                  type="radio"
                  id="option3"
                  name="investmentOption"
                  value="aggressive"
                  checked={investmentOption === "aggressive"}
                  onChange={() => setInvestmentOption("aggressive")}
                />
                <label htmlFor="option3">Aggressive</label>

                <input
                  type="radio"
                  id="option4"
                  name="investmentOption"
                  value="moderate"
                  checked={investmentOption === "moderate"}
                  onChange={() => setInvestmentOption("moderate")}
                />
                <label htmlFor="option4">Moderate</label>

                <input
                  type="radio"
                  id="option5"
                  name="investmentOption"
                  value="conservative"
                  checked={investmentOption === "conservative"}
                  onChange={() => setInvestmentOption("conservative")}
                />
                <label htmlFor="option5">Conservative</label>
              </div>
           
          </div><br/>

          <div className="service-requests-form-asset">
            <label className="m-3">Asset Allocation (In %):</label>
            <div className="asset_allocation">

              <div className="service-requests-form-group">
              <label htmlFor="equityAllocation" className="m-3">Equity</label>
              <input
                type="number"
                id="equityAllocation"
                className="form-control"
                value={equityAllocation}
                onChange={(e) => setEquityAllocation(e.target.value)}
              />
              </div>
               <div className="service-requests-form-group">
              <label htmlFor="corporateBondsAllocation" className="m-3">Corporate Bonds</label>
              <input
                type="number"
                id="corporateBondsAllocation"
                className="form-control"
                value={corporateBondsAllocation}
                onChange={(e) => setCorporateBondsAllocation(e.target.value)}
              />
              </div>
               <div className="service-requests-form-group">

              <label htmlFor="governmentBondsAllocation" className="m-3">
                Government Bonds
              </label>
              <input
                type="number"
                id="governmentBondsAllocation"
                className="form-control"
                value={governmentBondsAllocation}
                onChange={(e) => setGovernmentBondsAllocation(e.target.value)}
              />
              </div>

            </div>
          </div>

          <div className="service-requests-form-group">
            <label htmlFor="mobileNumber" className="m-3">Mobile No</label>
            <input
              type="tel"
              id="mobileNumber"
              className="form-control"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>

          <div className="service-requests-form-group">
            <label htmlFor="email" className="m-3">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <div className="service-requests-form-group">
              <label htmlFor="photo" className="m-3">Upload Photo</label>
              <input
                type="file"
                id="photo"
                className="form-control"
                accept="image/*"
                onChange={handlePhotoUpload}
              />
              <button type="button" onClick={handlePhotoUpload}>
                Upload
              </button>
            </div>

            <div className="service-requests-form-group">
              <label htmlFor="signature" className="m-3">Upload Signature</label>
              <input
                type="file"
                id="signature"
                className="form-control"
                accept="image/*"
                onChange={handleSignatureUpload}
              />
              <button type="button" onClick={handleSignatureUpload}>
                Upload
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NationalpensionServiceRequestsPage;
