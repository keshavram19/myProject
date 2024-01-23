import React, { useState } from 'react';
import './FundTransfer.css';
import PaymentSidebar from '../Sidebar/PaymentsAndTransferSidebar';

const CompletedTransaction = () => {
  const [payeeName, setPayeeName] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [debitAccountNumber, setDebitAccountNumber] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [transactions, setTransactions] = useState([]);

  return (
    <>
      <div className='container-fluid' style={{marginTop:"90px"}}>
      <div className='row'>
        <div className='col-3'>
        <PaymentSidebar />
        </div>
        <div className='col-9'>
        <div className="completed-transactions-page col-12">
      <div className="transaction-container" >
        <div className='transaction-heading'><h1>Type Of Transactions</h1></div>
        
        <div className="search-section">
          <label>Search Transactions:</label>
          <select>
            <option value="all">select</option>
            <option value="icici">ICICI</option>
            <option value="kotak">KOTAK</option>
            <option value="union">HDFC</option>
          </select>
          <label>Payee Name*:</label>
          <input type="text" value={payeeName} onChange={(e) => setPayeeName(e.target.value)} />
          <div className="row">
            <div className="col">
              <label>From Date*:</label>
              <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
            </div>
            <div className="col">
              <label>To Date:</label>
              <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
            </div>
          </div>
          <label>Debit Account Number:</label>
          <input
            type="text"
            value={debitAccountNumber}
            onChange={(e) => setDebitAccountNumber(e.target.value)}
          />
          <button type="button" className="btn btn-primary">Submit</button>
          <div className='dwn-file'>
            <label>Download:</label>
            <select>
              <option value="csv">PDF file</option>
              <option value="csv">CSV</option>
              <option value="excel">Excel</option>
            </select>
            <button className="btn btn-primary btn-sm">OK</button>
          </div>
        </div>   
        {transactions.length === 0 ? (
          <p className='text'>*Mandatory</p>
        ) : (
          <ul>
            {transactions.map((transaction) => (
              <li key={transaction.id}>
                {`Payee: ${transaction.payee}, Date: ${transaction.date}, Debit Account: ${transaction.debitAccount}, Type: ${transaction.type}`}
              </li>
            ))}
          </ul>
        )}

        {alertMessage && <div className="alert">{alertMessage}</div>}
        <div className="trs-note">
          <p>Note: 1.All transactions through different channels such as internet Banking Payment Gateway channels (payment made at merchant site via net banking) Will be displayed on the page.
                2.Transaction details available online for last one year.
          </p>
        </div>
      </div>
    </div>
        </div>
      </div>
      </div>
    </>
    
  );
};

export default CompletedTransaction;