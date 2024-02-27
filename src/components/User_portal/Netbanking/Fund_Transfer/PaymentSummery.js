import React, { useState } from 'react';
import './FundTransfer.css';
import Calendar from 'react-calendar';
import PaymentSidebar from '../Sidebar/PaymentsAndTransferSidebar';
import { BiRupee } from "react-icons/bi";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import 'react-calendar/dist/Calendar.css';

const PaymentSummary = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };
  return (
    <>
      <div className='container-fluid' style={{ marginTop: "90px" }}>
        <div className='row'>
        <div className='col-3'>
          <PaymentSidebar/>
          
          </div>
        <div className='col-9'>
          <h4 className='payment_summary_head'>Payment Summary</h4>
          <hr style={{border:"1px solid lightgrey"}}/>
          
            <div className='container-fluid payment_summary_cont1'>
              <div className='payment_summary_pending'>
                <div className='mt-2'>
                  <p><b>TOTAL PENDING AMOUNT</b></p>
                  <p className='payment_summary_valid'>(Till 22 Mar 2024)</p>
                </div>
                <div>
                  <p><BiRupee/>0.0</p>
                </div>
              </div>
             
            </div>
            <div className='payment_summary_cont3 mt-3'>
            <Calendar
        onChange={handleDateChange}
        value={date}
        
      />
       <div className='payment_summary_cont2'>
                <div >
                  <ul className='payment_summary_list1'>
                  <li className='mt-2'><LiaMoneyBillSolid className='mr-2'/>Bills</li>
                  <li className='mt-2'><FaMoneyBillTransfer className='mr-2'/>Funds Transfer</li>
                  </ul>
                </div>
                <div className='mt-2'>
                  <ul className='payment_summary_list1'>
                  <li><GoDotFill className='mr-2 payment_summary_dot1'/>Scheduled(Today + 30 Days)</li>
                  <li><GoDotFill className='mr-2 payment_summary_dot2'/>Upcoming Bills</li>
                  <li><GoDotFill className='mr-2 payment_summary_dot3'/>Completed(Today - 30 Days)</li>
                  </ul>
                </div>
              </div>
      </div>
          </div>
          </div>
  </div>
   
      </>
  );
};


export default PaymentSummary;