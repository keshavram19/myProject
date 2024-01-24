import React, { useState, useRef, useEffect } from 'react';
import './Sidebar.css'
import Userdetails from '../UserDetails/UserDetails';

function InvestmentSidebar() {

    const [activeIndex, setActiveIndex] = useState(null);
    const [contentHeights, setContentHeights] = useState([0, 0, 0, 0]); // Separate heights for each content
    const contentRefs = [ useRef(null), useRef(null), useRef(null), useRef(null)]; // Separate refs for each content

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
                            <span> Invest Online </span> <span> {getButtonContent(0)} </span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[0]}px`, display: activeIndex === 0 ? 'block' : 'none' }}
                            ref={contentRefs[0]}
                        >                            <a href="#">Mutual Funds</a>
                            <a href="#">Online IPO</a>
                            <a href="#">PPF Account Online</a>
                            <a href="#">Fixed/Recurring Deposits</a>
                            <a href="#">3-in-1 Account</a>
                        </div>

                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 1 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(1)}
                        >
                            <span> Buy Mutual Funds</span>
                        </button>

                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 2 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(2)}
                        >
                            <span>  Demat</span>   <span> {getButtonContent(2)} </span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[1]}px`, display: activeIndex === 2 ? 'block' : 'none' }}
                            ref={contentRefs[1]}
                        >                            <a href="#">View Holding Statement</a>
                            <a href="#">View / Download eCAS</a>
                            <a href="#">View Transaction Statement</a>
                            <a href="#">View Status of Transcation</a>
                            <a href="#">View Bill Details</a>
                            <a href="#">View Personal Details</a>
                            <a href="#">View Settlement Calendar</a>
                            <a href="#">Request TIFD/DIS Booklet</a>
                            <a href="#">View Customer Ledger Request</a>
                            <a href="#">ISIN Lookup</a>
                            <a href="#">View Demat Branches</a>
                            <a href="#">Service Request</a>
                        </div>


                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 3 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(3)}
                        >
                            <span>  National Pension System</span>
                        </button>

                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 4 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(4)}
                        >
                            <span>  PPF Accounts</span>
                        </button>

                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 5 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(5)}
                        >
                            <span>  SSY Accounts</span>
                        </button>
                        

                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 6 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(6)}
                        > 
                            <span> Guarnteed Pension Plan</span>
                        </button>

                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 7 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(7)}
                        >
                            <span>  iWish-Flexible RD</span>   <span>{getButtonContent(7)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[2]}px`, display: activeIndex === 7 ? 'block' : 'none' }}
                            ref={contentRefs[2]}
                        >                            <a href="#">iWish-Flexible RD</a>
                        </div>

                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 8 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(8)}
                        >
                            <span>  Term Life Insurance </span>
                        </button>

                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 9 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(9)}
                        >
                            <span>   Cancer Cover</span>
                        </button>

                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 10 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(10)}
                        >
                            <span>  General Insurance</span>   <span>{getButtonContent(10)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[3]}px`, display: activeIndex === 10 ? 'block' : 'none' }}
                            ref={contentRefs[3]}
                        >                            <a href="#">General Insurance</a>
                            <a href="#">Group Health Insurance Top Up</a>
                            <a href="#">Travel Insurance</a>
                        </div>

                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 11 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(11)}
                        >
                            <span>   PMJJBY Scheme</span>
                        </button>

                        
                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 12 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(12)}
                        >
                            <span>   Retirement Journey</span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InvestmentSidebar;
