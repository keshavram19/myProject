
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';
import './Accounts.css';
import { useNavigate } from "react-router-dom";

const FixedDeposit = () => {
    let navigate = useNavigate();

    const Recurringpage=()=>{
        navigate('/user/account/reccuring-deposits')
    }



    return (
        <div>
           
            <div className="container-fluid" style={{marginTop:"90px"}}>
                <div className="row">
                    <div className='col-3'>
                        <BankaccountSidebar />
                    </div>
                    <div className="col-9">
                        <div className="row">
                            
                            <h6 className="mt-3 col-md-2 text-center">Deposit Accounts</h6>
                            <button className="deposit_btn col-md-2">Submit Form 15G/H</button>
                            <button className="deposit_btn col-md-2">Interest Certificate  <i class="fa-solid fa-arrow-down"></i></button>
                            <p className="mt-3 col-md-3 text-center">How to manage your fixed Deposits?</p>
                            <button className="deposit_btn col-md-2">Watch iplay demo</button>

                        </div>
                        <div className="row mt-3">
                            <div className="col-xl-4 col-lg-4 col-md-4">
                                <div className="card text-center p-2 h-100 deposit_card shadow">
                                    <h6>Fixed Deposit  0</h6>
                                    <p><i class="fa-solid fa-indian-rupee-sign"></i> 0</p>
                                    <p>Take control of your savings by investing in Fixed Deposit.<br></br><b>JUST IN A CLICK!!!</b></p>

                                </div>


                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4" onClick={Recurringpage}>
                                <div className="card text-center p-2 h-100  deposit_card1 shadow">
                                    <h6>Recurring Deposit  0</h6>
                                    <p><i class="fa-solid fa-indian-rupee-sign"></i> 0</p>
                                    <div className="text-center">
                                        <button className="mt-4 deposit_cardbtn">Create RD</button>
                                    </div>
                                </div>


                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4">
                                <div className="card text-center p-2 h-100  deposit_card1 shadow">
                                    <h6>Iwish Deposit  0</h6>
                                    <p><i class="fa-solid fa-indian-rupee-sign"></i> 0</p>
                                    <div className="text-center">
                                        <button className="mt-4 deposit_cardbtn">Create iwish</button>
                                    </div>


                                </div>


                            </div>

                        </div>
                        <div className="card p-3 mt-3 shadow">
                            <div className="row" style={{paddingLeft:'55px'}}>
                                
                                <div className="col-xl-7 col-lg-7 col-md-7 mt-5">
                                    <h5>Fixed Deposit</h5>
                                    <p className="mt-5">Looking for a safe investment option that also provides attractive returns?Then ICICI Bank Fixed Deposit is an ideal investment choice for you.Invest and watch your funds grow safely and steadily.</p>

                                </div>
                                <div className="col-xl-5 col-lg-5 col-md-5">
                                    <img src="https://www.makingyourmoneymatter.com/wp-content/uploads/2016/04/budget-percentages.jpg" className="deposit_img" />

                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 mt-3">
                                    <div className="row">
                                        <i class="fa-solid fa-hand-holding-dollar col-xl-2 col-md-12 col-2 mt-1 deposit_icon"></i>
                                        <p className="col-xl-8 col-md-12 col-10">Minimum Fixed Deposit amount of 10.000</p>

                                    </div>

                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 mt-3">
                                    <div className="row">
                                        <i class="fa-solid fa-hand-holding-dollar col-xl-2 col-md-12 col-2 mt-1 deposit_icon"></i>
                                        <p className="col-xl-8 col-md-12 col-10">Minimum Fixed Deposit amount of 10.000</p>

                                    </div>

                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 mt-3">
                                    <div className="row">
                                        <i class="fa-solid fa-hand-holding-dollar col-xl-2 col-md-12 col-2 mt-1 deposit_icon"></i>
                                        <p className="col-xl-8 col-md-12 col-10">Minimum Fixed Deposit amount of 10.000</p>

                                    </div>

                                </div>
                                <button className="deposit_btn1 mt-3">Create FD</button>

                            </div>

                        </div>
                        <div className='row mt-5'>
                            <h5 className='col-12'>Pre Qualified Offers for you</h5>

                            <div className='col-xl-4 col-lg-4 col-md-4'>
                                <div className='card h-100 deposit_card2 p-2 shadow'>
                                    <div className="row">
                                        <i class="fa-solid fa-hand-holding-dollar col-xl-2 col-md-12 col-2 mt-1 deposit_icon"></i>
                                        <p className="col-xl-9 col-md-12 col-10"><b>Upgrade your card</b><br></br>upgrade your credit card to a card that matches your lifestyle!</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4 col-lg-4 col-md-4'>
                                <div className='card h-100 deposit_card2 p-2 shadow'>
                                    <div className="row">
                                        <i class="fa-solid fa-hand-holding-dollar col-xl-2 col-md-12 col-2 mt-1 deposit_icon"></i>
                                        <p className="col-xl-9 col-md-12 col-10"><b>Credit card</b><br></br>Get a feature packed ICICI Bank Credit card on the fly.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4 col-lg-4 col-md-4'>
                                <div className='card h-100 deposit_card2 p-2 shadow'>
                                    <div className="row">
                                        <i class="fa-solid fa-hand-holding-dollar col-xl-2 col-md-12 col-2 mt-1 deposit_icon"></i>
                                        <p className="col-xl-9 col-md-12 col-10"><b>Two Wheeler Loan</b><br></br>Avail upto 100% on road Funding with pre approved offer of RS.2,50,000</p>
                                    </div>
                                </div>
                            </div>

                            <p className='col-12 mt-3'>ICICI Bank Ltd is registered with DICGC</p>
                            <p className='col-12'>(htttp://www.dicgc.org.in/)</p>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSRACQ4VWSxoQqT4fSRlMVKOViyIObaOwHcwOJ-xh0Eg&s' className='deposit_image col-md-3 col-xl-1'/>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg' className='deposit_image col-md-3 col-xl-1'/>
                            
                            

                        </div>




                    </div>
                </div>
            </div>

        </div>
    )
}

export default FixedDeposit;