import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import apiList from '../../../../lib/apiList';
import { format } from 'date-fns';
import banklogo from '../../../../Images/banklogo.png';

const Navbar = () => {

    const [customerDetails, setCustomerDetails] = useState({
        prefix: '',
        firstname: '',
        lastname: ''
    });
    const [activeItem, setActiveItem] = useState(null);

    let loginToekn = sessionStorage.getItem('loginToken');
    let navigate = useNavigate()

    const handleSessionTimeOut = () => {
        sessionStorage.removeItem('loginToken')
        sessionStorage.removeItem('expireTime')
        navigate('/netbanking-personal-login')
    };

    useEffect(() => {
        customerData()
    }, []);
    const customerData = async () => {
        const options = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${loginToekn}`
            }
        }

        try {
            const response = await fetch(apiList.customerDetails, options);
            if (response.ok) {
                const data = await response.json();
                setCustomerDetails(data.user);
            }
            else {
                console.log(response);
            }
        }
        catch (error) {
            console.log(error.message);
        }
    };
  
    const formatedDate = format(new Date(), 'MMM dd yyyy, h:mm:ss a');

    const handleClick = (index) => {
        setActiveItem(index)
    }
    

    {/* <Link to="" className='listItems1'>Pockets</Link> */ }
    {/* <Link to="" className='listItems1'>PPF Accounts</Link> */ }
    {/* <Link to="" className='listItems1'>SSy Accounts</Link> */ }
    {/* <Link to="" className='listItems1'>iFinance</Link> */ }
    {/* <Link to="/user/account/iwish-deposits" className='listItems1'>iWish Goals</Link> */ }

    {/* <Link to="" className='listItems1'>Recharge</Link> */ }
    {/* <Link to="" className='listItems1'>Favourites</Link> */ }

    {/* <Link to="" className='listItems1'>Manage Subscription</Link> */ }

    {/* <Link to="" className='listItems1'>Invest Online</Link> */ }
    {/* <Link to="" className='listItems1'>Buy Mutual Funds</Link> */ }
    {/* <Link to="" className='listItems1'>PPF Accounts</Link> */ }
    {/* <Link to="" className='listItems1'>SSY Accounts</Link> */ }
    {/* <Link to="" className='listItems1'>Retirement Journey</Link> */ }
    {/* <Link to="" className='listItems1'>PMJJBY Scheme</Link> */ }

    {/* <Link to="" className='listItems1'>Offers Near You</Link> */ }
    {/* <Link to="" className='listItems1'>Campus Power</Link> */ }

    return (
        <div style={{marginBottom: '160px'}}>
           
            <nav className='afternav fixed-top row'>

                <div className='col-3'>
                    <img src={banklogo} style={{width: '200px'}}></img>
                </div>

                <div className='d-flex flex-column col-9'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='navbar_user_data'>
                            Welcome, {customerDetails.prefix} {customerDetails.firstname} {customerDetails.lastname}
                        </div>

                        <div className='d-flex'>
                            <div>
                                <Link to='/user/profile/changepassword' className='navbar_links' onClick={ () => handleClick(0)}>
                                    Change Password
                                </Link>
                            </div>
                            <div className='mx-3'>
                                <Link to='/user/viewprofile' className='navbar_links' onClick={ () => handleClick(0)}>
                                    User Profile
                                </Link>
                            </div>
                            <div>
                                <button type='button' className='logout_button' onClick={handleSessionTimeOut}>
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                    <div><p className='navbar_last_login_time'>Last Logged In: {formatedDate}</p></div>
                    <div className='mt-2'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className={activeItem === 0 ? 'active_navItem' : ''}>
                                <Link to="/user/accountsummary/viewsummary" className='navhead' onClick={ () => handleClick(0)}>
                                    OVERVIEW
                                </Link>
                            </div>
                            <div className={activeItem === 1 ? 'active_navItem' : ''}>
                                <Link to="/user/account" className='navhead' onClick={ () => handleClick(1)}>
                                    BANK ACCOUNTS
                                </Link>
                            </div>
                            <div className={activeItem === 2 ? 'active_navItem' : ''}>
                                <Link to="/user/fundtransfer/mypayee" className='navhead' onClick={ () => handleClick(2)}>
                                    PAYMENTS & TRANSFER
                                </Link>
                            </div>
                            <div className={activeItem === 3 ? 'active_navItem' : ''}>
                                <Link to="/user/credit-cards" className='navhead' onClick={ () => handleClick(3)}>CARDS & LOANS</Link>
                                <div className="dropdown-content" style={{ width: "max-content" }}>
                                    <div>
                                        <Link to="/user/credit-cards" className='listItems1'>Credit cards</Link>
                                        <Link to="/user/account/debit-atm-card" className='listItems1'>Debit/ATM Card</Link>
                                        <Link to="/user/forexcards" className='listItems1'>Forex & Prepaid Cards</Link>
                                        <Link to="/user/prepaidcards" className='listItems1'>Prepaid Cards</Link>
                                        <Link to="/user/account/bank-rewardspoints" className='listItems1'>Bank Rewards</Link>
                                        <Link to="/user/loanaccounts" className='listItems1'>Loans</Link>
                                        <Link to="/user/applyonline" className='listItems1'>Apply Online</Link>
                                    </div>
                                </div>
                            </div>
                            <div className={activeItem === 4 ? 'active_navItem' : ''}>
                                <Link to="/user/demataccount" className='navhead' onClick={ ()=> handleClick(4)}>INVESTMENTS & INSURANCE</Link>
                                <div className="dropdown-content" style={{ width: "max-content" }}>
                                    <div>
                                        <Link to="/user/demataccount" className='listItems1'>Demat</Link>
                                        <Link to="/user/nps" className='listItems1'>National Pension System</Link>
                                        <Link to="user/guranteedpensionplan" className='listItems1'>Guaranteed Pension Plan</Link>
                                        <Link to="/user/termlifeinsurance" className='listItems1'>Term Life Insurance</Link>
                                        <Link to="/user/cancercover" className='listItems1'>Cancer Cover</Link>
                                        <Link to="/user/generalinsurnace" className='listItems1'>General Insurance</Link>
                                    </div>
                                </div>
                            </div>
                            <div className={activeItem === 5 ? 'active_navItem' : ''}>
                                <Link to="/user/customerservice/servicerequests" className='navhead' onClick={ ()=> handleClick(5)}>CUSTOMER SERVICE</Link>
                                <div className="dropdown-content" style={{ width: "max-content" }}>
                                    <div>
                                        <Link to="/user/customerservice/servicerequests" className='listItems1'>Service Requests</Link>
                                        <Link to="/user/customerservice/mymailbox" className='listItems1'>My Mailbox</Link>
                                        <Link to="/user/customerservice/elocker" className='listItems1'>e-Locker</Link>
                                        <Link to="/user/customerservice/taxcenter" className='listItems1'>Tax Center</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
           
        </div>
    );
};

export default Navbar;
