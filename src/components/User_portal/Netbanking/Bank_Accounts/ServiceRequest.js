import BankaccountSidebar from '../Sidebar/BankaccountSidebar';
import './Accounts.css';
import { Link } from 'react-router-dom';

const ServiceRequest = () => {
    return (
        <div>
           
            <div className="container-fluid service_background_main pt-5" style={{marginTop:"50px"}}>
                <div className="row">
                    <div className='col-3'>
                       <BankaccountSidebar/>
                    </div>
                    <div className="col-9">
                        <input type="text" placeholder="Serch for Service Request" className='service_input'/>
                        <div className='row'>
                            <div className='col-md-7'>
                                <div className='row'>
                                    <h6 className='mt-2 col-xl-12 service_table_heading'>Service Requests</h6>
                                    <table class="table mt-1 " style={{marginLeft:'15px',width:'95%'}}>
                                        <thead>
                                            <tr className='' style={{backgroundColor:'#d3d0cbff'}}>
                                                <th>SR.NO</th>
                                                <th>Account No</th>
                                                <th>Request</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className='service_table text-center shadow'>
                                                <td colspan="4">No Service Request.</td>
                                            </tr>
                                        </tbody>
                                    </table>


                                </div>

                                <div className='row'>
                                    <h6 className='mt-2 col-xl-10 col-lg-10 col-md-10 col-8 service_table_heading'>Deliverables</h6>
                                    <h6 className='col-xl-2 col-lg-2 col-md-2 col-4 service_table_heading'>View all</h6>
                                    <table class="table" style={{marginLeft:'15px',width:'95%'}}>
                                        <thead>
                                            <tr className='' style={{backgroundColor:'#d3d0cbff'}}>
                                                <th>SR.NO</th>
                                                <th>Account No</th>
                                                <th>Request</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className='service_table text-center shadow'>
                                                <td colspan="4">No Deliverables for primary account,click view All for other accounts .</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>

                                <div className='card '>
                                    <div className='row'>
                                        <div className='col-xl-5 col-lg-5 col-md-5'>
                                            <div className='card shadow'>
                                                <div className='row p-2'>
                                                    <i class="fa-solid fa-building-columns col-xl-2 col-lg-2 col-md-2 col-2 mt-1 service_icon"></i>
                                                    <p className='col-xl-8 col-lg-8 col-md-8 col-8 service_table_heading'>Bank Accounts</p>
                                                    <i class="fa-solid fa-angle-up col-xl-2 col-lg-2 col-md-2 col-2 mt-2 service_icon"></i><br></br><br></br>
                                                    <i class="fa-solid fa-credit-card col-xl-2 col-lg-2 col-md-2 col-2 mt-1 service_icon"></i>
                                                    <p className='col-xl-8 col-lg-8 col-md-8 col-8 service_table_heading'>Credit Cards</p>
                                                    <i class="fa-solid fa-angle-up col-xl-2 col-lg-2 col-md-2 col-2 mt-2 service_icon"></i><br></br><br></br>
                                                    <i class="fa-solid fa-hand-holding-dollar col-xl-2 col-lg-2 col-2 col-md-2 mt-1 service_icon"></i>
                                                    <p className='col-xl-8 col-lg-8 col-md-8 col-8 service_table_heading'>Deposits</p>
                                                    <i class="fa-solid fa-angle-up col-xl-2 col-lg-2 col-md-2 col-2 mt-2 service_icon"></i>
                                                </div>

                                            </div>
                                            <div className='card shadow mt-2'>
                                                <div className='row p-2'>

                                                <i class="fa-solid fa-hand-holding-dollar col-xl-2 col-lg-2 col-md-2 col-2 mt-1 service_icon"></i>
                                                    <p className='col-xl-10 col-lg-10 col-md-10 col-10 service_table_heading'>Loan</p>
                                                    <i class="fa-solid fa-hand-holding-dollar col-xl-2 col-lg-2 col-md-2 col-2 mt-1 service_icon"></i>
                                                    <p className='col-xl-10 col-lg-10 col-md-10 col-10 service_table_heading'>Demat</p>
                                                </div>

                                            </div>
                                            <div className='card shadow mt-2'>
                                            <div className='row p-2'>
                                            <i class="fa-solid fa-link col-xl-2 col-lg-2 col-md-2 col-2 mt-1 service_icon"></i>
                                                <p className='col-xl-10 col-lg-10 col-md-10 col-10 service_table_heading'>Link Accounts/Policies</p>
                                            </div>

                                            </div>
                                            <div className='card shadow mt-2'>
                                            <div className='row p-2'>
                                                <i class="fa-solid fa-money-bill-transfer col-xl-2 col-lg-2 col-md-2 col-2 mt-1 service_icon"></i>
                                                <p className='col-xl-10 col-lg-10 col-md-10 col-10 service_table_heading'>Free & Travel exis </p>
                                            </div>

                                            </div>
                                            <div className='card shadow mt-2'>
                                            <div className='row p-2'>
                                            <i class="fa-solid fa-hand-holding-dollar col-xl-2 col-lg-2 col-md-2 col-2 mt-1 service_icon"></i>
                                                <p className='col-xl-10 col-lg-10 col-md-10 col-10 service_table_heading'>Pockets</p>


                                            </div>

                                            </div>

                                            
                                            
                                          

                                        </div>
                                        <div className='col-xl-7 col-lg-7 col-md-7 mt-4'>
                                            <p>Money Multiplier Deposit</p>
                                            <p>Standard Fixed Deposit</p>
                                            <p>Tax saver Fixed Deposit:Lock-in Period of 5 years</p>
                                            <p>Apply for a credit card against your Fixed Deposit</p>
                                            <p>View update Nominee</p>
                                            <p>Money Multiplier Deposit</p>
                                            <p>closure/Renewal of fixed  Deposit</p>
                                            <p>Generate FD Advice</p>

                                        </div>

                                    </div>

                                </div>






                            </div>
                            <div className='col-md-5'>
                                <h6>Quick Links</h6>
                                {/* <button className='service_btn'>Stop Cheques</button> */}
                                <Link to='/user/account/generate-debitcard-pin' > <button className='service_btn'>Generate Card PIN</button></Link>
                                <Link to='/user/account/block-debit-card'><button className='service_btn'>Block Credit Card</button></Link>
                                <Link to='/user/account/chequebook-req'><button className='service_btn'>Cheque Book Request</button></Link>
                                <Link to='/user/account/block-debit-card'><button className='service_btn'>Block or Unblock ATM/Debit Card</button></Link>
                                {/* <button className='service_btn'>Positive Pay</button> */}
                                <div className='card p-3 mt-3 shadow'>
                                    <div className='card p-3  shadow servicerequest_subcard'>
                                        <h5 className='text-center service_table_heading'>Do  you need help with any of the following?</h5>
                                        <hr></hr>
                                        <p>Open your savings Accounts now</p>
                                        <hr></hr>
                                        <p>How can I deactive my savings account?</p>
                                        <hr></hr>
                                        <p>How can i upload KYC documents online?</p>
                                        <hr></hr>
                                        <p>How to get my passbook?</p>
                                        <hr></hr>
                                        <p>What is the monthly average balance i need to maintain in my savings account?</p>
                                        
                                    </div>
                                    <div className='row mt-3 p-1'>
                                    <input type='text' placeholder='type your question here' className='service_input2 col-xl-8 col-lg-8 col-md-8 col-12'/>
                                    <i class="fa-regular fa-share-from-square service_sendicon col-xl-4 col-lg-4 col-md-4 col-12"></i>
                                    </div>
                                    

                                </div>

                            </div>

                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default ServiceRequest;