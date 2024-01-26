import React, { useState } from 'react';
import './Accounts.css';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';


const ManageCardLimit = () => {

  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);
  const [isChecked4, setChecked4] = useState(false);

  const handleToggle1 = () => {
    setChecked1(!isChecked1);
  };

  const handleToggle2 = () => {
    setChecked2(!isChecked2);
  };

  const handleToggle3 = () => {
    setChecked3(!isChecked3);
  };

  const handleToggle4 = () => {
    setChecked4(!isChecked4);
  };

  return (

    <div>

      <div className='card_limit-details-container container-fluid ' style={{ marginTop: "90px" }}>
        <div className='row'>
          <div className='col-3'>
            <BankaccountSidebar />
          </div>

          <div className='col-9'>
            <div className="container-fluid card_limit mt-2">
              <div className="d-flex">
                <h3 className='manage_card_heading'>Manage Card Limit</h3>
              </div>
              <div className="card mt-3">
                <h6 className="card_limit_heading p-3">Increase/Decrease Debit card Limit</h6>

                <div className="form_container p-3">

                  <div className="row">
                    <div className="col-sm-4">
                      <label for="text">Select the Account*</label>
                    </div>
                    <div className="col-sm-3">
                      <select className="form_input">
                        <option value="">Please select</option>
                        <option value="account1">Account1</option>
                        <option value="account2">Account2</option>
                        <option value="account3">Account3</option>
                      </select>
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col-sm-4">
                      <label for="text">Select the Debit Card*</label>
                    </div>
                    <div className="col-sm-3">
                      <select className="form_input">
                        <option value="">Please select</option>
                        <option value="account1">Account1</option>
                        <option value="account2">Account2</option>
                        <option value="account3">Account3</option>
                      </select>

                    </div>
                  </div>

                  {/* radio-btn */}


                  <div className="row mt-4">
                    <div className="col-sm-4">
                      <input type="radio" id="domestic" name="option" value="options" /><label for="domestic">Domestic Limits</label>
                    </div>
                    <div className="col-sm-4">
                      <input type="radio" id="international" name="option" value="options" /><label for="international" >International Limits</label>
                    </div>
                  </div>

                  {/* domestic-conatiner */}

                  <div class="domestic container-fluid mt-5">
                    <div class="row">
                      <div class="col-sm-3">
                        <p>Domestic</p>
                      </div>
                      <div class="col-sm-5">
                        <div class="input_range">

                          <span class="zero">Min</span>
                          <span class="max_zero">Max</span>
                        </div>
                        <div>
                        </div>
                      </div>
                      <div class="col-sm-2">

                      </div>
                      <div class="col-sm-2">
                        <p>Enable/Disable</p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-3">
                        <p>Limit for cash withdrawal</p>
                      </div>
                      <div class="col-sm-5">
                        <div class="input_range">
                          <input
                            type="range"
                            min={0}
                            max={100}
                            class="form-control-range"
                          />
                          <span class="zero"><i class="fa-solid fa-indian-rupee-sign"></i><span>0</span></span>
                          <span class="max_zero"><i class="fa-solid fa-indian-rupee-sign"></i><span>450000</span></span>
                        </div>
                        <div>
                        </div>

                      </div>

                      <div class="col-sm-2">
                        <input type="text" className='form-control' />
                      </div>

                      <div class="col-sm-2">
                        <div className="toggle_container">
                          <input
                            type="checkbox"
                            className="toggle_input"
                            id="toggle1"
                            checked={isChecked1}
                            onChange={handleToggle1}
                          />
                          <label className="toggle_slider" htmlFor="toggle1"></label>
                        </div>
                      </div>
                    </div>

                    <div class="row mt-3">
                      <div class="col-sm-3">
                        <p>Limit for retail transactions</p>
                      </div>
                      <div class="col-sm-5">
                        <div class="input_range">
                          <input
                            type="range"
                            min={0}
                            max={100}
                            class="form-control-range"
                          />
                          <span class="zero"><i class="fa-solid fa-indian-rupee-sign"></i><span>0</span></span>
                          <span class="max_zero"><i class="fa-solid fa-indian-rupee-sign"></i><span>750000</span></span>
                        </div>
                        <div>
                        </div>

                      </div>
                      <div class="col-sm-2">
                        <input type="text" className='form-control' />
                      </div>
                      <div class="col-sm-2">
                        <div className="toggle_container">
                          <input
                            type="checkbox"
                            className="toggle_input"
                            id="toggle2"
                            checked={isChecked2}
                            onChange={handleToggle2}
                          />
                          <label className="toggle_slider" htmlFor="toggle2"></label>
                        </div>
                      </div>
                    </div>

                    <div class="row mt-3">
                      <div class="col-sm-3">
                        <p>Limit for E-commerce transactions</p>
                      </div>
                      <div class="col-sm-5">
                        <div class="input_range">
                          <input
                            type="range"
                            min={0}
                            max={100}
                            class="form-control-range"
                          />
                          <span class="zero"><i class="fa-solid fa-indian-rupee-sign"></i><span>0</span></span>
                          <span class="max_zero"><i class="fa-solid fa-indian-rupee-sign"></i><span>750000</span></span>
                        </div>
                        <div>
                        </div>

                      </div>
                      <div class="col-sm-2">
                        <input type="text" className='form-control' />
                      </div>
                      <div class="col-sm-2">
                        <div className="toggle_container">
                          <input
                            type="checkbox"
                            className="toggle_input"
                            id="toggle3"
                            checked={isChecked3}
                            onChange={handleToggle3}
                          />
                          <label className="toggle_slider" htmlFor="toggle3"></label>
                        </div>
                      </div>
                    </div>

                    <div class="row mt-2">
                      <div class="col-sm-3">
                        <p>Limit for ContactLess payments</p>
                      </div>
                      <div class="col-sm-5">
                        <div class="input_range">
                          <input
                            type="range"
                            min={0}
                            max={100}
                            class="form-control-range"
                          />
                          <span class="zero"><i class="fa-solid fa-indian-rupee-sign"></i><span>0</span></span>
                          <span class="max_zero"><i class="fa-solid fa-indian-rupee-sign"></i><span>5000</span></span>
                        </div>
                        <div>
                        </div>

                      </div>
                      <div class="col-sm-2">
                        <input type="text" className='form-control' />
                      </div>
                      <div class="col-sm-2">
                        <div className="toggle_container">
                          <input
                            type="checkbox"
                            className="toggle_input"
                            id="toggle4"
                            checked={isChecked4}
                            onChange={handleToggle4}
                          />
                          <label className="toggle_slider" htmlFor="toggle4"></label>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="row mt-5">
                    <div className="col-sm-4">
                      <label for="text">Mobile Number*</label>
                    </div>
                    <div className="col-sm-3">
                      <input type="text" placeholder='XXXXXX8263' className="form_input" id="text" />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-4">
                      <label for="text">E-mail Id*</label>
                    </div>
                    <div className="col-sm-3">
                      <input type="text" placeholder='XXXXXXXXXXXXX@gmail.com' className="form_input" id="text" />
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
                    <div className="d-flex pl-2">
                      <div className="pr-3">
                        <input type="radio" id="sms" name="options" value="option" /><label for="sms">SMS</label>
                      </div>
                      <div className="pr-3">
                        <input type="radio" id="email" name="options" value="option" /><label for="email" >Email</label>
                      </div>
                      <div>
                        <input type="radio" id="call" name="options" value="option" /><label for="call">Call</label>
                      </div>
                    </div>
                  </div>
                </div>
                <i className='pl-3 otp_container'>OTP will be sent to registered mobile number</i>
                <hr />
                <div className="d-flex mb-3 ml-3">

                  <button className='back_btn'>
                    BACK
                  </button>
                  <button className='ml-3 submit_btn'>
                    SUBMIT
                  </button>
                </div>
              </div>
              <div className='card_limit_notes mt-2'>
                <h6 className='ml-3'>Notes:</h6>
                <div>
                  <ol>
                    <li>For NRO account only Domestic limits can be changed.</li>
                    <li>Limit can be changed in multiple of Rs 5000/- only.</li>
                    <li>Deactivated limits for Domestic & International transactions will be set to Rs 1.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
};

export default ManageCardLimit;