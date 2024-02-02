//import React from 'react'
//import Toastify from "toastify";
import React, { useState } from "react";
import axios from "axios";
import BankaccountSidebar from "../Sidebar/BankaccountSidebar";
import { ToastContainer, toast } from "react-toastify";
//import apiList from "../../../../lib/apiList";

import "react-toastify/dist/ReactToastify.css";
axios.defaults.baseURL = "http://localhost:4444/api/";
function Renewfixedform() {
  const [formData, setFormData] = useState({
    Accountnumber: "",
    declerentname: "",
    DueDate: "",
    fathername: "",
    addressline1: "",
    addressline2: "",
    city: "",
    state: "",
    pincode: "",
    amount: "",
    nominee: "",
    telephone: "",
    mobilenumber: "",
    email: "",
    depositedate: "",
    fixeddeposite: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((preve) => {
      return {
        ...formData,
        [name]: value,
      };
    });
  };

  console.log("Form Data:", formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post("/fixeddeposites", formData);
      console.log(data);
      toast.success("Form Successfully", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        className: "Bounce",
      });

      setFormData({
        Accountnumber: "",
        declerentname: "",
        DueDate: "",
        fathername: "",
        addressline1: "",
        addressline2: "",
        city: "",
        state: "",
        pincode: "",
        amount: "",
        nominee: "",
        telephone: "",
        mobilenumber: "",
        email: "",
        depositedate: "",
        fixeddeposite: "",
      });
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  
 

  return (
    <>
      <div className="container-fluid" style={{ marginTop: "90px" }}>
        <div className="side_bar_section">
          <div className="row">
            <div className="col-3">
              <BankaccountSidebar />
            </div>
            <div className="col-9">
              <div
                className="fixed_form_container "
                style={{ backgroundColor: "rgb(219, 215, 215)" }}
              >
                <div className="fixed_form_heading_Container">
                  <h3 className="fixed_form_heading p-2">
                    Fixed Deposits Form
                  </h3>
                </div>

                <form className="fixed_form_section" onSubmit={handleSubmit}>
                  <label htmlFor="savingsAccountNumber" className="form-inline">
                    <span className="col-md-5"> Account Number*</span>
                    <input
                      type="text"
                      onChange={handleInputChange}
                      id="Accountnumber"
                      name="Accountnumber"
                      value={formData.Accountnumber}
                      className="form-control form-control-sm col-md-4 w-25"
                    />
                  </label>
                  <label htmlFor="declarentsName" className="form-inline">
                    <span className="col-md-5">Declarent's Name</span>
                    <input
                      type="text"
                      onChange={handleInputChange}
                      id="declerentname"
                      name="declerentname"
                      value={formData.declerentname}
                      className="form-control form-control-sm col-md-4 w-25"
                    />
                  </label>
                  <label htmlFor="declarentsDOB" className="form-inline">
                    <span className="col-md-5">Due Date</span>
                    <input
                      type="date"
                      onChange={handleInputChange}
                      id="DueDate"
                      name="DueDate"
                      value={formData.DueDate}
                      className="form-control form-control-sm col-md-4 w-25"
                    />
                  </label>
                  <label htmlFor="fathersName" className="form-inline">
                    <span className="col-md-5">fathers Name</span>
                    <input
                      type="text"
                      onChange={handleInputChange}
                      id="fathername"
                      name="fathername"
                      value={formData.fathername}
                      className="form-control form-control-sm col-md-4 w-25"
                    />
                  </label>
                  <label htmlFor="addressLine1" className="form-inline">
                    <span className="col-md-5">Address Line1</span>
                    <input
                      type="text"
                      onChange={handleInputChange}
                      id="addressline1"
                      name="addressline1"
                      value={formData.addressline1}
                      className="form-control form-control-sm col-md-4 w-25"
                    />
                  </label>
                  <label htmlFor="addressLine2" className="form-inline">
                    <span className="col-md-5">Address Line2</span>
                    <input
                      type="text"
                      onChange={handleInputChange}
                      id="addressline2"
                      name="addressline2"
                      value={formData.addressline2}
                      className="form-control form-control-sm col-md-4 w-25"
                    />
                  </label>
                  <label htmlFor="town/City" className="form-inline">
                    <span className="col-md-5">Town/City</span>
                    <input
                      type="text"
                      onChange={handleInputChange}
                      id="city"
                      name="city"
                      value={formData.city}
                      className="form-control form-control-sm col-md-4 w-25"
                    />
                  </label>
                  <label htmlFor="State" className="form-inline">
                    <span className="col-md-5">State</span>
                    <input
                      type="text"
                      onChange={handleInputChange}
                      id="state"
                      name="state"
                      value={formData.state}
                      className="form-control form-control-sm col-md-4 w-25"
                    />
                  </label>
                  <label htmlFor="pincode" className="form-inline">
                    <span className="col-md-5">Pin Code</span>
                    <input
                      type="text"
                      onChange={handleInputChange}
                      id="pincode"
                      name="pincode"
                      value={formData.pincode}
                      className="form-control form-control-sm col-md-4 w-25"
                    />
                  </label>
                  <label htmlFor="amountOfTransaction" className="form-inline">
                    <span className="col-md-5">Amount Of Transaction</span>
                    <input
                      type="text"
                      onChange={handleInputChange}
                      id="amount"
                      name="amount"
                      value={formData.amount}
                      className="form-control form-control-sm col-md-4 w-25"
                    />
                  </label>
                  <label htmlFor="dateOfTransaction" className="form-inline">
                    <span className="col-md-5">Deposits Date</span>
                    <input
                      type="date"
                      onChange={handleInputChange}
                      id="depositedate"
                      name="depositedate"
                      value={formData.depositedate}
                      className="form-control form-control-sm col-md-4 w-25"
                    />
                  </label>
                  <label
                    htmlFor="fixeddeposite ammount"
                    className="form-inline"
                  >
                    <span className="col-md-5">Fixed Deposits Amount </span>
                    <input
                      type="text"
                      onChange={handleInputChange}
                      id="fixeddeposite"
                      name="fixeddeposite"
                      value={formData.fixeddeposite}
                      className="form-control form-control-sm col-md-4 w-25"
                    />
                  </label>
                  
                  <label htmlFor="nominee" className="form-inline">
                    <span className="col-md-5">Nominee </span>
                    <input
                      type="text"
                      onChange={handleInputChange}
                      id="nominee"
                      name="nominee"
                      value={formData.nominee}
                      className="form-control form-control-sm col-md-4 w-25"
                    />
                  </label>

                 
                  <label htmlFor="telephoneNumber" className="form-inline">
                    <span className="col-md-5">Telephone Number </span>
                    <input
                      type="text"
                      onChange={handleInputChange}
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      className="form-control form-control-sm col-md-4 w-25"
                    />
                  </label>
                  <label htmlFor="mobileNumber" className="form-inline">
                    <span className="col-md-5">Mobile Number </span>
                    <input
                      type="text"
                      onChange={handleInputChange}
                      id="mobilenumber"
                      name="mobilenumber"
                      value={formData.mobilenumber}
                      className="form-control form-control-sm col-md-4 w-25"
                    />
                  </label>
                  <label htmlFor="emailId" className="form-inline">
                    <span className="col-md-5">E-mail ID </span>
                    <input
                      type="text"
                      onChange={handleInputChange}
                      id="email"
                      name="email"
                      value={formData.email}
                      className="form-control form-control-sm col-md-4 w-25"
                    />
                  </label>
                  <button
                    type="submit"
                    className="fixed_form_submit_btn p-2"
                    //   onSubmit={handleSubmit}
                  >
                    SUBMIT
                  </button>
                </form>
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                  // transition: Bounce,
                />

                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Renewfixedform;
