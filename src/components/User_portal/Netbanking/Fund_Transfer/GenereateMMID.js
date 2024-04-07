import React from "react";
import Select from "react-select";
import "./FundTransfer.css";
import PaymentSidebar from "../Sidebar/PaymentsAndTransferSidebar";

const GenerateMMID = () => {
  return (
    <div
      className="card-details-container container-fluid"
      style={{ marginTop: "90px" }}
    >
      <div className="card-details-header"></div>
      <div className="row">
        <div className="col-3">
          <PaymentSidebar />
        </div>
        <div className="col-9 p-2 mt-4 generate_retrive_code">
          <div className="container-fluid">
            <h2 style={{color:"#2fb68e"}}>Inquire On IMPS Registration</h2>
            <div className="card ">
              <h6
                style={{
                  background: "#2fb68e",
                  color: "white",
                  padding: "10px",
                }}
              >
                {" "}
                Funds Transfer-Other Account Using IMPS(24*7)across India
              </h6>

              <div className=" p-3">
                <div className="row mt-3">
                  <div className="col-sm-4 generate_retrive_note">
                    <label for="card-number">
                      Select Royal Islamic Bank Account *
                    </label>
                  </div>
                  <div className="col-sm-4 generat_mmd_input">
                    {/* <Select
                      name=""
                      id=""
                      options={[
                        { value: "Please Select", label: "Please Select " },
                      ]}
                      styles={{
                        control: (provided) => ({
                          ...provided,
                          outline: "none",
                          boxShadow: "none",
                        }),
                      }}
                    /> */}
                     <select className='form-control transaction_statement_option'>
                            
                                    <option value='deposit'>Please Select</option>
                                </select>
                  </div>
                </div>

                <div className="col-sm-12 mt-4 ">
                  <button className=" generate_retrive_mern">
                    GENERATE RETRIVE MMID
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateMMID;
