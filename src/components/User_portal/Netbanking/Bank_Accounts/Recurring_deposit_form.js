import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { Axios } from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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
                  position: "top-right",
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
                position: "top-right",
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
        <div>
            <div className="container-fluid fdform_main p-5" style={{ marginTop: '60px'}}>
                <div className="row">
                    <p className='col-xl-1 col-1'></p>
                    <div className="col-xl-5 col-5">
                        <h1 className="fdform_leftheading">RIB</h1>
                    </div>
                    <p className='col-xl-1 col-1'></p>
                    <div className="col-xl-5 col-5">
                        <h1 className='fdform_rightheading'>Recurring Deposit Account Opening Form</h1>
                    </div>
                </div>
                <hr style={{ border: '6px solid #f18121' }}></hr>
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
                />
                {/* Same as */}
                <ToastContainer />
                <form onSubmit={onSubmitForm}>
                <div className='row' >
                    <p className='col-xl-12 mb-5'>Please fill in the form using BLOCK CAPITALS. Tick any boxes which apply</p>
                    <label className='col-xl-3 col-3'>Account Number</label>
                    <input type='text' className='col-xl-4 col-4 fdform_accountnbrinput p-2' onChange={(e) => setRecurringdepositAccountNumber(e.target.value)} value={RecurringdepositAccountNumber} />
                    
                </div>
                <div className='row mt-5'>
                    <div className='col-6'>
                        <h3 className='mb-4 fdform_subheading'>Your Details (First Customer)</h3>
                        <label className='col-1'>Title</label>
                        <input type='radio' name="gender" className='col-1'  onChange={(e) => setRecurringdepositTitle(e.target.value)} value="Mr"/>Mr
                        <input type='radio' name="gender" className='col-1'  onChange={(e) => setRecurringdepositTitle(e.target.value)} value="Mrs"/>Mrs
                        <input type='radio' name="gender" className='col-1'  onChange={(e) => setRecurringdepositTitle(e.target.value)} value="Ms"/>Ms
                        <input type='radio' name="gender" className='col-1'  onChange={(e) => setRecurringdepositTitle(e.target.value)} value="Miss"/>Miss
                        <input type='radio' name="gender" className='col-1'  onChange={(e) => setRecurringdepositTitle(e.target.value)} value="other"/>Other<br></br>
                        <label className='mt-3'>First Name:</label><br></br>
                        <input type='text' className='w-75 fdform_input p-2'  onChange={(e) => setRecurringdepositFirstname(e.target.value)} value={RecurringdepositFirstname}/><br></br>
                        <label className='mt-3'>Middle Name:</label><br></br>
                        <input type='text' className='w-75 fdform_input p-2' onChange={(e) => setRecurringdepositMiddlename(e.target.value)} value={RecurringdepositMiddlename}/><br></br>
                        <label className='mt-3'>Surname:</label><br></br>
                        <input type='text' className='w-75 fdform_input p-2' onChange={(e) => setRecurringdepositSurname(e.target.value)} value={RecurringdepositSurname}/><br></br>
                        <label className='mt-3'>Date of Birth:</label><br></br>
                        <input type='Date' className='w-75 fdform_input p-2' onChange={(e) => setRecurringdepositDateOfBirth(e.target.value)} value={RecurringdepositDateOfBirth}/><br></br>
                        <label className='mt-3'>Mobile Number:</label><br></br>
                        <input type='Text' className='w-75 fdform_input p-2' onChange={(e) => setRecurringdepositMobileNumber(e.target.value)} value={RecurringdepositMobileNumber}/><br></br>
                        <label className='mt-3'>Email:</label><br></br>
                        <input type='text' className='w-75 fdform_input p-2' onChange={(e) => setRecurringdepositEmailId(e.target.value)} value={RecurringdepositEmailId}/><br></br>
                        <label className='mt-2 row' style={{ marginLeft: '1px' }}> Current Address:</label><br></br>
                        <label className='col-2'>Line 1</label>
                        <input type='text' className='fdform_addressinput p-2' onChange={(e) => setRecurringdepositLine1(e.target.value)} value={RecurringdepositLine1}/><br></br>
                        <label className='col-2'>Line 2</label>
                        <input type='text' className='fdform_addressinput p-2 mt-2' onChange={(e) => setRecurringdepositLine2(e.target.value)} value={RecurringdepositLine2}/><br></br>
                        <label className='col-2'>Town</label>
                        <input type='text' className='fdform_addressinput p-2 mt-2' onChange={(e) => setRecurringdepositTown(e.target.value)} value={RecurringdepositTown}/><br></br>
                        <label className='col-2'>Country</label>
                        <input type='text' className='fdform_addressinput4 p-2 mt-2' onChange={(e) => setRecurringdepositCountry(e.target.value)} value={RecurringdepositCountry}/>
                        <label className='col-2'>Postcode</label>
                        <input type='text' className='fdform_addressinput5 p-2 mt-2' onChange={(e) => setRecurringepositPostcode(e.target.value)} value={RecurringdepositPostcode}/>



                    </div>
                    <div className='col-6'>
                        <h3 className='mb-4 fdform_subheading'>Nominee Details (Second Customer)</h3>
                        <label className='col-1'>Title</label>
                        <input type='radio' name="nominee" className='col-1' onChange={(e) => setRecurringNomineeTitle(e.target.value)} value="Mr"/>Mr
                        <input type='radio' name="nominee" className='col-1' onChange={(e) => setRecurringNomineeTitle(e.target.value)} value="Mrs"/>Mrs
                        <input type='radio' name="nominee" className='col-1' onChange={(e) => setRecurringNomineeTitle(e.target.value)} value="Ms"/>Ms
                        <input type='radio' name="nominee" className='col-1' onChange={(e) => setRecurringNomineeTitle(e.target.value)} value="Miss"/>Miss
                        <input type='radio' name="nominee" className='col-1' onChange={(e) => setRecurringNomineeTitle(e.target.value)} value="other"/>Other<br></br>
                        <label className='mt-3'>First Name:</label><br></br>
                        <input type='text' className='w-75 fdform_input p-2' onChange={(e) => setRecurringNomineeFirstname(e.target.value)} value={RecurringNomineeFirstname}/><br></br>
                        <label className='mt-3'>Middle Name:</label><br></br>
                        <input type='text' className='w-75 fdform_input p-2' onChange={(e) => setRecurringNomineeMiddlename(e.target.value)} value={RecurringNomineeMiddlename}/><br></br>
                        <label className='mt-3'>Surname:</label><br></br>
                        <input type='text' className='w-75 fdform_input p-2' onChange={(e) => setRecurringNomineeSurname(e.target.value)} value={RecurringNomineeSurname}/><br></br>
                        <label className='mt-3'>Date of Birth:</label><br></br>
                        <input type='Date' className='w-75 fdform_input p-2' onChange={(e) => setRecurringNomineeDateOfBirth(e.target.value)} value={RecurringNomineeDateOfBirth}/><br></br>
                        <label className='mt-3'>Mobile Number:</label><br></br>
                        <input type='Text' className='w-75 fdform_input p-2' onChange={(e) => setRecurringNomineeMobileNumber(e.target.value)} value={RecurringNomineeMobileNumber}/><br></br>
                        <label className='mt-3'>Email:</label><br></br>
                        <input type='text' className='w-75 fdform_input p-2'  onChange={(e) => setRecurringNomineeEmailId(e.target.value)} value={RecurringNomineeEmailId}/><br></br>
                        <label className='mt-2 row' style={{ marginLeft: '1px' }}> Current Address:</label><br></br>
                        <label className='col-2'>Line 1</label>
                        <input type='text' className='fdform_addressinput p-2' onChange={(e) => setRecurringNomineeLine1(e.target.value)} value={RecurringNomineeLine1}/><br></br>
                        <label className='col-2'>Line 2</label>
                        <input type='text' className='fdform_addressinput p-2 mt-2' onChange={(e) => setRecurringNomineeLine2(e.target.value)} value={RecurringNomineeLine2}/><br></br>
                        <label className='col-2'>Town</label>
                        <input type='text' className='fdform_addressinput p-2 mt-2' onChange={(e) => setRecurringNomineeTown(e.target.value)} value={RecurringNomineeTown}/><br></br>
                        <label className='col-2'>Country</label>
                        <input type='text' className='fdform_addressinput4 p-2 mt-2' onChange={(e) => setRecurringNomineeCountry(e.target.value)} value={RecurringNomineeCountry}/>
                        <label className='col-2'>Postcode</label>
                        <input type='text' className='fdform_addressinput5 p-2 mt-2'onChange={(e) => setRecurringNomineePostcode(e.target.value)} value={RecurringNomineePostcode}/>


                    </div>

                </div>
                <div className='row mt-5'>
                    <div className='col-6'>
                        <h3 className='fdform_fundingheading'>Funding</h3>
                        <p>Please debit my/our RIB Savings/Current Account no. </p>
                        <input type='text' className="w-75 fdform_fundinginput p-2" onChange={(e) => setRecurringdepositAccountNumber(e.target.value)} value={RecurringdepositAccountNumber}/>
                        <p className="mt-2">and transfer an amount of  <input type='text' className=' fdform_fdinput mb-2 p-2' onChange={(e) => setRecurringdepositAmount(e.target.value)} value={RecurringdepositAmount}/><br></br>to a Fixed Deposit Account as below:</p>
                        <p>Terms of deposit:</p>
                        <label>Years</label> <input className='fdform_yearinput mx-3 p-2'  onChange={(e) => setRecurringdepositTermyears(e.target.value)} value={RecurringdepositTermyears}/><label>Months</label> <input className='fdform_yearinput mx-3 p-2'  onChange={(e) => setRecurringdepositTermmonths(e.target.value)} value={RecurringdepositTermmonths}/><label>Days</label> <input className='fdform_yearinput mx-3 p-2'  onChange={(e) => setRecurringdepositTermdays(e.target.value)} value={RecurringdepositTermdays}/><br></br>
                        <label>Rate of interest :</label> <input className='fdform_rateinput p-2 mt-3 mb-2' onChange={(e) => setRecurringdepositInterestrate(e.target.value)} value={RecurringdepositInterestrate}/> %
                        <p>Frequency of interest payable (please tick one)* :</p>
                        <label> Monthly</label><input type='radio' className='mx-2' name='interest' onChange={(e) => setRecurringdepositInterestpay(e.target.value)} value="Monthly"/>
                        <label> Annually</label><input type='radio' className='mx-2' name='interest' onChange={(e) => setRecurringdepositInterestpay(e.target.value)} value="Annually"/>
                        <label> Upon maturity</label><input type='radio' className='mx-2' name='interest' onChange={(e) => setRecurringdepositInterestpay(e.target.value)} value="Upon maturity"/>

                    </div>
                    <div className='col-6'>
                        <h3 className='fdform_fundingheading'>Interest Payments</h3>
                        <p>If (A) or (B) from funding section,
                            Unless specified we will credit interest to your RIB UK account</p>
                        <p>Please arrange to credit all or part of the interest on the fixed deposit to my / our RIB account number </p>
                        <input className='fdform_rateinput p-2' onChange={(e) => setRecurringdepositAccountNumber(e.target.value)} value={RecurringdepositAccountNumber}/>
                        <p>Please arrange to pay an amount** of <input className='fdform_rateinput p-2' onChange={(e) => setRecurringdepositAmount(e.target.value)} value={RecurringdepositAmount}/></p>
                        <p>to my/our account with Bank <input className='fdform_rateinput p-2' onChange={(e) => setRecurringdepositBankname(e.target.value)} value={RecurringdepositBankname}/></p>
                        <p>out of the interest credited to my / our RIB account.</p>

                    </div>

                </div>
                <div className='row mt-5'>
                    <div className='col-6'>
                        <h3 className='fdform_fundingheading'>Maturity Instructions</h3>
                        <p>Maturity instruction payment:</p>
                        <p>Either transfer to SBI UK Either transfer to SBI UK account</p>
                        <p>Account Number :<input className='fdform_rateinput p-2' onChange={(e) => setRecurringdepositAccountNumber(e.target.value)} value={RecurringdepositAccountNumber}/></p>
                        <p>Bank name:<input className='fdform_rateinput p-2'  onChange={(e) => setRecurringdepositBankname(e.target.value)} value={RecurringdepositBankname}/></p>
                        <p>Account holder's name :</p>
                        <input className='fdform_rateinput p-2 w-50' onChange={(e) => setRecurringdepositFirstname(e.target.value)} value={RecurringdepositFirstname}/><br></br>
                        <input type='date' className='fdform_rateinput mt-3 p-2' onChange={(e) => setRecurringdepositDateOfBirth(e.target.value)} value={RecurringdepositDateOfBirth}/>


                    </div>
                    <div className='col-6'>
                        <h3 className='fdform_fundingheading'>Confirmation</h3>
                        <p>I/we confirm that I/we have been provided with a copy of</p>
                        <p><input type='checkbox' />The Bank’s Terms and Conditions</p>
                        <p><input type='checkbox' />Information about interest rates</p>
                        <p><input type='checkbox' />Summary of information about this product</p>
                        <p>which I/we have read and I/we understand these form part of our contract
                            with the Bank. If there is anything in the Bank’s Terms and Conditions
                            which I/we do not understand or wish to discuss I/we will contact 0800 532 532
                            (24/7) at the Bank before signing this form</p>
                        <input type='date' className='fdform_rateinput mt-3 p-2' onChange={(e) => setRecurringdepositDateOfBirth(e.target.value)} value={RecurringdepositDateOfBirth}/>

                    </div>

                </div>
                <div className='row mt-5'>
                    <div className='col-8'>
                    <h3 className='fdform_fundingheading'>For Bank use only:</h3>
                    <p>Customer’s ID:</p>
                    <input className='w-75 fdform_rateinput p-2'/>
                    <p>New Account number:</p>
                    <input className='w-75 fdform_rateinput p-2'/>
                    <p>Amount:</p>
                    <input className='w-75 fdform_rateinput p-2'/>
                    <p>Scheme code:</p>
                    <input className='w-75 fdform_rateinput p-2'/>
                    <p>Transaction number:</p>
                    <input className='w-75 fdform_rateinput p-2'/>
                    <p>Prepared by:</p>
                    <input className='w-75 fdform_rateinput p-2'/>
                    <p>Checked by:</p>
                    <input className='w-75 fdform_rateinput p-2'/>

                    </div>
                    <div className="col-4" style={{marginTop:'250px'}}>
                        <button className="fdform_submitbtn">SUBMIT</button>

                    </div>
                   

                </div>

                </form>
             
                <div className='row mt-5'>
                    <h3 className='fdform_fundingheading mb-3 text-center'>Tax Status</h3>
                    <p>All the interest we pay will be without any tax deducted i.e. paid at gross rate.
                        If the total amount of interest you receive exceeds any Personal Savings
                        Allowance to which you are entitled, you may have to pay tax at the
                        applicable rate. It is your responsibility to ensure that this tax is paid. This
                        would need to be paid directly to HM Revenue & Customs ('HMRC') We may share your personal data with, and obtain personal data about you
                        from, credit reference agencies or fraud prevention agencies for use in
                        verifying your identity, credit decisions and for fraud and money laundering
                        prevention.</p> <p>If fraud is detected, you could be refused certain services, finance,
                        or employment. Further details explaining how the personal data held by fraud
                        prevention agencies may be used can be found on our website: http://www.rib.com/credit-reference
                        We will not disclose any personal data to any company outside the State Bank
                        Group except to help prevent fraud, or if required to do so by law. For further
                        information on how your personal data is used, how we maintain the security
                        of your personal data and your rights to access personal data we hold on you,
                        please see our Privacy Policy, a copy of which can be found here: https://www.rib.com/footer/bottomfooter/privacy-policy or contact us at customerservices.rib@royalbank.com marking the correspondence for the
                        attention of the Data Protection Officer.</p>
                        <p>The Royal Islamic Bank Ltd would like to send you information about
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
        </div>
    )
}

export default RecurringForm;