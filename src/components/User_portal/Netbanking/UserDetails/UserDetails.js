import React, { useState, useEffect } from 'react';
import './UserDetails.css';
import apiList from '../../../../lib/apiList';

function Userdetails() {
    const [userDetails, setUserDetails] = useState([]);
    const [lastVisited, setLastVisited] = useState(null);

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
                    setUserDetails([data.user]); 
                    setLastVisited(new Date()); 
                } else {
                    console.error('Error fetching user details:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };
        
        fetchUserDetails();
    }, []);


    const formatDate = (date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    };

    
    return (
        <div>
            <div className="container userContainer">
                {userDetails.map(user => (
                    <div key={user._id}>
                        <div className="">
                            <div className="">
                                <div className="name">{user.firstname} {user.lastname}</div>
                                <div className="d-flex">
                                    <div className="icon">
                                        <i className="fa-solid fa-user" style={{ fontSize: "40px" }}></i>
                                    </div>
                                    <div className="buttons d-flex column">
                                        <button className="details_btn">PERSONAL DETAILS</button>
                                        <button className="details_btn">GENERATE CARD PIN</button>
                                    </div>
                                </div>
                                <div className="date">Last visited {lastVisited &&
                                    `${formatDate(lastVisited)} ${lastVisited.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })} IST`
                                }</div>
                            </div>
                            <div className="col-8"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Userdetails;








