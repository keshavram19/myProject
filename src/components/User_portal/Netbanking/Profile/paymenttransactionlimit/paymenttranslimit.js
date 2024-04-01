import React, { useState, useEffect } from 'react';
import "./paymenttranslimit.css";
import OverviewSidebar from "../../Sidebar/OverViewSidebar";
import apiList from '../../../../../lib/apiList';

 function PaymentTransactionLimit() {
  const [userDetails, setUserDetails] = useState([]);
    const [selectedAccount, setSelectedAccount] = useState('');
    const [selectedDebitCard, setSelectedDebitCard] = useState('');
    const [lastFourDigits, setLastFourDigits] = useState('');
    const token = sessionStorage.getItem('loginToken');

    useEffect(() => {

      const fetchData = async () => {
          try {
            
              const requestOptions = {
                  method: 'GET',
                  headers: {
                      'Authorization': `Bearer ${token}`,
                      'Content-Type': 'application/json'
                  }
              };
              const response = await fetch(apiList.requestedUserDetailsByEmail, requestOptions);
              if (response.ok) {
                  const data = await response.json();
                  setUserDetails([data.user]);
                  setLastFourDigits([data.user.mobilenumber])
              } else {
                  console.error('Error fetching user details:', response.statusText);
              }
          } catch (error) {
              console.error('Error fetching user details:', error);
          }
      };

      fetchData();
  }, []);
  const handleAccountChange = (event) => {
    setSelectedAccount(event.target.value);
};
const formatDebitCardNumber = (cardNumber) => {

  const cardNumberString = String(cardNumber);
  const firstFourDigits = cardNumberString.substring(0, 4);
  const lastFourDigits = cardNumberString.substring(cardNumberString.length - 4);
  const maskedDigits = 'X'.repeat(cardNumberString.length - 8);

  return `${firstFourDigits}${maskedDigits}${lastFourDigits}`;
};
  return (
    <>
    <div>
    <section className="container-fluid" style={{marginTop:"90px"}}>
      <div className="row">
      <div className="col-3">
          <div className="">
           <OverviewSidebar />
          </div>
        </div>
       <div className='col-9 payment_transactionlimit_Container p-0 m-0'> 
      
       <div className="payment_transactionlimit_mainheading m-0">
              <p className='m-0'>Debit Card Transaction Limit Daily</p>
              </div>
              <div className='payment_transactionlimit_section'>
              <div className="row card_details_paymenttransferLimit_select_tag">
                                    <div className="col-sm-6 "style={{ fontSize: '15px' }}>
                                        <label for="ac_number">Select Account Number*</label>
                                    </div>
                                    <div className="col-sm-4 " style={{ fontSize: '15px' }}>
                                        <select
                                            className="form-control"
                                            value={selectedAccount}
                                            onChange={handleAccountChange}
                                        >
                                            <option value="">Select Account Number</option>
                                            {userDetails.map((account, index) => (
                                                <option key={index} value={account.accountNumber}>
                                                    {account.accountNumber}
                                                </option>
                                            ))}
                                        </select>

                                    </div>
                                </div>
                                <div className="row card_details_paymenttransferLimit_select_tag mt-2">
                                    <div className="col-sm-6" style={{ fontSize: '15px' }}>
                                        <label for="card_number">Debit Card Number*</label>
                                    </div>
                                    <div className="col-sm-4" style={{ fontSize: '15px' }}>
                                        <select
                                            className="form-control"
                                            value={selectedDebitCard}
                                            disabled={!selectedAccount}
                                            onChange={(event) => setSelectedDebitCard(event.target.value)}
                                        >
                                            <option value="">Select</option>

                                            {userDetails.length > 0 && userDetails[0].userDebitCardDetails && (
                                                <option value={formatDebitCardNumber(userDetails[0].userDebitCardDetails.userDebitCardNumber)}>
                                                    {formatDebitCardNumber(userDetails[0].userDebitCardDetails.userDebitCardNumber)}
                                                </option>
                                            )}


                                        </select>

                                    </div>
                                </div>
                   <div className='existing_debit_card_limit p-1'style={{ fontSize: '15px' }}> Existing debit Limit:</div> 

                   <div style={{ fontSize: '15px',paddingTop:"7px",fontWeight:"410" }} className='p-1'>Select your desired daily debit limit</div>
                   <div className="form-group p-1">
                                                            <label htmlFor="formControlRange p-1" style={{ fontSize: '13px',paddingTop:"5px" }}>
                                                                Credit Limit (INR)
                                                            </label>
                                                            <input
                                                                type="range"
                                                                className="form-control-range credit_card_limit_range p-1"
                                                                id="formControlRange"
                                                               
                                                                min="0"
                                                               
                                                                style={{
                                                                    width: '100%',
                                                                     background: "#2fb68e",
                                                                    height: '8px',
                                                                    borderRadius: '4px',
                                                                    cursor: 'pointer',
                                                                    appearance: 'none',
                                                                }}
                                                            />
                                                            <div className='d-flex align-items-center mt-2 p-1'>
                                                                <div  style={{ fontSize: '15px' }}>Selected Debit Limit: </div>
                                                                <div className='ml-2'></div>
                                                            </div>
                                                        </div>

                                                        <button className='transaction_update_btn '>Update</button>

        </div>
        <div className="payment_transactionlimit_mainheading m-0">
              <p className='m-0'>Debit Card Transaction Limit Monthly</p>
              </div>
              <div className='payment_transactionlimit_section'>
              {/* <div className="row card_details_paymenttransferLimit_select_tag">
                                    <div className="col-sm-6 "style={{ fontSize: '15px' }}>
                                        <label for="ac_number">Select Account Number*</label>
                                    </div>
                                    <div className="col-sm-4 " style={{ fontSize: '15px' }}>
                                        <select
                                            className="form-control"
                                            value={selectedAccount}
                                            onChange={handleAccountChange}
                                        >
                                            <option value="">Select Account Number</option>
                                            {userDetails.map((account, index) => (
                                                <option key={index} value={account.accountNumber}>
                                                    {account.accountNumber}
                                                </option>
                                            ))}
                                        </select>

                                    </div>
                                </div>
                                <div className="row card_details_paymenttransferLimit_select_tag mt-2">
                                    <div className="col-sm-6" style={{ fontSize: '15px' }}>
                                        <label for="card_number">Debit Card Number*</label>
                                    </div>
                                    <div className="col-sm-4" style={{ fontSize: '15px' }}>
                                        <select
                                            className="form-control"
                                            value={selectedDebitCard}
                                            disabled={!selectedAccount}
                                            onChange={(event) => setSelectedDebitCard(event.target.value)}
                                        >
                                            <option value="">Select</option>

                                            {userDetails.length > 0 && userDetails[0].userDebitCardDetails && (
                                                <option value={formatDebitCardNumber(userDetails[0].userDebitCardDetails.userDebitCardNumber)}>
                                                    {formatDebitCardNumber(userDetails[0].userDebitCardDetails.userDebitCardNumber)}
                                                </option>
                                            )}


                                        </select>

                                    </div>
                                </div> */}
                   <div className='existing_debit_card_limit p-1'style={{ fontSize: '15px' }}> Existing debit Limit:</div> 

                   <div style={{ fontSize: '15px',paddingTop:"7px",fontWeight:"410" }} className='p-1'>Select your desired daily debit limit</div>
                   <div className="form-group p-1">
                                                            <label htmlFor="formControlRange p-1" style={{ fontSize: '13px',paddingTop:"5px" }}>
                                                                Credit Limit (INR)
                                                            </label>
                                                            <input
                                                                type="range"
                                                                className="form-control-range credit_card_limit_range p-1"
                                                                id="formControlRange"
                                                               
                                                                min="0"
                                                               
                                                                style={{
                                                                    width: '100%',
                                                                     background: "#2fb68e",
                                                                    height: '8px',
                                                                    borderRadius: '4px',
                                                                    cursor: 'pointer',
                                                                    appearance: 'none',
                                                                }}
                                                            />
                                                            <div className='d-flex align-items-center mt-2 p-1'>
                                                                <div  style={{ fontSize: '15px' }}>Selected Debit Limit: </div>
                                                                <div className='ml-2'></div>
                                                            </div>
                                                        </div>

                                                        <button className='transaction_update_btn '>Update</button>

        </div>
       </div>
      </div>
    </section>
  </div>
    </>
  )
}
export default PaymentTransactionLimit