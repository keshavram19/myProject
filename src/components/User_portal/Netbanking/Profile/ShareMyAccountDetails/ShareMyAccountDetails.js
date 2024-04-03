import React, { useState, useEffect } from 'react';
import "./ShareMyAccountDetails.css";
import apiList from '../../../../../lib/apiList';

function ShareMyAccountDetails() {
    const [userDetails, setUserDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
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
                    setUserDetails(data.user);
                    setLoading(false);
                } else {
                    console.error('Error fetching user details:', response.statusText);
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error fetching user details:', error);
                setLoading(false);
            }
        };
        fetchUserDetails();
    }, []);

    const handleShare = () => {
        if (navigator.share && userDetails) {
            const shareMessage = `User Name: ${userDetails.firstname} ${userDetails.lastname}\nEmail: ${userDetails.email}\nMobile Number: ${userDetails.mobilenumber}\nDate of Birth: ${userDetails.dateofbirth}\nAccount Number: ${userDetails.accountNumber}\nIFSC Code: ${userDetails.ifscCode}\nAddress: ${userDetails.currentAddress ? `${userDetails.currentAddress.city}, ${userDetails.currentAddress.state}, ${userDetails.currentAddress.country}` : 'Not available'}`;
            navigator.share({
                title: 'User Details',
                text: shareMessage,
                // url: window.location.href
            })
            .then(() => console.log('User details shared successfully'))
            .catch((error) => console.error('Error sharing user details:', error));
        } else {
            console.log('Web Share API not supported');
        }
    };

    return (
        <div className='share_account_details card' style={{ marginTop: "90px" }}>
            {loading ? (
                <p>Loading...</p>
            ) : userDetails ? (
                <div>
                    <h1 className='share_account_details_heading'>My Account Details</h1>
                    <div className='share_account_details_inform'>
                    <p>User Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {userDetails.firstname} {userDetails.lastname}</p>
                    <p>Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {userDetails.email}</p>
                    <p>Mobile Number: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{userDetails.mobilenumber}</p>
                    <p>Date of Birth: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{userDetails.dateofbirth}</p>
                    <p>Account Number:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {userDetails.accountNumber}</p>
                    <p>IFSC Code:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {userDetails.ifscCode}</p>
                    <p>Address:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {userDetails.currentAddress ? `${userDetails.currentAddress.city}, ${userDetails.currentAddress.state}, ${userDetails.currentAddress.country}` : 'Not available'}</p>
                    <p>Bank Branch Name: &nbsp;&nbsp;&nbsp;Madhapur{userDetails.bankBranchName}</p>
                    <button onClick={handleShare} className='share_account_details_button'>Share</button>
                </div>
                </div>
            ) : (
                <p>No user details found.</p>
            )}
        </div>
    );
}

export default ShareMyAccountDetails;
