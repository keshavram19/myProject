import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './reissuecardGenerateorReject.css';
import AdminSidebar from '../admin_sidebar/AdminSidebar';

function ReissueGenerateOrReject() {
    const [userDetails, setUserDetails] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [rejectedUsers, setRejectedUsers] = useState([]);
    const [generatedUsers, setGeneratedUsers] = useState([]);
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        fetchUserDetails();
        setCurrentDate(getFormattedDate(new Date()));
    }, []);

    useEffect(() => {
        const storedGeneratedUsers = localStorage.getItem('generatedUsers');
        if (storedGeneratedUsers) {
            setGeneratedUsers(JSON.parse(storedGeneratedUsers));
        }
    }, []);

    async function fetchUserDetails() {
        try {
            const response = await axios.get('/trackAndReissueCard');
            setUserDetails(response.data);
        } catch (error) {
            setErrorMessage('Error fetching user details.');
        }
    }

    const handleReject = async () => {
        try {
            await axios.post(`/reissue/${userDetails[0]._id}`, { reject: true });
            setRejectedUsers([...rejectedUsers, userDetails[0]]);
        } catch (error) {
            console.error("Rejection Error:", error);
        }
    };

    const handleGenerate = async () => {
        try {
            userDetails[0].userDebitCardDetails.userDebitCardStatus = 'active';
            const response = await axios.post(`/reissue/${userDetails[0]._id}`, { generate: true });
            const { newDebitCardNumber, newCVV, newExpiryDate } = response.data;

            const updatedUser = {
                ...userDetails[0],
                userDebitCardDetails: {
                    ...userDetails[0].userDebitCardDetails,
                    newDebitCardNumber,
                    newCVV,
                    newExpiryDate,
                    cardGenerated: true
                },
                issuedDate: getFormattedDate(new Date()) // Add issued date
            };

            setGeneratedUsers([...generatedUsers, updatedUser]);
            localStorage.setItem('generatedUsers', JSON.stringify([...generatedUsers, updatedUser]));
            localStorage.setItem('currentDate', getFormattedDate(new Date()));
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
        <div className='container-fluid'>
            <div className="row">
                <div className="col-sm-3">
                    <AdminSidebar />
                </div>

                <div className="col-sm-9 mt-4">
                    {errorMessage && <p>{errorMessage}</p>}
                    {userDetails && userDetails.length > 0 && (
                        <div className="user-details-container container">
                            <div className='customer-details col-sm-12'>
                                <p>Customer Details:</p>
                            </div>
                            <div >
                                <div className="account_details col-sm-12">
                                    <div className='account_values'>
                                        <label>Account Number:</label>
                                        <input className='account_input' value={userDetails[0].userAccountNumber} readOnly />
                                    </div>
                                    <div className='account_values'>
                                        <label>Account Name: </label>
                                        <input className='account_input' value={userDetails[0].accountHolderName} readOnly />
                                    </div>
                                    <div className='account_values'>
                                        <label>Account Type: </label>
                                        <input className='account_input' value={userDetails[0].userAccountType} readOnly />
                                    </div>
                                    <div className='account_values'>
                                        <label>Bank Branch: </label>
                                        <input className='account_input' value={userDetails[0].bankBranchName} readOnly />
                                    </div>
                                    <div className='account_values'>
                                        <label>State:</label>
                                        <input className='account_input' value={userDetails[0].accountHolderAddress.state} readOnly />
                                    </div>
                                    <div className='account_values'>
                                        <label>City: </label>
                                        <input className='account_input' value={userDetails[0].accountHolderAddress.city} readOnly />
                                    </div>
                                    <div className='account_values'>
                                        <label>Village:</label>
                                        <input className='account_input' value={userDetails[0].accountHolderAddress.village} readOnly />
                                    </div>
                                    <div className='account_values'>
                                        <label>Pincode </label>
                                        <input className='account_input' value={userDetails[0].accountHolderAddress.pincode} readOnly />
                                    </div>
                                </div>
                            </div>
                            <div className='debit-details col-sm-12'>
                                <p>Debit Card Details:</p>
                            </div>
                            <div className="debit_details col-sm-12">
                                <div className='debit_values'>
                                    <label>Debit Card Number: </label>
                                    <input className='debitdetails_input' value={userDetails[0].userDebitCardDetails.userDebitCardNumber} readOnly />
                                </div>
                                <div className='debit_values'>
                                    <label>Status: </label>
                                    <input className={`debitdetails_input ${userDetails[0].userDebitCardDetails.userDebitCardStatus === 'active' ? 'green-status' : 'gray-status'}`} value={userDetails[0].userDebitCardDetails.userDebitCardStatus} readOnly />
                                </div>
                                <div className='debit_values'>
                                    <label>ExpiryDate: </label>
                                    <input className='debitdetails_input' value={userDetails[0].userDebitCardDetails.userDebitCardExpiryDate} readOnly />
                                </div>
                                <div className='debit_values'>
                                    <label>CVV </label>
                                    <input className='debitdetails_input' value={userDetails[0].userDebitCardDetails.userDebitCardcvv} readOnly />
                                </div>

                            </div>
                            <div className="buttons-container mt-3">
                                <button className="reject-button" onClick={handleReject}>Reject</button>
                                <button className="generate-button" onClick={handleGenerate}>Generate</button>
                            </div>

                        </div>
                    )}

                    <div className="table-container container mt-5 mb-5">
                        <h4 className='ml-3 text-success'>Newly Issued Cards List</h4>
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
                                    <th>delet</th>
                                </tr>
                            </thead>
                            <tbody>
                                {generatedUsers.map((user, index) => (
                                    <tr key={user._id}>
                                        <td>{index + 1}</td>
                                        <td>{user.issuedDate}</td>
                                        <td>{`${user.userAccountNumber} - ${user.accountHolderName}`}</td>
                                        <td>{user.userDebitCardDetails.newDebitCardNumber}</td>
                                        <td>{user.userDebitCardDetails.newCVV}</td>
                                        <td>{user.userDebitCardDetails.newExpiryDate}</td>
                                        <td>
                                            <button
                                                className={`status-button ${user.userDebitCardDetails.userDebitCardStatus === 'active' ? 'active' : 'inactive'}`}
                                                style={{
                                                    backgroundColor: user.userDebitCardDetails.userDebitCardStatus === 'active' ? '#09eb2f' : 'red',
                                                    color: 'white',
                                                    padding: '2px 4px'
                                                }}
                                            >
                                                {user.userDebitCardDetails.userDebitCardStatus}
                                            </button>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(index)}>delete</button>
                                        </td>
                                    </tr>
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

    );
}

export default ReissueGenerateOrReject;













































