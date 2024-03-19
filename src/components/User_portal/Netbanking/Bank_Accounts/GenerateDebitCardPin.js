import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Accounts.css';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';
import { useNavigate } from 'react-router-dom';
import apiList from '../../../../lib/apiList';



const GenerateDebitCardPin = () => {
   const navigate = useNavigate();

    const [debitCardPin, setDebitCardPin] = useState('');
    const [confirmDebitCardPin, setConfirmDebitCardPin] = useState('');
    const [userDetails, setUserDetails] = useState([]);

    const token = sessionStorage.getItem('loginToken');


    useEffect(() => {

        const fetchData = async () => {
            try {
              
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

        fetchData();
    }, []);


    const handleGeneratePin = async () => {
        try {
            const response = await axios.post(`${apiList.GenerateCardPin}`, {
                debitCardPin,
                confirmDebitCardPin,
            },
            {
                headers: {
                  Authorization: `Bearer ${token}`,
                  'Content-Type': 'application/json',
                },
              }
            );

            console.log(response.data);

            alert("Pin Generated Successfully");
            navigate('/user/account/debit-atm-card');

        } catch (error) {
            console.error(error.response.data);
        }
    };


    return (
        <div className='container-fluid' style={{ marginTop: "90px" }}>
            <div className='row'>
                <div className='col-3'>
                    <BankaccountSidebar />
                </div>
                <div className='col-9'>
                    <div className="container-fluid generate_pin mt-1">
                        <hr />
                        <div className="card">
                            <h5 className="header card_details_generate_pin_heading p-3">Generate Debit Card PIN</h5>
                            <div className="container-fluid card_details_generate_pin_tags p-2">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <label htmlFor="ac_number">Debit Card Pin*:</label>
                                    </div>
                                    <div className="col-sm-3 ">
                                        <input
                                            className="form-control"
                                            type="Number"
                                            value={debitCardPin}
                                            onChange={(e) => setDebitCardPin(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-4">
                                        <label htmlFor="card_number">Confirm Debit card Pin*:</label>
                                    </div>
                                    <div className="col-sm-3">
                                        <input
                                            className="form-control"
                                            type="Number"
                                            value={confirmDebitCardPin}
                                            onChange={(e) => setConfirmDebitCardPin(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <button className='genrate_pin_submits mt-3' onClick={handleGeneratePin}>Generate Now</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default GenerateDebitCardPin;