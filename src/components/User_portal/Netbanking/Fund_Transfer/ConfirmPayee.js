import React from "react";
import PaymentSidebar from "../Sidebar/PaymentsAndTransferSidebar";

const ConfirmPayee = () => {
  return (
    <div  class="container-fluid" style={{marginTop:"90px"}}>
      <div class="row">
        <div class="col-3" >
          <PaymentSidebar/>
        </div>
        <div style={{ textAlign: "start" }} class="col-9">
          <h6 style={{ fontFamily: "poppins" }}>
            After other bank payee add now
          </h6>
          <div
            style={{
              color: "orange",
              textAlign: "start",
              fontSize: "15px",
              fontWeight: "600",
              fontFamily: "poppins",
            }}
          >
            Confirm Payee/Biller
          </div>
          <hr style={{ borderColor: "black" }}></hr>
          <div
            style={{
              justifyContent: "flex-start",
              backgroundColor: "darkgrey",
              padding: "5px",
            }}
          >
            <div class="row">
              <div
                class="col-md-1"
                style={{
                  color: "orange",
                  paddingRight: "40px",
                  fontFamily: "poppins",
                }}
              >
                <h6>DETAILS</h6>{" "}
              </div>
              <div
                style={{ textAlign: "start", fontFamily: "poppins" }}
                class="col-md-11"
              >
                {" "}
                <h6>
                  <span>
                    <i class="fa-solid fa-play"></i>
                  </span>{" "}
                  Confirmation{" "}
                </h6>
              </div>
            </div>
            <hr style={{ borderColor: "white" }}></hr>
            <div class="row">
              <div class="col-md-4">
                <h6 style={{ fontFamily: "poppins" }}>Add Other Bank Payee</h6>{" "}
              </div>
              <div
                style={{
                  textAlign: "end",
                  fontFamily: "poppins",
                  fontWeight: "400",
                }}
                class="col-md-8"
              >
                {" "}
                <p>+View Payee List</p>{" "}
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "lightgray",
              justifyContent: "flex-start",
              padding: "25px",
            }}
          >
            <div class="row mb-3">
              <div
                style={{
                  width: "250px",
                  fontFamily: "poppins",
                  fontWeight: "500",
                  fontSize: "14px",
                }}
                clas="col-md-2"
              >
                <p>Payee Account Number*</p>
              </div>
              <div clas="col-md-10">
                <input
                  style={{ width: "350px", height: "33px" }}
                  type="text"
                ></input>
              </div>
            </div>
            <div class="row mb-3">
              <div
                style={{
                  width: "250px",
                  fontFamily: "poppins",
                  fontWeight: "500",
                  fontSize: "14px",
                }}
                clas="col-md-2"
              >
                <p>Payee Nick Name*</p>
              </div>
              <div style={{ width: "190px" }} clas="col-md-10">
                <input
                  style={{ width: "350px", height: "33px" }}
                  type="text"
                ></input>
              </div>
            </div>
            <div class="row mb-3">
              <div
                style={{
                  width: "250px",
                  fontFamily: "poppins",
                  fontWeight: "500",
                  fontSize: "14px",
                }}
                clas="col-md-2"
              >
                <p>Account Type*</p>
              </div>

              <div clas="col-md-10">
                <select
                  style={{
                    width: "350px",
                    height: "36px",
                    fontFamily: "poppins",
                    background: "white",
                    fontSize: "14px",
                  }}
                >
                  <option value="savings">Please Select</option>
                  <option value="savings">Savings</option>
                  <option value="current">Current</option>
                  <option value="salary">Salary</option>
                </select>
              </div>
            </div>
            <div class="row mb-3">
              <div
                style={{
                  width: "250px",
                  fontFamily: "poppins",
                  fontWeight: "500",
                  fontSize: "14px",
                }}
                clas="col-md-2"
              >
                <p>Enter Payee Bank IFSC Code*</p>
              </div>
              <div clas="col-md-6">
                <input
                  style={{
                    width: "350px",
                    fontFamily: "poppins",
                    height: "33px",
                  }}
                  type="text"
                ></input>
              </div>
              <div class="col-md-2">
                <button
                  style={{
                    backgroundColor: "orange",
                    fontFamily: "poppins",
                    color: "white",
                    border: "none",
                    fontWeight: "500",
                    fontSize: "14px",
                    height: "30px",
                  }}
                >
                  SEARCH
                </button>
              </div>
            </div>{" "}
            <div class="row mb-3">
              <div
                style={{
                  width: "250px",
                  fontFamily: "poppins",
                  fontWeight: "500",
                  fontSize: "14px",
                }}
                clas="col-md-2"
              >
                <p>Payee Account Number*</p>
              </div>
              <div clas="col-md-10">
                <input
                  style={{ width: "350px", height: "33px" }}
                  type="text"
                ></input>
              </div>
            </div>
            <div class="row mb-3">
              <div
                style={{
                  width: "250px",
                  fontFamily: "poppins",
                  fontWeight: "500",
                  fontSize: "14px",
                }}
                clas="col-md-2"
              >
                <p>Confirm Payee Account Number*</p>
              </div>
              <div clas="col-md-3">
                <input
                  style={{ width: "280px", height: "33px" }}
                  type="text"
                ></input>
              </div>
              <div
                clas="col-md-2"
                style={{
                  fontFamily: "poppins",
                  marginLeft: "10px",
                  fontWeight: "500",
                  fontSize: "14px",
                  paddingTop: "5px",
                }}
              >
                <p>Avoid sending moneny to wrong payee.</p>
              </div>
              <div
                clas="col-md-3"
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  fontFamily: "poppins",
                  textAlign: "end",
                  color: "orange",
                  marginLeft: "10px",
                  paddingTop: "5px",
                }}
              >
                <p>Validation now?</p>
              </div>
            </div>
            <div
              class="row mb-3"
              style={{
                fontWeight: "500",
                fontSize: "14px",
                fontFamily: "poppins",
              }}
            >
              <p>Provide Payee Bank Details</p>
            </div>
            <div class="row mb-3">
              <div
                style={{
                  width: "250px",
                  fontFamily: "poppins",
                  fontWeight: "500",
                  fontSize: "14px",
                }}
                clas="col-md-2"
              >
                <p>Payee Registration alert to be sent on mobile number*</p>
              </div>

              <div clas="col-md-10">
                <input
                  style={{ width: "350px", height: "33px" }}
                  placeholder="XXXXXXXXXXX2621"
                  type="text"
                ></input>
              </div>
            </div>
            <div class="row">
              <div class="col-md-2" style={{ marginBottom: "5px" }}>
                <p
                  style={{
                    paddingBottom: "1px",
                    marginTop: "-2px",
                    fontFamily: "poppins",
                    paddingLeft: "-5px",
                  }}
                >
                  *mandatory
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "darkgrey",
              padding: "10px",
              flexDirection: "row",
            }}
          >
            <button
              style={{
                border: "none",
                width: "75px",
                height: "35px",
                fontFamily: "poppins",
                fontWeight: "500",
                fontSize: "14px",
              }}
            >
              Back
            </button>
            <button
              style={{
                backgroundColor: "orange",
                color: "white",
                marginLeft: "30px",
                width: "75px",
                border: "none",
                height: "35px",
                fontFamily: "poppins",
                fontWeight: "500",
                fontSize: "14px",
              }}
            >
              Next
            </button>
          </div>
          <div
            style={{
              backgroundColor: "white",
              padding: "1px",
              marginTop: "-5px",
            }}
          >
            <div style={{ fontSize: "12px", fontFamily: "poppins" }}>
              <p>Notes:</p>
            </div>
            <div style={{ padding: "0px", margin: "0px" }}>
              <p style={{ marginBottom: "0px", fontFamily: "poppins" }}>
                1. As per the RBI circular dated Oct 14, 2010, transfer of funds
                through electronic mode will be executed only on the basis of
                the account number of the beneficiary provided while initiating
                the transaction, name will not be considered as a criteria for
                providing credit Kindly ensure that you enter the correct
                beneficiary account number.
              </p>
              <p style={{ marginBottom: "0px", fontFamily: "poppins" }}>
                2. A maximum of 10 Payees can be added in one day
              </p>
              <p style={{ marginBottom: "0px", fontFamily: "poppins" }}>
                3. Waiting period post Payee addition is 30 minutes 4. Payee
                Name can be upto a maximum of 40 characters
              </p>
              <p style={{ marginBottom: "0px", fontFamily: "poppins" }}>
                4. Ensure that the Payee Account Number entered by you is
                correct
              </p>
              <p style={{ marginBottom: "0px", fontFamily: "poppins" }}>
                5. ICICI Bank does not take any responsibility and shall not be
                liable for claims on incorrect details entered
              </p>
              <p style={{ marginBottom: "0px", fontFamily: "poppins" }}>
                6. All the interbank transfers are executed using the Reserve
                Bank of India's 'Inter Bank Transfer scheme. The actual time
                taken to credit the account depends on the time taken by the
                Payee's bank to process the payment The amount will reach the
                Payee's bank within the time stipulated by the Reserve Bank of
                India.
              </p>
              <p style={{ marginBottom: "0px", fontFamily: "poppins" }}>
                7. To check NEFT/RTGS timings and transaction limit, please
                click here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPayee;
