import React from 'react';
import PaymentSidebar from '../Sidebar/PaymentsAndTransferSidebar';
import { Link } from 'react-router-dom';


const VirtualPaye  = () => {
    return (
        <div className="container-fluid" style={{ marginTop: "90px" }}>
            <div class="row">
                <div class="col-3" >
                    <PaymentSidebar />
                </div>
                <div className='col-9'>
                    <div className='row confirm_biller'>
                        <div>
                                <h4 className='p-3'>Confirm Payee</h4>
                            </div>
                        <div className='card p-3'>
                            <div className="d-flex mt-1">
                                <div className=".confirm_biller">
                                    <h6>DETAILS</h6> 
                                </div>
                                <div className="ml-2"> 
                                    <h6><span><i class="fa-solid fa-play"></i></span>  Confirmation </h6>
                                </div>
                            </div>
                            <hr/>
                            <div className='confirm_biller_buttons_tag_account'>
                                <h6>Add other Royal Islamic Bank Account Payee</h6>
                                <button className='confirm_biller_buttons'><Link>View Payee List</Link></button>
                            </div>
                            <div className='row confirm_biller_tags mt-2'>
                                <div className='col-3 mt-1'>
                                <p>Payee Account Number*</p>
                                </div>
                                <div className='col-3'>
                                <input type='text' className='form-control'></input>
                                </div>
                            </div>
                            <div className='row confirm_biller_tags mt-2'>
                                <div className='col-3 mt-1'>
                                <p>Payee Nickname*</p>
                                </div>
                                <div className='col-3'>
                                <input type='text' className='form-control'></input>
                                </div>
                            </div>
                            <div className='row confirm_biller_tags mt-2'>
                                <div className='col-3 mt-1'>
                                <p>Account type*</p>
                                </div>
                                <div className='col-3'>
                                <select className='form-control'>
                                  <option>Savings</option>
                                  <option>Current</option>
                                </select>
                                </div>
                            </div>
                            <div className='row confirm_biller_tags mt-2'>
                                <div className='col-3 mt-1'>
                                <p>Enter Payee Bank IFSC Code*</p>
                                </div>
                                <div className='col-3'>
                                <input type='text' className='form-control'></input>
                                </div>
                                <div className='col-2'> 
                                  <button className='confirm_biller_buttons_account'>Search</button>
                                </div>
                            </div>
                            <div className='row confirm_biller_tags mt-2'>
                                <div className='col-3 mt-1'>
                                <p>Account Number*</p>
                                </div>
                                <div className='col-3'>
                                <input type='text' className='form-control'></input>
                                </div>
                            </div>
                            <div className='row confirm_biller_tags mt-2'>
                                <div className='col-3 mt-1'>
                                <p>Confirm Payee Account Number*</p>
                                </div>
                                <div className='col-3'>
                                <input type='text' className='form-control'></input>
                                </div>
                                <div className='col-6'>
                                  <div className='d-flex flex-row'>
                                  <p>Avoid sending money to wrong payee.</p>
                                  <Link>Validate Now!</Link>
                                  </div>
                                  
                                  
                                </div>
                            </div>
                            <div className='mt-2'>
                              <h6>Royal Islamic Virtual Account Pay Details</h6>
                            </div>
                            <div className='row confirm_biller_tags mt-2'>
                                <div className='col-3 mt-1'>
                                <p>Payee Registration alert to be sent on mobile number*</p>
                                </div>
                                <div className='col-3'>
                                <input type='text' className='form-control'></input>
                                </div>
                            </div>

                            <p>*mandatory</p>

                            <div className='mt-1'>
                            <button className="confirm_biller_buttons_account">Back</button>
                            <button className="confirm_biller_buttons_accounting ml-3">Next</button>
                            </div>

                            <div className='mt-3'>
                                <div>
                                <h6>Notes:</h6>
                                </div>
                                <div>
                                    <ol>
                                        <li>As per the RBI circular dated Oct 14, 2010, transfer of funds through electronic mode will be executed only on the basis of the account number of the beneficiary provided while initiating the transaction, name will not be considered as a criteria for providing credit Kindly ensure that you enter the correct beneficiary account number.</li>
                                        <li>A maximum of 10 Payees can be added in one day.</li>
                                        <li>Waiting period post Payee addition is 30 minutes</li>
                                        <li>Ensure that the Payee Account Number entered by you is correct</li>
                                        <li>Royal Islamic Bank does not take any responsibility and shall not be liable for claims on incorrect details entered</li>
                                    </ol>
                                </div>
                                
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VirtualPaye ;