import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Creditcard.css';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';
import { useNavigate } from 'react-router-dom';
import apiList from '../../../../lib/apiList';

const CreditCardPin = () => {
    const navigate = useNavigate();
    const [errorMessages, setErrorMessages] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');

    const [creditCardPin, setCreditCardPin] = useState('');
    const [confirmCreditCardPin, setConfirmCreditCardPin] = useState('');
    const [userDetails, setUserDetails] = useState([]);

    const accountNumber = 1124563456;

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${apiList.customerAccountDetails}${accountNumber}`);
            const userDetailsData = response.data.details;

            if (Array.isArray(userDetailsData)) {
                setUserDetails(userDetailsData);
            } else if (typeof userDetailsData === 'object') {
                setUserDetails([userDetailsData]);
            } else {
                console.error('Invalid user details format:', userDetailsData);
            }
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    };

    const handleGeneratePin = async () => {
        const errors = [];

        if (!creditCardPin || !confirmCreditCardPin) {
            errors.push("Please enter both credit card PIN and confirm PIN.");
        } else if (creditCardPin !== confirmCreditCardPin) {
            errors.push("Credit card PIN and confirm PIN do not match.");
        } else {
            setErrorMessages([]);
        }

        setErrorMessages(errors);

        if (errors.length === 0) {
            try {
                await fetchData();

                const response = await axios.post(`${apiList.GenerateCreditcardpin}`, {
                    userAccountNumber: userDetails[0].userAccountNumber,
                    creditCardPin,
                    confirmCreditCardPin,
                });

                console.log(response.data);

                setSuccessMessage("PIN Generated Successfully");
                setTimeout(() => {
                    setSuccessMessage('');
                    navigate('/user/generate-credit-card-pin');
                }, 3000);

            } catch (error) {
                console.error(error.response.data);
            }
        }
    };

    return (
        <div className='container-fluid' style={{ marginTop: "90px" }}>
            <div className='row'>
                <div className='col-sm-3'>
                    <BankaccountSidebar />
                </div>
                <div className='col-sm-9'>
                    <div className="container-fluid generateCredit_pin mt-1">
                        <div className="card">
                            <h6 className="header generateCredit_pin_heading p-3">Generate Credit Card PIN</h6>
                            <div className="container-fluid p-2">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <label htmlFor="creditCardPin">Credit Card Pin*:</label>
                                    </div>
                                    <div className="col-sm-3 ">
                                        <input
                                            className="credit_card_input"
                                            type="number"
                                            value={creditCardPin}
                                            onChange={(e) => {
                                                setCreditCardPin(e.target.value);
                                                setErrorMessages([]);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-4">
                                        <label htmlFor="confirmCreditCardPin">Confirm Credit card Pin*:</label>
                                    </div>
                                    <div className="col-sm-3">
                                        <input
                                            className="credit_card_input"
                                            type="number"
                                            value={confirmCreditCardPin}
                                            onChange={(e) => {
                                                setConfirmCreditCardPin(e.target.value);
                                                setErrorMessages([]);
                                            }}
                                        />
                                    </div>
                                </div>
                                <button className='mt-3 generate_now_Btn' onClick={handleGeneratePin}>Generate Now</button>
                                {successMessage && <p className="text-success mt-2">{successMessage}</p>}
                            </div>
                            {errorMessages.length > 0 && (
                                <div className="error-messages text-danger ml-2">
                                    {errorMessages.map((error, index) => (
                                        <p key={index}>{error}</p>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreditCardPin;
