import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Accounts.css';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';
import GenerateOTPPage from './GenerateOTPPage';
import apiList from '../../../../lib/apiList';


const GenerateDebitCardPinOTP = () => {
    const [userDetails, setUserDetails] = useState([]);
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


    const formatDebitCardNumber = (cardNumber) => {

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
                    <div className="container-fluid generate_pin mt-1">
                        <hr />
                        <div className="card">
                            <h5 className="header card_details_generate_pin_heading p-3">Generate Debit Card PIN</h5>
                            <div className="container-fluid p-2">
                                <div className="row card_details_generate_pin_select_tag">
                                    <div className="col-sm-6">
                                        <label for="ac_number">Account Number</label>
                                    </div>
                                    <div className="col-sm-4 ">
                                    {userDetails.map((account, index) => (
                                                <option key={index} value={account.accountNumber}>
                                                    {account.accountNumber}
                                                </option>
                                            ))}
                                    </div>
                                </div>
                                <div className="row card_details_generate_pin_select_tag ">
                                    <div className="col-sm-6">
                                        <label for="card_number">Debit Card Number</label>
                                    </div>
                                    <div className="col-sm-4">

                                        {userDetails.length > 0 && (
                                            <p value={formatDebitCardNumber(userDetails[0].userDebitCardDetails.userDebitCardNumber)}>
                                                {formatDebitCardNumber(userDetails[0].userDebitCardDetails.userDebitCardNumber)}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="row card_details_generate_pin_input_tag">
                                    <div className="col-sm-6">
                                        <label htmlFor="text">Mobile Number*</label>
                                    </div>
                                    <div className="col-sm-3">
                                        <p>{`XXXXXX${String(lastFourDigits).slice(-4)}`}</p>
                                    </div>
                                </div>
                            </div>

                            <GenerateOTPPage />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default GenerateDebitCardPinOTP;