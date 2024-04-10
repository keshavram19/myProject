import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./AccountOpeningForm.css";
import { StateProvider, useStateValue } from "./AccountOpenParentComponent";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate,Navigate, useLocation } from "react-router-dom";
import axios from "axios";
import apiList from "../../../../../lib/apiList";
import AdminSidebar from "../../admin_sidebar/AdminSidebar";
import { isAuthenticated, handleTokenExpiration } from "../../../../ProtectedRoute/authUtils";

 
 
export default function IndividualDatalist() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [individualRequesteddata, setIndividualRequesteddata] = useState({});
  const { state } = useLocation();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(state);
  const [formData, setFormData] = React.useState({
    firstName: "",
    address: "",
    accountName: "",
    // Add more fields as needed
  });
 
  useEffect(() => {
    // Redirect to admin login if URL is manipulated
    if (!location.pathname.includes("/admin/")) {
      sessionStorage.removeItem("adminloginToken");
      sessionStorage.removeItem("adminexpireTime");
      navigate("/admin/login");
    }
  }, [location.pathname, navigate]);

  useEffect(() => {
    handleTokenExpiration(navigate);
  }, [navigate]);

  const nextStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const prevStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const reset = () => {
    setActiveStep(0);
    setFormData({
      firstName: "",
      address: "",
      accountName: "",
      // Reset other fields as needed
    });
  };

  // Define the steps
  const steps = [
    "Identity Details",
    "Personal Details",
    "Address",
    "Declaration",
    "Account Creation",
  ];

  // get individual details using state from uselocation()
  const getindividualRequestedDetails = async (req, res) => {
  
    try { 
      const response = await axios.get(
         `${apiList.individualrequestedetails}/${state}`)

     
      console.log(response.data);
      setIndividualRequesteddata(response.data);
       
     
    } catch (err) {
      console.error("Error in getting individual requested details from API");
    }
  };
 
  useEffect(() => {
    if (state) {
      getindividualRequestedDetails();
    }
  }, []);
 
 

  // Step 1 Content
  const Step1Content = ({ nextStep, formData, setFormData }) => {
    const { userData, setUserData } = useStateValue({});

    const handleNextStep = () => {
      // Proceed to the next step
      nextStep();
    };

    console.log(userData);
 

     
    return (
      <div className="mt-5 account_opening">
        <h5>
          Creating Account for{" "}
          <span style={{ color: "#f18121" }}>
            {individualRequesteddata.firstname}{" "}
            {individualRequesteddata.lastname}
          </span>
        </h5>

        <div className="row account_opening_Identify_yourself">
          <div className="col-md-6 col-sm-12 col-12">
            <div className="card">
              <h6>
                Mobile Number
                {/* <span style={{ color: "red", paddingLeft: "3px" }}>*</span> */}
              </h6>

              <input
                type="text"
                className="form-control account_opening_form_input"
                placeholder="Enter Your Mobile Number"
                required
                value={individualRequesteddata.mobilenumber}
 />
            </div>
          </div>
          <div className="col-md-6  col-sm-12 col-12">
            <div className="card">
              <h6>
                Email
                {/* <span style={{ color: "red", paddingLeft: "3px" }}>*</span> */}
              </h6>

              <input
                type="text"
                class="form-control account_opening_form_input"
                placeholder="Enter Your Email"
                value={individualRequesteddata.email}
              /> 
            </div>
          </div>
        </div>

        {/* Add more form fields as needed */}
        <div className="text-right">
          <Button
            onClick={handleNextStep}
            className="account_opening_Identify_yourself_nextbtn"
          >
            Next
          </Button>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          transition={Bounce}
          theme="dark"
          className="custom-toast-container"
        />
      </div>
    );
  };

  // Step 2 Content

  const Step2Content = ({ prevStep, nextStep, formData, setFormData }) => {
    const { personalDetails, setpersonalDetails } = useStateValue();

    const handleinPersonalDetails = (e) => {
      setpersonalDetails(e.target.value === "yes");
    };

    const { userData, setUserData } = useStateValue({});

    console.log(personalDetails);

    const handleNextStep2 = () => {
      nextStep();
    };

    console.log(userData);

    return (
      <div className="mt-5 mb-5 account_opening_personal_details_1">
        <h5>
          Creating Account for{" "}
          <span style={{ color: "#f18121" }}>
            {individualRequesteddata.firstname}{" "}
            {individualRequesteddata.lastname}
          </span>
        </h5>
        <div className="card p-4 account_opening_personal_details_1_card">
          <div className="row">
            <div className="col-2">
              <label className="mb-0">Please open my/our</label>
            </div>
            <div className="col-1">:</div>
            <div className="col-9">
              <div className="row">
                <div className="col-3">
                  <label
                    htmlFor="saving"
                    className="account_Opening_profile_checkbox_label"
                  >
                    <input
                      type="radio"
                      id="saving"
                      className="account_Opening_profile_checkbox_input"
                      name="openaccount"
                      value="savings"
                      checked={
                        individualRequesteddata.openaccount === "savings"
                      }
                    />
                    <span className="pl-2">Savings</span>
                  </label>
                </div>
                <div className="col-3">
                  <label
                    htmlFor="saving-max"
                    className="account_Opening_profile_checkbox_label"
                  >
                    <input
                      type="radio"
                      id="saving-max"
                      className="account_Opening_profile_checkbox_input"
                      name="openaccount"
                      value="savings Max"
                      checked={
                        individualRequesteddata.openaccount === "savings Max"
                      }
                    />
                    <span className="pl-2">Savings Max</span>
                  </label>
                </div>
                <div className="col-3">
                  <label
                    htmlFor="saving-salary"
                    className="account_Opening_profile_checkbox_label"
                  >
                    <input
                      type="radio"
                      id="saving-salary"
                      className="account_Opening_profile_checkbox_input"
                      name="openaccount"
                      value="savings Salary"
                      checked={
                        individualRequesteddata.openaccount === "savings Salary"
                      }
                    />
                    <span className="pl-2">Savings Salary</span>
                  </label>
                </div>
                <div className="col-3">
                  <label
                    htmlFor="reimbursement"
                    className="account_Opening_profile_checkbox_label"
                  >
                    <input
                      type="radio"
                      id="reimbursement"
                      className="account_Opening_profile_checkbox_input"
                      name="openaccount"
                      value="Reimbursement"
                      checked={
                        individualRequesteddata.openaccount === "Reimbursement"
                      }
                    />
                    <span className="pl-2">Reimbursement</span>
                  </label>
                </div>
              </div>

              <div className="row">
                <div className="col-3">
                  <label
                    htmlFor="current"
                    className="account_Opening_profile_checkbox_label"
                  >
                    <input
                      type="radio"
                      id="current"
                      className="account_Opening_profile_checkbox_input"
                      name="openaccount"
                      value="Current"
                      checked={
                        individualRequesteddata.openaccount === "Current"
                      }
                    />
                    <span className="pl-2">Current</span>
                  </label>
                </div>
                <div className="col-3">
                  <label
                    htmlFor="kids-advantage"
                    className="account_Opening_profile_checkbox_label"
                  >
                    <input
                      type="radio"
                      id="kids-advantage"
                      className="account_Opening_profile_checkbox_input"
                      name="openaccount"
                      value="Kids Advantage"
                      checked={
                        individualRequesteddata.openaccount === "Kids Advantage"
                      }
                    />
                    <span className="pl-2">Kids Advantage</span>
                  </label>
                </div>
                <div className="col-3">
                  <label
                    htmlFor="bsbda"
                    className="account_Opening_profile_checkbox_label"
                  >
                    <input
                      type="radio"
                      id="bsbda"
                      className="account_Opening_profile_checkbox_input"
                      name="openaccount"
                      value="BABDA"
                      checked={individualRequesteddata.openaccount === "BABDA"}
                    />
                    <span className="pl-2">BABDA</span>
                  </label>
                </div>
                <div className="col-3">
                  <label
                    htmlFor="kgc-sb-ca"
                    className="account_Opening_profile_checkbox_label"
                  >
                    <input
                      type="radio"
                      id="kgc-sb-ca"
                      className="account_Opening_profile_checkbox_input"
                      name="openaccount"
                      value="KGC SB&CA"
                      checked={
                        individualRequesteddata.openaccount === "KGC SB&CA"
                      }
                    />
                    <span className="pl-2">KGC SB&CA</span>
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <label
                    htmlFor="fd"
                    className="account_Opening_profile_checkbox_label"
                  >
                    <input
                      type="radio"
                      id="fd"
                      className="account_Opening_profile_checkbox_input"
                      name="openaccount"
                      value="FD"
                      checked={individualRequesteddata.openaccount === "FD"}
                    />
                    <span className="pl-2">FD</span>
                  </label>
                </div>
                <div className="col-3">
                  <label
                    htmlFor="rd"
                    className="account_Opening_profile_checkbox_label"
                  >
                    <input
                      type="radio"
                      id="rd"
                      className="account_Opening_profile_checkbox_input"
                      name="openaccount"
                      value="RD"
                      checked={individualRequesteddata.openaccount === "RD"}
                    />
                    <span className="pl-2">RD</span>
                  </label>
                </div>
                <div className="col-3">
                  <label
                    htmlFor="ppf"
                    className="account_Opening_profile_checkbox_label"
                  >
                    <input
                      type="radio"
                      id="ppf"
                      className="account_Opening_profile_checkbox_input"
                      name="openaccount"
                      value="PPF A/C"
                      checked={
                        individualRequesteddata.openaccount === "PPF A/C"
                      }
                    />
                    <span className="pl-2">PPF A/C</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-2">
              <label className="mb-0">Operating Instruction</label>
            </div>
            <div className="col-1">:</div>
            <div className="col-9">
              <div className="row">
                <div className="col-2">
                  <label
                    htmlFor="single"
                    className="account_Opening_profile_checkbox_label"
                  >
                    <input
                      type="radio"
                      id="single"
                      className="account_Opening_profile_checkbox_input"
                      name="operatingtype"
                      value="Single"
                      checked={
                        individualRequesteddata.operatingtype === "Single"
                      }
                    />
                    <span className="pl-2">Single</span>
                  </label>
                </div>
                <div className="col-2">
                  <label
                    htmlFor="survivor"
                    className="account_Opening_profile_checkbox_label"
                  >
                    <input
                      type="radio"
                      id="survivor"
                      className="account_Opening_profile_checkbox_input"
                      name="operatingtype"
                      value="Survivor"
                      checked={
                        individualRequesteddata.operatingtype === "Survivor"
                      }
                    />
                    <span className="pl-2">Survivor</span>
                  </label>
                </div>
                <div className="col-2">
                  <label
                    htmlFor="Former"
                    className="account_Opening_profile_checkbox_label"
                  >
                    <input
                      type="radio"
                      id="Former"
                      className="account_Opening_profile_checkbox_input"
                      name="operatingtype"
                      value="Former"
                      checked={
                        individualRequesteddata.operatingtype === "Former"
                      }
                    />
                    <span className="pl-2">Former</span>
                  </label>
                </div>
                <div className="col-2">
                  <label
                    htmlFor="minour"
                    className="account_Opening_profile_checkbox_label"
                  >
                    <input
                      type="radio"
                      id="minour"
                      className="account_Opening_profile_checkbox_input"
                      name="operatingtype"
                      value="Minour"
                      checked={
                        individualRequesteddata.operatingtype === "Minour"
                      }
                    />
                    <span className="pl-2">Minour</span>
                  </label>
                </div>
                <div className="col-4">
                  <label
                    htmlFor="Jointly"
                    className="account_Opening_profile_checkbox_label"
                  >
                    <input
                      type="radio"
                      id="Jointly"
                      className="account_Opening_profile_checkbox_input"
                      name="operatingtype"
                      value="Jointly"
                      checked={
                        individualRequesteddata.operatingtype === "Jointly"
                      }
                    />
                    <span className="pl-2">
                      Jointly(Debit/ATM Card not issued)
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h5 className="mt-5">Personal Details - Applicant 1 :-</h5>
            <div className="row mt-3">
              <div className="col-4">
                <label className="mb-0">Prefix : </label>
                <div>
                  <select
                    className="form-control"
                    style={{ border: "none" }}
                    name="prefix"
                    value={individualRequesteddata.prefix}
                  >
                    <option value="Mr">Mr</option>
                    <option value="Ms">Ms</option>
                    <option value="Miss">Miss</option>
                  </select>
                </div>
              </div>
              <div className="col-4">
                <label className="mb-0">First Name : </label>
                <input
                  type="text"
                  className="form-control account_opening_form_input"
                  placeholder="Enter Joint Account First Name"
                  name="firstname"
                  value={individualRequesteddata.firstname}
                />
              </div>
              <div className="col-4">
                <label className="mb-0">Last Name : </label>
                <input
                  type="name"
                  className="form-control account_opening_form_input"
                  placeholder="Enter your lastName"
                  name="lastname"
                  value={individualRequesteddata.lastname}
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-4">
                <label className="mb-0">Aadhar Number : </label>
                <input
                  type="name"
                  className="form-control account_opening_form_input"
                  placeholder="Enter your firstName"
                  name="aadharnumber"
                  value={individualRequesteddata.aadharnumber}
                />
              </div>
              <div className="col-4">
                <label className="mb-0">PAN Number : </label>
                <input
                  type="name"
                  className="form-control account_opening_form_input"
                  placeholder="Enter your lastName"
                  name="pannumber"
                  value={individualRequesteddata.pannumber}
                />
              </div>
              <div className="col-4">
                <label className="mb-0">Date Of Birth : </label>
                <input
                  type="date"
                  className="form-control account_opening_form_input"
                  name="dateofbirth"
                  value={individualRequesteddata.dateofbirth}
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-4">
                <label className="mb-0">Father Name : </label>
                <input
                  type="name"
                  className="form-control account_opening_form_input"
                  placeholder="Enter your Father Name"
                  name="fathername"
                  value={individualRequesteddata.fathername}
                />
              </div>
              <div className="col-4">
                <label className="mb-0">Mother Name: </label>
                <input
                  type="name"
                  className="form-control account_opening_form_input"
                  placeholder="Enter your Mother Name"
                  name="mothername"
                  value={individualRequesteddata.mothername}
                />
              </div>
              <div className="col-4">
                <label className="mb-0">
                  Gaurdian Name:{" "}
                  <em style={{ fontSize: "7px", color: "rgb(102 101 101)" }}>
                    (optional)
                  </em>
                </label>
                <input
                  type="name"
                  className="form-control account_opening_form_input"
                  placeholder="Enter your Gaurdian Name"
                  name="gaurdianname"
                  value={individualRequesteddata.gaurdianname}
                />
              </div>
            </div>
          </div>

          <p className="d-flex mt-5" style={{ fontSize: "13px" }}>
            Your account is survivor/Jointly/minour account :{" "}
            <input
              type="radio"
              name="account_is"
              className="ml-2"
              id="account_is_yes"
              value="yes"
              checked={individualRequesteddata.jointAccountStatus === "yes"}
            />{" "}
            <label
              for="account_is_yes"
              className="mb-0 pl-1"
              style={{
                fontSize: "11px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              YES
            </label>
            <input
              type="radio"
              name="account_is"
              className="ml-2"
              id="account_is_no"
              value="no"
              checked={individualRequesteddata.jointAccountStatus === "no"}
            />{" "}
            <label
              for="account_is_no"
              className="mb-0 pl-1"
              style={{
                fontSize: "11px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              NO
            </label>
          </p>

          {individualRequesteddata.jointAccountStatus === "yes" && (
            <div>
              <h5 className="mt-5">Personal Details - Applicant 2 :-</h5>
              <div className="row mt-3">
                <div className="col-4">
                  <label className="mb-0">Prefix : </label>
                  <div>
                    <select
                      className="form-control"
                      style={{ border: "none" }}
                      value={individualRequesteddata.jointAccountDetails.prefix}
                      name="prefix"
                    >
                      <option value="Mr">Mr</option>
                      <option value="Ms">Ms</option>
                      <option value="Miss">Miss</option>
                    </select>
                  </div>
                </div>
                <div className="col-4">
                  <label className="mb-0">First Name : </label>
                  <input
                    type="text"
                    className="form-control account_opening_form_input"
                    placeholder="Enter Joint Account First Name"
                    name="firstname"
                    value={
                      individualRequesteddata.jointAccountDetails.firstname
                    }
                  />
                </div>
                <div className="col-4">
                  <label className="mb-0">Last Name : </label>
                  <input
                    type="name"
                    className="form-control account_opening_form_input"
                    placeholder="Enter your lastName"
                    name="lastname"
                    required
                    value={individualRequesteddata.jointAccountDetails.lastname}
                  />
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-4">
                  <label className="mb-0">Aadhar Number : </label>
                  <input
                    type="name"
                    className="form-control account_opening_form_input"
                    placeholder="Enter your firstName"
                    name="aadharnumber"
                    value={
                      individualRequesteddata.jointAccountDetails.aadharnumber
                    }
                  />
                </div>
                <div className="col-4">
                  <label className="mb-0">PAN Number : </label>
                  <input
                    type="name"
                    className="form-control account_opening_form_input"
                    placeholder="Enter your lastName"
                    name="pannumber"
                    value={
                      individualRequesteddata.jointAccountDetails.pannumber
                    }
                  />
                </div>
                <div className="col-4">
                  <label className="mb-0">Date Of Birth : </label>
                  <input
                    type="date"
                    className="form-control account_opening_form_input"
                    name="dateofbirth"
                    value={
                      individualRequesteddata.jointAccountDetails.dateofbirth
                    }
                  />
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-4">
                  <label className="mb-0">Father Name : </label>
                  <input
                    type="name"
                    className="form-control account_opening_form_input"
                    placeholder="Enter your Father Name"
                    name="fathername"
                    value={
                      individualRequesteddata.jointAccountDetails.fathername
                    }
                  />
                </div>
                <div className="col-4">
                  <label className="mb-0">Mother Name: </label>
                  <input
                    type="name"
                    className="form-control account_opening_form_input"
                    placeholder="Enter your Mother Name"
                    name="mothername"
                    value={
                      individualRequesteddata.jointAccountDetails.mothername
                    }
                  />
                </div>
                <div className="col-4">
                  <label className="mb-0">
                    Gaurdian Name:{" "}
                    <em style={{ fontSize: "7px", color: "rgb(102 101 101)" }}>
                      (optional)
                    </em>
                  </label>
                  <input
                    type="name"
                    className="form-control account_opening_form_input"
                    placeholder="Enter your Gaurdian Name"
                    name="gaurdianname"
                    value={
                      individualRequesteddata.jointAccountDetails.gaurdianname
                    }
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Add more form fields as needed */}
        <div className="text-right">
          <Button
            onClick={prevStep}
            className="account_opening_profile_prevbtn"
          >
            Back
          </Button>
          <Button
            onClick={handleNextStep2}
            className="account_opening_profile_nextbtn"
          >
            Next
          </Button>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          transition={Bounce}
          theme="dark"
          className="custom-toast-container"
        />
      </div>
    );
  };

  // Step 3 Content

  const Step3Content = ({ prevStep, nextStep, formData, setFormData }) => {
    const { addressSameAs, setaddressSameAs } = useStateValue();
    // const handleChange = (e) => {
    //   setFormData({ ...formData, [e.target.name]: e.target.value });
    // };
    const AddressSameAS = (e) => {
      setaddressSameAs(e.target.value === "no");
    };

    // const AddressSameAS1 = (e) => {
    //   setaddressSameAs1(e.target.value === "no");
    // };
    const { userData, setUserData } = useStateValue({});

    const handleNextStep3 = () => {
      // Proceed to the next step
      nextStep();
    };

    return (
      <div className="mt-5 mb-5 account_opening_personal_details_1">
        <h5>
          Creating Account for{" "}
          <span style={{ color: "#f18121" }}>
            {individualRequesteddata.firstname}{" "}
            {individualRequesteddata.lastname}
          </span>
        </h5>

        <div className="card p-4 account_opening_personal_details_1_card">
          <div>
            <h5 className="" style={{ color: "#f18121" }}>
              MAILING ADDRESS :-
            </h5>

            <h6
              className="mt-3 mb-3"
              style={{
                fontSize: "12px",
                color: "rgb(165 55 24)",
                textTransform: "capitalize",
              }}
            >
              enter mailing address
            </h6>
            <div className="row mt-3">
              <div className="col-4">
                <label className="mb-0">Flat/House No : </label>
                <input
                  type="text"
                  className="form-control account_opening_form_input"
                  placeholder="Enter your flatnumber"
                  name="currentAddress.flatnumber"
                  value={individualRequesteddata?.currentAddress?.flatnumber}

                  // value={individualRequesteddata.currentAddress.flatnumber}
                />
              </div>
              <div className="col-4">
                <label className="mb-0">
                  Building Name :{" "}
                  <em style={{ fontSize: "7px", color: "rgb(102 101 101)" }}>
                    (optional)
                  </em>{" "}
                </label>
                <input
                  type="name"
                  className="form-control account_opening_form_input"
                  placeholder="Enter your buildingname"
                  name="currentAddress.buildingname"
                  value={individualRequesteddata?.currentAddress?.buildingname}
                />
              </div>
              <div className="col-4">
                <label className="mb-0">Landmark : </label>
                <input
                  type="name"
                  className="form-control account_opening_form_input"
                  placeholder="Enter landmark"
                  name="currentAddress.landmark"
                  value={individualRequesteddata?.currentAddress?.landmark}
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-4">
                <label className="mb-0">City : </label>
                <input
                  type="name"
                  className="form-control account_opening_form_input"
                  placeholder="Enter city"
                  name="currentAddress.city"
                  value={individualRequesteddata?.currentAddress?.city}
                />
              </div>
              <div className="col-4">
                <label className="mb-0">State: </label>
                <input
                  type="name"
                  className="form-control account_opening_form_input"
                  placeholder="Enter State"
                  name="currentAddress.state"
                  value={individualRequesteddata?.currentAddress?.state}
                />
              </div>
              <div className="col-4">
                <label className="mb-0">Country : </label>
                <input
                  type="name"
                  className="form-control account_opening_form_input"
                  placeholder="Enter country"
                  name="currentAddress.country"
                  value={individualRequesteddata?.currentAddress?.country}
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-4">
                <label className="mb-0">Pincode : </label>
                <input
                  type="name"
                  className="form-control account_opening_form_input"
                  placeholder="Enter pincode"
                  name="currentAddress.pincode"
                  value={individualRequesteddata?.currentAddress?.pincode}
                />
              </div>
            </div>

            <p className="d-flex mt-5" style={{ fontSize: "13px" }}>
              Your Permanent Address same as Mailing Address:{" "}
              <input
                type="radio"
                name="address_sameas"
                className="ml-2"
                id="address_sameas_yes"
                onChange={AddressSameAS}
                value="yes"
                checked={
                  individualRequesteddata?.currentAddress?.permanantAddressStatus === "yes"
                }
              />{" "}
              <label
                for="address_sameas_yes"
                className="mb-0 pl-1"
                style={{
                  fontSize: "11px",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                YES
              </label>
              <input
                type="radio"
                name="address_sameas"
                className="ml-2"
                id="address_sameas_no"
                value="no"
                checked={
                  individualRequesteddata?.currentAddress?.permanantAddressStatus === "no"
                }
                onChange={AddressSameAS}
              />{" "}
              <label
                for="address_sameas_no"
                className="mb-0 pl-1"
                style={{
                  fontSize: "11px",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                NO
              </label>
            </p>

            {individualRequesteddata?.currentAddress?.permanantAddressStatus ===
            "no" ? (
              <div>
                <h6
                  className="mt-5 mb-3"
                  style={{
                    fontSize: "12px",
                    color: "rgb(165 55 24)",
                    textTransform: "capitalize",
                  }}
                >
                  permanent address
                </h6>
                <div className="row mt-3">
                  <div className="col-4">
                    <label className="mb-0">Flat/House No : </label>
                    <input
                      type="name"
                      className="form-control account_opening_form_input"
                      placeholder="Enter your firstName"
                      name="permanentAddress.flatnumber"
                      value={
                        individualRequesteddata?.permanentAddress?.flatnumber
                      }
                    />
                  </div>
                  <div className="col-4">
                    <label className="mb-0">
                      Building Name :{" "}
                      <em
                        style={{ fontSize: "7px", color: "rgb(102 101 101)" }}
                      >
                        (optional)
                      </em>{" "}
                    </label>
                    <input
                      type="name"
                      className="form-control account_opening_form_input"
                      placeholder="Enter buildingname"
                      name="permanentAddress.buildingname"
                      value={
                        individualRequesteddata?.permanentAddress?.buildingname
                      }
                    />
                  </div>
                  <div className="col-4">
                    <label className="mb-0">Landmark : </label>
                    <input
                      type="name"
                      className="form-control account_opening_form_input"
                      placeholder="Enter landmark"
                      name="permanentAddress.landmark"
                      value={individualRequesteddata?.permanentAddress?.landmark}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-4">
                    <label className="mb-0">City : </label>
                    <input
                      type="name"
                      className="form-control account_opening_form_input"
                      placeholder="Enter city"
                      name="permanentAddress.city"
                      value={individualRequesteddata?.permanentAddress?.city}
                    />
                  </div>
                  <div className="col-4">
                    <label className="mb-0">State: </label>
                    <input
                      type="name"
                      className="form-control account_opening_form_input"
                      placeholder="Enter state"
                      name="permanentAddress.state"
                      value={individualRequesteddata?.permanentAddress?.state}
                    />
                  </div>
                  <div className="col-4">
                    <label className="mb-0">Country : </label>
                    <input
                      type="name"
                      className="form-control account_opening_form_input"
                      placeholder="Enter country"
                      name="permanentAddress.country"
                      value={individualRequesteddata?.permanentAddress?.country}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-4">
                    <label className="mb-0">Pincode : </label>
                    <input
                      type="name"
                      className="form-control account_opening_form_input"
                      placeholder="Enter pincode"
                      name="permanentAddress.pincode"
                      value={individualRequesteddata?.permanentAddress?.pincode}
                    />
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* Add more form fields as needed */}
        <div className="text-right">
          <Button
            onClick={prevStep}
            className="account_opening_profile_prevbtn"
          >
            Back
          </Button>
          <Button
            onClick={handleNextStep3}
            className="account_opening_profile_nextbtn"
          >
            Next
          </Button>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          transition={Bounce}
          theme="dark"
          className="custom-toast-container"
        />
      </div>
    );
  };

  // Step 4 Content
  const Step4Content = ({ prevStep, nextStep, formData, setFormData }) => {
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const navigate = useNavigate();

    const [accountDetails, setAccountDetails] = useState({
      accountNumber: "",
      ifscCode: "",
      netBankingUserID: "",
      netBankingPassword: "",
      customerID:"",
      bankBranch:"",
    });
    const handleCheckboxChange = () => {
      setIsCheckboxChecked(!isCheckboxChecked);
    };
    console.log(accountDetails);

    const handleChange = (e) => {
      setAccountDetails({ ...accountDetails, [e.target.name]: e.target.value });
    };
    const handleNextClick = () => {
      if (isCheckboxChecked) {
        // nextStep();
      } else {
        toast.error("Please agree to all fields before proceeding");
      }
    };

    const handleSubmitAccountDetails = async () => {
      try {
        // const response = await axios.put(
          const response = await axios.put(
          // (`http://localhost:4444/api/add-account-details/${state}`,

          `${apiList.addAccountDetails}/${state}`,
          accountDetails
        );
        toast.success("account details added successfully");
        setTimeout(() => {
          navigate("/all-data");
        }, 2000);
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    };

    return (
      <div className="mt-5 mb-5 account_opening_personal_details_1 account_opening_total_details">
        <h5>
          Creating Account for{" "}
          <span style={{ color: "#f18121" }}>
            {individualRequesteddata.firstname}{" "}
            {individualRequesteddata.lastname}
          </span>
        </h5>

        <div className="card p-4 account_opening_personal_details_1_card account_opening_total_details_card">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-12">
              <div className="">
                <h6 style={{ fontSize: "12px", fontWeight: "500" }}>
                  Account Number
                </h6>

                <input
                  type="text"
                  className="form-control account_opening_form_input"
                  placeholder="Account Number generated  by system"
                  required
                  style={{ padding: "21px" }}
                  name="accountNumber"
                  onChange={handleChange}
                  value={accountDetails.accountNumber}
                  disabled
                />
              </div>
            </div>
            <div className="col-md-6  col-sm-12 col-12">
              <div className="">
                <h6 style={{ fontSize: "12px", fontWeight: "500" }}>
                  IFSC
                  {/* <span style={{ color: "red", paddingLeft: "3px" }}>*</span> */}
                </h6>

                <input
                  type="text"
                  class="form-control account_opening_form_input"
                  placeholder="Enter IFSC Code"
                  name="ifscCode"
                  onChange={handleChange}
                  value={accountDetails.ifscCode}
                  style={{ padding: "21px" }}
                />
              </div>
            </div>
          </div>

          <div className="row mt-5">
             <div className="col-md-6 col-sm-12 col-12">
              <div className="">
                <h6 style={{ fontSize: "12px", fontWeight: "500" }}>
                Customer ID      
                </h6>

                <input
                  type="text"
                  className="form-control account_opening_form_input"
                  placeholder="Customer ID Number generated  by system"
                  required
                  style={{ padding: "21px" }}
                  name="Customer ID"
                  onChange={handleChange}
                  value={accountDetails.customerID}
                  disabled
                />
              </div>
            </div>

            <div className="col-md-6 col-sm-12 col-12">
              <div className="">
                <h6 style={{ fontSize: "12px", fontWeight: "500" }}>
Bank Branch                </h6>

                <input
                  type="text"
                  className="form-control account_opening_form_input"
                  placeholder="Enter bank branch"
                  // required
                  style={{ padding: "21px" }}
                  name="bankBranch" // <-- This should match the state key
                  onChange={handleChange}
                  value={accountDetails.bankBranch}  
                  />
                 
              </div>
            </div> 

           </div> 

          <div className="row mt-5">
            <div className="col-md-6 col-sm-12 col-12">
              <div className="">
                <h6 style={{ fontSize: "12px", fontWeight: "500" }}>
                  Netbanking UserID
                </h6>

                <input
                  type="text"
                  className="form-control account_opening_form_input"
                  placeholder="Enter Netbanking UserID"
                  required
                  style={{ padding: "21px" }}
                  name="netBankingUserID"
                  onChange={handleChange}
                  value={accountDetails.netBankingUserID}
                />
                <p
                  style={{ color: "#000", fontSize: "10px" }}
                  className="mt-1 mb-0"
                >
                  <b>Note</b> : UserID should have atleast 1 Uppercase,
                  Lowercase and number, no symbols
                </p>
                <p style={{ color: "#000", fontSize: "10px" }}>
                  Length should be more than 8 to have unique UserID
                </p>
              </div>
            </div>
            <div className="col-md-6  col-sm-12 col-12">
              <div className="">
                <h6 style={{ fontSize: "12px", fontWeight: "500" }}>
                  Netbanking Password
                  {/* <span style={{ color: "red", paddingLeft: "3px" }}>*</span> */}
                </h6>

                <input
                  type="text"
                  class="form-control account_opening_form_input"
                  placeholder="Enter Netbanking Password "
                  name="netBankingPassword"
                  onChange={handleChange}
                  value={accountDetails.netBankingPassword}
                  style={{ padding: "21px" }}
                />
                <p
                  style={{ color: "#000", fontSize: "10px" }}
                  className="mt-1 mb-0"
                >
                  <b>Note</b> : Password should have atleast 1 Uppercase,
                  Lowercase , number and symbols (@ # _)
                </p>
                <p style={{ color: "#000", fontSize: "10px" }}>
                  Length should be more than 8 to have Strong password
                </p>
              </div>
            </div>
          </div>

          <p className="mt-5 d-flex">
            <input
              type="checkbox"
              id="Iagreedetails"
              checked={isCheckboxChecked}
              onChange={handleCheckboxChange}
            />{" "}
            <label
              className="mb-0"
              for="Iagreedetails"
              style={{
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            >
              I agree all the fields
            </label>
          </p>
        </div>

        {/* Add more form fields as needed */}
        <div className="text-right">
          <Button
            onClick={prevStep}
            className="account_opening_profile_prevbtn"
          >
            Back
          </Button>
          <Button
            onClick={handleSubmitAccountDetails}
            className="account_opening_profile_nextbtn"
          >
            Submit
          </Button>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          transition={Bounce}
          theme="dark"
          className="custom-toast-container"
        />
      </div>
    );
  };

  // Step 5 Content
  const Step5Content = ({ prevStep, reset, nextStep, formData }) => {
    const navigate = useNavigate();
    const { userData, setUserData } = useStateValue({});

    const [isCheckboxChecked1, setIsCheckboxChecked1] = useState(false);
    // const handleChange1 = (e) => {
    //   setFormData({ ...userData, [e.target.name]: e.target.value });
    // };

    const handleNextClick1 = () => {
      nextStep();
    };

    return (
      <div className="mt-5 mb-5 account_opening_personal_details_1 account_opening_total_details">
        <h5>
          Creating Account for{" "}
          <span style={{ color: "#f18121" }}>
            {individualRequesteddata.firstname}{" "}
            {individualRequesteddata.lastname}
          </span>
        </h5>

        <div className="card p-4 account_opening_personal_details_1_card account_opening_declaration_card">
          <h4>Declaration : </h4>

          <p className="mt-3">
            I, <b>Ramisetty Ashok kumar</b>, hereby declare and affirm the
            following statements in connection with the opening of the bank
            account with <b>Royal Islamic bank:</b>
          </p>

          <p>
            1. I declare that all information provided in this application form
            is true, complete, and accurate to the best of my knowledge.
          </p>
          <p>
            2. I understand that the bank may rely on the information provided
            by me for the purpose of opening the account, and any
            misrepresentation or omission may lead to the rejection of the
            application or closure of the account.
          </p>
          <p>
            3. I acknowledge that I have read, understood, and agree to abide by
            the terms and conditions, fees, and charges associated with the
            account as provided by the bank.
          </p>
          <p>
            4. I understand and accept that the bank may conduct necessary
            background checks, verification, and inquiries to confirm the
            accuracy of the information provided in this application.
          </p>
          <p>
            5. I undertake to inform the bank promptly of any changes to the
            information provided in this application, including but not limited
            to changes in my contact details, employment status, or financial
            circumstances.
          </p>
          <p>
            6. I authorize the bank to contact me through the provided contact
            details for any account-related communication, including but not
            limited to account statements, alerts, and promotional information.
          </p>
          <p>
            7. I understand that the bank reserves the right to amend the terms
            and conditions of the account with prior notice.
          </p>
          <p>
            I hereby acknowledge that any false statements or misrepresentations
            made in this declaration may result in the closure of the account
            and legal action.
          </p>
          <p>
            <b>Date</b> : Today's Date
          </p>
          <p>
            <b>Branch </b>:{" "}
          </p>
          <p className="mt-3 d-flex">
            <input
              type="checkbox"
              id="Iagreedetails"
              checked={individualRequesteddata.declaration === "yes"}
            />{" "}
            <label
              className="mb-0"
              for="Iagreedetails"
              style={{
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            >
              I agree the declaration
            </label>
          </p>
        </div>

        {/* Add more form fields as needed */}
        <div className="text-right">
          <Button
            onClick={prevStep}
            className="account_opening_profile_prevbtn"
          >
            Back
          </Button>
          <Button
            onClick={handleNextClick1}
            className="account_opening_profile_nextbtn"
          >
            Next
          </Button>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          transition={Bounce}
          theme="dark"
          className="custom-toast-container"
        />
      </div>
    );
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <Step1Content
            nextStep={nextStep}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 1:
        return (
          <Step2Content
            prevStep={prevStep}
            nextStep={nextStep}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 2:
        return (
          <Step3Content
            prevStep={prevStep}
            nextStep={nextStep}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 3:
        return (
          <Step5Content
            prevStep={prevStep}
            nextStep={nextStep}
            reset={reset}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 4:
        return (
          <Step4Content
            prevStep={prevStep}
            nextStep={nextStep}
            formData={formData}
            setFormData={setFormData}
          />
        );

      default:
        return "Unknown step";
    }
  };

  return (
    <>
    {isAuthenticated() ? (
    <div className="container mt-5">
      <StateProvider>
        <div className="row">
        <div className="col-3">
          <AdminSidebar />
        </div>
          <div className="col-9">
            <Box sx={{ width: "100%" }}>
              <Stepper activeStep={activeStep}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel className="account_opening_stepicon">
                      {label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
              <div>
                <Typography>{getStepContent(activeStep)}</Typography>
              </div>
            </Box>
          </div>
        </div>
      </StateProvider>
    </div>
 ) : (
  <Navigate to="/admin/login" state={{ from: location }} />
)}
</>

  );
}
































 