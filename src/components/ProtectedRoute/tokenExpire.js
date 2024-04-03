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
      sessionStorage.removeItem('loginToken');
      navigate('/netbanking-personal-login');
    }
  }, [navigate]);

};

export default MyProtectedComponent;
