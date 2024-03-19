// import React from "react";
// import './Loans.css'


// const Loanaccounts = () => {
//     return (
//         <div>
//             <div className="container-fluid" style={{marginTop:'60px',backgroundColor:'#f8f9fa',paddingBottom:'130px'}}>
//                 <div className="row">
//                     {/* <i class="fa-solid fa-circle loan_icon col-xl-1"></i><span className="col-xl-11"> Create a side bar for Cards and Loans. In that section we have some main categories or<br></br>
//                         sections displayed in the sidebar. Each main category can be expanded to reveal<br></br>
//                         subcategories or additional options in a dropdown menu.
//                     </span>
//                     <p className="col-xl-1"></p>
//                     <h5 className="col-xl-11 mt-3">For Example</h5> */}
//                     {/* <p className="col-xl-1"></p>
//                     <h5 className="col-xl-10 mt-3">Loans</h5>
//                     <p className="col-xl-2"></p>
//                     <div className="col-xl-9 loans_list">
//                         Loan Account<br></br>
//                         Apply For Loan<br></br>
//                         Loan Application Tracking<br></br>
//                         Track Your Loan<br></br>
//                         Profile Information<br></br>
//                         Service Request


//                     </div> */}


//                 </div>

//                 {/* <div className="row mt-5">

//                     <p className="col-xl-1"></p><h5 className="col-xl-11 mt-3"> Loan Accounts
//                     </h5>
//                     <p className="col-xl-1"></p>
//                     <i class="fa-solid fa-circle loan_icon col-xl-1"></i><span className="col-xl-10"> In this section create a button for
//                     </span>

//                     <p className="col-xl-2"></p>
//                     <div className="col-xl-9 loans_list mt-4">
//                         View Account Summary<br></br>
//                         Request a Service<br></br>
//                         View report



//                     </div>


//                 </div> */}

//                 <div className="card mt-5 loansAccount_maincard">
//                     <div className="row">
//                         <h3 className="col-xl-12 text-center mt-3 mb-5 loans_main_heading">Here is an overview of your loan Accounts with us</h3>
//                         <p className="col-xl-1 col-1"></p>
//                         <div className="col-xl-2 col-2 mx-3">
//                             <div className="card loans_card1">
//                                 <i class="fa-solid fa-hand-holding-dollar loans_main_icon"></i>
//                                 <p className="loan_card_para mt-3">Toatal Sanctioned<br></br> Amount<br></br><i class="fa-solid fa-indian-rupee-sign"></i> 3,00,000</p>
//                             </div>

//                         </div>
//                         <div className="col-xl-2 col-2 mx-3">
//                             <div className="card loans_card2">
//                             <i class="fa-solid fa-circle loans_main_icon"></i>
//                                 <p className="loan_card_para mt-3">Toatal Principal<br></br> Outstanding<br></br><i class="fa-solid fa-indian-rupee-sign"></i> 2,83,000</p>
//                             </div>

//                         </div>
//                         <div className="col-xl-2 col-2 mx-3">
//                             <div className="card loans_card3">
//                             <i class="fa-solid fa-wallet loans_main_icon"></i>
//                                 <p className="loan_card_para mt-3">Toatal Current<br></br> Overdues<br></br><i class="fa-solid fa-indian-rupee-sign"></i> 9,451</p>
//                             </div>

//                         </div>
//                         <div className="col-xl-2 col-2 mx-3">
//                             <div className="card loans_card4">
//                             <i class="fa-solid fa-bell loans_main_icon"></i>
//                                 <p className="loan_card_para mt-2">Amount Available for<br></br> Disbursement<br></br><i class="fa-solid fa-indian-rupee-sign"></i> 0</p>
//                             </div>

//                         </div>

//                     </div>
//                     <div className="card mt-5 m-5 p-3 loans_subcard">
//                         <div className="row">
//                             <p className="col-xl-3 col-1"></p>
//                             <div className="col-xl-1 col-2 mx-3">
//                                 <div className="card loans_card5">
//                                 <i class="fa-solid fa-magnifying-glass loans_subcard_icon"></i>
//                                 </div>
//                                 <p className="loans_subcard_para2 mt-3">view account summary</p>

//                             </div>
                            
//                             <p className="col-xl-1 col-1"></p>
//                             <div className="col-xl-1 col-2 mx-3">
//                                 <div className="card loans_card5">
//                                 <i class="fa-solid fa-pencil loans_subcard_icon"></i>
//                                 </div>
//                                 <p className="loans_subcard_para mt-3">Request a service</p>

//                             </div>
//                             <p className="col-xl-1 col-1"></p>
//                             <div className="col-xl-1 col-2 mx-3">
//                                 <div className="card loans_card5">
//                                 <i class="fa-solid fa-download loans_subcard_icon"></i>
//                                 </div>
//                                 <p className="loans_subcard_para1 mt-3">View Report</p>

//                             </div>
//                             <p className="col-xl-1"></p>
//                             <p className="col-xl-1 col-1">How can<br></br> we help<br></br> you?<span>  <a  data-toggle="tooltip" title="How can we help you!"><i class="fa-solid fa-user loans_usericon card w-50"></i></a></span> </p>
                           
                           

//                         </div>

//                     </div>



//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Loanaccounts;



import React from "react";
import "./Loans.css";

const LoanAccounts = () => {
  return (
    <div className="container" style={{marginTop:"90px"}}>
      <h3 className="text-center mb-5 loans-main-heading">Overview of Your Loan Accounts</h3>
      <div className="row justify-content-center">
        <div className="col-md-3 mb-4">
          <div className="card loans_card1 text-center">
            <i className="fas fa-hand-holding-dollar loan-icon"></i>
            <p className="loan-card-para">Total Sanctioned Amount<br /><span className="amount">&#8377; 3,00,000</span></p>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card  loans_card2 text-center">
            <i className="fas fa-circle loan-icon"></i>
            <p className="loan-card-para">Total Principal Outstanding<br /><span className="amount">&#8377; 2,83,000</span></p>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card loans_card3 text-center">
            <i className="fas fa-wallet loan-icon"></i>
            <p className="loan-card-para">Total Current Overdues<br /><span className="amount">&#8377; 9,451</span></p>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card  loans_card4 text-center">
            <i className="fas fa-bell loan-icon"></i>
            <p className="loan-card-para">Amount Available for Disbursement<br /><span className="amount">&#8377; 0</span></p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-2 text-center mb-3">
          <div className="card loan-card action-card">
            <i className="fas fa-magnifying-glass action-icon"></i>
          </div>
          <p className="action-label">View Account Summary</p>
        </div>
        <div className="col-md-2 text-center mb-3">
          <div className="card loan-card action-card">
            <i className="fas fa-pencil action-icon"></i>
          </div>
          <p className="action-label">Request a Service</p>
        </div>
        <div className="col-md-2 text-center mb-3">
          <div className="card loan-card action-card">
            <i className="fas fa-download action-icon"></i>
          </div>
          <p className="action-label">View Report</p>
        </div>
      </div>
      <div className="text-center">
        <p className="help-text">How can we help you? <i className="fas fa-user"></i></p>
      </div>
    </div>
  );
};

export default LoanAccounts;
