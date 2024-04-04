import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate,Navigate,useLocation } from 'react-router-dom';
import './reissueCardTrack.css';
import AdminSidebar from '../admin_sidebar/AdminSidebar';
import { isAuthenticated, handleTokenExpiration } from "../../../ProtectedRoute/authUtils";
import apiList from '../../../../lib/apiList';

const ReissueCardTable = () => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const token = sessionStorage.getItem('adminloginToken');


  useEffect(() => {
    // Redirect to admin login if URL is manipulated
    if (!location.pathname.includes("/admin/")) {
      sessionStorage.removeItem("adminloginToken");
      sessionStorage.removeItem("adminexpireTime");
      navigate("/admin/login");
    }
  }, [location.pathname, navigate]);

  useEffect(() => {
    handleTokenExpiration(navigate);
  }, [navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiList.getReissuecardDetails}`,{
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  const onViewClick = (user) => {
    console.log('Viewing user:', user);
    navigate('/admin/reissuecardGenerateorReject');
  };

  const getStatus = (user) => {
    if (localStorage.getItem('generatedUsers')) {
      const generatedUsers = JSON.parse(localStorage.getItem('generatedUsers'));
      const generatedUser = generatedUsers.find((u) => u._id === user._id);
      if (generatedUser && generatedUser.userDebitCardDetails.cardGenerated) {
        return 'generated';
      }
    }
    return 'inprogress';
  };

  return (
    <> 
    {isAuthenticated() ? (
    <div className='row container-fluid'>
      <div className='col-sm-3'>
        <AdminSidebar />
      </div>
      <div className="col-sm-9 mt-4">
        <div className="table-container">
          <h4 className='ml-3 text-success'>Reissue Card Generated Requests</h4>
          <table>
            <thead>
              <tr>
                <th>SR No.</th>
                <th>Account Type</th>
                <th>Requested User</th>
                <th>User Reason</th>
                <th>E-mail</th>
                <th>Phone Number</th>
                <th>Status</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.openaccount}</td>
                  <td>{user.firstname}{user.lastname}</td>
                  <td>{user.userDebitCardDetails.userReason}</td>
                  <td>{user.email}</td>
                  <td>{user.mobilenumber}</td>
                  <td>{getStatus(user)}</td>
                  <td>
                    {user.userDebitCardDetails.reissueCard.srn && (
                      <button onClick={() => onViewClick(user)}>View</button>
                    )}
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
    ) : (
      <Navigate to="/admin/login" state={{ from: location }} />
    )}
    </>
  );
};

export default ReissueCardTable;






































