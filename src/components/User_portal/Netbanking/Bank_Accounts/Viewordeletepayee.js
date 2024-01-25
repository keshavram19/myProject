import {useState}from "react";

import './Accounts.css'





const ViewPayee = () => {
  const [activeTab, setActiveTab] = useState('mypayee');
    return (
      

        <>
        <div className="ViewPayee-container">
        <div className=" BankAccount_navbar">
              
              <div className={activeTab === 'Other Royal Islamic Banks Account' ? 'deletePayee_buttonon' : ''} onClick={() => setActiveTab('Other Royal Islamic Banks Account')}>Other Royal Islamic Bank Accounts</div>
              <div className={activeTab === 'Other Bank Accounts' ? 'deletePayee_buttonon' : ''} onClick={() => setActiveTab('Other Bank Accounts')}>Other Bank Accounts</div>
              <div className={activeTab === 'Virtual Account' ? 'deletePayee_buttonon' : ''} onClick={() => setActiveTab('Virtual Account')}>Virtual Accounts</div>
              <div className={activeTab === 'Pending Payee' ? 'deletePayee_buttonon' : ''} onClick={() => setActiveTab('Pending Payee')}>Pending Payees</div>
             
          </div>  
        <hr></hr>
          
            
            

          
                
                
				<div class="row">
				<div class="col-md-4">
					<h6 className='BankAccount_Serach_container'>Search Payee</h6> 
				</div>
				</div>
				<div className='BankAccount_frompages_container'>
				<div class="row mb-3">
                            <div  className="col-md-2">
                                <div className='BankAccount_AccountNumber_container'>
                                <p>Name</p></div>
                                </div>
                            <div  className="col-md-10">
                                <input  type='text' className='BankAccount_inputAccount_container'></input></div>
                 </div>
                <div class="row mb-3">
                            <div  clas="col-md-2">
                            <div className='BankAccount_AccountNickName_container'>
                                <p> NickName</p></div>
                                </div>
                            <div  clas="col-md-10">
                                <input  type='text' className='BankAccount_inputNickName_container'></input></div>
                </div>

				<div class="row mb-3">
                            <div  clas="col-md-2">
                            <div className='BankAccount_AccountNickName_container'>
                                <p> Account Number</p></div>
                                </div>
                            <div  clas="col-md-10">
                                <input  type='text' className='BankAccount_inputNickName_container'></input></div>
                </div>
                   <hr></hr>
				<button className='BankAccount_buttonNext_container'>SEARCH</button>

				</div>
				<div className="row">
					<div className="col-md-12">
						<div className="BankAccount_details_container">
						<p className="BankAccount_download_container">Download details As:
						<select  className='BankAccount_selecttype_container'>
                                
                                <option value="savings" >PDF File</option>
                                <option value="savings" >word</option>
                            </select>
							<button className="button_selectAccount_container"> OK</button></p>
							</div>
					</div>
				</div>
           
               <div className="BankAccount_NoteParagraph_container">
				<p>Notes:</p>
				<p>1. Registration has been disabled due to one of the following reason:</p>
				<span>Due to security / technical reason.</span>
			   </div>
            
                
                


			</div>
        </>
    )
}

  
  

export default ViewPayee;