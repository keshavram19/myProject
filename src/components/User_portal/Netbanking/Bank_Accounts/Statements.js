import './Accounts.css';
import { IoCaretDownCircleOutline } from "react-icons/io5";
import { FcCalendar } from "react-icons/fc";
import { AiFillPrinter } from "react-icons/ai";

import DatePicker from 'react-datepicker';
import React, { useState, useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';

const allTransactionsList = [
    {
        date: '25 Jan 2024',
        narration: 'UPI-BADE NAGARAJU-Q857498653@ybl-YESBOYBLUPI-439140239946-Payment from Phone',
        withdrawl: '20.00',
        deposite: '',
        balance: '1.48'
    },
    {
        date: '24 Jan 2024',
        narration: 'UPI-Mr RAVI TEJA-7032256838@ybl-IDIB000M160-402484923876-Payment to 7032256',
        withdrawl: '10,000.00',
        deposite: '',
        balance: '21.48'
    },
    {
        date: '23 Jan 2024',
        narration: 'UPI-PRATHI PAWAN KALYAN-89788426211@ybl-SBIN0011101-438930608914-Payment from Phone',
        withdrawl: '',
        deposite: '10,000.00',
        balance: '10,021.48'
    },
    {
        date: '21 Jan 2024',
        narration: 'UPI-KANDRA SUNIL-9676350447@ybl-IOBA0003640-402376683037-Payment to 9676350',
        withdrawl: '10,000.00',
        deposite: '',
        balance: '21.48'
    },
    {
        date: '20 Jan 2024',
        narration: 'UPI-Mr SAI TEJA-7032256838@ybl-IDIB000M160-438905881961-Payment from Phone',
        withdrawl: '',
        deposite: '10,000.00',
        balance: '10,021.48'
    },
    {
        date: '19 Jan 2024',
        narration: 'UPI-Southern Power Distr-TELANGANASSPDCL-@ybl-YESBOYBLUPI-438578208304-Payment from Phone',
        withdrawl: '579.00',
        deposite: '',
        balance: '34.43'
    },
    {
        date: '18 Jan 2024',
        narration: 'UPI-S J ENTERPRISES-paytmqr281005050101ohcg3wn30uhq@paytm-PYTM0123456-401914284585-Payment from Phone',
        withdrawl: '30.00',
        deposite: '',
        balance: '613.43'
    },
    {
        date: '18 Jan 2024',
        narration: 'UPI-FAMOUS CHICKEN CENTER-paytmqr1r7sb4s8ks@paytm-PYTM0123456-401897267622-Payment from Phone',
        withdrawl: '45.00',
        deposite: '',
        balance: '643.43'
    }
];

const Statements = () => {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleStartDateChange = (date) => {
        setStartDate(date);
        if (endDate && endDate < date) {
            setEndDate(null);
        }
    };

    const handleEndDateChange = (date) => {
        if (!startDate) {
            setStartDate(date);
        } else {
            setEndDate(date);
        }
    };
    console.log(startDate);
    console.log(endDate);


    const [accountType, setAccountType] = useState('')
    const handleAccountType = (event) => {
        setAccountType(event.target.value)
    };

    useEffect(() => {
        getAccountTypeDetails()
    }, []);
    let accountNumber = 123456789;
    const [accountTypeDetails, setAccountTypeDetails] = useState()
    const getAccountTypeDetails = async () => {
        const url = `http://localhost:4444/api/userDetails/${accountNumber}`;
        const options = {
            method: 'GET'
        };
        const response = await fetch(url, options);
        const data = await response.json()
        setAccountTypeDetails(data.details)
    };

    const [viewTransStatement, setViewTransStatement] = useState()
    const handleTransStatement = () => {
        if (viewTransStatement === 'true') {
            setViewTransStatement('false')
        }
        else {
            setViewTransStatement('true')
        }
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
                            <div>
                                <select required className='acct_type_drop_down_list' onChange={handleAccountType}>
                                    <option hidden> Select Account Type </option>
                                    <option value='Savings'>Savings</option>
                                    <option value='Current'>Current</option>
                                </select>
                            </div>
                        </div>
                        {accountTypeDetails &&
                            <div className='acct_num_cont'>
                                <div className='acct_num_text'>Account Number:</div>
                                <div>
                                    <select required className='acct_type_drop_down_list' disabled={accountType === 'Current'}>
                                        <option hidden>Select Account Number</option>
                                        <option>{accountTypeDetails.userAccountNumber}</option>
                                    </select>
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
                                    <label htmlFor='ministate'>Mini Statement</label>
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
                                    <label className='period_from_to'>From:</label>
                                    <div className='d-flex align-items-center'>
                                        <DatePicker
                                            selected={startDate} onChange={handleStartDateChange}
                                            className='from_date_period' disabled={accountType === 'Current'}
                                            selectsStart dateFormat="dd MMM yyyy" startDate={startDate} endDate={endDate}
                                        />
                                        <FcCalendar className='calender_icon' />
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <label className='period_from_to'>To:</label>
                                    <div className='d-flex align-items-center'>
                                        <DatePicker selected={endDate} dateFormat="dd MMM yyyy" onChange={handleEndDateChange} className='from_date_period'
                                            disabled={accountType === 'Current'} selectsEnd startDate={startDate}
                                            endDate={endDate} minDate={startDate}>
                                        </DatePicker>
                                        <FcCalendar className='calender_icon' />
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                        <div className='show_transactions_cont'>
                            <div className='show_transactions_text'>Show Transactions:</div>
                            <div className='show_all_transa'>
                                <select className='form-control'>
                                    <option>All Transactions</option>
                                    <option>Only Withdrawals</option>
                                    <option>Only Deposits</option>
                                </select>
                                <IoCaretDownCircleOutline className={`all_trans_icon`} />
                            </div>

                            <div className='per_page_tarns'>
                                <div>Per Page</div>

                                <select className='form-control'>
                                    <option>10</option>
                                    <option>20</option>
                                    <option>30</option>
                                    <option>40</option>
                                </select>

                                <div> Transactions</div>
                                <div>
                                    <IoCaretDownCircleOutline className='all_trans_icon' />
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
                            (<div>
                                <div>
                                    <div className='d-flex justify-content-between'>
                                        <div>View / Download Account Statement</div>
                                        <div className='d-flex'>
                                            <div><AiFillPrinter /></div>
                                            <div>Print This Page</div>
                                        </div>
                                    </div>
                                    <div className='d-flex'>
                                        <div>Savings Account No: </div>
                                        {accountTypeDetails &&
                                            <div>
                                                {accountTypeDetails.userAccountNumber}, {accountTypeDetails.bankBranchName}
                                            </div>
                                        }
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex'>
                                            <div>Period: </div>
                                            <div>Select Another Account / Period</div>
                                        </div>
                                        <div>
                                            <div>Page 1 of 1</div>
                                        </div>
                                    </div>
                                </div>
                                {accountTypeDetails &&
                                    <div className='d-flex justify-content-end'>
                                        Closing Balance : INR {accountTypeDetails.userAccountBalance}
                                    </div>
                                }
                                <div>
                                    <table className='table table-bordered'>
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Narration</th>
                                                <th>Withdrawal</th>
                                                <th>Deposit</th>
                                                <th>Balance</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                allTransactionsList.map((eachTrans) => (
                                                    <tr>
                                                        <td>{eachTrans.date}</td>
                                                        <td>{eachTrans.narration}</td>
                                                        <td>{eachTrans.withdrawl}</td>
                                                        <td>{eachTrans.deposite}</td>
                                                        <td>{eachTrans.balance}</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>)
                            : ''
                    }


                    <div>
                        <div className='savings_acct_statement_note'>Note:</div>
                        <ul className='ml-4'>
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