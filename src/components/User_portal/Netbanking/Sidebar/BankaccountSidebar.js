import React, { useState, useRef, useEffect } from "react";
import "./Sidebar.css";
import Userdetails from "../UserDetails/UserDetails";
import { Link,useLocation } from "react-router-dom";

function BankaccountSidebar() {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(() => {
    const storedIndex = parseInt(sessionStorage.getItem("activeIndex"));
    return !isNaN(storedIndex) ? storedIndex : 0;
  });
  
  const [contentHeights, setContentHeights] = useState([
    0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const contentRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ]; 

  useEffect(() => {
    const newHeights = contentRefs.map((ref) =>
      ref.current ? ref.current.scrollHeight : 0
    );
    setContentHeights(newHeights);
  }, [activeIndex]);

  useEffect(() => {
    sessionStorage.setItem("activeIndex", activeIndex);
  }, [activeIndex]);

  const stopPropagation = (event) => {
    event.stopPropagation();
  };


  const toggleCollapsible = (index) => {
    setActiveIndex(index);
  };

  const isActiveLink = (to) => {
    return location.pathname === to;
  };  

  const getButtonContent = (index) => {
    return activeIndex === index ? (
      <i className="ri-subtract-line" style={{ fontSize: "18px" }}></i>
    ) : (
      <i className="ri-add-fill" style={{ fontSize: "18px" }}></i>
    );
  };


  return (
    <div>
      <Userdetails />
      <div className="container ">
        <div className="">
          <div className="">
            <button
              type="button"
              className={`collapsible sidebarButton ${activeIndex === 0 ? "active buttonActive" : ""
                } d-flex justify-content-between sidebar_button`}
               onClick={() => toggleCollapsible(0)}
            >
              <span> Accounts </span> <span> {getButtonContent(0)} </span>
            </button>
            <div
              className="content"
              style={{
                maxHeight: `${contentHeights[0]}px`,
                display: activeIndex === 0 ? "block" : "none",
              }}
              ref={contentRefs[0]}
            >
              <Link to="/user/account" onClick={stopPropagation}  className={isActiveLink("/user/account") ? "bank_account_sidebar_link_tag mt-1" : "mt-1"}>Accounts</Link>
              {/* <Link to="">View Customer ID</Link> */}
              <Link to="/user/account/statement" onClick={stopPropagation} className={isActiveLink("/user/account/statement") ? "bank_account_sidebar_link_tag" : ""}>Detailed Statement</Link>
              <Link to="/user/account/statement-by-email" onClick={stopPropagation} className={isActiveLink("/user/account/statement-by-email") ? "bank_account_sidebar_link_tag" : ""}>Account Statement by email</Link>
              <Link to="/user/account/debit-atm-card" onClick={stopPropagation} className={isActiveLink("/user/account/debit-atm-card") ? "bank_account_sidebar_link_tag" : ""}>Debit/ATM Card details</Link>
              {/* <Link to="">Monthly Average Balance Details</Link> */}
              <Link to="/user/account/generate-debitcard-pin" onClick={stopPropagation} className={isActiveLink("/user/account/generate-debitcard-pin") ? "bank_account_sidebar_link_tag" : ""}>Generate ATM Pin Online</Link>
              <Link to="/user/account/chequebook-req" onClick={stopPropagation} className={isActiveLink("/user/account/chequebook-req") ? "bank_account_sidebar_link_tag" : ""}>Cheque Book Request</Link>
              <Link to="/user/account/view-update-pancard" onClick={stopPropagation} className={isActiveLink("/user/account/view-update-pancard") ? "bank_account_sidebar_link_tag" : ""}>View/Update PAN Card</Link>
              <Link to="/user/account/update-form60" onClick={stopPropagation} className={isActiveLink("/user/account/update-form60") ? "bank_account_sidebar_link_tag" : ""}>Update Form 60</Link>
              <Link to="/user/account/block-debit-card" onClick={stopPropagation} className={isActiveLink("/user/account/block-debit-card") ? "bank_account_sidebar_link_tag" : ""}>Block Debit/ ATM Card</Link>
              {/* <Link to="/user/account/pmsocial-securityschmes">PM Social Security Schemes</Link> */}
              {/* <Link to="">Enroll Atal Pension Yojana</Link> */}
              {/* <Link to="/user/account/bank-rewardspoints">Bank Rewards</Link> */}
              <Link to="/user/account/service-request" onClick={stopPropagation} className={isActiveLink("/user/account/service-request") ? "bank_account_sidebar_link_tag mb-1" : "mb-1"}>Service Requests</Link>
            </div>

            <button
              type="button"
              className={`collapsible sidebarButton ${activeIndex === 1 ? "active buttonActive" : ""
                } d-flex justify-content-between sidebar_button`}
              onClick={() => toggleCollapsible(1)}
            >
              <span> Deposits</span> <span> {getButtonContent(1)}</span>
            </button>
            <div
              className="content"
              style={{
                maxHeight: `${contentHeights[1]}px`,
                display: activeIndex === 1 ? "block" : "none",
              }}
              ref={contentRefs[1]}
            >
              {" "}
              <Link to="/user/account/fixed-deposits" className={isActiveLink("/user/account/fixed-deposits") ? "bank_account_sidebar_link_tag mt-1" : "mt-1"} onClick={stopPropagation}>Deposit Accounts</Link>
              <Link to="" className={isActiveLink("") ? "bank_account_sidebar_link_tag" : ""} onClick={stopPropagation}>Open Deposits</Link>
              {/* <Link to="/user/account/iwish-deposits">iWish Golas</Link> */}
              <Link to="/user/account/fd-advice" className={isActiveLink("/user/account/fd-advice") ? "bank_account_sidebar_link_tag" : ""} onClick={stopPropagation}>FD Advice</Link>
              <Link to="" className={isActiveLink("") ? "bank_account_sidebar_link_tag" : ""} onClick={stopPropagation}>Service Requests</Link>
              <Link to="/user/account/renew-fd" className={isActiveLink("/user/account/renew-fd") ? "bank_account_sidebar_link_tag mb-1" : "mb-1"} onClick={stopPropagation}>Renew FD</Link>
            </div>

            {/* <button
              type="button"
              className={`collapsible sidebarButton ${activeIndex === 2 ? "active buttonActive" : ""
                } d-flex justify-content-between sidebar_button`}
              onClick={() => toggleCollapsible(2)}
            >
              <span> iWish Goals</span> <span>{getButtonContent(2)} </span>
            </button>
            <div
              className="content"
              style={{
                maxHeight: `${contentHeights[2]}px`,
                display: activeIndex === 2 ? "block" : "none",
              }}
              ref={contentRefs[2]}
            >
              {" "}
              <Link to="/user/account/iwish-deposits">iWish Goals</Link>
            </div> */}

            <button
              type="button"
              className={`collapsible sidebarButton ${activeIndex === 3 ? "active buttonActive" : ""
                } d-flex justify-content-between sidebar_button`}
              onClick={() => toggleCollapsible(3)}
            >
              <span> Pockets</span> <span>{getButtonContent(3)}</span>
            </button>
            <div
              className="content"
              style={{
                maxHeight: `${contentHeights[3]}px`,
                display: activeIndex === 3 ? "block" : "none",
              }}
              ref={contentRefs[3]}
            >
              {" "}
              <Link to="" className={isActiveLink("") ? "bank_account_sidebar_link_tag mt-1" : "mt-1"} onClick={stopPropagation}>Pockets Account</Link>
              <Link to="" className={isActiveLink("") ? "bank_account_sidebar_link_tag" : ""} onClick={stopPropagation}>Add Funds</Link>
              <Link to="" className={isActiveLink("") ? "bank_account_sidebar_link_tag mb-1" : "mb-1"} onClick={stopPropagation}>View Card Details</Link>
            </div>

            <button
              type="button"
              className={`collapsible sidebarButton ${activeIndex === 4 ? "active buttonActive" : ""
                } d-flex justify-content-between sidebar_button`}
              onClick={() => toggleCollapsible(4)}
            >
              <span> PayLater</span> <span>{getButtonContent(4)}</span>
            </button>
            <div
              className="content"
              style={{
                maxHeight: `${contentHeights[4]}px`,
                display: activeIndex === 4 ? "block" : "none",
              }}
              ref={contentRefs[4]}
            >
              {" "}
              <Link to="/user/account/paylater" className={isActiveLink("/user/account/paylater") ? "bank_account_sidebar_link_tag mt-1 mb-1" : "mt-1 mb-1"} onClick={stopPropagation}>PayLater</Link>
            </div>

            <button
              type="button"
              className={`collapsible sidebarButton ${activeIndex === 5 ? "active buttonActive" : ""
                } d-flex justify-content-between sidebar_button`}
              onClick={() => toggleCollapsible(5)}
            >
              <span> PPF Accounts</span> <span>{getButtonContent(5)}</span>
            </button>
            <div
              className="content"
              style={{
                maxHeight: `${contentHeights[5]}px`,
                display: activeIndex === 5 ? "block" : "none",
              }}
              ref={contentRefs[5]}
            >
              {" "}
              <Link to="" className={isActiveLink("") ? "bank_account_sidebar_link_tag mt-1 mb-1" : "mt-1 mb-1"} onClick={stopPropagation}>PPF Account</Link>
            </div>

            <button
              type="button"
              className={`collapsible sidebarButton ${activeIndex === 6 ? "active buttonActive" : ""
                } d-flex justify-content-between sidebar_button`}
              onClick={() => toggleCollapsible(6)}
            >
              <span> SSY Accounts</span> <span>{getButtonContent(6)}</span>
            </button>
            <div
              className="content"
              style={{
                maxHeight: `${contentHeights[6]}px`,
                display: activeIndex === 6 ? "block" : "none",
              }}
              ref={contentRefs[6]}
            >
              {" "}
              <Link to="" className={isActiveLink("") ? "bank_account_sidebar_link_tag mt-1 mb-1" : "mt-1 mb-1"} onClick={stopPropagation}> SSY Account </Link>
            </div>

            <button
              type="button"
              className={`collapsible sidebarButton ${activeIndex === 7 ? "active buttonActive" : ""
                } d-flex justify-content-between sidebar_button`}
              onClick={() => toggleCollapsible(7)}
            >
              <span> e-Statements</span> <span>{getButtonContent(7)}</span>
            </button>
            <div
              className="content"
              style={{
                maxHeight: `${contentHeights[7]}px`,
                display: activeIndex === 7 ? "block" : "none",
              }}
              ref={contentRefs[7]}
            >
              {" "}
              <Link to="" className={isActiveLink("") ? "bank_account_sidebar_link_tag mt-1" : "mt-1"} onClick={stopPropagation}>Bank Accounts</Link>
              <Link to="" className={isActiveLink("") ? "bank_account_sidebar_link_tag" : ""} onClick={stopPropagation}>Credit Cards</Link>
              <Link to="" className={isActiveLink("") ? "bank_account_sidebar_link_tag" : ""} onClick={stopPropagation}>Demat</Link>
              <Link to="" className={isActiveLink("") ? "bank_account_sidebar_link_tag mb-1" : "mb-1"} onClick={stopPropagation}>PPF Accounts</Link>
            </div>

            <button
              type="button"
              className={`collapsible sidebarButton ${activeIndex === 8 ? "active buttonActive" : ""
                } d-flex justify-content-between sidebar_button`}
              onClick={() => toggleCollapsible(8)}
            >
              <span> iFinance</span>
            </button>
            <div
              className="content"
              style={{ display: activeIndex === 8 ? "block" : "none" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BankaccountSidebar;
