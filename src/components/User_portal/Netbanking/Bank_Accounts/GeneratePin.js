import React from 'react';
import Select from 'react-select';

import './Accounts.css';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';


const GeneratePin = () => {

    return (
        <div className='container-fluid' style={{ marginTop: "90px" }}>
            <div className='row'>

                <div className='col-3'>
                    <BankaccountSidebar />
                </div>
                <div className='col-9'>
                    <div className="container-fluid generate_pin mt-1">
                        <hr />
                        <div className="card mt-1">
                            <h5 className="header card_details_generate_pin_heading p-3">Generate Debit Card PIN</h5>
                            <div className="container-fluid p-2">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label for="ac_number">Select Account Number*</label>
                                    </div>
                                    <div className="col-sm-4">
                                        <Select

                                            name=""
                                            id=""
                                            options={[
                                                { value: "Please select", label: "Please select" },
                                            ]}

                                        />
                                    </div>
                                </div>
                                <div className="row mt-1">
                                    <div className="col-sm-6">
                                        <label for="card_number">Debit Card Number*</label>
                                    </div>
                                    <div className="col-sm-4">
                                        <Select
                                            type='select'
                                            name=""
                                            id=""
                                            options={[
                                                { value: "Please select", label: "Please select" }
                                            ]}
                                        />
                                    </div>
                                </div>
                                <div className="row card_details_generate_pin_input_tag mt-1">
                                    <div className="col-sm-6">
                                        <label for="text">CVV Number*</label>
                                    </div>
                                    <div className="col-sm-3">
                                        <input type="number" className="form-control" id="text" />
                                    </div>
                                </div>
                                <div className="row mt-1 card_details_generate_pin_input_tag">
                                    <div className="col-sm-6">
                                        <label for="text">Mobile Number*</label>
                                    </div>
                                    <div className="col-sm-3">
                                        <input type="text" className="form-control" id="text" />
                                    </div>
                                </div>
                            </div>
                            <p className="pl-2">*Mandatory Fields</p><hr />
                            <div className="row pl-2">
                                <div className="col-sm-5">
                                    <h6 className="pl-2">How would you like to get OTP?</h6>
                                    <div className="pl-2 d-flex justify-content-between">
                                        <div className="genrate_pin_sms">
                                            <input type="radio" id="sms" name="options" value="option" defaultChecked /><label for="sms" className="ml-2">SMS</label>
                                        </div>
                                        <div className="genrate_pin_Email">
                                            <input type="radio" id="email" name="options" value="option" /><label for="email" className="ml-2">Email</label>
                                        </div>
                                        <div className="genrate_pin_Call">
                                            <input type="radio" id="call" name="options" value="option" /><label for="call" className="ml-2">Call</label>
                                        </div>
                                    </div>
                                    <p>OTP will be sent to registered mobile number XXXXXXX233  </p>
                                </div>
                            </div><hr />
                            <div className="d-flex mb-3">
                                <button type="button" className="genrate_pin_buttons ml-3">BACK</button>
                                <button type="submit" className="genrate_pin_submits ml-5">SUBMIT</button>
                            </div>
                        </div>
                        <div className='card_details_generate_pin_notes'>
                            <h6>Notes:</h6>
                            <ol>
                                <li>Active debit Card is required to generate PIN online <a href="#">Click here</a> to apply for Debit Card.</li>
                                <li>This facility is available for resident customer having an Indian mobile number registered in their savings bank account and NRI customer/ mandate holders having a registered email ID.</li>
                                <li>OTP will be sent to the registered mobile number/email ID.</li>
                                <li>Resident Savings Account holders can add/update mobile number by visiting the nearest ICICI Bank tiranch or ATM NRI customers can update their email ID by contacting our 24 hour Customer Care.</li>
                                <li>In case you have updated your mobile number/Email ID in the past 24 hours, you will not be able to generate ATM PIN online.</li>
                                <li>To place request for Debit Card Pili to be sent to your communication address, please call <a href="#">24 hr. Gustomer Care</a> or visit the branch.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default GeneratePin;