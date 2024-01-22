import React, { useState, useRef, useEffect } from 'react';
import './Sidebar.css'

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
                            className={`collapsible ${activeIndex === 0 ? 'active' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(0)}
                        >
                            <span> Credit Cards </span> <span> {getButtonContent(0)} </span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[0]}px`, display: activeIndex === 0 ? 'block' : 'none' }}
                            ref={contentRefs[0]}
                        >                            <a href="#">View and Manage your Credit Cards</a>
                            <a href="#">Pay Bank Credit Card Bill</a>
                            <a href="#">Convert to EMI</a>
                            <a href="#">Auto Debit Setup</a>
                            <a href="#">Apply for a Credit Card</a>
                            <a href="#">Virtual Credit Cards</a>
                            <a href="#"> Request for Billing cycle change</a>
                            <a href="#"> Generate Credit Card Pin Online</a>
                            <a href="#"> Block your Credit Card - Instant</a>
                            <a href="#"> Alerts Subscription</a>
                            <a href="#"> Request for Physical PIN</a>
                            <a href="#"> Generate a 3D Secure OTP</a>
                            <a href="#"> View Last Credit Received</a>
                            <a href="#"> Bank Rewards</a>
                            <a href="#"> Hand Pick Reward Points</a>
                            <a href="#"> Service Requests</a>
                        </div>

                        <button
                            type="button"
                            className={`collapsible ${activeIndex === 1 ? 'active' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(1)}
                        >
                            <span> Debit/ATM Card </span> <span> {getButtonContent(1)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[1]}px`, display: activeIndex === 1 ? 'block' : 'none' }}
                            ref={contentRefs[1]}
                        >                            <a href="#">Virtual Debit Card</a>
                        </div>

                        <button
                            type="button"
                            className={`collapsible ${activeIndex === 2 ? 'active' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(2)}
                        >
                            <span> Loans</span> <span>{getButtonContent(2)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[2]}px`, display: activeIndex === 2 ? 'block' : 'none' }}
                            ref={contentRefs[2]}
                        >                            <a href="#">Loan Accounts</a>
                            <a href="#">Apply For Loans</a>
                            <a href="#">Loan Application Tracking</a>
                            <a href="#">Track your Loan</a>
                            <a href="#">Profile Information</a>
                            <a href="#">Service Requests</a>
                        </div>


                        <button
                            type="button"
                            className={`collapsible ${activeIndex === 3 ? 'active' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(3)}
                        >
                            <span>  Apply Online</span>   <span>{getButtonContent(3)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[3]}px`, display: activeIndex === 3 ? 'block' : 'none' }}
                            ref={contentRefs[3]}
                        >                            <a href="#">Apply Online</a>
                        </div>
                        <button
                            type="button"
                            className={`collapsible ${activeIndex === 4 ? 'active' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(4)}
                        >
                            <span> Forex & Prepaid Cards</span>   <span>{getButtonContent(4)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[4]}px`, display: activeIndex === 4 ? 'block' : 'none' }}
                            ref={contentRefs[4]}
                        >                            <a href="#">Apply New Forex Prepaid Card</a>
                            <a href="#">View and Manage your Forex Prepaid Card</a>
                            <a href="#">Link Forex Prepaid Card</a>
                            <a href="#">Track your Order</a>
                            <a href="#">Track your Linking Request</a>
                            <a href="#">Terms and Conditions</a>
                            <a href="#">Frequently Asked Questions</a>
                        </div>

                        <button
                            type="button"
                            className={`collapsible ${activeIndex === 5 ? 'active' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(5)}
                        >
                            <span> Prepaid Cards</span>
                        </button>


                        <button
                            type="button"
                            className={`collapsible ${activeIndex === 6 ? 'active' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(6)}
                        >
                            <span>  Bank Rewards</span>   <span>{getButtonContent(6)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[5]}px`, display: activeIndex === 6 ? 'block' : 'none' }}
                            ref={contentRefs[5]}
                        >                            <a href="#"> Bank Rewards</a>

                        </div>

                        <button
                            type="button"
                            className={`collapsible ${activeIndex === 7 ? 'active' : ''} d-flex justify-content-between sidebar_button`}
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

