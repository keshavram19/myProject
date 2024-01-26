import React from 'react';
import './Accounts.css';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';





const ChequeBookReq = () => {

  return (

    <div>

      <div className='bookrequest_container container-fluid ' style={{ marginTop: "90px" }}>
        <div className='row'>
          <div className='col-3'>
            <BankaccountSidebar />
          </div>
          <div className='col-9'>
            <div className="container-fluid bookrequest my-2">
              <div className="d-flex">
                <h3 className='check_book_heading'>Check Book Request</h3>
              </div>
              <div className="card">
                <h6 className="bookrequest_heading p-3">Request For New Check Book</h6>

                <div className="container-fluid pancard_details p-3">

                  <div className="row mt-1">
                    <div className="col-sm-4">
                      <label for="text">Select savings Account Number*</label>
                    </div>
                    <div className="col-sm-3">
                      <select className="form_input">
                        <option value="">Please select</option>
                        <option value="account1">Account1</option>
                        <option value="account2">Account2</option>
                        <option value="account3">Account3</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-sm-4">
                      <label for="text">Select preferred address for dispatch*</label>
                    </div>
                    <div className="col-sm-3">                    
                      <select className="form_input">
                        <option value="">Select</option>
                        <option value="address1">Address1</option>
                        <option value="address2">Address2</option>
                        <option value="address3">Address3</option>
                      </select>
                    </div>
                  </div>
                  <button className='back_button mt-5' size="sm">
                    BACK
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ChequeBookReq;