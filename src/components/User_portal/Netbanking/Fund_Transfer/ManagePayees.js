import React from 'react'
import './FundTransfer.css'
import PaymentSidebar from '../Sidebar/PaymentsAndTransferSidebar'
import { Link } from 'react-router-dom'


const ManagePayees = () => {
  return (
    <div className='container-fluid' style={{ marginTop: "90px" }}>

      <div className='row '>
        <div className='col-3'>
          <PaymentSidebar />
        </div>
        <div className='col-9'>
        <div className='manage_pay_cards_manage'>
              <h4 className='p-3'>MANAGE PAYEES</h4>
            </div>

          <div className='card manage_pay_cards_manage p-3'>
            
            <div>
              <h5>Add Payee</h5>
            </div>
            <div className='manage_payee_cards_width'>
              <div className='row'>
                <div className='col-6'>
                  <div className='card p-3'>
                    <h6>Royal Islamic Bank Payee</h6>
                    <div className='manage_payee_all_buttons'>
                      <Link to='/user/fundtransfer/confirm-biller'><button className='manage_payee_buttons'>ADD NOW</button> </Link>
                      <p className='manage_payee_paragaph_button'>To transer funds to other accounts in Royal Islamic Bank</p>
                    </div>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='card p-3'>
                    <h6>Other Bank Payee</h6>
                    <div className='manage_payee_all_buttons'>
                      <Link to='/user/fundtransfer/confirm-payee'><button className='manage_payee_buttons'>ADD NOW</button></Link>
                      <p className='manage_payee_paragaph_button'>To transer funds to  accounts of other banks using NEFT/RTGS/IMPS</p>
                    </div>
                  </div>
                </div>
                <div className='col-6 mt-3'>
                  <div className='card p-3'>
                    <h6>Royal Islamic Bank Virtual Payee</h6>
                    <div className='manage_payee_all_buttons'>
                      <Link to='/user/fundtransfer/virtual-payee'><button className='manage_payee_buttons'>ADD NOW</button></Link>
                      <p className='manage_payee_paragaph_button'>To transer funds to  Virtual accounts in Royal Islamic Bank (E-collections)</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className='mt-3'>
                <h5>My Payees</h5>
              </div>
              <div className='row'>
                <div className='col-6'>
                  <div className='card p-3'>
                    <h6>Confirm Payee for Fund Transfer</h6>
                    <div className='manage_payee_all_buttons'>
                      <Link to=''> <button className='manage_payee_buttons'>CONFIRM</button></Link>
                      <p className='manage_payee_paragaph_button'>Enter the OTP to confirm the Payee registration for NEFT/RTGS/IMPS and Within Royal Islamic transfers</p>
                    </div>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='card p-3'>
                    <h6>View/Delete Payee</h6>
                    <div className='manage_payee_all_buttons'>
                      <Link to=''><button className='manage_payee_buttons'>VIEW</button></Link>
                      <p className='manage_payee_paragaph_button'>You can view/confirm/delete all payees registered by you</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManagePayees;