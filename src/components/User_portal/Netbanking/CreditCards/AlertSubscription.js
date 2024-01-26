import React from 'react';


 function AlertSubscription() {
  return (
    <>
      <div className='container-fluid'>
      <h2 style={{color:'#EA6A47'}} className='p-2'>Alert Subscription</h2>
        <div className='Alert_Subscription_MainContainer'>
          <div className='alert_subscription-form ' style={{ backgroundColor:'#f8f7f5'}}>
          <h4 className='alert_subscription-form_heading2 p-3' style={{ backgroundColor:'#e7e3e3'}}>Alert Subscription</h4>
          <label for="creditCardNumber" className='form-inline'>
                     <span className='col-md-3'>Select Your Card Number*</span>
                     <select name="cardNumber" className="custom-select custom-select-sm col-md-3 w-25">
                          <option selected>---Please Select---</option>
                              <option value="option1">123456789012</option>
                              <option value="option2">123456789012</option>
                              <option value="option3">123456789012</option>
                      </select>
                     </label>
                     <label for="EmailAddress" className='form-inline'>
                     <span className='col-md-3'>E-Mail Address</span>
                     <input type="text" className='form-control form-control-sm col-md-3 w-25' placeholder='XXXXXXXXXX@gmail.com' />
                   </label>
                   <label for="MobileNumber" className='form-inline'>
                     <span className='col-md-3'>Mobile Number</span>
                     <input type="text" className='form-control form-control-sm col-md-3 w-25' placeholder='XXXXXX2345'/>
                   </label>
                    <a href="#" style={{textDecoration:'underline', fontSize:'14px', color:'black'}} className='p-3'>VIEW SAMPLE</a>
                   
                   <hr/>
                   <div className='alert_Subscription_Btns p-3'> 
                   <button className='alert_Subscription_ResetBtn p-2'>RESET</button>
                   <button className='alert_Subscription_SubmitBtn p-2'>SUBMIT</button>
                   </div> 
                   </div>
                   <div className='alert_Subscription_Notes p-2'>
                   <h6 className='m-0'>Notes:</h6>
                   <p className='m-0'>1. We currently support delivery to all major GSM operatorsand Reliance CDMA phones in india.</p>
                   <p className='m-0'>2. The Credit Card E-Mail and Mobile alerts are totally free.</p>
                   <p className='m-0'>3. E-Mail Id will be updated in 24 hours in our records.</p>

                   </div>
                          
        </div>

      </div>
    </>
  )
}
export default AlertSubscription