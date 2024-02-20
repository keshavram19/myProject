import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from "react-router-dom";
import './Creditcard.css';
import apiList from '../../../../lib/apiList';


const ConvertToEMI = () => {

    const [userDetails, setUserDetails] = useState([]);
    const [selectedCreditCard, setSelectedCreditCard] = useState('');

    const accountNumber = 1124563456;

    const fetchData = async () => {
        try {
            const response = await axios.get(`${apiList.customerAccountDetails}${accountNumber}`);
            const userDetailsData = response.data.details;

            if (Array.isArray(userDetailsData)) {
                setUserDetails(userDetailsData);
                setSelectedCreditCard(userDetailsData[0].userCreditCardDetails[0].creditCardNumber);
            } else if (typeof userDetailsData === 'object') {
                setUserDetails([userDetailsData]);
                setSelectedCreditCard(userDetailsData.userCreditCardDetails.creditCardNumber);
            } else {
                console.error('Invalid user details format:', userDetailsData);
            }

        } catch (error) {
            console.error('Error fetching user details:', error);
        }
        console.log('User Details:', userDetails);

    };

    useEffect(() => {
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
        <div className="container-fluid" style={{marginTop:"90px"}}>
            <div className="row mt-2">
                <div className="col-md-12">
                    <div className="convert_to_emi_card">
                        <div>
                            <h3>Convert To EMI</h3>
                            <hr />
                        </div>
                        <div className="card  p-4">
                            <div className="row convert_to_emi_row">
                                <div className="col-sm-2">
                                    <p className="mt-3">Select a Credit Card :</p>
                                </div>
                                <div className="col-sm-3">
                                     <select
                                            className="form-control"
                                            value={selectedCreditCard}
                                            onChange={(event) => setSelectedCreditCard(event.target.value)}
                                        >
                                            {userDetails.length > 0 && (
                                                <option value={formatDebitCardNumber(userDetails[0].userCreditCardDetails[0].creditCardNumber)}>
                                                    {formatDebitCardNumber(userDetails[0].userCreditCardDetails[0].creditCardNumber)}
                                                </option>
                                            )}
                                        </select>
                                </div>
                            </div>
                            <div className="mt-3">
                                    <button className="convert_to_emi_button">Back</button>
                                    <Link to='/user/emi-submit'><button className="ml-3 convert_to_emi_button">Submit </button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConvertToEMI;