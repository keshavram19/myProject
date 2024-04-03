import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import apiList from "../../../../lib/apiList";
import banklogo from "../../../../Images/banklogo.png";
import "./Dashboard.css";
import { IoSettingsOutline } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { LuRefreshCcwDot } from "react-icons/lu";
import { FaWallet } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";
import { MdOutlineElectricBolt } from "react-icons/md";
import { GrInternetExplorer } from "react-icons/gr";
import { BsNewspaper } from "react-icons/bs";
import { FaMessage } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import { FaSignal } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const Dashboard = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchuserDetails = async () => {
      try {
        const token = sessionStorage.getItem("loginToken");
        const requestOptions = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
        const response = await fetch(
          apiList.requestedUserDetailsByEmail,
          requestOptions
        );
        console.log("API Response:", response);
        if (response.ok) {
          const data = await response.json();
          console.log("User Details:", data);
          setUserDetails(data);
        } else {
          console.error("Error fetching user data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchuserDetails();
  }, []);

  return (
    <div className="row royal_dashboard" style={{ marginTop: "63px" }}>
      <div className="adm_sdbar col-sm-3">
        <div className="logo-container">
          <img className="logo" src={banklogo} alt="logo" />
        </div>
        <div className="welcome_text mt-4">
          <h5>Welcome back</h5>
          {userDetails && userDetails.user && (
            <h2>{userDetails.user.firstname}</h2>
          )}
        </div>

        <ul className="side_lnk mt-5">
          <li>
            <Link to="/dashboard">
              {" "}
              <IoHome /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/Investment">
              {" "}
              <LuRefreshCcwDot /> Investment
            </Link>
          </li>
          <li>
            <Link to="/Transaction">
              {" "}
              <FaFileAlt /> Transaction
            </Link>
          </li>

          <li>
            <Link to="/Wallet">
              {" "}
              <FaWallet /> Wallet
            </Link>
          </li>
          <li>
            <Link to="/Settings">
              {" "}
              <IoSettingsOutline /> Settings{" "}
            </Link>
          </li>

          <li className="mt-5">
            <Link to="/Account<">
              {" "}
              <MdManageAccounts /> Account
            </Link>
          </li>
          <li>
            <Link to="/logout<">
              {" "}
              <MdOutlineLogout /> Log Out
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-sm-9">
        <div className="card card_container">
          <div>
            <nav class="navbar">
              <div class="left-side">
                <div class="dashboard">
                  <h4>Dashboard</h4>
                </div>
              </div>
              <div class="right-side1">
                <span class="msg-icon">
                  <FaMessage />
                </span>
                <span class="bell-icon">
                  <FaBell />
                </span>
                <div>
                  <input
                    className="search_input"
                    type="text"
                    placeholder="Search name "
                  />
                  <FaSearch className="search_icon" />
                </div>
                <img
                  src="https://www.shutterstock.com/image-photo/headshot-portrait-confident-young-indian-260nw-2021632466.jpg"
                  alt="img"
                  className="navbar_img"
                />
              </div>
            </nav>
          </div>

          <div className="row mt-3">
            <div className="credit_card_container col-sm-5">
              <div className="container_card">
                <h6>Available Balance</h6>
                {userDetails && userDetails.user && (
                  <h1>{userDetails.user.userAccountBalance}</h1>
                )}

                <div className="row">
                  <div className="text-left">
                    <p>Card Number</p>

                    {userDetails &&
                      userDetails.user &&
                      userDetails.user.userCreditCardDetails &&
                      userDetails.user.userCreditCardDetails.length > 0 && (
                        <p>
                          {
                            userDetails.user.userCreditCardDetails[0]
                              .creditCardNumber
                          }
                        </p>
                      )}
                  </div>
                  <div className="creditcard_royalbank">
                    <p>Credit Card</p>

                    {userDetails && userDetails.user && (
                      <p>{userDetails.user.firstname}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-3 credit_amount ">
                <div className="">
                  <div className=" transaction-amountt d-flex">
                    <p>Income</p>
                    <p>Spending</p>
                  </div>
                  <div className="transaction_signall d-flex">
                    <div className="transaction-amountt negative">+$1.000</div>
                    <div className="transaction-amountt">
                      <FaSignal style={{ fontSize: "24px" }} />
                    </div>
                    <div className="transaction-amountt positive">-$1.000</div>
                    <div className="transaction-amountt">
                      <LiaHandHoldingUsdSolid style={{ fontSize: "30px" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col-sm-5 ml-5">
              <div className="transaction mt-2">
                <h4>Transaction</h4>

                <div className="row mb-2">
                  <div className="col-sm-2">
                    <h6>Name</h6>
                  </div>
                  <div className="col-sm-4">
                    <h6>Date</h6>
                  </div>
                  <div className="col-sm-2">
                    <h6>Deposit</h6>
                  </div>
                  <div className="col-sm-3">
                    <h6>Withdrawal</h6>
                  </div>
                </div>

                {userDetails &&
                  userDetails.user &&
                  userDetails.user.transactions &&
                  userDetails.user.transactions
                    .slice(-5)
                    .map((transaction, index) => {
                      const name = transaction.description.split("/")[3];
                      return (
                        <div key={index} className="row">
                          <div className="col-sm-2">
                            <p>{name}</p>
                          </div>
                          <div className="col-sm-4">
                            <p>{transaction.date}</p>
                          </div>

                          <div className="col-sm-2">
                            <p>{transaction.deposit}</p>
                          </div>
                          <div className="col-sm-3">
                            <p>{transaction.withdrawal}</p>
                          </div>
                        </div>
                      );
                    })}
              </div>
            </div> */}
            <div className="col-sm-5 ml-5">
  <div className="transaction mt-2">
    <h4>Transaction</h4>

    <div className="row mb-2">
      <div className="col-sm-2">
        <h6>Name</h6>
      </div>
      <div className="col-sm-4">
        <h6>Date</h6>
      </div>
      <div className="col-sm-3">
        <h6>Amount</h6>
      </div>
    </div>

    {userDetails &&
      userDetails.user &&
      userDetails.user.transactions &&
      userDetails.user.transactions
        .slice(-5)
        .map((transaction, index) => {
          const name = transaction.description.split("/")[3];
          // Determine the class based on whether the transaction is a deposit or withdrawal
          const amountClass = transaction.deposit >= 0 ? "positive-amount" : "negative-amount";
          const amountText = transaction.deposit >= 0 ? transaction.deposit : transaction.withdrawal;
          <div className="col-sm-3">
  <p className={transaction.deposit >= 0 ? "positive-amount" : "negative-amount"}>
    {transaction.deposit >= 0 ? "+" : "-"}
    {Math.abs(transaction.deposit >= 0 ? transaction.deposit : transaction.withdrawal)}
  </p>
</div>

          return (
            <div key={index} className="row">
              <div className="col-sm-2">
                <p>{name}</p>
              </div>
              <div className="col-sm-4">
                <p>{transaction.date}</p>
              </div>

              <div className={`col-sm-3 ${amountClass}`}>
                <p>{amountText}</p>
              </div>
            </div>
          );
        })}
  </div>
</div>

          </div>

          <div className="row mt-4">
            <div className="col-sm-5">
              <div className="transactionn">
                <h4>My Subscription</h4>
              </div>

              <div className="transaction-item">
                <div className="transaction-icon">
                  <MdOutlineElectricBolt />
                </div>
                <div className="transaction_detials">
                  <div className="transaction-description">
                    Monthly Electricity
                  </div>
                </div>
                <div className="transaction_amount negative">
                  Expried in 1 day
                </div>
              </div>

              <div className="transaction-item">
                <div className="transaction-icon">
                  <GrInternetExplorer />
                </div>
                <div className="transaction_details">
                  <div className="transaction-description">
                    Monthly internet
                  </div>
                </div>
                <div className="transaction_amount negative">
                  Expried in 1 day
                </div>
              </div>
              <div className="transaction-item">
                <div className="transaction-icon">
                  <BsNewspaper />
                </div>
                <div className="transaction_details">
                  <div className="transaction-description">
                    Monthly Newspaper
                  </div>
                </div>
                <div className="transaction_amount negative">
                  Expried in 1 day
                </div>
              </div>
            </div>
            <div className="col-sm-5 ml-5">
              <div className="send-to-friend">
                <h4>Send to Friend</h4>
                <div className="image_row d-flex mt-3">
                  <div className="image_col">
                    <img
                      src="https://media.istockphoto.com/id/1303206558/photo/headshot-portrait-of-smiling-businessman-talk-on-video-call.jpg?s=612x612&w=0&k=20&c=hMJhVHKeTIznZgOKhtlPQEdZqb0lJ5Nekz1A9f8sPV8="
                      alt="img"
                    />
                    <p>Alfredo</p>
                  </div>
                  <div className="image_col">
                    <img
                      src="https://media.istockphoto.com/id/1329936184/photo/head-shot-portrait-of-smiling-businesswoman-intern-looking-at-camera.jpg?s=612x612&w=0&k=20&c=cCeWt0GYUtcFsGFi6hTFci-d5KZY6FAd_UchY9V5aSo="
                      alt="img"
                    />
                    <p>Claudia</p>
                  </div>
                  <div className="image_col">
                    <img
                      src="https://media.istockphoto.com/id/1320811419/photo/head-shot-portrait-of-confident-successful-smiling-indian-businesswoman.jpg?s=612x612&w=0&k=20&c=bCUTB8vd8MnzZFIq-x645-SmLNk2sQzOvOvWCPGDfZ4="
                      alt="img"
                    />
                    <p>Cahaya</p>
                  </div>
                  <div className="image_col">
                    <img
                      src="https://www.shutterstock.com/image-photo/headshot-portrait-confident-young-indian-260nw-2021632466.jpg"
                      alt="img"
                    />
                    <p>Mariana</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
