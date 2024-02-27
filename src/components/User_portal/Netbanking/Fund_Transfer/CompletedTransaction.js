import React, { useState } from 'react';
import './FundTransfer.css';
import PaymentSidebar from '../Sidebar/PaymentsAndTransferSidebar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarWeek } from "react-icons/fa";

const CompletedTransaction = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
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
                <select className='completed_transaction_select1'>
            <option hidden>select</option>
            <option value="icici">ICICI</option>
            <option value="kotak">KOTAK</option>
            <option value="union">HDFC</option>
          </select>
                </div>
              </div>
              <div className='completed_transaction_cont1 mt-4'>
              <div className='completed_transaction_search'>
                <div>Date From*</div>
                <div className='completed_transaction_date1'>
                <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
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
      selected={endDate}
      onChange={(date1) => setEndDate(date1)}
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
                <input type='text' className='completed_transaction_inputdate1'/>
                </div>
              </div>
              <p className='mt-5' style={{fontSize:'small'}}>*Mandatory</p>
              <button className='mt-5 completed_transaction_get'>GET TRANSACTIONS</button>
              <div className='mt-3 completed_transaction_details '>
                <div className='completed_transaction_details1'>
                  <div>Download Details As:</div>
                  <div>
                    <select className='completed_transaction_select1'>
                      <option>PDF File</option>
                      <option>CSV File</option>
                    </select>
                  </div>
                  <div>
                    <button className='completed_transaction_ok'>OK</button>
                  </div>
                </div>
              </div>

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