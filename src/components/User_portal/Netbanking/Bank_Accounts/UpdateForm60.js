import React, { useState } from 'react';
import './Accounts.css';
import axios from 'axios';
import apiList from '../../../../lib/apiList';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
 
  
  
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    }); 
  };
  
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    
    // Update only the clicked checkbox state
    setFormData({
      ...formData,
      [name]: checked
    });
  };
  const handleRadioChange = (e) => {
    setFormData({
      ...formData,
      communicationMethod: e.target.value,
    });
  };
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!checkboxChecked) {
  //     alert('Please check the mandatory fields before submitting the form.'); // Display message if checkbox is not checked
  //     return; // Prevent form submission
  //   }  
  //   try {
  //     // Make a POST request to your server endpoint with the form data
  //     const response = await axios.post( apiList.form60UserDetails, formData);
  //     console.log(response.data); // Handle the response as needed
  //     alert('Form submitted successfully!');
  //     // Optionally, you can reset the form data after a successful submission
  //     setFormData({
  //         savingsAccountNumber: '',
  //       declarentsName: '',
  //       declarentsDOB: '',
  //       fathersName:'',
  //       AddressLine1:'',
  //       AddressLine2: '',
  //       TownCity:'',
  //       State:'',
  //       PinCode:'',
  //       AmountOfTransaction:'',
  //       DateOfTransaction:'',    
  //       AgriculturalIncome:'',
  //       IncomeFromOtherSource:'',
  //       PANAcknowledgeNumber:'',
  //       PANApplicationDate:'',
  //       TelephoneNumber:'',
  //       MobileNumber:'',
  //       EmailID:'',
  //       communicationMethod: 'Email',
  //     });
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //     alert('Error submitting form. Please try again later.');
  //   }

  // };
  // const handleVerifyOtp = async () => {
    
  //   try {
  //     const response = await axios.post(apiList.form60OtpVerification, { enteredOtp });
  //     console.log(response.data);
  //     alert('OTP verification successful!');
  //     setOtpVerificationSuccess(true);
  //   } catch (error) {
  //     console.error('Error verifying OTP:', error);
  //     alert('Invalid OTP. Please try again.');
  //   }
  // };
  // const handleSendOtp = async () => {
  //   if (!formData.EmailID) {
  //     alert('Please enter your email address before sending OTP.');
  //     return;
  //   }
  //   console.log('hello')
  //   try {
      
  //     const response = await axios.post(apiList.form60OTPSend, { EmailID: formData.EmailID },
  //     {
  //       headers:{
  //         "Content-Type":"application/json",
  //       }
  //     }
  //     );
  //     if(response.status===200){
  //       setOtpSentSuccess(true);
  //       alert('otp sent successfully')
  //     }
  //   } catch (error) {
  //     console.error('OTP not sent:', error);
  //     alert('OTP not sent. Please try again.');
  //   }
  // };
//   const handleVerifyOtp = async () => {
//     try {
//       const response = await axios.post(form60Userdetails/verify-otp/${formData.EmailID}, { enteredOtp });
//       console.log(response.data);
//       alert('OTP verification successful!');
//       setOtpVerificationSuccess(true);
//     } catch (error) {
//       console.error('Error verifying OTP:', error);
//       alert('Invalid OTP. Please try again.');
//     }
// };


const handleSubmit = async (e) => {
  e.preventDefault();
  const mandatoryFieldsChecked = formData.mandatoryfields1 && formData.mandatoryfields2 && formData.mandatoryfields3 && formData.mandatoryfields4;

  if (!mandatoryFieldsChecked) {
    toast.warning('Please check all the mandatory fields before submitting the form.');
    return;
  }
  try {
      const response = await axios.post(apiList. form60UserDetails, formData);
      console.log(response.data);
     
     
      handleSendOtp(); // Reset form data after successful submission
  } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error submitting form. Please try again later.');
  }
};
console.log(formData);
const handleVerifyOtp = async () => {
  try {
      const response = await axios.post(`${apiList.form60OtpVerification}/${formData.EmailID}`, { enteredOtp });
      console.log(response.data);
      toast.success('OTP verified and form submitted successfully.');
      setFormData({
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
        communicationMethod: 'Email', // Reset communication method to default
      });
      setEnteredOtp(''); // Clear the entered OTP field
      setCheckboxChecked(false);
      
  } catch (error) {
      console.error('Error verifying OTP:', error);
      toast.error('Invalid OTP. Please try again.');
  }
};

