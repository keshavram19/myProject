import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

import Userdetails from '../UserDetails/UserDetails';



function CustomerserviceSidebar() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [contentHeights, setContentHeights] = useState([0, 0]); // Separate heights for each content
    const contentRefs = [useRef(null), useRef(null)]; // Separate refs for each content

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
                            <span>Service Requests </span>
                        </button>


                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 1 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(1)}
                        >
                            <span> My Mailbox </span> <span> {getButtonContent(1)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[0]}px`, display: activeIndex === 1 ? 'block' : 'none' }}
                            ref={contentRefs[0]}
                        >                            <Link to="/user/customerservice/mymailbox">Mailbox</Link>
                            <Link to="">Inbox</Link>
                            <Link to="">Sent Mails</Link>
                            <Link to="">Broadcast Messages</Link>
                            <Link to="">Trash</Link>
                        </div>

                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 2 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(2)}
                        >
                            <span><Link to="/user/customerservice/elocker">e-Locker</Link></span>  <span> {getButtonContent(2)}</span>
                        </button>
                        <div
                            className="content"
                            style={{ maxHeight: `${contentHeights[1]}px`, display: activeIndex === 2 ? 'block' : 'none' }}
                            ref={contentRefs[1]}
                        >                            <Link to="">e-Locker</Link>

                        </div>

                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 4 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(4)}
                        >
                            <span> <Link to={"/user/customerservice/taxcenter"}>Tax Centre</Link></span> 
                        </button>
        

                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 5 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(5)}
                        >
                            <span>Offers Near You</span>
                        </button>
                        

                        <button
                            type="button"
                            className={`collapsible sidebarButton ${activeIndex === 6 ? 'active buttonActive' : ''} d-flex justify-content-between sidebar_button`}
                            onClick={() => toggleCollapsible(6)}
                        >
                            <span>Campus Power</span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CustomerserviceSidebar;
