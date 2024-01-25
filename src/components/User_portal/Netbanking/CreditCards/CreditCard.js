import './Creditcard.css';
import React, { useState } from 'react';

import creditcard from '../../../../Images/creditcard.jpg';
import rupee_1523526 from '../../../../Images/rupee_1523526.png';
import creditcard1 from '../../../../Images/creditcard1.png';
import creditcard2 from '../../../../Images/creditcard2.jpg';

import { RiCheckboxBlankFill } from "react-icons/ri";
import { MdOutlineIndeterminateCheckBox } from "react-icons/md";
import { MdCurrencyRupee } from "react-icons/md";


const CreditCard = () => {

    const [creditLimit, setCreditLimit] = useState(60);
    const handleRangeChange = (event) => {
        setCreditLimit(parseInt(event.target.value, 10));
    };

    return (
        <div className='container-fluid' style={{marginTop:"90px"}}>
            <ul class="nav nav-pills" role="tablist">
                <li class="nav-item w-50">
                    <div class="nav-link active credit_card_tabs_text" data-toggle="pill" href="#viewyourcard">
                        View Your Card
                    </div>
                </li>
                <li class="nav-item w-50">
                    <div class="nav-link credit_card_tabs_text" data-toggle="pill" href="#manageyourcard">
                        Manage Your Card
                    </div>
                </li>
            </ul>
            <div class="tab-content">
                <div id="viewyourcard" class="tab-pane active">
                    <div className='view_your_card_container'>
                        <div className='d-flex mb-2'>
                            <div className='primary_card_text'>Primary Card</div>
                            <div>
                                <img src={creditcard} alt='primary card' className='primary_credit_card'></img>
                            </div>
                        </div>
                        <div className='my-3'>
                            <div className='all_credit_cards_text'>All Credit Cards</div>
                            <div className='all_credit_cards_container'>
                                <div id='demo' class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner d-flex justify-content-center">
                                        <div class="carousel-item active">
                                            <img className='all_credit_cards_slider' alt='credit cards'
                                                src={creditcard1}>
                                            </img>
                                        </div>
                                        <div class="carousel-item">
                                            <img className='all_credit_cards_slider'
                                                src={creditcard2} alt="Chicago">
                                            </img>
                                        </div>
                                        <div class="carousel-item">
                                            <img className='all_credit_cards_slider'
                                                src={creditcard} alt="New York">

                                            </img>
                                        </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#demo" data-slide="prev">
                                        <span class="carousel-control-prev-icon"></span>
                                    </a>
                                    <a class="carousel-control-next" href="#demo" data-slide="next">
                                        <span class="carousel-control-next-icon"></span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='d-flex justify-content-between'>
                                <div className='credit_card_limit_text'>Credit Limit <MdCurrencyRupee />25,000</div>
                                <div className='credit_card_limit_works_text'>How Credit Limit Works?</div>
                            </div>

                            <div class="progress my-2">
                                <div class="progress-bar bg-success" style={{ width: '70%' }}></div>
                            </div>

                            <div className='d-flex'>
                                <div className='view_your_card_amount_cont'>
                                    <div className='d-flex'>
                                        <div>
                                            <RiCheckboxBlankFill className='total_amount_due_icon' />
                                        </div>
                                        <div className='credit_card_progress_text'>
                                            <div>Total Amount Due</div>
                                            <div><MdCurrencyRupee />0.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='view_your_card_amount_cont'>
                                    <div className='d-flex'>
                                        <div>
                                            <RiCheckboxBlankFill className='current_outstanding_icon' />
                                        </div>
                                        <div className='credit_card_progress_text'>
                                            <div>Current Outstanding</div>
                                            <div><MdCurrencyRupee />17,281.25 cr</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='view_your_card_amount_cont'>
                                    <div className='d-flex'>
                                        <div>
                                            <RiCheckboxBlankFill className='available_credit_limit_icon' />
                                        </div>
                                        <div className='credit_card_progress_text'>
                                            <div>Available Credit Limit</div>
                                            <div><MdCurrencyRupee />1,77,669.93</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='d-flex my-3'>
                                <div className='mr-3'>
                                    <button type='button' className='credit_card_pay_bill_btn'>
                                        Pay Bill
                                    </button>
                                </div>
                                <div>
                                    <div className='credit_card_due_date'>(Due Date: 30-01-2024)</div>
                                    <div>Pay instantly through Royal Islamic Bank! Payments done from other platforms may take up to 72 hours to reflect.</div>
                                </div>
                            </div>

                            <div className='d-flex justify-content-around my-2'>
                                <div>
                                    <button type='button' className='credit_card_details_btns'>
                                        Current Statement
                                    </button>
                                </div>
                                <div>
                                    <button type='button' className='credit_card_details_btns'>
                                        EMI Eligible
                                    </button>
                                </div>
                                <div>
                                    <button type='button' className='credit_card_details_btns'>
                                        View CVV
                                    </button>
                                </div>
                                <div>
                                    <button type='button' className='credit_card_details_btns'>
                                        Last Statement
                                    </button>
                                </div>
                                <div>
                                    <button type='button' className='credit_card_details_btns'>
                                        EMI Existing
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='credit_card_manage_subscr_cont'>
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex'>
                                <div className='hand_holding_rupee_images_cont'>
                                    <img className='hand_holding_rupee_images'
                                        src={rupee_1523526} alt='hand holding rupee'>

                                    </img>
                                </div>
                                <div>
                                    <div className='view_card_manage_subscrip_headings'>MANAGE SUBSCRIPTION</div>
                                    <div>Manage standing instruction and recurring charges</div>
                                </div>
                            </div>
                            <div>
                                <button type='button' className='manage_subscript_btns'>
                                    Manage Subscriptions
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='credit_card_manage_subscr_cont'>
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex'>
                                <div className='hand_holding_rupee_images_cont'>
                                    <img className='hand_holding_rupee_images'
                                        src={rupee_1523526} alt='hand holding rupee'>
                                    </img>
                                </div>
                                <div>
                                    <div className='view_card_manage_subscrip_headings'>MANAGE TOKENS</div>
                                    <div>Manage your Royal Islamic bank credit card tokens</div>
                                </div>
                            </div>
                            <div>
                                <button type='button' className='manage_subscript_btns'>
                                    Manage Tokens
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='credit_card_manage_subscr_cont'>
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex'>
                                <div className='hand_holding_rupee_images_cont'>
                                    <img className='hand_holding_rupee_images'
                                        src={rupee_1523526} alt='hand holding rupee'>
                                    </img>
                                </div>
                                <div>
                                    <div className='view_card_manage_subscrip_headings'>CREDIT CARD</div>
                                    <div>Get a feature-packed Royal Islamic bank credit card on the fly</div>
                                </div>
                            </div>
                            <div>
                                <button type='button' className='manage_subscript_btns'>
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="manageyourcard" class="tab-pane fade">
                    <div className='manage_your_card_container'>
                        <div className='manage_credit_limits_header'>
                            <div className='d-flex align-items-center ml-4'>
                                <MdOutlineIndeterminateCheckBox className='manage_credit_limits_icon' />
                                <div className='manage_credit_limits_heading'>Manage Credit Card Limits</div>
                            </div>
                        </div>

                        <div className='manage_your_card_inner_cont'>
                            <div>
                                <div>Select Credit Card Number:</div>
                                <div>
                                    <select required className='credit_cards_lists'>
                                        <option value=''>1234567812345678</option>
                                        <option value=''>1234567898765432</option>
                                        <option value=''>4000123456789010</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <div className='d-flex justify-content-between my-3 existing_credit_card_limit'>
                                    <div>Existing Credit Limit: 15000</div>
                                    <div>Maximum Available Credit Limit: 10000</div>
                                </div>
                                <div>
                                    <div>Select your desired credit limit</div>
                                    <div className="form-group">
                                        <label htmlFor="formControlRange">Credit Limit (INR)</label>
                                        <input
                                            type="range"
                                            className="form-control-range"
                                            id="formControlRange"
                                            value={creditLimit}
                                            onChange={handleRangeChange}
                                        />
                                        <div>Selected Credit Limit: {creditLimit * 100} INR</div>
                                        <div>
                                            <button type='button' className='credit_limit_generate_otp_btn'>
                                                Generate OTP
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='manage_credit_card_usage_cont'>
                        <div className='manage_credit_limits_header'>
                            <div className='d-flex align-items-center ml-4'>
                                <MdOutlineIndeterminateCheckBox className='manage_credit_limits_icon' />
                                <div className='manage_credit_limits_heading'>Manage Credit Card Usage</div>
                            </div>
                        </div>
                        <div className='manage_card_usage_container'>
                            <div>
                                <div>Select Credit Card Number:</div>
                                <div>
                                    <select required className='credit_cards_lists'>
                                        <option value=''>1234567812345678</option>
                                        <option value=''>1234567898765432</option>
                                        <option value=''>4000123456789010</option>
                                    </select>
                                </div>
                            </div>
                            <div className='my-3'>
                                <ul class="nav nav-pills" role="tablist">
                                    <li class="nav-item card_usage_tabs_cont">
                                        <div class="nav-link active card_usage_tabs_text" data-toggle="pill" href="#cardusage">
                                            Domestic Card Usage
                                        </div>
                                    </li>
                                    <li class="nav-item card_usage_tabs_cont">
                                        <div class="nav-link card_usage_tabs_text" data-toggle="pill" href="#cardusage">
                                            International Card Usage
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='tab-content'>
                                <div id='cardusage' className='tab-pane active'>
                                    <table className='table table-borderless credit_card_usage_table'>
                                        <thead>
                                            <tr>
                                                <th>Transaction Type</th>
                                                <th>Disable/Enable Transaction Type</th>
                                                <th>Set Per Transaction Limit* (Max Limit 22000)</th>
                                                <th>Disable/Enable Per Transaction Limit</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>ATM Withdrawl</td>
                                                <td>
                                                    <label class="switch toggle_switch">
                                                        <input type="checkbox" />
                                                        <span class="slider toggle_switch_btn"></span>
                                                    </label>
                                                </td>
                                                <td><div className='card_trans_limit'>22000</div></td>
                                                <td>
                                                    <label class="switch toggle_switch">
                                                        <input type="checkbox" />
                                                        <span class="slider toggle_switch_btn"></span>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Online Transactions</td>
                                                <td>
                                                    <label class="switch toggle_switch">
                                                        <input type="checkbox" />
                                                        <span class="slider toggle_switch_btn"></span>
                                                    </label>
                                                </td>
                                                <td><div className='card_trans_limit'>22000</div></td>
                                                <td>
                                                    <label class="switch toggle_switch">
                                                        <input type="checkbox" />
                                                        <span class="slider toggle_switch_btn"></span>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Merchant Outlets</td>
                                                <td>
                                                    <label class="switch toggle_switch">
                                                        <input type="checkbox" />
                                                        <span class="slider toggle_switch_btn"></span>
                                                    </label>
                                                </td>
                                                <td><div className='card_trans_limit'>22000</div></td>
                                                <td>
                                                    <label class="switch toggle_switch">
                                                        <input type="checkbox" />
                                                        <span class="slider toggle_switch_btn"></span>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Tap & Pay Transactions</td>
                                                <td>
                                                    <label class="toggle_pay_switch">
                                                        <input type="checkbox" />
                                                        <span class="toggle_pay_switch_btn"></span>
                                                    </label>
                                                </td>
                                                <td><div className='card_trans_limit_empty'></div></td>
                                                <td>
                                                    <label class="toggle_pay_switch">
                                                        <input type="checkbox" />
                                                        <span class="toggle_pay_switch_btn"></span>
                                                    </label>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div>
                                        <div className='card_usage_note_heading'>Note:</div>
                                        <div className='ml-3'>
                                            <ul>
                                                <li>
                                                    You can only change the transaction type or transaction limit for one card at a time
                                                </li>
                                                <li>
                                                    Subject to the maximum daily transaction limits on your Credit card
                                                </li>
                                                <li>
                                                    By disabling any transaction type, any Per-Transaction limit set for that transaction type will also get deleted
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div className='card_usage_auth_trans'>Please enter these details to authorize the transaction</div>
                                        <div className='card_usage_otp_text'>One Time Password</div>
                                        <div className='d-flex align-items-center'>
                                            <input className='card_usage_otp_box'></input>
                                            <div>OTP has been generated and sent to your registered mobile number</div>
                                        </div>
                                        <div className='my-2'>
                                            <div className='card_usage_otp_notes'>
                                                If there is a delay in receipt of OTP, you can send a request to receive it, SMS IBOTP to 5676766 or
                                                9215676766. Request should be sent from the mobile number registered in our records.
                                            </div>
                                            <div className='card_usage_otp_notes'>
                                                Please do not share OTP with anyone, even if the person claims to be an Royal Islamic bank official.
                                                For further details <a href='#ff'>click here</a>
                                            </div>
                                        </div>
                                        <div>
                                            <button type='button' className='card_usage_submit_btn'>Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default CreditCard;