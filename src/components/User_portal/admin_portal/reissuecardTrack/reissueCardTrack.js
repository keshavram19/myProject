import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './reissueCardTrack.css';

const ReissueCardTable = () => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/trackAndReissueCard');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  const onViewClick = (user) => {
    console.log('Viewing user:', user);
    navigate('/admin-reissuecardGenerateorReject');
  };

  return (
    <div style={{marginTop:'90px'}}  className="table-container container">
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
              <td>{user.userAccountType}</td>
              <td>{user.accountHolderName}</td>
              <td>{user.userDebitCardDetails.userReason}</td>
              <td>{user.userEmailId}</td>
              <td>{user.userMobileNumber}</td>
              <td>{user.userDebitCardDetails.status}</td>
              <td>
                {user.userDebitCardDetails.reissueCard.srn && (
                  <button onClick={() => onViewClick(user)}>View</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReissueCardTable;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './reissueCardTrack.css';

// const ReissueCardTable = () => {
//   const [userData, setUserData] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('/trackAndReissueCard');
//         if (response && response.data && response.data.length > 0) {
//           setUserData(response.data); // Assuming status is already included in the response
//         }
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };
  
//     fetchData();
//   }, []);
  

//   const onViewClick = (user) => {
//     console.log('Viewing user:', user);
//     navigate('/reissuecardGenerateorReject');
//   };

//   return (
//     <div style={{marginTop:'90px'}}  className="table-container container">
//       <h4 className='ml-3 text-success'>Reissue Card Generated Requests</h4>
//       <table>
//         <thead>
//           <tr>
//             <th>SR No.</th>
//             <th>Account Type</th>
//             <th>Requested User</th>
//             <th>User Reason</th>
//             <th>E-mail</th>
//             <th>Phone Number</th>
//             <th>Status</th>
//             <th>View</th>
//           </tr>
//         </thead>
//         <tbody>
//           {userData.map((user, index) => (
//             <tr key={index}>
//               <td>{index + 1}</td>
//               <td>{user.userAccountType}</td>
//               <td>{user.accountHolderName}</td>
//               <td>{user.userDebitCardDetails.userReason}</td>
//               <td>{user.userEmailId}</td>
//               <td>{user.userMobileNumber}</td>
//               <td>{user.status === "success" ? "Generated" : user.status === "rejected" ? "Rejected" : "Pending"}</td>
//               <td>
//                 {user.userDebitCardDetails.reissueCard.srn && (
//                   <button onClick={() => onViewClick(user)}>View</button>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ReissueCardTable;


