import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Creditcard.css';
import apiList from '../../../../lib/apiList';
import { useNavigate } from 'react-router-dom';

const AutoDebitInstructions = () => {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState([]);
    const [selectedCreditCard, setSelectedCreditCard] = useState('');
    const [selectedAccount, setSelectedAccount] = useState('');
    const [autodebitSetup, setAutodebitSetup] = useState({
        setupAutoDebit: '',
        autodebitMode: ''
    });
    const accountNumber = 1124563456;

    const fetchData = async () => {
        try {
            const response = await axios.get(`${apiList.customerAccountDetails}${accountNumber}`);
            const userDetailsData = response.data.details;

            if (Array.isArray(userDetailsData)) {
                setUserDetails(userDetailsData);
                setSelectedCreditCard(userDetails[0]?.userCreditCardDetails[0]?.creditCardNumber || '');
            } else if (typeof userDetailsData === 'object') {
                setUserDetails([userDetailsData]);
                setSelectedCreditCard(userDetails[0]?.userCreditCardDetails[0]?.creditCardNumber || '');
            } else {
                console.error('Invalid user details format:', userDetailsData);
            }
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
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

    const handleAccountChange = (event) => {
        setSelectedAccount(event.target.value);
    };

    const handleAutodebitSetupChange = (event) => {
        const { name, value } = event.target;
        setAutodebitSetup(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async() => {
        try {
            if (autodebitSetup.setupAutoDebit === 'yes') {
               
                localStorage.setItem('autodebitData', JSON.stringify({
                    userDetails,
                    selectedCreditCard,
                    selectedAccount,
                    autodebitMode: autodebitSetup.autodebitMode,
                    setupAutoDebit: autodebitSetup.setupAutoDebit
                }));

                navigate('/user/auto-debit-confirm');
    
    
            } else {
                console.log('Autodebit setup is selected as "no"');
                console.log('No account selected');
                localStorage.setItem('autodebitData', JSON.stringify({
                    userDetails,
                    selectedCreditCard,
                    setupAutoDebit: autodebitSetup.setupAutoDebit 
                }));
                navigate('/user/auto-debit-confirm');
            }
        } catch (error) {
            console.error('Error updating credit card details:', error);
        }
    };
    
    return (
        <div className="container-fluid" style={{ marginTop: "90px" }}>
            <div className="row  mt-2">
                <div className="col-sm-12 auto_debit_instructions ">
                    <div>
                        <h3>Auto Debit Instructions</h3>
                        <hr />
                    </div>
                    <div className="card auto_debit_instructions_card p-3">
                        <div className="row align-items-center">
                            <div className="col-sm-3">
                                <p>Select Your Card</p>
                            </div>
                            <div className="col-sm-3">
                                <select
                                    className="form-control"
                                    value={selectedCreditCard}
                                    onChange={(event) => setSelectedCreditCard(event.target.value)}
                                >
                                    <option>Please Select</option>
                                    {userDetails.length > 0 && (
                                        <option value={formatDebitCardNumber(userDetails[0].userCreditCardDetails[0].creditCardNumber)}>
                                            {formatDebitCardNumber(userDetails[0].userCreditCardDetails[0].creditCardNumber)}
                                        </option>
                                    )}

                                </select>
                            </div>
                        </div>
                        <div className="row align-items-center mt-2">
                            <div className="col-sm-3">
                                <p>Setup Auto Debit</p>
                            </div>
                            <div className="col-sm-3">
                                <select
                                    className="form-control"
                                    name="setupAutoDebit"
                                    value={autodebitSetup.setupAutoDebit}
                                    onChange={handleAutodebitSetupChange}
                                >
                                    <option value="">Select</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                        </div>
                        <div className="row align-items-center mt-2">
                            <div className="col-sm-3">
                                <p>Bank Account Number</p>
                            </div>
                            <div className="col-sm-3">
                                <select
                                    className="form-control"
                                    value={selectedAccount}
                                    onChange={handleAccountChange}
                                    disabled={autodebitSetup.setupAutoDebit === 'no'}
                                >
                                    <option value="">Select Account Number</option>
                                    {userDetails.map((account, index) => (
                                        <option key={index} value={account.userAccountNumber}>
                                            {account.userAccountNumber}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="row align-items-center mt-2">
                            <div className="col-sm-3">
                                <p>Mode</p>
                            </div>
                            <div className="col-sm-3">
                                <select
                                    className="form-control"
                                    name="autodebitMode"
                                    value={autodebitSetup.autodebitMode}
                                    onChange={handleAutodebitSetupChange}
                                    disabled={autodebitSetup.setupAutoDebit === 'no'}
                                >
                                    <option value="">Select</option>
                                    <option value="minimumdue">Minimum Amount Due</option>
                                    <option value="totaldue">Total Amount Due</option>
                                </select>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <button className="auto_debit_buttons">Reset</button>
                            <button className="ml-4 auto_debit_buttons" onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AutoDebitInstructions;
