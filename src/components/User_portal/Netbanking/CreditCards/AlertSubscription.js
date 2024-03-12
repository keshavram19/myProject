import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import apiList from '../../../../lib/apiList';




 function AlertSubscription() {
  const [customerAccData, setCustomerAccData] = useState([]);
    const accountNumber = 123456789;
    const [subscriptionAlert, setSubscriptionAlert] = useState('');
    const [individualCreditCard, setIndividualCreditCard] = useState({  
    });
    const [creditCardNum, setCreditCardNum] = useState('');
    const [customerDetails, setCustomerDetails] = useState();
    useEffect(() => {
      getUserDetails()
  }, []);
  const getUserDetails = async () => {
      const options = {
          method: 'GET'
      };
      const response = await fetch(`${apiList.customerAccountDetails}${accountNumber}`, options);
      const data = await response.json();
      setCustomerDetails(data.details);
      setCustomerAccData(data.details.userCreditCardDetails);
      setCreditCardNum(data.details.userCreditCardDetails[0].creditCardNumber);
  };
  useEffect(() => {
    if (!creditCardNum && customerAccData.length > 0) {
        setCreditCardNum(customerAccData[0].creditCardNumber);
    }
    else {
        getIndividualCreditCard(creditCardNum);
    }
}, [creditCardNum]);
const handleCreditCardNumber = (event) => {
    setCreditCardNum(event.target.value);
};
const getIndividualCreditCard = async (selectedCreditCardNum) => {
  const options = {
      method: 'GET'
  };
  try {
      const response = await fetch(`${apiList.customerCreditCardDetails}${accountNumber}/${creditCardNum}`, options);
      const data = await response.json();
      setIndividualCreditCard(data);
      
  } catch (error) {
      console.error('Error fetching individual credit card:', error);
  }
};

const handleSubscriptionAlert = (event) => {
  setSubscriptionAlert(event.target.value);
};

const handleSubmit = async () => {
  try {
      const response = await axios.put(`${apiList.customerCreditCardDetails}${accountNumber}/${creditCardNum}`, {
          subscriptionAlert: subscriptionAlert
      });
      console.log(response.data);
      toast.success('Subscription alert updated successfully');
  } catch (error) {
      console.error('Error updating subscription alert:', error);
      toast.error('Failed to update subscription alert');
  }
};


  
  return (
    <>
      <div className='container-fluid'>
      <h2 style={{color:'#EA6A47'}} className='p-3'>Alert Subscription</h2>
        <div className='Alert_Subscription_MainContainer'>
          <div className='alert_subscription-form ' >
          <h4 className='alert_subscription-form_heading2 p-3' style={{ backgroundColor:'#2fb68e',color:'white'}}>Alert Subscription</h4>
          <label for="creditCardNumber" className='form-inline'>
                     <span className='col-md-3'>Credit Card Number</span>
                     <select required className=' custom-select custom-select-sm col-md-3 w-25'
                                                        value={creditCardNum} onChange={handleCreditCardNumber}>
                                                        {customerAccData.map((creditcard, index) => (
                                                            <option key={index} value={creditcard.creditCardNumber}>
                                                                {creditcard.creditCardNumber}
                                                            </option>
                                                        ))}
                                                    </select>
                   </label>                                                                                                                                                                                               
                   <label htmlFor='alertSubscription' className='form-inline '>
                            <span className='col-md-3'>Subscription Alert</span>
                            <select name="cardNumber" className="custom-select custom-select-sm col-md-3 w-25"
                                value={subscriptionAlert} onChange={handleSubscriptionAlert}>
                                <option value="" selected>Please select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>
                      {/* <a href="#" style={{textDecoration:'underline', fontSize:'14px', color:'black'}} className='p-3'>VIEW SAMPLE</a> */}
                   <hr/>
                   <div className='alert_Subscription_Btns p-3'> 
                   <button className='alert_Subscription_ResetBtn p-2'>RESET</button>
                   <button className='alert_Subscription_SubmitBtn p-2' type='button' onClick={handleSubmit}>SUBMIT</button>
               
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
export default AlertSubscription


// royal - ebca28
// islamic - 2fb68e