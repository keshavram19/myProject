import React, { useState, useEffect } from "react";
import './FundTransfer.css';
import PaymentSidebar from "../Sidebar/PaymentsAndTransferSidebar";
import { useNavigate } from "react-router-dom";
import apiList from "../../../../lib/apiList";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FaIndianRupeeSign } from "react-icons/fa6";



const LimitExceed = () => {
    const navigate = useNavigate();
    const token = sessionStorage.getItem('loginToken');
    const [userDetails, setUserDetails] = useState([]);


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

    const handleSubmit = () =>{
        navigate('/user/fundtransfer/quickfundtransfer')
    }


    return (
           <div className='card-details-container container-fluid' style={{ marginTop: "90px" }}>
            <div className='card-details-header'></div>
            <div className='row'>
                <div className="col-3">
                    <PaymentSidebar />
                </div>
                <div className='col-9 p-3 '>
                    <div className="card">
                        <div className="d-flex align-items-center p-2 " >
                        <p className="limit_exceed_exclamation ml-1"><AiOutlineExclamationCircle /></p>
                        <p className="limit_exceed_para ml-1">Payment Failed</p>
                        </div>
                        <div>
                            <ul>
                                <li>You have exceeded the maximum transaction amount set by your bank</li>
                                <li>You can only transfer upto <FaIndianRupeeSign />1,00,000 in 24 hours.</li>
                            </ul>
                            
                        </div>
                        <div className="mt-1  mb-3">
                        <button type="button" className="ml-3 mt-3  limit_exceed_turn" onClick={handleSubmit}>Try Again</button>
                        </div>
                    </div>
                    
                   
                </div>  
            </div>
        </div>
    );
};

export default LimitExceed;
