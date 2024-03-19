import React, { useState } from "react";
import "./FundTransfer.css";
import axios from 'axios';
import PaymentSidebar from "../Sidebar/PaymentsAndTransferSidebar";
import apiList from "../../../../lib/apiList";
 
  // taxcenter starts 
  const TaxCenter = () => {
    
    const [mobileNumber, setMobileNumber] = useState('');
    const [otp, setOTP] = useState('');
    const [message, setMessage] = useState('');

    // const [message, setMessage] = useState('');
    const [showResendButton, setShowResendButton] = useState(false); 

    const generateOTP = async () => {
      try {
               
        // const response = await axios.post('http://localhost:4444/api/generate-otp');
              const response = await axios.post
              (apiList.taxOTPGenerate);

        setMessage(response.data.message);

        setShowResendButton(true); 

      } 
    //   
      catch (error) {
        console.error('Error generating OTP:', error);
        setMessage('Failed to generate OTP.');
      }
    };
  
    const resendOTP = async () => {
      try {
        // const response = await axios.post('http://localhost:4444/api/resend-otp');
        const response = await axios.post(apiList.taxOTPReSend);
        setMessage(response.data.message);
      } catch (error) {
        console.error('Error resending OTP:', error);
        setMessage('Failed to resend OTP.');
      }
    };
    const verifyOTP = async () => {
    //   
    try {
      // const response = await axios.post('http://localhost:4444/api/verify-OneTP', { mobileNumber, otp });
      const response = await axios.post(apiList.taxOTPVerify, { mobileNumber, otp });
      setMessage(response.data.message);
      alert("OTP verified successfully");
      setOTP('');

    } catch (error) {
      console.error('Error verifying OTP:', error);
      setMessage('Error verifying OTP.');
    }
  };
  //   taxcenter ends 
 
  
  
  return (

    <>
      <div className="container-fluid" style={{marginTop:"90px"}}>
        <div className="row">
          <div className="col-3">
            <PaymentSidebar/>
          </div>
          <div className="col-9">
          <div className="tax_centerbank_page col-sm-12">
 
      {/* <p className="ptax_for_tax text-left">Under tax center, View</p> */}
     

      <div className="user_authenti_tax_header ">
        <p className="user_header_tax_color">User Authentication Details</p>
        <hr className="Tax_hrline_box_shadow" />
        <div className="light_bg_color_tax">
          <p className="ptag_tax_center">
            Please Enter These Details to Authorize
          </p>
          <div className="pl-2">
            <p className="Tax_ptag_please_para">
              Please enter these details to authorize the transaction
              <p className="Tax_ptag_please_para mt-2">Click on the Generate OTP button to get the OTP to your registered mobile number</p>
            </p>
            <div className=" Tax_ptag_please_para">
              
            </div>
               <div>
              
       

      <input className="otp_Tax_div_label" type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOTP(e.target.value)} />
                  
                   { !showResendButton ? (
                        <button className="Tax_center_but_appGen mr-3" onClick={generateOTP}>
                          Generate OTP
                        </button>
                      ) : (
                        <>
                          <button className="Tax_center_but_appGen mr-3" onClick={resendOTP}>
                            Re-Send OTP
                          </button>
                          <button className="Tax_center_but_appGen" onClick={verifyOTP}>Verify OTP</button>
                        </>
                      )}
                      <br />
      {message && <p>{message}</p>}
      </div>
      {/* taxcenter ends  */}
            <p className="otp_tax_matters">
              OTP has been generated with a validity of 100 seconds and sent to
              your registered mobile number.
              <p className="otp_tax_matters">
                {" "}
                If there is a delay in receipt of OTP, you can send a request to
                receive it. SMS IBOTP to 5575700 or 9215676708. Request should
                be sent from the mobile number registered in our records.
                <p className="otp_tax_matters">
                  Please do not share OTP with anyone, even if the person claims
                  to be an Royal Islamic Bank official.For further details
                  Please
                  <span className="Tax_click_here_span"> click here </span>
                </p>
              </p>
            </p>
          </div>
          <hr />

          <button className=" Tax_center_but_app" type="button">
 

            Submit
          </button>
 
        </div>
      </div>
      </div>
          </div>
          </div>
        
    </div>
   
      </>
  );
};

