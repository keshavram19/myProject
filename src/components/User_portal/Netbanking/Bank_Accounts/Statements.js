import './Accounts.css';
import { IoCaretDownCircleOutline } from "react-icons/io5";
import { FcCalendar } from "react-icons/fc";
import { AiFillPrinter } from "react-icons/ai";

import DatePicker from 'react-datepicker';
import React, { useState, useEffect, useRef } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';
import apiList from '../../../../lib/apiList';
import { format } from 'date-fns';
import { Link, useNavigate } from 'react-router-dom';
import html2pdf from 'html2pdf.js';
import banklogo from '../../../../Images/banklogo.png';

const allTransactionsList = [
    {
        date: '15 Feb 2024',
        narration: 'UPI-BADE NAGARAJU-Q857498653@ybl-YESBOYBLUPI-439140239946-Payment from Phone',
        withdrawl: '20.00',
        deposite: '',
        balance: '1.48'
    },
    {
        date: '14 Feb 2024',
        narration: 'UPI-Mr RAVI TEJA-7032256838@ybl-IDIB000M160-402484923876-Payment to 7032256',
        withdrawl: '10,000.00',
        deposite: '',
        balance: '21.48'
    },
    {
        date: '13 Feb 2024',
        narration: 'UPI-PRATHIPATI PAWAN-89788426211@ybl-SBIN0011101-438930608914-Payment from Phone',
        withdrawl: '',
        deposite: '10,000.00',
        balance: '10,021.48'
    },
    {
        date: '12 Feb 2024',
        narration: 'UPI-KANDRA SUNIL-9676350447@ybl-IOBA0003640-402376683037-Payment to 9676350',
        withdrawl: '10,000.00',
        deposite: '',
        balance: '21.48'
    },
    {
        date: '11 Feb 2024',
        narration: 'UPI-Mr SAI TEJA-7032256838@ybl-IDIB000M160-438905881961-Payment from Phone',
        withdrawl: '',
        deposite: '10,000.00',
        balance: '10,021.48'
    },
    {
        date: '10 Feb 2024',
        narration: 'UPI-Southern Power Distr-TELANGANASSPDCL-@ybl-YESBOYBLUPI-438578208304-Payment from Phone',
        withdrawl: '579.00',
        deposite: '',
        balance: '34.43'
    },
    {
        date: '09 Feb 2024',
        narration: 'UPI-S J ENTERPRISES-paytmqr281005050101ohcg3wn30uhq@paytm-PYTM0123456-401914284585-Payment from Phone',
        withdrawl: '30.00',
        deposite: '',
        balance: '613.43'
    },
    {
        date: '08 Feb 2024',
        narration: 'UPI-FAMOUS CHICKEN CENTER-paytmqr1r7sb4s8ks@paytm-PYTM0123456-401897267622-Payment from Phone',
        withdrawl: '45.00',
        deposite: '',
        balance: '643.43'
    }
];

