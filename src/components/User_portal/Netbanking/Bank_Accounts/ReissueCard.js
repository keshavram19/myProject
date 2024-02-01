import React, { useState, useEffect }  from 'react';
import './Accounts.css';
import axios from 'axios';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';
import { useNavigate } from 'react-router-dom';
import apiList from '../../../../lib/apiList';


const steps = [
    { title: "Generate Request", isCompleted: true },
    { title: "Service Request Confirmation", isCompleted: false },
    { title: "Request Generated", isCompleted: false},
];

const Reissuecard = () => {

    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState([]);
    const accountNumber = 1124563456;

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

    const handleSubmitCard = () =>{
        navigate('/user/account/reissue-lost-atm-card')
    }
      
  
    return (
        <div className='container-fluid' style={{marginTop:"90px"}}>
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
                        </div>
                        <div className="d-flex my-3">
                            <button type="button" className="reissue_card_button ml-2">BACK</button>
                            <button type="submit" className="reissue_card_button_submit ml-4" onClick={handleSubmitCard}>SUBMIT</button>
                        </div>
                        <div className="note">
                            <p>Note: Upon submission system will validate your account details, please wait for a while</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reissuecard;