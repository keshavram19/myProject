
import { FaCircle } from "react-icons/fa";
const LoanApplicationTracking = ()=>{
    return(<>
    <h4 className='loanapptracking_mainhead'>Loan Application Tracking</h4>
    <hr/>
    <div className="loanapptracking_head">
          Know Your Loan Application Status
    </div>
    <div className='loanapptracking_content'>
        <div className='loanapptracking_input1' >
            <input type='text' placeholder='Application Number' className='loanapptracking_input2'></input>
        </div>
        <div>
            <button className='loanapptracking_proceedbtn'>Proceed</button>
        </div>

    </div>
    <div className='loanapptracking_status'>
        <h4>How to Check Loan Status</h4>
        <p className='loanapptracking_paramain'>You may use several methods to keep tabs on the current state of your  loan. You can get a sense of what you’ll need to monitor the progress of your application for a loan from the list below:</p>
        <div className='container'>
            <h6><FaCircle className='loanapptracking_icon'/>Mobile Phone Number:</h6>
            <p className='loanapptracking_para1'>Never forget to give your registered mobile number to the bank when applying for a personal loan. Several banks and NBFCs enable applicants to determine their loan application status via their mobile phone numbers. Not only can you use the mobile number to chat with a customer rep, but also for online monitoring.</p>

        </div>
        <div className='container'>
            <h6><FaCircle className='loanapptracking_icon'/>Reference Number:</h6>
            <p className='loanapptracking_para1'>The bank produces a reference number if you submit a personal loan application. Once you’ve applied, this number will be given to your mobile device. When monitoring the progress of your loan application, you can utilize this number at several points.</p>

        </div>
        <div className='container'>
            <h6><FaCircle className='loanapptracking_icon'/>Net Banking:</h6>
            <p className='loanapptracking_para1'>By logging into your net banking accounts as a current bank customer, you can monitor the progress of your personal loan status. The application status must be checked under the loans area of the account when you log in.</p>

        </div>
        <div className='container'>
            <h6><FaCircle className='loanapptracking_icon'/>Tracking Through App:</h6>
            <p className='loanapptracking_para1'>Tracking personal loan status through a mobile app offers unparalleled convenience and transparency. By utilizing the app, applicants can instantly access real-time updates on their loan progress, ensuring they stay informed.</p>
            <p className='loanapptracking_para1'>This method typically involves a user-friendly interface where individuals can log in securely, check their application status, view required documents, and receive notifications about approval or additional requirements. Additionally, apps often provide interactive features, allowing users to communicate with customer support representatives for immediate assistance directly. Overall, tracking through an app streamlines the borrowing experience, enhancing customer satisfaction by providing quick, easy, and on-the-go access to vital loan information.</p>

        </div>
    </div>
    
    </>)
}

export default LoanApplicationTracking;