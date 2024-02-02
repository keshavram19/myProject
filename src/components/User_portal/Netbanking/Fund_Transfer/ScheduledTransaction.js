import React, { useState, useRef } from 'react';  
import axios from 'axios';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
 import 'jspdf-autotable';
 import './FundTransfer.css'
import PaymentSidebar from '../Sidebar/PaymentsAndTransferSidebar';
// import apilist from '../../../../lib/apiList';
import apiList from '../../../../lib/apiList';

const ScheduledTransaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [transactionType, setTransactionType] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const transactionsRef = useRef(null);


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
    const input = transactionsRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('transactions.pdf');
    });
  };

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
      
            <h6 className='main_my_scheduled_tran'>Scheduled Transactions</h6> 
            
      
       
           <div className='my_main_header_transch'>
             <div className="search_section_mainheader_mytran">
             <h6>Search Transactions</h6>
             </div>
             <div className="myalabel_trans_type_sch">
               <label className='mya_sch_transaction_Type'
                htmlFor="transactionType">Transaction Type:
                </label>
               
                 <select className='my_Tatransaction_Type'
                  id='transactionType'
                   value={transactionType} onChange={(e) =>
                    setTransactionType(e.target.value)}>
                 <option value="">All</option>
                 <option value="payment">Payment</option>
                 <option value="transfer">Transfer</option>
                </select>
             </div>
             <hr/>
             
             <button className="btn btn-primary mya_sch_searchbtn"
             type='submit'
              onClick={handleSearch}>Search</button>

             <hr/>
             </div>
             {errorMessage && <p>{errorMessage}</p>}

 {/* Table data starts here */}
                            <div className='Transaction_type_table_mail'>
                             <div ref={transactionsRef}>

                                {transactions.length > 0 && (
                                    <table  class="table table-striped  table-hover ">
                                         <thead>
                                                <tr className='Transaction_type_Table_row'>
                                                  {/* <th >Sender Name</th> */}
                                                  <th>Receiver Name</th>
                                                  <th>Account Number</th>
                                                  <th>Phone Number</th>
                                                  <th>Payment Transfer Time</th>
                                                  <th>Transfer Date</th>
                                                  <th>IFSC Code</th>
                                                  {/* <th>Transaction Type</th> */}
                                                  <th>Amount</th>
                                                  <th>Generated Date</th>
                                                </tr>
                                              </thead>
                                        <tbody>
                                            {transactions.map((transaction) => (
                                                <tr className='Transaction_type_row_data' key={transaction._id}>
                                                    {/* <td>{transaction.senderName}</td> */}
                                                      <td>{transaction.receiverName}</td>
                                                      <td>{transaction.accountNumber}</td>
                                                      <td>{transaction.phoneNumber}</td>
                                                      <td>{transaction.paymentTransferTime}</td>
                                                      <td>{transaction.transferDate}</td>
                                                      <td>{transaction.ifscCode}</td>
                                                      {/* <td>{transaction.transactionType}</td> */}
                                                      <td>{transaction.amount}</td>
                                                      <td>{transaction.generatedDate}</td>
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
                 <option value="csv">CSV file</option>
                </select>

              
               <button type='submit' className="My_transac_download_ok_button" onClick={handleDownloadPDF}>
                OK
              </button>
             </div>

     
            
     
             
           </div>
          </div>
        </div>

    </div>
    
      </>

  );
};

export default ScheduledTransaction;



















 