
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';
import './Accounts.css';
import { Link, useNavigate } from "react-router-dom";

const FixedDeposit = () => {
    let navigate = useNavigate();

    const Recurringpage=()=>{
        navigate('/user/account/reccuring-deposits')
    }

    const iwishpage=()=>{
        navigate('/user/account/iwish-deposits')
    }




    return (
        <div>
           
            <div className="container-fluid fixed_deposit_background_main pt-5" style={{marginTop:"60px"}}>
                <div className="row">
                    <div className='col-3'>
                        <BankaccountSidebar />
                    </div>
                    <div className="col-9">
                        <div className='container'>
                       
                           <div className='row'>
                           
                        <button className="deposit_btn col-md-3">Deposit Accounts</button>
                            
                            <button className="deposit_btn col-md-3 ">Submit Form 15G/H</button>
                           
                            <button className="deposit_btn col-md-3 ">Interest Certificate  <i class="fa-solid fa-arrow-down"></i></button>
                          
                            <button className="deposit_btn col-md-3">Watch iplay demo</button>
                            </div>   
                       
                        <div className="row p-3 " style={{marginTop:"20px"}} >
                            <div className="col-md-4 ">
                                <div className="text-center p-1 h-100 deposit_card1">
                                    <h6 className='deposit_fixedheading'>Fixed Deposit  0</h6>
                                    <p><i class="fa-solid fa-indian-rupee-sign deposit_fixedheading_icon" style={{color:"#ebca28"}}></i> 0</p>
                                    <p style={{fontSize:"13px"}}>Take control of your savings by investing in Fixed Deposit.<br></br><b className='deposit_fixedheading' style={{color:"##2fb68e", fontSize:"18px"}} >JUST IN A CLICK!!!</b></p>
                                </div>


                            </div>
                            <div className=" col-md-4 " onClick={Recurringpage} >
                                <div className=" text-center p-1 h-100  deposit_card1">
                                    <h6 className='deposit_fixedheading'>Recurring Deposit  0</h6>
                                    <p><i class="fa-solid fa-indian-rupee-sign deposit_fixedheading_icon" style={{color:"#ebca28"}}></i> 0</p>
                                    <div className="text-center">
                                        <button className="mt-4 deposit_cardbtn">Create RD</button>
                                    </div>
                                </div>


                            </div>
                            <div className="col-md-4 "  onClick={iwishpage}  >
                                <div className=" text-center p-1 h-100  deposit_card1">
                                    <h6 className='deposit_fixedheading'>Iwish Deposit  0</h6>
                                    <p><i class="fa-solid fa-indian-rupee-sign deposit_fixedheading_icon" style={{color:"#ebca28"}}></i> 0</p>
                                    <div className="text-center">
                                        <button className="mt-4 deposit_cardbtn">Create iwish</button>
                                    </div>

                                </div>


                            </div>

                        </div>
                        <div className=" p-3 mt-3">
                            <div className="row">                               
                                <div className="col-md-7">
                                    <h4 className='deposit_fixedheading'>Fixed Deposit</h4>
                                    <p className="mt-4" style={{fontWeight:"450"}}>Looking for a safe investment option that also provides attractive returns?Then Royal Islamic Bank Fixed Deposit is an ideal investment choice for you.Invest and watch your funds grow safely and steadily.</p>

                                </div>
                                <div className="col-md-5">
                                <div id="fdImgs" className="carousel slide" data-ride="carousel">
                                <ul className="carousel-indicators">
                                  <li data-target="#fdImgs" data-slide-to="0" class="active"></li>
                                 <li data-target="#fdImgs" data-slide-to="1"></li>
                                 <li data-target="#fdImgs" data-slide-to="2"></li>
                                 <li data-target="#fdImgs" data-slide-to="3"></li>
                               </ul>
                                
                                <div className="carousel-inner">
                <div className="carousel-item active">
                     <img src="https://img.freepik.com/free-photo/bottles-cash-with-coins-saving-money-concept_1150-12563.jpg?t=st=1708779092~exp=1708782692~hmac=177013e2202ede3250240fcb874e1fd46bbb602ed93fac2f8129fe32dcc99b11&w=740" alt="Los Angeles"  width="400" height="230"/>
                         </div>
                 <div className="carousel-item">
                   <img src="https://img.freepik.com/free-vector/hand-drawn-employee-savings-plan-illustration_52683-145117.jpg?t=st=1708777785~exp=1708781385~hmac=c08436c880f56ec1158b82f5e46f9fc2dccad8bc524c267a0fdaae06b9bf2373&w=740" alt="Chicago"  width="400" height="230"/>
                </div>
                <div className="carousel-item">
                     <img src="https://img.freepik.com/free-photo/side-view-piggy-bank-with-coins-banknotes_23-2148793735.jpg?t=st=1708779012~exp=1708782612~hmac=cee379959eddb33845a845ebec1846d76f85793e06b291ec487092cc8cbe0d52&w=826" alt="New York"  width="400" height="230"/>
                 </div>
                
                <div className='carousel-item'>
                  <img src='https://img.freepik.com/free-photo/saving-money-concept-preset-by-male-hand-putting-money-coin-stack-growing-business-arrange-coins-into-heaps-with-hands-content-about-money_1150-45709.jpg?t=st=1708784651~exp=1708788251~hmac=c9ee0043fbad12bb1c8bc6db2c9be80ef45a6b62592f6394ed85972fcf4994ef&w=740' width="400" height="230"/>
                </div>
                </div>
                 {/* Left and right controls  */}
  {/* <a className="carousel-control-prev" href="#fdImgs" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next" href="#fdImgs" data-slide="next">
    <span className="carousel-control-next-icon"></span>
  </a> */}
                                </div>
                                </div>
                                <div className="col-md-4 mt-3">
                                    <div className="row">
                                        <i class="fa-solid fa-hand-holding-dollar col-xl-2 col-md-12 col-2 mt-1 deposit_icon"></i>
                                        <p className="col-xl-8 col-md-12 col-10" style={{color:"#2fb68e"}}>Minimum Fixed Deposit amount of 10.000</p>

                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 mt-3">
                                    <div className="row">
                                        <i class="fa-solid fa-hand-holding-dollar col-xl-2 col-md-12 col-2 mt-1 deposit_icon"></i>
                                        <p className="col-xl-8 col-md-12 col-10" style={{color:"#2fb68e"}}>Minimum Fixed Deposit amount of 10.000</p>

                                    </div>

                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 mt-3">
                                    <div className="row">
                                        <i class="fa-solid fa-hand-holding-dollar col-xl-2 col-md-12 col-2 mt-1 deposit_icon"></i>
                                        <p className="col-xl-8 col-md-12 col-10" style={{color:"#2fb68e"}}>Minimum Fixed Deposit amount of 10.000</p>

                                    </div>

                                </div>
                                <Link to='/user/account/fixed-reccuring-form'><button className="deposit_btn1 mt-3 col-2">Create FD</button></Link>

                            </div>

                        </div>
                        <div className='row mt-5'>
                            <h5 className='col-12'>Pre Qualified Offers for you</h5>

                            <div className='col-xl-4 col-lg-4 col-md-4'>
                                <div className=' h-100 deposit_card2 p-2'>
                                    <div className="row">
                                        <i class="fa-solid fa-hand-holding-dollar col-xl-2 col-md-12 col-2 mt-1 deposit_icon"></i>
                                        <p className="col-xl-9 col-md-12 col-10"><b className='deposit_fixedheading'>Upgrade your card</b><br/><span style={{fontSize:"13px"}}>upgrade your credit card to a card that matches your lifestyle!</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4 col-lg-4 col-md-4'>
                                <div className=' h-100 deposit_card2 p-2 '  style={{borderLeft:"1px solid grey"}}>
                                    <div className="row">
                                        <i class="fa-solid fa-hand-holding-dollar col-xl-2 col-md-12 col-2 mt-1 deposit_icon"></i>
                                        <p className="col-xl-9 col-md-12 col-10"><b className='deposit_fixedheading'>Credit card</b><br/><span style={{fontSize:"13px"}}>Get a feature packed ICICI Bank Credit card on the fly.</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4 col-lg-4 col-md-4'>
                                <div className=' h-100 deposit_card2 p-2 ' style={{borderLeft:"1px solid grey"}}>
                                    <div className="row">
                                        <i class="fa-solid fa-hand-holding-dollar col-xl-2 col-md-12 col-2 mt-1 deposit_icon"></i>
                                        <p className="col-xl-9 col-md-12 col-10"><b className='deposit_fixedheading'>Two Wheeler Loan</b><br/><span style={{fontSize:"13px"}}>Avail upto 100% on road Funding with pre approved offer of RS.2,50,000</span></p>
                                    </div>
                                </div>
                            </div>

                            <p className='col-12 mt-3'>RIB Ltd is registered with DICGC</p>
                            <p className='col-12'>(htttp://www.dicgc.org.in/)</p>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSRACQ4VWSxoQqT4fSRlMVKOViyIObaOwHcwOJ-xh0Eg&s' className='deposit_image col-md-3 col-xl-1'/>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg' className='deposit_image col-md-3 col-xl-1'/>
                            
                            

                        </div>
                        </div>



                    </div>
                </div>
            </div>

        </div>
    )
}

export default FixedDeposit;