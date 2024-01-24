import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {


    return (
        <div>
            <nav className='afternav fixed-top'>
                <ul>
                    <li className="dropdown">
                            <Link to="/user/overview" className='navhead'>OVERVIEW</Link> <i style={{fontSize:"12px", paddingRight:"10px", color:'white'}} class="fa-solid fa-caret-down"></i>
                        <div className="dropdown-content" style={{width:"max-content"}}>
                            <div>
                                <Link to="/user/overview" className='listItems1'>My View</Link>
                                <Link to="/user/accountsummary/viewsummary" className='listItems1'>Account Summary</Link>
                                <Link to="/user/viewprofile" className='listItems1'>Personal Details</Link>
                                <Link to="" className='listItems1'>Financial Journey</Link>
                            </div>
                        </div>
                    </li>
                    <li className="dropdown">
                        <Link to="" className='navhead'>BANK ACCOUNTS</Link> <i style={{fontSize:"12px", paddingRight:"10px",  color:'white'}} class="fa-solid fa-caret-down"></i>
                        <div className="dropdown-content" style={{width:"max-content"}}>
                            <div>
                                <Link to="/user/account" className='listItems1'>Accounts</Link>
                                <Link to="" className='listItems1'>Pockets</Link>
                                <Link to="/user/account/paylater" className='listItems1'>PayLater</Link>
                                <Link to="" className='listItems1'>PPF Accounts</Link>
                                <Link to="" className='listItems1'>SSy Accounts</Link>
                                <Link to="/user/account/e-statement" className='listItems1'>e-Statements and accounts</Link>
                                <Link to="" className='listItems1'>iFinance</Link>
                                <Link to="/user/account/fixed-deposits" className='listItems1'>Deposits</Link>
                                <Link to="/user/account/iwish-deposits" className='listItems1'>iWish Goals</Link>
                            </div>
                        </div>
                    </li>
                    <li className="dropdown"><Link to="" className='navhead'>PAYMENTS & TRANSFER</Link> <i style={{fontSize:"12px", paddingRight:"10px",  color:'white'}} class="fa-solid fa-caret-down"></i>
                        <div className="dropdown-content" style={{width:"max-content"}}>
                            <div >
                                <Link to="" className='listItems1'>Pay Bills</Link>
                                <Link to="" className='listItems1'>Recharge</Link>
                                <Link to="/user/fundtransfer/bill-recharge" className='listItems1'>Buy/Recharge fastag</Link>
                                <Link to="" className='listItems1'>Fund Transfer</Link>
                                <Link to="/user/fundtransfer/inward-remitance" className='listItems1'>Inward Remittance</Link>
                                <Link to="" className='listItems1'>My Transcations</Link>
                                <Link to="/user/fundtransfer/manage-payees" className='listItems1'>Manage Payees</Link>
                                <Link to="" className='listItems1'>Favourites</Link>
                                <Link to="/user/fundtransfer/tax-center" className='listItems1'>Tax Centre</Link>


                            </div>


                        </div>
                    </li>
                    <li className="dropdown"><Link to="/user/credit-cards" className='navhead'>CARDS & LOANS</Link> <i style={{fontSize:"12px", paddingRight:"10px",  color:'white'}} class="fa-solid fa-caret-down"></i>
                        <div className="dropdown-content" style={{width:"max-content"}}>
                            <div>

                                <Link to="/user/credit-cards" className='listItems1'>Credit cards</Link>
                                <Link to="" className='listItems1'>Debit/ATM Card</Link>
                                <Link to="" className='listItems1'>Forex & Prepaid Cards</Link>
                                <Link to="" className='listItems1'>Prepaid Cards</Link>
                                <Link to="" className='listItems1'>Bank Rewards</Link>
                                <Link to="" className='listItems1'>Manage Subscription</Link>


                                <Link to="/user/loanaccounts" className='listItems1'>Loans</Link>
                                <Link to="" className='listItems1'>Apply Online</Link>

                            </div>


                        </div>
                    </li>
                    <li className="dropdown">
                        <Link to="" className='navhead'>INVESTMENTS & INSURANCE</Link> <i style={{fontSize:"12px", paddingRight:"10px",  color:'white'}} class="fa-solid fa-caret-down"></i>
                        <div className="dropdown-content" style={{width:"max-content"}}>
                            <div >

                                <Link to="" className='listItems1'>Invest Online</Link>
                                <Link to="" className='listItems1'>Buy Mutual Funds</Link>
                                <Link to="" className='listItems1'>Demat</Link>
                                <Link to="" className='listItems1'>National Pension System</Link>
                                <Link to="" className='listItems1'>PPF Accounts</Link>
                                <Link to="" className='listItems1'>SSY Accounts</Link>
                                <Link to="" className='listItems1'>Guaranteed Pension Plan</Link>
                                <Link to="" className='listItems1'>Retirement Journey</Link>

                                <Link to="" className='listItems1'>Term Life Insurance</Link>
                                <Link to="" className='listItems1'>Cancer Cover</Link>
                                <Link to="" className='listItems1'>General Insurance</Link>
                                <Link to="" className='listItems1'>PMJJBY Scheme</Link>

                            </div>


                        </div>
                    </li>
                    <li className="dropdown">
                        <Link to="" className='navhead'>CUSTOMER SERVICE</Link> <i style={{fontSize:"12px", paddingRight:"10px",  color:'white'}} class="fa-solid fa-caret-down"></i>
                        <div className="dropdown-content" style={{width:"max-content"}}>
                            <div >
                                <Link to="" className='listItems1'>Service Requests</Link>
                                <Link to="" className='listItems1'>My Mailbox</Link>
                                <Link to="" className='listItems1'>e-Locker</Link>
                                <Link to="" className='listItems1'>Tax Center</Link>
                                <Link to="" className='listItems1'>Offers Near You</Link>
                                <Link to="" className='listItems1'>Campus Power</Link>

                            </div>


                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
