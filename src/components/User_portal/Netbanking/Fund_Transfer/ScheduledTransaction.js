import React, { useState,useEffect, useRef } from 'react';  
import axios from 'axios';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
//  import 'jspdf-autotable';
 import './FundTransfer.css'
import PaymentSidebar from '../Sidebar/PaymentsAndTransferSidebar';
 import apiList from '../../../../lib/apiList';

const ScheduledTransaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [transactionType, setTransactionType] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const transactionsRef = useRef(null);
  const accountNumber = 1124563456;
  const [userDetails, setUserDetails] = useState([]); // Define userDetails state



  const handleSearch = async () => {
    if (transactionType === '') {
      setErrorMessage('Please select a transaction type and click Search.');
      setTransactions([]); // Clear transactions if there's an error
      return;
    }

    try {
      let apiUrl = '';
      if (transactionType === 'payment') {
        apiUrl = apiList.paymentTransaction;
      } else if (transactionType === 'transfer') {
        apiUrl = apiList.transferTransaction;
      }

      const response = await axios.get(apiUrl);
      setTransactions(response.data);
      setErrorMessage(''); // Clear any previous error messages
    } catch (error) {
      console.error('Error retrieving transactions:', error.message);
      setErrorMessage('Error retrieving transactions');
    }
  };


  const handleDownloadPDF = () => {
    // if (!userDetails) {
      if (!
        userDetails || 
        transactions.length === 0) {

      return; // Exit early if userDetails is not defined or populated
    }
    console.log(userDetails);

    const downloadOption = document.getElementById('trandownloadOption').value;
    if (downloadOption !== 'pdf') {
      // If option is not "PDF", do nothing

      return;
      
    }
    const pdf = new jsPDF();

    // const marginLeft = 10;
    // const marginTop = 10;
    // const lineHeight = 6;
    // let currentHeight = marginTop;
    pdf.setFontSize(12);
    // Object.keys(userDetails[0].details).forEach((key, index) => {
    //   pdf.text(`${key}: ${userDetails[0].details[key]}`, marginLeft, currentHeight);
    //   currentHeight += lineHeight;
    // });

     pdf.text(`Account Number: ${userDetails[0].details.userAccountNumber}`, 10, 10);
    pdf.text(`Account Holder Name: ${userDetails[0].details.accountHolderName}`, 10, 20);
    pdf.text(`Branch Bank Name: ${userDetails[0].details.bankBranchName}`, 10, 30);
    pdf.text(`Account type : ${userDetails[0].details.userAccountType}`, 10, 40);
    pdf.text(`Account Holder DOB: ${userDetails[0].details.userDateOfBirth}`, 10, 50);
    pdf.text(`Bank Branch IfscCode: ${userDetails[0].details.bankBranchIfscCode}`, 10, 60);
    pdf.text(`Account Balance: ${userDetails[0].details.userAccountBalance}`, 10, 70);
    pdf.text(`Mobile Number: ${userDetails[0].details.userMobileNumber}`, 10, 80);
    pdf.text(`Email ID: ${userDetails[0].details.userEmailId}`, 10, 90);

    // // Save the PDF file
    // pdf.save('user_details.pdf');
//  

    // const input = transactionsRef.current;
    // html2canvas(input).then((canvas) => {
    //   const imgData = canvas.toDataURL('image/png');
    //   // const pdf = new jsPDF();
    //   pdf.addImage(imgData, 'PNG', 10, 100);
    //   // pdf.save('transactions.pdf');
    //   pdf.save('transactions_and_user_details.pdf');

  //   const input = transactionsRef.current;
  //   html2canvas(input).then((canvas) => {
  //     const imgData = canvas.toDataURL('image/png');
  //     pdf.addImage(imgData, 'PNG',5 , 100); // Adjust width and height as needed
  //     pdf.save('transactions_and_user_details.pdf');
  //   });
  // // };
   // const tableWidth = 180; // Adjust width as needed
  // const tableHeight = 150; // Adjust height as needed
  // pdf.rect(marginLeft - padding, currentHeight - padding, tableWidth + padding * 2, tableHeight + padding * 2);

 
  const input = transactionsRef.current;
  html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    pdf.addImage(imgData, 'PNG',2, 100); // Adjust width and height as needed
    pdf.save('transactions_and_user_details.pdf');
  });
};
   
const fetchData = async () => {
  try {
      const response = await axios.get(`${apiList.customerAccountDetails}${accountNumber}`);
      const userDetailsData = response.data;

      // Update state with fetched user details
      setUserDetails([userDetailsData]);
  } catch (error) {
      console.error('Error fetching user details:', error);
  }
};
useEffect(() => {
  // Fetch user details when component mounts
  fetchData();
}, []);

