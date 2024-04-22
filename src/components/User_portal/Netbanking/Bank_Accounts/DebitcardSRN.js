import React, { useState, useEffect }  from 'react';
import './Accounts.css';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';
import { useNavigate } from 'react-router-dom';
import apiList from '../../../../lib/apiList';


const DebitcardSRN = () => {

    const navigate = useNavigate();
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
                    setUserDetails(data.user);
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
                    <div className="container-fluid reissue_card mt-2 ">
                        <h4 className="reissue_card_heading">Apply For ATM/debit Card</h4>
                        <div className="card card_details_select mt-2  p-3">
                            <h6> Request Generated successfully </h6>
                            <div className="row my-3 text-center align-items-center">
                            <p>Your SRN Number : {userDetails?.userDebitCardDetails?.debiCardSrn}</p>

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

export default DebitcardSRN;

