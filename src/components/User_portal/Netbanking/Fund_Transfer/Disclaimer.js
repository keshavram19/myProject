import React from "react";
import './FundTransfer.css'
import PaymentSidebar from "../Sidebar/PaymentsAndTransferSidebar";

const Disclaimer = () => {
  return (
    <div className="Disclaimer_container_fluid container-fluid" style={{marginTop:"90px"}}>
      <div className="row">  
        <div className="col-3">
          <PaymentSidebar/>
        </div>
        <div className="col-9">
          <div className="Disclainer_pera">
            <div className="Disclainer_border">
              <h5 className="Disclainer_border_heading5">Disclaimer</h5>
              <p>
                This is to inform that by clicking on the hyper-link, you will
                be leaving Royal Islamic Bank.com and entering website operated by other
                parties. Such links are provided only for the convenience of the
                Client and Royal Islamic Bank does not control or endorse such websites,
                and is not responsible for their contents. The use of such
                website is also subject to the terms of use and other terms and
                guidelines, if any, contained within each such website. In the
                event that any of the terms contained herein conflict with the
                terms of use or other terms and guidelines contained within any
                such website, then the terms of use and other terms and
                guidelines for such website shall prevail. Thank you for
                visiting<a href="#"> www.royalislamicbank.com.</a>
              </p>
              <div className="Disclaimer_button">
                <button type="button" class="btn btn_Disclaimer_button">
                  I agree
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;