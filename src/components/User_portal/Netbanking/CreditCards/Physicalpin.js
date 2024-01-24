import React from 'react';
import { Link } from 'react-router-dom';


 function PhysicalPin() {
  return (
    <>
       <div className='container-fluid'> 
       <h2 style={{color:'#EA6A47'}} className='Physical_PIN_heading1 p-2'>Service Requests</h2>
       <div className='physicalPIN_MainContainer mt-3'style={{ backgroundColor:'#f8f7f5'}}>
        <div className='physicalPIN_heading_Section'style={{ backgroundColor:'#e7e3e3'}} >
           
            <h4 className='Duplicate_PIN_heading2 p-2 m-0'>Duplicate PIN</h4>
            <p className='p-2'><Link to="" style={{textDecoration:'underline', fontSize:'14px', color:'black'}} >Help</Link></p>
            </div>
            <label for="creditCardNumber" className='form-inline pt-4'>
                     <span className='col-md-3'>Credit Card Number* :</span>
                     <select name="cardNumber" className="custom-select custom-select-sm col-md-3">                                                       
                          <option selected>Please Select</option>
                              <option value="option1">123456789012</option>
                              <option value="option2">123456789012</option>
                              <option value="option3">123456789012</option>
                      </select>
                      
                    </label>
                    
        
        <hr/>
          <button className='physicalPin_SubmitBtn m-3'>SUBMIT</button>

          </div>
          <div className='PhysicalPin_notes  pt-2'>
            <h6 className='m-0'>Notes:</h6>
            <p>1. Your duplicate PIN would be mailed to you at your current mailing address of the chosen credit card within 7 working days of submisssion of the request.</p>

          </div>

      

       </div>
    </>
  )
}
export default PhysicalPin