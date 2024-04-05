import React from "react";
import "./AdminSidebar.css";
import { Link, useNavigate } from "react-router-dom";
import banklogo from '../../../../Images/banklogo.png';

const AdminSidebar = () => {
  let navigate = useNavigate();


  const handleLogout = () => {

    sessionStorage.removeItem("adminloginToken");
    sessionStorage.removeItem("adminexpireTime");

    navigate("/admin-login");
  };


  return (
    <div>  
      <aside className="admin_sidebar">
      <div className="logo-container">
        <img className="admin_siderbar_logo" src={banklogo} alt="logo" />
      </div>
      <ul className="links">
        <h4 className="admin_sidebar_heading">Main Menu</h4>
        <li className="admin_sidebar_li">
          <span className="material-symbols-outlined admin_sidebar_logos">dashboard</span>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <li className="admin_sidebar_li">
          <span className="material-symbols-outlined admin_sidebar_logos">bar_chart</span>
          <Link to='/overview'>Overview</Link>
        </li>
        <li className="admin_sidebar_li">
          <span className="material-symbols-outlined admin_sidebar_logos">flag</span>
          <Link to='/reports'>Reports</Link>
        </li>
        <hr />
        <h4 className="admin_sidebar_heading">Account</h4>
        <li className="admin_sidebar_li">
          <span className="material-symbols-outlined admin_sidebar_logos">person_add</span>
          <Link to='/admin/requested-data'>Account Requests</Link>
        </li>
        <li className="admin_sidebar_li">
          <span className="material-symbols-outlined admin_sidebar_logos">add_card</span>
          <Link to='/admin/reissuecard'>Card Requests</Link>
        </li>
        <li className="admin_sidebar_li">
          <span className="material-symbols-outlined admin_sidebar_logos">checkbook</span>
          <Link to='/admin/chequebookreq'>Checkbook Requests</Link>
        </li>

        <li className="admin_sidebar_li">
          <span className="material-symbols-outlined admin_sidebar_logos">mail</span>
          <Link to='/message'>Message</Link>
        </li>
        <li className="admin_sidebar_li">
          <span className="material-symbols-outlined admin_sidebar_logos">settings</span>
          <Link to='/settings'>Settings</Link>
        </li>
        <li className="logout-link admin_sidebar_li">
          <span className="material-symbols-outlined admin_sidebar_logos">logout</span>
          <Link><button onClick={handleLogout} className="admin_sidebar_button m-0 p-0">Logout</button></Link>
        </li>
      </ul>
    </aside>
    </div>
  );
};

export default AdminSidebar;
