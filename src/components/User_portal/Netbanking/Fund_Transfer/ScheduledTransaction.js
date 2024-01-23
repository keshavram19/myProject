import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './FundTransfer.css'
import PaymentSidebar from '../Sidebar/PaymentsAndTransferSidebar';

const ScheduledTransaction = () => {
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
            <h6 className="sub_heading_myschedule_trans_htag">a. Scheduled transactions</h6> 
            </div>  
             
            {/* <hr/> */} 
      
            <h6 className='main_my_scheduled_tran'>Scheduled Transactions</h6> 
            
            {/* <hr className='hr-line-mya'/> */}
     
            <p className="my_Sch_tag_line"><i class=" mr-1 fa-solid fa-triangle-exclamation   fa-xl"></i>There were no payees found for the selected criteria</p>
      
           <div className='my_main_header_transch'>
             <div className="search_section_mainheader_mytran">
             <h6>Search Transactions</h6>
             </div>
             <div className="myalabel_trans_type_sch">
               <label className='mya_sch_transaction_Type' htmlFor="transactionType">Transaction Type:</label>
               <select className='my_Tatransaction_Type'
                 id="schtransactionType"
                >
                 <option value="">All</option>
                 <option value="payment">Payment</option>
                 <option value="transfer">Transfer</option>
                </select>
             </div>
             <hr/>
             <button className="btn btn-primary mya_sch_searchbtn" type='submit'  >
               Search
             </button>
             <hr/>
             </div>
             <div className="mya_Trasch_download_detail">
               <label className='my_sch_tra_label_downl' htmlFor="downloadOption">Download Details As:</label>
               <select className='my_tran_sel_downl'
                 id="trandownloadOption"
                 >
                 <option value="">Select</option>
                 <option value="pdf">PDF file</option>
                 <option value="csv">CSV file</option>
                </select>
               <button type='submit' className="My_transac_download_ok_button"  >
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