export default TaxCenter ;




















// import React, { useState } from "react";
// import "./FundTransfer.css";
// import axios from 'axios';
// import PaymentSidebar from "../Sidebar/PaymentsAndTransferSidebar";
// import apiList from "../../../../lib/apiList";
 
//   // taxcenter starts 
//   const TaxCenter = () => {
    
//     const [mobileNumber, setMobileNumber] = useState('');
//     const [otp, setOTP] = useState('');
//     const [message, setMessage] = useState('');
  
//     const generateOTP = async () => {
      
//       try {
//         // const response = await axios.post('http://localhost:4444/api/send-OneTP', { mobileNumber });
//         const response = await axios.post(apiList.taxOTPSend, { mobileNumber });

//         setMessage(response.data.message);
//       } catch (error) {
//         console.error('Error sending OTP:', error);
//         setMessage('Failed to send OTP.');
//       }
//     };
//     const verifyOTP = async () => {
//     //   
//     try {
//       // const response = await axios.post('http://localhost:4444/api/verify-OneTP', { mobileNumber, otp });
//       const response = await axios.post(apiList.taxOTPVerify, { mobileNumber, otp });
//       setMessage(response.data.message);
//     } catch (error) {
//       console.error('Error verifying OTP:', error);
//       setMessage('Error verifying OTP.');
//     }
//   };
//   //   taxcenter ends 
 
  
  
//   return (

//     <>
//       <div className="container-fluid" style={{marginTop:"90px"}}>
//         <div className="row">
//           <div className="col-3">
//             <PaymentSidebar/>
//           </div>
//           <div className="col-9">
//           <div className="tax_centerbank_page col-sm-12">
 
//       <p className="ptax_for_tax text-left">Under tax center, View</p>
     

//       <div className="user_authenti_tax_header ">
//         <h5 className="user_header_tax_color">User Authentication Details</h5>
//         <hr className="Tax_hrline_box_shadow" />
//         <div className="light_bg_color_tax">
//           <p className="ptag_tax_center">
//             Please Enter These Details to Authorize
//           </p>
//           <div className="pl-2">
//             <p className="Tax_ptag_please_para">
//               Please enter these details to authorize the transaction
//             </p>
//             <div className=" Tax_ptag_please_para">
              
//             </div>
//               {/* tac center starts */}
//               <div>
              
//        <div>
//                     <input className="otp_Tax_div_label" type="text" placeholder="Mobile Number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
//                     <button className="Tax_center_but_appGen" onClick={generateOTP}>Generate OTP</button>
//                   </div>
//       <br />
 
//       <input className="otp_Tax_div_label" type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOTP(e.target.value)} />
//                   <button className="Tax_center_but_appGen" onClick={verifyOTP}>Verify OTP</button>
//                   <br />
//       {message && <p>{message}</p>}
//       </div>
//       {/* taxcenter ends  */}
//             <p className="otp_tax_matters">
//               OTP has been generated with a validity of 100 seconds and sent to
//               your registered mobile number.
//               <p className="otp_tax_matters">
//                 {" "}
//                 If there is a delay in receipt of OTP, you can send a request to
//                 receive it. SMS IBOTP to 5575700 or 9215676708. Request should
//                 be sent from the mobile number registered in our records.
//                 <p className="otp_tax_matters">
//                   Please do not share OTP with anyone, even if the person claims
//                   to be an Royal Islamic Bank official.For further details
//                   Please
//                   <span className="Tax_click_here_span"> click here </span>
//                 </p>
//               </p>
//             </p>
//           </div>
//           <hr />

//           <button className=" Tax_center_but_app" type="button">
 

//             Submit
//           </button>
 
//         </div>
//       </div>
//       </div>
//           </div>
//           </div>
        
//     </div>
   
//       </>
//   );
// };

// export default TaxCenter ;
