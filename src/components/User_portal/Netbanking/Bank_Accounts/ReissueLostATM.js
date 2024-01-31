import React, { useState, useEffect } from 'react';
import './Accounts.css';
import axios from 'axios';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';
import { useNavigate } from 'react-router-dom';


const steps = [
    { title: "Generate Request", isCompleted: true },
    { title: "Service Request Confirmation", isCompleted: false },
    { title: "Request Generated", isCompleted: false },
];

const ReissueLostATMcard = () => {

    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState([]);
    const [preferedaddress, setPreferedaddress] = useState('');

    const Step = ({ title, isCompleted }) => {

        return (
            <div className="reissue_card_step">
                <div className="reissue_card_circle_container ">
                    <div className={`reissue_card_circle ${isCompleted ? 'reissue_card_completed' : 'reissue_card_circle'}`}></div>
                </div>
                <p className="title">{title}</p>
            </div>
        );
    };

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:4444/api/userDetails/1124563456');
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

    const handleBackCard = () => {
        navigate('/user/account/reissue-card')
    }

    const handleChangePreferredAddress = (e) => {
        const selectedValue = e.target.value;
        if (selectedValue === 'address') {

            navigate('/user/account/generate-request-lost-atm-card');
        }

        setPreferedaddress(selectedValue);
    };


    return (
        <div className='container-fluid' style={{ marginTop: "90px" }}>
            <div className='row'>
                <div className='col-3'>
                    <BankaccountSidebar />
                </div>
                <div className='col-9'>
                    <div className="container-fluid reissue_card">
                        <h3 className="reissue_card_heading">Reissue  of Lost ATM/debit Card</h3>
                        <div className='col-sm-12'>
                            <div className="reissue_card_steps">
                                <div className="reissue_card_steps_container">
                                    {steps.map((step, index) => (
                                        <Step key={index} title={step.title} isCompleted={step.isCompleted} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="card card_details_select p-2">
                            <h6>Generate Request</h6>
                            <div className="row my-3 align-items-center">
                                <div className="col-sm-5 ml-3  ">
                                    <p>Select Savings Account Number*</p>
                                </div>
                                <div className="col-sm-5">

                                    <select
                                        className="form-control"
                                        value={userDetails.userAccountNumber}
                                        defaultChecked
                                    >
                                        {userDetails.map((account, index) => (
                                            <option key={index} value={account.userAccountNumber}>
                                                {account.userAccountNumber}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="row my-3 align-items-center">
                                <div className="col-sm-5 ml-3  ">
                                    <p>Select preferred address for dispacth*</p>
                                </div>
                                <div className="col-sm-5">

                                    <select
                                        className="form-control"
                                        value={preferedaddress}
                                        onChange={handleChangePreferredAddress}
                                    >
                                        <option value='Select'>Please Select</option>
                                        <option value='address'>Communication Address</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex my-3">
                            <button type="button" className="reissue_card_button ml-2" onClick={handleBackCard}>BACK</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReissueLostATMcard;