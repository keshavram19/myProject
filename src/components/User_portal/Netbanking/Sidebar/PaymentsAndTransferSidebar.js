import React, { useState, useRef, useEffect } from 'react';
import './Sidebar.css';
import Userdetails from '../UserDetails/UserDetails';



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
                <div className='row'>

                    <div className='col-3'>
                        <button
                            type="button"
                            className={`collapsible ${activeIndex === 0 ? 'active' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(0)}
                        >
                            <span> Fund Transfer </span> <span> {getButtonContent(0)} </span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[0]}px`, display: activeIndex === 0 ? 'block' : 'none' }}
                            ref={contentRefs[0]}
                        >                            <a href="#">Money to World</a>
                            <a href="#">Initiate Funds Transfer</a>
                            <a href="#">Transcation Status</a>
                            <a href="#">Quick Fund Transfer</a>
                            <a href="#">Generate/Retrieve MMID</a>
                            <a href="#">Manage Payees</a>
                            <a href="#">Personalize Transcation Limits</a>
                        </div>

                        <button
                            type="button"
                            className={`collapsible ${activeIndex === 1 ? 'active' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(1)}
                        >
                            <span> Pay Bills </span> <span> {getButtonContent(1)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[1]}px`, display: activeIndex === 1 ? 'block' : 'none' }}
                            ref={contentRefs[1]}
                        >                            <a href="#">Bill Payment</a>
                        </div>

                        <button
                            type="button"
                            className={`collapsible ${activeIndex === 2 ? 'active' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(2)}
                        >
                            <span> Inward Remittance</span>
                        </button>


                        <button
                            type="button"
                            className={`collapsible ${activeIndex === 3 ? 'active' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(3)}
                        >
                            <span> Recharge</span>   <span>{getButtonContent(3)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[2]}px`, display: activeIndex === 3 ? 'block' : 'none' }}
                            ref={contentRefs[2]}
                        >                            <a href="#">Recharge your DTH Connection</a>
                            <a href="#">Recharge your Mobile/Data Card</a>
                            <a href="#">Google play Recharge</a>
                        </div>

                        <button
                            type="button"
                            className={`collapsible ${activeIndex === 4 ? 'active' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(4)}
                        >
                            <span>  Buy/Recharge Fastag</span>   <span>{getButtonContent(4)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[3]}px`, display: activeIndex === 4 ? 'block' : 'none' }}
                            ref={contentRefs[3]}
                        >                            <a href="#">Buy/Recharge Fastag</a>

                        </div>

                        <button
                            type="button"
                            className={`collapsible ${activeIndex === 5 ? 'active' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(5)}
                        >
                            <span> Tax Centre</span>   <span>{getButtonContent(5)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[4]}px`, display: activeIndex === 5 ? 'block' : 'none' }}
                            ref={contentRefs[4]}
                        >                            <a href="#">View Tax Credit Statement - Form 26AS</a>
                            <a href="#">TDS Certificate</a>
                            <a href="#">eTax Challans</a>
                            <a href="#">Form 15G/H</a>
                            <a href="#">Interest Certificate</a>
                            <a href="#">Pay Direct Tax</a>
                            <a href="#">Pay Indirect Tax</a>
                            <a href="#">Income Tax e-Filing</a>
                        </div>

                        <button
                            type="button"
                            className={`collapsible ${activeIndex === 6 ? 'active' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(6)}
                        >
                            <span>  My Transactions</span>   <span>{getButtonContent(6)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[5]}px`, display: activeIndex === 6 ? 'block' : 'none' }}
                            ref={contentRefs[5]}
                        >                            <a href="#"> Scheduled Transactions</a>
                            <a href="#"> Completed Transactions</a>
                            <a href="#"> Payment Summary</a>
                        </div>

                        <button
                            type="button"
                            className={`collapsible ${activeIndex === 7 ? 'active' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(7)}
                        >
                            <span>  Manage Payees</span>   <span>{getButtonContent(7)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[6]}px`, display: activeIndex === 7 ? 'block' : 'none' }}
                            ref={contentRefs[6]}
                        >                            <a href="#">Add Payee</a>
                            <a href="#">Confirm Payee</a>
                            <a href="#">Delete Payees</a>
                        </div>

                        <button
                            type="button"
                            className={`collapsible ${activeIndex === 8 ? 'active' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(8)}
                        >
                            <span>  Favourites</span> <span>{getButtonContent(8)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[7]}px`, display: activeIndex === 8 ? 'block' : 'none' }}
                            ref={contentRefs[7]}
                        >                            <a href="#">Favourites</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PaymentSidebar;
