import React, { useState, useRef, useEffect } from 'react';
import './Sidebar.css'
import Userdetails from '../UserDetails/UserDetails';
import { Link } from 'react-router-dom';

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
            
            {/* <Userdetails /> */}
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
                        >                            <Link to="">Mutual Funds</Link>
                            <Link to="">Online IPO</Link>
                            <Link to="">PPF Account Online</Link>
                            <Link to="">Fixed/Recurring Deposits</Link>
                            <Link to="">3-in-1 Account</Link>
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
                        >                            <Link to="">View Holding Statement</Link>
                            <Link to="">View / Download eCAS</Link>
                            <Link to="">View Transaction Statement</Link>
                            <Link to="">View Status of Transcation</Link>
                            <Link to="">View Bill Details</Link>
                            <Link to="">View Personal Details</Link>
                            <Link to="">View Settlement Calendar</Link>
                            <Link to="">Request TIFD/DIS Booklet</Link>
                            <Link to="">View Customer Ledger Request</Link>
                            <Link to="">ISIN Lookup</Link>
                            <Link to="">View Demat Branches</Link>
                            <Link to="">Service Request</Link>
                        </div>


                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 3 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(3)}
                        >
                            <span> <Link to="/user/nps"> National Pension System</Link></span>
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
                            <span><Link to="user/guranteedpensionplan"> Guarnteed Pension Plan</Link></span>
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
                        >                            <Link to="">iWish-Flexible RD</Link>
                        </div>

                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 8 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(8)}
                        >
                            <span> <Link to={"/user/termlifeinsurance"}> Term Life Insurance </Link></span>
                        </button>

                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 9 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(9)}
                        >
                            <span>  <Link to={"/user/cancercover"}> Cancer Cover</Link></span>
                        </button>

                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 10 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(10)}
                        >
                            <span> <Link to={"/user/generalinsurnace"}>  General Insurance</Link></span>   <span>{getButtonContent(10)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[3]}px`, display: activeIndex === 10 ? 'block' : 'none' }}
                            ref={contentRefs[3]}
                        >                            <Link to="">General Insurance</Link>
                            <Link to="">Group Health Insurance Top Up</Link>
                            <Link to="">Travel Insurance</Link>
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
