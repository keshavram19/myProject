import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import apiList from '../../../../lib/apiList';

 function BlockCreditCard() {
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [ExpiryDate, setExpiryDate] = useState('');
  const [CVVNumber, setCVVNumber] = useState('');
  const [reason, setReason] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  

  const handleBlockCreditCard = async () => {
    try {
      const response = await axios.post(apiList.BlockingCreditCard, {
        creditCardNumber,
        cardHolderName,
        ExpiryDate,
        CVVNumber,
        reason,
        email,
      });
      console.log(response.data);
      sendOTP();
    } catch (error) {
      console.error('Error blocking credit card:', error);
    }
  };
  
  const sendOTP = async () => {
    try {
      const response = await axios.post(apiList.BlockCardOTPValidation, { email });
      console.log(response.data);
      toast.success('An OTP has been sent to your email address');
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const handleOTPVerification = async () => {
    try {
      const response = await axios.post(apiList.BlockCardOTPVerifying + `/${email}`, { otp });
      console.log(response.data);
      toast.success('OTP verified. Your Credit card is blocked.');
      setCreditCardNumber('');
    setCardHolderName('');
    setExpiryDate('');
    setCVVNumber('');
    setReason('');
    setEmail('');
    setOtp('');
    } catch (error) {
      console.error('Error verifying OTP:', error);
      toast.error('Invalid OTP. Please try again.');
    }
  };

  return (
   <>
      <div className='container-fluid'>
      <h2 className='Block_Credit_Card_heading1 p-2' style={{color:'#EA6A47'}}>Service Requests</h2>
        <div className='Block_Credit_Card_MainContainer mt-3' >
          
          <div className='Block_Credit_Card_Section'>
            <h4 className='Block_Credit_Card_Section_heading2 p-3' style={{ backgroundColor:'#2fb68e',color:"white"}}>Block Credit Card</h4>
            <label for="CreditCard" className='form-inline'>
                     <span className='col-md-3'>Credit Card Number</span>
                     <input type="text" className='form-control form-control-sm col-md-3 w-25' placeholder='XXXX-XXXX-XXXX' value={creditCardNumber} onChange={(e) => setCreditCardNumber(e.target.value)}/>
                   </label> 
            <label for="CardHolderName" className='form-inline'>
             <span className='col-md-3'>Card Holder Name</span>
              <input type="text" className='form-control form-control-sm col-md-3 w-25' placeholder='Enter Your Name' value={cardHolderName} onChange={(e) => setCardHolderName(e.target.value)}/>
            </label>  
            <label for="ExpiryDate" className='form-inline'>
             <span className='col-md-3'>Expiry Date</span>
              <input type="text" className='form-control form-control-sm col-md-3 w-25' placeholder='XX/XX'value={ExpiryDate} onChange={(e) => setExpiryDate(e.target.value)}/>
            </label>
            <label for="CVVNumber" className='form-inline'>
             <span className='col-md-3'>CVV Number</span>
              <input type="text" className='form-control form-control-sm col-md-3 w-25' placeholder='XXX'value={ CVVNumber} onChange={(e) => setCVVNumber(e.target.value)} />
            </label>
         <label for='crediCardNumber' className='form-inline '>
          <span className='col-md-3'>Reason for Blocking</span>
          <select name="cardNumber" className="custom-select custom-select-sm col-md-3 w-25 Credit_Card_Reason"value={reason} onChange={(e) => setReason(e.target.value)}>
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
              <input type="text" className='form-control form-control-sm col-md-3 w-25' placeholder='XXXXXXXXXX@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
          </div>
<hr/>
          <div className='otpVerification'>
            <p style={{fontSize:"14px"}}><i>Otp send to your Registered MailID XXXXXXXXXXX@gmail.com</i></p>

            <button className='Block_Credit_Card_sendOtpBtn p-1 m-3' onClick={handleBlockCreditCard}>SendOtp</button>
            <input type='text' placeholder='Enter OTP' className='Block_Credit_Card_OTP' value={otp} onChange={(e) => setOtp(e.target.value)} />

          </div>
          <div className='Block_Credit_Card_OtpVerifying'>
          <button className='Block_Credit_Card_submitBtn ' onClick={handleOTPVerification}>SUBMIT</button>
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