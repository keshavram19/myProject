import { useState } from "react";
import "./FundTransfer.css";
import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { GrMoney } from "react-icons/gr";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { MdManageAccounts } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { BsSendFill } from "react-icons/bs";
import PaymentSidebar from "../Sidebar/PaymentsAndTransferSidebar";

const Mypayee = () => {
  const [activeTab, setActiveTab] = useState("mypayee");
  return (
    <>
      
      <div className="container-fluid" style={{ marginTop: "90px" }}>
        <div className="row">
          <div className="col-3">
          <PaymentSidebar/>
          </div>
          <div className="col-9">
          <p className="mypayee_heading">Fund Transfer</p>
      <div className="mypayee_navmain">
        <li
          className={activeTab === "mypayee" ? "mypayee_buttonon" : ""}
          onClick={() => setActiveTab("mypayee")}
        >
          <HiOutlineCurrencyRupee className="mypayee_icons" />
          My Payees
        </li>
        <li
          className={activeTab === "ownaccounts" ? "mypayee_buttonon" : ""}
          onClick={() => setActiveTab("ownaccounts")}
        >
          <GrMoney className="mypayee_icons" />
          Own Accounts&Pockets
        </li>
        <li
          className={activeTab === "mobile" ? "mypayee_buttonon" : ""}
          onClick={() => setActiveTab("mobile")}
        >
          <FaMobileScreenButton className="mypayee_icons" />
          Mobile (via MMID)
        </li>
        <li
          className={activeTab === "overseas" ? "mypayee_buttonon" : ""}
          onClick={() => setActiveTab("overseas")}
        >
          <FaGlobe className="mypayee_icons3" />
          Overseas Transfer
        </li>
        <li
          className={activeTab === "request" ? "mypayee_buttonon" : ""}
          onClick={() => setActiveTab("request")}
        >
          <GiReceiveMoney className="mypayee_icons4" />
          Request Money From Overseas
        </li>
      </div>

      {activeTab === "mypayee" && (
        <div className="container-fluid mypayee_content">
          <div className="mypayee_text">
            <div>
              Doing a one time transfer?Use quick transfer upto 25000 no need to
              add payee <span className="mypayee_click">Click here</span>
            </div>
          </div>
          <h5>Select Payee</h5>
          <div className=" mypayee_addmain">
            <div className="mypayee_input ">
              <div>
                <FaSearch className="mypayee_search" />
              </div>
              <div className="mypayee_input1">
                <input
                  type="text"
                  className=" mypayee_input22"
                  placeholder="Search for Payee by name,account,mobile number.."
                ></input>
              </div>
            </div>
            <div className="mypayee_or">OR</div>
            <div className="mypayee_add">
              <button className="mypayee_addbtn">
                <FaPlus />
                ADD NEW PAYEE
              </button>
            </div>
          </div>
        </div>
      )}
      {activeTab === "ownaccounts" && (
        <div
          className="row"
          style={{
            backgroundColor: "lightgrey",
            paddingBottom: "80px",
            paddingLeft: "15px",
          }}
        >
          <div
            className="row"
            style={{ marginTop: "30px", marginLeft: "0px" }}
          ></div>
          <div className="row" style={{ marginTop: "50px", marginLeft: "5px" }}>
            <div className="col-md-6">
              <h6>From Account</h6>
              <select style={{ width: "300px" }}>
                <option value="" disabled selected>
                  Please select
                </option>
                <option value="0">Savings</option>
                <option value="1">Current</option>
                <option value="2">Salary</option>
              </select>
              <p
                style={{
                  color: "darkorange",
                  fontSize: "500",
                  fontFamily: "poppins",
                  fontWeight: "500",
                  marginTop: "5px",
                }}
              >
                Total available amount is ₹
              </p>
            </div>
            <div className="col-md-6">
              <h6>To Account</h6>
              <select style={{ width: "290px" }}>
                <option value="" disabled selected>
                  {" "}
                  Please select
                </option>
                <option value="0">Savings</option>
                <option value="1">Current</option>
                <option value="2">Salary</option>
              </select>
            </div>
          </div>

          <div className="row" style={{ marginTop: "50px" }}>
            <div className="col-md-6">
              <h6>Amount</h6>
              <input
                type="$"
                placeholder="$"
                style={{ width: "300px" }}
              ></input>
            </div>
            <div className="col-md-6">
              <h6>Remarks(optional)</h6>
              <input type="" style={{ width: "300px" }}></input>
              <div>
                <button
                  style={{
                    backgroundColor: "orange",
                    marginTop: "30px",
                    marginLeft: "150px",
                    padding: "0px 40px 0px 40px",
                    borderRadius: "5px",
                  }}
                >
                  PROCEED
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "mobile" && (
        <div>
          <div className="container-fluid">
            <div className="row"></div>
            <hr></hr>
            <div
              className="row"
              style={{
                backgroundColor: "lightgrey",
                paddingBottom: "80px",
                paddingLeft: "15px",
              }}
            >
              <div
                className="row"
                style={{ marginTop: "30px", marginLeft: "0px" }}
              ></div>
              <div
                className="row"
                style={{ marginTop: "50px", marginLeft: "5px" }}
              >
                <div className="col-md-6">
                  <h6>From Account</h6>
                  <select style={{ width: "300px" }}>
                    <option value="" disabled selected>
                      Please select
                    </option>
                    <option value="0">Savings</option>
                    <option value="1">Current</option>
                    <option value="2">Salary</option>
                  </select>
                  <p
                    style={{
                      color: "darkorange",
                      fontSize: "500",
                      fontFamily: "poppins",
                      fontWeight: "500",
                      marginTop: "5px",
                    }}
                  >
                    Totalavailableamountis₹
                  </p>
                </div>
              </div>

              <div className="row" style={{ marginTop: "50px" }}>
                <div className="col-md-6">
                  <p>Payee mobile number</p>
                  <h6>Amount</h6>
                  <input
                    type="$"
                    placeholder="$"
                    style={{ width: "300px" }}
                  ></input>
                </div>
                <div className="col-md-6">
                  <p>To payee MMID</p>
                  <h6>Remarks(optional)</h6>
                  <input type="" style={{ width: "300px" }}></input>
                  <div>
                    <button
                      style={{
                        backgroundColor: "orange",
                        marginTop: "30px",
                        marginLeft: "150px",
                        padding: "0px 40px 0px 40px",
                        borderRadius: "5px",
                      }}
                    >
                      PROCEED
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h6>Note:</h6>
            <p className="mobile-class">
              1.As per the RBI circular dated Oct 14,2010,transfer of funds
              through electronic mode will be executed only on the basis of the
              accounts number of the beneficiary provided while initiating the
              transaction,name will not be considered as a criteria for
              providing credit.Kindly ensure that enter the correct benificiary
              account number.
            </p>
            <p className="mobile-class">
              2.ICICI Bank is not responsible for
              <li>Funds transfered to any unauthorised recipient.</li>
              <li>
                Retriveal of funds transfered to any unauthorised receipient.
              </li>
              <li>
                Charges/Commision of any kind levied/charged by the payee's
                bank.
              </li>
            </p>
            <p className="mobile-class">
              3.ICICI Bank has the most comprehensive security standards in
              place to protect your interests.As the same time,we expect you to
              follow safe practices while using the internet Banking Channel.You
              are fully responsible for protecting your internet Banking User ID
              and Passwords.ICICI Bank will not be able for any loss that you
              may incur owing to unauthorised access into your account.
            </p>
          </div>
        </div>
      )}

       {activeTab === "overseas" && (
       <div className='container-fuild'>
        
       <div className='overseas-row1'>
           <p style={{color:'darkorange'}}>Royal Islamic Bank Money2World brings to you the following benefits:</p>
           <div className="overseas_path">
           <div>
           <p><a className="overseas_bank">☑</a>Confirmed exchange rate</p>
           <p><a className="overseas_bank">☑</a>Online Tracking of your money transfer</p>
           </div>
           
           <div>
            <p><a className="overseas_bank">☑</a>One time beneficiary registration</p>
           <p><a className="overseas_bank">☑</a>Simple transaction steps</p>
           </div>

           </div>

           <div> 
               <p style={{color:'darkorange'}}>Send money abroad in three steps: </p>
           </div>
           <div className="overseas_add-path">
           <p><a className="overseas_sign"><MdManageAccounts/></a>Add your beneficiary's Bank Account</p>
          
           <p><a className="overseas_sign"><FaRupeeSign/></a>Specify the amount to initiate transfer</p>
          
           <p><a className="overseas_sign"><BsSendFill/></a>Find the transfer from your bank account</p>
          </div>

          <div><p>Go ahead,experience the ease of tranfering money abroad with Royal Islamic Bank Money2World </p></div>
          <div>
           <p>For any queries,Please feel free to contact us at  <u style={{color:'darkorange'}}>Customer Care</u> </p>
          </div>
          </div>
       <div className='row' style={{marginTop:'30px', marginLeft:'0px'}}></div>
       </div>
    
   
      )}

       {activeTab === "request" && (
         <>
                
            
                <hr></hr>
            <div className='row' style={{backgroundColor:'lightgrey', paddingBottom:'80px' }}>
            <div className='row' >
              
              <p>You can request money from overseas through Money2India. Money2India is an online transfer tracking service by Royal Islamic<br></br>
                Bank for sending money from overseas to India.
              </p>
              
              
            </div>
            <div className='row' style={{marginTop:'50px',}}>
              <div className="money_request">
              <div className="request_money_1">
              <div className='col-md-12'>
              
              <h6>Amount Required</h6>
              <input type='$' placeholder='$' style={{width:'300px'}}></input>
              </div>
              <div className='col-md-12'>
              <h6>Account to be credited</h6>
             <select style={{width:'300px',height:'30px'}} >
                <option value="" disabled selected> Please select</option>
                <option value="0">100</option>
                <option value="1">1000</option>
                <option value="2">10000</option>
             </select>
              </div>
            
                
            <div className='row'>
              <div className='col-md-12'>
              <h6>Name of the Payer</h6>
            <input type='' placeholder='' style={{width:'300px'}}></input>
              </div>
              </div>
              </div>
              <div className="money_request_2">
              <div className='col-md-12'>
              <h6>Email id of the Payer</h6>
            <input type='' style={{width:'300px'}}></input>
            <div>
              <div className='col-md-12'>
              <h6>Purpose of Request</h6>
            <input type='' style={{width:'300px'}}></input>
            </div>

            <div className='col-md-12'>
              <h6>Country of Payer</h6>
             <select style={{width:'300px',height:'30px'}} >
                <option value="" disabled selected> Please select</option>
                <option value="0">America</option>
                <option value="1">London</option>
                <option value="2">Germany</option>
             </select>
              </div>
              </div>
              </div>
             <button style={{backgroundColor:'goldenrod', marginTop:'30px', marginLeft:'300px', padding:'0px 40px 0px 40px', borderRadius:'5px'}}>SUBMIT</button>
             </div>
              </div>
            </div>
         </div>
              
                 <h5>Notes:</h5>
                 <p>1 An email wil be sent to your payer intimating them of your request</p>
                 <p>2 You can track the request through Customer Service, Service Request, Status of your request</p>
                 <p>* You can request money only from payers in US</p>
             </>
             
             

    
   
      )}
          </div>

        </div>
      </div>
      
    </>
  );
};

export default Mypayee;



                 