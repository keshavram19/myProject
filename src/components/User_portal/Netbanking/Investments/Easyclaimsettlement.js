import React from "react";
import './investments.css'
import { IoIosArrowDown } from "react-icons/io";
import { TbReport } from "react-icons/tb";
import { FcProcess } from "react-icons/fc";
import { FaHandHoldingUsd } from "react-icons/fa";


const EasyClaimSettlement = () => {
    return (
        <div className="container-fluid ">
            <div className="row">
                <div className="col-sm-12 mt-1">
                    <div className="card bg-light p-3">
                        <div>
                            <h5>Easy Claim Settlement Process</h5>
                        </div>
                        <div className="card easy_claim_cards p-3">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="d-flex align-items-center justifycontent-center">
                                    <p><TbReport className="easy_claim_settlement_logos" /></p>
                                    <p className="ml-1">Report</p>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                   <div className="d-flex align-items-center justifycontent-center" >
                                   <p><FcProcess className="easy_claim_settlement_logos" /></p>
                                    <p className="ml-1">Process</p>
                                   </div>
                                </div>
                                <div className="col-sm-4">
                                <div className="d-flex align-items-center justifycontent-center" >
                                    <p><FaHandHoldingUsd className="easy_claim_settlement_logos"  /></p>
                                    <p className="ml-1">Settle</p>
                                    </div>
                                </div>
                            </div>
                            <button className="easy_claim_settlement_button_down">
                            <IoIosArrowDown />
                            </button>
                        </div>
                            <div className="mt-4 easy_claim_settlement_para">
                                <h6>Conditions Apply</h6>
                                <div>
                                    <p>Disclaimer Royal Islamic Bank, as a corporate agent of Royal Islamic Prudential Life Insurance Co. Ltd. (Royal Islamic Prulife), is required to share your information with Royal Islamic Pruilfe in orderko complete your application. By clicking on "Buy Now", you provide your consent for the above, you shall enter the Royal Islamic Prulife website and authorize Royal Islamic Bank representatives to contact you for providing assistance towards the application process ADVT W/l/2257/2020-21</p>
                                </div>
                            </div>
                        <div className="text-center mt-4">
                            <button className="easy_claim_settlement_button">Buy Now*</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EasyClaimSettlement;