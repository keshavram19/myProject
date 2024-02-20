import React, { useState, useEffect } from 'react';
import axios from 'axios';
import apiList from '../../../../lib/apiList';
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { Link, useLocation, useNavigate } from 'react-router-dom';


const ConvertToEMISubmit = () => {
    const [userDetails, setUserDetails] = useState([]);
    const [selectedTransactions, setSelectedTransactions] = useState([]);
    const [numberOfTransactionsSelected, setNumberOfTransactionsSelected] = useState(0);
    const [emiTenure, setEmiTenure] = useState('');
    const [emis, setEmis] = useState([]);
    const [totalProcessingFee, setTotalProcessingFee] = useState(0);
    const [totalEMIAmount, setTotalEMIAmount] = useState(0);
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const accountNumber = 1124563456;


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiList.customerAccountDetails}${accountNumber}`);
                const userDetailsData = response.data.details;

                if (Array.isArray(userDetailsData)) {
                    setUserDetails(userDetailsData)
                } else if (typeof userDetailsData === 'object') {
                    setUserDetails([userDetailsData]);
                } else {
                    console.error('Invalid user details format:', userDetailsData);
                }
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };
        fetchData();
    }, []);


    useEffect(() => {
        if (location.state && location.state.selectedTransactions && emiTenure === '') {
            setSelectedTransactions(location.state.selectedTransactions);
            setNumberOfTransactionsSelected(location.state.numberOfTransactionsSelected);
            initializeEMIs(location.state.selectedTransactions, emiTenure);
        }
    }, [location.state, emiTenure]);

    useEffect(() => {
        let processingFeeTotal = 0;
        let emiAmountTotal = 0;
        emis.forEach(transaction => {
            processingFeeTotal += transaction.processingFee || 0;
            emiAmountTotal += parseFloat(transaction.emi) || 0;
        });
        setTotalProcessingFee(processingFeeTotal);
        setTotalEMIAmount(emiAmountTotal);
    }, [emis, selectedTransactions]);

    const initializeEMIs = (transactions, tenure) => {
        const calculatedEmis = transactions.map(transaction => {
            const emi = tenure !== '' ? calculateEMI(transaction.transactionAmount, tenure) : '';
             const processingFee = calculateProcessingFee(transaction.transactionAmount);
            return { ...transaction, emi, processingFee };
        });
        setEmis(calculatedEmis);
    };


    const calculateProcessingFee = (amount) => {
        const processingFeePercentage = 0.020;
        const processingFee = amount * processingFeePercentage;
        return processingFee;
    };
    

    const calculateEMI = (amount, tenure) => {
        const monthlyInterestRate = 0.012;
        const numberOfInstallments = parseInt(tenure);
        const principal = parseFloat(amount);
        const numerator = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfInstallments);
        const denominator = Math.pow(1 + monthlyInterestRate, numberOfInstallments) - 1;
        const emi = numerator / denominator;
        return emi.toFixed(2);
    };

    const handleTenureChange = (e) => {
        setEmiTenure(e.target.value);
        updateEMIs(e.target.value);
    };

    const handleCheckboxChange = (e) => {
        setIsCheckboxChecked(e.target.checked);
    };
    

    const updateEMIs = (tenure) => {
        const updatedEmis = selectedTransactions.map(transaction => {
            const emi = calculateEMI(transaction.transactionAmount, tenure);
            const processingFee = calculateProcessingFee(transaction.transactionAmount);
            return { ...transaction, emi, processingFee };
        });
        setEmis(updatedEmis);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const handleConvertToEMI = async () => {
        if (!isCheckboxChecked) return;

        try {
            localStorage.setItem('conversionData', JSON.stringify({
                emiTenure,
                transactions: selectedTransactions,
                emi: selectedTransactions.emi,
                totalProcessingFee,
                totalEMIAmount,
                isChecked: isCheckboxChecked
            }));
            await axios.post(`${apiList.createVerificationCode}`, {
                accountNumber: accountNumber,
                otpMethod: "sms",
            });
            navigate("/user/convert-to-emi-submit-otp");
        } catch (error) {
            console.error('Error during conversion to EMI:', error);
        }
    };

    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.removeItem('conversionData');
        };
    
        window.addEventListener('beforeunload', handleBeforeUnload);
    
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);


    return (
        <div className="container-fluid convert_to_emi_submit_button" style={{ marginTop: "90px" }}>
            <div className="row ">
                <div className="col-sm-12">
                    <div>
                        <h3>Convert To EMI</h3>
                        <hr />
                    </div>
                    <div className="d-flex">
                       {userDetails.length > 0 && (
                            <p>
                               Card No : {(userDetails[0].userCreditCardDetails[0].creditCardNumber)}
                            </p>
                        )}
                    </div>
                    <div className="d-flex">
                        <p>No. of transactions selected for EMI conversion : {numberOfTransactionsSelected} </p>
                    </div>

                    <div>
                        <label>Select EMI Tenure</label>
                        <select className='ml-2' onChange={handleTenureChange}>
                            <option>Please Select</option>
                            <option value="3">3 months</option>
                            <option value="6">6 months</option>
                            <option value="9">9 months</option>
                            <option value="12">12 months</option>
                            <option value="24">24 months</option>
                        </select>
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
                                    <p>Amount</p>
                                </div>
                                <div className="col-sm-2 convert_to_emi_items">
                                    <p>EMI</p>
                                </div>
                            </div>
                            {emis.map((transaction, index) => (
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
                                            <p>{transaction.emi !== '' ? transaction.emi : ''}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='mt-2'>
                    <p>Total Processing Fee : <MdOutlineCurrencyRupee /> {totalProcessingFee.toFixed(2)} </p>
                        <p>Total EMI amount : <MdOutlineCurrencyRupee /> {totalEMIAmount.toFixed(2)}</p>
                    </div>
                    <div className='mt-2 d-flex align-items-center'>
                    <input type='checkbox' onChange={handleCheckboxChange} />
                        <p className='mt-3 ml-1'>I have read <Link to='#'>Terms and Conditions</Link> and I accept the facility available at the discretion of Royal Islamic Bank</p>
                    </div>

                    <div className="mt-3">
                    <button className="convert_to_emi_button_submit" onClick={handleConvertToEMI} disabled={!isCheckboxChecked}>Convert to EMI</button>
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
    )
}

export default ConvertToEMISubmit;
