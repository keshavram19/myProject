import React, { useState, useRef, useEffect } from 'react';
import './Sidebar.css'
import Userdetails from '../UserDetails/UserDetails';


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
                <div className='row'>

                    <div className='col-3'>

                        <button
                            type="button"
                            className={`collapsible ${activeIndex === 0 ? 'active' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(0)}
                        >
                            <span> My View </span> <span> {getButtonContent(0)} </span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[0]}px`, display: activeIndex === 0 ? 'block' : 'none' }}
                            ref={contentRefs[0]}
                        >
                            <a href="#">My view</a>
                        </div>

                        <button
                            type="button"
                            className={`collapsible ${activeIndex === 1 ? 'active' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(1)}
                        >
                            <span> Personal Details </span> <span> {getButtonContent(1)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[1]}px`, display: activeIndex === 1 ? 'block' : 'none' }}
                            ref={contentRefs[1]}
                        >
                            <a href="#">Account Nickname</a>
                            <a href="#">View Customer ID</a>
                            <a href="#">Change Password</a>
                            <a href="#">Date & Amount Format</a>
                            <a href="#">Favourite Acounts</a>
                            <a href="#">Favourite Activities</a>
                            <a href="#">Personalize Transcation Limits</a>
                            <a href="#">Primary Account</a>
                            <a href="#">Update email ID</a>
                            <a href="#">Link My Account</a>
                            <a href="#">Manage Quick Checkout</a>
                            <a href="#">update User ID</a>
                            <a href="#">Update Profile Photo</a>
                            <a href="#">Generate Debit / Credit Card PIN</a>
                            <a href="#">Share My Account Details</a>
                        </div>

                        <button
                            type="button"
                            className={`collapsible ${activeIndex === 2 ? 'active' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(2)}
                        >
                            <span>  Account Summary</span> <span>{getButtonContent(2)} </span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[2]}px`, display: activeIndex === 2 ? 'block' : 'none' }}
                            ref={contentRefs[2]}
                        >
                            <a href="#">View Account Summary</a>
                            <a href="#">Link My Accounts</a>
                        </div>

                        <button
                            type="button"
                            className={`collapsible ${activeIndex === 3 ? 'active' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(3)}
                        >
                            <span>  Financial Journey</span>   <span>{getButtonContent(3)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[3]}px`, display: activeIndex === 3 ? 'block' : 'none' }}
                            ref={contentRefs[3]}
                        >
                            <a href="#">Financial Journey</a>
                            {/* Add more links as needed */}
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default OverviewSidebar
