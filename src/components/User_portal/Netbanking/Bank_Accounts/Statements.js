import './Accounts.css';
import { IoCaretDownCircleOutline } from "react-icons/io5";
import { FcCalendar } from "react-icons/fc";

import DatePicker from 'react-datepicker';
import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

const Statements = () => {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    return (
        <div className='container-fluid'>
            <div className='savings_acct_statement_heading'>
                Current & Previous Months Account Statements:
            </div>
            <div className='acct_statements_months_cont'>
                <div className='acct_type_cont'>
                    <div className='acct_type_text'>Account Type:</div>
                    <div>
                        <select required className='acct_type_drop_down_list'>
                            <option> Select Account Type </option>
                            <option value='Savings'>Savings</option>
                            <option value='Current'>Current</option>
                        </select>
                    </div>
                </div>
                <div className='acct_num_cont'>
                    <div className='acct_num_text'>Account Number:</div>
                    <div>
                        <select required className='acct_type_drop_down_list'>
                            <option>Select Account Number</option>
                            <option>XXXXXXX2024</option>
                            <option>XXXXXXX1234</option>
                            <option>XXXXXXX0112</option>
                        </select>
                    </div>
                </div>
                <div className='mini_statement_cont'>
                    <div class="d-flex align-items-center">
                       <div>
                            <input type='radio' id='ministate' className='ministatement_radio_btn'></input>
                        </div>
                       <div>
                            <label htmlFor='ministate'>Mini Statement</label>
                        </div>
                    </div>
                </div>
                <div className='d-flex period_cont'>
                    <div className='d-flex align-items-center period_data_cont'>
                        <div>
                            <input type='radio' id='period' className='period_radio_btn'></input>
                        </div>
                        <div>
                            <label htmlFor='period'>Select Period</label>
                        </div> 
                    </div>
                    <div>
                        <div className='mb-2 d-flex align-items-center'>
                            <label className='period_from_to'>From:</label>
                            <div className='d-flex align-items-center'>
                                <DatePicker selected={startDate} 
                                    onChange={(date) => setStartDate(date)} className='from_date_period'>
                                    
                                </DatePicker>
                                <FcCalendar className='calender_icon'/>
                            </div>
                        </div>
                        <div className='d-flex align-items-center'>
                            <label className='period_from_to'>To:</label>
                            <div className='d-flex align-items-center'>
                                <DatePicker selected={endDate} 
                                    onChange={(date) => setEndDate(date)} className='from_date_period'>
                                    
                                </DatePicker>
                                <FcCalendar className='calender_icon'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='show_transactions_cont'>
                    <div className='show_transactions_text'>Show Transactions:</div>
                    <div className='show_all_transa'>All Transactions <IoCaretDownCircleOutline className='all_trans_icon'/></div>
                    <div>20 Transactions <IoCaretDownCircleOutline className='all_trans_icon'/></div>
                </div>
                <div className='transactions_view_btn_cont'>
                    <button className='transactions_view_btn'>View</button>
                </div>
            </div>

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
    )
};
export default Statements;