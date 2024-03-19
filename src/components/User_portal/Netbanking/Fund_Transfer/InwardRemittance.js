import React, { useState , useEffect } from 'react';
import './FundTransfer.css';
import PaymentSidebar from '../Sidebar/PaymentsAndTransferSidebar';
import axios from 'axios';  
import apiList from '../../../../lib/apiList';
 
// 
function InwardRemitance () {
   const [transferDetails, setTransferDetails] = useState({
    accountNumber: '',
    beneficiaryName: '',
    beneficiaryAddress: '',
    beneficiaryAccountNumber: '',
    beneficiaryIfscCode: '',
    PhoneNumber: '',
    reviewAccuracy: false,
    purposeOfRemittance: '',
    bookFXDeal: false,
    amount:'',
    currency:''
  
  });
  const [alertMessage, setAlertMessage] = useState('');
//  


  // 
  const [accountNumberOptions, setAccountNumberOptions] = useState([]);

  useEffect(() => {
    fetchAccountNumber();
  }, []);
  const fetchAccountNumber = async () => {
    try {
      // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzRhODcwNDM4Mzc5YTA4M2RkZDc2NCIsImlhdCI6MTcxMDI2NzkzNiwiZXhwIjoxNzEwMjY3OTk2fQ.Jecq0iY5aTgJWxFR-i7bTiaGlVM3kSYSCwjP-JRVRvM'; // Replace this with your actual token
      const token = sessionStorage.getItem('loginToken');

      const response = await axios.get(apiList.requestedUserDetailsByEmail ,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }); 
 
      // const response = await axios.get('http://localhost:4444/auth/user-account-details');
      const  {accountNumber}  = response.data.user;
      setTransferDetails(prevState => ({
        ...prevState,
        accountNumber: accountNumber
      }));
    } catch (error) {
      console.error('Error fetching account number:', error);
    }
  };
  // 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !transferDetails.accountNumber ||
      !transferDetails.beneficiaryName ||
      !transferDetails.beneficiaryAddress ||
      !transferDetails.beneficiaryAccountNumber ||
      !transferDetails.beneficiaryIfscCode ||
      !transferDetails.PhoneNumber ||
      !transferDetails.purposeOfRemittance ||
      !transferDetails.reviewAccuracy ||
      !transferDetails.currency ||
      !transferDetails.amount
        
  ) {
      // Set alert message to prompt the user to complete all details
      // setAlertMessage('Please complete all details before submitting.');
      alert('Please fill in all the details completely and review the information for accuracy by checking the checkbox.');
    
      return; // Prevent form submission
  }else if (!transferDetails.reviewAccuracy) {
    alert('Please agree by checking the checkbox to continue.');
    return; // Prevent form submission
  }
    try {
        //  const response = await axios.post('http://localhost:4444/api/submitForm', transferDetails);
        const token = sessionStorage.getItem('loginToken');

        const response = await axios.post(apiList.inwardRemittance, transferDetails, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }); 
        console.log(response.data);
        alert("user registered succeesfully");
  

             setTransferDetails({
              accountNumber: '',
              beneficiaryName: '',
              beneficiaryAddress: '',
              beneficiaryAccountNumber: '',
              beneficiaryIfscCode: '',
              PhoneNumber: '',
              reviewAccuracy: false,
              purposeOfRemittance: '',
              bookFXDeal: false,
              amount:'',
              currency:''
            });
 

        console.log(response.data);  
    } catch (error) {
        console.error('Error submitting form:', error);
     }
};
  // inward remittance backend ends

  // 
   const handleAccountNumberChange = (e) => {
    
    setTransferDetails({
      ...transferDetails,
      accountNumber: e.target.value,
    });
  };


  return (

<>
       <div className='container-fluid' style={{marginTop:"90px"}}> 

          

 
      <div className="Inward_Remitance_container">
                <div className='row'>
                <div className='col-3'>
            <PaymentSidebar/>
            </div>
          <div className='col-9'>
            <p className='Inward_smart_wire_ptag'>SMART WIRE
              <p className='bankingapp_inward_ptag'>Receiving money from overseas just got simpler & smarter !</p>
            </p>
            <div className="Inward_benefits">
              <p className='Inwbenifits_tag_hfive'>Benefits of Inward Wire Transfer</p>
              <div className='inward_ullist'>
                <ul className='inward_remitance_flex'>
                  <li ><span className='inward_span_tag_main'>
                    <i class="icons_inwardrem fa-solid fa-clock-rotate-left fa-xl"></i>
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
                    
                  
                  </div>
                  <p className='Inward_four_lists  mt-1 ' >Go ahead! submit details to receive remittance with Royal Islamic Bank SMART WIRE service</p>
 
                </div>
                <div className='mt-3'>
      <p className='Inward_remittance_Request_Form_one'>Enter Transfer Details:</p>
      <form className='Inward_remittance_Request_Form' onSubmit={handleSubmit}>
       
       {/* Another input form */}
       <label className='acctnum_inward_head'>Account Number:</label>
       
        
                <select
  className='Inward_sel_Inacct_numbr'
  value={transferDetails.accountNumber}
  onChange={handleAccountNumberChange}
>
  <option value="">Select</option>
  <option value={transferDetails.accountNumber}>{transferDetails.accountNumber}</option>
</select>
          
            {/* <select className='Inward_sel_Inacct_numbr'
               value={transferDetails.accountNumber}
              onChange={handleAccountNumberChange}
            >
              <option value="">Select</option>
             <option value="number">{accountNumber}</option>
              {/* <option value="123456789">123456789</option>
              <option value="987654321">987654321</option> 
             </select> */} 
            {/* ends input form */}
            <br/>
            <div className='inward_remittance_fields_Row'>
              <div>
        <label className='Inward_remittance_Request_Label'>
          Beneficiary Name:</label>
        <input className='Inward_remittance_Request_input_form'
          type="text"
          value={transferDetails.beneficiaryName}
          onChange={(e) =>
            setTransferDetails({
              ...transferDetails,
              beneficiaryName: e.target.value,
            })
          }
        />
        </div>
        <div className='Inward_remittance_row_two'>
          <label className='Inward_remittance_Request_Label'>Beneficiary Address:</label>
        <input className='Inward_remittance_Request_input_form'
          type="text"
          value={transferDetails.beneficiaryAddress}
          onChange={(e) =>
            setTransferDetails({
              ...transferDetails,
              beneficiaryAddress: e.target.value,
            })
          }
        />
        </div>
                </div>
<div className='inward_remittance_fields_Row'>
  <div>
          <label className='Inward_remittance_Request_Label'>Beneficiary Bank Account Number:</label>
        <input className='Inward_remittance_Request_input_form'
          type="text"
          value={transferDetails.beneficiaryAccountNumber}
          onChange={(e) =>
            setTransferDetails({
              ...transferDetails,
              beneficiaryAccountNumber: e.target.value,
            })
          }
        />
        </div>
        <div className='Inward_remittance_row_two'>
         <label className='Inward_remittance_Request_Label'>Beneficiary Phone Number:</label>
        <input className='Inward_remittance_Request_input_form'
          type="text"
          value={transferDetails.PhoneNumber}
          onChange={(e) =>
            setTransferDetails({
              ...transferDetails,
              PhoneNumber: e.target.value,
            })
          }
        />
        </div>
        </div>
         <div className='inward_remittance_fields_Row'>
          <div>
         <label className='Inward_remittance_Request_Label'>Beneficiary Ifsc Code:</label>
        <input className='Inward_remittance_Request_input_form'
          type="text"
          value={transferDetails.beneficiaryIfscCode}
          onChange={(e) =>
            setTransferDetails({
              ...transferDetails,
              beneficiaryIfscCode: e.target.value,
            })
          }
        />
        </div>
          <div className='Inward_remittance_row_two'>
        <label className='Inward_remittance_Request_Label'>Purpose of Remittance:</label>
         {/* <p className='Inward_remittance_Request_form_ptag_Pur'>Purpose of Remittance </p> */}
          <input  
            className='Inward_remittance_Request_input_form' 
            type="text"
            value={transferDetails.purposeOfRemittance}
            onChange={(e) =>
              setTransferDetails({
                ...transferDetails,
              purposeOfRemittance:e.target.value,
                
           
              })
            }
          />
         </div>
         </div>
          {/* new fields */}
          <div className='inward_remittance_fields_Row'>
            <div>
            <label className='Inward_remittance_Request_Label'>Amount:</label>
            <input className='Inward_remittance_Request_input_form'
              type="text"
              value={transferDetails.amount}
              onChange={(e) =>
                setTransferDetails({
                  ...transferDetails,
                  amount: e.target.value,
                })
                }
              />
</div>
<div className='Inward_remittance_row_two'>
  <label className='Inward_remittance_Request_Label'>Currency:</label>
  <input className='Inward_remittance_Request_input_form'
    type="text"
    value={transferDetails.currency}
    onChange={(e) =>
      setTransferDetails({
        ...transferDetails,
        currency: e.target.value,
      })
    }
  />
</div>
</div>

          {/* new fields ends  */}

        {/* Other fields for transfer details... */}

        <p className='Inward_remittance_Request_Form_one_Sub'>Submit Details/Declarations:</p>
        <label className='Inward_remittance_Request_form_checkbox'>
          <input
            className='Inward_remittance_Request_input_form_check'
            type="checkbox" 
            checked={transferDetails.reviewAccuracy}
            onChange={(e) =>
              setTransferDetails({
                ...transferDetails,
                reviewAccuracy: e.target.checked,
              })
            
            }
          />
                 <p className='Inward_remittance_Request_form_ptag_Del'>Review Information for Accuracy</p>

      </label>

 
        {/* <h2 className='Inward_remittance_Request_one'>Option to Book FX Deal:</h2> */}
        {/* <label className='Inward_remittance_Request_Label'> */}
         <label className='Inward_remittance_Request_form_checkbox'>
          <input 
          className='Inward_remittance_Request_input_form_check'
            type="checkbox"
            // checked={fxDeal.bookFXDeal}
            checked={transferDetails.bookFXDeal}

            onChange={(e) =>
              // setFXDeal({ ...fxDeal, bookFXDeal: e.target.checked })
              setTransferDetails({
                ...transferDetails,
                bookFXDeal: e.target.checked,
              })

            } 
          />
                  {/* <p className='Inward_remittance_Request_form_Option'>Option to Book FX Deal</p> */}
                  <p className='Inward_remittance_Request_form_ptag_Del'>Option to Book FX Deal</p>

        </label>
        {/* Other fields for FX deal... */}

        <p className='Inward_remittance_Request_one'>Share Request Form:</p>
        <button className ='Inward_remittance_Request_form_ptag' type="submit"
         disabled={!transferDetails.reviewAccuracy}
        >Generate Request Form</button>
        {/* Other fields for request form... */}
      </form>
    </div>

              </div>
            </div>
          
    {/* {alertMessage && (
                <div className="alert alert-success mt-2" role="alert">
                  {alertMessage}
                </div>
              )} */}

          </div>
         
        
</div>

        </div>

          </div>
         

   </>
 
  ); 

 

};

export default InwardRemitance ;

 