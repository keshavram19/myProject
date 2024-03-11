import React, { useState, useEffect } from 'react';
import './Accounts.css';
import axios from 'axios';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';
import apiList from '../../../../lib/apiList';

const BlockCard = () => {

    const [userDetails, setUserDetails] = useState([]);
    const [blockReason, setBlockReason] = useState('');
    const [blockRemarks, setBlockRemarks] = useState('');
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
        console.log('User Details:', userDetails);

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

    const blockCard = async () => {
        try {
            if (blockReason && blockRemarks) {
                await axios.put(`${apiList.blockATMCard}${accountNumber}`, {
                    userReason: blockReason,
                    remarks: blockRemarks,
                });
                alert('Card blocked successfully');
                console.log('Card blocked successfully');
            } else {
                console.error('Please select a reason and provide remarks');
            }
        } catch (error) {
            console.error('Error blocking card:', error);
        }
    };

    return (
        <div className='card_details_container container-fluid' style={{ marginTop: "90px" }}>
            <div className='card_details_header'></div>
            <div className='row'>
                <div className='col-3'>
                    <BankaccountSidebar />
                </div>
                <div className='col-9'>
                    <div className="card_details_block_card_hotlisting container-fluid">
                        <div className="card">
                            <h3 className="d-flex">ATM / Debit Card Hotlisting-Confirm</h3>
                            <p className="my-3">Please verify and confirm your request for hotlisting your card</p>
                            <div className="row p-1 card_details_block_card_fields ">
                                <div className="col-sm-3">
                                    <label>Card No:</label>
                                </div>
                                <div className='col-sm-4'>
                                    {userDetails.length > 0 && (
                                        <p value={userDetails[0].userDebitCardDetails.userDebitCardNumber}>
                                            {formatDebitCardNumber(userDetails[0].userDebitCardDetails.userDebitCardNumber)}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className='row p-1 card_details_block_card_fields '>
                                <div className="col-sm-3">
                                    <label htmlFor="reason">Reason:</label>
                                </div>
                                <div className='col-sm-4'>
                                    <select
                                        className="form-control"
                                        name="reason"
                                        id="reason"
                                        onChange={(e) => setBlockReason(e.target.value)}
                                    >
                                        <option value="select a reason">select a reason</option>
                                        <option value="Card Lost">Card Lost</option>
                                        <option value="Card Damaged">Card Damaged</option>
                                        <option value="card Not Received">card Not Received</option>
                                        <option value="Card Destroyed">Card Destroyed</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row p-1 card_details_block_card_fields card_details_block_card_input_tag ">
                                <div className="col-sm-3">
                                    <label htmlFor="remarks">Remarks:</label>

                                </div>
                                <div className='col-sm-4'>
                                    <input
                                        type="text"
                                        id="remarks"
                                        className="form-control"
                                        onChange={(e) => setBlockRemarks(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="d-flex mt-3">
                                <button type="button" className="back ml-2">Back</button>
                                <button type="submit" className="confirm ml-4" onClick={blockCard}>Confirm</button>
                            </div>

                            <div className="mt-3 card_details_notes">
                                <h4>Note:</h4>
                                <ul>
                                    <li>I have read and understood the below mentioned points.</li>
                                    <li>Please note that by confirming this request your card(s) will cease to function and cannot be reactivated.</li>
                                    <li>Increase the Debit Card that you want to hot-list is in your possession, kindly destroy the same by cutting it into 4 pieces once the hot-listing request has been confirmed.</li>
                                    <li>You can visit your nearest branch to request for a new card.</li>
                                    <li>In Case you suspect any misuse on the card, we urge you to immediately hotlist the Debit Card online and get in touch with our Phone Banking or visit our nearest branch along with the transaction details.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlockCard;