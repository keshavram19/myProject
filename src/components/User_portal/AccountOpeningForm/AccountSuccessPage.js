import React, { useState } from 'react'
import sdf from './images/success.gif'
import { Link, } from 'react-router-dom';

const AccountSuccessPage = () => {


  const handleOkButtonClick = () => {
    window.location.href = 'http://localhost:3000'; 
  };
  return (
    <div className='text-center account_successful'>
      
      <img src={sdf}/><br/><br/><br/>
      
      <h1 className='account_successful_heading'>Account Created Successfully</h1><br/><br/><br/>
      <Link className='account_successful_button' onClick={handleOkButtonClick}>OK</Link>
    </div>
  )
}

export default AccountSuccessPage
