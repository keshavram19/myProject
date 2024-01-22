import React, { useState } from 'react';
import './FundTransfer.css';
import Calandar from './Calender';

const PaymentSummary = () => {
  const [totalPendingAmount, setTotalPendingAmount] = useState(5000);
  const [selectedRadio, setSelectedRadio] = useState('bills');

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
  };

  return (
    <div className="payment-container col-12">
      <div className="payment-header">
        <div className='box-container col-12'>
        <div className="header-box"> 
          <h2 style={{width:"100%"}}>Total Pending Amount <p>$500</p> </h2>
        
          <div className="payment-radios" style={{width:"100%"}}>
                <label className="scheduled-label">
                <input type="radio" name="schedule"/>
                Scheduled(Today+30 Days)
                </label>

                <label className="upcoming-label">
                <input type="radio" name="schedule"/>
                Upcoming Bills
                </label>

                <label className="completed-label">
                <input type="radio" name="schedule"/>
                Completed (Today+30 Days)
                </label>
        </div>
        </div>
        </div>
        
      </div>
      {selectedRadio === 'bills' && (
          <div className="calendar-container">
            <Calandar />
          </div>
        )}
    </div>
  );
};


export default PaymentSummary;