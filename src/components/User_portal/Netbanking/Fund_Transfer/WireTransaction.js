import React, { useState } from 'react';
import './FundTransfer.css';
import PaymentSidebar from '../Sidebar/PaymentsAndTransferSidebar';

const WireTransaction = () => {
  const [accountNumber, setAccountNumber] = useState('');

  const handleSubmit = () => {
    console.log('Account Number:', accountNumber);
  };

  return (
    <>
      <div className='container-fluid' style={{marginTop:"90px"}}>
        <div className='row'>
          <div className='col-3'>
            <PaymentSidebar/>
          </div>
          <div className='col-9'>
          <div className="wire-transaction-container card">
   
        <h1 className='wire-transaction-caontainer-heading'>View Status/Submit One Time Declaration</h1>
      

      <div className="transaction-form mt-3">
        <div className='row'>


        <label className="col-sm-3" htmlFor="accountNumber">Account Number:</label>
        <input
        className='col-sm-4 transaction-form-input'
          type="options"
          id="accountNumber"
          name="accountNumber"
          placeholder="Enter account number"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          required
        />
        </div>
        <button className='transaction-form-button mt-3' type="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      </div>
          </div>
        </div>
      </div>
    
      </>
  );
};
export default WireTransaction;