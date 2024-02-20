import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import apiList from '../../../../lib/apiList';




 function AlertSubscription() {
  const [CreditCardNumber, setCreditCardNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [MobileNumber, setMobileNumber] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');
  const creditCardDetails = {
    CreditCardNumber:CreditCardNumber,
    emailAddress:emailAddress,
    MobileNumber:MobileNumber,
    subscriptionStatus:subscriptionStatus
  }

  const handleAlertSubscription = async () => {
    try {
      const response = await axios.post(apiList.AlertSubscription, {
        CreditCardNumber,
        emailAddress,
        MobileNumber,
        subscriptionStatus,
      });
      
      if (response.status === 201) {
        toast.warning('You are already subscribed to the alert notifications.');
      } else {
        toast.success('Your alertSubscription status was successful!');
      }
      
      console.log(response.data);
      setCreditCardNumber('');
      setEmailAddress('');
      setMobileNumber('');
      setSubscriptionStatus('');

    } catch (error) {
      console.error('Error SubscriptionAlert:', error.response.data.message); // accessing error message from server response
      toast.error('Failed to submit alertSubscription. Please try again.'
        );
    }
  };
  
  return (
    <>
      <div className='container-fluid'>
      <h2 style={{color:'#EA6A47'}} className='p-2'>Alert Subscription</h2>
        <div className='Alert_Subscription_MainContainer'>
          <div className='alert_subscription-form ' >
          <h4 className='alert_subscription-form_heading2 p-3' style={{ backgroundColor:'#2fb68e',color:'white'}}>Alert Subscription</h4>
          <label for="creditCardNumber" className='form-inline'>
                     <span className='col-md-3'>Credit Card Number</span>
                     <input type="text" className='form-control form-control-sm col-md-3 w-25' placeholder='XXXX-XXXX-XXXX' value={CreditCardNumber} onChange={(e) => setCreditCardNumber(e.target.value)}/>
                   </label>
                     <label for="EmailAddress" className='form-inline'>
                     <span className='col-md-3'>E-Mail Address</span>
                     <input type="text" className='form-control form-control-sm col-md-3 w-25' placeholder='XXXXXXXXXX@gmail.com' value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)}/>
                   </label>                                                                                                                                                                                                          
                   <label for="MobileNumber" className='form-inline'>
                     <span className='col-md-3'>Mobile Number</span>
                     <input type="text" className='form-control form-control-sm col-md-3 w-25' placeholder='XXXXXX2345' value={MobileNumber} onChange={(e) => setMobileNumber(e.target.value)}/>
                   </label>
                   
                    <label for='alertSubscription' className='form-inline '>
          <span className='col-md-3'>Subscription Alert</span>
          <select name="cardNumber" className="custom-select custom-select-sm col-md-3 w-25" value={subscriptionStatus} onChange={(e) => setSubscriptionStatus(e.target.value)} >
         <option value="" selected>Please select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
        
      </select>
                      
                   </label>
                      {/* <a href="#" style={{textDecoration:'underline', fontSize:'14px', color:'black'}} className='p-3'>VIEW SAMPLE</a> */}
                   <hr/>
                   <div className='alert_Subscription_Btns p-3'> 
                   <button className='alert_Subscription_ResetBtn p-2'>RESET</button>
                   <button className='alert_Subscription_SubmitBtn p-2' onClick={handleAlertSubscription} type='button'>SUBMIT</button>
                   </div> 
                   </div>
                   <div className='alert_Subscription_Notes p-2'>
                   <h6 className='m-0'><span style={{fontSize:"14px"}}>Notes:</span></h6>
                   <p className='m-0'>1. We currently support delivery to all major GSM operatorsand Reliance CDMA phones in india.</p>
                   <p className='m-0'>2. The Credit Card E-Mail and Mobile alerts are totally free.</p>
                   <p className='m-0'>3. E-Mail Id will be updated in 24 hours in our records.</p>

                   </div>
                          
        </div>

      </div>
      <ToastContainer/>
    </>
  )
}
export default AlertSubscription


// royal - ebca28
// islamic - 2fb68e