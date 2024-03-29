import React, { useState } from "react";
import axios from "axios";
import BankaccountSidebar from "../Sidebar/BankaccountSidebar";
import { ToastContainer, toast } from "react-toastify";
//import apiList from "../../../../lib/apiList"
import { Link, useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
axios.defaults.baseURL = "http://localhost:4444/api/";
function Creditcardapplication() {
    const navigate =useNavigate()
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

//   console.log("Form Data:", formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post("/fixeddeposites", formData);
      console.log(data,"data");
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
      navigate("/user/Creditcardapplicationform")

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
               {/* <BankaccountSidebar />  */}
            </div>
            <div className="col-9">
              <div
                className="fixed_form_container "
                style={{ backgroundColor: "rgb(250, 245, 245)" }}
                
              >
                <div className="fixed_form_heading_Container">
                  <h3 className="fixed_form_heading p-2">
                    Credit card Application
                  </h3>
                   {/* <div className="row mb-2"> */}
                   <form className="fixed_form_section" onSubmit={handleSubmit}>
                  {/* <div className="row">
                    
                  
                    </div> */}
                    <div className="row">
                    <div className="col-md-6">
                    <label htmlFor="declarentsName" className="form-inline">
                    <span >Declarent's Name</span></label>
                    <input
                      type="text"
                      onChange={handleInputChange}
                      id="declerentname"
                      name="declerentname"
                      value={formData.declerentname}
                      placeholder="enter name"
                      className="form-control form-control-sm  w-75"
                    />
                    </div>
                  <div className="col-md-6">
                  <label htmlFor="fathersName" className="form-inline">
                    <span>fathers Name</span> </label>
                    <input
                      type="text"
                      onChange={handleInputChange}
                      id="fathername"
                      name="fathername"
                      value={formData.fathername}
                      placeholder="enter father name"
                      className="form-control form-control-sm w-75"
                    />
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-6">
                  <label htmlFor="addressLine1" className="form-inline">
                    <span >Address Line1</span>  </label>
                    <input
                      type="text"
                      onChange={handleInputChange}
                      id="addressline1"
                      name="addressline1"
                      value={formData.addressline1}
                      placeholder="enter address line1"
                      className="form-control form-control-sm  w-75"
                    />
                    </div>
                <div className="col-md-6">
                  <label htmlFor="addressLine2" className="form-inline">
                    <span>Address Line2</span> </label>
                    <input
                      type="text"
                      onChange={handleInputChange}
                      id="addressline2"
                      name="addressline2"
                      value={formData.addressline2}
                      placeholder="enter address line2"
                      className="form-control form-control-sm  w-75"
                    />
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-6">
                  <label htmlFor="town/City" className="form-inline">
                    <span >Town/City</span></label>
                    <input
                      type="text"
                      onChange={handleInputChange}
                      id="city"
                      name="city"
                      value={formData.city}
                      placeholder="enter city"
                      className="form-control form-control-sm  w-75"
                    />
                    </div>
                    <div className="col-md-6">
                  <label htmlFor="State" className="form-inline">
                    <span >State</span> </label>
                    <input
                      type="text"
                      onChange={handleInputChange}
                      id="state"
                      name="state"
                      value={formData.state}
                      placeholder="enter state"
                      className="form-control form-control-sm  w-75"
                    />
                  </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                  <label htmlFor="pincode" className="form-inline">
                    <span >Pin Code</span> </label>
                    <input
                      type="text"
                      onChange={handleInputChange}
                      id="pincode"
                      name="pincode"
                      value={formData.pincode}
                      placeholder="enter pin code"
                      className="form-control form-control-sm  w-75"
                    />
                    </div>
                    <div className="col-md-6">
                  <label htmlFor="amountOfTransaction" className="form-inline">
                    <span >PAN Number</span> </label>
                    <input
                      type="text"
                      onChange={handleInputChange}
                      id="amount"
                      name="amount"
                      value={formData.amount}
                      placeholder="enter pannumber"
                      className="form-control form-control-sm  w-75"
                    />
                    </div>
                    </div>
                    {/* <div className="row">
                    <div className="col-md-6">
                  <label htmlFor="dateOfTransaction" className="form-inline">
                    <span >Deposits Date</span></label>
                    <input
                      type="date"
                      onChange={handleInputChange}
                      id="depositedate"
                      name="depositedate"
                      value={formData.depositedate}
                     
                      className="form-control form-control-sm  w-75"
                    />
                    </div> */}
                    {/* <div className="col-md-6">
                  <label
                    htmlFor="fixeddeposite ammount"
                    className="form-inline"
                  >
                    <span >Fixed Deposits Amount </span> </label>
                    <input
                      type="text"
                      onChange={handleInputChange}
                      id="fixeddeposite"
                      name="fixeddeposite"
                      value={formData.fixeddeposite}
                      placeholder="enter amount"
                      className="form-control form-control-sm  w-75"
                    />
                    </div>
                    </div> */}
                 
                    <div className="row">
                    <div className="col-md-6">
                  <label htmlFor="nominee" className="form-inline">
                    <span>Nominee </span> </label>
                    <input
                      type="text"
                      onChange={handleInputChange}
                      id="nominee"
                      name="nominee"
                      value={formData.nominee}
                      placeholder="enter nominee"
                      className="form-control form-control-sm  w-75"
                    />
                    </div>
                 

                    <div className="col-md-6">
                  <label htmlFor="telephoneNumber" className="form-inline">
                    <span>Telephone Number </span></label>
                    <input
                      type="text"
                      onChange={handleInputChange}
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      placeholder="enter telephone number"
                      className="form-control form-control-sm  w-75"
                    />
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-6">
                  <label htmlFor="mobileNumber" className="form-inline">
                    <span >Mobile Number </span></label>
                    <input
                      type="text"
                      onChange={handleInputChange}
                      id="mobilenumber"
                      name="mobilenumber"
                      value={formData.mobilenumber}
                      placeholder="enter mobile number"
                      className="form-control form-control-sm  w-75"
                    />
                    </div>
                    <div className="col-md-6">
                  <label htmlFor="emailId" className="form-inline">
                    <span >E-mail ID </span> </label>
                    <input
                      type="text"
                      onChange={handleInputChange}
                      id="email"
                      name="email"
                      value={formData.email}
                      placeholder="enter email id"
                      className="form-control form-control-sm w-75"
                    />
                    </div>
                    </div>
            
                   <button
                    type="submit"
                    className="fixed_form_submit_btn p-2"
                    //   onSubmit={handleSubmit}
                  > 
                   
                   {/* <Link to={"/user/Creditcardapplicationform"}> <button type="submit">Submit</button></Link> */}
                    SUBMIT
                   </button>
                    
                  </form>
                   </div>


                </div>
                  




                   
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
      {/* </div> */}
    </>
  );
}

export default Creditcardapplication;

