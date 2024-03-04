import React, { useState,useRef } from 'react';
import './FundTransfer.css';
import PaymentSidebar from '../Sidebar/PaymentsAndTransferSidebar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarWeek } from "react-icons/fa";
import html2pdf from 'html2pdf.js';
const allTransactionsList = [
  {
    type: 'ICICI',
    Debitaccountnumber: '123456789',
    date: '01 Feb 2024',
    Totalamount: '15000.00',
    id: '990878',
    Status: 'Success',
  },
  {
    type: 'ICICI',
    Debitaccountnumber: '123456789',
    date: '02 Feb 2024',
    Totalamount: '12000.00',
    id: '990879',
    Status: 'Success',
  },
  {
    type: 'ICICI',
    Debitaccountnumber: '123456789',
    date: '03 Feb 2024',
    Totalamount: '18000.00',
    id: '990880',
    Status: 'Success',
  },
  {
    type: 'ICICI',
    Debitaccountnumber: '123456789',
    date: '04 Feb 2024',
    Totalamount: '20000.00',
    id: '990881',
    Status: 'Success',
  },
  {
    type: 'ICICI',
    Debitaccountnumber: '123456789',
    date: '05 Feb 2024',
    Totalamount: '25000.00',
    id: '990882',
    Status: 'Success',
  },
  {
    type: 'KOTAK',
    Debitaccountnumber: '123456789',
    date: '06 Feb 2024',
    Totalamount: '6775.89',
    id: '789878',
    Status: 'Success',
  },
  {
    type: 'KOTAK',
    Debitaccountnumber: '123456789',
    date: '07 Feb 2024',
    Totalamount: '5000.00',
    id: '789879',
    Status: 'Success',
  },
  {
    type: 'KOTAK',
    Debitaccountnumber: '123456789',
    date: '08 Feb 2024',
    Totalamount: '8000.00',
    id: '789880',
    Status: 'Success',
  },
  {
    type: 'KOTAK',
    Debitaccountnumber: '123456789',
    date: '09 Feb 2024',
    Totalamount: '6000.00',
    id: '789881',
    Status: 'Success',
  },
  {
    type: 'KOTAK',
    Debitaccountnumber: '123456789',
    date: '10 Feb 2024',
    Totalamount: '10000.00',
    id: '789882',
    Status: 'Success',
  },
  {
    type: 'HDFC',
    Debitaccountnumber: '123456789',
    date: '11 Feb 2024',
    Totalamount: '569.90',
    id: '567645',
    Status: 'Success',
  },
  {
    type: 'HDFC',
    Debitaccountnumber: '123456789',
    date: '12 Feb 2024',
    Totalamount: '700.00',
    id: '567646',
    Status: 'Success',
  },
  {
    type: 'HDFC',
    Debitaccountnumber: '123456789',
    date: '13 Feb 2024',
    Totalamount: '1000.00',
    id: '567647',
    Status: 'Success',
  },
  {
    type: 'HDFC',
    Debitaccountnumber: '123456789',
    date: '14 Feb 2024',
    Totalamount: '1200.00',
    id: '567648',
    Status: 'Success',
  },
  {
    type: 'HDFC',
    Debitaccountnumber: '123456789',
    date: '15 Feb 2024',
    Totalamount: '1500.00',
    id: '567649',
    Status: 'Success',
  },
];





const CompletedTransaction = () => {
  const [selectedType, setSelectedType] = useState('');
    const [debitAccountNumber, setDebitAccountNumber] = useState('123456789');
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const [view,setView] = useState('')

    const filterTransactions = () => {
      if (selectedType === '' || fromDate === null || toDate === null || debitAccountNumber === '') {
          return [];
      }

      let filteredTransactions = allTransactionsList.filter(transaction => {
          const transactionDate = new Date(transaction.date);
          const isCorrectType = transaction.type === selectedType;
          const isCorrectDebitAccountNumber = transaction.Debitaccountnumber === debitAccountNumber;
          return transactionDate >= fromDate && transactionDate <= toDate && isCorrectType && isCorrectDebitAccountNumber;
      });

      return filteredTransactions;
  };
  
  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
};


const handleFromDateChange = (date) => {
    setFromDate(date);
};

