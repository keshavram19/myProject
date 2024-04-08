import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Navigate, useLocation } from 'react-router-dom';
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
        const response = await axios.get(`${apiList.getReissuecardDetails}`, {
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
    navigate(`/admin/reissuecardGenerateorReject?userId=${user._id}`);
  };

 

  return (

    <>
      {isAuthenticated() ? (
        <div className='row container-fluid'>
          <div className='col-sm-3'>
            <AdminSidebar />
          </div>
          <div className="col-sm-9 mt-4 debit_requested_list">
            <div className="table-container">
              <h4 className='ml-3 text-success'>New Debit and Reissue Card Generated Requests</h4>
              <table>
                <thead>
                  <tr>
                    <th>SR No.</th>
                    <th>Requested User</th>
                    <th>Email</th>
                    <th>User Reason</th>
                    <th>Status</th>
                    <th>View</th>
                  </tr>
                </thead>
                <tbody>
                  {userData
                    .filter(user => user.userDebitCardDetails && user.userDebitCardDetails.userReason)
                    .map((user, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{user.firstname} {user.lastname}</td>
                        <td>{user.email}</td>
                        <td>{user.userDebitCardDetails ? user.userDebitCardDetails.userReason : ''}</td>
                        <td>{user.userDebitCardDetails ? user.userDebitCardDetails.debitcardGenerateStatus : ''}</td>
                        <td>
                          {user.userDebitCardDetails &&
                            (user.userDebitCardDetails.debiCardSrn ||
                              (user.userDebitCardDetails.reissueCard && user.userDebitCardDetails.reissueCard.srn)) && (
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


















































