import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { Axios } from "axios";
import logo from "../../../../Images/RIB White logo (1).png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const FixedRecurringForm = () => {
    const [FixeddepositAccountNumber, setFixeddepositAccountNumber] = useState("");
    const [FixeddepositTitle, setFixeddepositTitle] = useState("");
    const [FixeddepositFirstname, setFixeddepositFirstname] = useState("");
    const [FixeddepositMiddlename, setFixeddepositMiddlename] = useState("");
    const [FixeddepositSurname, setFixeddepositSurname] = useState("");
    const [FixeddepositDateOfBirth, setFixeddepositDateOfBirth] = useState("");
    const [FixeddepositMobileNumber, setFixeddepositMobileNumber] = useState("");
    const [FixeddepositEmailId, setFixeddepositEmailId] = useState("");
    const [FixeddepositLine1, setFixeddepositLine1] = useState("");
    const [FixeddepositLine2, setFixeddepositLine2] = useState("");
    const [FixeddepositTown, setFixeddepositTown] = useState("");
    const [FixeddepositCountry, setFixeddepositCountry] = useState("");
    const [FixeddepositPostcode, setFixeddepositPostcode] = useState("");
    const [FixeddepositAmount, setFixeddepositAmount] = useState('');
    const [FixeddepositTermyears, setFixeddepositTermyears] = useState("");
    const [FixeddepositTermmonths, setFixeddepositTermmonths] = useState("");
    const [FixeddepositTermdays, setFixeddepositTermdays] = useState('');
    const [FixeddepositInterestrate, setFixeddepositInterestrate] = useState("");
    const [FixeddepositInterestpay, setFixeddepositInterestpay] = useState('');
    const [FixeddepositBankname, setFixeddepositBankname] = useState('');

    const [NomineeTitle, setNomineeTitle] = useState('');
    const [NomineeFirstname, setNomineeFirstname] = useState('');
    const [NomineeMiddlename, setNomineeMiddlename] = useState('');
    const [NomineeSurname, setNomineeSurname] = useState('');
    const [NomineeDateOfBirth, setNomineeDateOfBirth] = useState('');
    const [NomineeMobileNumber, setNomineeMobileNumber] = useState('');
    const [NomineeEmailId, setNomineeEmailId] = useState('');
    const [NomineeLine1, setNomineeLine1] = useState('');
    const [NomineeLine2, setNomineeLine2] = useState('');
    const [NomineeTown, setNomineeTown] = useState('');
    const [NomineeCountry, setNomineeCountry] = useState('');
    const [NomineePostcode, setNomineePostcode] = useState('');


    const [isMobileValid, setIsMobileValid] = useState(true);
    const [isMobileStartValid, setIsMobileStartValid] = useState(true);
    const [isMobileValid1, setIsMobileValid1] = useState(true);
    const [isMobileStartValid1, setIsMobileStartValid1] = useState(true);

    const isValidMobile = (mobile) => {
        // Ensure the mobile number is numeric and has 10 digits
        const mobilePattern = /^\d{10}$/;
        return mobilePattern.test(mobile);
    };
    const isValidMobileStart = (mobile) => {
        // Ensure the mobile number starts with 6, 7, 8, or 9
        const mobileStartPattern = /^[6-9]/;
        return mobileStartPattern.test(mobile);
    };
    const isValidMobile1 = (mobile) => {
        // Ensure the mobile number is numeric and has 10 digits
        const mobilePattern = /^\d{10}$/;
        return mobilePattern.test(mobile);
    };
    const isValidMobileStart1 = (mobile) => {
        // Ensure the mobile number starts with 6, 7, 8, or 9
        const mobileStartPattern = /^[6-9]/;
        return mobileStartPattern.test(mobile);
    };
    let navigate = useNavigate();
    const [data, setdata] = useState([]);

    const usersData = {
        FixeddepositAccountNumber: FixeddepositAccountNumber,
        FixeddepositTitle: FixeddepositTitle,
        FixeddepositFirstname: FixeddepositFirstname,
        FixeddepositMiddlename: FixeddepositMiddlename,
        FixeddepositSurname: FixeddepositSurname,
        FixeddepositDateOfBirth: FixeddepositDateOfBirth,
        FixeddepositMobileNumber: FixeddepositMobileNumber,
        FixeddepositEmailId: FixeddepositEmailId,
        FixeddepositLine1: FixeddepositLine1,
        FixeddepositLine2: FixeddepositLine2,
        FixeddepositTown: FixeddepositTown,
        FixeddepositCountry: FixeddepositCountry,
        FixeddepositPostcode: FixeddepositPostcode,
        FixeddepositAmount: FixeddepositAmount,
        FixeddepositTermyears: FixeddepositTermyears,
        FixeddepositTermmonths: FixeddepositTermmonths,
        FixeddepositTermdays: FixeddepositTermdays,
        FixeddepositInterestrate: FixeddepositInterestrate,
        FixeddepositInterestpay: FixeddepositInterestpay,
        FixeddepositBankname: FixeddepositBankname,
        NomineeTitle: NomineeTitle,
        NomineeFirstname: NomineeFirstname,
        NomineeMiddlename: NomineeMiddlename,
        NomineeSurname: NomineeSurname,
        NomineeDateOfBirth: NomineeDateOfBirth,
        NomineeMobileNumber: NomineeMobileNumber,
        NomineeEmailId: NomineeEmailId,
        NomineeLine1: NomineeLine1,
        NomineeLine2: NomineeLine2,
        NomineeTown: NomineeTown,
        NomineeCountry: NomineeCountry,
        NomineePostcode: NomineePostcode

    };
    const onSubmitForm = (e) => {
        e.preventDefault();
        const isMobileValid = isValidMobile(NomineeMobileNumber);
        const isMobileStartValid = isValidMobileStart(NomineeMobileNumber);
        const isMobileValid1 = isValidMobile(FixeddepositMobileNumber);
        const isMobileStartValid1 = isValidMobileStart(FixeddepositMobileNumber);

        if (
            FixeddepositAccountNumber && FixeddepositTitle && FixeddepositFirstname && FixeddepositMiddlename && FixeddepositSurname && FixeddepositDateOfBirth && FixeddepositMobileNumber && FixeddepositEmailId
            && FixeddepositLine1 && FixeddepositLine2 && FixeddepositTown && FixeddepositCountry && FixeddepositPostcode && FixeddepositAmount && FixeddepositTermyears && FixeddepositTermmonths && FixeddepositTermdays &&
            FixeddepositInterestrate && FixeddepositInterestpay && FixeddepositBankname && NomineeTitle && NomineeFirstname && NomineeMiddlename && NomineeSurname && NomineeDateOfBirth && NomineeMobileNumber &&
            NomineeEmailId && NomineeLine1 && NomineeLine2 && NomineeTown && NomineeCountry && NomineePostcode !== ""
        ) {
            axios
                .post("http://localhost:4444/api/fdformdetails", usersData)
                .then((response) => {
                    console.log(response.data);
                    setdata(response.data);
                    console.log(response.data);
                    if (response.status === 200) {
                        toast.success("FD form submit Successful", {
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
                            navigate("/user/account/fixed-deposits");
                        }, 3000);
                    }
                })
                .catch((error) => {
                    toast.error("FD already Done: please select proper Account number", {
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

    const handleMobileChange = (mobile) => {
        setNomineeMobileNumber(mobile);
        // Check mobile number validity and set state accordingly
        setIsMobileValid(isValidMobile(mobile));
        setIsMobileStartValid(isValidMobileStart(mobile));
    };
    const handleMobileChange1 = (mobile) => {
        setFixeddepositMobileNumber(mobile);
        // Check mobile number validity and set state accordingly
        setIsMobileValid1(isValidMobile1(mobile));
        setIsMobileStartValid1(isValidMobileStart1(mobile));
    };
    return (
        <>
            <div className="container-fluid fdform_main "style={{marginTop:"50px"}}>
               
                <div className="row ">
                    <div className="col-md-2  p-0 m-0">
                    <img src={logo} alt="" style={{ width: "170px" }} />
                    </div>
                    <div className="col-md-10 d-flex  p-0 m-0" style={{justifyContent:"center",alignItems:"center"}}>
                    <h2 className='fdform_rightheading'>Fixed Deposit Account Opening Form</h2>
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
                    <div className="p-2">
                        {/* <p className='col-xl-12 mb-5'>Please fill in the form using BLOCK CAPITALS. Tick any boxes which apply</p> */}
                        <label for="savingsAccountNumber" className='form-inline'>
                     <span className='col-md-3'>Account Number*</span>
                        <input type='text' className='form-control  form-control-md col-md-3 w-100 fdform_accountnbrinput' onChange={(e) => setFixeddepositAccountNumber(e.target.value)} value={FixeddepositAccountNumber} placeholder="Enter Your Account Number" />
                        </label>
                        </div>                        
                    <div className='row p-4 fdform_main_Container'>
                        <div className='col-md-6 '>
                            <h4 className='mb-4 fdform_subheading ' >Your Details (First Customer)</h4>
                            <div className="p-1">
                            <label style={{paddingRight:"15px"}}>Title:  </label>
                            <div className="form-check-inline " style={{fontSize:"15px"}}>
                            <label className="form-check-label" for='Email'>
                            <input type='radio' name="gender" className="form-check-input " style={{marginTop:"4px"}} onChange={(e) => setFixeddepositTitle(e.target.value)} value="Mr" />Mr
                            </label>
                            </div>
                             <div className="form-check-inline " style={{fontSize:"15px"}}>
                             <label className="form-check-label" for='Email'>
                            <input type='radio' name="gender" className="form-check-input " style={{marginTop:"4px"}} onChange={(e) => setFixeddepositTitle(e.target.value)} value="Mrs" />Mrs
                            </label>
                            </div>
                            <div className="form-check-inline " style={{fontSize:"15px"}}>
                            <label className="form-check-label" for='Email'>
                            <input type='radio' name="gender" className="form-check-input " style={{marginTop:"4px"}} onChange={(e) => setFixeddepositTitle(e.target.value)} value="Ms" />Ms
                           </label>
                            </div>
                            <div className="form-check-inline " style={{fontSize:"15px"}}>
                            <label className="form-check-label" for='Email'>
                            <input type='radio' name="gender" className="form-check-input " style={{marginTop:"4px"}} onChange={(e) => setFixeddepositTitle(e.target.value)} value="Miss" />Miss
                          </label>
                           </div>
                           <div className="form-check-inline " style={{fontSize:"15px"}}>
                           <label className="form-check-label" for='Email'>
                            <input type='radio' name="gender" className="form-check-input " style={{marginTop:"4px"}} onChange={(e) => setFixeddepositTitle(e.target.value)} value="other" />Other<br></br>
                            </label>
                            </div>
                            </div>                            
                            <div className="p-1">
                            <label className='form-inline'>First Name:</label>
                            <input type='text' className='form-control form-control-md w-75' onChange={(e) => setFixeddepositFirstname(e.target.value)} value={FixeddepositFirstname} />
                            </div>
                            <div className="p-1">
                            <label className='form-inline'>Middle Name:</label>
                            <input type='text' className='form-control form-control-md w-75' onChange={(e) => setFixeddepositMiddlename(e.target.value)} value={FixeddepositMiddlename}/>
                            </div>
                            <div className="p-1">
                            <label className='form-inline'>Surname:</label>
                            <input type='text' className='form-control form-control-md w-75' onChange={(e) => setFixeddepositSurname(e.target.value)} value={FixeddepositSurname}/>
                            </div>
                            <div className="p-1">
                            <label className='form-inline'>Date of Birth:</label>
                            <input type='Date' className='form-control form-control-md w-75' onChange={(e) => setFixeddepositDateOfBirth(e.target.value)} value={FixeddepositDateOfBirth} />
                            </div>
                            <div className="p-1">
                            <label className='form-inline'>Mobile Number:</label>
                            <input type='Text' className='form-control form-control-md w-75' onChange={(e) => handleMobileChange1(e.target.value)} />
                            {!isMobileStartValid1 && (
                                <p className="text-danger">Mobile number must start with 6, 7, 8, or 9.</p>
                            )}
                            {!isMobileValid1 && (
                                <p className="text-danger">Please enter a valid 10-digit mobile number.</p>
                            )}
                               </div>
                             <div className="p-1">
                            <label className='form-inline'>Email:</label>
                            <input type='text' className='form-control form-control-md w-75' onChange={(e) => setFixeddepositEmailId(e.target.value)} value={FixeddepositEmailId} />
                            </div>
                            <label className='row' style={{ marginLeft: '1px' }}> Current Address:</label><br></br>
                            <div style={{color:"rgb(85, 84, 84)"}}>
                            <label className='form-inline'><span className="col-md-2">Line 1 </span>
                            <input type='text' className='form-control  form-control-md col-md-6 w-50' onChange={(e) => setFixeddepositLine1(e.target.value)} value={FixeddepositLine1} /><br></br>
                            </label> 
                            <label className='form-inline'><span className="col-md-2">Line 2</span>
                            <input type='text' className='form-control  form-control-md col-md-6 w-50' onChange={(e) => setFixeddepositLine2(e.target.value)} value={FixeddepositLine2} /><br></br>
                            </label>
                            <label className='form-inline'> <span className="col-md-2">Town</span>
                            <input type='text' className='form-control  form-control-md col-md-6 w-50' onChange={(e) => setFixeddepositTown(e.target.value)} value={FixeddepositTown} /><br></br>
                            </label>                          
                            <label className='form-inline'><span className="col-md-2">Country</span>
                            <input type='text' className='form-control  form-control  form-control-md col-md-6 w-50' onChange={(e) => setFixeddepositCountry(e.target.value)} value={FixeddepositCountry} />
                            </label>
                            <label className='form-inline'><span className="col-md-2">Postcode</span>
                            <input type='text' className='form-control  form-control  form-control-md col-md-6 w-50' onChange={(e) => setFixeddepositPostcode(e.target.value)} value={FixeddepositPostcode} />
                            </label>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <h4 className='mb-4 fdform_subheading'>Nominee Details (Second Customer)</h4>
                            <div className="p-1">
                            <label style={{paddingRight:"15px"}}>Title:  </label>
                            <div className="form-check-inline " style={{fontSize:"15px"}}>
                            <label className="form-check-label" for='Email'>
                            <input type='radio' name="genders" className='form-check-input' onChange={(e) => setNomineeTitle(e.target.value)} style={{marginTop:"4px"}} value="Mr" />Mr
                            </label>
                            </div>
                            <div className="form-check-inline " style={{fontSize:"15px"}}>
                            <label className="form-check-label" for='Email'>
                            <input type='radio' name="genders" className='form-check-input' onChange={(e) => setNomineeTitle(e.target.value)} style={{marginTop:"4px"}} value="Mrs" />Mrs
                            </label>
                            </div>
                            <div className="form-check-inline " style={{fontSize:"15px"}}>
                            <label className="form-check-label" for='Email'>
                            <input type='radio' name="genders" className='form-check-input' onChange={(e) => setNomineeTitle(e.target.value)} style={{marginTop:"4px"}} value="Ms" />Ms
                            </label>
                            </div>
                            <div className="form-check-inline " style={{fontSize:"15px"}}>
                            <label className="form-check-label" for='Email'>
                            <input type='radio' name="genders" className='form-check-input' onChange={(e) => setNomineeTitle(e.target.value)}style={{marginTop:"4px"}}  value="Miss" />Miss
                           </label>
                           </div>
                           <div className="form-check-inline " style={{fontSize:"15px"}}>
                            <label className="form-check-label" for='Email'>
                            <input type='radio' name="genders" className='form-check-input' onChange={(e) => setNomineeTitle(e.target.value)}style={{marginTop:"4px"}}  value="other" />Other<br></br>
                            </label>
                            </div>
                            </div>
                            <div className="p-1">
                            <label className='form-inline'>First Name:</label>
                            <input type='text' className='form-control form-control-md w-75' onChange={(e) => setNomineeFirstname(e.target.value)} value={NomineeFirstname} />
                            </div>
                            <div className="p-1">
                            <label className='form-inline'>Middle Name:</label>
                            <input type='text' className='form-control form-control-md w-75' onChange={(e) => setNomineeMiddlename(e.target.value)} value={NomineeMiddlename} />
                            </div>
                            <div className="p-1">
                            <label className='form-inline'>Surname:</label>
                            <input type='text' className='form-control form-control-md w-75' onChange={(e) => setNomineeSurname(e.target.value)} value={NomineeSurname} />
                            </div>
                            <div className="p-1">
                            <label className='form-inline'>Date of Birth:</label>
                            <input type='Date' className='form-control form-control-md w-75' onChange={(e) => setNomineeDateOfBirth(e.target.value)} value={NomineeDateOfBirth} />
                            </div>
                            <div className="p-1">
                            <label className='form-inline'>Mobile Number:</label>
                            <input type='Text' className='form-control form-control-md w-75' onChange={(e) => handleMobileChange(e.target.value)} />
                            {!isMobileStartValid && (
                                <p className="text-danger">Mobile number must start with 6, 7, 8, or 9.</p>
                            )}
                            {!isMobileValid && (
                                <p className="text-danger">Please enter a valid 10-digit mobile number.</p>
                            )}
                            </div>
                            <div className="p-1">
                            <label className='form-inline'>Email:</label>
                            <input type='text' className='form-control form-control-md w-75' onChange={(e) => setNomineeEmailId(e.target.value)} value={NomineeEmailId} />
                            </div>                            
                            <label className='row' style={{ marginLeft: '1px' }}> Current Address:</label><br></br>
                           <div style={{color:"rgb(85, 84, 84)"}}>
                            <label className='form-inline'><span className="col-md-2">Line 1</span>
                            <input type='text' className='form-control  form-control-md col-md-6 w-50' onChange={(e) => setNomineeLine1(e.target.value)} value={NomineeLine1} /><br></br>
                            </label>
                            <label className='form-inline'><span className="col-md-2">Line 2</span>
                            <input type='text' className='form-control  form-control-md col-md-6 w-50' onChange={(e) => setNomineeLine2(e.target.value)} value={NomineeLine2} /><br></br>
                            </label>
                            <label className='form-inline'><span className="col-md-2">Town</span>
                            <input type='text' className='form-control  form-control-md col-md-6 w-50' onChange={(e) => setNomineeTown(e.target.value)} value={NomineeTown} /><br></br>
                            </label>
                            <label className='form-inline'><span className="col-md-2">Country</span>
                            <input type='text' className='form-control  form-control-md col-md-6 w-50' onChange={(e) => setNomineeCountry(e.target.value)} value={NomineeCountry} />
                            </label>
                            <label className='form-inline'><span className="col-md-2">Postcode</span>
                            <input type='text' className='form-control  form-control-md col-md-6 w-50' onChange={(e) => setNomineePostcode(e.target.value)} value={NomineePostcode} />
                            </label>
                            </div>
                        </div>                    
                    </div>
                    <div className='row p-4'>
                        <div className=''>
                            <h4 className='fdform_fundingheading text-center p-2' style={{backgroundColor:"#ebca28",marginBottom:"30px"}}>Funding</h4>
                            <p className="funding_para1 p-1">Please debit my/our RIB Savings/Current Account no. <input type='text' className="w-25" onChange={(e) => setFixeddepositAccountNumber(e.target.value)} value={FixeddepositAccountNumber} /> and transfer an amount of  <input type='text' className='w-10 ' onChange={(e) => setFixeddepositAmount(e.target.value)} value={FixeddepositAmount} />to a Fixed Deposit Account as below:
                            </p>
                            <p className="funding_para1 p-1"> <span style={{fontWeight:"420",paddingRight:"10px"}}>Terms of deposit: </span>    Years <input className='w-10 p-1' onChange={(e) => setFixeddepositTermyears(e.target.value)} value={FixeddepositTermyears} />Months <input className='w-10 p-1' onChange={(e) => setFixeddepositTermmonths(e.target.value)} value={FixeddepositTermmonths} />Days<input className='w-10 p-1' onChange={(e) => setFixeddepositTermdays(e.target.value)} value={FixeddepositTermdays} /><br></br>
                            </p>

                            <label style={{fontWeight:"420",paddingRight:"10px"}} className="p-1">Rate of interest :</label> <input className='w-10 p-1' style={{outline:"none",paddingLeft:"20px"}} onChange={(e) => setFixeddepositInterestrate(e.target.value)} value={FixeddepositInterestrate} /> %
                            <div className="p-2">
                            <label style={{fontWeight:"420",paddingRight:"10px"}} className="">Frequency of interest payable (please tick one)* :</label>
                            <div className="form-check-inline " style={{fontSize:"15px"}}>
                            <label className="form-check-label" for='Email'>
                            <input type='radio' className='' name='interest' onChange={(e) => setFixeddepositInterestpay(e.target.value)} value="Monthly" /> Monthly
                            </label>
                            </div>
                            <div className="form-check-inline " style={{fontSize:"15px"}}>
                            <label className="form-check-label" for='Email'>
                             <input type='radio' className='' name='interest' onChange={(e) => setFixeddepositInterestpay(e.target.value)} value="Annually" />Annually
                           </label>
                           </div>
                           <div className="form-check-inline " style={{fontSize:"15px"}}>
                            <label className="form-check-label" for='Email'>
                           <input type='radio' className='' name='interest' onChange={(e) => setFixeddepositInterestpay(e.target.value)} value="Upon maturity" /> Upon maturity
                            </label>
                            </div>
                        </div>
                        </div>
                        <div className=''>
                            <h4 className='fdform_fundingheading text-center p-2' style={{backgroundColor:"#ebca28",marginBottom:"30px"}}>Interest Payments</h4>
                            <p style={{fontWeight:"420"}}>If (A) or (B) from funding section, Unless specified we will credit interest to your RIB UK account</p>
                            <p className="funding_para1 p-1">Please arrange to credit all or part of the interest on the fixed deposit to my / our RIB account number 
                            <input className='w-25' onChange={(e) => setFixeddepositAccountNumber(e.target.value)} value={FixeddepositAccountNumber} />
                            Please arrange to pay an amount** of <input className='w-25' onChange={(e) => setFixeddepositAmount(e.target.value)} value={FixeddepositAmount} />
                            to my/our account with Bank <input className='w-25' onChange={(e) => setFixeddepositBankname(e.target.value)} value={FixeddepositBankname} />
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
                            <input className='form-control form-control-md w-75' onChange={(e) => setFixeddepositAccountNumber(e.target.value)} value={FixeddepositAccountNumber} />
                            </div>
                            <div className="col-md-6">
                            <label className='form-inline'><span>Bank name</span></label><input className='form-control form-control-md w-75' onChange={(e) => setFixeddepositBankname(e.target.value)} value={FixeddepositBankname} />
                            </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                <label className='form-inline'><span>Account holder's name</span></label>
                            <input className='form-control form-control-md w-75' onChange={(e) => setFixeddepositFirstname(e.target.value)} value={FixeddepositFirstname} /><br></br>
                            </div>
                            <div className="col-md-6">
                            <label className='form-inline'><span>Date</span></label>
                            <input type='date' className='form-control form-control-md w-75' onChange={(e) => setFixeddepositDateOfBirth(e.target.value)} value={FixeddepositDateOfBirth} />
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
                            <input type='date' className='form-control form-control-md col-md-2 w-10' onChange={(e) => setFixeddepositDateOfBirth(e.target.value)} value={FixeddepositDateOfBirth} />

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

export default FixedRecurringForm;