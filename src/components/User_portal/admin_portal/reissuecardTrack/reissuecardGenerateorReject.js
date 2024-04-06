import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './reissuecardGenerateorReject.css';
import AdminSidebar from '../admin_sidebar/AdminSidebar';
import { useNavigate, useLocation } from 'react-router-dom';
import { isAuthenticated, handleTokenExpiration } from "../../../ProtectedRoute/authUtils";
import apiList from '../../../../lib/apiList';

function ReissueGenerateOrReject() {
    const [userDetails, setUserDetails] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [generatedUsers, setGeneratedUsers] = useState([]);
    const [currentDate, setCurrentDate] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const userId = queryParams.get('userId');
    const token = sessionStorage.getItem('adminloginToken');

    useEffect(() => {
        if (!location.pathname.includes("/admin/")) {
            navigate("/admin/login");
        }
    }, [location.pathname, navigate]);

    useEffect(() => {
        handleTokenExpiration(navigate);
    }, [navigate]);

    useEffect(() => {
        if (userId) {
            fetchUserDetails(userId);
        }
    }, [userId]);

    useEffect(() => {
        const storedGeneratedUsers = localStorage.getItem('generatedUsers');
        if (storedGeneratedUsers) {
            setGeneratedUsers(JSON.parse(storedGeneratedUsers));
        }
    }, []);

    async function fetchUserDetails(id) {
        try {
            const response = await axios.get(`${apiList.getReissuecardDetails}${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            setUserDetails(response.data.user);
        } catch (error) {
            setErrorMessage('Error fetching user details.');
        }
    }

    const handleReject = async () => {
        try {
            if (userDetails && userDetails.userDebitCardDetails && userDetails.userDebitCardDetails.userDebitCardStatus === 'active') {

                setErrorMessage('Rejected.');
            }
        } catch (error) {
            console.error("Rejection Error:", error);
        }
    };

    const handleGenerate = async () => {
        try {
            if (userDetails && userDetails.userDebitCardDetails) {
                if (userDetails.userDebitCardDetails.userDebitCardStatus === 'active') {
                    setErrorMessage('Debit card is already active');
                    return;
                }
                const response = await axios.post(`${apiList.generateReissueCard}${userDetails._id}`, { generate: true }, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                const { status, message, userDebitCardNumber, userCVV, userExpiryDate } = response.data;
                if (status === 'success') {
                    setUserDetails(prevUserDetails => ({
                        ...prevUserDetails,
                        userDebitCardDetails: {
                            ...prevUserDetails.userDebitCardDetails,
                            userDebitCardNumber,
                            userDebitCardcvv: userCVV,
                            userDebitCardExpiryDate: userExpiryDate,
                            userDebitCardStatus: 'active'
                        }
                    }));

                    const updatedUser = {
                        ...userDetails,
                        userDebitCardDetails: {
                            ...userDetails.userDebitCardDetails,
                            userDebitCardNumber,
                            userDebitCardcvv: userCVV,
                            userDebitCardExpiryDate: userExpiryDate,
                            userDebitCardStatus: 'active'
                        },
                        issuedDate: getFormattedDate(new Date())
                    };
                    setGeneratedUsers([...generatedUsers, updatedUser]);
                    localStorage.setItem('generatedUsers', JSON.stringify([...generatedUsers, updatedUser]));
                    localStorage.setItem('currentDate', getFormattedDate(new Date()));
                } else {
                    setErrorMessage(message);
                }
            }
        } catch (error) {
            console.error("Reissue Error:", error);
        }
    };


    function getFormattedDate(date) {
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();

        if (month < 10) {
            month = '0' + month;
        }
        if (day < 10) {
            day = '0' + day;
        }

        return `${day}-${month}-${year}`;
    }

    const handleDelete = (index) => {
        const updatedUsers = [...generatedUsers];
        updatedUsers.splice(index, 1);
        setGeneratedUsers(updatedUsers);
        localStorage.setItem('generatedUsers', JSON.stringify(updatedUsers));
    };

    return (
        <>
            {isAuthenticated() ? (
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-sm-3">
                            <AdminSidebar />
                        </div>
                        <div className="col-sm-9 mt-4 generate_reject">

                            {userDetails && (
                                <div className="user-details-container container">
                                    <div className='customer-details col-sm-12'>
                                        <p>Customer Details:</p>
                                    </div>
                                    <div className="account_details col-sm-12">
                                        <div className='account_values'>
                                            <label>Customer ID:</label>
                                            <input className='account_input' value={userDetails.customerID} readOnly />
                                        </div>
                                        <div className='account_values'>
                                            <label>Account Number:</label>
                                            <input className='account_input' value={userDetails.accountNumber} readOnly />
                                        </div>
                                        <div className='account_values'>
                                            <label>Account Name:</label>
                                            <input className='account_input' value={userDetails.firstname} readOnly />
                                        </div>
                                        <div className='account_values'>
                                            <label>Account Type:</label>
                                            <input className='account_input' value={userDetails.openaccount} readOnly />
                                        </div>
                                        <div className='account_values'>
                                            <label>Bank Branch:</label>
                                            <input className='account_input' value={userDetails.bankBranch} readOnly />
                                        </div>
                                        <div className='account_values'>
                                            <label>State:</label>
                                            <input className='account_input' value={userDetails.currentAddress.state} readOnly />
                                        </div>
                                        <div className='account_values'>
                                            <label>City:</label>
                                            <input className='account_input' value={userDetails.currentAddress.city} readOnly />
                                        </div>
                                        <div className='account_values'>
                                            <label>Pincode:</label>
                                            <input className='account_input' value={userDetails.currentAddress.pincode} readOnly />
                                        </div>
                                    </div>
                                    <div className='debit-details col-sm-12'>
                                        <p>Debit Card Details:</p>
                                    </div>
                                    {userDetails && userDetails.userDebitCardDetails && (
                                        <div className="debit_details col-sm-12">
                                            <div className='debit_values'>
                                                <label>Debit Card Number:</label>
                                                <input className='debitdetails_input' value={userDetails.userDebitCardDetails.userDebitCardNumber} readOnly />
                                            </div>
                                            <div className='debit_values'>
                                                <label>Status:</label>
                                                <input className={`debitdetails_input ${userDetails.userDebitCardDetails.userDebitCardStatus === 'active' ? 'green-status' : 'gray-status'}`} value={userDetails.userDebitCardDetails.userDebitCardStatus} readOnly />
                                            </div>
                                            <div className='debit_values'>
                                                <label>ExpiryDate:</label>
                                                <input className='debitdetails_input' value={userDetails.userDebitCardDetails.userDebitCardExpiryDate} readOnly />
                                            </div>
                                            <div className='debit_values'>
                                                <label>CVV:</label>
                                                <input className='debitdetails_input' value={userDetails.userDebitCardDetails.userDebitCardcvv} readOnly />
                                            </div>
                                        </div>
                                    )}
                                    <div className="buttons-container mt-3">
                                        <div className="button-row">
                                            <button className="reject-button" onClick={handleReject}>Reject</button>
                                            <button className="generate-button" onClick={handleGenerate}>Generate</button>
                                        </div>
                                        {errorMessage && (
                                            <p className="error-message">{errorMessage}</p>
                                        )}
                                    </div>
                                </div>
                            )}
                            <div className="table-container container mt-5 mb-5">
                                <h4 className='text-success'>Newly Issued Cards List</h4>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>SR.No</th>
                                            <th>Issued Date</th>
                                            <th>Account Number & Account Holder Name</th>
                                            <th>Debit Card Number</th>
                                            <th>CVV</th>
                                            <th>Expiry Date</th>
                                            <th>Status</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {generatedUsers.map((user, index) => (
                                            user.userDebitCardDetails && user.userDebitCardDetails.userDebitCardStatus !== 'rejected' && (
                                                <tr key={user._id}>
                                                    <td>{index + 1}</td>
                                                    <td>{user.issuedDate}</td>
                                                    <td>{`${user.accountNumber} - ${user.firstname}`}</td>
                                                    <td>{user.userDebitCardDetails ? user.userDebitCardDetails.userDebitCardNumber : '-'}</td>
                                                    <td>{user.userDebitCardDetails ? user.userDebitCardDetails.userDebitCardcvv : '-'}</td>
                                                    <td>{user.userDebitCardDetails ? user.userDebitCardDetails.userDebitCardExpiryDate : '-'}</td>
                                                    <td>
                                                        <button
                                                            className={`status-button ${user.userDebitCardDetails && user.userDebitCardDetails.userDebitCardStatus === 'active' ? 'active' : 'inactive'}`}
                                                            style={{
                                                                backgroundColor: user.userDebitCardDetails && user.userDebitCardDetails.userDebitCardStatus === 'active' ? '#09eb2f' : 'red',
                                                                color: 'white',
                                                                padding: '2px 4px',
                                                                borderRadius: '6px',
                                                                borderColor: '#1bbb35'
                                                            }}
                                                        >
                                                            {user.userDebitCardDetails ? user.userDebitCardDetails.userDebitCardStatus : '-'}
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button className='delete_btn' onClick={() => handleDelete(index)}>Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        ))}

                                    </tbody>
                                </table>
                                <ul className="pagination justify-content-center" style={{ margin: '20px 0px' }}>
                                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                navigate("/admin/login")
            )}
        </>
    );
}

export default ReissueGenerateOrReject;



