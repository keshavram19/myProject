import React from 'react';
import './Accounts.css';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';



const UpdatePancard = () => {

  return (

    <div>
      
      <div className='pancard_container container-fluid' style={{marginTop:"90px"}}>
        <div className='row'>
          <div className='col-3'>
            <BankaccountSidebar />
          </div>
          <div className='col-9'>
            <div className="container-fluid pancard my-2">
              <div className="d-flex">
                <h3>5.View or Update PAN Card</h3>
              </div>
              <div className="card my-3">
                <h6 className="pancard_heading p-3">View/Update PAN Card</h6>

                <div className="container-fluid pancard_details p-3">

                  <div className="row">
                    <div className="col-sm-6">
                      <label for="text">Account Number*</label>
                    </div>
                    <div className="col-sm-3">
                      <input type="number" placeholder='Please select' className="form_input" id="text" />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-6">
                      <label for="text">Applicants Name*</label>
                    </div>
                    <div className="col-sm-3">
                      <input type="text" className="form_input" id="text" />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-6">
                      <label for="text">PAN Number*</label>
                    </div>
                    <div className="col-sm-3">
                      <input type="text" className="form_input" id="text" />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-6">
                      <label for="text">Mobile Number*</label>
                    </div>
                    <div className="col-sm-3">
                      <input type="text" placeholder='XXXXXX8263' className="form_input" id="text" />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-6">
                      <label for="text">E-mail Id*</label>
                    </div>
                    <div className="col-sm-3">
                      <input type="text" placeholder='XXXXXXXXXXXXX@gmail.com' className="form_input" id="text" />
                    </div>
                  </div>
                </div>
                <div className='mandatory_field'>
                  <p className="pl-3">*Mandatory Fields</p>
                  <p className="pl-3">By clicking "Submit,you are agreeing to all the terms indicated below</p>
                </div>
                <hr />
                <div className="row pl-2 otp_container mb-3">
                  <div className="col-sm-6">
                    <h6 className="my-2 p-2">How would you like to get OTP?</h6>
                    <div className="p-2 d-flex">
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

                <button className='back_Btn'>
                  BACK
                </button>
                <button className='ml-3 submit_Btn'>
                  SUBMIT
                </button>
                </div>
              </div>
              <div className='pancard_notes'>
                <h6 className='ml-4'>Notes:</h6>
                <div>
                  <ol>
                    <li>The PAN number should be a valid PAN and should be in 541 format i.e 5 Alphabets, 4 Numeric and 1 Alphabet</li>
                    <li>The request will be validated with NSDL site and processed in 1 working day.</li>
                    <li>The name and DOB on the PAN card should match the bank records or the request will get rejected.
                      PAN number updation will not be processed for minor accounts.</li>
                    <li>To remove an existing PAN and update a new one, you will need to visit the branch with acknowledgement copy of the letter given to IT authorities for surrender of the old PAN and carry your new PAN card for verification. 5. If you have provided your mobile number or e-mail ID, we will inform you about the closure of your request by SMS or e-mail respectively.
                      Providing the mobile number or e-mail ID here will not result in an update of your mobile number or e-mail ID as recorded with us.</li>
                    <li> If you have provided your mobile number or e-mail ID, we will inform you about the closure of your request by SMS or e-mail respectively. Providing the mobile number or e-mail ID here will not result in an update of your mobile number or e-mail ID as recorded with us.</li>
                    <li>ICICI Bank doesnot take any resposibilty, and will also not be liable, for your claims, if the details provided by you are incorrect/incomplete.</li>
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

export default UpdatePancard;
