import React, { useState, useRef, useEffect } from 'react';
import './Sidebar.css'
import Userdetails from '../UserDetails/UserDetails';

function BankaccountSidebar() {

    const [activeIndex, setActiveIndex] = useState(null);
    const [contentHeights, setContentHeights] = useState([0, 0, 0, 0, 0, 0, 0, 0]); // Separate heights for each content
    const contentRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)]; // Separate refs for each content

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
                            <span> Accounts </span> <span> {getButtonContent(0)} </span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[0]}px`, display: activeIndex === 0 ? 'block' : 'none' }}
                            ref={contentRefs[0]}
                        >
                            <a href="#">Accounts</a>
                            <a href="#">View Customer ID</a>
                            <a href="#">Detailed Statement</a>
                            <a href="#">Account Statement by email</a>
                            <a href="#">Debit/ATM Card details</a>
                            <a href="#">Monthly Average Balance Details</a>
                            <a href="#">Generate ATM Pin Online</a>
                            <a href="#">Cheque Book Request</a>
                            <a href="#">View/Update PAN Card</a>
                            <a href="#">Update Form 60</a>
                            <a href="#">Block Debit/ ATM Card</a>
                            <a href="#">PM Social Security Schemes</a>
                            <a href="#">Enroll Atal Pension Yojana</a>
                            <a href="#">Bank Rewards</a>
                            <a href="#">Service Requests</a>
                        </div>

                        <button
                            type="button"
                            className={`collapsible ${activeIndex === 1 ? 'active' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(1)}
                        >
                            <span> Deposits </span> <span> {getButtonContent(1)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[1]}px`, display: activeIndex === 1 ? 'block' : 'none' }}
                            ref={contentRefs[1]}
                        >                            <a href="#">Deposit Accounts</a>
                            <a href="#">Open Deposits</a>
                            <a href="#">iWish Golas</a>
                            <a href="#">FD Advice</a>
                            <a href="#">Service Requests</a>
                            <a href="#">Renew FD</a>
                        </div>

                        <button
                            type="button"
                            className={`collapsible ${activeIndex === 2 ? 'active' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(2)}
                        >
                            <span> <i class="ri-table-alt-line" style={{ fontSize: "20px" }}></i> iWish Goals</span> <span>{getButtonContent(2)} </span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[2]}px`, display: activeIndex === 2 ? 'block' : 'none' }}
                            ref={contentRefs[2]}
                        >                            <a href="#">iWish Goals</a>

                        </div>

                        <button
                            type="button"
                            className={`collapsible ${activeIndex === 3 ? 'active' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(3)}
                        >
                            <span>  Pockets</span>   <span>{getButtonContent(3)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[3]}px`, display: activeIndex === 3 ? 'block' : 'none' }}
                            ref={contentRefs[3]}
                        >                            <a href="#">Pockets Account</a>
                            <a href="#">Add Funds</a>
                            <a href="#">View Card Details</a>
                        </div>

                        <button
                            type="button"
                            className={`collapsible ${activeIndex === 4 ? 'active' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(4)}
                        >
                            <span>  PayLater</span>   <span>{getButtonContent(4)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[4]}px`, display: activeIndex === 4 ? 'block' : 'none' }}
                            ref={contentRefs[4]}
                        >                            <a href="#">PayLater</a>

                        </div>

                        <button
                            type="button"
                            className={`collapsible ${activeIndex === 5 ? 'active' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(5)}
                        >
                            <span>  PPF Accounts</span>   <span>{getButtonContent(5)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[5]}px`, display: activeIndex === 5 ? 'block' : 'none' }}
                            ref={contentRefs[5]}
                        >                            <a href="#">PPF Account</a>

                        </div>

                        <button
                            type="button"
                            className={`collapsible ${activeIndex === 6 ? 'active' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(6)}
                        >
                            <span>  SSY Accounts</span>   <span>{getButtonContent(6)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[6]}px`, display: activeIndex === 6 ? 'block' : 'none' }}
                            ref={contentRefs[6]}
                        >                            <a href="#"> SSY Account</a>

                        </div>

                        <button
                            type="button"
                            className={`collapsible ${activeIndex === 7 ? 'active' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(7)}
                        >
                            <span>  e-Statements</span>   <span>{getButtonContent(7)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[7]}px`, display: activeIndex === 7 ? 'block' : 'none' }}
                            ref={contentRefs[7]}
                        >                            <a href="#">Bank Accounts</a>
                            <a href="#">Credit Cards</a>
                            <a href="#">Demat</a>
                            <a href="#">PPF Accounts</a>
                        </div>

                        <button
                            type="button"
                            className={`collapsible ${activeIndex === 8 ? 'active' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(8)}
                        >
                            <span>  iFinance</span>
                        </button>
                        <div className="content" style={{ display: activeIndex === 8 ? 'block' : 'none' }}>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BankaccountSidebar;
