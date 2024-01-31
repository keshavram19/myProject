export const server = "http://localhost:4444";

const apiList ={
    customerAccountDetails: `${server}/api/userDetails`,
    userAuthentication: `${server}/api/otp-send`,
    userAuthVerification: `${server}/api/verify-otp`,
    form60OTPSend:`${server}/form60Userdetails/send-otp`,
    form60OtpVerification:`${server}/form60Userdetails/verify-otp`,
    form60UserDetails:`${server}/form60Userdetails/userdetails`
}

export default apiList;