const handleSendOtp = async () => {
  if (!formData.EmailID) {
    toast.warning('Please enter your email address before sending OTP.');
      return;
  }
  try {
      const response = await axios.post(apiList.form60OTPSend, { EmailID: formData.EmailID });
      if (response.status === 200) {
          
        toast.success('An OTP has been sent to your email address');
       
      }
  } catch (error) {
      console.error('OTP not sent:', error);
      toast.error('OTP not sent. Please try again.');
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
            
                <div className='update_form_container ' style={{backgroundColor:''}}>
                
                    <div className='update_form_heading_Container'>
                    <h3 className='update_form_heading p-2'>Update Form 60</h3>
                    </div>
                    <form className='update_form_section' onSubmit={handleSubmit}>
                      <div className='row'>
                      <div className='col-md-6'>
                   <label for="savingsAccountNumber" className='form-inline'>
                     <span>Savings Account Number*</span>
                   </label>
                   <input type="text" className='form-control  form-control-sm  w-75 '
                     name="savingsAccountNumber"
                     value={formData.savingsAccountNumber}              
                     onChange={handleInputChange}/> 
                     </div>
                     <div className='col-md-6'>
                   <label for="declarentsName" className='form-inline'>
                     <span>Declarent's Name*</span>
                   </label>
                   <input type="text" className='form-control form-control-sm  w-75'
                     name="declarentsName"
                     value={formData.declarentsName}
                     onChange={handleInputChange}/>
                   </div>
                   </div>
                   <div className='row'>

                    
                    <div className='col-md-6'>
                   <label for="declarentsDOB" className='form-inline'>
                     <span>Declarent's Date Of Birth*</span>
                     </label>
                     <input type="date" className='form-control form-control-sm w-75 '
                     name="declarentsDOB"
                     value={formData.declarentsDOB}
                     onChange={handleInputChange}/>
                   
                   </div>
                   <div className='col-md-6'>
                   <label for="fathersName" className='form-inline'>
                     <span>Father's Name*</span>
                     </label>
                     <input type="text" className='form-control form-control-sm   w-75 '
                      name="fathersName"
                      value={formData.fathersName}
                      onChange={handleInputChange}/>
                   
                   </div>
                   </div>
                   <div className='row'>
                   <div className='col-md-6'>
                   <label for="addressLine1" className='form-inline'>
                     <span>Address Line1</span>
                     </label>
                     <input type="text" className='form-control form-control-sm w-75'
                      name="AddressLine1"
                      value={formData.AddressLine1}
                      onChange={handleInputChange}/>
                  
                   </div>
                   <div className='col-md-6'>
                   <label for="addressLine2" className='form-inline'>
                     <span>Address Line2</span>
                     </label>
                     <input type="text" className='form-control form-control-sm  w-75'
                    name="AddressLine2"
                    value={formData.AddressLine2}
                    onChange={handleInputChange} />
                   </div>
                   </div>
                   <div className='row'>
                    <div className='col-md-6'>
                   <label for="town/City" className='form-inline'>
                     <span>Town/City</span>
                      </label>
                     <input type="text" className='form-control form-control-sm w-75'
                     name="TownCity"
                     value={formData.TownCity}
                     onChange={handleInputChange}/>
                  
                   </div>
                   <div className='col-md-6'>
                   <label for="State" className='form-inline'>
                     <span>State</span>
                     </label>
                     <input type="text" className='form-control form-control-sm w-75'
                      name="State"
                      value={formData.State}
                      onChange={handleInputChange}/>
                  
                   </div>
                   </div>
                   <div className='row'>
                   <div className='col-md-6'>
                   <label for="pincode" className='form-inline'>
                     <span>Pin Code</span>
                      </label>
                     <input type="text" className='form-control form-control-sm  w-75'
                      name="PinCode"
                      value={formData.PinCode}
                      onChange={handleInputChange}/>  
                   </div>
                   <div className='col-md-6'>
                   <label for="amountOfTransaction" className='form-inline'>
                     <span>Amount Of Transaction</span>
                     </label>
                     <input type="text" className='form-control form-control-sm w-75'
                      name="AmountOfTransaction"
                      value={formData.AmountOfTransaction}
                      onChange={handleInputChange}/>
                  
                   </div>
                   </div>
                   <div className='row'>
                    <div className='col-md-6'>
                   <label for="dateOfTransaction" className='form-inline'>
                     <span>Date Of Transaction</span>
                      </label>
                     <input type="Date" className='form-control form-control-sm w-75'
                      name="DateOfTransaction"
                      value={formData.DateOfTransaction}
                      onChange={handleInputChange}/>
                  
                   </div>
                   <div className='col-md-6'>
                   <label for="agriculturalIncome" className='form-inline'>
                     <span>Agricultural Income*<span style={{ fontSize: "10px",color:"#929090" }}>(Income Taxable In India)</span></span>
                     </label>
                     <input type="text" className='form-control form-control-sm  w-75'
                      name="AgriculturalIncome"
                      value={formData.AgriculturalIncome}
                      onChange={handleInputChange}/>
                   
                   </div>
                   </div>
                   <div className='row'>
                    <div className='col-md-6'>
                   <label for="incomefromothersource" className='form-inline'>
                     <span>Income From Other Source*<span style={{ fontSize: "10px",color:"#929090" }}> (Income Taxable In India)</span></span>
                     </label>
                     <input type="text" className='form-control form-control-sm  w-75'
                      name="IncomeFromOtherSource"
                      value={formData.IncomeFromOtherSource}
                      onChange={handleInputChange}/>
                  
                   </div>
                   <div className='col-md-6'>
                   <label for="panAcknowledgeNumber" className='form-inline'>
                     <span>PAN Acknowledge Number</span>
                     <input type="text" className='form-control form-control-sm w-75'
                     name="PANAcknowledgeNumber"
                     value={formData.PANAcknowledgeNumber}
                     onChange={handleInputChange}/>
                   </label>
                   </div>
                   </div>
                   <div className='row'>
                    <div className='col-md-6'>
                   <label for="panApplicationDate" className='form-inline'>
                     <span>PAN Application Date</span>
                     </label>
                     <input type="date" className='form-control form-control-sm  w-75'
                      name="PANApplicationDate"
                      value={formData.PANApplicationDate}
                      onChange={handleInputChange}/>                  
                   </div>
                   <div className='col-md-6'>
                   <label for="telephoneNumber" className='form-inline'>
                     <span>Telephone Number</span></label>
                     <input type="text" className='form-control form-control-sm w-75'
                       name="TelephoneNumber"
                       value={formData.TelephoneNumber}
                       onChange={handleInputChange}/>
                   
                   </div>
                   </div>
                   <div className='row'>
                    <div className='col-md-6'>
                   <label for="mobileNumber" className='form-inline'>
                     <span>Mobile Number*</span> </label>
                     <input type="text" className='form-control form-control-sm  w-75'
                     name="MobileNumber"
                     value={formData.MobileNumber}
                     onChange={handleInputChange}/>
                  
                   </div>
                   <div className='col-md-6'>
                   <label for="emailId" className='form-inline'>
                     <span>E-mail ID*</span></label>
                     <input type="text" className='form-control form-control-sm  w-75'
                      name="EmailID"
                      value={formData.EmailID}
                      onChange={handleInputChange}/>
                   
                   </div>
                   </div>
                   <h6 style={{marginTop:"15px"}}>*Mandatory Fields</h6>
                   <div className="form-check">
                      <label className="form-check-label m-1">
                      <input 
              type="checkbox" 
              className="form-check-input"
              name="mandatoryfields1"
              checked={formData.mandatoryfields1}
              onChange={handleCheckboxChange}
              style={{backgroundColor:"#2fb68e",border:'none'}}
            />
                 <p style={{fontSize:"12px",marginTop:"2px"}}>I agree that, the information furnished in this form is true, correct and complete in all respects. Any person making a false statement in the declaration shall be liable to prosecution under section 277 of the Income-tax Act, 1961 and on conviction be punishable, in a case where tax sought to be evaded exceeds twenty-five lakh rupees, with rigorous imprisonment which shall not be less than six months but which may extend to seven years and with fine; in any other case, with rigorous imprisonment which shall not be less than three months but which may extend to two years and with fine.
                 </p></label>
                </div>
                <div className="form-check">
                      <label className="form-check-label m-1">
                      <input 
              type="checkbox" 
              className="form-check-input"
              name="mandatoryfields2"
              checked={formData.mandatoryfields2}
              onChange={handleCheckboxChange}
              style={{backgroundColor:"#2fb68e",border:'none'}}
            />
                 <p style={{fontSize:"12px",marginTop:"2px"}}>I do hereby declare that what is stated above is true to the best of my
                    knowledge and belief. I further declare that I do not have a Permanent Account Number and my/ our estimated total income (including income of spouse, minor child etc. as per section 64 of Income-tax Act, 1961) computed in accordance with the provisions of Income-tax Act, 1961 for the financial year in which the above transaction is held will be less than maximum amount not chargeable to tax.
                    </p></label>
                  </div>
                  <div className="form-check ">
                      <label className="form-check-label m-1">
                      <input 
              type="checkbox" 
              className="form-check-input"
              name="mandatoryfields3"
              checked={formData.mandatoryfields3}
              onChange={handleCheckboxChange}
              style={{backgroundColor:"#2fb68e",border:'none'}}
            /><p style={{fontSize:"12px",marginTop:"2px"}}>The information in the Form 30 shall be applicable to all accounts held by me/us.
                 </p></label>
                  </div>
                  <div className="form-check ">
                      <label className="form-check-label m-1">
                      <input 
              type="checkbox" 
              className="form-check-input"
              name="mandatoryfields4"
              checked={formData.mandatoryfields4}
              onChange={handleCheckboxChange}
              style={{backgroundColor:"#2fb68e" ,border:'none'}}
            /><p style={{fontSize:"12px",marginTop:"2px"}}>Option 4I agree that the declaration will not be accepted where the amount of income of the nature referred to in item 22b exceeds the maximum amount which is not chargeable to tax, unless PAN is applied for and column 21 filled.
                 </p>
                  </label>
                  </div>
                  <hr className='m-0'/>
                  <div>
                  <h6 className='m-2'>How would you like to get the OTP?</h6>
                  </div>
                  <div className="form-check-inline" style={{fontSize:"15px"}}>
           <label className="form-check-label " for='SMS' >
                  <input type="radio" id='SMS'className="form-check-input" style={{marginTop:"4px"}}  defaultChecked
                   name="communicationMethod"
                   value={formData.communicationMethod}
                  
                  onChange={handleRadioChange}
                  />SMS
                </label>
              </div>
            <div className="form-check-inline " style={{fontSize:"15px"}}>
              <label className="form-check-label" for='Email'>
                     <input type="radio" id='Email' className="form-check-input " style={{marginTop:"4px"}}
                      name="communicationMethod"
                      value={formData.communicationMethod}
                     onChange={handleRadioChange} />Email
               </label>
           </div>
            <div className="form-check-inline" style={{fontSize:"15px"}}>
             <label className="form-check-label" for='call'>
             <input type="radio" className=" form-check-input " id='call' style={{marginTop:"4px"}}
              name="communicationMethod"
              value={formData.communicationMethod}
             onChange={handleRadioChange}/>Call
         </label>       
          </div>
          <div>
            <p style={{fontSize:"12px"}}><i>OTP Will be sent to registered mobile number xxxxxxx345</i></p>
         </div>
         <button type="button" className="update_form_sendOtp_btn p-1 m-3"  onClick={handleSubmit}> Send OTP </button>
                  <input type='text' placeholder='Enter OTP' className='Update_form60_Otp m-0 text-center'
                  name="enteredOtp" 
                  value={enteredOtp} 
                  onChange={(e) => setEnteredOtp(e.target.value)} // Update enteredOtp state
                 />
         <hr/>
        <div className='p-1'>
        <button className='update_form_back_btn p-2' type='button'>BACK</button>
        
        <button className='update_form_submit_btn p-2' onClick={handleVerifyOtp} type='button'>SUBMIT</button>
        {/* <button type="button" className="update_form_submit_btn p-2" data-toggle="modal" 
        data-target="#myModal" 
        onClick={handleSendOtp}>
                    Send OTP
                  </button> */}
                 
                  {/* <div className="modal fade" id="myModal">
                    <div className="modal-dialog modal-md">
                      <div className="modal-content">

                        <div className="modal-header ">
                          <h4 className="modal-title text-center">Update form 60 OTP validation</h4>
                          <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>


                       
                        <div class="modal-body">
                          <div className="row">
                          <div className='col-12'>
                       
                        <div className='savings_acct_user_auth_container'>
                            <div className='savings_acct_user_auth_container_header'><h5>Please Enter OTP To Authorize</h5></div>
                            <div className='savings_acct_user_auth_details_container'>
                                <div className='d-flex justify-content-center'>
                                    <div>
                                        <div className='otp_verifi_text text-center'><h5>OTP Verification</h5></div>
                                        <div className='otp_code_mobile'> OTP Code sent to your EmailID usxxxxxxxxx@gmail.com</div>
                                        <div style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
                                        <input 
    type="text" 
    className='form-control form-control-sm col-md- w-50 m-3 text-center'
    name="enteredOtp" 
    value={enteredOtp} 
    onChange={(e) => setEnteredOtp(e.target.value)} 
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
                                
                                
                                <div className='savings_acct_user_auth_text3'>
                                    Please don't share OTP to anyone, even if person claims to be an Royal Islamic bank official. For further details
                                    please <a className='savings_acct_user_auth_text3_atag'>click here</a>.
                                </div>
                                <div className='d-flex justify-content-center'>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                            
                    
                          </div>
                        </div>


                      </div>
                    </div>
                  </div> */}
                 
        </div>
        </form>
        
                </div>
            </div>

        </div>
 
     </div>
     </div>
     <ToastContainer
      position="top-center" // Set the position to top-center
      autoClose={3000} // Close the toast after 5 seconds
      hideProgressBar={false} // Show the progress bar
      newestOnTop={false} // Show newest toast on top
      closeOnClick // Close the toast when clicked
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      toastStyle={{ width: '400px' }}
     />
    </>
  )
}

export default UpdateForm60;