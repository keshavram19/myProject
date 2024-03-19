import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Creditcard.css';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';
import CreditCardOtp from './CreditCardOtp';
import apiList from '../../../../lib/apiList';


const CreditCardPinOtp = () => {
    const [userDetails, setUserDetails] = useState([]);
    const [lastFourDigits, setLastFourDigits] = useState('');
    const token = sessionStorage.getItem('loginToken');


    const fetchData = async () => {
        try {
            const requestOptions = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            };
            const response = await fetch(apiList.requestedUserDetailsByEmail, requestOptions);
            if (response.ok) {
                const data = await response.json();
                const userDetailsData = data.user;
                if (Array.isArray(userDetailsData)) {
                    setUserDetails(userDetailsData);
                    setLastFourDigits(data.user[0].mobilenumber);
                } else if (typeof userDetailsData === 'object') {
                    setUserDetails([userDetailsData]);
                    setLastFourDigits(data.user.mobilenumber);
                } else {
                    console.error('Invalid user details format:', userDetailsData);
                }
            } else {
                console.error('Error fetching user details:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const formatCreditCardNumber = (cardNumber) => {

        const cardNumberString = String(cardNumber);
        const firstFourDigits = cardNumberString.substring(0, 4);
        const lastFourDigits = cardNumberString.substring(cardNumberString.length - 4);
        const maskedDigits = 'X'.repeat(cardNumberString.length - 8);

        return `${firstFourDigits}${maskedDigits}${lastFourDigits}`;
    };


    return (
        <div className='container-fluid' style={{ marginTop: "90px" }}>
            <div className='row'>

                <div className='col-3'>
                    <BankaccountSidebar />
                </div>
                <div className='col-9'>
                    <div className="container-fluid generate_credit_otp_pin mt-1">
                        <div className="card">
                            <h5 className="header card_details_generate_credit_pin_heading p-3">Generate Credit Card PIN</h5>
                            <div className="container-fluid p-2">
                                <div className="row card_details_generate_credit_pin_select_tag">
                                    <div className="col-sm-4">
                                        <label for="ac_number" className='ml-2'>Account Number</label>
                                    </div>
                                    <div className="col-sm-4">
                                        {userDetails.map((account, index) => (
                                            <p key={index} value={account.accountNumber}>
                                                {account.accountNumber}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                <div className="row card_details_generate_pin_credit_select_tag ">
                                    <div className="col-sm-4">
                                        <label for="card_number" className='ml-2'>Credit Card Number</label>
                                    </div>
                                    <div className="col-sm-4">

                                        {userDetails.length > 0 && (
                                            <option value={formatCreditCardNumber(userDetails[0].userCreditCardDetails[0].creditCardNumber)}>
                                                {formatCreditCardNumber(userDetails[0].userCreditCardDetails[0].creditCardNumber)}
                                            </option>
                                        )}
                                    </div>
                                </div>
                                <div className="row card_details_generate_credit_pin_input_tag">
                                    <div className="col-sm-4">
                                        <label htmlFor="text" className='ml-2'>Mobile Number*</label>
                                    </div>
                                    <div className="col-sm-3">
                                        <p>{`XXXXXX${String(lastFourDigits).slice(-4)}`}</p>
                                    </div>
                                </div>
                                <hr />
                            </div>

                            <CreditCardOtp />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default CreditCardPinOtp;