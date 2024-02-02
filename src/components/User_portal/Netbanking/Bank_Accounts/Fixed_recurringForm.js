import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { Axios } from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Fixed_recurring_Form = () => {
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
                            navigate("/user/account/fixed-deposits");
                        }, 3000);
                    }
                })
                .catch((error) => {
                    toast.error("FD already Done: please select proper Account number", {
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
        <div>
            <div className="container-fluid fdform_main p-5" style={{ marginTop: '60px' }}>
                <div className="row">
                    <p className='col-xl-1 col-1'></p>
                    <div className="col-xl-5 col-5">
                        <h1 className="fdform_leftheading">RIB</h1>
                    </div>
                    <p className='col-xl-1 col-1'></p>
                    <div className="col-xl-5 col-5">
                        <h1 className='fdform_rightheading'>Fixed Deposit Account Opening Form</h1>
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
                        <input type='text' className='col-xl-4 col-4 fdform_accountnbrinput p-2' onChange={(e) => setFixeddepositAccountNumber(e.target.value)} value={FixeddepositAccountNumber} />

                    </div>
                    <div className='row mt-5'>
                        <div className='col-6'>
                            <h3 className='mb-4 fdform_subheading'>Your Details (First Customer)</h3>
                            <label className='col-1'>Title</label>
                            <input type='radio' name="gender" className='col-1' onChange={(e) => setFixeddepositTitle(e.target.value)} value="Mr" />Mr
                            <input type='radio' name="gender" className='col-1' onChange={(e) => setFixeddepositTitle(e.target.value)} value="Mrs" />Mrs
                            <input type='radio' name="gender" className='col-1' onChange={(e) => setFixeddepositTitle(e.target.value)} value="Ms" />Ms
                            <input type='radio' name="gender" className='col-1' onChange={(e) => setFixeddepositTitle(e.target.value)} value="Miss" />Miss
                            <input type='radio' name="gender" className='col-1' onChange={(e) => setFixeddepositTitle(e.target.value)} value="other" />Other<br></br>
                            <label className='mt-3'>First Name:</label><br></br>
                            <input type='text' className='w-75 fdform_input p-2' onChange={(e) => setFixeddepositFirstname(e.target.value)} value={FixeddepositFirstname} /><br></br>
                            <label className='mt-3'>Middle Name:</label><br></br>
                            <input type='text' className='w-75 fdform_input p-2' onChange={(e) => setFixeddepositMiddlename(e.target.value)} value={FixeddepositMiddlename} /><br></br>
                            <label className='mt-3'>Surname:</label><br></br>
                            <input type='text' className='w-75 fdform_input p-2' onChange={(e) => setFixeddepositSurname(e.target.value)} value={FixeddepositSurname} /><br></br>
                            <label className='mt-3'>Date of Birth:</label><br></br>
                            <input type='Date' className='w-75 fdform_input p-2' onChange={(e) => setFixeddepositDateOfBirth(e.target.value)} value={FixeddepositDateOfBirth} /><br></br>
                            <label className='mt-3'>Mobile Number:</label><br></br>
                            <input type='Text' className='w-75 fdform_input p-2' onChange={(e) => handleMobileChange1(e.target.value)} /><br></br>
                            {!isMobileStartValid1 && (
                                <p className="text-danger">Mobile number must start with 6, 7, 8, or 9.</p>
                            )}
                            {!isMobileValid1 && (
                                <p className="text-danger">Please enter a valid 10-digit mobile number.</p>
                            )}
                            <label className='mt-3'>Email:</label><br></br>
                            <input type='text' className='w-75 fdform_input p-2' onChange={(e) => setFixeddepositEmailId(e.target.value)} value={FixeddepositEmailId} /><br></br>
                            <label className='mt-2 row' style={{ marginLeft: '1px' }}> Current Address:</label><br></br>
                            <label className='col-2'>Line 1</label>
                            <input type='text' className='fdform_addressinput p-2' onChange={(e) => setFixeddepositLine1(e.target.value)} value={FixeddepositLine1} /><br></br>
                            <label className='col-2'>Line 2</label>
                            <input type='text' className='fdform_addressinput p-2 mt-2' onChange={(e) => setFixeddepositLine2(e.target.value)} value={FixeddepositLine2} /><br></br>
                            <label className='col-2'>Town</label>
                            <input type='text' className='fdform_addressinput p-2 mt-2' onChange={(e) => setFixeddepositTown(e.target.value)} value={FixeddepositTown} /><br></br>
                            <label className='col-2'>Country</label>
                            <input type='text' className='fdform_addressinput4 p-2 mt-2' onChange={(e) => setFixeddepositCountry(e.target.value)} value={FixeddepositCountry} />
                            <label className='col-2'>Postcode</label>
                            <input type='text' className='fdform_addressinput5 p-2 mt-2' onChange={(e) => setFixeddepositPostcode(e.target.value)} value={FixeddepositPostcode} />



                        </div>
                        <div className='col-6'>
                            <h3 className='mb-4 fdform_subheading'>Nominee Details (Second Customer)</h3>
                            <label className='col-1'>Title</label>
                            <input type='radio' name="genders" className='col-1' onChange={(e) => setNomineeTitle(e.target.value)} value="Mr" />Mr
                            <input type='radio' name="genders" className='col-1' onChange={(e) => setNomineeTitle(e.target.value)} value="Mrs" />Mrs
                            <input type='radio' name="genders" className='col-1' onChange={(e) => setNomineeTitle(e.target.value)} value="Ms" />Ms
                            <input type='radio' name="genders" className='col-1' onChange={(e) => setNomineeTitle(e.target.value)} value="Miss" />Miss
                            <input type='radio' name="genders" className='col-1' onChange={(e) => setNomineeTitle(e.target.value)} value="other" />Other<br></br>
                            <label className='mt-3'>First Name:</label><br></br>
                            <input type='text' className='w-75 fdform_input p-2' onChange={(e) => setNomineeFirstname(e.target.value)} value={NomineeFirstname} /><br></br>
                            <label className='mt-3'>Middle Name:</label><br></br>
                            <input type='text' className='w-75 fdform_input p-2' onChange={(e) => setNomineeMiddlename(e.target.value)} value={NomineeMiddlename} /><br></br>
                            <label className='mt-3'>Surname:</label><br></br>
                            <input type='text' className='w-75 fdform_input p-2' onChange={(e) => setNomineeSurname(e.target.value)} value={NomineeSurname} /><br></br>
                            <label className='mt-3'>Date of Birth:</label><br></br>
                            <input type='Date' className='w-75 fdform_input p-2' onChange={(e) => setNomineeDateOfBirth(e.target.value)} value={NomineeDateOfBirth} /><br></br>
                            <label className='mt-3'>Mobile Number:</label><br></br>
                            <input type='Text' className='w-75 fdform_input p-2' onChange={(e) => handleMobileChange(e.target.value)} /><br></br>
                            {!isMobileStartValid && (
                                <p className="text-danger">Mobile number must start with 6, 7, 8, or 9.</p>
                            )}
                            {!isMobileValid && (
                                <p className="text-danger">Please enter a valid 10-digit mobile number.</p>
                            )}
                            <label className='mt-3'>Email:</label><br></br>
                            <input type='text' className='w-75 fdform_input p-2' onChange={(e) => setNomineeEmailId(e.target.value)} value={NomineeEmailId} /><br></br>
                            <label className='mt-2 row' style={{ marginLeft: '1px' }}> Current Address:</label><br></br>
                            <label className='col-2'>Line 1</label>
                            <input type='text' className='fdform_addressinput p-2' onChange={(e) => setNomineeLine1(e.target.value)} value={NomineeLine1} /><br></br>
                            <label className='col-2'>Line 2</label>
                            <input type='text' className='fdform_addressinput p-2 mt-2' onChange={(e) => setNomineeLine2(e.target.value)} value={NomineeLine2} /><br></br>
                            <label className='col-2'>Town</label>
                            <input type='text' className='fdform_addressinput p-2 mt-2' onChange={(e) => setNomineeTown(e.target.value)} value={NomineeTown} /><br></br>
                            <label className='col-2'>Country</label>
                            <input type='text' className='fdform_addressinput4 p-2 mt-2' onChange={(e) => setNomineeCountry(e.target.value)} value={NomineeCountry} />
                            <label className='col-2'>Postcode</label>
                            <input type='text' className='fdform_addressinput5 p-2 mt-2' onChange={(e) => setNomineePostcode(e.target.value)} value={NomineePostcode} />


                        </div>

                    </div>
                    <div className='row mt-5'>
                        <div className='col-6'>
                            <h3 className='fdform_fundingheading'>Funding</h3>
                            <p>Please debit my/our RIB Savings/Current Account no. </p>
                            <input type='text' className="w-75 fdform_fundinginput p-2" onChange={(e) => setFixeddepositAccountNumber(e.target.value)} value={FixeddepositAccountNumber} />
                            <p className="mt-2">and transfer an amount of  <input type='text' className=' fdform_fdinput mb-2 p-2' onChange={(e) => setFixeddepositAmount(e.target.value)} value={FixeddepositAmount} /><br></br>to a Fixed Deposit Account as below:</p>
                            <p>Terms of deposit:</p>
                            <label>Years</label> <input className='fdform_yearinput mx-3 p-2' onChange={(e) => setFixeddepositTermyears(e.target.value)} value={FixeddepositTermyears} /><label>Months</label> <input className='fdform_yearinput mx-3 p-2' onChange={(e) => setFixeddepositTermmonths(e.target.value)} value={FixeddepositTermmonths} /><label>Days</label> <input className='fdform_yearinput mx-3 p-2' onChange={(e) => setFixeddepositTermdays(e.target.value)} value={FixeddepositTermdays} /><br></br>
                            <label>Rate of interest :</label> <input className='fdform_rateinput p-2 mt-3 mb-2' onChange={(e) => setFixeddepositInterestrate(e.target.value)} value={FixeddepositInterestrate} /> %
                            <p>Frequency of interest payable (please tick one)* :</p>
                            <label> Monthly</label><input type='radio' className='mx-2' name='interest' onChange={(e) => setFixeddepositInterestpay(e.target.value)} value="Monthly" />
                            <label> Annually</label><input type='radio' className='mx-2' name='interest' onChange={(e) => setFixeddepositInterestpay(e.target.value)} value="Annually" />
                            <label> Upon maturity</label><input type='radio' className='mx-2' name='interest' onChange={(e) => setFixeddepositInterestpay(e.target.value)} value="Upon maturity" />

                        </div>
                        <div className='col-6'>
                            <h3 className='fdform_fundingheading'>Interest Payments</h3>
                            <p>If (A) or (B) from funding section,
                                Unless specified we will credit interest to your RIB UK account</p>
                            <p>Please arrange to credit all or part of the interest on the fixed deposit to my / our RIB account number </p>
                            <input className='fdform_rateinput p-2' onChange={(e) => setFixeddepositAccountNumber(e.target.value)} value={FixeddepositAccountNumber} />
                            <p>Please arrange to pay an amount** of <input className='fdform_rateinput p-2' onChange={(e) => setFixeddepositAmount(e.target.value)} value={FixeddepositAmount} /></p>
                            <p>to my/our account with Bank <input className='fdform_rateinput p-2' onChange={(e) => setFixeddepositBankname(e.target.value)} value={FixeddepositBankname} /></p>
                            <p>out of the interest credited to my / our RIB account.</p>

                        </div>

                    </div>
                    <div className='row mt-5'>
                        <div className='col-6'>
                            <h3 className='fdform_fundingheading'>Maturity Instructions</h3>
                            <p>Maturity instruction payment:</p>
                            <p>Either transfer to SBI UK Either transfer to SBI UK account</p>
                            <p>Account Number :<input className='fdform_rateinput p-2' onChange={(e) => setFixeddepositAccountNumber(e.target.value)} value={FixeddepositAccountNumber} /></p>
                            <p>Bank name:<input className='fdform_rateinput p-2' onChange={(e) => setFixeddepositBankname(e.target.value)} value={FixeddepositBankname} /></p>
                            <p>Account holder's name :</p>
                            <input className='fdform_rateinput p-2 w-50' onChange={(e) => setFixeddepositFirstname(e.target.value)} value={FixeddepositFirstname} /><br></br>
                            <input type='date' className='fdform_rateinput mt-3 p-2' onChange={(e) => setFixeddepositDateOfBirth(e.target.value)} value={FixeddepositDateOfBirth} />


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
                            <input type='date' className='fdform_rateinput mt-3 p-2' onChange={(e) => setFixeddepositDateOfBirth(e.target.value)} value={FixeddepositDateOfBirth} />

                        </div>

                    </div>
                    <div className='row mt-5'>
                        <div className='col-8'>
                            <h3 className='fdform_fundingheading'>For Bank use only:</h3>
                            <p>Customer’s ID:</p>
                            <input className='w-75 fdform_rateinput p-2' />
                            <p>New Account number:</p>
                            <input className='w-75 fdform_rateinput p-2' />
                            <p>Amount:</p>
                            <input className='w-75 fdform_rateinput p-2' />
                            <p>Scheme code:</p>
                            <input className='w-75 fdform_rateinput p-2' />
                            <p>Transaction number:</p>
                            <input className='w-75 fdform_rateinput p-2' />
                            <p>Prepared by:</p>
                            <input className='w-75 fdform_rateinput p-2' />
                            <p>Checked by:</p>
                            <input className='w-75 fdform_rateinput p-2' />

                        </div>
                        <div className="col-4" style={{ marginTop: '250px' }}>
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

export default Fixed_recurring_Form;