export const server = "http://localhost:4444";

const apiList ={
    customerAccountDetails: `${server}/api/userDetails/`,
    userAuthentication: `${server}/api/otp-send`,
    userAuthVerification: `${server}/api/verify-otp`
}

export default apiList;