const handleToDateChange = (date) => {
    setToDate(date);
};

const transactions = filterTransactions();

let transactionRef = useRef()
const handleDownload = () => {
  const pdfOptions = { margin: 10, filename: 'transactions.pdf', image: { type: 'jpeg', quality: 0.98 } };

  html2pdf(transactionRef.current, pdfOptions).save();
  
};


  return (
    <>
      <div className='container-fluid' style={{marginTop:"90px"}}>
      <div className='row'>
        <div className='col-3'>
        <PaymentSidebar />
        </div>
        <div className='col-9'>
          <h4 className='completed_transactions_head'>Completed Transactions</h4>
          <hr/>
          <div className='container-fluid completed_transactions_type '>
            <h6>Type Of Transaction</h6>

          </div>
          <div className='container-fluid mt-3'>
              <div className='completed_transaction_search'>
                <div>Search Transaction*</div>
                <div>
                <select onChange={handleTypeChange} value={selectedType}  className='completed_transaction_select1'>
            <option hidden>select</option>
            <option value="ICICI">ICICI</option>
            <option value="KOTAK">KOTAK</option>
            <option value="HDFC">HDFC</option>
          </select>
                </div>
              </div>
              <div className='completed_transaction_cont1 mt-4'>
              <div className='completed_transaction_search'>
                <div>Date From*</div>
                <div className='completed_transaction_date1'>
                <DatePicker
     selected={fromDate} onChange={handleFromDateChange}
      onFocus={(e) => e.target.readOnly = true}
      placeholderText="From"
      className="completed_transaction_inputdate"
    />
              <div>
                <FaCalendarWeek className='completed_transaction_date2'/>
              </div>
                </div>
              </div>
              <div className='completed_transaction_search1'>
                <div>To*</div>
                <div className='completed_transaction_date1'>
                <DatePicker
      selected={toDate} onChange={handleToDateChange}
      onFocus={(e) => e.target.readOnly = true}
      placeholderText="To"
      className="completed_transaction_inputdate"
    />
              <div>
                <FaCalendarWeek className='completed_transaction_date2'/>
              </div>
                </div>
              </div>
              </div>
              <div className='completed_transaction_search mt-4'>
                <div>Debit Account Number</div>
                <div>
                <input type='text' className='completed_transaction_inputdate1'value={debitAccountNumber}
                     />
                </div>
              </div>
              <p className='mt-5' style={{fontSize:'small'}}>*Mandatory</p>
              <button className='mt-5 completed_transaction_get' onClick={()=>setView('get')} >GET TRANSACTIONS</button>


         {view==='get'&&
         <div ref={transactionRef}>
              {transactions.length>0?
       <div className="table-responsive-lg paylater_transaction_table mt-5">
       <table className="table table-bordered ">
         <thead className="paylater_tablehead">
           <tr >
           <th>Date</th>
                <th>Transaction Type</th>
    <th>Total Amount(INR)</th>
                <th>Payment ID</th>
                <th>Status</th>
           </tr>
         </thead>
       <tbody className="paylater_body">
         {transactions.map((transaction, index) => (
                                                    <tr key={index}>
                                                        <td>{transaction.date}</td>
                                                        <td>{transaction.type}</td>
                                                        <td>{transaction.Totalamount}</td>
                                                        <td>{transaction.id}</td>
                                                        <td>{transaction.Status}</td>
                                                    </tr>
                                                ))}</tbody> </table>
                                                <div className='d-flex justify-content-end' >
                    <button className='completed_transaction_ok' onClick={handleDownload}>Download PDF</button>
                  </div>
                                                </div>:
                                                <div className='estatement_noFound'>No Transactions Found</div>}
         </div>
         }

              <div className='mt-5'>
                <p style={{color:'#2fb68e'}}><b>Note:</b></p>
                <ul>
                  <li>All transactions through different channels such as Internet Banking, Payment Gateway Channels (payment made at merchant site via net banking) will be displayed on this page.</li>
                  <li>Transaction details available online for last 1 year.</li>
                </ul>
              </div>
          </div>
        </div>
      </div>
      </div>
    </>
    
  );
};

export default CompletedTransaction;