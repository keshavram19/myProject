import React from 'react';
import './Accounts.css';


const ConfirmPaye = () => {
    return (
        <>
        <div  className="Payment_container_fluid">
            <div class="row">
                
                <div style={{ textAlign: 'start',}} class="col-md-12">
                    <h4 className='Payment_heading_container'>After Royal Islamic Virtual payee add now</h4>
                    <h6 className='Payment_Summary_container'>Confirm Payee</h6>
                    <hr className='Payment_hr_container'></hr>
                    <div className='Payment_section_continer'>
                        <div class="row">
                            <div class="col-md-1" >
                                <h6 className='Payment_details_container'>DETAILS</h6> 
                            </div>
                            <div  className="col-md-11"> 
                            <div className='payment_confirm_container'>
                            <h6><span><i class="fa-solid fa-play"></i></span>CONFIRMATION</h6>
                            </div>
                            </div>
                        </div>
                        <hr style={{ borderColor: 'white' }}></hr>
                        <div class="row">
                            <div class="col-md-4">
                                <h6 className='payment_islamicpayee_container'>Add Royal Islamic Bank Virtual Account Payee</h6> 
                            </div>
                            <div  className="col-md-8">
                                <p className='payment_payee_container'>+View Payee List</p> </div>
                        </div>
                    </div>
                    <div className='payment_frompages_container'>
                        <div class="row mb-3">
                            <div  className="col-md-2">
                                <div className='Payment_AccountNumber_container'>
                                <p>Payee Account Number*</p></div>
                                </div>
                            <div  className="col-md-10">
                                <input  type='text' className='payment_inputAccount_container'></input></div>
                        </div>
                        <div class="row mb-3">
                            <div  clas="col-md-2">
                            <div className='Payment_AccountNickName_container'>
                                <p>Payee Nick Name*</p></div>
                                </div>
                            <div  clas="col-md-10">
                                <input  type='text' className='payment_inputNickName_container'></input></div>
                        </div>
                        <div class="row mb-3">
                            <div  className="col-md-2">
                            <div className='Payment_AccountType_container'>
                                <p>Account Type*</p></div>
                                </div>

                            <div clas="col-md-10"> 
                        
                            <select  className='payment_selecttype_container'>
                                
                                <option value="savings" >Current Account</option>
                                <option value="savings" >Savings</option>
                                <option value="salary">Salary</option>
                            </select>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div  className="col-md-2">
                            <div className='Payment_PayeeBank_container'>
                                <p>Enter Payee Bank IFSC Code*</p></div>
                                </div>
                            <div clas="col-md-6">
                                <input  type='text' className='payment_inputPayeeBank_container'></input></div>

                            <div class="col-md-2">
                                <button  className='button_PayeeBank_container'>SEARCH</button>
                                </div>
                        </div> <div class="row mb-3">
                            <div  className="col-md-2">
                            <div className='Payment_AccountNumber_container'>
                                <p>Payee Account Number*</p></div>
                                </div>
                            <div className="col-md-10"><input  type='text' className='payment_inputAccountNumber_container'></input></div>
                        </div>
                        <div class="row mb-3">
                            <div style={{ width: '250px',fontFamily:'poppins',fontWeight:'500',fontSize:'14px' }} clas="col-md-2">
                                <div className='Payment_ConfirmNumber_container'>
                                <p>Confirm Payee Account Number*</p></div>
                                </div>
                            <div clas="col-md-3"><input  type='text' className='payment_inputConfirmNumber_container'></input></div>
                            <div clas="col-md-2">
                            <div className='Payment_PayeeTransferred_container'>
                                <p>Ensure that the payee account number entered is correct so that money is transferred to the intended payee</p></div>
                                </div>
                            

                        </div>
                        <div class="row mb-3">
                        <div className='Payment_PayeeVirtualaccount_container'>
                            <p>Royal Islamic Bank Virtual Account Payee details</p></div>
                            </div>
                        <div className="row mb-3">
                            <div className="col-md-2">
                            <div className='Payment_PayeeRegistration_container'>
                                <p>Payee Registration alert to be sent on mobile number*</p></div>
                                </div>
                            
                            <div clas="col-md-10">
                                <input  className='Payment_inputRegisteredPayee_container' placeholder='XXXXXXXXXXX2621' type='text'></input></div>
                        </div>
                        <div class='row'>
                        <div class='col-md-2'>
                            <div className='Payment_mandatory_container'>
                            <p className='Payment_paragraph_container'>*mandatory</p>
                             
                             </div>
                        </div>
                    </div>
                    </div>
                    <div className="Payment_background_container">
                        <button className='Payment_buttonback_container'>Back</button>
                        <button className='Payment_buttonNext_container'>Next</button>
                    </div>
                    <div className="Payment_backgroundNotes_container">
                        <div className="Payment_Notes_container"><p>Notes:</p></div>
                        <div className="Payment_groundnotes_container">
                        <p className="Payment_paragraphbank_container" >1. As per the RBI circular dated Oct 14, 2010, transfer of funds through electronic mode will be executed only on the basis of the account number of the beneficiary provided while initiating the transaction, name will not be considered as a criteria for providing credit Kindly ensure that you enter the correct beneficiary account number.</p>
                        <p className="Payment_paragraphbank_container" >2. Ensure that the Payee Account Number and IFSC entered by you is correct</p>
                        <p className="Payment_paragraphbank_container" >3. Royal Islamic Bank does not take any responsibility and shall not be liable for claims on incorrect details entered</p>
                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ConfirmPaye;