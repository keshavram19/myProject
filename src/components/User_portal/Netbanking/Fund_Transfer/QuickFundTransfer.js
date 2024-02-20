import React, { useState, useEffect } from "react";
import axios from 'axios';
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
    const accountNumber = 1124563456;

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

    useEffect(() => {
        fetchData();
    }, []);

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
            const response = await fetch(`${apiList.quickFundTransfer}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
               
                console.log('Data saved successfully');
                console.log(userDetails[0].userEmailId);
                console.log(formData.amount);
                const debitNotificationResponse = await axios.post(`${apiList.debitNotification}`, {
                    email: userDetails[0].userEmailId,
                    amountDebited: formData.amount,
                });
                console.log(debitNotificationResponse.data);
                const otpResponse = await axios.post(`${apiList.createVerificationCode}`, {
                    accountNumber: selectedAccount,
                    otpMethod: otpMethod,
                });
                alert("otp generated successfully");
                console.log(otpResponse.data);
                navigate('/user/fundtransfer/quickfundtransfer-otp-page');

                // Reset form data after successful transfer
                resetFormData();

            } else {
                console.error('Error saving data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        if (formData.transferType) {
            sendFormDataToServer();
        }
    }, [formData.transferType, formData.toAccountNumber]);

    const handleFormSubmit = () => {
        const toAccountNumber = parseInt(document.getElementById('toAccountNumber').value, 10);
        const confirmAccountNumber = parseInt(document.getElementById('confirmAccountNumber').value, 10);

        if (toAccountNumber === confirmAccountNumber) {
            const updatedFormData = {
                transferType: document.getElementById('royal').checked
                    ? 'To Royal Islamic Bank Account number'
                    : 'To Other Bank Account(using IMPS)',
                transferForm: selectedAccount,
                toAccountNumber: toAccountNumber,
                confirmAccountNumber: confirmAccountNumber,
                payeeName: document.getElementById('payeeName').value,
                amount: parseInt(document.getElementById('amount').value, 10), 
                remarks: document.getElementById('remarks').value,
            };
            setFormData(updatedFormData);
        } else {
            alert("Error: To Account Number and Confirm Account Number do not match.");
        }
    };

    const handleAccountChange = (event) => {
        setSelectedAccount(event.target.value);
    };

    return (
        <div className='card-details-container container-fluid' style={{ marginTop: "90px" }}>
            <div className='card-details-header'></div>
            <div className='row'>
                <div className="col-3">
                    <PaymentSidebar />
                </div>
                <div className='col-9 p-3 quickfund_transfer_note'>
                    <div className=" quickfund_transfer_node">
                        <h4 className="p-3">QuickFundTransfer</h4>
                    </div>
                    <div className="card p-3">
                        <div className=" quickfund_transfer_code">
                            <h5>Enter Transaction Details</h5>
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
                                <label htmlFor="royal" className="ml-2"><p>To Royal Islamic Bank Account number</p></label>
                            </div>
                            <div className="Email ml-3">
                                <input
                                    type="radio"
                                    id="other"
                                    value="other"
                                    checked={selectedTransferType === 'other'}
                                    onChange={handleTransferTypeChange}
                                />
                                <label htmlFor="other" className="ml-2"><p>To Other Bank Account(using IMPS)</p></label>
                            </div>
                        </div>

                        <div className="row ">
                            <div className="col-sm-4">

                                <label htmlFor="text" className="d-flex">Transaction from<p className="quick_fund_tranfer_p">*</p></label>

//                                 <label htmlFor="text">Transfer form*</label>

                                <select
                                    className="form-control"
                                    value={selectedAccount}
                                    onChange={handleAccountChange}
                                >
                                    <option value="">Select Account Number</option>
                                    {userDetails.map((account, index) => (
                                        <option key={index} value={account.userAccountNumber}>
                                            {account.userAccountNumber}
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

                                <label htmlFor="text" className="d-flex">To Account Number <p className="quick_fund_tranfer_p">*</p></label>
                                <input type="number" className="form-control" id="toAccountNumber" />
                            </div>
                            <div className="col-sm-4">
                                <label htmlFor="text" className="d-flex">Confirm Account Number <p className="quick_fund_tranfer_p">*</p></label>

                                <input type="number" className="form-control" id="confirmAccountNumber" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">

                                <label htmlFor="text" className="d-flex">Payee Name <p className="quick_fund_tranfer_p">*</p></label>
                                <input type="text" className="form-control" id="payeeName" />
                            </div>
                            <div className="col-sm-4">
                                <label htmlFor="text" className="d-flex">Amount <p className="quick_fund_tranfer_p">*</p></label>
                                <input type="text" className="form-control" id="amount" />
                            </div>
                            <div className="col-sm-4">
                                <label htmlFor="text" className="d-flex">Remarks(optional) <p className="quick_fund_tranfer_p">*</p></label>

                                <select
                                    name=""
                                    id="remarks"
                                    className="form-control"
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
                            <button type="button" className="ml-3 mt-3  quickfund_transfer_turn">Back</button>
                            <button type="submit" className="ml-5 mt-3  quickfund_transfer_turn" onClick={handleFormSubmit}>Proceed to Pay</button>
                        </div>
                    </div>
                    <div className="card p-3">
                        <h6>Notes:</h6>
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
