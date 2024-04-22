import React, { useState, useEffect } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './FundTransfer.css';
import PaymentSidebar from "../Sidebar/PaymentsAndTransferSidebar";
import { useNavigate } from "react-router-dom";
import apiList from "../../../../lib/apiList";

const QuickFundTransfer = () => {
    const [otpMethod, setOtpMethod] = useState('sms');
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState([]);
    const [selectedAccount, setSelectedAccount] = useState('');
    const [selectedTransferType, setSelectedTransferType] = useState('royal');
    const [recentTransactions, setRecentTransactions] = useState([]);
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
                    
                // Format dates in recentTransactions
                const formattedTransactions = data.user.transactions.map(transaction => ({
                    ...transaction,
                    date: new Date(transaction.date).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric'
                    })
                }));
                setRecentTransactions(formattedTransactions);
                    setUserDetails([data.user]);
                } else {
                    console.error('Error fetching user details:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        fetchData();
    }, []);

    const latestTransactions = recentTransactions.slice().reverse();

    const [formData, setFormData] = useState({
        transferType: '',
        transferForm: selectedAccount,
        toAccountNumber: 0,
        confirmAccountNumber: 0,
        payeeName: '',
        amount: 0,
        remarks: 'Please Select',
    });

    const handleTransferTypeChange = (event) => {
        setSelectedTransferType(event.target.value);
    };

    const resetFormData = () => {
        setFormData({
            transferType: '',
            transferForm: selectedAccount,
            toAccountNumber: 0,
            confirmAccountNumber: 0,
            payeeName: '',
            amount: 0,
            remarks: 'Please Select',
        });
    };



    const sendFormDataToServer = async () => {
        try {
            const today = new Date();
            const todayFormatted = today.toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
            });
            
            const transactionsToday = recentTransactions.filter(transaction => transaction.date === todayFormatted);
            
            const totalAmountTransferredToday = transactionsToday.reduce((total, transaction) => total + transaction.withdrawal, 0);

            if (totalAmountTransferredToday >= 100000) {
                const lastTransaction = transactionsToday[transactionsToday.length - 1];
                const lastTransactionTime = new Date(lastTransaction.date);

                const nextTransactionTime = new Date(lastTransactionTime.getTime() + (24 * 60 * 60 * 1000));

                if (today >= nextTransactionTime) {
                    const otpResponse = await axios.post(
                        `${apiList.createVerificationCode}`,
                        {
                            accountNumber: selectedAccount,
                            otpMethod: otpMethod,
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                                'Content-Type': 'application/json',
                            },
                        }
                    );
        
                    toast.success("OTP generated successfully", {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored"
                    });
        
                    navigate('/user/fundtransfer/quickfundtransfer-otp-page', { state: formData });
        
                    resetFormData();
                } else {
                    navigate('/user/fundtransfer/limitexceed');
                }
            } else {
                const otpResponse = await axios.post(
                    `${apiList.createVerificationCode}`,
                    {
                        accountNumber: selectedAccount,
                        otpMethod: otpMethod,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json',
                        },
                    }
                );
    
                toast.success("OTP generated successfully", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored"
                });
    
                navigate('/user/fundtransfer/quickfundtransfer-otp-page', { state: formData });
    
                resetFormData();
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error("An error occurred. Please try again later.", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
        }
    };
    
    
    
    useEffect(() => {
        if (formData.transferType) {
            sendFormDataToServer();
        }
    }, [formData.transferType, formData.toAccountNumber]);
    

    const handleFormSubmit = () => {
        const toAccountNumber = document.getElementById('toAccountNumber').value.trim();
        const confirmAccountNumber = document.getElementById('confirmAccountNumber').value.trim();
        const payeeName = document.getElementById('payeeName').value.trim();
        const amount = document.getElementById('amount').value.trim();
    
        // Check if all required fields are filled
        if (toAccountNumber === '' || confirmAccountNumber === '' || payeeName === '' || amount === '') {
            toast.error("Please fill in all required fields.", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
            return;
        }
    
        if (toAccountNumber !== confirmAccountNumber) {
            toast.error("Error: To Account Number and Confirm Account Number do not match.", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
            return;
        }
    
        const updatedFormData = {
            transferType: document.getElementById('royal').checked
                ? 'To Royal Islamic Bank Account number'
                : 'To Other Bank Account(using IMPS)',
            transferForm: selectedAccount,
            toAccountNumber: toAccountNumber,
            confirmAccountNumber: confirmAccountNumber,
            payeeName: payeeName,
            amount: parseInt(amount, 10), 
            remarks: document.getElementById('remarks').value,
        };
        setFormData(updatedFormData, () => {
            sendFormDataToServer();
        });
    };
    

    const handleAccountChange = (event) => {
        setSelectedAccount(event.target.value);
    };

    return (
        <div className='card-details-container container-fluid' style={{ marginTop: "90px" }}>
            <ToastContainer /> {/* Toast container */}
            <div className='card-details-header'></div>
            <div className='row'>
                <div className="col-3">
                    <PaymentSidebar />
                </div>
                <div className='col-9 p-0 card quickfund_transfer_note'>
                    <h4 className="p-3 bg-secondary text-light mx-0">QuickFundTransfer</h4>
                    <div className="p-3">
                        <div className="quickfund_transfer_code bg-light">
                            <h5 className="mt-3  text-secondary">Enter Transaction Details</h5>
                        </div>
                        <div className="p-3 d-flex ">
                            <div className="sms">
                                <input
                                    type="radio"
                                    id="royal"
                                    value="royal"
                                    checked={selectedTransferType === 'royal'}
                                    onChange={handleTransferTypeChange}
                                />
                                <label htmlFor="royal" className="ml-2 text-secondary"><p>To Royal Islamic Bank Account number</p></label>
                            </div>
                            <div className="Email ml-3">
                                <input
                                    type="radio"
                                    id="other"
                                    value="other"
                                    checked={selectedTransferType === 'other'}
                                    onChange={handleTransferTypeChange}
                                />
                                <label htmlFor="other" className="ml-2 text-secondary"><p>To Other Bank Account(using IMPS)</p></label>
                            </div>
                        </div>

                        <div className="row ">
                            <div className="col-sm-4">
                                <label htmlFor="text" className="d-flex text-secondary">Transaction from<p className="quick_fund_tranfer_p text-danger">*</p></label>
                                <select
                                    className="form-control text-secondary"
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
                                <p className="quick_fund_transfer_paragraph text-danger">Total Available amount is {userDetails.length > 0 && selectedAccount !== '' && (
                                    <p className="ml-1">
                                        {userDetails[0].userAccountBalance}
                                    </p>
                                )}
                                </p>
                            </div>
                            <div className="col-sm-4">
                                <label htmlFor="text" className="d-flex text-secondary">To Account Number <p className="text-danger">*</p></label>
                                <input type="text" className="form-control" id="toAccountNumber" />
                            </div>
                            <div className="col-sm-4">
                                <label htmlFor="text" className="d-flex text-secondary">Confirm Account Number <p className="text-danger">*</p></label>
                                <input type="text" className="form-control" id="confirmAccountNumber" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <label htmlFor="text" className="d-flex text-secondary">Payee Name <p className="text-danger">*</p></label>
                                <input type="text" className="form-control" id="payeeName" />
                            </div>
                            <div className="col-sm-4">
                                <label htmlFor="text" className="d-flex text-secondary">Amount <p className="text-danger">*</p></label>
                                <input type="text" className="form-control" id="amount" />
                            </div>
                            <div className="col-sm-4">
                                <label htmlFor="text" className="d-flex text-secondary">Remarks(optional) <p className="text-danger">*</p></label>
                                <select
                                    name=""
                                    id="remarks"
                                    className="form-control text-secondary"
                                    value={formData.remarks ? { label: formData.remarks, value: formData.remarks } : null}
                                    onChange={(selectedOption) => setFormData((prevFormData) => ({ ...prevFormData, remarks: selectedOption.label }))}
                                >
                                    <option value="Please Select">Please Select</option>
                                    <option value="Gift">Gift</option>
                                    <option value="Donation">Donation</option>
                                    <option value="Family">Family</option>
                                    <option value="Friends">Friends</option>
                                    <option value="Rent">Rent</option>
                                </select>
                            </div>
                        </div>

                        <div className="d-flex mb-3">
                            <button type="submit" className="mt-3 btn btn-outline-secondary " onClick={handleFormSubmit}>Proceed to Pay</button>
                        </div>
                    </div>
                    <hr/>
                    <div className="text-secondary quick_fund_tranfer_notes p-3">
                        <p>Notes:</p>
                        <ol>
                            <li>As per the RBI circular dated Oct 14, 2010, transfer of funds through electronic mode will be executed only on the basis of the account number of the beneficiary provided while initiating the transaction, name will not be considered as a criterion for providing credit. Kindly ensure that you enter the correct beneficiary account number</li>
                            <li>The Funds Transfer limit per transaction is Rs 25,000</li>
                            <li>Royal Islamic Bank is not responsible for
                                <ul>
                                    <li>Funds transferred to any unintended recipient
                                    </li>
                                    <li>Retrieval of funds transferred to any unauthorized recipient
                                    </li>
                                    <li>Charges/commission of any kind levied/charged by the payee's bank </li>
                                </ul>
                            </li>
                            <li>Royal Islamic Bank has the most comprehensive security standards in place to protect your interests. At the same time, we expect you to follow safe practices while using the Internet Banking channel. You are fully responsible for protecting your Internet Banking User ID and Passwords. Royal Islamic Bank will not be liable for any loss that you may incur owing to unauthorized access into your account.</li>
                            <li>In case you are re-trying, please <a href="#">check the status of your previous payment </a> first.</li>
                            <li> Allowed special characters in remarks field are-()^@$&%?- spaces</li>
                        </ol>
                    </div>
                </div>  
            </div>
        </div>
    );
};

export default QuickFundTransfer;
