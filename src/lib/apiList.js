export const server = "http://localhost:4444";


const apiList ={

    // admin login starts

    adminLogin: `${server}/admin/admin-login`,
    addAccountDetails:`${server}/admin/add-account-details/`,
    UserDetailsAccountOpening:`${server}/admin/userdetails`,
    UserDetailsAccountOpeningSendOTP:`${server}/admin/send-otp`,
    UserDetailsAccountOpeningVerifyOTP:`${server}/admin/verify-otp`,
    individualrequestedetails: `${server}/admin/individualrequesteduserdetails`,
    getuserrequesteddetails: `${server}/admin/requesteduserdetails/`,
    requestedUserDetailsByEmail: `${server}/admin/individualrequesteduserdetails/`,


    // admin login ends

    generateCertificate: `${server}/api/generateCertificate`,
    customerAccountDetails: `${server}/api/userDetails/`,
    userAuthentication: `${server}/api/otp-send`,

    // Personal banking login
    customerLogin: `${server}/auth/login-netbanking`,
    customerForgotPasswordOtp: `${server}/auth/forgot-password-otp`,
    customerPasswordOtpVerify: `${server}/auth/verify-forgot-password-otp`,
    customerLoginPasswordUpdate: `${server}/auth/update-newpassword`,
    
    fixeddepositeform:`${server}/api/fixeddeposites`,
    fixedadvice:`${server}/api/generate-pdf`,
    loanaccount:`${server}/api/loan-accounts`,
    quickFundTransfer: `${server}/api/quickFundTransfer`,
    userAuthVerification: `${server}/api/verify-otp`,
    createVerificationCode: `${server}/api/generate-otp`,
    authenticateOTP: `${server}/api/validate-otp`,
    inwardRemittance:`${server}/api/submitForm`,
    taxOTPVerify:`${server}/api/verify-OneTP`,
    taxOTPGenerate:`${server}/api/generated-otp`,
    taxOTPReSend:`${server}/api/resend-otp`,
    paymentTransaction:`${server}/api/payment-Type`,
    transferTransaction:`${server}/api/transfer-Type`,
    userAuthVerify: `${server}/api/verify-otp`,
    customerCreditCardDetails: `${server}/api/creditcarddetails/`,
    customerCrediCardLimitOTP: `${server}/api/creditcardlimit-otp`,
    updateDomesticCardUsage: `${server}/api/update-domesticcardusage`,
    debitNotification: `${server}/api/debit-notification`,
    updateDomesticLimits: `${server}/api/updateDomesticLimits/`,
    updateInternationalLimits: `${server}/api/updateInternationalLimits/`,   
    GenerateCardPin : `${server}/api/generate-Debit-Card-Pin`,
    blockATMCard : `${server}/api/blockCard/`,
    form60OTPSend:`${server}/form60Userdetails/send-otp`,
    form60OtpVerification:`${server}/form60Userdetails/verify-otp`,
    form60UserDetails:`${server}/form60Userdetails/userdetails`,
    GenerateCreditcardpin : `${server}/api/generate-Credit-Card-Pin`,
    BlockCreditCard:`${server}/api/blockcreditcard`,
    BlockCreditCardOTPVerify:`${server}/api/verifyOTP`,
    creditcardEmiconversion : `/emiConversion`,
    autoDebitSetupYes: `${server}/api/autodebit/yes`,
    autoDebitSetupNo: `${server}/api/autodebit/no`,

    addAccountDetails:`${server}/api/add-account-details/`,
    UserDetailsAccountOpening:`${server}/api/userdetails`,
    UserDetailsAccountOpeningSendOTP:`${server}/api/send-otp`,
    UserDetailsAccountOpeningVerifyOTP:`${server}/api/verify-otp`,

  // requestedUserDetailsByEmail: `${server}/auth/user-account-details`,



    payLater:`${server}/api/payLaterAccount`,
    billDetails:`${server}/api/payLaterAccount/pay`,


}


export default apiList;

