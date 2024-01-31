import React, { useState, useRef, useEffect } from "react";
import "./Sidebar.css";
import Userdetails from "../UserDetails/UserDetails";
import { Link } from "react-router-dom";

function BankaccountSidebar() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [contentHeights, setContentHeights] = useState([
    0, 0, 0, 0, 0, 0, 0, 0,
  ]); // Separate heights for each content
  const contentRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ]; // Separate refs for each content

  useEffect(() => {
    const newHeights = contentRefs.map((ref) =>
      ref.current ? ref.current.scrollHeight : 0
    );
    console.log("New Heights:", newHeights);
    setContentHeights(newHeights);
  }, [activeIndex]);

  const toggleCollapsible = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
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
              <Link to="/user/account">Accounts</Link>
              {/* <Link to="">View Customer ID</Link> */}
              <Link to="/user/account/statement">Detailed Statement</Link>
              <Link to="/user/account/statement-by-email">Account Statement by email</Link>
              <Link to="/user/account/debit-atm-card">Debit/ATM Card details</Link>
              {/* <Link to="">Monthly Average Balance Details</Link> */}
              <Link to="/user/account/generate-debitcard-pin">Generate ATM Pin Online</Link>
              <Link to="/user/account/chequebook-req">Cheque Book Request</Link>
              <Link to="/user/account/view-update-pancard">View/Update PAN Card</Link>
              <Link to="/user/account/update-form60">Update Form 60</Link>
              <Link to="/user/account/block-debit-card">Block Debit/ ATM Card</Link>
              {/* <Link to="/user/account/pmsocial-securityschmes">PM Social Security Schemes</Link> */}
              {/* <Link to="">Enroll Atal Pension Yojana</Link> */}
              {/* <Link to="/user/account/bank-rewardspoints">Bank Rewards</Link> */}
              <Link to="/user/account/service-request">Service Requests</Link>
            </div>

            <button
              type="button"
              className={`collapsible sidebarButton ${activeIndex === 1 ? "active buttonActive" : ""
                } d-flex justify-content-between sidebar_button`}
              onClick={() => toggleCollapsible(1)}
            >
              <span> <Link to="/user/account/fixed-deposits"> Deposits</Link></span> <span> {getButtonContent(1)}</span>
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
              <Link to="/user/account/fixed-deposits">Deposit Accounts</Link>
              <Link to="">Open Deposits</Link>
              {/* <Link to="/user/account/iwish-deposits">iWish Golas</Link> */}
              <Link to="/user/account/fd-advice">FD Advice</Link>
              <Link to="">Service Requests</Link>
              <Link to="/user/account/renew-fd">Renew FD</Link>
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
              <Link to="">Pockets Account</Link>
              <Link to="">Add Funds</Link>
              <Link to="">View Card Details</Link>
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
              <Link to="/user/account/paylater">PayLater</Link>
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
              <Link to="">PPF Account</Link>
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
              <Link to=""> SSY Account </Link>
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
              <Link to="">Bank Accounts</Link>
              <Link to="">Credit Cards</Link>
              <Link to="">Demat</Link>
              <Link to="">PPF Accounts</Link>
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
