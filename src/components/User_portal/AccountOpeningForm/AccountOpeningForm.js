 
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./AccountOpeningForm.css";
import apiList from "../../../lib/apiList";
import { StateProvider, useStateValue } from "./AccountOpenParentComponent";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AccountOpeningForm() {
  const [showInputs, setShowInputs] = useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState({
    firstName: "",
    address: "",
    accountName: "",
    // Add more fields as needed
  });

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
    "Identify Yourself",
    "Personal Details",
    "Address",
    "Your Profile",
    "Submitted",
  ];
 
  const Step1Content = ({ nextStep, formData, setFormData }) => {
    const { userData, setUserData } = useStateValue({});

    const handleChange = (e) => {
      setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const validateInputs = () => {
      if (!userData.mobilenumber || !userData.email) {
        toast.error("Please fill in all required fields.");
        return false;
      }
      return true;
    };

    const handleNextStep = () => {
      if (validateInputs()) {
        // Proceed to the next step
        nextStep();
      }
    };

    // console.log(userData);

    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [isVerified, setIsVerified] = useState(false);
    const [otpExpiration, setOtpExpiration] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [countdown, setCountdown] = useState(60);
    const [resendButton, setResendButton] = useState(false);

    const [ismailValid, setismailValid] = useState(false);

    const handleemailerror = () => {
      toast.error("enter email address");
    };
 
    const [handlemodal, setmodal] = useState(false);
    const [handleDisplayContent, setdisplayContent] = useState(false);

    const handleGetOTP = async () => {
      try {
        // Check if the entered email is in a valid format
        console.log("user email:" , userData.email);
    
        setismailValid(true);
         await axios.post(
          `${apiList.Storeemail}`,
          {
            email: userData.email,
          }
        );
        // Send a request to the backend to trigger OTP sending
        const response = await axios.post(
          `${apiList.UserDetailsAccountOpeningSendOTP}`,
          {
            email: userData.email,
          }
        );
        console.log(response);
        let data = response.status;

        // Update ismailValid based on the response status code
        if (data === 200) {
          console.log("test api");
          setmodal(true);
          setdisplayContent(true);
          setSeconds(60); // Reset seconds to 60 when starting
          setIsRunning(true);
        } else {
          toast.error("Invalid email address");
        }
      } catch (error) {
        setmodal(true);
        console.error(
          "Error sending OTP:",
          error.response ? error.response.data.message : error.message
        );
      }
    };
 

    const handleVerifyOTP = async () => {
      try {
        // Send a request to the backend to verify the OTP
        const response = await axios.post(
          `${apiList.UserDetailsAccountOpeningVerifyOTP}`,
           {
            email: userData.email,
            gmailOTP: otp,
          }
        );

        if (response.data.message) {
          // Mark the email as verified and close the modal
          setIsVerified(true);

          // Show a success toast message for verification
          toast.success("OTP Verified successfully!");
          // setIsModalOpen(false);
          const closeButton = document.querySelector(
            '.modal-footer button[data-dismiss="modal"]'
          );
          if (closeButton) {
            closeButton.click();
          }
        } else {
          // Show an error toast message for incorrect OTP
          toast.error("Incorrect OTP. Please try again.");
        }
      } catch (error) {
        console.error(
          "Error verifying OTP:",
          error.response ? error.response.data.message : error.message
        );

        // Show an error toast message for API call failure
        toast.error("Error verifying OTP. Please try again.");
      }
    };

    const handleResendLink = async () => {
      // Implement logic to resend the verification link
      // Similar to the logic in handleGetOTP
    };

   

    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
      const intervalId = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        } else {
          clearInterval(intervalId);
          setSeconds("Stopped");
        }
      }, 1000);

      return () => clearInterval(intervalId);
    }, [seconds]);

    const resendOTP = () => {
      setSeconds(60);
      handleGetOTP();
    };
    
    return (
      <div className="mt-5 account_opening">
        <h5>
          Welcome to{" "}
          <span style={{ color: "#f18121" }}>ROYAL ISLAMIC BANK</span>
        </h5>

        <div className="row account_opening_Identify_yourself">
          <div className="col-md-6 col-sm-12 col-12">
            <div className="card">
              <h6>
                Enter Your Mobile Number
                <span style={{ color: "red", paddingLeft: "3px" }}>*</span>
              </h6>

              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Mobile Number"
                required
                name="mobilenumber"
                value={userData.mobilenumber}
                onChange={handleChange}
              />
              <p className="pb-2"></p>
              <p> </p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-12">
            <div className="card">
              <h6>
                Enter Your Email
                <span style={{ color: "red", paddingLeft: "3px" }}>*</span>
              </h6>

              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <button
                    className="input-group-text account_opening_email_otp_getotp_btn"
                    id="basic-addon2"
                    disabled={isVerified}
                    onClick={() => {
                      if (userData.email) {
                        handleGetOTP();
                      } else {
                        handleemailerror();
                      }
                    }}
                    data-toggle={ismailValid && "modal"}
                    data-target={ismailValid && "#myModal"}
                  >
                    {isVerified ? "Verified" : "Get OTP"}
                  </button>
                </div>
              </div>
              <div className="modal" id="myModal">
                <div className="modal-dialog">
                  <div className="modal-content">
                    {handlemodal ? (
                      <div>
                        {handleDisplayContent ? (
                          <div>
                            <div className="modal-header">
                              <h4 className="modal-title">Enter OTP</h4>
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                              >
                                &times;
                              </button>
                            </div>
                            <div className="modal-body text-center">
                              <input
                                type="text"
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                className="account_opening_email_otp_modal"
                              />
                              <p>
                                {seconds > 0 ? (
                                  `OTP will expire in: ${seconds} seconds`
                                ) : (
                                  <p>
                                    OTP has expired{" "}
                                    <button
                                      onClick={resendOTP}
                                      className="account_opening_email_otp_resend_btn"
                                    >
                                      resend
                                    </button>
                                  </p>
                                )}
                              </p>
                              {seconds === 0 && resendButton && (
                                <button
                                  className="btn btn-primary account_opening_email_otp_resend_btn"
                                  onClick={handleResendLink}
                                >
                                  Resend OTP
                                </button>
                              )}
                              <Button
                                variant="primary"
                                className="account_opening_email_otp_verify_btn"
                                onClick={handleVerifyOTP}
                                disabled={isVerified}
                              >
                                {isVerified ? "Verified" : "Verify"}
                              </Button>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-danger"
                                data-dismiss="modal"
                                style={{
                                  fontSize: "12px",
                                  padding: "3px 10px",
                                }}
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div>
                              {" "}
                              <p className="my-3 " style={{ fontSize: "20px" }}>
                                Invalid Email ID
                              </p>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                  data-dismiss="modal"
                                  style={{
                                    fontSize: "12px",
                                    padding: "3px 10px",
                                  }}
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div>
                        {" "}
                        <p className="my-3" style={{ fontSize: "20px" }}>
                          Please wait ...
                        </p>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-danger"
                            data-dismiss="modal"
                            style={{
                              fontSize: "12px",
                              padding: "3px 10px",
                            }}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    )}

                    {/* <div className="modal-header">
                        <h4 className="modal-title">Enter OTP</h4>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                        >
                          &times;
                        </button>
                      </div>

                      <div className="modal-body text-center">
                        <input
                          type="text"
                          placeholder="Enter OTP"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          className="account_opening_email_otp_modal"
                        />
                        <p>
                          {seconds > 0 ? (
                            `OTP will expire in: ${seconds} seconds`
                          ) : (
                            <p>
                              OTP has expired{" "}
                              <button
                                onClick={resendOTP}
                                className="account_opening_email_otp_resend_btn"
                              >
                                resend
                              </button>
                            </p>
                          )}
                        </p>
                        {seconds === 0 && resendButton && (
                          <button
                            className="btn btn-primary account_opening_email_otp_resend_btn"
                            onClick={handleResendLink}
                          >
                            Resend OTP
                          </button>
                        )}
                        <Button
                          variant="primary"
                          className="account_opening_email_otp_verify_btn"
                          onClick={handleVerifyOTP}
                          disabled={isVerified}
                        >
                          {isVerified ? "Verified" : "Verify"}
                        </Button>
                      </div>

                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-danger"
                          data-dismiss="modal"
                          style={{ fontSize: "12px", padding: "3px 10px" }}
                        >
                          Close
                        </button>
                      </div> */}
                  </div>
                </div>
              </div>
              <p className="help-block"></p>
              <p style={{ color: "#000" }}>
                <b>Note</b> : Click Next button after verifying your email
              </p>
            </div>
          </div>
        </div>

        <div className="text-right">
          <button
            onClick={handleNextStep}
            className={`account_opening_Identify_yourself_nextbtn ${
              !isVerified &&
              "account_opening_Identify_yourself_nextbtn_disabled"
            }`}
            disabled={!isVerified}
          >
            NEXT
          </button>
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
      setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const { userData, setUserData } = useStateValue({});

    const handleChange = (e) => {
      setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleJointAccountDetailsChange = (e) => {
      const { name, value } = e.target;
      setUserData((prevUserData) => ({
        ...prevUserData,
        jointAccountDetails: {
          ...prevUserData.jointAccountDetails,
          [name]: value,
        },
      }));
    };
    console.log(personalDetails);

    const validateFields2 = () => {
      if (
        !userData.openaccount ||
        !userData.operatingtype ||
        !userData.prefix ||
        !userData.firstname ||
        !userData.lastname ||
        !userData.aadharnumber ||
        !userData.pannumber ||
        !userData.dateofbirth ||
        !userData.fathername ||
        !userData.mothername
      ) {
        toast.error("Please fill in all required fields.");
        return false;
      }
      console.log(personalDetails);
      if (personalDetails) {
        if (
          userData.jointAccountDetails.firstName === "" ||
          userData.jointAccountDetails.lastname === "" ||
          userData.jointAccountDetails.aadharnumber === "" ||
          userData.jointAccountDetails.pannumber === "" ||
          userData.jointAccountDetails.dateofbirth === "" ||
          userData.jointAccountDetails.fathername === "" ||
          userData.jointAccountDetails.mothername === ""
        ) {
          toast.error("Please fill in all required fields.");
          return false;
        }
      }
      return true;
    };

    const handleNextStep2 = () => {
      if (validateFields2()) {
        // Proceed to the next step
        nextStep();
      }
    };

    console.log(userData);

    return (
      <div className="mt-5 mb-5 account_opening_personal_details_1">
        <h5>
          Welcome to{" "}
          <span style={{ color: "#f18121" }}>ROYAL ISLAMIC BANK</span>
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                    onChange={handleChange}
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
                  className="form-control"
                  placeholder="Enter Joint Account First Name"
                  name="firstname"
                  value={userData.firstname}
                  onChange={handleChange}
                />
              </div>
              <div className="col-4">
                <label className="mb-0">Last Name : </label>
                <input
                  type="name"
                  className="form-control"
                  placeholder="Enter your lastName"
                  name="lastname"
                  value={userData.lastname}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-4">
                <label className="mb-0">Aadhar Number : </label>
                <input
                  type="name"
                  className="form-control"
                  placeholder="Enter your firstName"
                  name="aadharnumber"
                  value={userData.aadharnumber}
                  onChange={handleChange}
                />
              </div>
              <div className="col-4">
                <label className="mb-0">PAN Number : </label>
                <input
                  type="name"
                  className="form-control"
                  placeholder="Enter your lastName"
                  name="pannumber"
                  value={userData.pannumber}
                  onChange={handleChange}
                />
              </div>
              <div className="col-4">
                <label className="mb-0">Date Of Birth : </label>
                <input
                  type="date"
                  className="form-control"
                  name="dateofbirth"
                  value={userData.dateofbirth}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-4">
                <label className="mb-0">Father Name : </label>
                <input
                  type="name"
                  className="form-control"
                  placeholder="Enter your Father Name"
                  name="fathername"
                  value={userData.fathername}
                  onChange={handleChange}
                />
              </div>
              <div className="col-4">
                <label className="mb-0">Mother Name: </label>
                <input
                  type="name"
                  className="form-control"
                  placeholder="Enter your Mother Name"
                  name="mothername"
                  value={userData.mothername}
                  onChange={handleChange}
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
                  className="form-control"
                  placeholder="Enter your Gaurdian Name"
                  name="gaurdianname"
                  value={userData.gaurdianname}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <p className="d-flex mt-5" style={{ fontSize: "13px" }}>
            Your account is survivor/Jointly/minour account :{" "}
            <input
              type="radio"
              name="jointAccountStatus"
              className="ml-2"
              id="account_is_yes"
              value="yes"
              onChange={handleinPersonalDetails}
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
              name="jointAccountStatus"
              className="ml-2"
              id="account_is_no"
              value="no"
              onChange={handleinPersonalDetails}
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

          {personalDetails && (
            <div>
              <h5 className="mt-5">Personal Details - Applicant 2 :-</h5>
              <div className="row mt-3">
                <div className="col-4">
                  <label className="mb-0">Prefix : </label>
                  <div>
                    <select
                      className="form-control"
                      style={{ border: "none" }}
                      onChange={handleJointAccountDetailsChange}
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
                    className="form-control"
                    placeholder="Enter Joint Account First Name"
                    name="firstname"
                    value={userData.jointAccountDetails.firstname}
                    onChange={handleJointAccountDetailsChange}
                  />
                </div>
                <div className="col-4">
                  <label className="mb-0">Last Name : </label>
                  <input
                    type="name"
                    className="form-control"
                    placeholder="Enter your lastName"
                    name="lastname"
                    required
                    value={userData.jointAccountDetails.lastname}
                    onChange={handleJointAccountDetailsChange}
                  />
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-4">
                  <label className="mb-0">Aadhar Number : </label>
                  <input
                    type="name"
                    className="form-control"
                    placeholder="Enter your firstName"
                    name="aadharnumber"
                    value={userData.jointAccountDetails.aadharnumber}
                    onChange={handleJointAccountDetailsChange}
                  />
                </div>
                <div className="col-4">
                  <label className="mb-0">PAN Number : </label>
                  <input
                    type="name"
                    className="form-control"
                    placeholder="Enter your lastName"
                    name="pannumber"
                    value={userData.jointAccountDetails.pannumber}
                    onChange={handleJointAccountDetailsChange}
                  />
                </div>
                <div className="col-4">
                  <label className="mb-0">Date Of Birth : </label>
                  <input
                    type="date"
                    className="form-control"
                    name="dateofbirth"
                    value={userData.jointAccountDetails.dateofbirth}
                    onChange={handleJointAccountDetailsChange}
                  />
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-4">
                  <label className="mb-0">Father Name : </label>
                  <input
                    type="name"
                    className="form-control"
                    placeholder="Enter your Father Name"
                    name="fathername"
                    value={userData.jointAccountDetails.fathername}
                    onChange={handleJointAccountDetailsChange}
                  />
                </div>
                <div className="col-4">
                  <label className="mb-0">Mother Name: </label>
                  <input
                    type="name"
                    className="form-control"
                    placeholder="Enter your Mother Name"
                    name="mothername"
                    value={userData.jointAccountDetails.mothername}
                    onChange={handleJointAccountDetailsChange}
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
                    className="form-control"
                    placeholder="Enter your Gaurdian Name"
                    name="gaurdianname"
                    value={userData.jointAccountDetails.gaurdianname}
                    onChange={handleJointAccountDetailsChange}
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
    const {
      addressSameAs,
      setaddressSameAs,
      personalDetails,
      addressSameAs1,
      setaddressSameAs1,
    } = useStateValue("yes");
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

    const handleChange = (e) => {
      const { name, value } = e.target;

      console.log("Name:", name);
      console.log("Value:", value);
      if (name === "currentAddress.permanantAddressStatus") {
        // Handle radio button change for permanent address same as mailing address
        setaddressSameAs(value);
      }
      const [addressType, field] = name.split(".");
      console.log("Address Type:", addressType);
      console.log("Field:", field);

      setUserData((prevUserData) => {
        const updatedUserData = {
          ...prevUserData,
          [addressType]: {
            ...prevUserData[addressType],
            [field]: value,
          },
        };
        console.log("Updated UserData:", updatedUserData);
        return updatedUserData;
      });
    };

    const validateInputs3 = () => {
      // Check if the required fields are filled in
      if (
        !userData.currentAddress.flatnumber ||
        !userData.currentAddress.buildingname ||
        !userData.currentAddress.landmark ||
        !userData.currentAddress.city ||
        !userData.currentAddress.state ||
        !userData.currentAddress.country ||
        !userData.currentAddress.pincode
      ) {
        toast.error("Please fill in all required fields.");
        return false;
      }
      if (addressSameAs === "no") {
        if (
          !userData.permanentAddress.flatnumber ||
          !userData.permanentAddress.buildingname ||
          !userData.permanentAddress.landmark ||
          !userData.permanentAddress.city ||
          !userData.permanentAddress.state ||
          !userData.permanentAddress.country ||
          !userData.permanentAddress.pincode
        ) {
          toast.error("Please fill in all required fields.");
          return false;
        }
      }
      return true;
    };

    const handleNextStep3 = () => {
      if (validateInputs3()) {
        // Proceed to the next step
        nextStep();
      }
    };

    return (
      <div className="mt-5 mb-5 account_opening_personal_details_1">
        <h5>
          Welcome to{" "}
          <span style={{ color: "#f18121" }}>ROYAL ISLAMIC BANK</span>
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
                  className="form-control"
                  placeholder="Enter your flatnumber"
                  name="currentAddress.flatnumber"
                  value={userData.currentAddress.flatnumber}
                  onChange={handleChange}
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
                  className="form-control"
                  placeholder="Enter your buildingname"
                  name="currentAddress.buildingname"
                  value={userData.currentAddress.buildingname}
                  onChange={handleChange}
                />
              </div>
              <div className="col-4">
                <label className="mb-0">Landmark : </label>
                <input
                  type="name"
                  className="form-control"
                  placeholder="Enter landmark"
                  name="currentAddress.landmark"
                  value={userData.currentAddress.landmark}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-4">
                <label className="mb-0">City : </label>
                <input
                  type="name"
                  className="form-control"
                  placeholder="Enter city"
                  name="currentAddress.city"
                  value={userData.currentAddress.city}
                  onChange={handleChange}
                />
              </div>
              <div className="col-4">
                <label className="mb-0">State: </label>
                <input
                  type="name"
                  className="form-control"
                  placeholder="Enter State"
                  name="currentAddress.state"
                  value={userData.currentAddress.state}
                  onChange={handleChange}
                />
              </div>
              <div className="col-4">
                <label className="mb-0">Country : </label>
                <input
                  type="name"
                  className="form-control"
                  placeholder="Enter country"
                  name="currentAddress.country"
                  value={userData.currentAddress.country}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-4">
                <label className="mb-0">Pincode : </label>
                <input
                  type="name"
                  className="form-control"
                  placeholder="Enter pincode"
                  name="currentAddress.pincode"
                  value={userData.currentAddress.pincode}
                  onChange={handleChange}
                />
              </div>
            </div>

            <p className="d-flex mt-5" style={{ fontSize: "13px" }}>
              Your Permanent Address same as Mailing Address:{" "}
              <input
                type="radio"
                name="currentAddress.permanantAddressStatus"
                className="ml-2"
                id="address_sameas_yes"
                onChange={handleChange}
                value="yes"
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
                name="currentAddress.permanantAddressStatus"
                className="ml-2"
                id="address_sameas_no"
                value="no"
                onChange={handleChange}
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

            {addressSameAs === "no" ? (
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
                      className="form-control"
                      placeholder="Enter your firstName"
                      name="permanentAddress.flatnumber"
                      value={userData.permanentAddress.flatnumber}
                      onChange={handleChange}
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
                      className="form-control"
                      placeholder="Enter buildingname"
                      name="permanentAddress.buildingname"
                      value={userData.permanentAddress.buildingname}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-4">
                    <label className="mb-0">Landmark : </label>
                    <input
                      type="name"
                      className="form-control"
                      placeholder="Enter landmark"
                      name="permanentAddress.landmark"
                      value={userData.permanentAddress.landmark}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-4">
                    <label className="mb-0">City : </label>
                    <input
                      type="name"
                      className="form-control"
                      placeholder="Enter city"
                      name="permanentAddress.city"
                      value={userData.permanentAddress.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-4">
                    <label className="mb-0">State: </label>
                    <input
                      type="name"
                      className="form-control"
                      placeholder="Enter state"
                      name="permanentAddress.state"
                      value={userData.permanentAddress.state}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-4">
                    <label className="mb-0">Country : </label>
                    <input
                      type="name"
                      className="form-control"
                      placeholder="Enter country"
                      name="permanentAddress.country"
                      value={userData.permanentAddress.country}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-4">
                    <label className="mb-0">Pincode : </label>
                    <input
                      type="name"
                      className="form-control"
                      placeholder="Enter pincode"
                      name="permanentAddress.pincode"
                      value={userData.permanentAddress.pincode}
                      onChange={handleChange}
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
    const { userData, setUserData } = useStateValue({});
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
      const fetchUserDetails = async () => {
        try {
          const response = await axios.get(
            `${apiList.UserDetailsAccountOpening}`, 
          );
          const data = response.data;

          if (response.status === 200) {
            setUserDetails(data);
          } else {
            toast.error("Error fetching user details");
          }
        } catch (error) {
          toast.error("Error fetching user details: " + error.message);
        }
      };

      fetchUserDetails();
    }, []);

    const handleChange = (e) => {
      setFormData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleCheckboxChange = () => {
      setIsCheckboxChecked(!isCheckboxChecked);
    };

    const handleNextClick = () => {
      if (isCheckboxChecked) {
        nextStep();
      } else {
        toast.error("Please agree to all fields before proceeding");
      }
    };

    return (
      <div className="mt-5 mb-5 account_opening_personal_details_1 account_opening_total_details">
        <h5>
          Welcome to{" "}
          <span style={{ color: "#f18121" }}>ROYAL ISLAMIC BANK</span>
        </h5>

        <div className="card p-4 account_opening_personal_details_1_card account_opening_total_details_card">
          <div className="text-center mb-3">
            <h1>View Your Details</h1>
          </div>

          <div className="row">
            <div className="col-3">
              <label>
                <b>Name :</b>{" "}
              </label>
              <p style={{ textTransform: "capitalize" }}>
                {userData.prefix} . {userData.firstname} {userData.lastname}
              </p>
            </div>
            <div className="col-3">
              <label>
                <b>Father Name :</b>{" "}
              </label>
              <p style={{ textTransform: "capitalize" }}>
                {userData.fathername}
              </p>
            </div>
            <div className="col-3">
              <label>
                <b>Mother Name :</b>{" "}
              </label>
              <p style={{ textTransform: "capitalize" }}>
                {userData.mothername}
              </p>
            </div>
            <div className="col-3">
              <label>
                <b>
                  Gaurdian Name :{" "}
                  <em style={{ fontSize: "7px", color: "rgb(102 101 101)" }}>
                    (optional)
                  </em>
                </b>{" "}
              </label>
              <p style={{ textTransform: "capitalize" }}>
                {userData.gaurdianname}
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-3">
              <label>
                <b>Aadhaar Number :</b>{" "}
              </label>
              <p style={{ textTransform: "capitalize" }}>
                {userData.aadharnumber}
              </p>
            </div>
            <div className="col-3">
              <label>
                <b>PAN Number :</b>{" "}
              </label>
              <p style={{ textTransform: "uppercase" }}>{userData.pannumber}</p>
            </div>
            <div className="col-3">
              <label>
                <b>Contact Number :</b>{" "}
              </label>
              <p style={{ textTransform: "capitalize" }}>
                {userData.mobilenumber}
              </p>
            </div>
          </div>

          <div className="row mt-3 ">
            <div className="col-3">
              <label>
                <b>Flat/House No :</b>{" "}
              </label>
              <p style={{ textTransform: "capitalize" }}>
                {userData.currentAddress.flatnumber}
              </p>
            </div>
            <div className="col-3">
              <label>
                <b>Building name :</b>{" "}
              </label>
              <p style={{ textTransform: "capitalize" }}>
                {userData.currentAddress.buildingname}
              </p>
            </div>
            <div className="col-3">
              <label>
                <b>Landmark/Street :</b>{" "}
              </label>
              <p style={{ textTransform: "capitalize" }}>
                {userData.currentAddress.landmark}
              </p>
            </div>
            <div className="col-3">
              <label>
                <b>City :</b>{" "}
              </label>
              <p style={{ textTransform: "capitalize" }}>
                {userData.currentAddress.city}
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-3">
              <label>
                <b>State :</b>{" "}
              </label>
              <p style={{ textTransform: "capitalize" }}>
                {userData.currentAddress.state}
              </p>
            </div>
            <div className="col-3">
              <label>
                <b>Country</b>{" "}
              </label>
              <p style={{ textTransform: "capitalize" }}>
                {userData.currentAddress.country}
              </p>
            </div>
            <div className="col-3">
              <label>
                <b>Pin-code :</b>{" "}
              </label>
              <p style={{ textTransform: "capitalize" }}>
                {userData.currentAddress.pincode}
              </p>
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
            onClick={handleNextClick}
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

  // Step 5 Content
  const Step5Content = ({ prevStep, reset, formData, setFormData }) => {
    const navigate = useNavigate();
    const { userData, setUserData } = useStateValue({});

    const [isCheckboxChecked1, setIsCheckboxChecked1] = useState(false);

    console.log(userData);
    const handleCheckboxChange1 = (e) => {
      const isChecked = e.target.checked;
      setIsCheckboxChecked1(isChecked);
      setUserData((prevUserData) => {
        console.log(prevUserData); // Log previous state
        return { ...prevUserData, [e.target.name]: isChecked ? "yes" : "no" };
      });
    };
   

    const handleNextClick1 = () => {
      if (isCheckboxChecked1) {
        handleSubmit();
        navigate('/account-success');
      } else {
        toast.error("Please agree to all declarations");
      }
    };
    

    const handleSubmit = async (e) => {
      // e.preventDefault();

      try {
        const response = await fetch(`${apiList.UserDetailsAccountOpening}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        const data = await response.json();
        console.log(response);
        if (response.status === 200) {
          // toast.success("Account Created successfully!");
          navigate("/account-success");
          console.log("User created successfully:", data.newUser);
          navigate("/account-success");
        } else if (response.status === 402) {
          console.log("User already exists:", data.message);
        } else {
          console.log("Error:", data.message);
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
      console.log(userData);
    };

    console.log("hellooo");

    return (
      <div className="mt-5 mb-5 account_opening_personal_details_1 account_opening_total_details">
        <h5>
          Welcome to{" "}
          <span style={{ color: "#f18121" }}>ROYAL ISLAMIC BANK</span>
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
              name="declaration"
              onChange={handleCheckboxChange1}
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
          <Step4Content
            prevStep={prevStep}
            nextStep={nextStep}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 4:
        return (
          <Step5Content
            prevStep={prevStep}
            reset={reset}
            formData={formData}
            setFormData={setFormData}
          />
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <StateProvider>
        <div className="row">
          <div className="col-12">
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
  );
}

