import React from 'react';


const GenerateCreditCardPin = () => {

    return (

        <div>

            <div className='generate_credit_pin container-fluid mt-3'>

                <div className='col-sm-12'>
                    <div className="container-fluid generate_credit_pin my-2">
                        <div className="d-flex">
                            <h3>Generate Credit Card Pin</h3>
                        </div>
                        <div className="card my-3">
                            <h5 className="generate_credit_pin_heading p-3">Generate Credit Card Pin</h5>

                            <div className="container-fluid generate_credit_pin_details p-3">

                                <div className="row">
                                    <div className="col-sm-4">
                                        <label htmlFor="creditCardNumber">Select Credit Card Number*</label>
                                    </div>
                                    <div className="col-sm-3">
                                        <select className="credit_card_input" id="creditCardNumber">
                                            <option value="">Please select</option>
                                            <option value="** ** ** 1234">XXXX XXXX XXXX 1234</option>
                                            <option value="** ** ** 5678">XXXX XXXX XXXX 5678</option>
                                            <option value="** ** ** 9012">XXXX XXXX XXXX 9012</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col-sm-4">
                                        <label for="text">CVV Number*</label>
                                    </div>
                                    <div className="col-sm-3">
                                        <input type="text" className="credit_card_input" id="text" />
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col-sm-4">
                                        <label for="text">Mobile Number*</label>
                                    </div>
                                    <div className="col-sm-3">
                                        <input type="text" placeholder='XXXXXX8263' className="credit_card_input" id="text" />
                                    </div>
                                </div>

                            </div>
                            <div className='mandatory_field'>
                                <p className="pl-3">*Mandatory Fields</p>
                            </div>
                            <hr />
                            <div className="row pl-2 otp_container mb-3">
                                <div className="col-sm-6">
                                    <h6 className="my-2 p-2">How would you like to get OTP?</h6>
                                    <div className="form-check-inline ml-2">
                                        <input type="radio" className="form-check-input" name="optradio" />
                                        <label className="form-check-label">SMS </label>
                                    </div>
                                    <div className="form-check-inline ml-3">
                                        <input type="radio" className="form-check-input" name="optradio" />
                                        <label className="form-check-label">Email</label>
                                    </div>
                                    <div className="form-check-inline ml-3">
                                        <input type="radio" className="form-check-input" name="optradio" />
                                        <label className="form-check-label">Call</label>
                                    </div>
                                </div>
                            </div>
                            <i className='pl-3 otp_container'>OTP will be sent to registered mobile number</i>
                            <hr />
                            <div className="mb-3">
                                <button className='ml-3 submit_Btn'>
                                    SUBMIT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default GenerateCreditCardPin;