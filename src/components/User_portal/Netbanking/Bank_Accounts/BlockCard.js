import React from 'react';
import Select from 'react-select';
import './Accounts.css';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';

const BlockCard = () => {
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
                                    <p>5419XXXXXXXXXXX0411</p>
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
                                    <input type="text" id="remarks" className="form-control" />
                                </div>
                            </div>

                            <div className="d-flex mt-3">
                                <button type="button" className="back ml-2">Back</button>
                                <button type="submit" className="confirm ml-4">Confirm</button>
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