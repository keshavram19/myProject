import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Accounts.css';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';





const ChequeBookReq = () => {

  const [userDetails, setUserDetails] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState('');
  const [checkMsg, setCheckMsg] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4444/api/userDetails/1234567832');
      const userDetailsData = response.data.details;

      if (Array.isArray(userDetailsData)) {
        setUserDetails(userDetailsData);
        setCheckMsg('Checkbook requested successfully');
      } else if (typeof userDetailsData === 'object') {
        setUserDetails([userDetailsData]);
      } else {
        console.error('Invalid user details format:', userDetailsData);
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const handleAccountChange = (event) => {
    setSelectedAccount(event.target.value);
    console.log('Selected Account:', event.target.value);
  };

  const handleSubmit = async () => {
    setCheckMsg('Your checkbook request has been submitted successfully'); // Set the message
  };

  return (
    <div>
      <div className='bookrequest_container container-fluid' style={{ marginTop: "90px" }}>
        <div className='row'>
        <div className='col-3'>
            <BankaccountSidebar />
          </div>
          <div className='col-9'>
            <div className="container-fluid bookrequest my-2">
              <div className="d-flex">
                <h3 className='check_book_heading'>Check Book Request</h3>
              </div>
              <div className="card">
                <h6 className="bookrequest_heading p-3">Request For New Check Book</h6>
                <div className="container-fluid pancard_details p-3">
                  <div className="row mt-1">
                    <div className="col-sm-4">
                      <label htmlFor="text">Select savings Account Number*</label>
                    </div>
                    <div className="col-sm-3">
                      <select
                        className="form_input"
                        value={selectedAccount}
                        onChange={handleAccountChange}
                      >
                        {userDetails.map((account, index) => (
                          <option key={index} value={account.userAccountNumber}>
                            {account.userAccountNumber}
                            <p>-{account.accountHolderName}</p>
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-sm-4">
                      <label htmlFor="text">Select preferred address for dispatch*</label>
                    </div>
                    <div className="col-sm-3">
                      <select
                        className="form_input"
                        value={selectedAccount}
                        onChange={handleAccountChange}
                      >
                        {userDetails.map((account, index) => (
                          <option key={index} value={account.userAccountNumber}>
                            <p>{account.accountHolderAddress}</p>
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <button className='back_button mt-5' size="sm">BACK</button>
                  <button className='back_button mt-5 ml-3' size="sm" onClick={handleSubmit}>SUBMIT</button>
                </div>
              </div>
              {/* Display checkMsg if it's not empty */}
              {checkMsg && (
                <p className="text-success pl-3">{checkMsg}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ChequeBookReq;