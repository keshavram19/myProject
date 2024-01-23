import React from 'react';
import './Accounts.css';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';

function PMSocialSecuritySchemes() {
  return (
   <>
   <div className='container-fluid' style={{marginTop:"90px"}}>
     <div className='side_bar_section'>
        <div className='row'>
            <div className='col-3'>
              <BankaccountSidebar />
              </div>
            <div className='col-9'>
                <div className='PMSSS_form_Container' style={{backgroundColor:' rgb(255, 250, 244)'}}>
                
                    <div className='PMSSS_form_heading'>
                    <h3 className='p-2 PMSSS_main_heading1'>Pradhan Mantri Jeevan Jyoti Bima Yojana </h3>
                    <h5 className='p-2 PMSSS_main_heading2'>Get a Life Cover with Sum Assured of 2 lakh</h5>
                    </div>
                    <div className='PMSSS_form p-3'>
                      <form className='PMSSS_form_section'>
                      <label for="selectsavingsAccountNumber" className='form-inline'>
                     <span className='col-md-6'>Select Savings Account Number*</span>
                     <select name="cars" className="custom-select custom-select-sm col-md-4">
                          <option selected>--Please Select--</option>
                              <option value="option1">option1</option>
                              <option value="option2">option2</option>
                              <option value="option3">option3</option>
                      </select>
                     </label>
                     <label for="premium" className='form-inline'>
                     <span className='col-md-6'>Premium</span>
                     <p className='col-md-4'> ₹ 250</p>
                   </label>
                   <label for="gender" className='form-inline'>
                     <span className='col-md-6'>Gender*</span>
                     <select name="gender" className="custom-select custom-select-sm col-md-4">
                          <option selected>--Please Select--</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>              
                      </select>
                     </label>
                     <label for="AadharNumber" className='form-inline'>
                     <span className='col-md-6'>Aadhar Number <br/><span style={{ fontSize: "11px" }}>(optional)</span></span>
                     <input type="text" className='form-control form-control-md col-md-4'/>
                     <a href='#' className='PMSSS_update_email'>Update Aadhar</a>
                   </label>
                   <label for="NomineeName" className='form-inline'>
                     <span className='col-md-6'>Nominee Name* </span>
                     <input type="text" className='form-control form-control-md col-md-4' placeholder='Name'/>
                   </label>
                   <label for="NomineeRelation" className='form-inline'>
                     <span className='col-md-6'>Nominee Relation</span>
                     <select name="nomineerelation" className="custom-select custom-select-sm col-md-4">
                          <option selected>--Please Select--</option>
                          <option value="friend">Friend</option>
                       <option value="family">Family Member</option>
                          <option value="colleague">Colleague</option>
                                <option value="other">Other</option>             
                      </select>
                     </label>
                     <label for="GuardianName" className='form-inline'>
                     <span className='col-md-6'>Guardian Name <br/><span style={{ fontSize: "11px" }}>(only if nominee is minor)</span></span>
                     <input type="text" className='form-control form-control-md col-md-4'/>
                    
                   </label>
                   <label for="email" className='form-inline'>
                     <span className='col-md-6'>E-mail ID**</span>
                     <input type="text" className='form-control form-control-md col-md-4' placeholder='E-mail'/>
                     <a href="#" className='PMSSS_update_email'>Update E-mail ID</a>
                     </label> 
                     <div className="form-check">
                      <label className="form-check-label">
                 <input type="checkbox" className="form-check-input" value=""/><p style={{fontSize:"13px",fontWeight:"normal"}}>I hereby authorize Royal Islamic Bank to debit my Savings Account with the applicable premium amount as per the PMJJBY scheme rules along with Goods 
                 and Services Tax, if applicable. I confirm that I have read, understood and accept the applicable scheme rules and the <a href='#' style={{textDecoration:"underline"}}>Terms and Conditions</a>.
                  The cover shall commence from the date of request of enrolment in the scheme and end on May 31. Please call our Customer Care in case of any queries
                  </p></label>
                </div>
                      </form>
                      <hr/>
                      <button className='PMSSS_form_back_btn '>BACK</button>
        <button className='PMSSS_form_submit_btn'>SUBMIT</button>
                    </div>
                </div>
            </div>

        </div>

     </div>
     </div>
   </>
  )
}

export default PMSocialSecuritySchemes;