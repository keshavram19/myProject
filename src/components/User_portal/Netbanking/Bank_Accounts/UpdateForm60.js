import React from 'react';
import './Accounts.css'; 
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';




function UpdateForm60() {
  return (
    <>
    <div className='container-fluid' style={{marginTop:"90px"}}>
     <div className='side_bar_section'>
        <div className='row'>
            <div className='col-3'>
            <BankaccountSidebar />
            </div>
            <div className='col-9'>
                <div className='update_form_container ' style={{backgroundColor:' rgb(255, 250, 244)'}}>
                
                    <div className='update_form_heading_Container'>
                    <h3 className='update_form_heading p-2'>Update Form 60</h3>
                    </div>
                    <form className='update_form_section'>
                   <label for="savingsAccountNumber" className='form-inline'>
                     <span className='col-md-5'>Savings Account Number*</span>
                     <input type="text" className='form-control form-control-sm col-md-5 w-25'/>
                   </label>
                   <label for="declarentsName" className='form-inline'>
                     <span className='col-md-5'>Declarent's Name</span>
                     <input type="text" className='form-control form-control-sm col-md-4 w-25'/>
                   </label>
                   <label for="declarentsDOB" className='form-inline'>
                     <span className='col-md-5'>Declarent's Date Of Birth</span>
                     <input type="date" className='form-control form-control-sm col-md-4 w-25'/>
                   </label>
                   <label for="fathersName" className='form-inline'>
                     <span className='col-md-5'>Father's Name*</span>
                     <input type="text" className='form-control form-control-sm col-md-4 w-25'/>
                   </label>
                   <label for="addressLine1" className='form-inline'>
                     <span className='col-md-5'>Address Line1</span>
                     <input type="text" className='form-control form-control-sm col-md-4 w-25'/>
                   </label>
                   <label for="addressLine2" className='form-inline'>
                     <span className='col-md-5'>Address Line2</span>
                     <input type="text" className='form-control form-control-sm col-md-4 w-25'/>
                   </label>
                   <label for="town/City" className='form-inline'>
                     <span className='col-md-5'>Town/City</span>
                     <input type="text" className='form-control form-control-sm col-md-4 w-25'/>
                   </label>
                   <label for="State" className='form-inline'>
                     <span className='col-md-5'>State</span>
                     <input type="text" className='form-control form-control-sm col-md-4 w-25'/>
                   </label>
                   <label for="pincode" className='form-inline'>
                     <span className='col-md-5'>Pin Code</span>
                     <input type="text" className='form-control form-control-sm col-md-4 w-25'/>
                   </label>
                   <label for="amountOfTransaction" className='form-inline'>
                     <span className='col-md-5'>Amount Of Transaction</span>
                     <input type="text" className='form-control form-control-sm col-md-4 w-25'/>
                   </label>
                   <label for="dateOfTransaction" className='form-inline'>
                     <span className='col-md-5'>Date Of Transaction</span>
                     <input type="Date" className='form-control form-control-sm col-md-4 w-25'/>
                   </label>
                   <label for="agriculturalIncome" className='form-inline'>
                     <span className='col-md-5'>Agricultural Income*<br/><span style={{ fontSize: "11px" }}>(Income Taxable In India)</span></span>
                     <input type="text" className='form-control form-control-sm col-md-4 w-25'/>
                   </label>
                   <label for="incomefromothersource" className='form-inline'>
                     <span className='col-md-5'>Income From Other Source*<br/><span style={{ fontSize: "11px" }}>(Income Taxable In India)</span></span>
                     <input type="text" className='form-control form-control-sm col-md-4 w-25'/>
                   </label>
                   <label for="panAcknowledgeNumber" className='form-inline'>
                     <span className='col-md-5'>PAN Acknowledge Number</span>
                     <input type="text" className='form-control form-control-sm col-md-4 w-25'/>
                   </label>
                   <label for="panApplicationDate" className='form-inline'>
                     <span className='col-md-5'>PAN Application Date</span>
                     <input type="date" className='form-control form-control-sm col-md-4 w-25'/>
                   </label>
                   <label for="telephoneNumber" className='form-inline'>
                     <span className='col-md-5'>Telephone Number</span>
                     <input type="text" className='form-control form-control-sm col-md-4 w-25'/>
                   </label>
                   <label for="mobileNumber" className='form-inline'>
                     <span className='col-md-5'>Mobile Number</span>
                     <input type="text" className='form-control form-control-sm col-md-4 w-25'/>
                   </label>
                   <label for="emailId" className='form-inline'>
                     <span className='col-md-5'>E-mail ID</span>
                     <input type="text" className='form-control form-control-sm col-md-4 w-25'/>
                   </label>
                   <h6>*Mandatory Fields</h6>
                   <div className="form-check">
                      <label className="form-check-label m-1">
                 <input type="checkbox" className="form-check-input" value=""/><p style={{fontSize:"13px"}}>I agree that, the information furnished in this form is true, correct and complete in all respects. Any person making a false statement in the declaration shall be liable to prosecution under section 277 of the Income-tax Act, 1961 and on conviction be punishable, in a case where tax sought to be evaded exceeds twenty-five lakh rupees, with rigorous imprisonment which shall not be less than six months but which may extend to seven years and with fine; in any other case, with rigorous imprisonment which shall not be less than three months but which may extend to two years and with fine.
                 </p></label>
                </div>
                <div className="form-check">
                      <label className="form-check-label m-0">
                 <input type="checkbox" className="form-check-input" value=""/><p style={{fontSize:"13px"}}>I do hereby declare that what is stated above is true to the best of my
                    knowledge and belief. I further declare that I do not have a Permanent Account Number and my/ our estimated total income (including income of spouse, minor child etc. as per section 64 of Income-tax Act, 1961) computed in accordance with the provisions of Income-tax Act, 1961 for the financial year in which the above transaction is held will be less than maximum amount not chargeable to tax.
                    </p></label>
                  </div>
                  <div className="form-check ">
                      <label className="form-check-label m-0">
                 <input type="checkbox" className="form-check-input" value=""/><p style={{fontSize:"13px"}}>The information in the Form 30 shall be applicable to all accounts held by me/us.
                 </p></label>
                  </div>
                  <div className="form-check ">
                      <label className="form-check-label m-0">
                 <input type="checkbox" className="form-check-input" value=""/><p style={{fontSize:"13px"}}>Option 4I agree that the declaration will not be accepted where the amount of income of the nature referred to in item 22b exceeds the maximum amount which is not chargeable to tax, unless PAN is applied for and column 21 filled.
                 </p>
                  </label>
                  </div>
                  <hr className='m-0'/>
                  <div>
                  <h5 className='m-2'>How would you like to get the OTP?</h5>
                  </div>
                  <div className="form-check-inline col-md-1 p-2">
           <label className="form-check-label " for='SMS'>
                  <input type="radio" id='SMS'className="form-check-input" name="communicationMethod" defaultChecked/>SMS
                </label>
              </div>
            <div className="form-check-inline col-md-1">
              <label className="form-check-label" for='Email'>
                     <input type="radio" id='Email' className="form-check-input" name="communicationMethod" />Email
               </label>
           </div>
            <div className="form-check-inline col-md-1">
             <label className="form-check-label" for='call'>
             <input type="radio" className="form-check-input" id='call' name="communicationMethod"/>Call
         </label>       
          </div>
          <div>
            <p style={{fontSize:"14px"}}><i>OTP Will be sent to registered mobile number xxxxxxx345</i></p>
         </div>
        </form>
        <hr/>
        <div className='p-1'>
        <button className='update_form_back_btn p-2'>BACK</button>
        <button className='update_form_submit_btn p-2'>SUBMIT</button>
        </div>
                </div>
            </div>

        </div>
 
     </div>
     </div>
    </>
  )
}

export default UpdateForm60;