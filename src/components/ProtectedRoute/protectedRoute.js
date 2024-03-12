import React from "react";
import { Route, Navigate, useLocation } from "react-router-dom";

// Check if the user is authenticated
const isAuthenticated = () => {
  const token = sessionStorage.getItem("adminloginToken");
  const expireTime = sessionStorage.getItem("adminexpireTime");
  return token && new Date().getTime() < expireTime;
};

// ProtectedRoute component
function ProtectedRoute({ children, ...rest }) {
  const authenticated = isAuthenticated();
  const location = useLocation();

  // Remove token from sessionStorage if not authenticated
  if (!authenticated) {
    sessionStorage.removeItem("adminloginToken");
    sessionStorage.removeItem("adminexpireTime");
  }

  return (
    <Route {...rest}>
      {authenticated ? children : <Navigate to="/admin-login" state={{ from: location }} />}
    </Route>
  );
}

export default ProtectedRoute;
