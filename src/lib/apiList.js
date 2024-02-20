export const server = "http://localhost:4444";


const apiList ={
    generateCertificate: `${server}/api/generateCertificate`,

    customerAccountDetails: `${server}/api/userDetails/`,
    userAuthentication: `${server}/api/otp-send`,

    fixeddepositeform:`${server}/api/fixeddeposites`,
    fixedadvice:`${server}/api/generate-pdf`,
    quickFundTransfer: `${server}/api/quickFundTransfer`,
    userAuthVerification: `${server}/api/verify-otp`,
    createVerificationCode: `${server}/api/generate-otp`,
    authenticateOTP: `${server}/api/validate-otp`,



   
    userAuthVerify: `${server}/api/verify-otp`,
    customerCreditCardDetails: `${server}/api/creditcarddetails/`,
    customerCrediCardLimitOTP: `${server}/api/creditcardlimit-otp`,
    updateDomesticCardUsage: `${server}/api/update-domesticcardusage`,

   

    inwardRemittance:`${server}/api/submitForm`,
    taxOTPVerify:`${server}/api/verify-OneTP`,
    taxOTPSend:`${server}/api/send-OneTP`,
    debitNotification: `${server}/api/debit-notification`,
  
    paymentTransaction:`${server}/api/payment-Type`,
    transferTransaction:`${server}/api/transfer-Type`,


    
    createVerificationCode: `${server}/api/generate-otp`,
    authenticateOTP: `${server}/api/validate-otp`,
    updateDomesticLimits: `${server}/api/updateDomesticLimits/`,
    updateInternationalLimits: `${server}/api/updateInternationalLimits/`,   
    GenerateCardPin : `${server}/api/generate-Debit-Card-Pin`,
    blockATMCard : `${server}/api/blockCard/`,




    form60OTPSend:`${server}/form60Userdetails/send-otp`,
    form60OtpVerification:`${server}/form60Userdetails/verify-otp`,
    form60UserDetails:`${server}/form60Userdetails/userdetails`,
    updateDomesticLimits: `${server}/api/updateDomesticLimits/`,
    updateInternationalLimits: `${server}/api/updateInternationalLimits/`,   
    GenerateCardPin : `${server}/api/generate-Debit-Card-Pin`,


    GenerateCreditcardpin : `${server}/api/generate-Credit-Card-Pin`,


    BlockingCreditCard: `${server}/api/blockcreditcard/`,
    BlockCardOTPValidation:`${server}/api/OtpValidation/`,
    BlockCardOTPVerifying:`${server}/api/verifyOTP`,

    AlertSubscription:`${server}/api/alertsubscription/`,



    blockATMCard : `${server}/api/blockCard/`,
    creditcardEmiconversion : `/emiConversion`,
    autoDebitSetupYes: `${server}/api/autodebit/yes`,
    autoDebitSetupNo: `${server}/api/autodebit/no`
}




export default apiList;

