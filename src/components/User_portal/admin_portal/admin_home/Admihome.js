import React, { useState, useEffect } from "react";
import "./adminhome.css";
import apiList from "../../../../lib/apiList";
import axios from "axios";
import {useNavigate,Navigate,useLocation } from "react-router-dom";
import AdminSidebar from "../admin_sidebar/AdminSidebar";

const Adminhome = () => {
  const [filters, setFilters] = useState({
    accountNumber: "",
    mobilenumber: "",
    email: "",
  });
  const [customerDataList, setCustomerDataList] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  // Function to check if the user is authenticated
  const isAuthenticated = () => {
    const token = sessionStorage.getItem("adminloginToken");
    const expireTime = sessionStorage.getItem("adminexpireTime");
    return token && new Date().getTime() < expireTime;
  };


  const applyFilters = () => {
    let filteredData = customerDataList.filter((customer) => {
      // Check other filters
      return (
        customer.pannumber.includes(filters.accountNumber) &&
        customer.mobilenumber.includes(filters.mobilenumber) &&
        customer.email.includes(filters.email)
      );
    });
    console.log(filteredData);
    return filteredData; 
  };

  const handlenavigateRequestedDetails = () => {
    navigate("/admin/requested-data");
  };

  const getRequestedDetailslist = async () => {
    try {
      const response = await axios.get(apiList.getuserrequesteddetails);
      const filteredData = response.data.filter(
        (customer) => customer.accountNumber
      );
      setCustomerDataList(filteredData);
      console.log(filteredData);
    } catch (err) {
      console.log("Error in getting requested details list", err);
    }
  };

  useEffect(() => {
    getRequestedDetailslist();
  }, []);

  useEffect(() => {
    // Check if the user is authenticated
    if (!isAuthenticated()) {
      // If not authenticated, navigate to admin login page
      navigate("/admin/login");
    } 
  }, [isAuthenticated]);

  useEffect(() => {
    // Redirect to admin login if URL is manipulated
    if (!location.pathname.includes("/admin/")) {
      sessionStorage.removeItem("adminloginToken");
      sessionStorage.removeItem("adminexpireTime");
      navigate("/admin/login");
    }
  }, [location.pathname, navigate]);
  
  
  return (
    <div>
      {isAuthenticated() ? (
        <section className="container-fluid" style={{ marginTop: "5px" }}>
          <div className="row">
            <div className="col-3">
              <AdminSidebar />
            </div>
            <div className="col-9 accounts_admin_home">
              <div className="">
                <div className="row">
                  <div className="col-md-6">
                    <h1 className="">Welcome Admin!</h1>
                  </div>
                  <div className="col-md-6 d-flex align-items-center justify-content-around">
                    <button className="admin_home_Add_customer">
                      Add Customer
                    </button>
                    <button
                      className="admin_home_Add_customer"
                      onClick={handlenavigateRequestedDetails}
                    >
                      View Account Requested Details
                    </button>
                  
                  </div>
                </div>
              </div>
              <div className="services">
                <p className=" admin_home_heading">All Customers</p>
                <div className="d-flex my-4">
                  <input
                    placeholder="Enter Account no "
                    className="form-control mr-2 w-50"
                    value={filters.accountNo}
                    onChange={(e) =>
                      setFilters({ ...filters, accountNumber: e.target.value })
                    }
                  />
                  <input
                    placeholder="Enter Mobile no"
                    className="form-control ml-2 w-50"
                    value={filters.phoneNumber}
                    onChange={(e) =>
                      setFilters({ ...filters, mobilenumber: e.target.value })
                    }
                  />
                  <input
                    placeholder="Enter E-mail"
                    className="form-control ml-2 mr-4 w-50"
                    value={filters.email}
                    onChange={(e) =>
                      setFilters({ ...filters, email: e.target.value })
                    }
                  />
                  <button
                    className="admin_home_Add_customer"
                    onClick={applyFilters}
                  >
                    Search
                  </button>
                </div>
                <div>
                  <table className="admin_home_table_head">
                    <tbody>
                      <tr className="admin_home_table_headings">
                        <th>SR No.</th>
                        <th>Account No.</th>
                        <th>Account Holder Name</th>
                        <th>Account Type</th>
                        <th>E-mail</th>
                        <th>Phone number</th>
                        <th>View</th>
                      </tr>
                      {applyFilters().map((customer, index) => (
                        <tr key={index} className="admin_home_table_content">
                          <td>{index + 1}</td>
                          <td>{customer.accountNumber}</td>
                          <td>{`${customer.firstname} ${customer.lastname}`}</td>
                          <td>{customer.openaccount}</td>
                          <td>{customer.email}</td>
                          <td>{customer.mobilenumber}</td>
                          <td>View</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Navigate to="/admin/login" state={{ from: location }} />
      )}
    </div>
  );
};


export default Adminhome;