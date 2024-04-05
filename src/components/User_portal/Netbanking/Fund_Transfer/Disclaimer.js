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
              
              <p className="Disclaimer_pera_text">
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
              {/* <p>The contents (Information, material, suggestions, circulars) on this site have been provided for general information The information on this site does not constitute an invitation to invest in the shares of the Bank nor is it a promise of performance. The information and materials contained herein - and the terms, conditions and descriptions that appear - are subject to change. If the said content contains any mistakes, omissions, inaccuracies and typographical errors, etc. Royal Islamic Bank assumes no responsibility there of Those who would like to have additional information may contact the Bank. The information and materials contained herein, including text, graphics, links or other items - are provided "as is," and "as available".</p>
              <p>Royal Islamic Bank does not warrant the totality and absolute accuracy, adequacy or completeness of this information and materials and expressly disclaims any liability for errors or omissions in this information and materials herein. The Bank does not accept any legal liability what so ever based on any information contained herein.</p>
              <p>This is to inform that, at some places on next page, by clicking on the hyper-links, you will be leaving Royal Islamic Bank’s website and entering website operated by other third parties. Such links are provided only for the convenience of the Visitor. The contents of such websites are not verified or endorsed by Canara Bank and Canara Bank has no control and makes no warranty or representation about the contents available on such website. Any information provided or document uploaded will solely be the responsibility of the Visitor.</p>*/}
              <div className="Disclaimer_button"> 
                <button type="button" class="btn btn_Disclaimer_button" style={{background: "#2fb68e", color: "white"}}>
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