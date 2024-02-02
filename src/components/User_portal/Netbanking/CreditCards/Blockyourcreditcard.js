import React from 'react';


 function BlockCreditCard() {
  return (
   <>
      <div className='container-fluid'>
      <h2 className='Block_Credit_Card_heading1 p-2' style={{color:'#EA6A47'}}>Service Requests</h2>
        <div className='Block_Credit_Card_MainContainer mt-3' style={{ backgroundColor:'#f8f7f5'}}>
          
          <div className='Block_Credit_Card_Section'>
            <h4 className='Block_Credit_Card_Section_heading2 p-3' style={{ backgroundColor:'#e7e3e3'}}>Block Credit Card</h4>
                        
         <label for='crediCardNumber' className='form-inline pt-4'>
          <span className='col-md-3'>Credit Card Number:</span>
          <select name="cardNumber" className="custom-select custom-select-sm col-md-3 w-25">
                          <option selected>-----Please Select-----</option>
                              <option value="option1">123456789012</option>
                              <option value="option2">123456789012</option>
                              <option value="option3">123456789012</option>
                      </select>
         </label>
          </div>
          <hr/>
          <button className='Block_Credit_Card_submitBtn p-2 m-3'>SUBMIT</button>
        


        </div>
        <div className='blockcreditcard_note pt-2'>
         <h6 className='m-0'>Notes:</h6>
          <p > 1. Once you block or hotlist your card, you will not be able to use it again.</p>
         </div>

      </div>

      
   </>
  )
}
export default  BlockCreditCard