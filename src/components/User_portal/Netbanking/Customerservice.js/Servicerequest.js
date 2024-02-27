import { CiBank } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";
import { GrCreditCard } from "react-icons/gr";
import { FaHandHoldingUsd } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { GrLink } from "react-icons/gr";
import{ Link } from 'react-router-dom';
import React, { useState , useEffect } from 'react';


import './Customerservice.css'
import DropDownBankAccount from "./Servierequestdropdown";
const Servicerequest = () => {
    return (
        <div>

            <div className='container-fluid'  style={{marginTop:"90px"}}>
                <div className='row'>
                    {/* <div className='col-md-1'></div> */}
                    <div className='col-md-7 '>
                        <div className='text-start mt-4'>
                            <div>
                                <input type='text' className=' shadow-sm Service_input' placeholder='Search for Service Request' />
                            </div>
                            <div>
                                <h6 className='mt-2 mb-3'>Service Requests</h6>
                                <div className='row ServiceRequest shadow-sm '>
                                    <div className='col-md-3 col-3 col-small_screen_font'>
                                        <div>SR No</div>
                                    </div>
                                    <div className='col-md-3 col-4 col-small_screen_font'>
                                        <div>Account No.</div>
                                    </div>
                                    <div className='col-md-3 col-3 col-small_screen_font'>
                                        <div>Request</div>
                                    </div>
                                    <div className='col-md-3 col-2 col-small_screen_font'>
                                        <div>Status</div>
                                    </div>
                                </div>
                                <div className=' row ServiceRequest_down shadow-sm '>
                                    <p className='text-center mt-1'>No Service Requests</p>
                                </div>
                            </div>
                            <div className='mt-1'>
                                <div className='row mt-2 mb-2'>
                                    <h6 className='col-md-9 col-9'>Deliverables</h6><button className='col-md-3 col-3 View_all text-end '><u>View all</u></button>
                                </div>
                                <div className='row ServiceRequest shadow-sm '>
                                    <div className='col-md-3 col-4 col-small_screen_font'>
                                        <div>Shipment Type</div>
                                    </div>
                                    <div className='col-md-3 col-4 col-small_screen_font'>
                                        <div>Dispatch Date</div>
                                    </div>
                                    <div className='col-md-3 col-2 col-small_screen_font'>
                                        <div>AWB No</div>
                                    </div>
                                    <div className='col-md-3 col-2 col-small_screen_font'>
                                        <div>Status</div>
                                    </div>
                                </div>
                                <div className=' row ServiceRequest_down shadow-sm '>
                                    <p className='text-center mt-1'>No Deliverables for primary click view all for other accounts</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='text-start'>
                            <h6>
                                Quick Links
                            </h6>
                            <div className='four_types_service_request'>
                                {/* <button   className='QuickLinks_buttons' Link to=' ' >Stop Cheques</button> */}
                                
                                <button  className='QuickLinks_buttons' > 
                                <Link to='/user/profile/generatepin' className=' DropDown_Sub_Lists_Loan_BankingAPP' >Generate Card PIN</Link></button>
                                <button  className='QuickLinks_buttons'>
                                  <Link to='/user/blockcreditcard' className=' DropDown_Sub_Lists_Loan_BankingAPP'>Block Credit Card</Link></button>
                                <button   className='QuickLinks_buttons'>
                                    <Link to='/user/account/chequebook-req' className=' DropDown_Sub_Lists_Loan_BankingAPP'>Cheque Book Request</Link></button>
                                <button  className='QuickLinks_buttons' >
                                    <Link to='/user/account/block-debit-card'className=' DropDown_Sub_Lists_Loan_BankingAPP' >Block or Unblock ATM/Debit card</Link></button>
                                {/* <button  Link to='' className='QuickLinks_buttons' >Positive pay</button> */}
                             </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-9'>
                        <div className='drop_downs_service_request '>
                            <div className='row'>
                                <div className='col-md-4 text-start shadow-sm' style={{ border: '2px solid rgb(243,249,254)' }} >
                                    <div className='row drop_down_bank'>
                                        <div className=' col-lg-1 col-md-1 col-1 col-xl-1'><CiBank /></div>
                                        <div className=' col-lg-8 col-md-7 col-9 col-xl-9 service_bank_dropdown  ' style={{ fontWeight: 600 }}> Bank Accounts</div>
                                        <div className='col-lg-1 col-md-1 col-1 col-xl-1 '><IoIosArrowUp /></div>

                                    </div>
                                    <div className='row drop_down_bank'>
                                        <div className='col-lg-1 col-md-1 col-1 col-xl-1'><GrCreditCard /></div>
                                        <div className='col-lg-8 col-md-7 col-9 col-xl-9 service_bank_dropdown'>Credit Cards</div>
                                        <div className='col-lg-1 col-md-1 col-1 col-xl-1'><IoIosArrowUp /></div>
                                    </div>
                                    <div className='row drop_down_bank'>
                                        <div className='col-lg-1 col-md-1 col-1 col-xl-1'><FaHandHoldingUsd /></div>
                                        <div className='col-lg-8 col-md-7 col-9 col-xl-9 service_bank_dropdown'>Deposits</div>
                                        <div className='col-lg-1 col-md-1 col-1 col-xl-1'><IoIosArrowUp /></div>
                                    </div>
                                    <div className='row drop_down_bank'>
                                        <div className='col-lg-1 col-md-1 col-1 col-xl-1'><FaHandHoldingUsd /></div>
                                        <div className='col-md-9 col-lg-10 col-xl-10 col-10 service_bank_dropdown1'>Loan</div>
                                    </div>
                                    <div className='row drop_down_bank'>
                                        <div className='col-lg-1 col-md-1 col-1 col-xl-1'><FaHandHoldingUsd /></div>
                                        <div className='col-md-9 col-lg-10 col-xl-10 col-10 service_bank_dropdown1'>Demat</div>
                                    </div>
                                    <div className='row drop_down_bank'>
                                        <div className='col-lg-1 col-md-1 col-1 col-xl-1'><IoIosLink /></div>
                                        <div className='col-md-9 col-lg-10 col-xl-10 col-10 service_bank_dropdown1'>Link Accounts/Policies</div>
                                    </div>
                                    <div className='row drop_down_bank'>
                                        <div className='col-lg-1 col-md-1 col-1 col-xl-1'><GrLink /></div>
                                        <div className='col-md-9 col-lg-10 col-xl-10 col-10 service_bank_dropdown1'>Forex & Travel cards</div>
                                    </div>
                                    <div className='row drop_down_bank'>
                                        <div className='col-lg-1 col-md-1 col-1 col-xl-1'><FaHandHoldingUsd /></div>
                                        <div className='col-md-9 col-lg-10 col-xl-10 col-10 service_bank_dropdown1'>pockets</div>
                                    </div>
                                </div>
                                <div className='col-md-7  text-start shadow-sm' style={{ border: '2px solid rgb(243,249,254)' }}>

                                    <div className='card_right_service'><u>Transfer your Account to nearest branch</u></div>
                                    <div className='card_right_service'><u>View/Update Nominee</u></div>
                                    <div className='card_right_service'><u>PAN updation</u></div>
                                    <div className='card_right_service'><u>Update Form 60</u></div>
                                    <div className='card_right_service'><u>Request for Direct Benefit Transfer(DBT)</u></div>
                                    <div className='card_right_service'><u>Update Employee Name/Convert Your Account to Salary Account</u></div>
                                    <div className='card_right_service'><u>Request for Family Banking</u></div>
                                    <div className='card_right_service'><u>Convert Your SB account to NRO account</u></div>
                                    <div className='card_right_service'><u>FATCA/CRS Updation</u></div>
                                    <div className='card_right_service'> <u>Account conversion from Resident to NRI not done</u></div>
                                    <div className='card_right_service'><u>Address change requestd earlier not done</u></div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div> */}
            <DropDownBankAccount/>
        </div>
    )
}
export default Servicerequest;