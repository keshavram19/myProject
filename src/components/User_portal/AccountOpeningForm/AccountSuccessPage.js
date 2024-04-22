import React, { useState, useEffect } from 'react';
import sdf from './images/success.gif'
import { Link, } from 'react-router-dom';

const AccountSuccessPage = () => {
  // 
  // const [needDebitCard, setNeedDebitCard] = useState(false);
  // const handleDebitCardOption = (value) => {
  //   setNeedDebitCard(value);
  // };
  const [timer, setTimer] = useState(5); // Timer set to 5 seconds
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1); // Decrease timer by 1 second
    }, 1000);

    // Clear interval when component unmounts
    return () => clearInterval(countdown);
  }, []);

  useEffect(() => {
    // Navigate to another page when timer reaches 0
    if (timer === 0) {
      window.location.href = 'http://localhost:3000';
    }
  }, [timer]);
  // 

  // const handleOkButtonClick = () => {
  //   window.location.href = 'http://localhost:3000'; 
  // };
  return (
    <div className='text-center account_successful'>
      
      <img src={sdf}/><br/><br/><br/>
      
      <h1 className='account_successful_heading'>Account Created Successfully</h1><br/><br/><br/>
      <p>Redirecting in {timer} seconds...</p>

      {/*  */}
      {/* <div>
        <label>
          Need Debit Card:
          <div>
           
          <input
              type='checkbox'
              id='yesCheckbox'
              checked={needDebitCard}
              onChange={() => handleDebitCardOption(true)}
            />
            <label htmlFor='yesCheckbox' className={'ml-2' + (needDebitCard ? 'selected' : '')}>Yes</label>
            <input
            className='ml-3'
              type='checkbox' 
              id='noCheckbox'
              checked={!needDebitCard}
              onChange={() => handleDebitCardOption(false)}
            />
            <label htmlFor='noCheckbox' className={'ml-2' + (!needDebitCard ? 'selected' : '')}>No</label>
          
        </div>
        </label>
      </div> */}
      <br />
      {/*  */}
      {/* <Link className='account_successful_button' onClick={handleOkButtonClick}>OK</Link> */}
    </div>
  )
}

export default AccountSuccessPage
