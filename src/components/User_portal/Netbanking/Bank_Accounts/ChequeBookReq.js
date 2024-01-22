import React from 'react';
import './Accounts.css';





const ChequeBookReq = () => {

  return (

    <div>
    
      <div className='bookrequest_container container-fluid mt-3'>
        <div className='row'>
        </div>
        <div className='col-sm-12'>
          <div className="container-fluid bookrequest my-2">
            <div className="d-flex">
              <h3>5.Check Book Request</h3>
            </div>
            <div className="card">
              <h6 className="bookrequest_heading p-3">Request For New Check Book</h6>

              <div className="container-fluid pancard_details p-3">

                <div className="row mt-1">
                  <div className="col-sm-4">
                    <label for="text">Select savings Account Number*</label>
                  </div>
                  <div className="col-sm-3">
                    <input type="number" placeholder='Please select' className="form_input" id="text" />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4">
                    <label for="text">Select preferred address for dispatch*</label>
                  </div>
                  <div className="col-sm-3">
                    <input type="number" placeholder='Select' className="form_input" id="text" />
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
  );
};

export default ChequeBookReq;
