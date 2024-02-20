import React, { useState, useEffect } from 'react';
import axios from 'axios';
import apiList from '../../../../lib/apiList';
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const EMISubmit = () => {
    const [userDetails, setUserDetails] = useState({});
    const [totalTransactionAmount, setTotalTransactionAmount] = useState(0);
    const [checkedTransactions, setCheckedTransactions] = useState([]);
    const [totalAmountToConvert, setTotalAmountToConvert] = useState(0);
    const accountNumber = 1124563456;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiList.customerAccountDetails}${accountNumber}`);
                const userDetailsData = response.data.details;

                setUserDetails(userDetailsData);

                // Calculate total transaction amount
                let totalAmount = 0;
                userDetailsData.creditCardTransactions.forEach(transaction => {
                    totalAmount += transaction.transactionAmount;
                });
                setTotalTransactionAmount(totalAmount);
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };
        fetchData();
    }, []);

    const handleCheckboxChange = (index) => {
        const newCheckedTransactions = [...checkedTransactions];
        newCheckedTransactions[index] = !newCheckedTransactions[index];
        setCheckedTransactions(newCheckedTransactions);
        const selectedTransactions = userDetails.creditCardTransactions.filter((_, i) => newCheckedTransactions[i]);
        const totalAmount = selectedTransactions.reduce((acc, transaction) => acc + transaction.transactionAmount, 0);
        setTotalAmountToConvert(totalAmount);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const handleConvertToEMIClick = () => {
        const selectedTransactions = userDetails.creditCardTransactions.filter((_, i) => checkedTransactions[i]);
        const numberOfTransactionsSelected = selectedTransactions.length;
        navigate('/user/convert-to-emi-submit', { state: { selectedTransactions, numberOfTransactionsSelected } });
    };

    return (
        <div className="container-fluid convert_to_emi_submit_button" style={{ marginTop: "90px" }}>
            <div className="row ">
                <div className="col-sm-12">
                    <div>
                        <h3>Convert To EMI</h3>
                        <hr />
                    </div>
                    <div className="convert_to_emi_faqs">
                        <button className="convert_to_emi_button_submit">FAQS</button>
                    </div>
                    <div className="d-flex">
                        <p>Credit Card Selected</p>
                        {userDetails && userDetails.userCreditCardDetails && userDetails.userCreditCardDetails.length > 0 && (
                            <p className='ml-2' value={userDetails.userCreditCardDetails[0].creditCardNumber}>
                                {userDetails.userCreditCardDetails[0].creditCardNumber}
                            </p>
                        )}
                    </div>
                    <div className="card">
                        <p>Covert your transactions worth <MdOutlineCurrencyRupee />{totalTransactionAmount} into easy EMIs</p>
                    </div>
                    <div className="container-fluid">
                        <div className="card mt-3">
                            <div className="row">
                                <div className="col-sm-2 convert_to_emi_items">
                                    <p>Date</p>
                                </div>
                                <div className="col-sm-1 convert_to_emi_ref">
                                    <p>Ref. Number</p>
                                </div>
                                <div className="col-sm-4 convert_to_emi_items">
                                    <p>Transaction Details</p>
                                </div>
                                <div className="col-sm-3 convert_to_emi_items">
                                    <p>Transaction Amount(INR)</p>
                                </div>
                                <div className="col-sm-2 convert_to_emi_items">
                                    <p>Convert To EMI</p>
                                </div>
                            </div>
                            {userDetails && userDetails.creditCardTransactions && userDetails.creditCardTransactions.length > 0 && (
                                userDetails.creditCardTransactions.map((transaction, index) => (
                                    <div className="card" key={index}>
                                        <div className="row">
                                            <div className="col-sm-2 convert_to_emi_date">
                                                <p>{formatDate(transaction.date)}</p>
                                            </div>
                                            <div className="col-sm-1 convert_to_emi_coloumn">
                                                <p>{transaction.Referencenumber}</p>
                                            </div>
                                            <div className="col-sm-4 convert_to_emi_coloumn">
                                                <p>{transaction.transactionDetails}</p>
                                            </div>
                                            <div className="col-sm-3 convert_to_emi_coloumn">
                                                <p><MdOutlineCurrencyRupee />{transaction.transactionAmount}</p>
                                            </div>
                                            <div className="col-sm-2 convert_to_emi_coloumn">
                                                <input type="checkbox" onChange={() => handleCheckboxChange(index)} />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                    {checkedTransactions.includes(true) && ( 
                        <div className="mt-3 d-flex align-items-center justify-content-end">
                            <p className='mt-3'>Amount to be Converted : <MdOutlineCurrencyRupee />{totalAmountToConvert}</p>
                            <button className="convert_to_emi_button_submit ml-2" onClick={handleConvertToEMIClick}>Convert to EMI</button>
                        </div>
                    )}
                    <div className="mt-3">
                        <button className="convert_to_emi_button_submit">Back</button>
                    </div>
                    <div className="mt-4">
                        <h6>Note :</h6>
                    </div>
                    <div>
                        <ol>
                            <li>EMI amount does not include processing fee. Processing fee will be charged only once at the time of EMI conversion and will reflect in your current Credit Card statement</li>
                            <li>Foreclosure fee will be charged at 3% on the outstanding principal along with next month interest at the time of foreclosure.</li>
                            <li>Goods and Services Tax (GST) will be levied at 18% on fees, interest and other charges.</li>
                            <li>Cash, fuel and jewelry transactions are not eligible for conversion into EMI.</li>
                            <li>Transactions on commercial/ business cards will not be converted into EMI.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EMISubmit;
