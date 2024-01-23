
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';
import './Accounts.css';
import { Link, useNavigate } from "react-router-dom";

const RecurringDeposit = () => {

    let navigate = useNavigate();

    const Backtodepositepage=()=>{
        navigate('/user/account/fixed-deposits')
    }
    return (
        <div>
           
            <div className="container-fluid" style={{marginTop:"90px"}}>
                <div className="row">
                    <div className='col-3 '>
                       <BankaccountSidebar />
                    </div>
                    <div className="col-9 ">
                        <div className="row">
                          
                            <p className="mt-3 text-end">How to manage your fixed Deposits?</p>
                            <button className="recurring_btn">Watch iplay demo</button>

                        </div>
                        <div className="row">
                           <p className="col-12" onClick={Backtodepositepage}>{'<'} Back to Deposit Page</p>
                           <p className="col-xl-1 col-lg-1"></p>
                            <button className="col-xl-2 col-lg-2 col-md-2 recurring_btn1 " onClick={Backtodepositepage}>Fixed Deposit</button>
                            <button className="col-xl-2 col-lg-3 col-md-3 recurring_btn1">Credit card against FD</button>
                            <button className="col-xl-2 col-lg-2 col-md-2 recurring_btn1">Recurring Deposit</button>
                            <button className="col-xl-2 col-lg-2 col-md-2 recurring_btn1">iwish</button>
                            <p className="col-xl-1 col-lg-1"></p>

                        </div>
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 col-md-8 mt-5">
                                <p className="col-12">How much do you want to invest(min 500 and max 10,00,000)</p>
                                <p className="col-12"><i class="fa-solid fa-indian-rupee-sign"></i></p>
                                <hr style={{borderBottom: '2px solid black'}}></hr>
                                <p className="col-12 recurring_amount"><i class="fa-solid fa-indian-rupee-sign"></i> 220000.00 balance available</p>
                                <hr style={{borderBottom: '1px solid black'}}></hr>
                                <p className="col-12">Tenure(Minimum 6 months and maximum 10 years and in multiples of 3)</p>


                                <div className="row col-12">
                                    <div className="col-xl-2">
                                        <input type="radio" name="gender" /> 1 year
                                    </div>
                                    <div className="col-xl-3">
                                        <input type="radio" name="gender" /> 9 months
                                    </div>
                                    <div className="col-xl-6">
                                        <input type="radio" name="gender" /> Choose your own tenure
                                    </div>

                                </div>
                                <hr style={{borderBottom: '1px solid black'}}></hr>
                                <div className="row col-12 mt-5">
                                <p className="col-xl-6">Monthly debit date</p>
                                <p className="col-xl-6">Maturity date</p>
                                <p className="col-xl-12 recurring_para">Debit Date <i class="fa-solid fa-angle-down"></i> </p>
                                <p className="col-xl-12 mt-3"><input type="checkbox"/> I agree to <b className='recurring_para'>Terms and conditions</b></p>
                                <button className="recurring_btn2 col-xl-4">Submit</button>
                                <p className="col-xl-12 mt-3">First installment would be <b>deducted today</b> and then as per the date selected</p>
                                <p className="col-xl-12 mt-3">Nominee will be the same as your savings account.To change or update <b className='recurring_para'>click here</b></p>

                                </div>
                               




                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 mt-5">
                                <h5>Tax saver Fixed Deposit</h5>
                                <p>Save Tax on your income and earn interest the same time.</p>
                                <p className='recurring_para'><b>KNOW MORE</b> |<b> APPLY NOW</b> </p>
                                <hr></hr>
                                <h5>Tax saver Fixed Deposit</h5>
                                <p>Save Tax on your income and earn interest the same time.</p>
                                <p className='recurring_para'><b>KNOW MORE</b> |<b> APPLY NOW</b></p>
                                <hr></hr>

                            </div>

                        </div>





                    </div>
                </div>
            </div>

        </div>
    )
}


export default RecurringDeposit;