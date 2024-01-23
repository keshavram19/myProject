import React from 'react'
import './ChangeEmail.css'
import OverviewSidebar from '../../Sidebar/OverViewSidebar'

const ChangeEmail = () => {
  return (
    <div>
      <section className="container-fluid" style={{marginTop:"90px"}}>
        <div className="row">
        <div className="col-3">
            <div className="">
             <OverviewSidebar />
            </div>
          </div>
          <div className="col-9 change-email">
            <div className="changeemail-profile">
              <p>Update Email ID</p>
            </div>
            <div className="side-headings">
              <p className="heading">Request for email updation</p>
              <p className="d-flex align-items-center">
                <div className="">Select Account </div>
                <select className=" w-25">
                  <option className="" hidden>
                    select
                  </option>
                  <option className="">Bank Account</option>
                  <option className="">Deposit Account</option>
                  <option className="">Loan Account</option>
                  <option className="">Credit Card</option>

                </select>{" "}
              </p>
              <p className="d-flex align-items-center">
                <div className="">Existing email </div>
                <span className="">posilxxxxx@gmail.com</span>
              </p>
              <p className="d-flex align-items-center pb-4 m-0">
                <div className="">New Email </div>
                <input className="form-control w-25"></input>
              </p>

              <button>Update</button>
            </div>
            <div className="changeemail-instructions">
              <p>Post updation of email ID you will start getting monthly email statements for your updated email ID</p>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ChangeEmail