console.log(userDetails);

  return (
    <>

      <div className='container-fluid' style={{marginTop:"90px"}}>
        <div className='row'>
          <div className='col-3'>
            <PaymentSidebar/>
          </div>
          <div className='col-9'>
          <div className="My_sch_transaction">
             
             <div className="sub_heading_myschedule_Trans">
             </div>  
             
            {/* <hr/> */} 
      
            <p className='main_my_scheduled_tran'>Scheduled Transactions</p> 
            {/* <div className="row">
                    <div className="col-sm-4">
                      <label for="text">Select the Account*</label>
                    </div>
                    <div className="col-sm-3">
                      <select
                        className="form_input"
                        value={selectedAccount}
                        onChange={handleAccountChange}
                      >
                        {userDetails.map((account, index) => (
                          <option key={index} value={account.userAccountNumber}>
                            {account.userAccountNumber}
                            <p>-{account.accountHolderName}</p>
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
      {/* starts */}
      {/* <div className="row mt-5">
                    <div className="col-sm-4">
                      <label for="text">Mobile Number*</label>
                    </div>
                    <div className="col-sm-3">
                      <input
                        type="text"
                        className="form_input"
                        id="text"
                        value={`XXXXXX${String(lastFourDigits).slice(-4)}`}
                      />
                    </div>
                    </div> */} 
      {/* ends */}
       
           <div className='my_main_header_transch'>
             <div className="search_section_mainheader_mytran">
             <p>Search Transactions</p>
             </div>
             <div className="myalabel_trans_type_sch">
               <label className='mya_sch_transaction_Type'
                htmlFor="transactionType">Transaction Type:
                </label>
               
                 <select className='my_Tatransaction_Type'
                  id='transactionType'
                   value={transactionType} onChange={(e) =>
                    setTransactionType(e.target.value)}>
                 <option value="">SELECT</option>
                 <option value="payment">Payment</option>
                 <option value="transfer">Transfer</option>
                </select>
             </div>
             <hr/>
             
             <button className="mya_sch_searchbtn"
             type='submit'
              onClick={handleSearch}>Search</button>

             <hr/>
             </div>
             {errorMessage && <p>{errorMessage}</p>}

 {/* Table data starts here */}
                            <div className='Transaction_type_table_mail'>
                             <div ref={transactionsRef}>

                                {transactions.length > 0 && (
                                    <table style={{ width: '86%',   }}  class="table table-striped table-hover  ">
                                        {/* width for table */}
                                       
                                   {/* width for table */}

                                         <thead>
                                                <tr className='Transaction_type_Table_row'>
                                                    <th>Receiver Name</th>
                                                  <th>Account Number</th>
                                                  <th>Phone Number</th>
                                                  <th>Payment Transfer Time</th>
                                                  <th>Transfer Date</th>
                                                  <th>IFSC Code</th>
                                                   <th>Amount</th>
                                                  <th>Generated Date</th> 
                                                     </tr>
                                              </thead>
                                        <tbody>
                                            {transactions.map((transaction) => (
                                                <tr className='Transaction_type_row_data' key={transaction._id}>
                                                    {/* <td>{transaction.senderName}</td> */}
                                                      <td  >{transaction.receiverName}</td>
                                                      <td  >{transaction.accountNumber}</td>
                                                      <td  >{transaction.phoneNumber}</td>
                                                      <td  >{transaction.paymentTransferTime}</td>
                                                      <td  >{transaction.transferDate}</td>
                                                      <td >{transaction.ifscCode}</td>
                                                      {/* <td>{transaction.transactionType}</td> */}
                                                      <td  >{transaction.amount}</td>
                                                      <td  >{transaction.generatedDate}</td>
                                                 </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )}
                                </div>

                                
                            </div>
  

             <div className="mya_Trasch_download_detail">
               <label className='my_sch_tra_label_downl'
                htmlFor="downloadOption">Download Details As:</label>
               <select className='my_tran_sel_downl'
                 id="trandownloadOption"
                 >
                 <option value="">Select</option>
                 <option value="pdf">PDF file</option>
                 {/* <option value="csv">CSV file</option> */}
                </select>

              
               <button type='submit' className="My_transac_download_ok_button" onClick={handleDownloadPDF}>
                OK
              </button>
             </div>

     
            
     
             
           </div>
          </div>
        </div>

 
{/* Aadhar */}

  
   
{/* Aadhar */}

    </div>
    
      </>

  );
};

export default ScheduledTransaction;






 
 

 










 