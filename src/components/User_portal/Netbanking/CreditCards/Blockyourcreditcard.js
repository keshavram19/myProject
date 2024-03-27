import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import apiList from '../../../../lib/apiList';

 function BlockCreditCard() {
 
  const [customerAccData, setCustomerAccData] = useState([]);
  
  const [reason, setReason] = useState('');
    
  const [individualCreditCard, setIndividualCreditCard] = useState({
    
  });
  const [otp, setOtp] = useState('');
 
  const [creditCardNum, setCreditCardNum] = useState('');
  const [customerDetails, setCustomerDetails] = useState({
    accountNumber: ''
});

let token = sessionStorage.getItem('loginToken');

  useEffect(() => {
    getUserDetails()
}, []);

const getUserDetails = async () => {
  const options = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      }
  };

  try {
      const response = await fetch(apiList.customerDetails, options)
      if (response.ok) {
          const data = await response.json()
          setCustomerDetails(data.user);
          if (data.user.userCreditCardDetails && data.user.userCreditCardDetails.length > 0) {
              setCustomerAccData(data.user.userCreditCardDetails);
              setCreditCardNum(data.user.userCreditCardDetails[0].creditCardNumber);
          }
      }
  } catch (error) {
      console.log(error.message);
  }
};


useEffect(() => {
  if (customerAccData.length > 0) {
      setCreditCardNum(customerAccData[0].creditCardNumber);
  }
  else {
      // handle the case where customerAccData is empty
  }
}, [customerAccData]);



const handleCreditCardNumber = (event) => {
  setCreditCardNum(event.target.value);
};

const getIndividualCreditCard = async (selectedCreditCardNum) => {
const options = {
    method: 'GET'
};
try {
  const response = await fetch(`${apiList.customerCreditCardDetails}${customerDetails.accountNumber}/${creditCardNum}`, options);
  const data = await response.json();
    setIndividualCreditCard(data);
    
} catch (error) {
    console.error('Error fetching individual credit card:', error);
}
};
  
const handleSubmit = async () => {
  try {
      const response = await axios.put(`${apiList.BlockCreditCard}/${customerDetails.accountNumber}/${creditCardNum}`, {
          reason,
         
          CreditCardStatus: 'blocked' // Assuming you want to set the credit card status to blocked
      },{
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      toast.success(response.data.message);
      // Reset the form fields after successful submission
     
  } catch (error) {
      console.error('Error blocking credit card:', error);
      toast.error('Failed to block credit card. Please try again.');
  }
};

const handleVerify = async () => {
  try {
      const response = await axios.post(`${apiList.BlockCreditCardOTPVerify}/${customerDetails.accountNumber}/${creditCardNum}`, {
          receivedOTP: otp
      },{
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      toast.success(response.data.message);
      // Reset the OTP field after successful submission
      setOtp('');
      setReason('');
      
  } catch (error) {
      console.error('Error verifying OTP:', error);
      toast.error('Invalid OTP. Credit card block failed.');
  }
};

  
  return (
   <>
      <div className='container-fluid'>
      <h2 className='Block_Credit_Card_heading1 p-2' style={{color:'#EA6A47'}}>Service Requests</h2>
        <div className='Block_Credit_Card_MainContainer mt-3' >
          
          <div className='Block_Credit_Card_Section'>
            <h4 className='Block_Credit_Card_Section_heading2 p-3' style={{ backgroundColor:'#2fb68e',color:"white"}}>Block Credit Card</h4>
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
            <label for="CardHolderName" className='form-inline'>
             <span className='col-md-3'>Card Holder Name</span>
              <input type="text" className='form-control form-control-sm col-md-3 w-25' placeholder='Enter Your Name'  value={`${customerDetails && customerDetails.firstname} ${customerDetails && customerDetails.lastname}`} 
        readOnly/>
            </label>  
            
            <label for="CVVNumber" className='form-inline'>
             <span className='col-md-3'>CVV Number</span>
             <input type="text" className='form-control form-control-sm col-md-3 w-25' placeholder='XXX'        value={customerDetails?.userCreditCardDetails?.[0]?.userCreditCardcvv}
 />
            </label>
         <label for='crediCardNumber' className='form-inline '>
          <span className='col-md-3'>Reason for Blocking</span>
          <select name="cardNumber" className="custom-select custom-select-sm col-md-3 w-25 Credit_Card_Reason"
                                value={reason} onChange={(e) => setReason(e.target.value)}>
         <option value="" selected>Select a reason</option>
        <option value="Fraudulent Activity">Fraudulent Activity</option>
        <option value="Security Concerns">Security Concerns</option>
        <option value="Suspicious Transactions">Suspicious Transactions</option>
        <option value="Late Payments">Late Payments</option>
        <option value="Exceeding Credit Limit">Exceeding Credit Limit</option>
        <option value="Lost or Stolen Card">Lost or Stolen Card</option>
        <option value="Account Inactivity">Account Inactivity</option>
       </select>
                      
         </label>
         <label for="email" className='form-inline'>
             <span className='col-md-3'>Email</span>
              <input type="text" className='form-control form-control-sm col-md-3 w-25' placeholder='XXXXXXXXXX@gmail.com'  value={customerDetails && customerDetails.email} readOnly/>
            </label>
          </div>
<hr/>
          <div className='otpVerification'>
            <p style={{fontSize:"14px"}}><i>Otp send to your Registered MailID XXXXXXXXXXX@gmail.com</i></p>

            <button className='Block_Credit_Card_sendOtpBtn p-1 m-3'onClick={handleSubmit} >SendOtp</button>
            <input type='text' placeholder='Enter OTP' className='Block_Credit_Card_OTP'value={otp} onChange={(e) => setOtp(e.target.value)}/>

          </div>
          <div className='Block_Credit_Card_OtpVerifying'>
          <button className='Block_Credit_Card_submitBtn 'onClick={handleVerify}>SUBMIT</button>
          </div>
         
          {/* <button className='Block_Credit_Card_submitBtn p-2 m-3' onClick={handleOTPVerification}>Submit</button> */}
        


        </div>
        <div className='blockcreditcard_note pt-2'>
         <h6 className='m-0'><span style={{fontSize:"14px"}}>Notes:</span></h6>
          <p > 1. Once you block or hotlist your card, you will not be able to use it again.</p>
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
      pauseOnHover/>
   </>
  )
}
export default  BlockCreditCard