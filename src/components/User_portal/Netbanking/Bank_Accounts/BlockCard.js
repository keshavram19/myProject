import React from 'react';
import Select from 'react-select';
import './Accounts.css';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';

const BlockCard = () => {
    return (
        <div className='card_details_container container-fluid' style={{marginTop:"90px"}}>
            <div className='card_details_header'></div>
            <div className='row'>
            <div className='col-3'>
                <BankaccountSidebar />
          </div>
                <div className='col-9'>
                    <div className="card_details_block_card_hotlisting container-fluid">
                        <div className="card">
                            <p className="d-flex h3">ATM / Debit Card HotListing-Confirm</p>
                            <p className="my-3">Please verify and confirm your request for hotlisting your card</p>
                            <div className="row card_details_block_card_fields ">
                                <div className="col-sm-3">
                                    <label>Card No:</label>
                                </div>
                                <div className='col-sm-4'>
                                    <p>5419XXXXXXXXXXX0411</p>
                                </div>
                            </div>
                            <div className='row card_details_block_card_fields '>
                                <div className="col-sm-3">
                                    <label htmlFor="reason">Reason:</label>
                                </div>
                                <div className='col-sm-4'>
                                    <Select
                                        name="reason"
                                        id="reason"
                                        options={[
                                            { value: "select a reason", label: "select a reason" },
                                            { value: "Card Lost", label: "Card Lost" },
                                            { value: "card Damaged", label: "card Damaged" },
                                            { value: "card Not Received", label: "card Not Received" },
                                            { value: "Card Destroyed", label: "Card Destroyed" }
                                        ]}
                                    /></div>
                            </div>

                            <div className="row card_details_block_card_fields card_details_block_card_input_tag ">
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