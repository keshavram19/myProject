import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Accounts.css';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';
import apiList from '../../../../lib/apiList';

const ChequeBookReq = () => {

  const [userDetails, setUserDetails] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState('');
  const [selectedAddress, setSelectedAddress] = useState('');
  const [checkMsg, setCheckMsg] = useState('');
  const [SRN, setSRN] = useState('');

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const token = sessionStorage.getItem('loginToken');
      const requestOptions = {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      };
      const response = await fetch(apiList.requestedUserDetailsByEmail, requestOptions);
      if (response.ok) {
        const data = await response.json();
        setUserDetails([data.user]);
      } else {
        console.error('Error fetching user details:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const handleAccountChange = (event) => {
    setSelectedAccount(event.target.value);
    console.log('Selected Account:', event.target.value);
  };

  const handleAddressChange = (event) => {
    setSelectedAddress(event.target.value);
    console.log('Selected Address:', event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const token = sessionStorage.getItem('loginToken');
      const response = await axios.post('http://localhost:4444/api/createChequebookRequest', {
        accountNumber: selectedAccount
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const { srn } = response.data;
      setSRN(srn);
      setCheckMsg('Your checkbook request has been submitted successfully');
    } catch (error) {
      console.error('Error submitting chequebook request:', error);
      setCheckMsg('Error submitting chequebook request. Please try again.');
    }
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
              <div cclassName="card">
                <h6 className="bookrequest_heading p-3">Request For New Check Book</h6>
                <div lassName="container-fluid pancard_details p-3">
                  <div className="row mt-1">
                    <div className="col-sm-4">
                      <label htmlFor=",">Select savings Account Number*</label>
                    </div>
                    <div className="col-sm-3">
                      <select
                        className="form_input"
                        value={selectedAccount}
                        onChange={handleAccountChange}
                      >
                        {userDetails.map((account, index) => (
                          <option key={index} value={account.accountNumber}>
                            {account.accountNumber}
                            <p>-{account.firstname}{account.lastname}</p>
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
                        value={selectedAddress}
                        onChange={handleAddressChange}
                      >
                        {userDetails.map((account, index) => (
                          account.currentAddress && ( 
                            <option key={index} value={`${account.currentAddress.city}, ${account.currentAddress.state}, ${account.currentAddress.pincode}`}>
                              {`${account.currentAddress.city}, ${account.currentAddress.state}, ${account.currentAddress.pincode}`}
                            </option>
                          )
                        ))}
                      </select>
                    </div>

                  </div>
                  <button className='back_button mt-5' size="sm">BACK</button>
                  <button className='back_button mt-5 ml-3' size="sm" onClick={handleSubmit}>SUBMIT</button>
                </div>
              </div>
              {SRN && (
                <p className="text-success pl-3">SRN: {SRN}</p>
              )}
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


