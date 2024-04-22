import React, { useState } from 'react'
import sdf from './images/success.gif'
import { Link, } from 'react-router-dom';

const AccountSuccessPage = () => {
  // 
  const [needDebitCard, setNeedDebitCard] = useState(false);
  const handleDebitCardOption = (value) => {
    setNeedDebitCard(value);
  };
  // 

  const handleOkButtonClick = () => {
    window.location.href = 'http://localhost:3000'; 
  };
  return (
    <div className='text-center account_successful'>
      
      <img src={sdf}/><br/><br/><br/>
      
      <h1 className='account_successful_heading'>Account Created Successfully</h1><br/><br/><br/>
      {/*  */}
      <div>
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
      </div>
      <br />
      {/*  */}
      <Link className='account_successful_button' onClick={handleOkButtonClick}>OK</Link>
    </div>
  )
}

export default AccountSuccessPage
