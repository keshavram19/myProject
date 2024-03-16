import React, { useState,useRef } from 'react';
import './FundTransfer.css';
import PaymentSidebar from '../Sidebar/PaymentsAndTransferSidebar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarWeek } from "react-icons/fa";
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { html2pdf } from 'html2pdf.js';
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
  const pdf = new jsPDF();

  pdf.setFontSize(8);
  pdf.text(`Account Number:123456789 `, 10, 10);
  pdf.text(`Account Holder Name:Moola Srinivasa Reddy `, 10, 20);
  pdf.text(`Branch Bank Name:Royal Islamic Bank `, 10, 30);
  pdf.text(`Account type :Savings`, 10, 40);
  pdf.text(`Account Holder DOB:24-08-1999 `, 10, 50);
  pdf.text(`Bank Branch IfscCode:RIBN0000201 `, 10, 60);
  pdf.text(`Account Balance:2000`, 10, 70);
  pdf.text(`Mobile Number:8106423221`, 10, 80);
  pdf.text(`Email ID:srinivasreddy@gmail.com`, 10, 90);

  const input = transactionRef.current;
  const A4_WIDTH = 210; 
  const A4_HEIGHT = 297; 

  html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const imgWidth = A4_WIDTH; 
    const imgHeight = (A4_WIDTH / canvas.width) * canvas.height; // Maintain aspect ratio
    pdf.addImage(imgData, 'PNG', 2, 100, imgWidth, imgHeight); // Adjust x, y, width, and height as needed
    pdf.save('transactions.pdf');
  });
};
const generateRandomTransactionId = () => {
  const randomNumber = Math.floor(Math.random() * 1000) + 1;
  return `RIB${String(randomNumber).padStart(4, '0')}`;
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
                <th>Transaction ID</th>
                <th>Status</th>
           </tr>
         </thead>
       <tbody className="paylater_body">
         {transactions.map((transaction, index) => (
                                                    <tr key={index}>
                                                        <td>{transaction.date}</td>
                                                        <td>{transaction.type}</td>
                                                        <td>{transaction.Totalamount}</td>
                                                        <td>{generateRandomTransactionId()}</td>
                                                        <td>{transaction.Status}</td>
                                                    </tr>
                                                ))}</tbody> </table>
                      
                                                </div>:
                                                <div className='estatement_noFound'>No Transactions Found</div>}
         </div>
         }
         {view ==='get'&&transactions.length>0&&<div className='d-flex justify-content-end'>
                                                <button onClick={handleDownload} className='estatement_download'>Download PDF</button>
                                                </div>}

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