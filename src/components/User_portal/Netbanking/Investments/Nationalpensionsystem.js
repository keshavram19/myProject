import React, { useState } from 'react';
import './investments.css'


const NationalpensionServiceRequestsPage = () => {
  const [savingsAccountNumber, setSavingsAccountNumber] = useState('');
  const [subscriptionType, setSubscriptionType] = useState('');
  const [fathersName, setFathersName] = useState('');
  const [panNumber, setPanNumber] = useState('');
  const [cityOfBirth, setCityOfBirth] = useState('');
  const [countryOfBirth, setCountryOfBirth] = useState('');
  const [mothersName, setMothersName] = useState('');
  const [residentialStatus, setResidentialStatus] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [spousesFirstName, setSpousesFirstName] = useState('');
  const [occupationDetails, setOccupationDetails] = useState('');
  const [nomineeName, setNomineeName] = useState('');
  const [nomineeDateOfBirth, setNomineeDateOfBirth] = useState('');
  const [relationshipWithNominee, setRelationshipWithNominee] = useState('');
  const [investmentOption, setInvestmentOption] = useState('');
  const [assetAllocation, setAssetAllocation] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [photo, setPhoto] = React.useState(null);
  const [signature, setSignature] = React.useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [equityAllocation, setEquityAllocation] = useState(50);
  const [corporateBondsAllocation, setCorporateBondsAllocation] = useState(30);
  const [governmentBondsAllocation, setGovernmentBondsAllocation] = useState(20);

  

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handlePhotoUpload = () => {
    console.log('Uploading photo:', photo);
  };

  const handleSignatureUpload = () => {
    console.log('Uploading signature:', signature);
  };
  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <div className="service-requests-page col-12">
      <div className='service-requests-page-header'>
      <h4>Enrol for National Pension System Form</h4>
      </div>
      <form onSubmit={handleSubmit}>
        {/* Savings Account Number */}
        <div className="service-requests-form-group">
          <label htmlFor="savingsAccountNumber">Savings Account Number</label>
          <select
            id="savingsAccountNumber"
            className="form-control"
            value={savingsAccountNumber}
            onChange={(e) => setSavingsAccountNumber(e.target.value)}
          >
            <option value="">Please select</option>
          </select>
        </div>

        {/* Subscription type */}
        <div className='service-requests'>
      <p>Subscription type</p>
      <div>
        <input
          type="radio"
          id="option1"
          name="options"
          value="Option 1"
          checked={selectedOption === 'Option 1'}
          onChange={() => handleOptionChange('Option 1')}
        />
        <label htmlFor="option1">Individual</label>

        <input
          type="radio"
          id="option2"
          name="options"
          value="Option 2"
          checked={selectedOption === 'Option 2'}
          onChange={() => handleOptionChange('Option 2')}
        />
        <label htmlFor="option2">Corporate</label>
      </div>
    </div>

        {/* ... (other form fields) */}
        {/* Father’s Name */}
        <div className="service-requests-form-group">
          <label htmlFor="fathersName">Father’s Name</label>
          <input
            type="text"
            id="fathersName"
            className="form-control"
            value={fathersName}
            onChange={(e) => setFathersName(e.target.value)}
          />
        </div>

        {/* PAN No */}
        <div className="service-requests-form-group">
          <label htmlFor="panNumber">PAN No</label>
          <input
            type="text"
            id="panNumber"
            className="form-control"
            value={panNumber}
            onChange={(e) => setPanNumber(e.target.value)}
          />
        </div>

        {/* City Of Birth */}
        <div className="service-requests-form-group">
          <label htmlFor="cityOfBirth">City Of Birth</label>
          <input
            type="text"
            id="cityOfBirth"
            className="form-control"
            value={cityOfBirth}
            onChange={(e) => setCityOfBirth(e.target.value)}
          />
        </div>

        {/* Country Of Birth (Dropdown button) */}
        <div className="service-requests-form-group">
          <label htmlFor="countryOfBirth">Country Of Birth</label>
          <select
            id="countryOfBirth"
            className="form-control"
            value={countryOfBirth}
            onChange={(e) => setCountryOfBirth(e.target.value)}
          >
            <option value="">Please select</option>
          </select>
        </div>

        {/* Mother’s Name */}
        <div className="service-requests-form-group">
          <label htmlFor="mothersName">Mother’s Name</label>
          <input
            type="text"
            id="mothersName"
            className="form-control"
            value={mothersName}
            onChange={(e) => setMothersName(e.target.value)}
          />
        </div>

        {/* Residential Status (Dropdown button) */}
        <div className="service-requests-form-group">
          <label htmlFor="residentialStatus">Residential Status</label>
          <select
            id="residentialStatus"
            className="form-control"
            value={residentialStatus}
            onChange={(e) => setResidentialStatus(e.target.value)}
          >
            <option value="">Please select</option>
          </select>
        </div>

        {/* Marital Status (Dropdown button) */}
        <div className="service-requests-form-group">
          <label htmlFor="maritalStatus">Marital Status</label>
          <select
            id="maritalStatus"
            className="form-control"
            value={maritalStatus}
            onChange={(e) => setMaritalStatus(e.target.value)}
          >
            <option value="">Please select</option>
          </select>
        </div>

        {/* Spouse’s First Name */}
        <div className="service-requests-form-group">
          <label htmlFor="spousesFirstName">Spouse’s First Name</label>
          <input
            type="text"
            id="spousesFirstName"
            className="form-control"
            value={spousesFirstName}
            onChange={(e) => setSpousesFirstName(e.target.value)}
          />
        </div>

        {/* Occupation Details (Dropdown button) */}
        <div className="service-requests-form-group">
          <label htmlFor="occupationDetails">Occupation Details</label>
          <select
            id="occupationDetails"
            className="form-control"
            value={occupationDetails}
            onChange={(e) => setOccupationDetails(e.target.value)}
          >
            <option value="">Please select</option>
          </select>
        </div>

        {/* Nominee Name */}
        <div className="service-requests-form-group">
          <label htmlFor="nomineeName">Nominee Name</label>
          <input
            type="text"
            id="nomineeName"
            className="form-control"
            value={nomineeName}
            onChange={(e) => setNomineeName(e.target.value)}
          />
        </div>

        {/* Date Of Birth Of Nominee */}
        <div className="service-requests-form-group">
          <label htmlFor="nomineeDateOfBirth">Date Of Birth Of Nominee</label>
          <input
            type="date"
            id="nomineeDateOfBirth"
            className="form-control"
            value={nomineeDateOfBirth}
            onChange={(e) => setNomineeDateOfBirth(e.target.value)}
          />
        </div>

        {/* Relationship With Nominee (Dropdown button) */}
        <div className="service-requests-form-group">
          <label htmlFor="relationshipWithNominee">Relationship With Nominee</label>
          <select
            id="relationshipWithNominee"
            className="form-control"
            value={relationshipWithNominee}
            onChange={(e) => setRelationshipWithNominee(e.target.value)}
          >
            <option value="">Please select</option>
            {/* Add options dynamically based on your data */}
          </select>
        </div>

        {/* Investment Option (Click buttons) */}
        <div className="service-requests-form-group"> 
            <label htmlFor="pensionFundManager">Select Pension Fund Manager</label> {/* Adjust the label and ID */}
            <select id="pensionFundManager" className="form-control"> {/* Adjust the ID */}
                <option>ICICI Prudential Pension Fund</option>
                {/* Add more options as needed */}
            </select>
        </div>

        {/* Asset Allocation (Checkbox buttons) */}

        
        <div className='service-requests'>
      <p>Investment Option</p>
      <div className='investment_option'>
        <input
          type="radio"
          id="option1"
          name="options"
          value="Option 1"
          checked={selectedOption === 'Option 1'}
          onChange={() => handleOptionChange('Option 1')}
        />
        <label htmlFor="option1">active choice</label>

        <input
          type="radio"
          id="option2"
          name="options"
          value="Option 2"
          checked={selectedOption === 'Option 2'}
          onChange={() => handleOptionChange('Option 2')}
        />
        <label htmlFor="option2">Auto choice</label>

        <input
          type="radio"
          id="option3"
          name="options"
          value="Option 3"
          checked={selectedOption === 'Option 3'}
          onChange={() => handleOptionChange('Option 3')}
        />
        <label htmlFor="option3">Aggressive</label>

        <input
          type="radio"
          id="option4"
          name="options"
          value="Option 4"
          checked={selectedOption === 'Option 4'}
          onChange={() => handleOptionChange('Option 4')}
        />
        <label htmlFor="option4">Modarate</label>
        <input
          type="radio"
          id="option4"
          name="options"
          value="Option 4"
          checked={selectedOption === 'Option 4'}
          onChange={() => handleOptionChange('Option 4')}
        />
        <label htmlFor="option4">Conservative</label>
        

      </div>
    </div>

      {/* Asset Allocation */}
      <div className="service-requests-form-asset">
        <label>Asset Allocation (In %)</label>
        <div className='asset_allocation'>
        <label htmlFor="equityAllocation">Equity</label>

          <input
            type="number"
            id="equityAllocation"
            className="form-control"
            value={equityAllocation}
            onChange={(e) => setEquityAllocation(e.target.value)}
          />
     <label htmlFor="corporateBondsAllocation">Corporate Bonds</label>        
          <input
            type="number"
            id="corporateBondsAllocation"
            className="form-control"
            value={corporateBondsAllocation}
            onChange={(e) => setCorporateBondsAllocation(e.target.value)}
          />
       <label htmlFor="governmentBondsAllocation">Government Bonds</label>
          <input
            type="number"
            id="governmentBondsAllocation"
            className="form-control"
            value={governmentBondsAllocation}
            onChange={(e) => setGovernmentBondsAllocation(e.target.value)}
          />
        </div>
      </div>
        
        {/* Mobile No */}
        <div className="service-requests-form-group">
          <label htmlFor="mobileNumber">Mobile No</label>
          <input
            type="tel"
            id="mobileNumber"
            className="form-control"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="service-requests-form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Upload Photo */}
        <div>
      <div className="service-requests-form-group">
        <label htmlFor="photo">Upload Photo</label>
        <input
          type="file"
          id="photo"
          className="form-control"
          accept="image/*"
          onChange={handlePhotoUpload}
        />
        
        <button type="button" onClick={handlePhotoUpload}>Upload</button>
        
      </div>

      {/* Upload Signature */}
      <div className="service-requests-form-group">
        <label htmlFor="signature">Upload Signature</label>
        <input
          type="file"
          id="signature"
          className="form-control"
          accept="image/*"
          onChange={handleSignatureUpload}
        />
        <button type="button" onClick={handleSignatureUpload}>Upload</button>
      </div>
    </div>

      </form>
    </div>
  );
};

export default NationalpensionServiceRequestsPage;