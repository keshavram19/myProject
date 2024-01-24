import React from 'react';


const BillingCycleChange = () => {

    return (

        <div>
            <div className='billing_cycle container-fluid mt-3'>
                <div className='col-sm-12'>
                    <div className="container-fluid billing_cycle my-2">
                        <div className="d-flex">
                            <h3>Request For Billing Cycle Change</h3>
                        </div>
                        <div className="card my-3">
                            <div className="card container-fluid billing_cycle_details p-3">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <label for="text">Select Your Card*</label>
                                    </div>
                                    <div className="col-sm-3">
                                        <select className="billing_cycle_input" id="select_credit_card">
                                            <option value="">Please select</option>
                                            <option value="visa">Visa</option>
                                            <option value="mastercard">MasterCard</option>
                                            <option value="amex">Rupay</option>
                                            <option value="discover">Delight</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-4">
                                        <label for="text">Current Billing Cycle*</label>
                                    </div>
                                    <div className="col-sm-3">
                                        <p>12 Feb 24</p>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-sm-4">
                                        <label for="text">Requested Bill Cycle*</label>
                                    </div>
                                    <div className="col-sm-3">
                                        <select className="billing_cycle_input" id="requested_bill">
                                            <option value="">Please select</option>
                                            <option value="monthly">Monthly</option>
                                            <option value="quarterly">Quarterly</option>
                                            <option value="semi-annual">Semi-Annual</option>
                                            <option value="annual">Annual</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-4">
                                        <label for="text">Mobile Number*</label>
                                    </div>
                                    <div className="col-sm-3">
                                        <input type="text" placeholder='XXXXXX8263' className="billing_cycle_input" id="text" />
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col-sm-4">
                                        <label for="text">Email ID*</label>
                                    </div>
                                    <div className="col-sm-3">
                                        <input type="text" placeholder='XXXXXX@gmail.com' className="billing_cycle_input" id="text" />
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="d-flex mb-3">
                                <button className='ml-3 reset_Btn'>
                                    RESET
                                </button>
                                <button className='ml-3 submit_Btn'>
                                    SUBMIT
                                </button>
                            </div>
                        </div>
                        <div className='billing_cycle_notes'>
                            <h6 className='ml-4'>Notes:</h6>
                            <div>
                                <ol>
                                    <li>If you would like to change the billing cycle date of your Credit Card.please use this option.</li>
                                    <li>Card Account should be active for requesting the billing cycle change.</li>
                                    <li>Billing Cycle can be changed once in 180 days.</li>
                                    <li>The billing cycle request received before your current payment date will be processed in the subsequent month.</li>
                                    <li> If the new selected date of billing cycle falls in the current month,then the next statement will get generated in the current month only.</li>
                                    <li>The request will be based on ROYAL ISLAMIC Bank's sole discretion and subject to approvals</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BillingCycleChange;