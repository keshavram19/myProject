import React from "react";
import "./AdminSidebar.css";
import { Link, useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  let navigate = useNavigate();


  const handleLogout = () => {

    sessionStorage.removeItem("adminloginToken");
    sessionStorage.removeItem("adminexpireTime");

    navigate("/admin-login");
  };


  return (
    <aside className="sidebar">
      <ul className="links">
        <h4>Main Menu</h4>
        <li>
          <span className="material-symbols-outlined admin_sidebar_logos">dashboard</span>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <li>
          <span className="material-symbols-outlined admin_sidebar_logos">bar_chart</span>
          <Link to='/overview'>Overview</Link>
        </li>
        <li>
          <span className="material-symbols-outlined admin_sidebar_logos">flag</span>
          <Link to='/reports'>Reports</Link>
        </li>
        <hr />
        <h4>Account</h4>
        <li>
          <span className="material-symbols-outlined admin_sidebar_logos">person_add</span>
          <Link to='/admin/requested-data'>Account Requests</Link>
        </li>
        <li>
          <span className="material-symbols-outlined admin_sidebar_logos">add_card</span>
          <Link to='/admin/reissuecard'>Card Requests</Link>
        </li>
        <li>
          <span className="material-symbols-outlined admin_sidebar_logos">checkbook</span>
          <Link to='/admin/chequebookreq'>Checkbook Requests</Link>
        </li>

        <li>
          <span className="material-symbols-outlined admin_sidebar_logos">mail</span>
          <Link to='/message'>Message</Link>
        </li>
        <li>
          <span className="material-symbols-outlined admin_sidebar_logos">settings</span>
          <Link to='/settings'>Settings</Link>
        </li>
        <li className="logout-link">
          <span className="material-symbols-outlined admin_sidebar_logos">logout</span>
          <Link><button onClick={handleLogout} className="admin_sidebar_button m-0 p-0">Logout</button></Link>
        </li>
      </ul>
    </aside>
  );
};

export default AdminSidebar;
