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
    const accountNumber = 1124563456;

    const fetchData = async () => {
        try {
            const response = await axios.get(`${apiList.customerAccountDetails}${accountNumber}`);
            const userDetailsData = response.data.details;

            if (Array.isArray(userDetailsData)) {
                setUserDetails(userDetailsData);
                
            } else if (typeof userDetailsData === 'object') {
                setUserDetails([userDetailsData]);
            } else {
                console.error('Invalid user details format:', userDetailsData);
            }

        } catch (error) {
            console.error('Error fetching user details:', error);
        }
        console.log('User Details:', userDetails);

    };

    useEffect(() => {

            fetchData();

    }, []);

    const handleGeneratePin = async () => {
        try {

            await fetchData();
           
            const response = await axios.post(`${apiList.GenerateCardPin}`, {
                userAccountNumber: userDetails.userAccountNumber,
                debitCardPin,
                confirmDebitCardPin,
            });

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