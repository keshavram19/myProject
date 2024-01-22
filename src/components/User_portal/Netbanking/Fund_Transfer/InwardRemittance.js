import React  from 'react';
 import './FundTransfer.css';
   

const InwardRemitance = () => {
 

 
  return (
    
    
    
     
    <div className='col-sm-12'>
      {/* <div className='inwardbank-header'></div> */}
    
    <div className="Inward_Remitance_container">
      <div className='row'>
        <div className='col-md-12'>
       <p className='Inward_smart_wire_ptag'>SMART WIRE
      <p className='bankingapp_inward_ptag'>Receiving money from overseas just got simpler & smarter !</p>
      </p>
      <div className="Inward_benefits">
        <p className='Inwbenifits_tag_hfive'>Benefits of Inward Wire Transfer</p>
        <div className='inward_ullist'>
        <ul className='inward_remitance_flex'>
          <li ><span className='inward_span_tag_main'><i class="icons_inwardrem fa-solid fa-clock-rotate-left fa-xl"></i>     
Fast & secure</span> money transfer</li>
<li><span className='inward_span_tag_main'><i class=" icons_inwardrem fa-solid fa-jar fa-xl"></i>Pre-filled </span> information</li>

         </ul>
        <ul className='inward_remitance_flex'>
          <li><span className='inward_span_tag_main'><i class="icons_inwardrem fa-solid fa-money-bill-transfer fa-xl"></i>Online tracking </span>of your money</li>

          <li><span className='inward_span_tag_main'><i class=" icons_inwardrem fa-solid fa-hand-holding-dollar fa-xl"></i>Option to fix </span> exchange rates</li>
        </ul>
        </div>
      </div> 
      <div className="   Inward_box_type_border">
        <div className=" Inward_box_type_select row">
          <div className="Inward_pink_box_request pt-3 col-sm-4">
          <h6>Request Inward remittance in 4 simple steps </h6>
            <hr />
            <div className='Inward_four_main_lists  ml-3'>
                <p className='Inward_four_lists'><span className='one_inward'>1</span>  Enter transfer details</p>
              <p className='Inward_four_lists'><span className='two_inward'>2</span> Submit details /declerations</p>
              <p className='Inward_four_lists'><span className='two_inward'>3</span> Option to book FX deal</p>
              <p className='Inward_four_lists'><span className='four_inward'>4</span> Share request form</p>
            </div>

           </div>
           <div className='Inward_pink_side_box col-sm-4 pt-3'>
            <p className='Inward_four_lists'>Select account number for receiving the remittance</p>
            
            <div className='Inward_part_two'>
            <p>Account Number</p>
             <select className='Inward_sel_Inacct_numbr' id="InwardaccountNumber"
             name="accountNumber">
               <option  value="">Select</option>
                <option value="123456789">123456789</option>
                 <option value="987654321">987654321</option>
              </select>
            </div>
            <p className='Inward_four_lists  mt-1 ' >Go ahead! submit details to receive remittance with Royal Islamic Bank SMART WIRE service</p>
            <button className='inward_submit_app mb-2' type="submit">Generate Request</button>

           </div>
           
          </div>
    </div>     
     </div>
    
    </div>
    </div>
    </div>


  );


      
};

export default InwardRemitance