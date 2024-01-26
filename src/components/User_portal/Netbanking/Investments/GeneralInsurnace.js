import React from 'react'
import './investments.css'

function GeneralInsurance() {
  return (
    <div className='container-fluid' style={{marginTop:'70px'}}>
      <div className='row'>
        <div className='col-md-12'style={{backgroundColor:'#f18121',fontWeight:'200',height:'40px'}}>
        <h6 className='general_insurance4'>Health Shield 360 Top Up</h6>
      </div>
      </div>
      <div className='row' style={{border:'1px solid black',height:'250px'}}>
      <div className="col-md-1"style={{backgroundColor:'darkblue'}}>
                <img className="insurance_rupee" src="https://i.pinimg.com/originals/71/93/b6/7193b6b1e92ddff72a4f84494c803b78.png" alt='rupee' style={{height:'50px',width:'50px'}}></img>
              </div>
        <div className='col-md-3'style={{backgroundColor:'darkblue'}}>
      <div className='general_insurance5'>
      <div>Health Top Up</div>
                <div style={{paddingBottom:'20px'}}>up to ₹50 Lakhs</div>
                <div class="dashed-line"></div>
                <div style={{paddingTop:'20px'}}>Premium Starting</div>
                <div>at ₹8/day*</div>
      </div>
      </div>
      <div className='col-md-5' style={{backgroundColor:'#f8f9fa'}}>
      <div className='general_insurance6'>
      <div>
                  {" "}
                  <img
                    className="green_tick_generalinsurance"
                    src="https://th.bing.com/th/id/OIP.epH7VwqAusKTkt6VdozRBAAAAA?rs=1&pid=ImgDetMain" alt='green tick'
                  ></img>
                  <label className="green_tick_with_text">
                    Cover upto Rs.50 Lakhs
                  </label>
                </div>
                <div>
                  {" "}
                  <img
                    className="green_tick_generalinsurance"
                    src="https://th.bing.com/th/id/OIP.epH7VwqAusKTkt6VdozRBAAAAA?rs=1&pid=ImgDetMain" alt='green tick'
                  ></img>
                  <label className="green_tick_with_text">
                    Deduction upto Rs.50 Lakhs
                  </label>
                </div>
                <div>
                  {" "}
                  <img
                    className="green_tick_generalinsurance"
                    src="https://th.bing.com/th/id/OIP.epH7VwqAusKTkt6VdozRBAAAAA?rs=1&pid=ImgDetMain" alt='greentick'
                  ></img>
                  <label className="green_tick_with_text">
                    No Pre Policy Medical Check Up
                  </label>
                </div>
      </div>
      </div>

      <div className='col-md-3' style={{backgroundColor:'#f8f9fa'}}>
      <div className='general_insurance7'>
      <button className="enroll_name_generalinsurance">ENROLL NOW</button>
                <div className="label_gi">
                  To know more. <button className="button_insurance">Click Here</button>
      </div>
      </div>
       </div>
    </div>
    <div className="policy_generalinsurance">
            {" "}
            Policy working and characterstics{" "}
          </div>
    </div>
  )
}

export default GeneralInsurance;