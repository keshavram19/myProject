import React from "react";
import './Loans.css'


const Loanaccounts = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    {/* <i class="fa-solid fa-circle loan_icon col-xl-1"></i><span className="col-xl-11"> Create a side bar for Cards and Loans. In that section we have some main categories or<br></br>
                        sections displayed in the sidebar. Each main category can be expanded to reveal<br></br>
                        subcategories or additional options in a dropdown menu.
                    </span>
                    <p className="col-xl-1"></p>
                    <h5 className="col-xl-11 mt-3">For Example</h5> */}
                    {/* <p className="col-xl-1"></p>
                    <h5 className="col-xl-10 mt-3">Loans</h5>
                    <p className="col-xl-2"></p>
                    <div className="col-xl-9 loans_list">
                        Loan Account<br></br>
                        Apply For Loan<br></br>
                        Loan Application Tracking<br></br>
                        Track Your Loan<br></br>
                        Profile Information<br></br>
                        Service Request


                    </div> */}


                </div>

                {/* <div className="row mt-5">

                    <p className="col-xl-1"></p><h5 className="col-xl-11 mt-3"> Loan Accounts
                    </h5>
                    <p className="col-xl-1"></p>
                    <i class="fa-solid fa-circle loan_icon col-xl-1"></i><span className="col-xl-10"> In this section create a button for
                    </span>

                    <p className="col-xl-2"></p>
                    <div className="col-xl-9 loans_list mt-4">
                        View Account Summary<br></br>
                        Request a Service<br></br>
                        View report



                    </div>


                </div> */}

                <div className="card mt-5 loans_maincard">
                    <div className="row">
                        <h3 className="col-xl-12 text-center">Here is an overview of your loan Accounts with us</h3>
                        <p className="col-xl-1 col-1"></p>
                        <div className="col-xl-2 col-2 mx-3">
                            <div className="card loans_card1">
                                <i class="fa-solid fa-hand-holding-dollar loans_main_icon"></i>
                                <p className="loan_card_para mt-3">Toatal Sanctioned<br></br> Amount<br></br>$3,00,000</p>
                            </div>

                        </div>
                        <div className="col-xl-2 col-2 mx-3">
                            <div className="card loans_card2">
                            <i class="fa-solid fa-circle loans_main_icon"></i>
                                <p className="loan_card_para mt-3">Toatal Principal<br></br> Outstanding<br></br>$2,83,000</p>
                            </div>

                        </div>
                        <div className="col-xl-2 col-2 mx-3">
                            <div className="card loans_card3">
                            <i class="fa-solid fa-wallet loans_main_icon"></i>
                                <p className="loan_card_para mt-3">Toatal Current<br></br> Overdues<br></br>$9,451</p>
                            </div>

                        </div>
                        <div className="col-xl-2 col-2 mx-3">
                            <div className="card loans_card4">
                            <i class="fa-solid fa-bell loans_main_icon"></i>
                                <p className="loan_card_para mt-2">Amount Available for<br></br> Disbursement<br></br>$0</p>
                            </div>

                        </div>

                    </div>
                    <div className="card mt-5 m-5 p-3 loans_subcard">
                        <div className="row">
                            <p className="col-xl-3 col-1"></p>
                            <div className="col-xl-1 col-2 mx-3">
                                <div className="card loans_card5">
                                <i class="fa-solid fa-magnifying-glass loans_subcard_icon"></i>
                                </div>
                                <p className="loans_subcard_para2">view account summary</p>

                            </div>
                            
                            <p className="col-xl-1 col-1"></p>
                            <div className="col-xl-1 col-2 mx-3">
                                <div className="card loans_card5">
                                <i class="fa-solid fa-pencil loans_subcard_icon"></i>
                                </div>
                                <p className="loans_subcard_para">Request a service</p>

                            </div>
                            <p className="col-xl-1 col-1"></p>
                            <div className="col-xl-1 col-2 mx-3">
                                <div className="card loans_card5">
                                <i class="fa-solid fa-download loans_subcard_icon"></i>
                                </div>
                                <p className="loans_subcard_para1">View Report</p>

                            </div>
                            <p className="col-xl-1 col-1">How<br></br> can<br></br> we<br></br> help<br></br> you? <span>  <a  data-toggle="tooltip" title="How can we help you!"><i class="fa-solid fa-user loans_usericon card"></i></a></span></p>
                           
                           

                        </div>

                    </div>



                </div>
            </div>

        </div>
    )
}

export default Loanaccounts;