const Statements = () => {
    
    const [savingsAccNumber, setAccountNumber] = useState('');
    const [accountType, setAccountType] = useState('');
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const [transactionType, setTransactionType] = useState('');
    const [perPageTransactions, setPerPageTransactions] = useState('');
    const [accountTypeDetails, setAccountTypeDetails] = useState();
    const [viewTransStatement, setViewTransStatement] = useState();
    const [formattedFromDate, setFormattedFromDate] = useState(null);
    const [formattedToDate, setFormattedToDate] = useState(null);

    // let navigate = useNavigate();
    // useEffect(() => {
    //     let logintoken = sessionStorage.getItem('loginToken')
    //     if(!logintoken){
    //         navigate('/netbanking-personal-login')
    //     }
    // });

    const navigate = useNavigate();
    const isTokenExpired = () => {
        const expirationTime = sessionStorage.getItem("expireTime");
        return expirationTime && new Date().getTime() > parseInt(expirationTime, 10);
    };
    useEffect(() => {
        if (isTokenExpired()) {
            sessionStorage.clear();
            sessionStorage.removeItem('loginToken')
            navigate('/netbanking-personal-login');
        }
    }, [navigate]);


    const handleStartDateChange = (date) => {
        setFromDate(date);
        if (toDate && toDate < date) {
            setToDate(null);
        }
        const fromFormatted = format(date, 'dd MMM yyyy');
        setFormattedFromDate(fromFormatted)
    };
    const handleEndDateChange = (date) => {
        if (!fromDate) {
            setFromDate(date);
        } else {
            setToDate(date);
        }
        const toFormatted = format(date, 'dd MMM yyyy');
        setFormattedToDate(toFormatted)
    };

    const handleAccountNumber = (event) => {
        setAccountNumber(event.target.value)
    };

    const handleAccountType = (event) => {
        setAccountType(event.target.value)
    };

    const handleTransactionType = (event) => {
        setTransactionType(event.target.value)
    };

    const handlePerPageTransactions = (event) => {
        setPerPageTransactions(event.target.value)
    };

    useEffect(() => {
        getAccountTypeDetails()
    }, []);
    let accountNumber = 123456789;
    const getAccountTypeDetails = async () => {
        const options = {
            method: 'GET'
        };
        const response = await fetch(`${apiList.customerAccountDetails}${accountNumber}`, options);
        const data = await response.json()
        setAccountTypeDetails(data.details)
    };

    const handleTransStatement = () => {
        if (viewTransStatement === 'true') {
            setViewTransStatement('false')
        }
        else {
            setViewTransStatement('true')
        }
    };


    // const filteredTransactions = allTransactionsList.filter((transaction) => {
    //     const transactionDate = new Date(transaction.date);

    //     if(fromDate && toDate){
    //         const from = new Date(fromDate);
    //         const to = new Date(toDate);
    //         return transactionDate >= from && transactionDate <= to;
    //     }
    //     else if(fromDate){
    //         const from = new Date(fromDate);
    //         return transactionDate >= from;
    //     }
    //     else if(toDate){
    //         const to = new Date(toDate);
    //         return transactionDate <= to;
    //     } 
    // });

    const isFilterSelected = fromDate || toDate || transactionType;
    const filteredTransactions = isFilterSelected ? allTransactionsList.filter((transaction) => {
        const transactionDate = new Date(transaction.date);

        // Filteration of fromDate and toDate
        if (fromDate && toDate) {
            const from = new Date(fromDate);
            const to = new Date(toDate);
            if (transactionDate < from || transactionDate > to) {
                return false;
            }
        }
        else if (fromDate) {
            const from = new Date(fromDate);
            if (transactionDate < from) {
                return false;
            }
        }
        else if (toDate) {
            const to = new Date(toDate);
            if (transactionDate > to) {
                return false;
            }
        }

        // Filteration of Transaction Type
        if (transactionType === 'Only Withdrawals' && transaction.withdrawl === '') {
            return false;
        }
        else if (transactionType === 'Only Deposits' && transaction.deposite === '') {
            return false;
        }
        return true;
    }) : [];

    let transactionRef = useRef();
    const handleDownloadTransactions = () => {
        const options = {
            margin: 10,
            filename: 'transactions.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 }
        };

        const bankLogo = `
            <div class='statements_bank_logo_container'>
                <div>
                    <img src='../../../../Images/banklogo.png' class='statements_bank_logo'>
                </div>
            </div>    
        `;

        const customerInfo = `
            <div class='customer_info_container'>
                <div class='customer_account_info'>
                    <div class='customer_details_heading'>Account Name:</div>
                    <div>${accountTypeDetails.accountHolderName}</div>
                </div>

                <div class='customer_account_info'>
                    <div class='customer_details_heading'>Address: </div>
                    <div></div>
                </div>

                <div class='customer_account_info'>
                    <div class='customer_details_heading'>Date: </div>
                    <div>21 Feb 2024</div>
                </div>

                <div class='customer_account_info'>
                    <div class='customer_details_heading'>Account Number: </div>
                    <div>${accountTypeDetails.userAccountNumber}</div>
                </div>
            
                <div class='customer_account_info'>
                    <div class='customer_details_heading'>Account Type: </div>
                    <div>${accountTypeDetails.userAccountType}</div>
                </div>

                <div class='customer_account_info'>
                    <div class='customer_details_heading'>Branch: </div>
                    <div>${accountTypeDetails.bankBranchName}</div>
                </div>

                <div class='customer_account_info'>
                    <div class='customer_details_heading'>CIF No: </div>
                    <div>90132177309</div>
                </div>

                <div class='customer_account_info'>
                    <div class='customer_details_heading'>IFS Code: </div>
                    <div>${accountTypeDetails.bankBranchIfscCode}</div>
                </div>
            
                <div class='customer_account_info'>
                    <div class='customer_details_heading'>MICR Code: </div>
                    <div>520002682</div>
                </div>
                
                <div class='customer_account_info'>
                    <div class='customer_details_heading'>Nomination Registered: </div>
                    <div>Yes</div>
                </div>

                <div class='customer_account_info'>
                    <div class='customer_details_heading'>Balance: </div>
                    <div>INR ${accountTypeDetails.userAccountBalance}</div>
                </div>

                <div class='customer_account_info'>
                    <div class='customer_details_heading'>Transaction Type: </div>
                    <div>${transactionType}</div>
                </div>

                <div class='customer_account_info'>
                    <div class='customer_details_heading'>Search for: </div>
                    <div>${formattedFromDate} to ${formattedToDate}</div>
                </div>
            </div>
        `;

        const footerInfo = `
            <div class='footer_info'>
                <div class='statement'>
                    Please do not share your ATM, Debit/Credit card number, PIN and OTP with anyone over mail, SMS, phone call
                    or any other media. Bank never ask for such information.
                </div>
                <div>
                    *** This is computer generated statement and does not require a signature.
                </div>
            </div>
        `;
        const transactionTableHTML = transactionRef.current.innerHTML;
        const combinedHTML = `
            <div>
                ${bankLogo}
                ${customerInfo}
                ${transactionTableHTML}
                ${footerInfo}
            </div>
        `;
        html2pdf().from(combinedHTML).set(options).save();
    }


    return (
        <div className='container-fluid' style={{ marginTop: "90px" }}>
            <div className='row'>
                <div className='col-3'>
                    <BankaccountSidebar />
                </div>
                <div className='col-9'>
                    <div className='savings_acct_statement_heading'>
                        Current & Previous Months Account Statements:
                    </div>
                    <div className='acct_statements_months_cont' >
                        <div className='acct_type_cont'>
                            <div className='acct_type_text'>Account Type:</div>
                            <div className='d-flex align-items-center'>
                                <select className='form-control statement_select_format' onChange={handleAccountType}>
                                    <option hidden> Select Account Type </option>
                                    <option value='Savings'>Savings</option>
                                    <option value='Current'>Current</option>
                                </select>
                                <IoCaretDownCircleOutline className='statement_acct_type_icon' />
                            </div>
                        </div>
                        {accountTypeDetails &&
                            <div className='acct_num_cont'>
                                <div className='acct_num_text'>Account Number:</div>
                                <div className='d-flex align-items-center'>
                                    <select className='form-control statement_select_format'
                                        disabled={accountType === 'Current'} onChange={handleAccountNumber}>
                                        <option hidden>Select Account Number</option>
                                        <option>{accountTypeDetails.userAccountNumber}</option>
                                    </select>
                                    <IoCaretDownCircleOutline className='statement_acct_type_icon' />
                                </div>
                            </div>
                        }
                        <div className='mini_statement_cont'>
                            <div class="d-flex align-items-center">
                                <div>
                                    <input type='radio' id='ministate' className='ministatement_radio_btn'
                                        disabled={accountType === 'Current'} name='radioBtn' value='1'>
                                    </input>
                                </div>
                                <div>
                                    <label htmlFor='ministate'>
                                        Mini Statement
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex period_cont'>
                            <div className='d-flex align-items-center period_data_cont'>
                                <div>
                                    <input type='radio' id='period' className='period_radio_btn'
                                        disabled={accountType === 'Current'} name='radioBtn' value='2'>
                                    </input>
                                </div>
                                <div>
                                    <label htmlFor='period'>Select Period</label>
                                </div>
                            </div>
                            <div>
                                <div className='mb-2 d-flex align-items-center'>
                                    <div className='period_from_to'>From:</div>
                                    <div className='d-flex align-items-center'>
                                        <DatePicker

                                            selected={fromDate} onChange={handleStartDateChange}
                                            className='from_date_period' disabled={accountType === 'Current'}
                                            selectsStart dateFormat="dd MMM yyyy" fromDate={fromDate} toDate={toDate}
                                        />
                                        <FcCalendar className='calender_icon' />
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <div className='period_from_to'>To:</div>
                                    <div className='d-flex align-items-center'>
                                        <DatePicker

                                            selected={toDate} dateFormat="dd MMM yyyy" onChange={handleEndDateChange}
                                            disabled={accountType === 'Current'} selectsEnd fromDate={fromDate}
                                            toDate={toDate} minDate={fromDate} className='from_date_period'>

                                        </DatePicker>
                                        <FcCalendar className='calender_icon' />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='show_transactions_cont'>
                            <div className='show_transactions_text'>Show Transactions:</div>
                            <div className='show_all_transa'>
                                <select className='form-control statement_select_format'
                                    disabled={accountType === 'Current'} onChange={handleTransactionType}>
                                    <option>All Transactions</option>
                                    <option>Only Withdrawals</option>
                                    <option>Only Deposits</option>
                                </select>
                                <IoCaretDownCircleOutline className={`all_trans_icon`} />
                            </div>

                            <div className='per_page_tarns'>
                                <div>Page</div>
                                <div>
                                    <select className='form-control statement_select_format'
                                        disabled={accountType === 'Current'} onChange={handlePerPageTransactions}>
                                        <option>10</option>
                                        <option>20</option>
                                        <option>30</option>
                                        <option>40</option>
                                    </select>
                                </div>
                                <div> Transactions</div>
                                <div>
                                    <IoCaretDownCircleOutline className='page_trans_icon' />
                                </div>
                            </div>
                        </div>
                        <div className='transactions_view_btn_cont'>
                            <button className='transactions_view_btn' type='button' onClick={handleTransStatement}>
                                {viewTransStatement === 'true' ? 'Hide' : 'View'}
                            </button>
                        </div>
                    </div>
                    {
                        viewTransStatement === 'true' ?
                            (<div className='my-5'>
                                <div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='savings_acc_statement_cont_heading'>
                                            View/Download Account Statement
                                        </div>
                                        <div className='d-flex'>
                                            <div><AiFillPrinter className='acct_statement_printer_icon' /></div>
                                            <div className='acct_statement_printer_text'>Print This Page</div>
                                        </div>
                                    </div>
                                    <div className='d-flex statement_savings_acct_num_cont'>
                                        <div className='statement_savings_acct_num'>Savings Account No: </div>
                                        {accountTypeDetails &&
                                            <div className='statement_savings_acct_branch'>
                                                {accountTypeDetails.userAccountNumber}, {accountTypeDetails.bankBranchName}
                                            </div>
                                        }
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex align-items-center' style={{ fontSize: '15px' }}>
                                            <div className='mr-2'>Period: </div>
                                            <div className='mr-2'>{formattedFromDate} to {formattedToDate}</div>
                                            <div>
                                                <Link>
                                                    Select Another Account / Period
                                                </Link>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='trans_statement_pages'>Page 1 of 1</div>
                                        </div>
                                    </div>
                                </div>

                                <div className='d-flex justify-content-end'>
                                    <div className='tran_statement_closing_bal'>Closing Balance:</div>
                                    {accountTypeDetails &&
                                        <div className='tran_statement_balance'>
                                            INR {accountTypeDetails.userAccountBalance}
                                        </div>
                                    }
                                </div>

                                <div className='my-3' ref={transactionRef}>
                                    <table className='table table-bordered'>
                                        <thead className='tran_statement_table_header'>
                                            <tr>
                                                <th>Date</th>
                                                <th>Narration</th>
                                                <th>Withdrawal</th>
                                                <th>Deposit</th>
                                                <th>Balance</th>
                                            </tr>
                                        </thead>
                                        {isFilterSelected && (
                                            <tbody className='tran_statement_table_body'>
                                                {filteredTransactions.map((transaction, index) => (
                                                    <tr key={index}>
                                                        <td>{transaction.date}</td>
                                                        <td>{transaction.narration}</td>
                                                        <td>{transaction.withdrawl}</td>
                                                        <td>{transaction.deposite}</td>
                                                        <td>{transaction.balance}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        )}
                                    </table>
                                </div>
                                {/* <div className='d-flex align-items-center my-2'>
                                    <div className='tran_statement_format'>Select Format:</div>
                                    <div>
                                        <select className='form-control statement_select_format'>
                                            <option>PDF</option>
                                            <option>Word</option>
                                        </select>
                                    </div>
                                </div> */}
                                <div>
                                    <button type='button' className='statement_download_btn'
                                        onClick={handleDownloadTransactions}>
                                        Download
                                    </button>
                                </div>
                            </div>)
                            : ''
                    }


                    <div>
                        <div className='savings_acct_statement_note'>Notes:</div>
                        <ul className=''>
                            <li className='savings_acct_statement_note_points'>
                                Transactions for the current and previous months only can be viewed or downloaded through this option.
                            </li>
                            <li className='savings_acct_statement_note_points'>
                                To downloaded statements prior to last month kindly use the Account statement upto 5 years - <a className='savings-acct-statement-note-points-atag' href='#'>click here</a>
                            </li>
                            <li className='savings_acct_statement_note_points'>
                                For an account statement less than or equal to 6 months, you can download a maximum of 2000 transactions at a time.
                                If the transactions are more than that, you can download the statement in parts by adjusting the date range.
                            </li>
                            <li className='savings_acct_statement_note_points'>
                                Please click on 'Select Period' option to save and download your account statement.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
};
export default Statements;