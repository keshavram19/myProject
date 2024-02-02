import React, { useState } from 'react';
import './Accounts.css';
import axios from 'axios';
import apiList from '../../../../lib/apiList';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';

function UpdateForm60() {
  const [formData, setFormData] = useState({
    savingsAccountNumber: '',
    declarentsName: '',
    declarentsDOB: '',
    fathersName: '',
    AddressLine1: '',
    AddressLine2: '',
    TownCity: '',
    State: '',
    PinCode: '',
    AmountOfTransaction: '',
    DateOfTransaction: '',
    AgriculturalIncome: '',
    IncomeFromOtherSource: '',
    PANAcknowledgeNumber: '',
    PANApplicationDate: '',
    TelephoneNumber: '',
    MobileNumber: '',
    EmailID: '',
    communicationMethod: 'Email', // Default value
  });
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [enteredOtp, setEnteredOtp] = useState('');
  const [otpVerificationSuccess, setOtpVerificationSuccess] = useState(false);
  const [otpSentSuccess, setOtpSentSuccess] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleCheckboxChange = (e) => {
    setCheckboxChecked(e.target.checked);
  };
  const handleRadioChange = (e) => {
    setFormData({
      ...formData,
      communicationMethod: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!checkboxChecked) {
      alert('Please check the mandatory fields before submitting the form.'); // Display message if checkbox is not checked
      return; // Prevent form submission
    }
   
   
    try {
      // Make a POST request to your server endpoint with the form data
      const response = await axios.post( apiList.form60UserDetails, formData);
      console.log(response.data); // Handle the response as needed
      alert('Form submitted successfully!');
      // Optionally, you can reset the form data after a successful submission
      setFormData({
        savingsAccountNumber: '',
        declarentsName: '',
        declarentsDOB: '',
        fathersName:'',
        AddressLine1:'',
        AddressLine2: '',
        TownCity:'',
        State:'',
        PinCode:'',
        AmountOfTransaction:'',
        DateOfTransaction:'',    
        AgriculturalIncome:'',
        IncomeFromOtherSource:'',
        PANAcknowledgeNumber:'',
        PANApplicationDate:'',
        TelephoneNumber:'',
        MobileNumber:'',
        EmailID:'',
        communicationMethod: 'Email',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again later.');
    }

  };
  const handleVerifyOtp = async () => {
    
    try {
      const response = await axios.post(apiList.form60OtpVerification, { enteredOtp });
      console.log(response.data);
      alert('OTP verification successful!');
      setOtpVerificationSuccess(true);
    } catch (error) {
      console.error('Error verifying OTP:', error);
      alert('Invalid OTP. Please try again.');
    }
  };
  const handleSendOtp = async () => {
    if (!formData.EmailID) {
      alert('Please enter your email address before sending OTP.');
      return;
    }
    console.log('hello')
    try {
      
      const response = await axios.post(apiList.form60OTPSend, { EmailID: formData.EmailID },
      {
        headers:{
          "Content-Type":"application/json",
        }
      }
      );
      if(response.status===200){
        setOtpSentSuccess(true);
        alert('otp sent successfully')
      }
    } catch (error) {
      console.error('OTP not sent:', error);
      alert('OTP not sent. Please try again.');
    }
  };
 


  return (
    <>
    <div className='container-fluid' style={{marginTop:"90px"}}>
     <div className='side_bar_section'>
        <div className='row'>
            <div className='col-3'>
            <BankaccountSidebar />
            </div>
            <div className='col-9'>
            
                <div className='update_form_container ' style={{backgroundColor:' rgb(255, 250, 244)'}}>
                
                    <div className='update_form_heading_Container'>
                    <h3 className='update_form_heading p-2'>Update Form 60</h3>
                    </div>
                    <form className='update_form_section' onSubmit={handleSubmit}>
                   <label for="savingsAccountNumber" className='form-inline'>
                     <span className='col-md-5'>Savings Account Number*</span>
                     <input type="text" className='form-control form-control-sm col-md-5 w-25'
                     name="savingsAccountNumber"
                     value={formData.savingsAccountNumber}
                     onChange={handleInputChange}/>
                   </label>
                   <label for="declarentsName" className='form-inline'>
                     <span className='col-md-5'>Declarent's Name</span>
                     <input type="text" className='form-control form-control-sm col-md-4 w-25'
                     name="declarentsName"
                     value={formData.declarentsName}
                     onChange={handleInputChange}/>
                   </label>
                   <label for="declarentsDOB" className='form-inline'>
                     <span className='col-md-5'>Declarent's Date Of Birth</span>
                     <input type="date" className='form-control form-control-sm col-md-4 w-25'
                     name="declarentsDOB"
                     value={formData.declarentsDOB}
                     onChange={handleInputChange}/>
                   </label>
                   <label for="fathersName" className='form-inline'>
                     <span className='col-md-5'>Father's Name*</span>
                     <input type="text" className='form-control form-control-sm col-md-4 w-25'
                      name="fathersName"
                      value={formData.fathersName}
                      onChange={handleInputChange}/>
                   </label>
                   <label for="addressLine1" className='form-inline'>
                     <span className='col-md-5'>Address Line1</span>
                     <input type="text" className='form-control form-control-sm col-md-4 w-25'
                      name="AddressLine1"
                      value={formData.AddressLine1}
                      onChange={handleInputChange}/>
                   </label>
                   <label for="addressLine2" className='form-inline'>
                     <span className='col-md-5'>Address Line2</span>
                     <input type="text" className='form-control form-control-sm col-md-4 w-25'
                    name="AddressLine2"
                    value={formData.AddressLine2}
                    onChange={handleInputChange} />
                   </label>
                   <label for="town/City" className='form-inline'>
                     <span className='col-md-5'>Town/City</span>
                     <input type="text" className='form-control form-control-sm col-md-4 w-25'
                     name="TownCity"
                     value={formData.TownCity}
                     onChange={handleInputChange}/>
                   </label>
                   <label for="State" className='form-inline'>
                     <span className='col-md-5'>State</span>
                     <input type="text" className='form-control form-control-sm col-md-4 w-25'
                      name="State"
                      value={formData.State}
                      onChange={handleInputChange}/>
                   </label>
                   <label for="pincode" className='form-inline'>
                     <span className='col-md-5'>Pin Code</span>
                     <input type="text" className='form-control form-control-sm col-md-4 w-25'
                      name="PinCode"
                      value={formData.PinCode}
                      onChange={handleInputChange}/>
                   </label>
                   <label for="amountOfTransaction" className='form-inline'>
                     <span className='col-md-5'>Amount Of Transaction</span>
                     <input type="text" className='form-control form-control-sm col-md-4 w-25'
                      name="AmountOfTransaction"
                      value={formData.AmountOfTransaction}
                      onChange={handleInputChange}/>
                   </label>
                   <label for="dateOfTransaction" className='form-inline'>
                     <span className='col-md-5'>Date Of Transaction</span>
                     <input type="Date" className='form-control form-control-sm col-md-4 w-25'
                      name="DateOfTransaction"
                      value={formData.DateOfTransaction}
                      onChange={handleInputChange}/>
                   </label>
                   <label for="agriculturalIncome" className='form-inline'>
                     <span className='col-md-5'>Agricultural Income*<br/><span style={{ fontSize: "11px" }}>(Income Taxable In India)</span></span>
                     <input type="text" className='form-control form-control-sm col-md-4 w-25'
                      name="AgriculturalIncome"
                      value={formData.AgriculturalIncome}
                      onChange={handleInputChange}/>
                   </label>
                   <label for="incomefromothersource" className='form-inline'>
                     <span className='col-md-5'>Income From Other Source*<br/><span style={{ fontSize: "11px" }}>(Income Taxable In India)</span></span>
                     <input type="text" className='form-control form-control-sm col-md-4 w-25'
                      name="IncomeFromOtherSource"
                      value={formData.IncomeFromOtherSource}
                      onChange={handleInputChange}/>
                   </label>
                   <label for="panAcknowledgeNumber" className='form-inline'>
                     <span className='col-md-5'>PAN Acknowledge Number</span>
                     <input type="text" className='form-control form-control-sm col-md-4 w-25'
                     name="PANAcknowledgeNumber"
                     value={formData.PANAcknowledgeNumber}
                     onChange={handleInputChange}/>
                   </label>
                   <label for="panApplicationDate" className='form-inline'>
                     <span className='col-md-5'>PAN Application Date</span>
                     <input type="date" className='form-control form-control-sm col-md-4 w-25'
                      name="PANApplicationDate"
                      value={formData.PANApplicationDate}
                      onChange={handleInputChange}/>
                   </label>
                   <label for="telephoneNumber" className='form-inline'>
                     <span className='col-md-5'>Telephone Number</span>
                     <input type="text" className='form-control form-control-sm col-md-4 w-25'
                       name="TelephoneNumber"
                       value={formData.TelephoneNumber}
                       onChange={handleInputChange}/>
                   </label>
                   <label for="mobileNumber" className='form-inline'>
                     <span className='col-md-5'>Mobile Number</span>
                     <input type="text" className='form-control form-control-sm col-md-4 w-25'
                     name="MobileNumber"
                     value={formData.MobileNumber}
                     onChange={handleInputChange}/>
                   </label>
                   <label for="emailId" className='form-inline'>
                     <span className='col-md-5'>E-mail ID</span>
                     <input type="text" className='form-control form-control-sm col-md-4 w-25'
                      name="EmailID"
                      value={formData.EmailID}
                      onChange={handleInputChange}/>
                   </label>
                   <h6>*Mandatory Fields</h6>
                   <div className="form-check">
                      <label className="form-check-label m-1">
                      <input 
              type="checkbox" 
              className="form-check-input"
              name="mandatoryfields1"
              checked={checkboxChecked}
              onChange={handleCheckboxChange}
            />
                 <p style={{fontSize:"13px"}}>I agree that, the information furnished in this form is true, correct and complete in all respects. Any person making a false statement in the declaration shall be liable to prosecution under section 277 of the Income-tax Act, 1961 and on conviction be punishable, in a case where tax sought to be evaded exceeds twenty-five lakh rupees, with rigorous imprisonment which shall not be less than six months but which may extend to seven years and with fine; in any other case, with rigorous imprisonment which shall not be less than three months but which may extend to two years and with fine.
                 </p></label>
                </div>
                <div className="form-check">
                      <label className="form-check-label m-0">
                      <input 
              type="checkbox" 
              className="form-check-input"
              name="mandatoryfields2"
              checked={checkboxChecked}
              onChange={handleCheckboxChange}
            />
                 <p style={{fontSize:"13px"}}>I do hereby declare that what is stated above is true to the best of my
                    knowledge and belief. I further declare that I do not have a Permanent Account Number and my/ our estimated total income (including income of spouse, minor child etc. as per section 64 of Income-tax Act, 1961) computed in accordance with the provisions of Income-tax Act, 1961 for the financial year in which the above transaction is held will be less than maximum amount not chargeable to tax.
                    </p></label>
                  </div>
                  <div className="form-check ">
                      <label className="form-check-label m-0">
                      <input 
              type="checkbox" 
              className="form-check-input"
              name="mandatoryfields3"
              checked={checkboxChecked}
              onChange={handleCheckboxChange}
            /><p style={{fontSize:"13px"}}>The information in the Form 30 shall be applicable to all accounts held by me/us.
                 </p></label>
                  </div>
                  <div className="form-check ">
                      <label className="form-check-label m-0">
                      <input 
              type="checkbox" 
              className="form-check-input"
              name="mandatoryfields4"
              checked={checkboxChecked}
              onChange={handleCheckboxChange}
            /><p style={{fontSize:"13px"}}>Option 4I agree that the declaration will not be accepted where the amount of income of the nature referred to in item 22b exceeds the maximum amount which is not chargeable to tax, unless PAN is applied for and column 21 filled.
                 </p>
                  </label>
                  </div>
                  <hr className='m-0'/>
                  <div>
                  <h5 className='m-2'>How would you like to get the OTP?</h5>
                  </div>
                  <div className="form-check-inline col-md-1 p-2">
           <label className="form-check-label " for='SMS'>
                  <input type="radio" id='SMS'className="form-check-input"  defaultChecked
                   name="communicationMethod"
                   value={formData.communicationMethod}
                  onChange={handleRadioChange}/>SMS
                </label>
              </div>
            <div className="form-check-inline col-md-1">
              <label className="form-check-label" for='Email'>
                     <input type="radio" id='Email' className="form-check-input" 
                      name="communicationMethod"
                      value={formData.communicationMethod}
                     onChange={handleRadioChange} />Email
               </label>
           </div>
            <div className="form-check-inline col-md-1">
             <label className="form-check-label" for='call'>
             <input type="radio" className="form-check-input" id='call' 
              name="communicationMethod"
              value={formData.communicationMethod}
             onChange={handleRadioChange}/>Call
         </label>       
          </div>
          <div>
            <p style={{fontSize:"14px"}}><i>OTP Will be sent to registered mobile number xxxxxxx345</i></p>
         </div>
         
         <hr/>
        <div className='p-1'>
        <button className='update_form_back_btn p-2' type='button'>BACK</button>
        {/* <button className='update_form_submit_btn p-2' onClick={handleSubmit} type='button'>SUBMIT</button> */}
        <button type="button" className="update_form_submit_btn p-2" data-toggle="modal" data-target="#myModal" onClick={handleSendOtp}>
                    Send OTP
                  </button>
                 
                  <div className="modal fade" id="myModal">
                    <div className="modal-dialog modal-lg">
                      <div className="modal-content">

                        <div className="modal-header ">
                          <h1 className="modal-title">Update form 60 OTP validation</h1>
                          <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>


                        {/* <!-- Modal body --> */}
                        <div class="modal-body">
                          <div className="row">
                          <div className='col-12'>
                        <div className='savings_acct_user_auth_heading'>User Authentication Details:</div>
                        <div className='savings_acct_user_auth_container'>
                            <div className='savings_acct_user_auth_container_header'>Please Enter OTP To Authorize</div>
                            <div className='savings_acct_user_auth_details_container'>
                                <div className='d-flex justify-content-center'>
                                    <div>
                                        <div className='otp_verifi_text'>OTP Verification</div>
                                        <div className='otp_code_mobile'> OTP Code sent to your EmailID usxxxxxxxxx@gmail.com</div>
                                        <div>
                                        <input 
    type="text" 
    className='form-control form-control-sm col-md- w-50 m-3 d-flex text-center'
    name="enteredOtp" 
    value={enteredOtp} 
    onChange={(e) => setEnteredOtp(e.target.value)} // Update enteredOtp state
    placeholder='Enter OTP'
/>
                                        </div>
                                        <div className='text-center'>
                                            <div>Don't receive OTP code?</div>
                                            <div className='resend_code_text'>Resend Code</div>
                                        </div>
                                        <div className='otp_verify_btn_container'>
                                            <button className='otp_verify_btn' onClick={handleVerifyOtp}>Verify & Proceed</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='savings_acct_user_auth_text1'>
                                    OTP has been generated with validity of 100 seconds and sent to your registered mobile number
                                </div>
                                <div className='savings_acct_user_auth_text2'>
                                    If there is a delay in receiving of OTP, you can send a request to receive it. SMS IBOTP to 5676766 or
                                    92156766. Request should be sent from the registered mobile number.
                                </div>
                                <div className='savings_acct_user_auth_text3'>
                                    Please don't share OTP to anyone, even if person claims to be an ICICI bank official. For further details
                                    please <a className='savings_acct_user_auth_text3_atag'>click here</a>.
                                </div>
                                <div className='d-flex justify-content-center'>
                                    {/* <button type='submit' className='savings_acct_user_auth_submit_btn' onClick={handleSubmit}>
                                        Submit
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                            
                    
                          </div>
                        </div>


                      </div>
                    </div>
                  </div>
                 
        </div>
        </form>
        {/* <hr/>
        <div className='p-1'>
        <button className='update_form_back_btn p-2'>BACK</button>
        <button className='update_form_submit_btn p-2'>SUBMIT</button>
        </div> */}
                </div>
            </div>

        </div>
 
     </div>
     </div>
    </>
  )
}

export default UpdateForm60;