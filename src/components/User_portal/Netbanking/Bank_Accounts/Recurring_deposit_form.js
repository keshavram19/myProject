import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { Axios } from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../../../Images/RIB White logo (1).png";

const RecurringForm = () => {
    const[RecurringdepositAccountNumber,setRecurringdepositAccountNumber]= useState("");
    const[RecurringdepositTitle,setRecurringdepositTitle]= useState("");
    const[RecurringdepositFirstname,setRecurringdepositFirstname]= useState("");
    const[RecurringdepositMiddlename,setRecurringdepositMiddlename]= useState("");
    const[RecurringdepositSurname,setRecurringdepositSurname]= useState("");
    const[RecurringdepositDateOfBirth,setRecurringdepositDateOfBirth]= useState("");
    const[RecurringdepositMobileNumber,setRecurringdepositMobileNumber]= useState("");
    const[RecurringdepositEmailId,setRecurringdepositEmailId]= useState("");
    const[RecurringdepositLine1,setRecurringdepositLine1]= useState("");
    const[RecurringdepositLine2,setRecurringdepositLine2]= useState("");
    const[RecurringdepositTown,setRecurringdepositTown]= useState("");
    const[RecurringdepositCountry,setRecurringdepositCountry]= useState("");
    const[RecurringdepositPostcode,setRecurringepositPostcode]= useState("");
    const[RecurringdepositAmount,setRecurringdepositAmount]= useState('');
    const[RecurringdepositTermyears,setRecurringdepositTermyears]= useState("");
    const[RecurringdepositTermmonths,setRecurringdepositTermmonths]= useState("");
    const[RecurringdepositTermdays,setRecurringdepositTermdays]= useState('');
    const[RecurringdepositInterestrate,setRecurringdepositInterestrate]= useState("");
    const[RecurringdepositInterestpay,setRecurringdepositInterestpay]= useState('');
    const[RecurringdepositBankname,setRecurringdepositBankname]= useState('');

    const[RecurringNomineeTitle,setRecurringNomineeTitle]= useState('');
    const[RecurringNomineeFirstname,setRecurringNomineeFirstname]= useState('');
    const[RecurringNomineeMiddlename,setRecurringNomineeMiddlename]= useState('');
    const[RecurringNomineeSurname,setRecurringNomineeSurname]= useState('');
    const[RecurringNomineeDateOfBirth,setRecurringNomineeDateOfBirth]= useState('');
    const[RecurringNomineeMobileNumber,setRecurringNomineeMobileNumber]= useState('');
    const[RecurringNomineeEmailId,setRecurringNomineeEmailId]= useState('');
    const[RecurringNomineeLine1,setRecurringNomineeLine1]= useState('');
    const[RecurringNomineeLine2,setRecurringNomineeLine2]= useState('');
    const[RecurringNomineeTown,setRecurringNomineeTown]= useState('');
    const[RecurringNomineeCountry,setRecurringNomineeCountry]= useState('');
    const[RecurringNomineePostcode,setRecurringNomineePostcode]= useState('');

   

    let navigate = useNavigate();
    const [data, setdata] = useState([]);
  
    const usersData = {
        RecurringdepositAccountNumber: RecurringdepositAccountNumber,
                RecurringdepositTitle: RecurringdepositTitle,
                RecurringdepositFirstname: RecurringdepositFirstname,
                RecurringdepositMiddlename: RecurringdepositMiddlename,
                RecurringdepositSurname: RecurringdepositSurname,
                RecurringdepositDateOfBirth: RecurringdepositDateOfBirth,
                RecurringdepositMobileNumber: RecurringdepositMobileNumber,
                RecurringdepositEmailId: RecurringdepositEmailId,
                RecurringdepositLine1: RecurringdepositLine1,
                RecurringdepositLine2: RecurringdepositLine2,
                RecurringdepositTown: RecurringdepositTown,
                RecurringdepositCountry: RecurringdepositCountry,
                RecurringdepositPostcode: RecurringdepositPostcode,
                RecurringdepositAmount: RecurringdepositAmount,
                RecurringdepositTermyears: RecurringdepositTermyears,
                RecurringdepositTermmonths: RecurringdepositTermmonths,
                RecurringdepositTermdays: RecurringdepositTermdays,
                RecurringdepositInterestrate: RecurringdepositInterestrate,
                RecurringdepositInterestpay: RecurringdepositInterestpay,
                RecurringdepositBankname: RecurringdepositBankname,
                RecurringNomineeTitle:RecurringNomineeTitle,
                RecurringNomineeFirstname: RecurringNomineeFirstname,
                RecurringNomineeMiddlename: RecurringNomineeMiddlename,
                RecurringNomineeSurname: RecurringNomineeSurname,
                RecurringNomineeDateOfBirth: RecurringNomineeDateOfBirth,
                RecurringNomineeMobileNumber: RecurringNomineeMobileNumber,
                RecurringNomineeEmailId: RecurringNomineeEmailId,
                RecurringNomineeLine1: RecurringNomineeLine1,
                RecurringNomineeLine2: RecurringNomineeLine2,
                RecurringNomineeTown: RecurringNomineeTown,
                RecurringNomineeCountry: RecurringNomineeCountry,
                RecurringNomineePostcode:RecurringNomineePostcode,

    };
    const onSubmitForm = (e) => {
        e.preventDefault();
    
        if (
            RecurringdepositAccountNumber && RecurringdepositTitle && RecurringdepositFirstname && RecurringdepositMiddlename && RecurringdepositSurname && RecurringdepositDateOfBirth &&
            RecurringdepositMobileNumber &&  RecurringdepositEmailId && RecurringdepositLine1 && RecurringdepositLine2 && RecurringdepositTown && RecurringdepositCountry && RecurringdepositPostcode && RecurringdepositAmount && RecurringdepositTermyears &&
            RecurringdepositTermmonths && RecurringdepositTermdays && RecurringdepositInterestrate && RecurringdepositInterestpay && RecurringdepositBankname && RecurringNomineeTitle && RecurringNomineeFirstname && RecurringNomineeMiddlename && RecurringNomineeSurname && RecurringNomineeDateOfBirth && RecurringNomineeMobileNumber &&
            RecurringNomineeEmailId && RecurringNomineeLine1 && RecurringNomineeLine2 && RecurringNomineeTown && RecurringNomineeCountry && RecurringNomineePostcode !== ""
        ) {
          axios
            .post("http://localhost:4444/api/rdformdetails", usersData)
            .then((response) => {
              console.log(response.data);
              setdata(response.data);
              console.log(response.data);
              if (response.status === 200) {
                toast.success("RD form submit Successful", {
                  position: "top-center",
                  autoClose: 1000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
    
                setTimeout(function () {
                  navigate("/user/account/reccuring-deposits");
                }, 3000);
              }
            })
            .catch((error) => {
              toast.error("RD already Done: please select proper Account number", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
              console.log(error);
            });
        } else {
          toast.warning("Enter the Required Details");
    
        }
      };
    

    return (
        <>
            <div className="container-fluid fdform_main" style={{ marginTop: '50px'}}>
                <div className="row">
                   
                    <div className="col-md-2  p-0 m-0">
                    <img src={logo} alt="" style={{ width: "170px" }} />
                    </div>
                    
                    <div className="col-md-10 d-flex  p-0 m-0" style={{justifyContent:"center",alignItems:"center"}}>
                        <h2 className='fdform_rightheading'>Recurring Deposit Account Opening Form</h2>
                    </div>
                </div>
                <hr style={{ border: '3px solid #ebca28' }}></hr>
                <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
                {/* Same as */}
                <ToastContainer />
                <form onSubmit={onSubmitForm}>
                <div className='p-2' >
            
                    <label  for="savingsAccountNumber" className='form-inline'>
                    <span className='col-md-3'>Account Number</span>
                    <input type='text' className='form-control  form-control-md col-md-3 w-100 fdform_accountnbrinput' onChange={(e) => setRecurringdepositAccountNumber(e.target.value)} value={RecurringdepositAccountNumber} placeholder="Enter Your Account Number"/>
                    </label>
                </div>
                <div className='row p-4 fdform_main_Container'>
                    <div className='col-md-6'>
                        <h4 className='mb-4 fdform_subheading'>Your Details (First Customer)</h4>
                       <div className="p-1">
                       <label style={{paddingRight:"15px"}}>Title:  </label>
                       <div className="form-check-inline " style={{fontSize:"15px"}}>
                            <label className="form-check-label" for='Email'>
                        <input type='radio' name="gender"  className="form-check-input " style={{marginTop:"4px"}}  onChange={(e) => setRecurringdepositTitle(e.target.value)} value="Mr"/>Mr
                        </label>
                        </div>
                        <div className="form-check-inline " style={{fontSize:"15px"}}>
                            <label className="form-check-label" for='Email'>
                        <input type='radio' name="gender"  className="form-check-input " style={{marginTop:"4px"}} onChange={(e) => setRecurringdepositTitle(e.target.value)} value="Mrs"/>Mrs
                        </label>
                        </div>
                        <div className="form-check-inline " style={{fontSize:"15px"}}>
                            <label className="form-check-label" for='Email'>
                        <input type='radio' name="gender"  className="form-check-input " style={{marginTop:"4px"}}  onChange={(e) => setRecurringdepositTitle(e.target.value)} value="Ms"/>Ms
                        </label>
                        </div>
                        <div className="form-check-inline " style={{fontSize:"15px"}}>
                            <label className="form-check-label" for='Email'>
                        <input type='radio' name="gender"  className="form-check-input " style={{marginTop:"4px"}}  onChange={(e) => setRecurringdepositTitle(e.target.value)} value="Miss"/>Miss
                       </label>
                       </div>
                       <div className="form-check-inline " style={{fontSize:"15px"}}>
                            <label className="form-check-label" for='Email'>
                        <input type='radio' name="gender"  className="form-check-input " style={{marginTop:"4px"}}  onChange={(e) => setRecurringdepositTitle(e.target.value)} value="other"/>Other<br></br>
                       </label>
                       </div>

                        </div>
                        <div className="p-1">
                        <label className='form-inline'>First Name:</label>
                        <input type='text' className='form-control form-control-md w-75'  onChange={(e) => setRecurringdepositFirstname(e.target.value)} value={RecurringdepositFirstname}/>
                        </div>
                        <div className="p-1">
                        <label className='form-inline'>Middle Name:</label>
                        <input type='text' className='form-control form-control-md w-75' onChange={(e) => setRecurringdepositMiddlename(e.target.value)} value={RecurringdepositMiddlename}/>
                        </div>
                        <div className="p-1">
                        <label className='form-inline'>Surname:</label>
                        <input type='text' className='form-control form-control-md w-75' onChange={(e) => setRecurringdepositSurname(e.target.value)} value={RecurringdepositSurname}/>
                        </div>
                        <div className="p-1">
                        <label className='form-inline'>Date of Birth:</label>
                        <input type='Date' className='form-control form-control-md w-75' onChange={(e) => setRecurringdepositDateOfBirth(e.target.value)} value={RecurringdepositDateOfBirth}/>
                       </div>
                       <div className="p-1">
                        <label className='form-inline'>Mobile Number:</label>
                        <input type='Text' className='form-control form-control-md w-75' onChange={(e) => setRecurringdepositMobileNumber(e.target.value)} value={RecurringdepositMobileNumber}/>
                        </div>
                        <div className="p-1">
                        <label className='form-inline'>Email:</label>
                        <input type='text' className='form-control form-control-md w-75' onChange={(e) => setRecurringdepositEmailId(e.target.value)} value={RecurringdepositEmailId}/>
                        </div>
                        <label className='row' style={{ marginLeft: '1px' }}> Current Address:</label><br></br>
                        <div style={{color:"rgb(85, 84, 84)"}}>
                        <label className='form-inline'><span className="col-md-2">Line 1 </span>
                        <input type='text' className='form-control  form-control-md col-md-6 w-50' onChange={(e) => setRecurringdepositLine1(e.target.value)} value={RecurringdepositLine1}/><br></br>
                        </label>
                        <label className='form-inline'><span className="col-md-2">Line 2</span>
                        <input type='text' className='form-control  form-control-md col-md-6 w-50' onChange={(e) => setRecurringdepositLine2(e.target.value)} value={RecurringdepositLine2}/><br></br>
                        </label>
                        <label className='form-inline'> <span className="col-md-2">Town</span>
                        <input type='text' className='form-control  form-control-md col-md-6 w-50' onChange={(e) => setRecurringdepositTown(e.target.value)} value={RecurringdepositTown}/><br></br>
                        </label>
                        <label className='form-inline'><span className="col-md-2">Country</span>
                        <input type='text' className='form-control  form-control-md col-md-6 w-50' onChange={(e) => setRecurringdepositCountry(e.target.value)} value={RecurringdepositCountry}/>
                        </label>
                        <label className='form-inline'><span className="col-md-2">Postcode</span>
                        <input type='text' className='form-control  form-control-md col-md-6 w-50' onChange={(e) => setRecurringepositPostcode(e.target.value)} value={RecurringdepositPostcode}/>
                        </label>

                        </div>
                    </div>
                    <div className='col-6'>
                        <h4 className='mb-4 fdform_subheading'>Nominee Details (Second Customer)</h4>
                        <div className="p-1">
                        <label style={{paddingRight:"15px"}}>Title:  </label>
                        <div className="form-check-inline " style={{fontSize:"15px"}}>
                            <label className="form-check-label" for='Email'>
                        <input type='radio' name="nominee"  className="form-check-input " style={{marginTop:"4px"}} onChange={(e) => setRecurringNomineeTitle(e.target.value)} value="Mr"/>Mr
                        </label>
                        </div>
                        <div className="form-check-inline " style={{fontSize:"15px"}}>
                            <label className="form-check-label" for='Email'>
                        <input type='radio' name="nominee"  className="form-check-input " style={{marginTop:"4px"}} onChange={(e) => setRecurringNomineeTitle(e.target.value)} value="Mrs"/>Mrs
                        </label>
                        </div>
                        <div className="form-check-inline " style={{fontSize:"15px"}}>
                            <label className="form-check-label" for='Email'>
                        <input type='radio' name="nominee"  className="form-check-input " style={{marginTop:"4px"}} onChange={(e) => setRecurringNomineeTitle(e.target.value)} value="Ms"/>Ms
                        </label>
                        </div>
                        <div className="form-check-inline " style={{fontSize:"15px"}}>
                            <label className="form-check-label" for='Email'>
                        <input type='radio' name="nominee"  className="form-check-input " style={{marginTop:"4px"}} onChange={(e) => setRecurringNomineeTitle(e.target.value)} value="Miss"/>Miss
                        </label>
                        </div>
                        <div className="form-check-inline " style={{fontSize:"15px"}}>
                            <label className="form-check-label" for='Email'>
                        <input type='radio' name="nominee"  className="form-check-input " style={{marginTop:"4px"}} onChange={(e) => setRecurringNomineeTitle(e.target.value)} value="other"/>Other<br></br>
                       </label>
                       </div>
                       </div>
                       <div className="p-1">
                        <label className='form-inline'>First Name:</label>
                        <input type='text' className='form-control form-control-md w-75' onChange={(e) => setRecurringNomineeFirstname(e.target.value)} value={RecurringNomineeFirstname}/>
                        </div>
                        <div className="p-1">
                        <label className='form-inline'>Middle Name:</label>
                        <input type='text' className='form-control form-control-md w-75' onChange={(e) => setRecurringNomineeMiddlename(e.target.value)} value={RecurringNomineeMiddlename}/>
                       </div>
                        <div className="p-1">
                        <label className='form-inline'>Surname:</label>
                        <input type='text' className='form-control form-control-md w-75' onChange={(e) => setRecurringNomineeSurname(e.target.value)} value={RecurringNomineeSurname}/>
                        </div>
                        <div className="p-1">
                        <label className='form-inline'>Date of Birth:</label>
                        <input type='Date' className='form-control form-control-md w-75' onChange={(e) => setRecurringNomineeDateOfBirth(e.target.value)} value={RecurringNomineeDateOfBirth}/>
                        </div>
                        <div className="p-1">
                        <label className='form-inline'>Mobile Number:</label>
                        <input type='Text' className='form-control form-control-md w-75' onChange={(e) => setRecurringNomineeMobileNumber(e.target.value)} value={RecurringNomineeMobileNumber}/>
                        </div>
                        <div className="p-1">
                        <label className='form-inline'>Email:</label>
                        <input type='text' className='form-control form-control-md w-75'  onChange={(e) => setRecurringNomineeEmailId(e.target.value)} value={RecurringNomineeEmailId}/>
                        </div>
                        <label className=' row' style={{ marginLeft: '1px' }}> Current Address:</label><br></br>
                        <div style={{color:"rgb(85, 84, 84)"}}>
                        <label className='form-inline'><span className="col-md-2">Line 1 </span>
                        <input type='text' className='form-control  form-control-md col-md-6 w-50' onChange={(e) => setRecurringNomineeLine1(e.target.value)} value={RecurringNomineeLine1}/><br></br>
                        </label>

                         <label className='form-inline'><span className="col-md-2">Line 2 </span>
                        <input type='text' className='form-control  form-control-md col-md-6 w-50' onChange={(e) => setRecurringNomineeLine2(e.target.value)} value={RecurringNomineeLine2}/><br></br>
                        </label>
                        <label className='form-inline'> <span className="col-md-2">Town</span>
                        <input type='text' className='form-control  form-control-md col-md-6 w-50' onChange={(e) => setRecurringNomineeTown(e.target.value)} value={RecurringNomineeTown}/><br></br>
                        </label>
                        <label className='form-inline'><span className="col-md-2">Country</span>
                        <input type='text' className='form-control  form-control-md col-md-6 w-50' onChange={(e) => setRecurringNomineeCountry(e.target.value)} value={RecurringNomineeCountry}/>
                        </label>
                        <label className='form-inline'><span className="col-md-2">Postcode</span>
                        <input type='text' className='form-control  form-control-md col-md-6 w-50'onChange={(e) => setRecurringNomineePostcode(e.target.value)} value={RecurringNomineePostcode}/>
                        </label>
                    </div>

                    </div>

                </div>
                <div className='row p-4'>
                    <div className=''>
                        <h4 className='fdform_fundingheading text-center p-2' style={{backgroundColor:"#ebca28",marginBottom:"30px"}}>Funding</h4>
                        <p className="funding_para1 p-1">Please debit my/our RIB Savings/Current Account no. <input type='text' className="w-25" onChange={(e) => setRecurringdepositAccountNumber(e.target.value)} value={RecurringdepositAccountNumber}/> and transfer an amount of <input type='text' className=' w-10' onChange={(e) => setRecurringdepositAmount(e.target.value)} value={RecurringdepositAmount}/>to a Fixed Deposit Account as below:
                        </p>
                        <p className="funding_para1 p-1"> <span style={{fontWeight:"420",paddingRight:"10px"}}>Terms of deposit: </span>    Years <input className='w-10 p-1'  onChange={(e) => setRecurringdepositTermyears(e.target.value)} value={RecurringdepositTermyears}/>Months <input className='w-10 p-1'  onChange={(e) => setRecurringdepositTermmonths(e.target.value)} value={RecurringdepositTermmonths}/>Days <input className='w-10 p-1'  onChange={(e) => setRecurringdepositTermdays(e.target.value)} value={RecurringdepositTermdays}/>
                       </p>
                       
                       <label style={{fontWeight:"420",paddingRight:"10px"}} className="p-1">Rate of interest :</label>  <input className='w-10 p-1' style={{outline:"none",paddingLeft:"20px"}} onChange={(e) => setRecurringdepositInterestrate(e.target.value)} value={RecurringdepositInterestrate}/> %
                       <div className="p-2">
                       <label style={{fontWeight:"420",paddingRight:"10px"}} className="">Frequency of interest payable (please tick one)* :</label>
                        
                       <div className="form-check-inline " style={{fontSize:"15px"}}>
                            <label className="form-check-label" for='Email'>
                        <input type='radio' className='' name='interest' onChange={(e) => setRecurringdepositInterestpay(e.target.value)} value="Monthly"/>Monthly
                        </label>
                        </div>
                        <div className="form-check-inline " style={{fontSize:"15px"}}>
                            <label className="form-check-label" for='Email'>
                        <input type='radio' className='' name='interest' onChange={(e) => setRecurringdepositInterestpay(e.target.value)} value="Annually"/>Annually
                        </label>
                        </div>
                        <div className="form-check-inline " style={{fontSize:"15px"}}>
                            <label className="form-check-label" for='Email'>
                         <input type='radio' className='mx-2' name='interest' onChange={(e) => setRecurringdepositInterestpay(e.target.value)} value="Upon maturity"/>Upon Maturity
                        </label>
                        </div>
                         </div>
                    </div>
                    <div className=''>
                    <h4 className='fdform_fundingheading text-center p-2' style={{backgroundColor:"#ebca28",marginBottom:"30px"}}>Interest Payments</h4>
                        <p style={{fontWeight:"420"}}>If (A) or (B) from funding section,
                            Unless specified we will credit interest to your RIB UK account</p>
                        <p className="funding_para1 p-1">Please arrange to credit all or part of the interest on the fixed deposit to my / our RIB account number 
                        <input className='w-25' onChange={(e) => setRecurringdepositAccountNumber(e.target.value)} value={RecurringdepositAccountNumber}/>
                        Please arrange to pay an amount** of <input className='w-25' onChange={(e) => setRecurringdepositAmount(e.target.value)} value={RecurringdepositAmount}/>
                        to my/our account with Bank <input className='w-25' onChange={(e) => setRecurringdepositBankname(e.target.value)} value={RecurringdepositBankname}/>
                        out of the interest credited to my / our RIB account.</p>

                    </div>

                </div>
                <div className='row p-4'>
                    <div className=''>
                    <h4 className='fdform_fundingheading text-center p-2'style={{backgroundColor:"#ebca28",marginBottom:"30px"}}>Maturity Instructions</h4>
                        <p style={{fontWeight:"420"}}>Maturity instruction payment:</p>
                        <p style={{fontWeight:"420"}}>Either transfer to SBI UK Either transfer to SBI UK account</p>
                        <div className="row">
                            <div className="col-md-6">
                            <label className='form-inline'><span>Account Number</span> </label>
                            <input className='form-control form-control-md w-75' onChange={(e) => setRecurringdepositAccountNumber(e.target.value)} value={RecurringdepositAccountNumber}/>
                        </div>
                        <div className="col-md-6">
                        <label className='form-inline'><span>Bank name</span></label>
                        <input className='form-control form-control-md w-75'  onChange={(e) => setRecurringdepositBankname(e.target.value)} value={RecurringdepositBankname}/>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                            <label className='form-inline'><span>Account holder's name</span></label>
                        <input className='form-control form-control-md w-75' onChange={(e) => setRecurringdepositFirstname(e.target.value)} value={RecurringdepositFirstname}/><br></br>
                        </div>
                        <div className="col-md-6">
                            <label className='form-inline'><span>Date</span></label>
                        <input type='date' className='form-control form-control-md w-75' onChange={(e) => setRecurringdepositDateOfBirth(e.target.value)} value={RecurringdepositDateOfBirth}/>
                        </div>
                        </div>

                    </div>
                    <div className=''>
                    <h4 className='fdform_fundingheading text-center p-2' style={{backgroundColor:"#ebca28",marginBottom:"30px"}}>Confirmation</h4>
                        <p>I/we confirm that I/we have been provided with a copy of</p>
                        <div className="form-check">
                            <label className="form-check-label m-1">
                            <input type='checkbox'className="form-check-input"style={{backgroundColor:"#2fb68e",border:'none',paddingRight:"8px"}}/>
                            <p>The Bank’s Terms and Conditions</p>
                            </label>
                            </div>
                            <div className="form-check">
                            <label className="form-check-label m-1">
                            <input type='checkbox'className="form-check-input" style={{backgroundColor:"#2fb68e",border:'none',paddingRight:"8px"}}/><p>Information about interest rates</p>
                            </label>
                            </div>
                            <div className="form-check">
                            <label className="form-check-label m-1">
                           <input type='checkbox'className="form-check-input" style={{backgroundColor:"#2fb68e",border:'none',paddingRight:"8px"}}/><p>Summary of information about this product</p>
                           </label></div>
                        <p>which I/we have read and I/we understand these form part of our contract
                            with the Bank. If there is anything in the Bank’s Terms and Conditions
                            which I/we do not understand or wish to discuss I/we will contact 0800 532 532
                            (24/7) at the Bank before signing this form</p>
                            <input type='date' className='form-control form-control-md col-md-2 w-10' onChange={(e) => setRecurringdepositDateOfBirth(e.target.value)} value={RecurringdepositDateOfBirth}/>

                    </div>

                </div>
                <div className='row p-4'>
                        <div className=''>
                            <h4 className='fdform_fundingheading text-center p-2' style={{backgroundColor:"#ebca28",marginBottom:"30px"}}>For Bank use only:</h4>
                            <div className="row">
                             <div className="col-md-6">
                             <label className='form-inline'><span>Customer’s ID </span></label>
                            <input className='form-control form-control-md w-75' />
                            </div>
                            <div className="col-md-6">
                            <label className='form-inline'><span>New Account number</span></label>
                            <input className='form-control form-control-md w-75' />
                            </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                <label className='form-inline'><span>Amount</span></label>
                            <input className='form-control form-control-md w-75' />
                            </div>
                            <div className="col-md-6">
                            <label className='form-inline'><span>Scheme code:</span></label>
                            <input className='form-control form-control-md w-75' />
                            </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                <label className='form-inline'><span>Transaction number</span></label>
                            <input className='form-control form-control-md w-75' />
                            </div>
                            <div className="col-md-6">
                            <label className='form-inline'><span>Prepared by</span></label>
                            <input className='form-control form-control-md w-75' />
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-md-6">
                            <label className='form-inline'><span>Checked by</span></label>
                            <input className='form-control form-control-md w-75' />
                            </div>
                            </div>
                        </div>
                        <div className="mt-5 ">
                            <center>
                            <button className="fdform_submitbtn ">SUBMIT</button>
                            </center>
                        </div>


                    </div>
                </form>
             
                <div className='row p-4'>
                    <h4 className='fdform_fundingheading mb-3 text-center p-2'  style={{backgroundColor:"#ebca28",marginBottom:"30px"}}>Tax Status</h4>
                    <p style={{fontSize:"13px"}}>All the interest we pay will be without any tax deducted i.e. paid at gross rate.
                        If the total amount of interest you receive exceeds any Personal Savings
                        Allowance to which you are entitled, you may have to pay tax at the
                        applicable rate. It is your responsibility to ensure that this tax is paid. This
                        would need to be paid directly to HM Revenue & Customs ('HMRC') We may share your personal data with, and obtain personal data about you
                        from, credit reference agencies or fraud prevention agencies for use in
                        verifying your identity, credit decisions and for fraud and money laundering
                        prevention.</p > 
                        <p style={{fontSize:"13px"}}>If fraud is detected, you could be refused certain services, finance,
                            or employment. Further details explaining how the personal data held by fraud
                            prevention agencies may be used can be found on our website: http://www.rib.com/credit-reference
                            We will not disclose any personal data to any company outside the State Bank
                            Group except to help prevent fraud, or if required to do so by law. For further
                            information on how your personal data is used, how we maintain the security
                            of your personal data and your rights to access personal data we hold on you,
                            please see our Privacy Policy, a copy of which can be found here: https://www.rib.com/footer/bottomfooter/privacy-policy or contact us at customerservices.rib@royalbank.com marking the correspondence for the
                            attention of the Data Protection Officer.</p>
                    <p style={{fontSize:"13px"}}>The Royal Islamic Bank Ltd would like to send you information about
                        special offers you may be entitled to or about products and services available
                        from the State Bank Group that may be of interest to you. If you agree to
                        being contacted in this way please tick the relevant boxes Please note that if this is a joint account, we will accept authority of any
                        joint account holders to give instructions on behalf of all other account
                        holders relating to the account until it is canceled.
                        Authorised and regulated by the Prudential Regulation Authority. Subject to
                        regulation by the Financial Conduct Authority (FCA) and limited regulation by
                        the Prudential Regulation Authority. Details about the extend of our
                        regulation by the Prudential Regulation Authority and Financial Conduct
                        Authority are available from us on request. Royal Islamic Bank Limited is
                        a member of the Financial Service Compensation Scheme established under
                        the Financial Services and Market Act 2000. The Financial Services
                        Compensation Scheme protects deposit held with our UK branches.
                        Payments under this scheme are limited to £85,000 of your total deposit
                        with us in the UK.For more information or clarification, visit our website www.rib.com, call
                        us on 0800 532 532 or email to customerservices.sbiuk@satebank.com or
                        visit your local branch. The contact centre is open 24/7.
                        *Monthly and annual interest options are only available for fixed deposits
                        over 1 year with a minimum of £50,000 (not available for USD / EURO).
                        **This must be a fixed amount</p>

                </div>
            </div>
        </>
    )
}

export default RecurringForm;