

import React, { useState , useEffect } from 'react';
import{Link} from 'react-router-dom';
import './Customerservice.css' 

    const DropDownBankAccount = () => {
    const [bankAccountDropdown, setBankAccountDropdown] = useState(true);
    const [selectedSubHeader, setSelectedSubHeader] = useState('accountModification');
    const [creditCardDropdown, setCreditCardDropdown] = useState(false);
    const [depositsDropdown, setDepositsDropdown] = useState(false);
    const [loanDropdown, setLoanDropdown] = useState(false);
    const [dematDropdown, setDematDropdown] = useState(false);
    const [linkAccountsDropdown, setLinkAccountsDropdown] = useState(false);
    const [forexTravelCardsDropdown, setForexTravelCardsDropdown] = useState(false);
    const [pocketsDropdown, setPocketsDropdown] = useState(false);  

    useEffect(() => {
      setSelectedSubHeader('accountModification');
   }, []); 
// 
const [bankAccountArrowUp, setBankAccountArrowUp] = useState(true);
const [creditCardArrowUp, setCreditCardArrowUp] = useState(false);
const [depositsArrowUp, setDepositsArrowUp] = useState(false);

// 

  const toggleBankAccountDropdown = () => {
    // setBankAccountDropdown(!bankAccountDropdown);
    // 
    setBankAccountDropdown(!bankAccountDropdown);
    setBankAccountArrowUp(!bankAccountArrowUp); // Toggle the arrow direction

    setCreditCardDropdown(false);
    setDepositsDropdown(false);
    setLoanDropdown(false);
    setDematDropdown(false);
    setLinkAccountsDropdown(false);
    setForexTravelCardsDropdown(false);
    setPocketsDropdown(false);

    // 
    setSelectedSubHeader('');
  };

//   
const toggleCreditCardDropdown = () => {
    setCreditCardDropdown(!creditCardDropdown);
    setBankAccountDropdown(false);
    // 
    setCreditCardArrowUp(!creditCardArrowUp);

    // 
    setDepositsDropdown(false);
    setLoanDropdown(false);
    setDematDropdown(false);
    setLinkAccountsDropdown(false);
    setForexTravelCardsDropdown(false);
    setPocketsDropdown(false);


    // 
    setSelectedSubHeader('');
  };


// 
const toggleDepositsDropdown = () => {
    setDepositsDropdown(!depositsDropdown);
    // 
    setDepositsArrowUp(!depositsArrowUp)
    setBankAccountDropdown(false);
    setCreditCardDropdown(false);
    setLoanDropdown(false);
    setSelectedSubHeader('');
    setDematDropdown(false);
    setLinkAccountsDropdown(false);
    setForexTravelCardsDropdown(false);
    setPocketsDropdown(false);


  };

  const toggleLoanDropdown = () => {
    setLoanDropdown(!loanDropdown);
    setBankAccountDropdown(false);
    setCreditCardDropdown(false);
    setDepositsDropdown(false);
    setSelectedSubHeader('');
    setDematDropdown(false);
    setLinkAccountsDropdown(false);
    setForexTravelCardsDropdown(false);
    setPocketsDropdown(false);




  };

  const toggleDematDropdown = () => {
    setDematDropdown(!dematDropdown);
    setBankAccountDropdown(false);
    setCreditCardDropdown(false);
    setDepositsDropdown(false);
    setLoanDropdown(false);
    setSelectedSubHeader('');
    setLinkAccountsDropdown(false);
    setForexTravelCardsDropdown(false);
    setPocketsDropdown(false);


  };
  const toggleLinkAccountsDropdown = () => {
    setLinkAccountsDropdown(!linkAccountsDropdown);
    setBankAccountDropdown(false);
    setCreditCardDropdown(false);
    setDepositsDropdown(false);
    setLoanDropdown(false);
    setDematDropdown(false);
    setSelectedSubHeader('');
    setForexTravelCardsDropdown(false);
    setPocketsDropdown(false);


  };

  const toggleForexTravelCardsDropdown = () => {
    setForexTravelCardsDropdown(!forexTravelCardsDropdown);
    setBankAccountDropdown(false);
    setCreditCardDropdown(false);
    setDepositsDropdown(false);
    setLoanDropdown(false); 
    setDematDropdown(false);
    setLinkAccountsDropdown(false);
    setPocketsDropdown(false);

    setSelectedSubHeader('');
  };

  const togglePocketsDropdown = () => {
    setPocketsDropdown(!pocketsDropdown);
    setBankAccountDropdown(false);
    setCreditCardDropdown(false);
    setDepositsDropdown(false);
    setLoanDropdown(false);
    setDematDropdown(false);
    setLinkAccountsDropdown(false);
    setForexTravelCardsDropdown(false);
    setSelectedSubHeader('');
  };

// 

  const handleSubHeaderClick = (subHeader) => {
    setSelectedSubHeader(subHeader);
  };

  return (
    <div className='DropDownMain_BAnkingApp_FullDIv container-fluid'>
    <div className="DropDown_Main_Division_BankingAPP">
    <div className='dropdown_flex_trial  '>
<div className='dropdown_header_sub_header'>
      <div className="DropDown_Main_BankAccts_BankingAPP " onClick={toggleBankAccountDropdown}>

       <i class=" Drop_down_ICo fa-solid fa-building-columns mr-2"></i>
        Bank Accounts  
        {bankAccountArrowUp ? <i className="dropdown_arrow_down fa-solid fa-chevron-up"></i> : 
        <i className="dropdown_arrow_down fa-solid fa-chevron-down"></i>}
 
      </div>
      {bankAccountDropdown && (
        
        <div className="DropDown_Sub_Bank_acct_BankingAPP">
          <div
            className={` DropDown_Sub_bank_aact_modify_BankingAPP ${selectedSubHeader === 'accountModification' ? 'active' : ''}`}
            onClick={() => handleSubHeaderClick('accountModification')}
          >
             Account Modification Related  
           </div>
          <div
            className={`DropDown_Sub_bank_aact_Statement_BankingAPP ${selectedSubHeader === 'accountStatement' ? 'active' : ''}`}
            onClick={() => handleSubHeaderClick('accountStatement')}
          >
            Account Statement Related
           </div>
          {/* <div
            className={`DropDown_Sub_bank_aact_Transaction_BankingAPP ${selectedSubHeader === 'accountTransaction' ? 'active' : ''}`}
            onClick={() => handleSubHeaderClick('accountTransaction')}
          >
            Account Transaction Related
           </div> */}
          <div
            className={`DropDown_Sub_bank_aact_Debit_card_BankingAPP ${selectedSubHeader === 'accountDebitCard' ? 'active' : ''}`}
            onClick={() => handleSubHeaderClick('accountDebitCard')}
          >
            ATM/Debit Card related  
           </div>
          <div
            className={`DropDown_Sub_bank_aact_cheque_BankingAPP ${selectedSubHeader === 'accountChequeBook' ? 'active' : ''}`}
            onClick={() => handleSubHeaderClick('accountChequeBook')}
          >
             Cheque Book/DD related
           </div>
          {/* <div
            className={`DropDown_Sub_bank_aact_govt_BankingAPP ${selectedSubHeader === 'accountGovtSchemes' ? 'active' : ''}`}
            onClick={() => handleSubHeaderClick('accountGovtSchemes')}
          >
             NPS and other Government schemes 
            </div> */}
        </div>
      )}
        </div>

<div className='DropDown_Acct_list_items '>
{selectedSubHeader === 'accountModification' && (
        <div className="DropDown_Direct_sub_content_BankingAPP col-sm-12">
          <ul className='DropDown_Sub_UNORD_Lists_Loan_BankingAPP'>

          
            {/* <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              < Link to=''className='DropDown_Sub_Lists_Loan_BankingAPP'>Address Change </Link></li>
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              < Link to=''className='DropDown_Sub_Lists_Loan_BankingAPP'>Transfer Your Account to Nearest Branch </Link></li>
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              < Link to=''className='DropDown_Sub_Lists_Loan_BankingAPP'>View/Update Nominee </Link></li> */}
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              < Link to='/user/account/view-update-pancard' className='DropDown_Sub_Lists_Loan_BankingAPP'>PAN updation </Link></li>
             {/* <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              < Link to=''className='DropDown_Sub_Lists_Loan_BankingAPP'>Request for Direct Benefit Transfer (DBT)</Link></li> */}
            {/* <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              < Link to=''className='DropDown_Sub_Lists_Loan_BankingAPP'>Update Employer Name/Convert your Account to Salary Account </Link></li>
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              < Link to=''className='DropDown_Sub_Lists_Loan_BankingAPP'>Request for Family Banking</Link></li>
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              < Link to=''className='DropDown_Sub_Lists_Loan_BankingAPP'>Convert your SB account to NRO account</Link></li>
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              < Link to=''className='DropDown_Sub_Lists_Loan_BankingAPP'>FATCA/CRS updation  </Link></li>
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              < Link to=''className='DropDown_Sub_Lists_Loan_BankingAPP'>Account conversion from resident to NRI not done  </Link></li>
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              < Link to=''className='DropDown_Sub_Lists_Loan_BankingAPP'>Address change requested earlier not done </Link></li>
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              < Link to=''className='DropDown_Sub_Lists_Loan_BankingAPP'>ECS/NACH Mandate Cancellation</Link></li> */}

           </ul>
        </div>
      )}

      {selectedSubHeader === 'accountStatement' && (
        <div className= "DropDown_Direct_sub_content_BankingAPP">
          <ul className='DropDown_Sub_UNORD_Lists_Loan_BankingAPP'>
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='/user/account/statement-by-email' className='DropDown_Sub_Lists_Loan_BankingAPP'>Account Statement through E-mail</Link></li>
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='/user/account/statement' className='DropDown_Sub_Lists_Loan_BankingAPP'>Apply for Physical Statement</Link></li>
          

           </ul>
        </div>
      )}

      {selectedSubHeader === 'accountTransaction' && (
        <div className="DropDown_Direct_sub_content_BankingAPP">
          <ul className='DropDown_Sub_UNORD_Lists_Loan_BankingAPP'>
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='/user/account/personalizetranscationlimits' 
              className='DropDown_Sub_Lists_Loan_BankingAPP' >Cash Withdrawal from Royal Islamic Bank ATM-Query</Link></li>
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP' >Cash withdrawal from Non Royal Islamic Bank ATM-query</Link></li>
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP'>Online funds Transfer to Non-Royal Islamic Bank Account not credited</Link></li>


          
           </ul>
        </div>
      )}

      {selectedSubHeader === 'accountDebitCard' && (
        <div className="DropDown_Direct_sub_content_BankingAPP">
          <ul className='DropDown_Sub_UNORD_Lists_Loan_BankingAPP'>
              <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
                <Link to='/user/account/block-debit-card' className='DropDown_Sub_Lists_Loan_BankingAPP'  >Block or Unblock ATM/Debit card</Link></li>
              {/* <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
                <Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP' >Unblock 3D secure services_Debit Cards</Link></li> */}
              <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
                <Link to='/user/account/generate-debit-card-pin' className='DropDown_Sub_Lists_Loan_BankingAPP' > Generate Debit Card PIN Online</Link></li>
              {/* <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
                <Link to='/user/account/debit-atm-card' className='DropDown_Sub_Lists_Loan_BankingAPP' >Link ATM/Debit card to account </Link></li> */}
              {/* <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
                <Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP' > Upgrade your Debit Card</Link></li> */}
              <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
                <Link to='/user/account/manage-cardlimit' className='DropDown_Sub_Lists_Loan_BankingAPP' >Increase / Decrease Debit Card Limit </Link></li>
              {/* <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
                <Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP' >Protect your cards </Link></li> */}
              <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
                <Link to='/user/account/reissue-lost-atm-card' className='DropDown_Sub_Lists_Loan_BankingAPP'  > Reissue of lost ATM / Debit card</Link></li>
              {/* <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
                <Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP' >Re-dispatch of undelivered Debit Card/Cheque Book/Return Cheque </Link></li> */}
             {/* <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='/user/account/generate-request-lost-service-atm' className='DropDown_Sub_Lists_Loan_BankingAPP' >Debit card requested earlier not received</Link></li> */}
           </ul>
        </div>
      )}

      {selectedSubHeader === 'accountChequeBook' && (
        <div className="DropDown_Direct_sub_content_BankingAPP">
          <ul className='DropDown_Sub_UNORD_Lists_Loan_BankingAPP'>
            {/* <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP' >Stop Payment of Cheque</Link></li> */}
            {/* <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP' >Cheque Status Enquiry</Link></li> */}
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='/user/account/chequebook-req' className='DropDown_Sub_Lists_Loan_BankingAPP' >cheque book request</Link></li>
            {/* <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP' >Re-dispatch of undelivered Debit Card/Cheque Book/Return Cheque</Link></li>
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP' >Request a Demand Draft at Communication Address</Link></li>
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP' >Local Cheque deposited in Bank Account but not credited</Link></li>
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP' >Cheque book requested earlier not received</Link></li> */}
            {/* <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP' >Positive pay</Link></li> */}
             </ul>
        </div>
      )}

      {selectedSubHeader === 'accountGovtSchemes' && (
        <div className=" DropDown_Direct_sub_content_BankingAPP">
          <ul className='DropDown_Sub_UNORD_Lists_Loan_BankingAPP'>
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'><Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP' >Atal Pension Yojana Enrollment</Link></li>
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'><Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP' >National Pension System Enrollment</Link></li>
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'><Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP'   >Pradhan Mantri Jeevan Jyothi Bima Yojana enrollment</Link></li>
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'><Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP'  >Pradhan Mantri Suraksha Bima Yojana enrollment</Link></li>
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'><Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP' >Floating Rate Savings Bonds </Link></li>
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'><Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP' > Life Certificate submission through Video Call</Link></li>

           </ul>
        </div>
      )}
</div>
</div> 
<div className='dropdown_flex_trial'>
<div className='dropdown_header_sub_header'>

<div className="DropDown_Main_CreditCards_BankingAPP" onClick={toggleCreditCardDropdown}>
  <i class=" Drop_down_ICo fa-regular fa-credit-card mr-2"></i>
        Credit Cards 
        {creditCardArrowUp ? (
                <i className="dropdown_cc_arrow_down fa-solid fa-chevron-up"></i>
              ) : (
                <i className="dropdown_cc_arrow_down fa-solid fa-chevron-down"></i>
              )}
 
      </div>
      {creditCardDropdown && (
        <div className="DropDown_Sub_Credit_card_BankingAPP">
          <div
            className={`DropDown_Sub_Credit_modify_BankingAPP ${selectedSubHeader === 'creditCardModification' ? 'active' : ''}`}
            onClick={() => handleSubHeaderClick('creditCardModification')}
          >
            Modification Related
           </div>
          <div
            className={`DropDown_Sub_Credit_cardRelated_BankingAPP ${selectedSubHeader === 'creditCardQueries' ? 'active' : ''}`}
            onClick={() => handleSubHeaderClick('creditCardQueries')}
          >
            Card Related Queries
           </div>
          {/* <div
            className={`DropDown_Sub_Credit_statementRel_BankingAPP ${selectedSubHeader === 'creditCardStatement' ? 'active' : ''}`}
            onClick={() => handleSubHeaderClick('creditCardStatement')}
          >
            Statement Related
           </div> */}
        </div>
      )}
       </div>
<div className='DropDown_Creditcard_list_items'>
{selectedSubHeader === 'creditCardModification' && (
        <div className="DropDown_Direct_sloanb_content_BankingAPP">
          <ul className='DropDown_Sub_UNORD_Lists_Loan_BankingAPP'>
            {/* <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP'  >Address Change</Link></li> */}
            {/* <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to=''className='DropDown_Sub_Lists_Loan_BankingAPP' >Unblock Credit Card for 3D secure Services</Link></li> */}
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='/user/blockcreditcard' className='DropDown_Sub_Lists_Loan_BankingAPP' >Block Credit Card</Link></li>
            {/* <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP' >Generate Credit Card</Link></li> */}
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='/user/profile/changeemail' className='DropDown_Sub_Lists_Loan_BankingAPP' >Update  your e-mail ID</Link></li>
            {/* <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP'> Request for cancellation of credit card</Link></li> */}

           </ul>
        </div>
      )}

      {selectedSubHeader === 'creditCardQueries' && (
        <div className="DropDown_Direct_sloanb_content_BankingAPP">
          <ul className='DropDown_Sub_UNORD_Lists_Loan_BankingAPP'>
          {/* <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
            <Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP' >Credit card dispatch not received </Link></li> */}
          <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
            <Link to='/user/account/bank-rewardspoints' className='DropDown_Sub_Lists_Loan_BankingAPP' >Rewards Points Related Queries</Link></li>
          <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
            <Link to='/user/emi-submit' className='DropDown_Sub_Lists_Loan_BankingAPP'>Merchant EMI Related</Link></li>
            {/* <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP' >Queries Related to EMI-on-call facility</Link></li>
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP' >Request for re-dispatch of undelivered credit card</Link></li> */}
           </ul>
        </div>
      )}

      {selectedSubHeader === 'creditCardStatement' && (
        <div className="DropDown_Direct_sloanb_content_BankingAPP">
          <ul className='DropDown_Sub_UNORD_Lists_Loan_BankingAPP'>
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP'  >De-activation of Physical Statement</Link></li>
           </ul>
        </div>
      )}


</div>
</div>

<div className='dropdown_flex_trial'>
<div className='dropdown_header_sub_header'>
<div className="DropDown_Main_Deposits_BankingAPP" onClick={toggleDepositsDropdown}>
  <i class=" Drop_down_ICo fa-solid fa-hand-holding-dollar fa-lg mr-2"></i>
        Deposits
        {depositsArrowUp ? (
                <i className="dropdown_dep_arrow_down fa-solid fa-chevron-up"></i>
              ) : (
                <i className="dropdown_dep_arrow_down fa-solid fa-chevron-down"></i>
              )}
      </div>
      {depositsDropdown && (
        <div className="DropDown_Sub_Division_deposits_BankingAPP">
          <div
            className={`DropDown_Sub_Division_FXdeposits_BankingAPP ${selectedSubHeader === 'fixedDeposit' ? 'active' : ''}`}
            onClick={() => handleSubHeaderClick('fixedDeposit')}
          >
            Fixed Deposit 
            {/* {bankAccountArrowUp ? <i className="dropdown_arrow_down fa-solid fa-chevron-up"></i>  */}
            {/* : <i className="dropdown_arrow_down fa-solid fa-chevron-down"></i>} */}
            </div>
          <div
            className={`DropDown_Sub_Division_Recurrdeposits_BankingAPP ${selectedSubHeader === 'recurringDeposit' ? 'active' : ''}`}
            onClick={() => handleSubHeaderClick('recurringDeposit')}
          >
            Recurring Deposit
           </div>
        </div>
      )}
             </div>

      <div className='DropDown_fixeddeposits_list_items'>
      {selectedSubHeader === 'fixedDeposit' && (
        <div className="DropDown_Direct_sfdb_content_BankingAPP  ">
          <ul className='DropDown_Sub_UNORD_Lists_Loan_BankingAPP '>
            {/* <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP'  >Money Multiplier Deposit</Link></li> */}
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='/user/account/fixed-deposits' className='DropDown_Sub_Lists_Loan_BankingAPP' >Standard Fixed Deposit</Link></li>
            {/* <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP' >Tax Saver Fixed Deposit: Lock-in Period of 5 years</Link></li>
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP' >Apply for a Credit Card against your Fixed Deposit</Link></li> */}
            {/* <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP' >View/Update Nominee</Link></li> */}
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='/user/account/renew-fd' className='DropDown_Sub_Lists_Loan_BankingAPP' >Closure/Renewal of Fixed Deposit</Link></li>
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='/user/account/fd-advice' className='DropDown_Sub_Lists_Loan_BankingAPP'  >Generate ED Advice</Link></li>
           </ul>
        </div>
      )}

      {selectedSubHeader === 'recurringDeposit' && (
        <div className="DropDown_Direct_sfdb_content_BankingAPP ">
          <ul className='DropDown_Sub_UNORD_Lists_Loan_BankingAPP'>
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='/user/account/reccuring-deposits' className='DropDown_Sub_Lists_Loan_BankingAPP' >Recurring Deposit</Link></li>
            {/* <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP'  >View Update Nominee</Link></li> */}
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='/user/account/renew-fd' className='DropDown_Sub_Lists_Loan_BankingAPP' >Closure/Renewal of Fixed Deposit</Link></li>
           </ul>
        </div>
      )}

      </div>
      </div>

     <div className='DropDown_loan_content_Side'>
     <div className='dropdown_flex_trial'>
        <div className='DropDown_loan_list_Ditems'>
      <div className="DropDown_Main_Loan_BankingAPP  " onClick={toggleLoanDropdown}>
      <i class="Drop_down_ICo fa-solid fa-piggy-bank fa-lg mr-2"></i>
        Loan 
        {/* {bankAccountArrowUp ? <i className="dropdown_arrow_down fa-solid fa-chevron-up"></i> */}
        {/* //  : <i className="dropdown_arrow_down fa-solid fa-chevron-down"></i>} */}
 
      </div>
      </div>
      <div className='DropDown_loan_list_subitems'>
      {loanDropdown && (
        <div className="DropDown_Direct_smainloanb_Loan_BankingAPP">
          <ul className='DropDown_Sub_UNORD_Lists_Loan_BankingAPP'>
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='/user/loanaccounts' className='DropDown_Sub_Lists_Loan_BankingAPP' >Link my loan accounts</Link></li>
            {/* <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP' >Request for Re dispatch of Home Loan Document</Link></li>
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP' >Request of NOC for Vehicle Loans</Link></li>
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP' >Request for IT Certificate for Closed Home Loan</Link></li> */}
           </ul>
        </div>
      )}
      </div>
      </div>
      </div>
      <div className='DropDown_Demat_main_content_Side'>
      <div className='dropdown_flex_trial'>
        <div className='DropDown_demat_list_Ditems'>
<div className="DropDown_Demat_Header_BankingAPP  " onClick={toggleDematDropdown}>
<i class="Drop_down_ICo fa-solid fa-money-bill-trend-up fa-lg mr-2"></i>
        Demat
         {/* {bankAccountArrowUp ? <i className="dropdown_arrow_down fa-solid fa-chevron-up"></i> */}
         {/* : <i className="dropdown_arrow_down fa-solid fa-chevron-down"></i>} */}
       </div>
      </div>
      <div className='DropDown_demat_list_subitems'>
      {dematDropdown && (
        <div className="DropDown_Direct_sdematb_content_BankingAPP">
          <ul className='DropDown_Sub_UNORD_Lists_Loan_BankingAPP'>
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='/user/demataccount' className='DropDown_Sub_Lists_Loan_BankingAPP'  >Link Demat User ID to existing User ID</Link></li>
           </ul>
        </div>
      )}
      </div>
      </div>
</div>
      
      <div className='DropDown_lLinkAcct_content_Side'>
      <div className='dropdown_flex_trial'>
        <div className='DropDown_LinkAcctPol_list_Ditems'>
<div className="DropDown_LinkAcctPol_Header_BankingAPP  " onClick={toggleLinkAccountsDropdown}>
<i class="Drop_down_ICo fa-solid fa-link mr-2"></i>
        Link Accounts/Policies 
         {/* {bankAccountArrowUp ? <i className="dropdown_arrow_down fa-solid fa-chevron-up"></i> */}
         {/* : <i className="dropdown_arrow_down fa-solid fa-chevron-down"></i>} */}
       </div> 
      </div>
      <div className='DropDown_LinkAcctpol_list_subitems'>
      {linkAccountsDropdown && (
        <div className="DropDown_Direct_sLAPb_content_BankingAPP">
          <ul className='DropDown_Sub_UNORD_Lists_Loan_BankingAPP'>
            {/* <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP'  >Link Savings Account to User ID</Link></li>
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP' >Link my Credit card to User ID</Link></li> */}
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='/user/loanaccounts' className='DropDown_Sub_Lists_Loan_BankingAPP'  >Link my loan accounts</Link></li>
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='/user/demataccount' className='DropDown_Sub_Lists_Loan_BankingAPP' >Link Demat User ID to existing User ID</Link></li>
            {/* <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP'  >Link My ICICI Prudential policy</Link></li>
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP'  >Get user id Joint account (Secondary holder)</Link></li> */}
           </ul>
        </div>
      )}
      </div>
      </div>
      </div>
      <div className='DropDown_Forex_content_Side'>
      <div className='dropdown_flex_trial'>
        <div className='DropDown_Forex_list_Ditems'>
{/* <div className="DropDown_Forextrav_Header_BankingAPP  " onClick={toggleForexTravelCardsDropdown}>
<i class="Drop_down_ICo fa-solid fa-users-line mr-2"></i>
        Forex & Travel cards  */}

        
       {/* </div> */}
      </div>
      <div className='DropDown_lForex_list_subitems'>
      {forexTravelCardsDropdown && (
        <div className="DropDown_Direct_sforexb_content_BankingAPP">
          <ul className='DropDown_Sub_UNORD_Lists_Loan_BankingAPP'>
           
            {/* <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP' >Request for CCIL Deal Limit</Link></li>
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP' >Request for CCIL Deal Limit Modification</Link></li>
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP' >Request for CCIL Deal Limit Cancellation</Link></li> */}
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'>
              <Link to='/user/fundtransfer/inward-remitance' className='DropDown_Sub_Lists_Loan_BankingAPP' >Request for Outward Remittance</Link></li>
           </ul>
        </div>
      )}
      </div>
</div>
</div>
<div className='DropDown_Forex_content_Side'>
      <div className='dropdown_flex_trial'>
        <div className='DropDown_Pockets_list_Ditems'>
  {/* <div className=" DropDown_Pockets_Header_BankingAPP  " onClick={togglePocketsDropdown}>
  <i class="Drop_down_ICo fa-brands fa-get-pocket fa-xl mr-2"></i>
        Pockets
        {/* </div> */} 
      </div>
      <div className='DropDown_Pockets_list_subitems'>
      {pocketsDropdown && (
        <div className="DropDown_Direct_spocketsb_content_BankingAPP ">
          <ul className='DropDown_Sub_UNORD_Lists_Loan_BankingAPP'>
            <li className='DropDown_Sub_Lists_Loan_BankingAPP'><Link to='' className='DropDown_Sub_Lists_Loan_BankingAPP'  >Request for Pockets Wallet</Link></li>
           </ul>
        </div>
      )}
 
      {/* Content based on the selected sub-header */}
     </div>
      </div>
      </div>
     
    </div>
    </div>
  );
};

export default DropDownBankAccount;
 