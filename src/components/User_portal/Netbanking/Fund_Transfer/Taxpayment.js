import React, {Link} from "react";
import './FundTransfer.css'

const TaxPayment = () => {
  return (
    <div className="TaxPayment_container_fluid">
      <div className="row">
       
        <div className="TaxPayment_all col-sm-12">
          <div className="TaxPayment_border">
            <div className="TaxPayment_pera">
              <h5 className="TaxPayment_pera_heading5">Tax Payment</h5>
              <p>
                Tax Payment As per the Income Tax Department guidelines, Royal Islamic Bank
                has now migrated to e-Pay Tax services available 
                on  <a href="#">www.incometax.gov.in</a> Click on "Proceed" for direct tax payments.
                Further for TDS on sale of property/Rent of property/Payment to
                Resident Contractors and Professionals, "Login' through the
                button next to 'Register' on the proceed page.
              </p>
              <div className="taxpayment_button">
              <button type="button" class="btn btn_taxpayment_button">
                Proceed
              </button>
              </div>
            </div>
          </div>
          <div className="TaxPayment_note">
            <p>
              <strong>**Please note:</strong> The "proceed" button is linked 
              to <a href="#">www.incometax.gov.in</a> prelogin page
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxPayment;