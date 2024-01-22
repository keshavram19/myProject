import React from 'react';
import './Navbar.css';


const Navbar = () => {


    return (
        <div>
            <nav className='afternav'>
                <ul>
                    <li className="dropdown">
                            <a href="#" className='navhead'>OVERVIEW</a> <i style={{fontSize:"12px", paddingRight:"10px", color:'white'}} class="fa-solid fa-caret-down"></i>
                        <div className="dropdown-content" style={{width:"max-content"}}>
                            <div>
                                <a href="#" className='listItems1'>My View</a>
                                <a href="#" className='listItems1'>Account Summary</a>
                                <a href="#" className='listItems1'>Personal Details</a>
                                <a href="#" className='listItems1'>Financial Journey</a>
                            </div>
                        </div>
                    </li>
                    <li className="dropdown">
                        <a href="#" className='navhead'>BANK ACCOUNTS</a> <i style={{fontSize:"12px", paddingRight:"10px",  color:'white'}} class="fa-solid fa-caret-down"></i>
                        <div className="dropdown-content" style={{width:"max-content"}}>
                            <div>
                                <a href="#" className='listItems1'>Accounts</a>
                                <a href="#" className='listItems1'>Pockets</a>
                                <a href="#" className='listItems1'>PayLater</a>
                                <a href="#" className='listItems1'>PPF Accounts</a>
                                <a href="#" className='listItems1'>SSy Accounts</a>
                                <a href="#" className='listItems1'>e-Statements and accounts</a>
                                <a href="#" className='listItems1'>iFinance</a>
                                <a href="#" className='listItems1'>Deposits</a>
                                <a href="#" className='listItems1'>iWish Goals</a>
                            </div>
                        </div>
                    </li>
                    <li className="dropdown"><a href="#" className='navhead'>PAYMENTS & TRANSFER</a> <i style={{fontSize:"12px", paddingRight:"10px",  color:'white'}} class="fa-solid fa-caret-down"></i>
                        <div className="dropdown-content" style={{width:"max-content"}}>
                            <div >
                                <a href="#" className='listItems1'>Pay Bills</a>
                                <a href="#" className='listItems1'>Recharge</a>
                                <a href="#" className='listItems1'>Buy/Recharge fastag</a>
                                <a href="#" className='listItems1'>Fund Transfer</a>
                                <a href="#" className='listItems1'>Inward Remittance</a>
                                <a href="#" className='listItems1'>My Transcations</a>
                                <a href="#" className='listItems1'>Manage Payees</a>
                                <a href="#" className='listItems1'>Favourites</a>
                                <a href="#" className='listItems1'>Tax Centre</a>


                            </div>


                        </div>
                    </li>
                    <li className="dropdown"><a href="#" className='navhead'>CARDS & LOANS</a> <i style={{fontSize:"12px", paddingRight:"10px",  color:'white'}} class="fa-solid fa-caret-down"></i>
                        <div className="dropdown-content" style={{width:"max-content"}}>
                            <div>

                                <a href="#" className='listItems1'>Credit cards</a>
                                <a href="#" className='listItems1'>Debit/ATM Card</a>
                                <a href="#" className='listItems1'>Forex & Prepaid Cards</a>
                                <a href="#" className='listItems1'>Prepaid Cards</a>
                                <a href="#" className='listItems1'>Bank Rewards</a>
                                <a href="#" className='listItems1'>Manage Subscription</a>


                                <a href="#" className='listItems1'>Loans</a>
                                <a href="#" className='listItems1'>Apply Online</a>

                            </div>


                        </div>
                    </li>
                    <li className="dropdown">
                        <a href="#" className='navhead'>INVESTMENTS & INSURANCE</a> <i style={{fontSize:"12px", paddingRight:"10px",  color:'white'}} class="fa-solid fa-caret-down"></i>
                        <div className="dropdown-content" style={{width:"max-content"}}>
                            <div >

                                <a href="#" className='listItems1'>Invest Online</a>
                                <a href="#" className='listItems1'>Buy Mutual Funds</a>
                                <a href="#" className='listItems1'>Demat</a>
                                <a href="#" className='listItems1'>National Pension System</a>
                                <a href="#" className='listItems1'>PPF Accounts</a>
                                <a href="#" className='listItems1'>SSY Accounts</a>
                                <a href="#" className='listItems1'>Guaranteed Pension Plan</a>
                                <a href="#" className='listItems1'>Retirement Journey</a>

                                <a href="#" className='listItems1'>Term Life Insurance</a>
                                <a href="#" className='listItems1'>Cancer Cover</a>
                                <a href="#" className='listItems1'>General Insurance</a>
                                <a href="#" className='listItems1'>PMJJBY Scheme</a>

                            </div>


                        </div>
                    </li>
                    <li className="dropdown">
                        <a href="#" className='navhead'>CUSTOMER SERVICE</a> <i style={{fontSize:"12px", paddingRight:"10px",  color:'white'}} class="fa-solid fa-caret-down"></i>
                        <div className="dropdown-content" style={{width:"max-content"}}>
                            <div >
                                <a href="#" className='listItems1'>Service Requests</a>
                                <a href="#" className='listItems1'>My Mailbox</a>
                                <a href="#" className='listItems1'>e-Locker</a>
                                <a href="#" className='listItems1'>Tax Center</a>
                                <a href="#" className='listItems1'>Offers Near You</a>
                                <a href="#" className='listItems1'>Campus Power</a>

                            </div>


                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
