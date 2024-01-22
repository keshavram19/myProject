import React, { useState } from 'react';
import './FundTransfer.css';

const WireTransaction = () => {
  const [accountNumber, setAccountNumber] = useState('');

  const handleSubmit = () => {
    console.log('Account Number:', accountNumber);
  };

  return (
    <div className="wire-transaction-container col-12">
      <header>
        <h1>View Status/Submit One Time Declaration</h1>
      </header>

      <div className="transaction-form">
        <label htmlFor="accountNumber">Account Number:</label>
        <input
          type="options"
          id="accountNumber"
          name="accountNumber"
          placeholder="Enter account number"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          required
        />

        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};
export default WireTransaction;