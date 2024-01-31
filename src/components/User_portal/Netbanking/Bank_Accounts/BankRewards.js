import React from "react";
import './Accounts.css';
 import BankRewardBgImg from '../../../../Images/bank_rewards.jpeg'
 import BankaccountSidebar from '../Sidebar/BankaccountSidebar';


 function BankRewardPoints() {
  return (
    <>
   <div className='container-fluid' style={{marginTop:"90px"}}>
     <div className='nav-section'><h2 className='text-center'>BankRewardPoints</h2></div>
     <div className='side-bar-section'>
        <div className='row'>
            <div className='col-3'>
                <BankaccountSidebar />
          </div>
            <div className='col-9 ' >
            <div className='bank-reward-sec-2'>
                <img src={BankRewardBgImg} style={{height:'300px',width:'100%'}} alt='bank reward img'/>
                 </div>
                <div className='bank-reward-section p-5'>
                
                <h4>Your Savings Account/ Credit Card Points</h4>
                <table className='table table-bordered text-center'> 
                 <thead className='thead-light'>
                 <tr>
              <th>Royal Islamic Savings/Credit Card Account Number</th>
                <th>Point Balance*</th>
                   <th>Redeem Now</th>
                 </tr>
                 </thead>
                 <tbody>
                    <tr>
                    <td>123456789012</td>
                      <td>150.0</td>
                    <td><a href='#' style={{textDecoration:"underline"}}>Redeem Now</a></td>
                    </tr>
                    <tr>
                    <td>123456789012</td>
                      <td>200.0</td>
                    <td><a href='#' style={{textDecoration:"underline"}}>Redeem Now</a></td>
                    </tr>
                 </tbody>
                </table>
                <div className='Bank-reward-note'>
                    <p style={{fontSize:"13px"}}><span style={{fontSize:"16px"}}><b>Note:</b></span> The above-mentioned Reward Points are not eligible for cards such as Amazon Pay Credit Card, MakeMyTrip Royal Islamic Bank Platinum Credit Card, MakeMyTrip Royal Islamic Bank Signature Credit Card, etc. For a detailed list of cards, <a href='#'  style={{textDecoration:"underline"}}>CLICK HERE</a></p>
                    </div>
                
                </div>
               
            </div>

        </div>

     </div>
     </div>
   </>
  )
}

export default BankRewardPoints;