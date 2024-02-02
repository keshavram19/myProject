export const server = "http://localhost:4444";

const apiList ={
    customerAccountDetails: `${server}/api/userDetails`,
    userAuthentication: `${server}/api/otp-send`,
    userAuthVerification: `${server}/api/verify-otp`,
    
    inwardRemittance:`${server}/api/submitForm`,
    taxOTPVerify:`${server}/api/verify-OneTP`,
    taxOTPSend:`${server}/api/send-OneTP`,
  
    paymentTransaction:`${server}/api/payment-Type`,
    transferTransaction:`${server}/api/transfer-Type`
    
}



export default apiList;