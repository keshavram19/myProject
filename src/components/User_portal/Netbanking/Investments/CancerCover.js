import React from 'react'

import './investments.css'
const CancerCover = () =>   {
  return (
    <div className='container-fluid' style={{marginTop:'70px'}}>
        <div className='container-fluid' style={{marginTop:'70px'}} >
         <div className='row'>
         <div className='cover_page1'>
         <div><i class="fa-solid fa-heart-pulse" style={{color:'white'}}></i></div>
         <h6 className='cover_page2'>COVER FOR CANCER AILMENTS UP TO 50 LAKHS</h6>
          </div>
          </div>
          </div>
          <div className='container-fluid'>
            <div className='row' style={{ border:'1px solid black'}}>
              <div className='col-md-6'style={{backgroundColor:"#f8f9fa",paddingLeft:'40px'}}>
                <h5 className='hospital_covercancer1'>HIGHLIGHTS OF THE PRODUCT</h5>
                <li className='hospital_covercancer2'>Upfront payment cover amount before <br style={{paddingLeft:'20px'}}></br>hospitalization</li>
                <li className='hospital_covercancer2'>No restriction of Network Hospitals</li>
                <li className='hospital_covercancer2'>Lumpsum payout upto $ 50 lakhs </li>
                <h6 className='hospital_covercancer25'>Download Brochure</h6>
              </div>
              <div className='col-md-5' style={{backgroundColor:'#f8f9fa'}}>
              <div className='hospital_covercancer99'>
               <div>
               <h5 className='hospital_covercancer1'>Advantages of buying this plan online</h5>
                  {" "}
                  <img
                    className="hospital_covercancer999"
                    src="https://www.shutterstock.com/image-vector/orange-check-mark-icon-tick-600nw-645168988.jpg" alt='green tick'
                  ></img>
                  <label className="hospital_covercancer9900">
                  No medicals required
                  </label>
                </div>
                <div>
                  {" "}
                  <img
                    className="hospital_covercancer999"
                    src="https://www.shutterstock.com/image-vector/orange-check-mark-icon-tick-600nw-645168988.jpg" alt='green tick'
                  ></img>
                  <label className="hospital_covercancer9900">
                   Simple 3 step process
                  </label>
                </div>
                <div>
                  {" "}
                  <img
                    className="hospital_covercancer999"
                    src="https://www.shutterstock.com/image-vector/orange-check-mark-icon-tick-600nw-645168988.jpg" alt='greentick'
                  ></img>
                  <label className="hospital_covercancer9900">
                    Manage your policy online
                  </label>
                </div>
                <div>
                  {" "}
                  <img
                    className="hospital_covercancer999"
                    src="https://www.shutterstock.com/image-vector/orange-check-mark-icon-tick-600nw-645168988.jpg" alt='greentick'
                  ></img>
                  <label className="hospital_covercancer9900">
                  Auto linking of policy to Internet Banking/iMobile
                  </label>
                </div>
      </div>
                <button className='button_cancercover'>BUY NOW</button>
              </div>
            </div>

          </div>
            <div className='bottom_cancercover'>
              <p>Disclaimer:"ICICI Bank as a corporate agent of ICICI Prudential Life Co.Ltd(ICICI Prulife),is required to share information
                with ICICI Prulife in order to complete your appilication. By clicking on "Buy Now", you provide your consent for the above yo shall enter the ICICI Prulife website and 
                Authorize ICICI Bank representatives too contact you for providing assistant towards the application process."
                W/W1414/2017-18</p>
            </div>

      </div>

         
  )
}

export default CancerCover;