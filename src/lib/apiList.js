export const server = "http://localhost:4444";

const apiList ={
    customerAccountDetails: `${server}/api/userDetails/`,
    userAuthentication: `${server}/api/otp-send`,
    userAuthVerification: `${server}/api/verify-otp`,
    generateCertificate: `${server}/api/generateCertificate`,
    

}

export default apiList;