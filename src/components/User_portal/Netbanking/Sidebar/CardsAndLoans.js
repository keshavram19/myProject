import React, { useState, useRef, useEffect } from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom';

import Userdetails from '../UserDetails/UserDetails';


function CardSidebar() {

    const [activeIndex, setActiveIndex] = useState(null);
    const [contentHeights, setContentHeights] = useState([0, 0, 0, 0, 0, 0]); // Separate heights for each content
    const contentRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)]; // Separate refs for each content

    useEffect(() => {
        const newHeights = contentRefs.map((ref) => (ref.current ? ref.current.scrollHeight : 0));
        console.log("New Heights:", newHeights);
        setContentHeights(newHeights);
    }, [activeIndex]);


    const toggleCollapsible = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const getButtonContent = (index) => {
        return activeIndex === index ? (
            <i className="ri-subtract-line" style={{ fontSize: '18px' }}></i>
        ) : (
            <i className="ri-add-fill" style={{ fontSize: '18px' }}></i>
        );
    };
    return (
        <div>
           
            <Userdetails />
            <div className='container'>
                <div className='row'>

                    <div className='col-3'>

                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 0 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(0)}
                        >
                            <span> Credit Cards </span> <span> {getButtonContent(0)} </span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[0]}px`, display: activeIndex === 0 ? 'block' : 'none' }}
                            ref={contentRefs[0]}
                        >                            <Link to="/user/credit-cards">View and Manage your Credit Cards</Link>
                            <Link to="/user/registered-billers">Pay Bank Credit Card Bill</Link>
                            <Link to="/user/covert-to-emi">Convert to EMI</Link>
                            <Link to="/user/auto-debit-instructions">Auto Debit Setup</Link>
                            <Link to="">Apply for a Credit Card</Link>
                            <Link to="/user/virtual-credit-cards">Virtual Credit Cards</Link>
                            <Link to="/user/request-billing-cycle-change"> Request for Billing cycle change</Link>
                            <Link to="/user/generate-credit-card-pin"> Generate Credit Card Pin Online</Link>
                            <Link to="/user/blockcreditcard"> Block your Credit Card - Instant</Link>
                            <Link to="/user/alertsubscription"> Alerts Subscription</Link>
                            <Link to="/user/physicalpin"> Request for Physical PIN</Link>
                            <Link to=""> Generate a 3D Secure OTP</Link>
                            <Link to="/user/viewlastcreditcard"> View Last Credit Received</Link>
                            <Link to="/user/creditcardrewards"> Bank Rewards</Link>
                            <Link to=""> Hand Pick Reward Points</Link>
                            <Link to=""> Service Requests</Link>
                        </div>

                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 1 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(1)}
                        >
                            <span> Debit/ATM Card </span> <span> {getButtonContent(1)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[1]}px`, display: activeIndex === 1 ? 'block' : 'none' }}
                            ref={contentRefs[1]}
                        >                            <Link to="">Virtual Debit Card</Link>
                        </div>

                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 2 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(2)}
                        >
                            <span> Loans</span> <span>{getButtonContent(2)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[2]}px`, display: activeIndex === 2 ? 'block' : 'none' }}
                            ref={contentRefs[2]}
                        >                            <Link to="/user/loanaccounts">Loan Accounts</Link>
                            <Link to="/user/applyforloan">Apply For Loans</Link>
                            <Link to="/user/loanapplicationtracking">Loan Application Tracking</Link>
                            <Link to="/user/applyonline">Apply Online</Link>
                            <Link to="">Profile Information</Link>
                            <Link to="">Service Requests</Link>
                        </div>


                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 3 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(3)}
                        >
                            <span>  Apply Online</span>   <span>{getButtonContent(3)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[3]}px`, display: activeIndex === 3 ? 'block' : 'none' }}
                            ref={contentRefs[3]}
                        >                            <Link to="">Apply Online</Link>
                        </div>
                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 4 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(4)}
                        >
                            <span> Forex & Prepaid Cards</span>   <span>{getButtonContent(4)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[4]}px`, display: activeIndex === 4 ? 'block' : 'none' }}
                            ref={contentRefs[4]}
                        >                            <Link to="/user/forexcards ">Apply New Forex Prepaid Card</Link>
                            <Link to="">View and Manage your Forex Prepaid Card</Link>
                            <Link to="">Link Forex Prepaid Card</Link>
                            <Link to="">Track your Order</Link>
                            <Link to="">Track your Linking Request</Link>
                            <Link to="">Terms and Conditions</Link>
                            <Link to="">Frequently Asked Questions</Link>
                        </div>

                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 5 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(5)}
                        >
                            <span> Prepaid Cards</span>
                        </button>


                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 6 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(6)}
                        >
                            <span>  Bank Rewards</span>   <span>{getButtonContent(6)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[5]}px`, display: activeIndex === 6 ? 'block' : 'none' }}
                            ref={contentRefs[5]}
                        >                            <Link to=""> Bank Rewards</Link>

                        </div>

                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 7 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(7)}
                        >
                            <span>  Manage Subscription</span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardSidebar;

