import React, { useState, useRef, useEffect } from 'react';
import './Sidebar.css';
import Userdetails from '../UserDetails/UserDetails';
import { Link } from 'react-router-dom';


function PaymentSidebar() {

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
                <div className=''>

                    <div className=''>
                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 0 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(0)}
                        >
                            <span> Fund Transfer </span> <span> {getButtonContent(0)} </span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[0]}px`, display: activeIndex === 0 ? 'block' : 'none' }}
                            ref={contentRefs[0]}
                        >                            <Link to="/user/fundtransfer/mypayee">Money to World</Link>
                            <Link to="">Initiate Funds Transfer</Link>
                            <Link to="/user/fundtransfer/transaction-status">Transcation Status</Link>
                            <Link to="/user/fundtransfer/quickfundtransfer">Quick Fund Transfer</Link>
                            <Link to="/user/fundtransfer/generate-mmid">Generate/Retrieve MMID</Link>
                            <Link to="/user/fundtransfer/manage-payees">Manage Payees</Link>
                            <Link to="">Personalize Transcation Limits</Link>
                        </div>

                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 1 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(1)}
                        >
                            <span> Pay Bills </span> <span> {getButtonContent(1)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[1]}px`, display: activeIndex === 1 ? 'block' : 'none' }}
                            ref={contentRefs[1]}
                        >                            <Link to="">Bill Payment</Link>
                        </div>

                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 2 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(2)}
                        >
                            <span> <Link to="/user/fundtransfer/inward-remitance"> Inward Remittance</Link></span>
                        </button>


                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 3 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(3)}
                        >
                            <span> Recharge</span>   <span>{getButtonContent(3)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[2]}px`, display: activeIndex === 3 ? 'block' : 'none' }}
                            ref={contentRefs[2]}
                        >                            <Link to="">Recharge your DTH Connection</Link>
                            <Link to="">Recharge your Mobile/Data Card</Link>
                            <Link to="">Google play Recharge</Link>
                        </div>

                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 4 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(4)}
                        >
                            <span>  Buy/Recharge Fastag</span>   <span>{getButtonContent(4)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[3]}px`, display: activeIndex === 4 ? 'block' : 'none' }}
                            ref={contentRefs[3]}
                        >                            <Link to="/user/fundtransfer/bill-recharge">Buy/Recharge Fastag</Link>

                        </div>

                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 5 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(5)}
                        >
                            <span> Tax Centre</span>   <span>{getButtonContent(5)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[4]}px`, display: activeIndex === 5 ? 'block' : 'none' }}
                            ref={contentRefs[4]}
                        >                            <Link to="/user/fundtransfer/tax-center">View Tax Credit Statement - Form 26AS</Link>
                            <Link to="/user/fundtransfer/tax-center">TDS Certificate</Link>
                            <Link to="/user/fundtransfer/tax-payment">eTax Challans</Link>
                            <Link to="/user/fundtransfer/tax-center">Form 15G/H</Link>
                            <Link to="/user/fundtransfer/interest-certificate">Interest Certificate</Link>
                            <Link to="/user/fundtransfer/tax-payment">Pay Direct Tax</Link>
                            <Link to="/user/fundtransfer/disclaimer">Pay Indirect Tax</Link>
                            <Link to="/user/fundtransfer/incometax-Efill">Income Tax e-Filing</Link>
                        </div>

                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 6 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(6)}
                        >
                            <span>  My Transactions</span>   <span>{getButtonContent(6)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[5]}px`, display: activeIndex === 6 ? 'block' : 'none' }}
                            ref={contentRefs[5]}
                        >                            <Link to="/user/fundtransfer/scheduled-transaction"> Scheduled Transactions</Link>
                            <Link to="/user/fundtransfer/completed-transaction"> Completed Transactions</Link>
                            <Link to="/user/fundtransfer/payment-summary"> Payment Summary</Link>
                        </div>

                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 7 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(7)}
                        >
                            <span>  Manage Payees</span>   <span>{getButtonContent(7)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[6]}px`, display: activeIndex === 7 ? 'block' : 'none' }}
                            ref={contentRefs[6]}
                        >                            <Link to="/user/fundtransfer/manage-payees">Add Payee</Link>
                            <Link to="/user/fundtransfer/confirm-payee">Confirm Payee</Link>
                            <Link to="">Delete Payees</Link>
                        </div>

                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 8 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(8)}
                        >
                            <span>  Favourites</span> <span>{getButtonContent(8)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[7]}px`, display: activeIndex === 8 ? 'block' : 'none' }}
                            ref={contentRefs[7]}
                        >                            <Link to="">Favourites</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PaymentSidebar;
