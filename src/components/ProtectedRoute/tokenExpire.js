// import { useEffect } from "react";
// import { useNavigate, Outlet } from "react-router-dom";
// const ProtectedRoute = () => {
//   let token = sessionStorage.getItem('loginToken')
//   let tokenTime = sessionStorage.getItem('expireTime')
//   let navigate = useNavigate()
//   const checkTokenExpiration = () => {
//     if (token && tokenTime) {
      
//       const expireTime = new Date(tokenTime);
//       const currentTime = new Date();
         
//       if (currentTime > expireTime) {
        
//         sessionStorage.removeItem('loginToken');
//         sessionStorage.removeItem('expireTime');
//         navigate('/netbanking-personal-login');
//       }
//     } else {
//       navigate('/netbanking-personal-login');
//     }
//   };
//   useEffect(() => {
//     checkTokenExpiration();
//   }, []);
//   return <Outlet />; 
// };
// export default ProtectedRoute;

import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MyProtectedComponent = () => {
  const navigate = useNavigate();

  const isTokenExpired = () => {
    const expirationTime = sessionStorage.getItem("expireTime");
    return expirationTime && new Date().getTime() > parseInt(expirationTime, 10);
  };

  useEffect(() => {
    if (isTokenExpired()) {
      sessionStorage.clear();
      sessionStorage.removeItem('loginToken')
      navigate('/netbanking-personal-login');
    }
  }, [navigate]);

};

export default MyProtectedComponent;
