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

const ReissueCardRequest = () => {

    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState([]);
    const token = sessionStorage.getItem('loginToken');

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

    const handleBackChange = () =>{
        navigate('/user/account/debit-atm-card');
    }
   
      
  
    return (
        <div className='container-fluid' style={{marginTop:"90px"}}>
            <div className='row'>
                <div className='col-3'>
                    <BankaccountSidebar />
                </div>
                <div className='col-9'>
                    <div className="container-fluid reissue_card ">
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
                        <div className="card card_details_select  p-3">
                            <h6> Request Generated successfully </h6>
                            <div className="row my-3 text-center align-items-center">
                            <p>Your SRN Number : {userDetails[0]?.userDebitCardDetails?.reissueCard?.srn}</p>

                            </div>
                        </div>
                        <div className="d-flex my-3">
                            <button type="button" className="reissue_card_button ml-2" onClick={handleBackChange}>BACK</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReissueCardRequest;