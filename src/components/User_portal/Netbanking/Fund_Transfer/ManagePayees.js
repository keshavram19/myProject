import React from 'react'
import './FundTransfer.css'
import PaymentSidebar from '../Sidebar/PaymentsAndTransferSidebar'


const ManagePayees = () => {
  return (
    <div  className='container-fluid' style={{alignItems:'center', marginTop:"90px"}}>
    
          <div className='row' style={{marginTop:'20px'}}>
        <div className='col-3'>
          <PaymentSidebar />
            </div>
            <div style={{paddingLeft:'30px',alignItems:'center',}} className='col-9'>
              <div className='row'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <h6 style={{fontFamily:'poppins'}}>E.MANAGE PAYEES</h6>
                  <h6 style={{marginBottom:'-20px', marginTop:'20px',fontFamily:'poppins'}}>  PAYEMENTS & TRANSFER <span><i class="fa-solid fa-play"></i></span> <span>Manage Payees</span></h6>
                  <hr></hr>
                  <h6 style={{ color: 'orange',border:'1px solid black',borderTop:'1px solid black',padding:'5px',fontFamily:'poppins' }}>MANAGE PAYEES</h6>
                  <p style={{marginBottom:'4px' ,fontFamily:'poppins',fontWeight:'700'}}>Add Payee</p>
                  <div style={{ display: 'flex', columnGap: '20px' }}>
                    <div className='manage_payee' >
                      <h6 className='headers_manage' style={{ padding: '10px',fontFamily:'poppins' }}>ICICI Bank Payee</h6>
                      <div  className='btn-text'>
                        <div><button className='buttons_managepay'>ADD NOW</button></div>
                        <p  className='content_managepay'>To transer funds to other accounts in ICICI Bank</p>
                      </div>
                      
                    </div>
                    <div className='manage_payee' >
                      <h6  className='headers_manage' style={{ padding: '10px' ,fontFamily:'poppins'}}>Other Bank Payee</h6>
                      <div  className='btn-text'>
                        <div><button className='buttons_managepay'>ADD NOW</button></div>
                        <p  className='content_managepay'>To transer funds to  accounts of other banks using NEFT/RTGS/IMPS </p>
                      </div>
    
                    </div>
    
                  </div>
    
                </div>
              </div>
              <div className='row mt-4'>
                <div className='manage_payee' >
                  <h6  className='headers_manage' style={{ padding: '10px',fontFamily:'poppins' }}>ICICI Bank Virtual Payee</h6>
                  <div  className='btn-text' >
                    <div><button className='buttons_managepay'>ADD NOW</button></div>
                    <p  className='content_managepay'>To transer funds to  Virtual accounts in ICICI Bank (E-collections)
                    </p>
                  </div>
                </div>
              </div>
              <p style={{marginTop:'25px',marginBottom:'-20px',fontFamily:'poppins',fontWeight:'700',paddingLeft:'-5px'}}>My Payees</p>
              <div className='row mt-4'style={{display:'flex',columnGap:'20px'}} >
                <div className='manage_payee' >
                  <h6  className='headers_manage' style={{ padding: '10px',fontFamily:'poppins' }}>Confirm Payee for Fund Transfer </h6>
                  <div className='btn-text' >
                    <div  style={{display:'flex', alignItems:'center',fontFamily:'poppins'}}><button className='buttons_managepay'>CONFIRM</button></div>
                    <p className='content_managepay'>Enter the OTP to confirm the Payee registration for NEFT/RTGS/IMPS and Within ICICI transfers
                    </p>
                  </div>
    
                </div>
                <div className='manage_payee' >
                  <h6  className='headers_manage' style={{ padding: '10px',fontFamily:'poppins' }}>View/Delete Payee</h6>
                  <div className='btn-text'style={{marginTop:'15px'}} >
                    <div ><button className='buttons_managepay' style={{width:'70px'}}>VIEW</button></div>
                    <p className='content_managepay'>You can view/confirm/delete all payees registered by you
                    </p>
                  </div>
    
                </div>
              </div>
          </div>
        </div>
        </div>
      )
}

export default ManagePayees