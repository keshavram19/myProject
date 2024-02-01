import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FundTransfer.css';
import { Link } from 'react-router-dom';
import { MdCurrencyRupee } from "react-icons/md";
import { AiFillPrinter } from "react-icons/ai";
import PaymentSidebar from "../Sidebar/PaymentsAndTransferSidebar";

const UpiTransaction = () => {
    const [userDetails, setUserDetails] = useState([]);
    const [selectedAccount, setSelectedAccount] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [viewAccStatement, setViewAccStatement] = useState()

    const accountStatement = () => {
        if (selectedAccount && startDate && endDate) {
            fetchData();
            setViewAccStatement((prevState) => (prevState === 'true' ? 'false' : 'true'));
        } else {
            alert('Please select account and date ranges.')
            console.log('Please select account and date ranges.');
        }
    };

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:4444/api/userDetails/1124563456');
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
        console.log('User Details:', userDetails);

    };

    useEffect(() => {
        if (selectedAccount === '') {
            fetchData();
        }
    }, [selectedAccount]);

    const handleAccountChange = (event) => {
        setSelectedAccount(event.target.value);
    };

    return (
        <div className='card-details-container container-fluid' style={{ marginTop: "90px" }}>

            <div className='row'>
                <div className="col-3">
                    <PaymentSidebar />
                </div>
                <div className='col-9 upi_transaction_date' >

                    <h2>UPI Transaction Status</h2>
                    <div className="card p-2 upi_transaction_node">
                        <h4>Check Status</h4>
                    </div>
                    <div className="card p-3">
                        <div className="row mt-3">

                            <div className="col-sm-3">
                                <label for="card-number">Credit Account Number*</label>
                            </div>
                            <div className="col-sm-3">
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
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-sm-3">
                                <label for="card-number">Transaction dates ranging from*</label>
                            </div>
                            <div className="col-sm-3">
                                <input
                                    type="date"
                                    id="start-date"
                                    className="form-control"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                />
                            </div>
                            <div className="col-sm-1">
                                <p> to* </p>
                            </div>
                            <div className="col-sm-3">
                                <input
                                    type="date"
                                    id="end-date"
                                    className="form-control"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-sm-12 mt-4">

                            <button onClick={accountStatement} className=' upi_transaction_value'>
                                {viewAccStatement === 'true' ? 'Hide' : 'GET Transaction'}
                            </button>
                        </div>
                    </div>

                    {viewAccStatement === 'true' ?
                        <div>
                            <div className='d-flex justify-content-between savings_acct_statement'>
                                <div className='savings_acc_statement_cont_heading'>View/Download Account Statement</div>
                                <div className='d-flex'>
                                    <div><AiFillPrinter className='acct_statement_printer_icon' /></div>
                                    <div className='acct_statement_printer_text'>Print This Page</div>
                                </div>
                            </div>
                            <div>
                                <div><span className='acct_statement_acct_num'>Account Number:</span> {userDetails[0].userAccountNumber}, {userDetails[0].bankBranchName}</div>
                            </div>
                            <div className='d-flex justify-content-end savings_acc_another_acct'>
                                <div>Page 1 of 1</div>
                            </div>
                            <div className='d-flex justify-content-end'>
                                <div className='d-flex align-items-center'>
                                    <span className='savings_acct_mybalnace'>My Balance:</span> <MdCurrencyRupee />{userDetails[0].userAccountBalance}
                                </div>
                            </div>
                            <div className='table table-bordered savings_acct_trans_table'>
                                <thead className='savings_acct_trans_table_header'>
                                    <tr>
                                        <th>Date</th>
                                        <th>Description</th>
                                        <th>Withdrawal</th>
                                        <th>Deposit</th>
                                        <th>Balance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userDetails[0]?.transactions.map((transaction, index) => (
                                        <tr key={index}>
                                            <td>{transaction.date}</td>
                                            <td>{transaction.description}</td>
                                            <td>{transaction.withdrawal}</td>
                                            <td>{transaction.deposit}</td>
                                            <td><MdCurrencyRupee />{transaction.balance}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </div>
                        </div>
                        :
                        ''
                    }

                </div>
            </div>

        </div>

    );
};



export default UpiTransaction;