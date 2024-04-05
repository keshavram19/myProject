import React, { useState, useRef, useEffect } from 'react';
import './Sidebar.css'
import Userdetails from '../UserDetails/UserDetails';
import { Link } from 'react-router-dom';


function OverviewSidebar() {

    const [activeIndex, setActiveIndex] = useState(null);
    const [contentHeights, setContentHeights] = useState([0, 0, 0, 0]); // Separate heights for each content
    const contentRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]; // Separate refs for each content

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
                <div className=''>

                    <div className=''>

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
                            <Link to="/user/overview">My view</Link>
                        </div>

                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 1 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(1)}
                        >
                            <span> <Link to="/user/viewprofile"> Personal Details</Link> </span> <span> {getButtonContent(1)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[1]}px`, display: activeIndex === 1 ? 'block' : 'none' }}
                            ref={contentRefs[1]}
                        >
                            {/* <Link to="/user/profile/changenickname">Account Nickname</Link> */}
                            {/* <Link to="">View Customer ID</Link> */}
                            <Link to="/user/profile/changepassword">Change Password</Link>

                            {/* <Link to="/user/profile/changeformat">Date & Amount Format</Link> */}
                            {/* <Link to="">Favourite Acounts</Link> */}
                            {/* <Link to="">Favourite Activities</Link> */}
                            

                            
                            
                           
                            <Link to="/user/profile/paymenttransactionlimit">Personalize Transcation Limits</Link>

                            <Link to="/user/profile/updateaccountpreferences">Primary Account</Link>
                            <Link to="/user/profile/changeemail">Update email ID</Link>
                            <Link to="">Link My Account</Link>
                            <Link to="">Manage Quick Checkout</Link>
                            <Link to="/user/profile/changeuserid">update User ID</Link>
                            {/* <Link to="/user/profile/changeprofilephoto">Update Profile Photo</Link> */}
                            <Link to="/user/profile/generatepin">Generate Debit / Credit Card PIN</Link>
                            <Link to="/user/profile/sharemyaccountdetails">Share My Account Details</Link>
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
                            <Link to="/user/accountsummary/viewsummary">View Account Summary</Link>
                            <Link to="/user/accountsummary/linkaccounts">Link My Accounts</Link>
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
