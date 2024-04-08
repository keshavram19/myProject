import React, { useState, useRef, useEffect } from 'react';
import './Sidebar.css'
import Userdetails from '../UserDetails/UserDetails';
import { Link, useLocation } from 'react-router-dom';


function OverviewSidebar() {

    const [activeIndex, setActiveIndex] = useState(() => {
        const storedIndex = parseInt(sessionStorage.getItem('activeIndex'));
        return !isNaN(storedIndex) ? storedIndex : 0;
    });
    const [contentHeights, setContentHeights] = useState([0, 0, 0]); // Separate heights for each content
    const contentRefs = [useRef(null), useRef(null), useRef(null)]; // Separate refs for each content
    const location = useLocation();

    useEffect(() => {
        const newHeights = contentRefs.map((ref) => (ref.current ? ref.current.scrollHeight : 0));
        setContentHeights(newHeights);
        console.log(newHeights);
    }, [activeIndex]);

    useEffect(() => {
        sessionStorage.setItem("activeIndex", activeIndex);
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

    const isActiveLink = (to) => {
        return location.pathname === to;
    };

    const stopPropagation = (event) => {
        event.stopPropagation();
    };


    return (
        <div>

            <Userdetails />
            <div className='container'>
                <div>
                    <div>
                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 0 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(0)}
                        >
                            <span> My View </span> <span> {getButtonContent(0)} </span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[0]}px`, display: activeIndex === 0 ? 'block' : 'none' }}
                            ref={contentRefs[0]}
                        >
                            <Link to="/user/overview" onClick={stopPropagation}
                                className={isActiveLink('/user/overview') ? 'bank_account_sidebar_link_tag mt-1' : 'mt-1'}>
                                My view
                            </Link>
                        </div>

                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 1 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(1)}
                        >
                            <span>  Personal Details </span> <span> {getButtonContent(1)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[1]}px`, display: activeIndex === 1 ? 'block' : 'none' }}
                            ref={contentRefs[1]}
                        >
                            
                            <Link to="/user/profile/changepassword" onClick={stopPropagation}
                                className={isActiveLink('/user/profile/changepassword') ? 'bank_account_sidebar_link_tag mt-1' : 'mt-1'}>
                                Change Password
                            </Link>
                            {/* <Link to="/user/profile/paymenttransactionlimit" onClick={stopPropagation}
                                className={isActiveLink('/user/profile/paymenttransactionlimit') ? 'bank_account_sidebar_link_tag' : ''}>
                                Personalize Transcation Limits
                            </Link> */}
                            <Link to="/user/profile/updateaccountpreferences" onClick={stopPropagation}
                                className={isActiveLink('/user/profile/updateaccountpreferences') ? 'bank_account_sidebar_link_tag' : ''}>
                                Primary Account
                            </Link>
                            <Link to="/user/profile/changeemail" onClick={stopPropagation}
                                className={isActiveLink('/user/profile/changeemail') ? 'bank_account_sidebar_link_tag' : ''}>
                                Update email ID
                            </Link>
                            <Link to="">Link My Account</Link>
                            <Link to="">Manage Quick Checkout</Link>
                            <Link to="/user/profile/changeuserid" onClick={stopPropagation}
                                className={isActiveLink('/user/profile/changeuserid') ? 'bank_account_sidebar_link_tag' : ''}>
                                update User ID
                            </Link>
                            <Link to="/user/profile/generatepin" onClick={stopPropagation}
                                className={isActiveLink('/user/profile/generatepin') ? 'bank_account_sidebar_link_tag' : ''}>
                                Generate Debit / Credit Card PIN
                            </Link>
                            <Link to="/user/profile/sharemyaccountdetails" onClick={stopPropagation}
                                className={isActiveLink('/user/profile/sharemyaccountdetails') ? 'bank_account_sidebar_link_tag mb-1' : 'mb-1'}>
                                Share My Account Details
                            </Link>

                            {/* <Link to="/user/profile/changenickname">Account Nickname</Link> */}
                            {/* <Link to="">View Customer ID</Link> */}
                             {/* <Link to="/user/profile/changeformat">Date & Amount Format</Link> */}
                            {/* <Link to="">Favourite Acounts</Link> */}
                            {/* <Link to="">Favourite Activities</Link> */}
                            {/* <Link to="/user/profile/changeprofilephoto">Update Profile Photo</Link> */}

                        </div>

                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 2 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(2)}
                        >
                            <span>  Account Summary</span> <span>{getButtonContent(2)} </span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[2]}px`, display: activeIndex === 2 ? 'block' : 'none' }}
                            ref={contentRefs[2]}
                        >
                            <Link to="/user/accountsummary/viewsummary" onClick={stopPropagation}
                                className={isActiveLink('/user/accountsummary/viewsummary') ? 'bank_account_sidebar_link_tag mt-1' : 'mt-1'}>
                                View Account Summary
                            </Link>
                            <Link to="/user/accountsummary/linkaccounts" onClick={stopPropagation}
                                className={isActiveLink('/user/accountsummary/linkaccounts') ? 'bank_account_sidebar_link_tag mb-1' : 'mb-1'}>
                                Link My Accounts
                            </Link>
                        </div>

                        {/* <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 3 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(3)}
                        >
                            <span>  Financial Journey</span>   <span>{getButtonContent(3)}</span>
                        </button> */}
                        {/* <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[3]}px`, display: activeIndex === 3 ? 'block' : 'none' }}
                            ref={contentRefs[3]}
                        >
                            <Link to="">Financial Journey</Link>
                        </div> */}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default OverviewSidebar
