
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Accounts.css';
import BankRewardBgImg from '../../../../Images/bank_rewards.jpeg';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';
import apiList from '../../../../lib/apiList';


function BankRewardPoints() {
  const [userDetails, setUserDetails] = useState({});

  const fetchUserDetails = async () => {
    const accountNumber = 123456789;
    console.log(accountNumber)
    const api = `http://localhost:4444/api/userDetails/${accountNumber}`;
    try {
      const response = await axios.get(api, {});
      const data = response.data;
      setUserDetails(data.details);
      console.log("Account Number:", accountNumber);
    } catch (error) {
      console.error("can't get the user Account", error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <>
      <div className='container-fluid' style={{ marginTop: "90px" }}>
        <div className='side_bar_section'>
          <div className='row'>
            <div className='col-3'>
              <BankaccountSidebar />
            </div>
            <div className='col-9'>
              <div className='bank_reward_sec-2'>
                <div><h3 className='text-center'>Bank Rewards</h3></div>
                <img src={BankRewardBgImg} style={{ height: '300px', width: '100%' }} alt='bank reward img' />
              </div>
              <div className='bank_reward_section p-5'>
                <h5>Your Savings Account/ Credit Card Points</h5>
                <table className='table table-bordered text-center'>
                  <thead className='thead-light'>
                    <tr>
                      <th>Royal Islamic Savings/Credit Card Account Number</th>
                      <th>Point Balance*</th>
                      <th>Redeem Now</th>
                    </tr>
                  </thead>
                  <tbody style={{ fontWeight: '400', fontSize: '15px' }}>
                    <tr>
                      <td>{userDetails.userAccountNumber}</td>
                      <td>150.0</td>
                      <td><a href='#' style={{ textDecoration: "underline" }}>Redeem Now</a></td>
                    </tr>
                  </tbody>
                </table>
                <div className='Bank-reward-note'>
                  <p style={{ fontSize: "11px" ,color:"#929090"}}>
                    <span style={{ fontSize: "15px" ,color:"#495057"}}>
                      <b>Note:  </b>
                    </span>
                      The above-mentioned Reward Points are not eligible for cards such as Amazon Pay Credit Card, MakeMyTrip Royal Islamic Bank Platinum Credit Card, MakeMyTrip Royal Islamic Bank Signature Credit Card, etc. For a detailed list of cards, <a href='#' style={{ textDecoration: "underline" }}>CLICK HERE</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BankRewardPoints;

